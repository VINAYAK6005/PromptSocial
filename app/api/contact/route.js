import Contact from "@models/contact";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { email, subject, message } = await request.json();

  try {
    await connectToDB();

    const contact = await Contact.create({ email, subject, message });

    return new Response(JSON.stringify(contact), { status: 200 });
  } catch (error) {
    return new Response("Failed to create contact", { status: 500 });
  }
};
