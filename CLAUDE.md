# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev                        # Start dev server
yarn build                      # Generate Prisma client + Next.js build
yarn lint                       # ESLint via next lint

# Database
npx prisma migrate dev          # Create and apply a new migration
npx prisma migrate deploy       # Apply migrations in production
npx prisma studio               # Open Prisma GUI
npx prisma generate             # Regenerate Prisma client after schema changes

# Local DB (Docker)
docker-compose up -d            # Start PostgreSQL on port 5471
```

No test suite is configured — `yarn build` + `npx tsc --noEmit` are the closest verification steps.

## Architecture

**Next.js 15 App Router** with two top-level route groups:

- `src/app/(user)/` — public-facing site: home, auth flows, plans, checkout, payment outcomes
- `src/app/admin/` — admin panel: artists, artworks, CRM, orders (requires `ADMIN` role)
- `src/app/api/` — API routes for auth (`[...nextauth]`), reCAPTCHA verification, Stripe payment intents/webhooks, and Cloudinary signed uploads

**Authentication (`src/auth.ts`, `src/middleware.ts`)**  
NextAuth v5 (beta) with JWT session strategy and Prisma adapter. Three providers: Google OAuth, email+password (`email_password`), and OTP-based passwordless login (`email_otp`). Middleware enforces role-based access — `/admin/*` requires `ADMIN` role, `/account/*` requires any authenticated session.

Route definitions live in `src/routes.ts` and are consumed by the middleware.

**Database**  
PostgreSQL via Prisma. Schema lives in `prisma/schema.prisma`. Key models: `User`, `Account` (OAuth), `Otp`, `Token` (password reset), `Payment_Intent`, `Transaction`, `Template`. Local dev uses the Docker Compose PostgreSQL service (`DATABASE_URL` points to port 5471).

**Validation**  
All form schemas are Zod schemas in `src/schema/index.ts` (`LoginSchema`, `RegisterSchema`, `VerifyEmailSchema`, `ForgotPasswordSchema`, `ResetPasswordSchema`). Server actions in each auth route folder (`action.ts`) validate against these schemas before hitting the DB.

**UI Stack**  
Ant Design 5 (server-side rendering via `@ant-design/nextjs-registry` + `AntdRegistry`) + Tailwind CSS. Custom Ant Design theme in `src/theme/antd.ts`. Global styles in `src/styles/globals.css`. reCAPTCHA v3 is wrapped in `src/providers/RecaptchaProvider.tsx` and used at the root layout level.

**Payments**  
Stripe: `/api/payment/stripe/intent` creates payment intents; `/api/payment/stripe/webhook` handles fulfillment events and writes to `Transaction`/`Payment_Intent`.

**Media**  
Cloudinary for file storage. `/api/media/cloudinary-sign` generates signed upload parameters consumed by `src/components/FileUploader/`.

**Shared utilities**  
- `src/utils/encrypt.ts` — AES encryption helpers (async)  
- `src/utils/sendEmail.ts` / `sendOTP.ts` — Nodemailer-based email dispatch  
- `src/query/user.ts` — reusable Prisma queries (`getUserByEmail`, `getUserById`)  
- `src/lib/prismaClient.ts` — singleton Prisma client (`client`)
