import { BetterAuthOptions } from "better-auth";

export const betterAuthOptions: BetterAuthOptions = {
  appName: "Cloudflare Auth Worker",
  basePath: "/api/auth",
  emailAndPassword: {
    enabled: true,
  },

  // .... More options
};
