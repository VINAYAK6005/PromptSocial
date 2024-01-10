import { Schema, model, models } from "mongoose";

const ContactSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  subject: {
    type: String,
    required: [true, "Subject is required!"],
  },
  message: {
    type: String,
    required: [true, "Message is required!"],
  },
});

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;
