import mongoose, { model, Schema } from "mongoose";

interface IProduct {
  name: string,
  value: number,
  description: string,
  stock: number,
  code: string,
}

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  stock: {
    type: Number,
    required: false,
    default: 0,
  },
  code: {
    type: String,
    required: true,
  }
});

export default mongoose.model<IProduct>("Product", productSchema);