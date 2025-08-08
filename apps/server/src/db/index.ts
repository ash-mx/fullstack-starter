import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema/schema";
import { CONFIG_PATH } from "../lib/config";

config({ path: CONFIG_PATH });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle({
  client: pool,
  schema: schema,
  casing: "snake_case",
});
