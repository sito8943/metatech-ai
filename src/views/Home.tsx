import {useTranslation} from "react-i18next";

// components
import {LinkChip} from "../components";

const categories = ["models", "tools", "technique", "coming"];

export const Home = () => {

    const {t} = useTranslation();

    return (
        <main>
            <h1 className="text-6xl text-white">{t("_pages:home.title")}</h1>
            <p className="text-white text-base">{t("_pages:home.subtitle")}</p>
            <ul className="flex flex-wrap gap-4">
                {categories.map((category) => (
                    <li key={category}>
                        <LinkChip href={`#${category}`} text={t(`_pages:home.categories.${category}`)}/>
                    </li>
                ))}
            </ul>
        </main>
    );
};
