export interface ChipPropsType {
    text: string
}

export interface LinkChipPropsType extends ChipPropsType, Partial<Omit<HTMLAnchorElement, "text" | "name">> {
    name?: string
    href: string
}