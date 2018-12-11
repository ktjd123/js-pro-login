import express from "express";
import joi from "joi";
import bcrypt from "bcryptjs";
import Account from "../../model/Account";

const router = express();

router.get("/all", async (req, res) => {
  const accounts = await Account.find();

  return res.json(accounts);
});

router.get("/check", async (req, res) => {
  if (req.session.info === undefined) {
    return res.status(401).json({ code: 0 });
  }

  const account = await Account.findById(req.session.info._id);

  req.session.info = account;

  return res.json(req.session.info);
});

router.post("/login", async (req, res) => {
  const schema = joi
    .object()
    .keys({
      id: joi
        .string()
        .trim()
        .min(1)
        .max(10)
        .required(),
      pw: joi
        .string()
        .trim()
        .min(1)
        .max(20)
        .required()
    })
    .options({ stripUnknown: true });

  const result = joi.validate(req.body, schema);
  if (result.error) return res.status(400).json({ code: 0 });

  const { id, pw } = result.value;

  const account = await Account.findOne({ id });
  if (!account) return res.status(400).json({ code: 1 });

  if (bcrypt.compareSync(pw, account.pw) !== true) {
    return res.status(400).json({ code: 2 });
  }
  req.session.info = account;
  return res.json();
});

router.post("/register", async (req, res) => {
  //입력값 검증, 수정[ex trim()]을 위한 joi Schema구성
  const schema = joi
    .object()
    .keys({
      id: joi
        .string()
        .trim()
        .max(10)
        .required(),
      pw: joi
        .string()
        .trim()
        .max(20)
        .required(),
      name: joi
        .string()
        .trim()
        .max(5)
        .required(),
      studentNumber: joi
        .string()
        .trim()
        .required(),
      phoneNumber: joi.string().required(),
      email: joi
        .string()
        .trim()
        .email(),
      else1: joi.string().trim(),
      else2: joi.string().trim(),
      else3: joi.string().trim()
    })
    .options({ stripUnknown: true });
  //알지 못하는 값들은 버림

  //schmea를 통하여 검증을 진행하고 오류가 있을경우 프론트엔드로 오류 반환
  const result = joi.validate(req.body, schema);
  console.log(result.error);
  if (result.error) return res.status(400).json({ code: 0 });

  //검증된 값을 받아옴
  const {
    id,
    pw,
    name,
    studentNumber,
    phoneNumber,
    email,
    else1,
    else2,
    else3
  } = result.value;

  //동일한 Id가 있는지 검사하고 있을경우 오류반환
  const account = await Account.findOne({ id });
  if (account) return res.status(400).json({ code: 1 });

  //새로운 Account를 Schema를 통해 생성
  const newAccount = new Account({
    id,
    pw: await bcrypt.hashSync(pw, 8), //암호를 해시화, 자동 Salt
    name,
    studentNumber,
    phoneNumber,
    email,
    else1,
    else2,
    else3
  });

  //비동기적으로 새로운 데이터를 저장 await 를 사용하여 흐름제어
  await newAccount.save();

  //200번 코드를 제출
  return res.json();
});

router.post("/change", async (req, res) => {
  const schema = joi
    .object()
    .keys({
      id: joi
        .string()
        .trim()
        .min(1)
        .max(10)
        .required(),
      pw: joi
        .string()
        .trim()
        .min(1)
        .max(20)
        .required(),
      name: joi
        .string()
        .trim()
        .min(1)
        .max(5)
        .required()
    })
    .options({ stripUnknown: true });

  const result = joi.validate(req.body, schema);
  if (result.error) return res.status(400).json({ code: 0 });

  const { id, pw, name } = result.value;

  const account = await Account.findOne({ id });
  if (!account) return res.status(400).json({ code: 1 });

  account.pw = await bcrypt.hashSync(pw, 8);
  account.name = name;

  await account.save();

  return res.json();
});

export default router;
