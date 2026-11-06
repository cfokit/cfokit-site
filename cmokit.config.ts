import { defineConfig } from '@cmokit/cli';

export default defineConfig({
  analytics: {
    posthog: {
      // Your PostHog project key (Project settings → Project API key). It is public by design.
      key: 'phc_wkgSar6MctDW3eKuB56jD298N5wvMnGwRr8Gyw75ejEv',
      host: 'https://us.i.posthog.com',
      // Your project's id (Project settings → Project ID), which the deploy needs to create, start
      // and end the experiments below in PostHog.
      project: 687261,
    },
  },
  // No experiments yet: the site launches with one home page. To test a page, add an experiment
  // here (see CLAUDE.md). The deploy archives the starter's draft `landing` experiment in PostHog.
  experiments: [],
});
