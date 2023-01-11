let cities = [
    {
      name: "Mendoza",
      continent: "America",
      photo:
        "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-mendoza-capa2019-01.jpg",
      population: 900000,
      userId: "636e67886d5bdab4b6f1716e",
    },
    {
      name: "Roma",
      continent: "Europa",
      photo:
        "https://as2.ftcdn.net/v2/jpg/00/67/84/93/1000_F_67849317_GdgNMpfjgYaaEHVfe3MwPFciwr4Pn7zu.jpg",
      population: 1500000,
      userId: "636e67886d5bdab4b6f1716e",
    },
    {
      name: "Kioto",
      continent: "Asia",
      photo:
        "https://i0.wp.com/redhistoria.com/wp-content/uploads/2020/03/Kinkaku-ji-El-Templo-del-Pabello%CC%81n-Dorado.jpg?resize=696%2C465&ssl=1",
      population: 1500000,
      userId: "636e67886d5bdab4b6f1716e",
    },
    {
      name: "Paris",
      continent: "Europa",
      photo:
        "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2013/04/Paris.jpg?w=1024&quality=60&strip=all&ssl=1",
      population: 1300000,
      userId: "636e67886d5bdab4b6f1716c",
    },
    {
      name: "Praga",
      continent: "Europa",
      photo:
        "https://elviajista.com/wp-content/uploads/2021/04/alojarseenpraga-768x513.jpg",
      population: 1400000,
      userId: "636e67886d5bdab4b6f1716c",
    },
    {
      name: "Sevilla",
      continent: "Europa",
      photo:
        "https://a.cdn-hotels.com/gdcs/production72/d128/7da38149-dbcb-4273-922a-fd240e3b9f71.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
      population: 1600000,
      userId: "636e67886d5bdab4b6f1716c",
    },
    {
      name: "Londres",
      continent: "Europa",
      photo:
        "https://www.euroresidentes.com/viajes/viajar/wp-content/uploads/sites/3/2006/06/londres.jpg?x80484",
      population: 110000,
      userId: "636e67886d5bdab4b6f1716b",
    },
    {
      name: "Barcelona",
      continent: "Europa",
      photo: "https://iloverunn.com/wp-content/uploads/2021/07/barcelona_1.jpg",
      population: 1300000,
      userId: "636e67886d5bdab4b6f1716b",
    },
    {
      name: "Nueva York",
      continent: "America",
      photo:
        "https://dam.ngenespanol.com/wp-content/uploads/2021/05/cuanto-cuesta-viajar-a-nueva-york.jpg",
      population: 1500000,
      userId: "636e67886d5bdab4b6f1716b",
    },
    {
      name: "Sydney",
      continent: "Oceanía",
      photo:
        "https://898904.smushcdn.com/2130394/wp-content/uploads/2017/11/estudiar-en-sydney-1-1023x424.jpg?lossy=1&strip=1&webp=1",
      population: 1000000,
      userId: "636e67886d5bdab4b6f1716d",
    },
    {
      name: "Venecia",
      continent: "Europa",
      photo:
        "https://a.cdn-hotels.com/gdcs/production65/d79/389c4f8f-d0e2-4a03-8999-78eaa83084f4.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
      population: 1200000,
      userId: "636e67886d5bdab4b6f1716d",
    },
    {
      name: "Amsterdam",
      continent: "Europa",
      photo:
        "https://viajes.nationalgeographic.com.es/medio/2018/11/12/rijksmuseum_8138b88b_1600x1239.jpg",
      population: 1400000,
      userId: "636e67886d5bdab4b6f1716d",
    },
  ]

  require("dotenv").config();
require("../database");
const City = require("../../models/City");

cities.forEach((elemento) => {
  City.create({
    name: elemento.name,
    continent: elemento.continent,
    photo: elemento.photo,
    population: elemento.population,
    userId: elemento.userId,
  });
});