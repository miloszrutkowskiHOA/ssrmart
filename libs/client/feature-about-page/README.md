# About Page Feature

This feature demonstrates how to handle browser-specific libraries in an SSR (Server-Side Rendering) application using Angular.

## Components

### AboutPageComponent

A standalone component that showcases the about page with various sections including an interactive map.

### InteractiveMapComponent

A component that demonstrates proper SSR handling for browser-specific libraries like Google Maps.

## SSR Handling Strategy

### Key Concepts

1. **Platform Detection**: Uses `isPlatformBrowser()` to detect if the code is running in a browser environment
2. **Conditional Loading**: Only loads browser-specific libraries when running in the browser
3. **Fallback Content**: Provides meaningful fallback content for SSR environments
4. **Dynamic Script Loading**: Loads external scripts only when needed

### Implementation Details

#### 1. Platform Detection

```typescript
import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';

const platformId = inject(PLATFORM_ID);
const isBrowser = signal(isPlatformBrowser(platformId));
```

#### 2. Conditional Initialization

```typescript
ngOnInit(): void {
  if (this.isBrowser()) {
    this.loadGoogleMaps();
  } else {
    // In SSR, we don't need to load the map
    this.isLoading.set(false);
  }
}
```

#### 3. Dynamic Script Loading

```typescript
private loadGoogleMapsScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Maps API'));

    document.head.appendChild(script);
  });
}
```

#### 4. Fallback Content

The component provides a fallback UI for SSR environments:

- Shows location information
- Provides a link to Google Maps
- Maintains the same visual structure

### Benefits

1. **SEO Friendly**: Search engines can crawl the content even without JavaScript
2. **Performance**: No unnecessary script loading during SSR
3. **User Experience**: Users see meaningful content immediately
4. **Progressive Enhancement**: Map functionality is added when available

### Usage

```typescript
// In your component template
<ssrmart-interactive-map
  [latitude]="40.7128"
  [longitude]="-74.0060"
  [zoom]="15"
  [markerTitle]="'Our Store'"
  [markerDescription]="'Visit our flagship store!'">
</ssrmart-interactive-map>
```

### Configuration

To use this component with Google Maps:

1. **Get a Google Maps API Key**: Visit the [Google Cloud Console](https://console.cloud.google.com/)
2. **Update the API Key**: Replace `'YOUR_GOOGLE_MAPS_API_KEY'` in the `getGoogleMapsApiKey()` method
3. **Environment Variables**: In production, store the API key in environment variables

### Best Practices

1. **Always provide fallback content** for SSR environments
2. **Use platform detection** before accessing browser APIs
3. **Handle loading states** to provide good UX
4. **Clean up resources** in `ngOnDestroy()`
5. **Use TypeScript declarations** for external libraries
6. **Implement error handling** for script loading failures

### Testing

- **SSR Testing**: Verify the component renders correctly without browser APIs
- **Browser Testing**: Ensure the map loads and functions properly
- **Error Handling**: Test scenarios where the external library fails to load

This approach ensures your application works seamlessly in both SSR and client-side environments while providing a great user experience.
