import {useTranslation} from "react-i18next";

// utils
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {scrollTo} from "some-javascript-utils/browser";

// icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesDown, faRocket} from "@fortawesome/free-solid-svg-icons";

// data
import data from "../data.json"

// components
import {Button, Card} from "../components";
import {Newsletter} from "./components/Newsletter.tsx";

const Home = () => {

    const {t} = useTranslation();

    return (
        <main>
            <section id="hero" className="responsive-container flex flex-col gap-5 mb-12 text-center">
                <h1>{t("_pages:home.title")}</h1>
                <p className="text-gray-400 text-base">{t("_pages:home.subtitle")}</p>
            </section>
            <section id="meta" className="responsive-container !pt-0">
                <ul className="grid gap-5 xl:grid-cols-3 md:grid-cols-2 items-stretch">
                    {data.meta.map((meta) => <li key={meta.name}>
                        <Card {...meta} />
                    </li>)}
                </ul>
            </section>
            <section id="whats-coming-next" className="w-full responsive-container py-0">
                <div className="flex gap-5 justify-center items-center w-full">
                    <FontAwesomeIcon icon={faAnglesDown} className="text-gray-500 mr-5 text-xs max-sm:!hidden"/>
                    <FontAwesomeIcon icon={faAnglesDown} className="text-gray-500 mr-5 text-sm max-sm:!hidden"/>
                    <FontAwesomeIcon icon={faAnglesDown} className="text-gray-500 mr-5 max-sm:!hidden"/>
                    <Button href="#coming" onClick={() => {
                        const next = document.getElementById("coming")
                        scrollTo(next?.offsetTop)
                    }} name={t("_accessibility:buttons.whatsComingNext")}
                            aria-label={t("_accessibility:ariaLabels.whatsComingNext")}>
                        {`${t("_accessibility:buttons.whatsComingNext")}`}
                    </Button>
                    <FontAwesomeIcon icon={faAnglesDown} className="text-gray-500 mr-5 max-sm:!hidden"/>
                    <FontAwesomeIcon icon={faAnglesDown} className="text-gray-500 mr-5 text-sm max-sm:!hidden"/>
                    <FontAwesomeIcon icon={faAnglesDown} className="text-gray-500 mr-5 text-xs max-sm:!hidden"/>
                </div>
            </section>
            <section id="coming" className="py-20 px-6 md:px-12 h-screen flex items-center justify-center bg-dark">
                <div className="sm:max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl text-gray-300 font-bold mb-4">
                        <FontAwesomeIcon icon={faRocket}/> {t("_pages:home.coming.title")}</h2>
                    <p className="text-gray-400 mx-auto mb-8 w-[90%] xs:w-[80%]">
                        {t("_pages:home.coming.body")}
                    </p>

                    {/* Newsletter */}
                    <Newsletter/>
                </div>
            </section>
        </main>
    );
};

export default Home;