/// <reference types="@remix-run/dev" />
import "@remix-run/cloudflare";
/// <reference types="@cloudflare/workers-types" />
import type { AppLoadContext as OriginalAppLoadContext } from "@remix-run/cloudflare";

declare global {
  /**
   * A global `process` object is only available during build to access NODE_ENV.
   */
  const process: { env: { NODE_ENV: "production" | "development" } };

  /**
   * Declare expected Env parameter in fetch handler.
   */
  interface Env {
    ENVIRONMENT: "production" | "development";
    CLERK_PUBLISHABLE_KEY: string;
    CLERK_SECRET_KEY: string;
    CLERK_AFTER_SIGN_IN_URL: string;
    CLERK_AFTER_SIGN_UP_URL: string;
  }
}

declare module "@remix-run/cloudflare" {
  export interface AppLoadContext extends OriginalAppLoadContext {
    env: Env;
  }
}
