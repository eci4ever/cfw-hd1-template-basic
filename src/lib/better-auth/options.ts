import { BetterAuthOptions } from "better-auth";

export const betterAuthOptions: BetterAuthOptions = {
  appName: "Cloudflare Auth Worker",
  basePath: "/api/auth",
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false, // Disable for local dev
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  trustedOrigins: ["http://localhost:3000", "http://localhost:8801"],
};
