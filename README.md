# Cloudflare Auth Worker

A Cloudflare Workers template with Better Auth authentication system, built with Hono and Drizzle ORM.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Generate Cloudflare Types

```bash
npm run cf-typegen
```

### 3. Database Setup

Create a PostgreSQL database and configure environment variables:

```bash
cp .dev.vars.example .dev.vars
```

Edit `.dev.vars` with your database credentials:

```env
DATABASE_URL=postgresql://user:password@host:port/database
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=http://localhost:8801
```

Generate and run migrations:

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

### 4. Build & Deploy

**Development:**

```bash
npm run dev
```

**Production:**

```bash
npm run deploy
```

### 5. Test Authentication

Use the provided `test-auth.http` file or test endpoints:

- **Sign Up:** `POST /api/auth/sign-up`
- **Sign In:** `POST /api/auth/sign-in`
- **Sign Out:** `POST /api/auth/sign-out`

## Project Structure

```
src/
├── db/schema.ts          # Database schema
├── lib/better-auth/      # Auth configuration
└── index.ts              # Worker entry point
```

## Tech Stack

- **Runtime:** Cloudflare Workers
- **Framework:** Hono
- **Auth:** Better Auth
- **Database:** PostgreSQL with Drizzle ORM
- **Deployment:** Wrangler CLI

## Environment Variables

| Variable             | Description                  | Required |
| -------------------- | ---------------------------- | -------- |
| `DATABASE_URL`       | PostgreSQL connection string | ✅       |
| `BETTER_AUTH_SECRET` | Authentication secret key    | ✅       |
| `BETTER_AUTH_URL`    | Base URL for auth endpoints  | ✅       |

## Scripts

- `npm run dev` - Start development server
- `npm run deploy` - Deploy to Cloudflare
- `npm run cf-typegen` - Generate Cloudflare types
- `npm run format` - Format code with Prettier
