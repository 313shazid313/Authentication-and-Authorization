const { z } = require("zod");

//!creating an object schema
//? zod er bodole joi babohar kora jai // zod basically typescript e babohar kora hoi // but javascript eo babohar kora jai
//? typescript to basically javascript

const validOrNotSchema = z.object({
  username: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "name must be more than 3 charecter" })
    .max(250, { message: "name must not be more than 250 charecter" }),

  email: z
    .string({ message: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Must be at least 3 charecter" })
    .max(250, { message: "Email must not be more than 255 charceter" }),

  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(10, { message: "phone must be at least 10 charecter" })
    .max(20, "phone must not be more than 20 charecter"),

  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "password must be more than 7 charecter" })
    .max(20, { message: "password must not be more than 20 charecter" }),
});

module.exports = validOrNotSchema;
