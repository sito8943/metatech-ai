import { useTranslation } from "react-i18next";

export const Title = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="responsive-container flex flex-col gap-5 mb-12 text-center"
    >
      <h1>{t("_pages:home.title")}</h1>
      <p className="text-gray-400 text-base">{t("_pages:home.subtitle")}</p>
    </section>
  );
};
