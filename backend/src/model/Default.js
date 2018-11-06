import mongoose from "mongoose";

const Default = mongoose.Schema({
  id: String,
  pw: String
});

export default mongoose.model("Default", Account);
