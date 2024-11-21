import { StaticImageData } from "next/image";

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
