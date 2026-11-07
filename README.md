# cfokit.ai

The CFOKit marketing site: a static Astro site on GitHub Pages, with a CMOkit edge (a Cloudflare
Worker) in front of it that records sign-ups and runs landing-page experiments on PostHog.

## Pages

- `/`: during the closed beta. Running CFOKit yourself, contributing, and a closed beta signup
  (`beta_signup`). The hosted offers (the hosted waitlist and using CFOKit from your own Claude
  with an account at app.cfokit.ai) wait on the `hosted-offers` branch until hosted CFOKit is
  ready for users.
- `/self-host/`: for developers and contributors, with a release-email form (`releases_signup`).
- `/privacy/` and `/terms/`: drafts for legal review, marked as not in effect.

A form with an email field records its event, and the address, on the visitor's person in PostHog.

## Design system

The look is the CFOKit design system from `cfokit/cfokit`, not one of the site's own:
`src/design` holds its theme, fonts and brand marks, copied by `npm run design:sync -- <path to a
cfokit checkout>`, which records the commit in `src/design/SOURCE`. `src/components` mirrors the few
web components the site needs, with the same classes. Change the design system in `cfokit/cfokit`,
then sync; never edit `src/design` here.

## Work on it

```
npm install
npm run dev
```

See `CLAUDE.md` for how experiments, variants and deployment work.
