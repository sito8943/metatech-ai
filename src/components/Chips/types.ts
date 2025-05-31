export interface ChipPropsType {
    text: string
}

export interface LinkChipPropsType extends ChipPropsType, HTMLAnchorElement {
    href: string
}