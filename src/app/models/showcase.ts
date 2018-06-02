import { Url } from "url";

export interface IShowcase {
    url: Url,
    id: number,
    name: string,
    description: string,
    date_created: string
}