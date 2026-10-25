import { defineConfig } from '@cmokit/cli';

export default defineConfig({
  analytics: {
    // Your PostHog project key (Project settings → Project API key). It is public by design.
    posthog: { key: 'phc_wkgSar6MctDW3eKuB56jD298N5wvMnGwRr8Gyw75ejEv', host: 'https://us.i.posthog.com' },
  },
  experiments: [
    {
      // A multivariate feature flag in PostHog with variants `control` and `b`, attached to an
      // experiment whose goal is the `signup` event.
      flag: 'landing',
      // The page under experiment. It is the control.
      path: '/',
      // Every other variant, as the page that holds it.
      variants: { b: '/variants/landing/b/' },
    },
  ],
});
