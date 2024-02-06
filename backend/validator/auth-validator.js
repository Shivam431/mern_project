const { z } = require("zod");

const registerSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Username should be atleast 3 charcter long" })
    .max(255, { message: "Username should be less than 255 character" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email should be atleast 3 character long" }),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(1, { message: "Atleast 1 number required" })
    .max(10, { message: "Phone Number should be having 10 digits" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password should be atleast 3 charcter long" })
    .max(255, { message: "Password should be less than 255 character" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email should be atleast 3 character long" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password should be atleast 3 character long" })
    .max(255, { message: "Password should be less than 255 character" }),
});

const ContactDetailsSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Username should be atleast 3 character long" })
    .max(255, { message: "Username should be less than 255 character" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email should be atleast 3 character long" }),

  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(1, { message: "Message should be atleast 3 character long" })
    .max(255, { message: "Message should be less than 255 character" }),
});

module.exports = { registerSchema, loginSchema, ContactDetailsSchema};
