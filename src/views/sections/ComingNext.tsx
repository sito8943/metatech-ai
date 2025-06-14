import { t } from "i18next";

// utils
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { scrollTo } from "some-javascript-utils/browser";

// icons
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components
import { Button } from "../../components";

export const ComingNext = () => {
  return (
    <section
      id="whats-coming-next"
      className="w-full responsive-container py-0"
    >
      <div className="flex gap-5 justify-center items-center w-full">
        <FontAwesomeIcon
          icon={faAnglesDown}
          className="text-gray-500 mr-5 text-xs max-sm:!hidden"
        />
        <FontAwesomeIcon
          icon={faAnglesDown}
          className="text-gray-500 mr-5 text-sm max-sm:!hidden"
        />
        <FontAwesomeIcon
          icon={faAnglesDown}
          className="text-gray-500 mr-5 max-sm:!hidden"
        />
        <Button
          href="#coming"
          onClick={() => {
            const next = document.getElementById("coming");
            scrollTo(next?.offsetTop);
          }}
          name={t("_accessibility:buttons.whatsComingNext")}
          aria-label={t("_accessibility:ariaLabels.whatsComingNext")}
        >
          {`${t("_accessibility:buttons.whatsComingNext")}`}
        </Button>
        <FontAwesomeIcon
          icon={faAnglesDown}
          className="text-gray-500 mr-5 max-sm:!hidden"
        />
        <FontAwesomeIcon
          icon={faAnglesDown}
          className="text-gray-500 mr-5 text-sm max-sm:!hidden"
        />
        <FontAwesomeIcon
          icon={faAnglesDown}
          className="text-gray-500 mr-5 text-xs max-sm:!hidden"
        />
      </div>
    </section>
  );
};
