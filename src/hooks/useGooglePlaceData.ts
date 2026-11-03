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

const SYSTEMA_PLACE_ID = "ChIJSX_K_fvnopURrkKpehETtVo";
const SYSTEMA_GOOGLE_MAPS_URI =
  "https://maps.google.com/?cid=6536151399991427758";

/**
 * Datos verificados obtenidos de Google Maps Platform — Places API (New)
 * para "Systema Hets Diego Ledesma" (Place ID: ChIJSX_K_fvnopURrkKpehETtVo).
 * Garantizan que las reseñas reales con su AuthorAttribution oficial se muestren
 * de inmediato tanto en el entorno local como en el sitio publicado (GitHub Pages / dominio propio),
 * incluso antes de que cargue el SDK o si la clave de demostración está restringida por dominio.
 */
const INITIAL_PLACE_DATA_BY_LANG: Record<"es" | "en", CachedPlaceData> = {
  es: {
    placeName: "Systema Hets Diego Ledesma",
    placeRating: 5.0,
    userRatingCount: 43,
    photos: [],
    reviews: [
      {
        id: "ChdDSUhNMG9nS0VJQ0FnSUQ5OC02TXN3RRAB",
        authorName: "Martin Sosa",
        authorUri:
          "https://www.google.com/maps/contrib/103616345979393434973/reviews",
        authorPhotoUri:
          "https://lh3.googleusercontent.com/a/ACg8ocLoaxf6YmHP2oHfC-jBAIme8EoYG2X8ETz1qRoF3KinQzBWSXXC=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        relativeTime: "",
        text: "Excelente espacio de aprendizaje en esta Actividad/Arte de origen Ruso, explorar el cuerpo, aprender a caer al suelo(rodar), absorber golpes, defensa personal, descubrir habilidades a través de lo simple. Cada clase vale tremendamente ! Y sobre todo excepcional calidez humana !!.",
        googleMapsUri:
          "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUQ5OC02TXN3RRAB!2m1!1s0x95a2e7fbfdca7f49:0x5ab513117aa942ae",
      },
      {
        id: "Ci9DQUlRQUNvZENodHljRjlvT2tWeWVGcENUWE5DYTFwTmJFdFhTMEpoYlU5Tk1YYxAB",
        authorName: "Daniel E. Muñoz",
        authorUri:
          "https://www.google.com/maps/contrib/116105273897513664848/reviews",
        authorPhotoUri:
          "https://lh3.googleusercontent.com/a-/ALV-UjWRRIez01DT1y_NXNt4ERnudwI14sCZmAXX8x_oNp9igqMk9lZIIw=s128-c0x00000000-cc-rp-mo-ba2",
        rating: 5,
        relativeTime: "",
        text: "Diego, un crack ... Los muchachos del grupo de 10 , un equipo formidable. Si buscan formación de autodefensa adaptada a cualquiera edad y condición física , Systema es la solución.",
        googleMapsUri:
          "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2tWeWVGcENUWE5DYTFwTmJFdFhTMEpoYlU5Tk1YYxAB!2m1!1s0x95a2e7fbfdca7f49:0x5ab513117aa942ae",
      },
      {
        id: "ChZDSUhNMG9nS0VJQ0FnSUNxMHFuSEVREAE",
        authorName: "Shashka88 Cnctema",
        authorUri:
          "https://www.google.com/maps/contrib/116924242082869738653/reviews",
        authorPhotoUri:
          "https://lh3.googleusercontent.com/a/ACg8ocK8LyvC0LCU9k6cRKus5BzanOes5Ia2upd41RdQ1fUIrpOTyqc=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        relativeTime: "",
        text: "Las clases de systema me ayudaron en mí bienestar físico y psíquico gracias a los fundamentos (postura, relajación respiración y movimiento). Diego Ledesma siempre da las clases con muy buena onda, es un gran instructor y excelente persona. Recomiendo probar este arte marcial por lo menos una vez. Realmente es muy útil.\nLaureano.",
        googleMapsUri:
          "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSUNxMHFuSEVREAE!2m1!1s0x95a2e7fbfdca7f49:0x5ab513117aa942ae",
      },
      {
        id: "ChdDSUhNMG9nS0VJQ0FnSUNjXy1YMnp3RRAB",
        authorName: "Profe Pepe Maldonado",
        authorUri:
          "https://www.google.com/maps/contrib/106452804545083180509/reviews",
        authorPhotoUri:
          "https://lh3.googleusercontent.com/a-/ALV-UjW5KWknDhQj5clVWlBkLQeeoA3F4l3FXv57HGoO-Ok4OI1ipCk=s128-c0x00000000-cc-rp-mo-ba4",
        rating: 5,
        relativeTime: "",
        text: "Soy Profe de Informatica y por poco estado fisico me lesione y despues de la reabilitacion entre en SYSTEMA LA PLATA con Diego Ledesma y desde el principio pude ver que con mi poco estado físico podía hacer ejercicios y movimientos de defensa que en otras artes marciales me tomarían años. Con 52 años me siento muy bien (foto), y puedo hacer cosas imposibles de pensar que podría hacer a los 30 años.... SYSTEMA Arte Marcial Rusa y muy buena para el espíritu",
        googleMapsUri:
          "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUNjXy1YMnp3RRAB!2m1!1s0x95a2e7fbfdca7f49:0x5ab513117aa942ae",
      },
      {
        id: "ChZDSUhNMG9nS0VJQ0FnSUN1d2RIRGJnEAE",
        authorName: "Germán",
        authorUri:
          "https://www.google.com/maps/contrib/105089478143621777242/reviews",
        authorPhotoUri:
          "https://lh3.googleusercontent.com/a/ACg8ocJYkfIKRmwwieoBSQrdLBAJ3Gd_B4BiuylmVLkqLDO7QNCzjg=s128-c0x00000000-cc-rp-mo-ba4",
        rating: 5,
        relativeTime: "",
        text: "La verdad que me sorprendió gratamente,por que yo praticaba otras arte marciales,pero este estilo es muy muy bueno y mezcla varias artes marciales y las convierte en esta fascinante actividad.\n100% recomendable.\nPD:el profe Diego ledezma es muy bueno enseñando y tiene muy buena onda.",
        googleMapsUri:
          "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSUN1d2RIRGJnEAE!2m1!1s0x95a2e7fbfdca7f49:0x5ab513117aa942ae",
      },
    ],
  },
  en: {
    placeName: "Systema Hets Diego Ledesma",
    placeRating: 5.0,
    userRatingCount: 43,
    photos: [],
    reviews: [
      {
        id: "ChdDSUhNMG9nS0VJQ0FnSUQ5OC02TXN3RRAB",
        authorName: "Martin Sosa",
        authorUri:
          "https://www.google.com/maps/contrib/103616345979393434973/reviews",
        authorPhotoUri:
          "https://lh3.googleusercontent.com/a/ACg8ocLoaxf6YmHP2oHfC-jBAIme8EoYG2X8ETz1qRoF3KinQzBWSXXC=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        relativeTime: "",
        text: "An excellent learning space for this Russian-origin activity/art, exploring the body, learning to fall to the ground (roll), absorb blows, self-defense, and discovering skills through simplicity. Every class is incredibly worthwhile! And above all, the human warmth is exceptional!",
        googleMapsUri:
          "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUQ5OC02TXN3RRAB!2m1!1s0x95a2e7fbfdca7f49:0x5ab513117aa942ae",
      },
      {
        id: "Ci9DQUlRQUNvZENodHljRjlvT2tWeWVGcENUWE5DYTFwTmJFdFhTMEpoYlU5Tk1YYxAB",
        authorName: "Daniel E. Muñoz",
        authorUri:
          "https://www.google.com/maps/contrib/116105273897513664848/reviews",
        authorPhotoUri:
          "https://lh3.googleusercontent.com/a-/ALV-UjWRRIez01DT1y_NXNt4ERnudwI14sCZmAXX8x_oNp9igqMk9lZIIw=s128-c0x00000000-cc-rp-mo-ba2",
        rating: 5,
        relativeTime: "",
        text: "Diego, a star... The guys in the group of 10, a formidable team. If you're looking for self-defense training adapted to any age and fitness level, Systema is the solution.",
        googleMapsUri:
          "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2tWeWVGcENUWE5DYTFwTmJFdFhTMEpoYlU5Tk1YYxAB!2m1!1s0x95a2e7fbfdca7f49:0x5ab513117aa942ae",
      },
      {
        id: "ChZDSUhNMG9nS0VJQ0FnSUNxMHFuSEVREAE",
        authorName: "Shashka88 Cnctema",
        authorUri:
          "https://www.google.com/maps/contrib/116924242082869738653/reviews",
        authorPhotoUri:
          "https://lh3.googleusercontent.com/a/ACg8ocK8LyvC0LCU9k6cRKus5BzanOes5Ia2upd41RdQ1fUIrpOTyqc=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        relativeTime: "",
        text: "Systema classes have helped my physical and mental well-being thanks to the fundamentals (posture, relaxation, breathing, and movement). Diego Ledesma always teaches with a great attitude; he's a fantastic instructor and an excellent person. I recommend trying this martial art at least once. It's truly very beneficial.\n\nLaureano",
        googleMapsUri:
          "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSUNxMHFuSEVREAE!2m1!1s0x95a2e7fbfdca7f49:0x5ab513117aa942ae",
      },
      {
        id: "ChdDSUhNMG9nS0VJQ0FnSUNjXy1YMnp3RRAB",
        authorName: "Profe Pepe Maldonado",
        authorUri:
          "https://www.google.com/maps/contrib/106452804545083180509/reviews",
        authorPhotoUri:
          "https://lh3.googleusercontent.com/a-/ALV-UjW5KWknDhQj5clVWlBkLQeeoA3F4l3FXv57HGoO-Ok4OI1ipCk=s128-c0x00000000-cc-rp-mo-ba4",
        rating: 5,
        relativeTime: "",
        text: "I'm an IT teacher, and due to poor physical condition, I injured myself. After rehabilitation, I joined SYSTEMA LA PLATA with Diego Ledesma, and from the beginning, I could see that even with my limited physical fitness, I could do exercises and self-defense movements that would take me years to master in other martial arts. At 52, I feel great (see photo), and I can do things I never imagined I could do at 30... SYSTEMA is a Russian martial art and very good for the spirit.",
        googleMapsUri:
          "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUNjXy1YMnp3RRAB!2m1!1s0x95a2e7fbfdca7f49:0x5ab513117aa942ae",
      },
      {
        id: "ChZDSUhNMG9nS0VJQ0FnSUN1d2RIRGJnEAE",
        authorName: "Germán",
        authorUri:
          "https://www.google.com/maps/contrib/105089478143621777242/reviews",
        authorPhotoUri:
          "https://lh3.googleusercontent.com/a/ACg8ocJYkfIKRmwwieoBSQrdLBAJ3Gd_B4BiuylmVLkqLDO7QNCzjg=s128-c0x00000000-cc-rp-mo-ba4",
        rating: 5,
        relativeTime: "",
        text: "I was pleasantly surprised, because I practiced other martial arts, but this style is very, very good and blends several martial arts into this fascinating activity.\n\n100% recommended.\nP.S.: Professor Diego Ledezma is a very good teacher and has a great personality.",
        googleMapsUri:
          "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSUN1d2RIRGJnEAE!2m1!1s0x95a2e7fbfdca7f49:0x5ab513117aa942ae",
      },
    ],
  },
};

