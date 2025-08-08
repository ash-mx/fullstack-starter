import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
import { CONFIG_PATH } from "./src/lib/config";

config({ path: CONFIG_PATH });

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema/schema.ts",
  dialect: "postgresql",
  casing: "snake_case",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
