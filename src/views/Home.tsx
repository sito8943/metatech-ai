import {useTranslation} from "react-i18next";

// data
import data from "../data.json"

// components
import {Card} from "../components";

export const Home = () => {

    const {t} = useTranslation();

    return (
        <main>
            <section id="hero" className="flex flex-col gap-5 mb-12 text-center">
                <h1 className="text-6xl text-white font-bold">{t("_pages:home.title")}</h1>
                <p className="text-gray-400 text-base">{t("_pages:home.subtitle")}</p>
            </section>
            <section id="meta">
                <ul className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 items-stretch">
                    {data.meta.map((meta) => <li key={meta.name}>
                        <Card {...meta} />
                    </li>)}
                </ul>
            </section>
        </main>
    );
};
