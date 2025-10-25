import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { betterAuth } from "better-auth";
import { betterAuthOptions } from "./options";
import * as schema from "../../db/schema";

export const auth = (env: CloudflareBindings) => {
  // Use Hyperdrive for production, direct connection for local dev
  const connectionString = env.HYPERDRIVE?.connectionString || env.DATABASE_URL;

  if (!connectionString) {
    throw new Error(
      "No database connection string available. Check DATABASE_URL or HYPERDRIVE configuration."
    );
  }

  // Try a simpler connection approach
  const pool = new Pool({
    connectionString,
  });

  const db = drizzle(pool);

  return betterAuth({
    ...betterAuthOptions,
    database: drizzleAdapter(db, { provider: "pg", schema }),
    baseURL: env.BETTER_AUTH_URL,
    secret: env.BETTER_AUTH_SECRET,
  });
};
