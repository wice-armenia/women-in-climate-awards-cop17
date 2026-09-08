# Women in Climate Awards | COP17 Special Edition

Bilingual Armenian / English website for the Women in Climate Awards — COP17 Special Edition.

## Current structure

- `/en` — English version (default)
- `/hy` — Armenian version
- Root `/` redirects to `/en`
- **Home / Գլխավոր** links to `https://wice.am`
- **Nominate a Candidate / Առաջադրել թեկնածու** opens the current Google Form in a new tab
- Content is centralized in `content/site.ts`
- The Google Form URL and WiCE contact links are centralized in `content/config.ts`

## Updating the Google Form link

Open `content/config.ts` and replace only the value of `NOMINATION_FORM_URL`.

## Updating website text

Open `content/site.ts`.

- `hy` contains Armenian copy.
- `en` contains English copy.

This is designed so routine content updates do not require editing the page layout.

## GitHub upload without Codespaces

1. Download and unzip this project.
2. Open the `women-in-climate-awards-cop17` repository on GitHub.
3. Use **Add file → Upload files**.
4. Drag the **contents** of this folder into GitHub. Do not upload the ZIP itself.
5. Commit the changes to `main`.
6. In Vercel, import the GitHub repository and deploy it as a Next.js project.

## Domain later

After the first successful Vercel deployment, add the custom domain:

`awardsCOP17.wice.am`

Only the `awardsCOP17` DNS record should point to Vercel. The existing `wice.am` DNS should not be replaced.

## Assets

The site includes the supplied Women in Climate Awards logo, COP17 logo, Ministry of Environment logo, WiCE logo, the previous Awards event photo, and a hero visual based on the approved visual direction.
