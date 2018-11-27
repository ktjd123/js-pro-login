import mongoose from "mongoose";

const Account = mongoose.Schema({
  id: String,
  pw: String,
  name: String
});

export default mongoose.model("Account", Account);
