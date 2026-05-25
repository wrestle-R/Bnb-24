# BnB Frontend (Vite + React)

Modernized frontend-only coffee house app, structured for maintainability and Vercel deployment.

## Stack

- React 18 + React Router 6
- Vite 5
- Tailwind CSS + Bootstrap
- Vitest + Testing Library

## Project Structure

```text
BnB/
├── public/
│   ├── favicon.ico
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── Button/
│   │   ├── Chatbot/
│   │   └── Navbar/
│   ├── context/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── styles/
│   ├── test/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── vercel.json
├── package.json
└── vite.config.js
```

## Run Locally

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm test
npm run build
```

## Vercel Deployment

- Deploy the `BnB` directory as the project root.
- `vercel.json` rewrites all routes to `index.html` so client-side routing works on refresh.
- No backend is required for runtime.

## Frontend-only Limitation

- Chatbot, contact, and booking APIs are mocked in `src/services/api.js`.
- Authentication is mock session state stored in local storage (`bnb_auth_user`).
