// types
import {ButtonPropsType} from "./types.ts";

// styles
import "./styles.css"

export const Button = (props: ButtonPropsType) => {

    const {children, href, className = "", ...rest} = props


    return href ?
        <a href={href} className={`button ${className}`} aria-label={rest["aria-label"] ?? ""}>{children}</a> : (
            <button className={`button ${className}`} {...rest}>
                {children}
            </button>
        );
};
