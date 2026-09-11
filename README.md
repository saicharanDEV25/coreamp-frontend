# CoreAMP Engineering Frontend

A responsive React + Vite website for CoreAMP's electrical engineering,
power-system studies and coordinated MEP services.

## Included

- Premium responsive one-page frontend with Home, Services, Projects, About and Contact sections
- Accessible mobile navigation, section anchors and legacy route redirects
- Filterable representative project portfolio
- Keyboard-friendly consultation dialog with validated fields
- Contact and consultation forms that prepare a structured WhatsApp enquiry
- Guided CoreAMP virtual assistant and direct WhatsApp action
- Reduced-motion support and visible keyboard focus states

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Content configuration

- Contact details and WhatsApp number: `src/data/contact.js`
- Services, capabilities, sectors and project profiles: `src/data/siteData.js`
- Route redirects and metadata: `src/App.jsx`

Forms currently hand the completed brief to WhatsApp, so no backend is required.
`vercel.json` includes the SPA rewrite needed for direct route navigation on
Vercel.
