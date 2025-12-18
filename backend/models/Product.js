import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ["water", "ice"], required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  image: String
});

export default mongoose.model("Product", productSchema);
