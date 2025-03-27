import {MongoClient} from "mongodb"
import { ContactDB } from "../types.ts";

const url = Deno.env.get('MONGO_URL');
if(!url) {
    throw new Error("You need a mongo url");
}

const client = new MongoClient(url);
await client.connect();

const db = client.db('contactos');
const ContactsCollection = db.collection<ContactDB>('contacts');

export default ContactsCollection;

