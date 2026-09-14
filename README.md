# Zalos landing template

A complete Next.js App Router landing page with the supplied Zalos design, responsive layouts, balanced subtitle wrapping, and Calendly booking.

## Create your private copy

1. Accept your GitHub repository invitation and open this template repository.
2. Click **Use this template**, then **Create a new repository**.
3. Choose your owner and repository name, select **Private**, and create the repository.
4. Clone your new repository and run the commands below from its root.

To add the page to an existing Next.js project, use `drop-in/` and follow [START-HERE.md](START-HERE.md). Keep that project's existing dependencies and layout.

## Run locally

Requires Node.js 20.9 or newer. Dependencies are pinned to Next.js 16.3.5, React 19.3.0, and Manrope 5.3.0.

```sh
npm ci
npm run dev
```

Open [http://localhost:3000/landing](http://localhost:3000/landing). For another port, run `npm run dev -- --port 3102`.

For a production build and local server:

```sh
npm run build
npm run start
```

Additional checks are `npm run lint` and `npm run typecheck`.

## Deploy and configure

Import your new repository into Vercel, select the **Next.js** framework preset, and use the repository root as the project root. No environment variables or secrets are required. Agentation is omitted from the client runtime.

- Content, links, and logos: `src/components/landing-page.tsx`.
- Calendly event: `bookingUrl` in `src/components/booking-calendar.tsx`.
- Layout and typography: `src/app/globals.css`.
- Page metadata: `src/app/layout.tsx`.
- Supplied logo assets: `public/brands/`.

The main route is `/landing`; `/`, `/01-cover-zalos-lines`, and `/demo/01-cover-zalos-lines` render the same page. The logo links to `/`; the Back and legal links point to the supplied Zalos URLs. Review these destinations for your site. Assets use site-root URLs, so adjust them if you configure a Next.js `basePath`.

The live Calendly iframe could not be verified in the embedded automation browser, although the direct event page loaded. The page includes a fallback booking link if the embed fails and a link for JavaScript-disabled browsers. Before launch, check that the calendar loads and shows the correct event and available times on the target domain in the intended browser.

Logos are the assets supplied from the Zalos design. The Manrope license is included in [licenses/Manrope-LICENSE.txt](licenses/Manrope-LICENSE.txt).
