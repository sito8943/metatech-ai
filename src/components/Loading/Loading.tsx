// icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";

// styles
import "./styles.css"

export const Loading =
    () => {
        return (
            <FontAwesomeIcon icon={faCircleNotch} className="animate-spin text-2xl text-primary"/>
        );
    };
