# Zalos landing page

Use `drop-in/` to add the page to an existing Next.js App Router project. To run it as a separate site, use the app at this repository's root; [README.md](README.md) has the template, development, and deployment instructions.

## Add to an existing site

1. Copy `drop-in/components/zalos-landing/` into your project's `components/` directory, or `src/components/` if your app uses `src/`.
2. Copy `drop-in/app/landing/page.tsx` into `app/landing/`, or `src/app/landing/` alongside your existing routes. If `/landing` already exists, integrate the component into that route instead of overwriting it.
3. Copy `drop-in/public/zalos-landing/` into your project's root `public/` directory. Even in a `src/` project, public assets belong in root `public/`.
4. Install the font dependency:

   ```sh
   npm install @fontsource/manrope@5.3.0
   ```

5. Keep your existing dependencies and root layout. Start your normal development server and open `/landing`.

The example route uses `../../components/zalos-landing/landing-page`, so it needs no `@/` alias configuration. It assumes `app/` and `components/` are siblings; adjust the import if your structure differs.

## Layout and configuration

The component's styles are scoped through `landing.module.css`. Manrope 400 and 500 are imported by the landing component. No global body or root reset is included. Give this route the full viewport width, remove any surrounding container padding, and use `body { margin: 0; }` in your site's layout styles. The reference sizing assumes a standard 16px root font; the component uses `1rem` and scales with your root size. A site header above the page adds height to its desktop `100vh` layout, so use your site's full-page layout variant for this route.

Review these integration points:

- `landing-page.tsx`: the logo's home link is `/`; the Back and legal links point to the supplied Zalos URLs. Review their destinations for your site.
- `booking-calendar.tsx`: change `bookingUrl` to use another Calendly event. It currently points to `https://calendly.com/zalos/discovery-call`.
- Images use site-root URLs under `/zalos-landing/brands/`. If your Next.js app has a `basePath`, prepend that path to image URLs and review the home link accordingly.

Agentation is omitted from the client runtime. No environment variables or secrets are required.

## Calendar verification

The Calendly calendar was verified rendering on the published Vercel page; no booking was submitted. A booking link appears if the embed fails to load, and a link is also provided when JavaScript is disabled. After deploying your copy, check that the calendar loads and displays the correct event and available times on your domain.

Logos are the assets supplied from the Zalos design. The Manrope license is included in [licenses/Manrope-LICENSE.txt](licenses/Manrope-LICENSE.txt).
