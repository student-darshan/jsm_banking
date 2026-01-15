// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://bf1ebb1ddd623acd9208603ffafe6d6b@o4510629955633152.ingest.us.sentry.io/4510629967757312",

  // Keep these for performance tracking
  tracesSampleRate: 1.0,

  // Keep these for session replay, but without the manual integration block below
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,

  // We removed the "integrations: [...]" block to fix the "Multiple instances" error.
});