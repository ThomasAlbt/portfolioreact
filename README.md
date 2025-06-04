# 🌐 React Portfolio – Thomas Albert

Un portfolio professionnel codé **from scratch en React** sans framework CSS, sans bibliothèque d'UI et sans backend. Ce projet m'a permis d'explorer le **routing client personnalisé**, l'optimisation d'interface, la modularité de React, et le rendu conditionnel.

---

## 🔎 Aperçu

> 🧑‍💻 [Voir le portfolio en ligne](https://thomasfullstack.fr)

---

## 🚀 Fonctionnalités principales

### Architecture
- 🧩 React **100% custom sans framework CSS**
- 🧱 Structure modulaire en composants réutilisables

### UI/UX
- 📱 Responsive design mobile/tablette/desktop
- 🌀 Animations CSS personnalisées
- 🖼️ Optimisation des images et assets

### Contenu
- 💼 Section projets avec filtres
- 📝 Détails complets pour chaque projet (techs, liens, descriptions)
- 📬 Formulaire de contact fonctionnel (avec Formspree)
- 🎯 Section "À propos" avec compétences techniques

---

## 🗂️ Structure détaillée du projet

```bash
.
├── public/                   # Fichiers statiques
│   ├── favicon/              # Favicons multi-formats
│   ├── robots.txt            # Configuration SEO
│   └── index.html            # Template principal
│
├── src/
│   ├── assets/               # Ressources graphiques
│   │   ├── icons/            # Icônes SVG
│   │   ├── projects/         # Captures de projets
│   │   └── illustrations/    # Images custom
│   │
│   ├── components/           # Composants réutilisables
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Tag.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   │
│   │   └── ui/
│   │       ├── ThemeToggle.jsx
│   │       ├── Loader.jsx
│   │       └── Tooltip.jsx
│   │
│   ├── pages/                # Pages principales
│   │   ├── Home/
│   │   │   ├── HeroSection.jsx
│   │   │   └── IntroSection.jsx
│   │   │
│   │   ├── Projects/
│   │   │   ├── ProjectGrid.jsx
│   │   │   ├── ProjectFilter.jsx
│   │   │   └── ProjectDetails.jsx
│   │   │
│   │   ├── About/
│   │   │   ├── Skills.jsx
│   │   │   └── Timeline.jsx
│   │   │
│   │   └── Contact/
│   │       └── ContactForm.jsx
│   │
│   ├── hooks/                # Custom hooks
│   │   ├── useNavigation.js
│   │   └── useTheme.js
│   │
│   ├── utils/                # Helpers et données
│   │   ├── projectsData.js
│   │   └── skillsData.js
│   │
│   ├── App.jsx               # Configuration principale
│   ├── main.jsx              # Point d'entrée
│   └── styles/               # Styles globaux
│       ├── base/
│       ├── components/
│       └── themes/
│
├── .gitignore
├── package.json
├── vite.config.js            # Configuration Vite
└── README.md
