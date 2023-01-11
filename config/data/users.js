let users = [
  {
    name: "Eric",
    lastName: "Rodriguez",
    role: "admin",
    photo:
      "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg",
    age: 23,
    email: "feric.rodriguez@gmail.com",
    password: "Chau6789",
    code: "adminuser1",
    verified: true,
    logged: true,
  },
  {
    id: "admin2",
    name: "Gaston",
    lastName: "Moreno",
    role: "admin",
    photo:
      "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg",
    age: 26,
    email: "Gaston.moreno1155@gmail.com",
    password: "hola1234",
    code: "adminuser2",
    verified: true,
    logged: true,
  },
  {
    id: "admin3",
    name: "Carlos",
    lastName: "Perez",
    role: "admin",
    photo:
      "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg",
    age: 28,
    email: "carlitosperez@gmail.com",
    password: "Chau1234",
    code: "adminuser3",
    verified: true,
    logged: true,
  },
  {
    id: "admin4",
    name: "Mauricio",
    lastName: "Gilbert",
    role: "admin",
    photo:
      "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg",
    age: 30,
    email: "mauricioGilbert@gmail.com",
    password: "hola4567",
    code: "adminuser4",
    verified: true,
    logged: true,
  },
];

require("dotenv").config();
require("../database");
const User = require("../../models/User");

users.forEach((elemento) => {
  User.create({
    name: elemento.name,
    lastName: elemento.lastName,
    role: elemento.role,
    photo: elemento.photo,
    age: elemento.age,
    email: elemento.email,
    password: elemento.password,
    code: elemento.code,
    verified: elemento.verified,
    logged: elemento.logged,
  });
});
