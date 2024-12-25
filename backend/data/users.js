import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("user@123", 10),
    isAdmin: true,
  },
];

export default users;
