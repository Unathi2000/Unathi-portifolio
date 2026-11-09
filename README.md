# Unathi Pikiso – Portfolio

A responsive personal portfolio built with **React + Tailwind CSS (Vite)**.

Sections: Hero · About · Skills (animated progress bars) · Projects (live demo + GitHub) · Experience timeline · Contact form · Light/dark mode.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Make it yours

Almost everything lives in **`src/data.js`**:

- `profile` – name, contact details, bio, stats
- `skills` – each skill has a `level` (0–100) that drives its progress bar
- `projects` – **add your deployed link to `live` and the repo URL to `github`** for each project. While `live` is empty, the card shows a disabled "Demo coming soon" button.
- `timeline` – experience and education entries (check the dates match your CV)

Your photo is `public/profile.jpg`. Replace the file to change it. If the image is missing, initials are shown instead.

## Contact form

The form validates input and then opens the visitor's email app with the message pre-filled (`mailto:`), so it works without a backend.

To receive messages directly instead, create a free form at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) and, in `src/components/Contact.jsx`, replace the `window.location.href = ...` line in `submit` with a `fetch` POST to your form endpoint.

## Deploy

Push to GitHub, then import the repo on [Vercel](https://vercel.com) or [Netlify](https://netlify.com) (build command `npm run build`, output folder `dist`). Add the resulting URL to your LinkedIn and CV.
