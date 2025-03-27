import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import AddContact from "../components/AddContact.tsx";
import ContactsCollection from "../db/Contacts.ts";

type QueryParams = {
  name: string;
  phone: string;
  email: string;
};

type Data = {
  added?: boolean;
};

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const url = new URL(req.url);
    const name = url.searchParams.get("name");
    const phone = url.searchParams.get("phone");
    const email = url.searchParams.get("email");
    if (
      name && name?.length > 0 && phone && phone?.length > 0 && email &&
      email?.length > 0
    ) {
      try {
        await ContactsCollection.insertOne({ name, phone, email });
        return ctx.render({ added: true });
      } catch (e) {
        return new Response("Error adding to DB", { status: 500 });
      }
    }
    return ctx.render();
  },
};

const Page = (props: PageProps<Data>) => (
  <>
    <AddContact />
    (props.data?.added && <p>Contacto añadido</p>)
  </>
);

export default Page;
