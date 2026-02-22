import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(

{

  listing:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
    required: true,
  },


  listingTitle:
  {
    type: String,
    required: true,
  },


  ownerEmail:
  {
    type: String,
    required: true,
  },


  visitorName:
  {
    type: String,
    required: true,
  },


  visitorEmail:
  {
    type: String,
    required: true,
  },


  subject:
  {
    type: String,
    required: true,
  },


  message:
  {
    type: String,
    required: true,
  }

},

{
  timestamps: true
}

);

export default mongoose.model(
  "Enquiry",
  enquirySchema
);