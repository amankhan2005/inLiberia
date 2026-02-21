import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  images: [
    {
      type: String,
    },
  ],

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },

  contactEmail: {
    type: String,
  },

  contactPhone: {
    type: String,
  },

  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

},
{
  timestamps: true,
}
);

export default mongoose.model("Listing", listingSchema);