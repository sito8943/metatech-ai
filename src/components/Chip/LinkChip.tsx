// types
import {LinkChipPropsType} from "./types";

// components
import {Chip} from "./Chip";

export const LinkChip =
    (props: LinkChipPropsType) => {

        const {href, text} = props;

        return (
            <a href={href}>
                <Chip text={text}/>
            </a>
        );
    };
