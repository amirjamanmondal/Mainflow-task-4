const { z } = require("zod");

const userValidator = z.object({
  name: z.string().min(5, { message: "atleast 5 character" }).optional(),
  email: z
    .string()
    .email({ message: "email is invalid" })
    .min(5, { message: "minimum length must be 5" }),
  age: z.number().min(15, { message: "age atleast 15 required" }).optional(),
  gender: z.enum(["male", "female"]).default("unknown"),
  password: z
    .string()
    .min(6, { message: "password must be atleast 6 character" }),
});

module.exports = userValidator;
