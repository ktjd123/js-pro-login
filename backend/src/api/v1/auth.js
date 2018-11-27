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
  if (account) return res.status(400).json({ code: 1 });

  const newAccount = new Account({
    id,
    pw: await bcrypt.hashSync(pw),
    name
  });

  await newAccount.save();

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
