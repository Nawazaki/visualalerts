# Visualalerts Restored (2013-2017)

This project is a complete restoration and reconstruction of the "Visualalerts" web application as it appeared and functioned between 2013 and 2017.

## Project Overview
Visualalerts was an Italian web application (visualalerts.com) focused on managing deadlines (scadenze auto, etc.). This restoration recovers the original frontend assets and reverse-engineers a functional backend to make the application interactive again.

## Restoration Details
- **Frontend**: Extracted from the Wayback Machine. Preserves the original Italian language, Bootstrap 2.3.2 layout, jQuery UI, and Yii framework assets.
- **Backend**: Reconstructed using Node.js/Express.
- **Authentication**: Mocked HybridAuth social login (Facebook) and standard registration flow.
- **Responsive Design**: Preserved the original mobile-friendly structure.

## Structure
- `/public`: Static assets, recovered HTML, CSS, JS, and images.
- `/backend`: Node.js server and mock logic.

## How to Run
1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Access at: `http://localhost:3000`

## Recovered Pages
- `index.html`: Main landing page and login.
- `nostriservizi.html`: Services overview.
- `registrazione.html`: User registration.
- `contact.html`: Contact and info page.

---
Restored by Manus AI.
