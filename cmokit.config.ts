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
  // How messages to leads are sent, through SendGrid. Replies to hello@cfokit.ai reach a person.
  messaging: {
    // An address on a domain authenticated in SendGrid (Settings → Sender Authentication).
    from: 'hello@cfokit.ai',
    fromName: 'CFOKit',
    // The postal address every message carries, as anti-spam law requires.
    address: 'POSTAL_ADDRESS_TO_CONFIRM',
    // The unsubscribe group every message belongs to (Suppressions → Unsubscribe Groups).
    sendgrid: { unsubscribeGroup: 0 },
  },
  // A closed beta signup gets one welcome email, at once. Each message is messages/<template>.md.
  sequences: [
    {
      name: 'beta-welcome',
      start: 'beta_signup',
      messages: [{ template: 'welcome', after: '0m' }],
    },
  ],
});
