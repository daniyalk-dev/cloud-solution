import { StaticImageData } from "next/image";

export interface TitleDescription {
    id: string;
    title: string;
    description: string;
    image: StaticImageData;
}

export interface Team {
    title: string;
    href: string,
    members: {
        name: string;
        image: string;
        designation: string;
        desc?: string;
        linkedIn?: string;
    }[];
}