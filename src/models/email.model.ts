import { Document, model, models, Schema } from "mongoose";

interface IEmail extends Document {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

const UserEmails = new Schema<IEmail>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Emails = models.UserEmails || model<IEmail>("UserEmails", UserEmails);

export default Emails;
