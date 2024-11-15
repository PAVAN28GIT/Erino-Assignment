import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },

  email: { type: String, required: true },
  phoneNumber : { type: String, required: true },

  company: { type: String, required: true },
  jobTitle: { type: String, required: true },

  profilePicture: {
    type: String , 
    default: "https://www.w3schools.com/howto/img_avatar.png"
  },

});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
