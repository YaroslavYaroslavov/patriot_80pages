// src/context/LanguageContext.js
import React, { createContext, useState, useContext } from "react";

export const LanguageContext = createContext({
  language: "ru",
  setLanguage: () => {},
  getText: () => "",
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const storedLang = localStorage.getItem("appLanguage");
    return storedLang || "ru";
  });

  React.useEffect(() => {
    localStorage.setItem("appLanguage", language);
  }, [language]);

  const getText = (translations) => {
    if (!translations) {
      console.warn("getText received undefined or null translations object.");
      return "";
    }
    if (translations[language]) {
      return translations[language];
    }
    if (translations["ru"]) {
      return translations["ru"];
    }
    return "";
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getText }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
