import { StaticImageData } from "next/image";

export interface AppContextType {
    screenWidth: number;
    scrollY: number;
    showHeader: boolean;
    SERVICES: LinkLabel[]
};
export interface DynamicImages {
    [key: number]: StaticImageData;
}

export interface Project {
    title: string;
    logo: string;
    bg: string;
    desc: string;
    headline: string;
}

export interface Testimonial {
    summary: string;
    author: {
        name: string;
        image: string;
        desc: string[];
    };
}

export interface LinkLabel {
    label: string; href: string
};