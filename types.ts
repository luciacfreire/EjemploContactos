import { OptionalId } from "mongodb";

export type Contact = {
    name: string,
    phone:string,
    email:string
}


export type ContactDB = OptionalId<Contact>;