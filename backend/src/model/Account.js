import mongoose from "mongoose";

// Account Schema를 구성
const Account = mongoose.Schema({
  id: String,
  pw: String,
  name: String,
  //학번
  studentNumber: String,
  phoneNumber: String,
  email: String,
  else1: String,
  else2: String,
  else3: String
});

export default mongoose.model("Account", Account);
