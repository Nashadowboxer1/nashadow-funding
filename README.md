# Nashadow Credit & Funding Consulting — Website

A marketing site for Nashadow Credit & Funding Consulting built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started
1. Install dependencies (requires Node.js 18+):
   ```bash
   npm install
   ```
   If install requests are blocked in your environment (403 or proxy errors), ensure access to `registry.npmjs.org` or mirror the packages via an approved registry.
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Lint the project:
   ```bash
   npm run lint
   ```
5. Visit `http://localhost:3000`.

## Available scripts
- `npm run dev` – start the development server
- `npm run build` – create a production build
- `npm run start` – run the production server
- `npm run lint` – run ESLint

## Pages
- `/` – Home
- `/about` – About
- `/services` – Services
- `/process` – How It Works
- `/contact` – Contact with client-side validated form
- `/disclosures` – Plain-language disclosures

## Notes
- The contact form uses a placeholder POST endpoint at `/api/contact` plus client-side validation. Replace it with your email/CRM/ticketing integration before launch.
- SEO helpers include `robots.txt` and `sitemap.xml` routes.
- Tailwind design system uses charcoal, indigo, and silver tones.

## Wiring the contact form
The form posts to `/api/contact`, which currently responds with a placeholder success message.

To connect to a real service:
1. Swap the logic in `app/api/contact/route.ts` with your integration (email API, CRM, or ticketing webhook).
2. If you need an external endpoint, update the `placeholderEndpoint` value in `components/ContactForm.tsx` to the new URL.
3. Add any required environment variables and reference them using `process.env`.

## Troubleshooting
- If `npm install` returns `403 Forbidden` or similar registry errors, your environment may block access to `registry.npmjs.org`. Configure an approved proxy/registry mirror or install dependencies from a cached source.
- If linting or builds fail due to missing dependencies, ensure `npm install` completes successfully before running scripts.
