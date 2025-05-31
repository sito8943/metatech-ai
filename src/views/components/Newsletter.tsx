import {useTranslation} from "react-i18next";

// components
import {Button} from "../../components";

export const Newsletter = () => {

    const {t} = useTranslation()

    return (
        <>
            <form
                className="flex flex-col sm:flex-row items-center gap-4 sm:max-w-md mx-auto sm:bg-bg-primary rounded-full relative">
                <input
                    type="email"
                    name="email"
                    required
                    placeholder={t("_pages:home.coming.newsletter.input.placeholder")}
                    className="w-full px-5 sm:pr-40 py-3 rounded-full bg-bg-primary text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                    type="submit"
                    name={t("_accessibility:buttons.subscribe")}
                    aria-label={t("_accessibility:ariaLabels.subscribe")}
                    className="sm:absolute right-0 !bg-primary hover:!bg-hover-primary hover:!text-dark"
                >
                    {`${t("_accessibility:buttons.subscribe")}`}
                </Button>
            </form>

            <p className="text-xs text-gray-500 mt-6 sm:mt-4">
                {t("_pages:home.coming.newsletter.disclaimer")}
            </p>
        </>
    );
};
