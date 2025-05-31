import {useTranslation} from "react-i18next";

const date = new Date()

export const Footer = () => {
    const {t} = useTranslation()

    return (
        <footer className="flex w-full items-center justify-center py-5 bg-dark">

            <p className="text-gray-400">{t("_pages:footer.copyright")} {date.getFullYear()}</p>

        </footer>
    );
};
