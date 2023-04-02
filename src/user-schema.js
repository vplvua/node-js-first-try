import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  password: String,
});

const userSchemaModel = mongoose.model("User", userSchema);

export default userSchemaModel;
