import mongoose, { model, Schema } from "mongoose";
import IUser from "../Interfaces/IUser"

const userSchema = new Schema<IUser>({
  fname: {
    type: String,
    required: false,
  },
  lname: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: [true, "*Campo obrigatório!"],
  },
  uname: {
    type: String,
    required: [true, "*Campo obrigatório!"],
  },
  password: {
    type: String,
    required: [true, "*Campo obrigatório!"],
  },
  is_admin: {
    type: Boolean,
    default: false,
  }
})

export default mongoose.model<IUser>("User", userSchema);