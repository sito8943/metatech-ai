// types
import {ChipPropsType} from "./types.ts";

// styles
import "./styles.css"

export const Chip =
    (props: ChipPropsType) => {

        const {text} = props;

        return (
            <p className="chip animated">
                {text}
            </p>
        );
    };
