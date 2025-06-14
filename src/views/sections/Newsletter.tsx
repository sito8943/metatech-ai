import { t } from "i18next";

// components
import { Newsletter } from "../components/Newsletter";

// icons
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NewsletterSection = () => {
  return (
    <section
      id="coming"
      className="py-20 px-6 md:px-12 h-screen flex items-center justify-center bg-dark"
    >
      <div className="sm:max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-gray-300 font-bold mb-4">
          <FontAwesomeIcon icon={faRocket} /> {t("_pages:home.coming.title")}
        </h2>
        <p className="text-gray-400 mx-auto mb-8 w-[90%] xs:w-[80%]">
          {t("_pages:home.coming.body")}
        </p>

        {/* Newsletter */}
        <Newsletter />
      </div>
    </section>
  );
};
