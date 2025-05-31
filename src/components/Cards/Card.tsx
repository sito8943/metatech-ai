import {useTranslation} from "react-i18next";

// icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBrain, faRobot, faTools} from "@fortawesome/free-solid-svg-icons";

// types
import {CardPropsType, IconType} from "./types.ts";

// components
import {LinkChip} from "../Chips";

// styles
import "./styles.css"

const icons: IconType = {model: faRobot, tool: faTools, brain: faBrain}

export const Card = (props: CardPropsType) => {
    const {t} = useTranslation()

    const {title, name, tags, description, link, icon = "model"} = props

    return (
        <article className="card">
            <h1><FontAwesomeIcon icon={icons[icon]} className="mr-5"/>{title}</h1>
            <h2>{name}</h2>
            <p className="description">
                {description}{" "}
                <a className="learn-more animated" href={link} target="_blank" rel="noreferrer"
                   aria-label={t("_accessibility:ariaLabels.learnMore")}>
                    {t("_accessibility:buttons.learnMore")}
                    {" "}→
                </a>
            </p>
            <ul className="tags">
                {tags?.map((tag) =>
                    <li key={tag}>
                        <LinkChip href={`#${tag}`} text={tag} name={tag} aria-label={tag}/>
                    </li>)}
            </ul>

        </article>
    );
};
