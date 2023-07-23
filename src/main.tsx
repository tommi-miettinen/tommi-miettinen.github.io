import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationFI from "./locales/fi/translation.json";

const savedLanguage = localStorage.getItem("language");

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    fi: {
      translation: translationFI,
    },
  },
  lng: savedLanguage || "fi",
  fallbackLng: "fi",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
