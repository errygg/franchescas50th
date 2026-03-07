# Franchesca's Fabulous 50th 🎉

A temporary static website to celebrate Franchesca's 50th birthday party.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main landing page |
| `styles.css` | Party-themed responsive styles |
| `script.js` | Countdown timer, confetti animation, RSVP form handling |

## Features

- 🎊 Animated confetti background
- ⏳ Live countdown to the party
- 📋 Event details (date, time, location, dress code)
- 💌 RSVP form
- 📸 Photo gallery placeholder
- 📱 Fully responsive (mobile-friendly)

## Usage

Open `index.html` directly in any browser — no build step required.

To deploy, simply host the three files (`index.html`, `styles.css`, `script.js`) on any
static web host (GitHub Pages, Netlify, Vercel, etc.).

## Customisation

- **Party date/time** — update `PARTY_DATE` in `script.js` and the date shown in `index.html`.
- **Location** — replace the "TBD" placeholder in `index.html`.
- **RSVP backend** — wire up the `submit` handler in `script.js` to a real service
  (e.g. [Formspree](https://formspree.io/), a serverless function, or email).
- **Photos** — replace the gallery placeholder items in `index.html` with real `<img>` tags.
