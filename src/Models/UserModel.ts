import mongoose, { model, Schema } from "mongoose";
import { isModuleNamespaceObject } from "util/types";

interface IUser {
  fname: string,
  lname: string,
  email: string,
  uname: string,
  password: string,
}

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
    required: true,
  },
  uname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const User = model<IUser>('User', userSchema)

module.exports = User