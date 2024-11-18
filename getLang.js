const language = {
  en: () => import("./locales/en.json").then((r) => r.default),
  es: () => import("./locales/es.json").then((r) => r.default),
};

export const getLanguage = (lang) => {
  const currentLang = lang || "en";
  return language[lang]();
};
