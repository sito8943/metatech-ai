import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface CardPropsType {
    title: string
    name: string
    tags: string[]
    description: string
    link: string
    icon: string
}

export type IconType = { [key: string]: IconProp }