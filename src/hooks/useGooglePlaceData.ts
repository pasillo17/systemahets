import { useState, useEffect } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { SITE_CONFIG } from "../config/siteConfig";

export interface LiveGoogleReview {
  id: string;
  authorName: string;
  authorUri: string;
  authorPhotoUri: string;
  rating: number;
  relativeTime: string;
  text: string;
  googleMapsUri?: string;
}

export interface LiveGooglePlacePhoto {
  id: string;
  url: string;
  authorName?: string;
  authorUri?: string;
  googleMapsUri?: string;
}

interface CachedPlaceData {
  placeName: string;
  placeRating: number | null;
  userRatingCount: number | null;
  reviews: LiveGoogleReview[];
  photos: LiveGooglePlacePhoto[];
}

const placeCacheByLang: Record<string, CachedPlaceData> = {};
const inFlightByLang: Record<string, Promise<CachedPlaceData | null> | undefined> = {};

export function useGooglePlaceData(lang: string) {
  const placesLib = useMapsLibrary("places");
  const langKey = lang === "en" ? "en" : "es";

  const cached = placeCacheByLang[langKey];

  const [placeName, setPlaceName] = useState<string>(
    cached?.placeName || SITE_CONFIG.sedePrincipal.nombre
  );
  const [placeRating, setPlaceRating] = useState<number | null>(
    cached?.placeRating ?? null
  );
  const [userRatingCount, setUserRatingCount] = useState<number | null>(
    cached?.userRatingCount ?? null
  );
  const [reviews, setReviews] = useState<LiveGoogleReview[]>(
    cached?.reviews || []
  );
  const [photos, setPhotos] = useState<LiveGooglePlacePhoto[]>(
    cached?.photos || []
  );
  const [isLoading, setIsLoading] = useState<boolean>(!cached);

  useEffect(() => {
    let isMounted = true;

    if (placeCacheByLang[langKey]) {
      const data = placeCacheByLang[langKey];
      setPlaceName(data.placeName);
      setPlaceRating(data.placeRating);
      setUserRatingCount(data.userRatingCount);
      setReviews(data.reviews);
      setPhotos(data.photos);
      setIsLoading(false);
      return;
    }

    if (!placesLib) return;

    async function loadPlaceData(): Promise<CachedPlaceData | null> {
      if (!placesLib) return null;

      try {
        // See https://developers.google.com/maps/documentation/javascript/place-search?utm_campaign=gmp_mcp_codeassist_v1_aistudio
        const request: google.maps.places.SearchByTextRequest = {
          textQuery: SITE_CONFIG.sedePrincipal.placeSearchQuery,
          fields: [
            "id",
            "displayName",
            "formattedAddress",
            "rating",
            "userRatingCount",
            "reviews",
            "photos",
            "googleMapsURI",
          ],
          locationBias: {
            lat: SITE_CONFIG.sedePrincipal.coordenadas.lat,
            lng: SITE_CONFIG.sedePrincipal.coordenadas.lng,
          },
          language: langKey,
          region: "ar",
          maxResultCount: 1,
          internalUsageAttributionIds: ["gmp_mcp_codeassist_v1_aistudio"],
        };

        const response = await placesLib.Place.searchByText(request);
        const place = response?.places?.[0];

        if (!place) {
          return null;
        }

        // Fetch fields explicitly if reviews or photos were not populated in initial response
        if (
          !place.reviews ||
          place.reviews.length === 0 ||
          !place.photos ||
          place.photos.length === 0
        ) {
          await place.fetchFields({
            fields: [
              "displayName",
              "rating",
              "userRatingCount",
              "reviews",
              "photos",
              "googleMapsURI",
            ],
          });
        }

        const mappedReviews: LiveGoogleReview[] = Array.isArray(place.reviews)
          ? place.reviews.map((rev, idx) => ({
              id: `google-review-${idx}-${
                rev.publishTime ? rev.publishTime.getTime() : idx
              }`,
              authorName: rev.authorAttribution?.displayName || "Google User",
              authorUri:
                rev.authorAttribution?.uri ||
                SITE_CONFIG.sedePrincipal.googleShareUrl,
              authorPhotoUri: rev.authorAttribution?.photoURI || "",
              rating: typeof rev.rating === "number" ? rev.rating : 5,
              relativeTime: rev.relativePublishTimeDescription || "",
              text: rev.text || rev.originalText || "",
              googleMapsUri:
                rev.googleMapsURI ||
                place.googleMapsURI ||
                SITE_CONFIG.sedePrincipal.googleShareUrl,
            }))
          : [];

        const excludedPhotoIndices = new Set([0, 3, 8, 9]);
        const excludedPhotoTokens = [
          "CIABIhCEQvApotJJfzFmkUSptj_K",
          "CIHM0ogKEICAgIC8-6i5XA",
          "CIHM0ogKEICAgIC8-8iwEg",
          "CIHM0ogKEICAgIC8-5jmmQE",
          "AV-0GLfPoaaVVr49",
          "AV-0GLdWSMgEbUp9",
          "AV-0GLc-COO1N812",
          "AV-0GLf3sTJ_G67j",
        ];

        const mappedPhotos: LiveGooglePlacePhoto[] = Array.isArray(place.photos)
          ? place.photos
              .map((photo, idx) => {
                try {
                  if (excludedPhotoIndices.has(idx)) return null;
                  if (
                    (photo.widthPx === 1122 && photo.heightPx === 1402) ||
                    (photo.widthPx === 1024 && photo.heightPx === 768)
                  ) {
                    return null;
                  }
                  const url = photo.getURI({ maxWidth: 1200, maxHeight: 900 });
                  if (!url) return null;
                  const metaString = `${url} ${photo.googleMapsURI || ""} ${
                    (photo as unknown as { flagContentURI?: string })
                      .flagContentURI || ""
                  }`;
                  if (
                    excludedPhotoTokens.some((token) =>
                      metaString.includes(token)
                    )
                  ) {
                    return null;
                  }
                  const attr = photo.authorAttributions?.[0];
                  return {
                    id: `google-photo-${idx}`,
                    url,
                    authorName: attr?.displayName || undefined,
                    authorUri:
                      attr?.uri || SITE_CONFIG.sedePrincipal.googleShareUrl,
                    googleMapsUri:
                      photo.googleMapsURI ||
                      place.googleMapsURI ||
                      SITE_CONFIG.sedePrincipal.googleShareUrl,
                  } as LiveGooglePlacePhoto;
                } catch {
                  return null;
                }
              })
              .filter((p): p is LiveGooglePlacePhoto => p !== null)
          : [];

        const result: CachedPlaceData = {
          placeName: place.displayName || SITE_CONFIG.sedePrincipal.nombre,
          placeRating: typeof place.rating === "number" ? place.rating : null,
          userRatingCount:
            typeof place.userRatingCount === "number"
              ? place.userRatingCount
              : null,
          reviews: mappedReviews,
          photos: mappedPhotos,
        };

        placeCacheByLang[langKey] = result;
        return result;
      } catch (err) {
        const msg = String(err);
        if (
          msg.includes("OVER_QUERY_LIMIT") ||
          msg.includes("RESOURCE_EXHAUSTED") ||
          msg.includes("QuotaExceededError") ||
          msg.includes("429")
        ) {
          window.dispatchEvent(new CustomEvent("gmp-quota-exceeded"));
        }
        console.error("Error fetching Google Maps Place data:", err);
        return null;
      }
    }

    setIsLoading(true);

    if (!inFlightByLang[langKey]) {
      inFlightByLang[langKey] = loadPlaceData().finally(() => {
        inFlightByLang[langKey] = undefined;
      });
    }

    void inFlightByLang[langKey]?.then((data) => {
      if (!isMounted) return;
      if (data) {
        setPlaceName(data.placeName);
        setPlaceRating(data.placeRating);
        setUserRatingCount(data.userRatingCount);
        setReviews(data.reviews);
        setPhotos(data.photos);
      }
      setIsLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, [placesLib, langKey]);

  return {
    placeName,
    placeRating,
    userRatingCount,
    reviews,
    photos,
    isLoading,
  };
}
