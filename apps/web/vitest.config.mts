import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    env: {
      NEXT_PUBLIC_APP_ENV: "docs",
      NEXT_PUBLIC_SANITY_DATASET: "dataset",
      NEXT_PUBLIC_SANITY_PROJECT_ID: "projectId",
      NEXT_PUBLIC_SANITY_STUDIO_URL: "studioUrl",
      NEXT_PUBLIC_SANITY_API_VERSION: "apiVersion",
    },
    environment: "jsdom",
    passWithNoTests: true,
  },
});
