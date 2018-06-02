import { Url } from "url";

export interface IProduct {
    url: Url,
    id: number,
    name: string,
    description: string,
    date_created: string
}