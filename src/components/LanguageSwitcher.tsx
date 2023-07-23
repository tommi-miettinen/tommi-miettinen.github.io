import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

function LanguageSwitcher({ className }: { className: string }) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.language = lng;
  };

  return (
    <div className={twMerge("cursor-pointer underline", className)}>
      {i18n.language === "fi" ? (
        <span onClick={() => changeLanguage("en")}>In English</span>
      ) : (
        <span onClick={() => changeLanguage("fi")}>Suomeksi</span>
      )}
    </div>
  );
}

export default LanguageSwitcher;