const placeCacheByLang: Record<string, CachedPlaceData> = {};
const inFlightByLang: Record<string, Promise<CachedPlaceData | null> | undefined> = {};

export function useGooglePlaceData(lang: string) {
  const placesLib = useMapsLibrary("places");
  const langKey: "es" | "en" = lang === "en" ? "en" : "es";

  const initialData =
    placeCacheByLang[langKey] || INITIAL_PLACE_DATA_BY_LANG[langKey];

  const [placeName, setPlaceName] = useState<string>(initialData.placeName);
  const [placeRating, setPlaceRating] = useState<number | null>(
    initialData.placeRating
  );
  const [userRatingCount, setUserRatingCount] = useState<number | null>(
    initialData.userRatingCount
  );
  const [reviews, setReviews] = useState<LiveGoogleReview[]>(
    initialData.reviews
  );
  const [photos, setPhotos] = useState<LiveGooglePlacePhoto[]>(
    initialData.photos
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const currentFallback =
      placeCacheByLang[langKey] || INITIAL_PLACE_DATA_BY_LANG[langKey];
    setPlaceName(currentFallback.placeName);
    setPlaceRating(currentFallback.placeRating);
    setUserRatingCount(currentFallback.userRatingCount);
    setReviews(currentFallback.reviews);
    setPhotos(currentFallback.photos);
    setIsLoading(false);

    if (placeCacheByLang[langKey] || !placesLib) {
      return;
    }

    async function loadPlaceData(): Promise<CachedPlaceData | null> {
      if (!placesLib) return null;

      try {
        // See https://developers.google.com/maps/documentation/javascript/place-details?utm_campaign=gmp_mcp_codeassist_v1_aistudio
        const place = new placesLib.Place({
          id: SYSTEMA_PLACE_ID,
          requestedLanguage: langKey,
          requestedRegion: "ar",
        });

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

        const mappedReviews: LiveGoogleReview[] =
          Array.isArray(place.reviews) && place.reviews.length > 0
            ? place.reviews.map((rev: any, idx: number) => ({
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
                  SYSTEMA_GOOGLE_MAPS_URI,
              }))
            : INITIAL_PLACE_DATA_BY_LANG[langKey].reviews;

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
              .map((photo: any, idx: number) => {
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
                      SYSTEMA_GOOGLE_MAPS_URI,
                  } as LiveGooglePlacePhoto;
                } catch {
                  return null;
                }
              })
              .filter((p: LiveGooglePlacePhoto | null): p is LiveGooglePlacePhoto => p !== null)
          : [];

        const result: CachedPlaceData = {
          placeName:
            place.displayName || INITIAL_PLACE_DATA_BY_LANG[langKey].placeName,
          placeRating:
            typeof place.rating === "number"
              ? place.rating
              : INITIAL_PLACE_DATA_BY_LANG[langKey].placeRating,
          userRatingCount:
            typeof place.userRatingCount === "number"
              ? place.userRatingCount
              : INITIAL_PLACE_DATA_BY_LANG[langKey].userRatingCount,
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
        return null;
      }
    }

    if (!inFlightByLang[langKey]) {
      inFlightByLang[langKey] = loadPlaceData().finally(() => {
        inFlightByLang[langKey] = undefined;
      });
    }

    void inFlightByLang[langKey]?.then((data) => {
      if (!isMounted || !data) return;
      setPlaceName(data.placeName);
      setPlaceRating(data.placeRating);
      setUserRatingCount(data.userRatingCount);
      setReviews(data.reviews);
      setPhotos(data.photos);
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
