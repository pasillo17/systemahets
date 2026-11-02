# Return Ratings and Reviews for a Specific Place

This capability guide covers how to retrieve and display ratings, reviews, and
required author attributions for a specific place using the Maps JavaScript API
(`Place` class).

## Prerequisites

-   **API Key & Billing**: An active Google Cloud project with the **Maps
    JavaScript API** and **Places API (New)** enabled.
-   **Place ID**: If fetching details for a specific place via
    `Place.fetchFields()`, you need a valid Place ID (obtained from
    Autocomplete, Text Search, or Nearby Search).
-   **Map ID**: Required if displaying the place location with an
    `AdvancedMarkerElement`.

> **Note for European Economic Area (EEA) developers**: If your billing address
> is in the European Economic Area, effective on 8 July 2025, the
> [Google Maps Platform EEA Terms of Service](https://cloud.google.com/terms/maps-platform/eea)
> will apply to your use of the Services. Functionality varies by region.
> [Learn more](https://developers.google.com/maps/comms/eea/faq).

--------------------------------------------------------------------------------

## Workflow: Fetching Place Ratings and Reviews

To retrieve ratings and reviews for a place:

1.  Dynamically import the `places` library via
    `google.maps.importLibrary('places')`.
2.  Instantiate a `Place` object using a known `id` (Place ID).
3.  Call `place.fetchFields()`, requesting `'reviews'` (for individual user
    reviews) and/or `'rating'` (for the overall place rating), along with any
    other desired fields like `'displayName'` or `'location'`.
4.  Read the `place.reviews` array (containing `Review` instances) and
    `place.rating` property.
5.  **Mandatory Requirement**: Whenever you display a review, you **must** also
    display the author attribution (`authorAttribution.displayName`,
    `authorAttribution.uri`, and optionally `authorAttribution.photoURI`).

### `Review` Object Properties

Each
[`Review`](https://developers.google.com/maps/documentation/javascript/reference/place#Review)
instance in `place.reviews` contains:

-   `authorAttribution`: An
    [`AuthorAttribution`](https://developers.google.com/maps/documentation/javascript/reference/place#AuthorAttribution)
    object containing:
    -   `displayName`: The author's name.
    -   `uri`: A URI for their Google Maps profile.
    -   `photoURI`: A URI for the author's photo.
-   `rating`: The numerical rating given by the user.
-   `publishTime`: A `Date` object indicating when the review was published.
-   `relativePublishTimeDescription`: Review time relative to the current time
    (e.g., `"a month ago"`).
-   `text`: The text content of the review.
-   `textLanguageCode`: The language code in which the review is written.

--------------------------------------------------------------------------------

## Complete Example: Displaying a Place Review in an InfoWindow

This example retrieves place details—including the overall rating and the first
place review—and displays the information inside an `InfoWindow` anchored to an
`AdvancedMarkerElement`.

### HTML (`index.html`)

```html
<!doctype html>
<html>
    <head>
        <title>Place Reviews</title>
        <link rel="stylesheet" type="text/css" href="./style.css" />
        <script type="module" src="./index.js"></script>
        <script>
            // prettier-ignore
            (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
                key: "GOOGLE_MAPS_API_KEY"
            });
        </script>
    </head>
    <body>
        <gmp-map
            center="42.349134, -71.083184"
            zoom="14"
            map-id="4504f8b37365c3d0"
            internal-usage-attribution-ids="gmp_git_agentskills_v1">
        </gmp-map>
    </body>
</html>
```

### CSS (`style.css`)

```css
/* Always set the map height explicitly to define the size of the container element. */
gmp-map {
    height: 100%;
}

/* Optional: Makes the sample page fill the window. */
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
}
```

### TypeScript (`index.ts`)

```typescript
let innerMap: google.maps.Map;
let infoWindow: google.maps.InfoWindow;
const mapElement = document.querySelector('gmp-map')!;

async function init() {
    // Import the needed libraries.
    const [{ InfoWindow }, { AdvancedMarkerElement }, { Place }] =
        await Promise.all([
            google.maps.importLibrary('maps') as Promise<google.maps.MapsLibrary>,
            google.maps.importLibrary('marker') as Promise<google.maps.MarkerLibrary>,
            google.maps.importLibrary('places') as Promise<google.maps.PlacesLibrary>,
        ]);

    innerMap = mapElement.innerMap;

    // Create a new Place instance.
    const place = new Place({
        id: 'ChIJpyiwa4Zw44kRBQSGWKv4wgA', // Faneuil Hall Marketplace, Boston, MA
    });

    // Call fetchFields, passing 'reviews', 'rating', and other needed fields.
    await place.fetchFields({
        fields: ['displayName', 'formattedAddress', 'location', 'rating', 'reviews'],
    });

    // Create an HTML container to safely populate DOM nodes.
    const content = document.createElement('div');
    const title = document.createElement('div');
    const address = document.createElement('div');
    const overallRating = document.createElement('div');
    const reviewRatingEl = document.createElement('div');
    const review = document.createElement('div');
    const authorLink = document.createElement('a');

    // If there are any reviews, display the first one.
    if (place.reviews && place.reviews.length > 0) {
        // Get info for the first review.
        const reviewRating = place.reviews[0].rating;
        const reviewText = place.reviews[0].text;
        const authorName = place.reviews[0].authorAttribution!.displayName;
        const authorUri = place.reviews[0].authorAttribution!.uri;

        // Safely populate the HTML using textContent to prevent XSS.
        title.textContent = place.displayName || '';
        title.style.fontWeight = 'bold';
        address.textContent = place.formattedAddress || '';
        overallRating.textContent = place.rating ? `Overall Rating: ${place.rating} stars` : '';
        reviewRatingEl.textContent = `Review Rating: ${reviewRating} stars`;
        review.textContent = reviewText || '';

        // Mandatory Author Attribution
        authorLink.textContent = authorName;
        authorLink.href = authorUri || '';
        authorLink.target = '_blank';

        content.appendChild(title);
        content.appendChild(address);
        if (place.rating) content.appendChild(overallRating);
        content.appendChild(reviewRatingEl);
        content.appendChild(review);
        content.appendChild(authorLink);
    } else {
        content.textContent = `No reviews were found for ${place.displayName}.`;
    }

    // Create an InfoWindow to display the review.
    infoWindow = new InfoWindow({
        content,
        ariaLabel: place.displayName,
    });

    // Add a marker.
    const marker = new AdvancedMarkerElement({
        map: innerMap,
        position: place.location,
        title: place.displayName,
    });

    innerMap.setCenter(place.location!);

    // Show the info window.
    infoWindow.open({
        anchor: marker,
        map: innerMap,
    });
}

void init();
```

### JavaScript (`index.js`)

```javascript
let innerMap;
let infoWindow;
const mapElement = document.querySelector('gmp-map');

async function init() {
    // Import the needed libraries.
    const [{ InfoWindow }, { AdvancedMarkerElement }, { Place }] =
        await Promise.all([
            google.maps.importLibrary('maps'),
            google.maps.importLibrary('marker'),
            google.maps.importLibrary('places'),
        ]);

    innerMap = mapElement.innerMap;

    // Create a new Place instance.
    const place = new Place({
        id: 'ChIJpyiwa4Zw44kRBQSGWKv4wgA', // Faneuil Hall Marketplace, Boston, MA
    });

    // Call fetchFields, passing 'reviews', 'rating', and other needed fields.
    await place.fetchFields({
        fields: ['displayName', 'formattedAddress', 'location', 'rating', 'reviews'],
    });

    // Create an HTML container.
    const content = document.createElement('div');
    const title = document.createElement('div');
    const address = document.createElement('div');
    const overallRating = document.createElement('div');
    const reviewRatingEl = document.createElement('div');
    const review = document.createElement('div');
    const authorLink = document.createElement('a');

    // If there are any reviews, display the first one.
    if (place.reviews && place.reviews.length > 0) {
        // Get info for the first review.
        const reviewRating = place.reviews[0].rating;
        const reviewText = place.reviews[0].text;
        const authorName = place.reviews[0].authorAttribution.displayName;
        const authorUri = place.reviews[0].authorAttribution.uri;

        // Safely populate the HTML.
        title.textContent = place.displayName || '';
        title.style.fontWeight = 'bold';
        address.textContent = place.formattedAddress || '';
        overallRating.textContent = place.rating ? `Overall Rating: ${place.rating} stars` : '';
        reviewRatingEl.textContent = `Review Rating: ${reviewRating} stars`;
        review.textContent = reviewText || '';

        // Mandatory Author Attribution
        authorLink.textContent = authorName;
        authorLink.href = authorUri || '';
        authorLink.target = '_blank';

        content.appendChild(title);
        content.appendChild(address);
        if (place.rating) content.appendChild(overallRating);
        content.appendChild(reviewRatingEl);
        content.appendChild(review);
        content.appendChild(authorLink);
    } else {
        content.textContent = `No reviews were found for ${place.displayName}.`;
    }

    // Create an InfoWindow to display the review.
    infoWindow = new InfoWindow({
        content,
        ariaLabel: place.displayName,
    });

    // Add a marker.
    const marker = new AdvancedMarkerElement({
        map: innerMap,
        position: place.location,
        title: place.displayName,
    });

    innerMap.setCenter(place.location);

    // Show the info window.
    infoWindow.open({
        anchor: marker,
        map: innerMap,
    });
}

void init();
```

--------------------------------------------------------------------------------

## Alternative Pattern: Programmatic `google.maps.Map` Initialization

If you are initializing a `google.maps.Map` directly on a `<div>` element
instead of using the `<gmp-map>` web component, pass
`internalUsageAttributionIds: ['gmp_git_agentskills_v1']` in your `MapOptions`:

Source:
[https://github.com/googlemaps/js-samples/blob/HEAD/samples/place-reviews/index.ts?utm_campaign=gmp_git_agentskills_v1](https://github.com/googlemaps/js-samples/blob/HEAD/samples/place-reviews/index.ts?utm_campaign=gmp_git_agentskills_v1)

```typescript
let map: google.maps.Map;
let centerCoordinates = { lat: 42.349134, lng: -71.083184 }; // Boston, MA
let infoWindow: google.maps.InfoWindow;

async function initMap() {
    const { Map, InfoWindow } = await google.maps.importLibrary('maps') as google.maps.MapsLibrary;
    const { AdvancedMarkerElement } = await google.maps.importLibrary('marker') as google.maps.MarkerLibrary;
    const { Place } = await google.maps.importLibrary('places') as google.maps.PlacesLibrary;

    map = new Map(document.getElementById('map') as HTMLElement, {
        center: centerCoordinates,
        zoom: 14,
        mapId: '4504f8b37365c3d0',
        internalUsageAttributionIds: ['gmp_git_agentskills_v1'],
    });

    const place = new Place({
        id: 'ChIJpyiwa4Zw44kRBQSGWKv4wgA', // Faneuil Hall Marketplace, Boston, MA
    });

    await place.fetchFields({
        fields: ['displayName', 'formattedAddress', 'location', 'reviews'],
    });

    let contentString = '';
    if (place.reviews && place.reviews.length > 0) {
        const reviewRating = place.reviews[0].rating;
        const reviewText = place.reviews[0].text;
        const authorName = place.reviews[0].authorAttribution!.displayName;
        const authorUri = place.reviews[0].authorAttribution!.uri;
        const authorPhoto = place.reviews[0].authorAttribution!.photoURI;

        contentString = `
            <div id="title"><b>${place.displayName}</b></div>
            <div id="address">${place.formattedAddress}</div>
            <a href="${authorUri}" target="_blank">Author: ${authorName}</a>
            <div id="rating">Rating: ${reviewRating} stars</div>
            <div id="review"><p>Review: ${reviewText}</p></div>`;
    } else {
        contentString = 'No reviews were found for ' + place.displayName + '.';
    }

    infoWindow = new InfoWindow({
        content: contentString,
        ariaLabel: place.displayName,
    });

    const marker = new AdvancedMarkerElement({
        map,
        position: place.location,
        title: place.displayName,
    });

    infoWindow.open({
        anchor: marker,
        map,
    });
}

initMap();
```

--------------------------------------------------------------------------------

## Alternative Pattern: Places UI Kit Web Components

If you are using the Places UI Kit web components (`<gmp-place-details>` or
`<gmp-place-details-compact>`), you can declaratively render ratings and reviews
using `<gmp-place-content-config>` with `<gmp-place-rating>` and
`<gmp-place-reviews>`.

Source:
[https://github.com/visgl/react-google-maps/blob/HEAD/examples/places-ui-kit/src/components/place-content-config.tsx?utm_campaign=gmp_git_agentskills_v1](https://github.com/visgl/react-google-maps/blob/HEAD/examples/places-ui-kit/src/components/place-content-config.tsx?utm_campaign=gmp_git_agentskills_v1)

```html
<gmp-place-details internal-usage-attribution-ids="gmp_git_agentskills_v1">
    <gmp-place-details-place-request place="ChIJpyiwa4Zw44kRBQSGWKv4wgA"></gmp-place-details-place-request>
    <gmp-place-content-config>
        <gmp-place-rating></gmp-place-rating>
        <gmp-place-reviews></gmp-place-reviews>
    </gmp-place-content-config>
</gmp-place-details>
```
