import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export type ButtonPropsType = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "children" | "onClick"> & {
    children: ReactNode
    href?: string
    onClick?: () => void,
    name?: string
}