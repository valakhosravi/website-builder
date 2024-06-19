export interface PageElementProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: string;
    [key: string]: any;
}

export interface PageElement {
    type: string;
    props?: PageElementProps;
    children?: PageElement[] | string;
}

export interface PageConfig extends PageElement { }
