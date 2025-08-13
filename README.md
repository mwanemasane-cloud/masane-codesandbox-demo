# Mâ’Sâne — Démo CodeSandbox (Front + Mock Strapi)

## Lancer (CodeSandbox ou local)
- Script: `npm run dev` démarre **deux serveurs** en parallèle :
  - Mock Strapi (Express) sur **http://localhost:3001**
  - Vite (front) sur **http://localhost:5173**
- Le front appelle **/api/...** ; Vite **proxy** vers `http://localhost:3001`.

## Passer à un vrai Strapi (Render/Local)
1. Déployez Strapi et récupérez son URL (ex: `https://masane-cms.onrender.com`).
2. Ajoutez un fichier `.env` (ou variable env dans l’hébergeur) côté front :  
   `VITE_STRAPI_URL=https://masane-cms.onrender.com`
3. Le front appellera alors `${VITE_STRAPI_URL}/api/...` au lieu de `/api`.

> Aucun autre changement nécessaire : la logique choisit automatiquement l’URL en fonction de `VITE_STRAPI_URL`.
