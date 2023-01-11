let hotels = [
  {
    name: "Hotel Intercontinental",
    photo: [
      "https://www.revistaareatres.com.ar/files/image/1/1181/5e70432f48472.jpg",
      "https://www.atrapalo.com.ar/hoteles/picture/l/1512/2/1/414697650.jpg",
      "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/240467884.jpg?k=4dfe179c875375aaaf70733eb38d4457fa9f5b8be05a5c2bf1b772c645a2ff82&o=",
    ],
    capacity: 350,
    cityId: "636e9b452367c51ce27eb193",
    userId: "636e67886d5bdab4b6f1716b",
  },
  {
    name: "Hotel Tor Vergata",
    photo: [
      "https://ak-d.tripcdn.com/images/0201p12000a1hrxov7704_Z_1100_824_R5_Q70_D.jpg",
      "https://lh4.googleusercontent.com/proxy/v54jhMOr7UmVOHyck0_yEKIDMBRh_DIA8oAhKgNNczy9O00fXyMebOaxiCp0loC_1hQ-H-Ev_sv0jthSkbYdohEcO9qTJojYRAJGtVuI7SofGx3JA6jiijnygTdhIz11DA8EdPOdw_zLB_gXYvHmypONChM8qw=w253-h168-k-no",
      "https://lh5.googleusercontent.com/proxy/BmDjgpbgSSlfvH1TpcAGsyU_ftU_L-AP_v5bE3lp-g3srEVifzyly9UBsi_EfTbBsbIqhe2YjGA_111ePw7tmhYRHRNW6WFvZ0TwhVmKByUNJCjz1Io7DTpGefz2iKJinzp792atAPNzktsbTvUWbAVbavZ3o4s=w253-h168-k-no",
    ],
    capacity: 300,
    description: "Hotel ",
    cityId: "636e9b452367c51ce27eb194",
    userId: "636e67886d5bdab4b6f1716b",
  },
  {
    name: "Hotel Kyoto Tokyu",
    photo: [
      "https://media-cdn.tripadvisor.com/media/photo-s/1d/1d/24/c6/exterior-view.jpg",
      "https://pix10.agoda.net/hotelImages/4867798/0/09fc587691692fec627075bbd15b31a9.jpg?ca=8&ce=1&s=1024x768",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/8a/c3/66/caption.jpg?w=600&h=-1&s=1",
    ],
    capacity: 500,
    cityId: "636eacf82a32900c3464f4a1",
    userId: "636e67886d5bdab4b6f1716b",
  },
  {
    name: "Hotel Virginia",
    photo: [
      "https://res.cloudinary.com/lastminute/image/upload/c_scale,w_470/q_auto/v1532423575/89053662-H1-0959_ho_03_p_3000x2250_qxg0eg.jpg",
      "https://y.cdrst.com/foto/hotel-sf/14616/granderesp/virgina-general-ca87642.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/11/7f/2c/77/chambre-familiale.jpg",
    ],
    capacity: 500,
    cityId: "636e9b452367c51ce27eb196",
    userId: "636e67886d5bdab4b6f1716c",
  },
  {
    name: "Hotel Paris Prague",
    photo: [
      "https://media-cdn.tripadvisor.com/media/photo-s/05/3f/c4/36/hotel-paris.jpg",
      "https://www.historichotelsthenandnow.com/Images/hotels/ParisPrague/ParisPrague070.jpg",
      "https://foto.hrsstatic.com/fotos/0/3/545/350/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2F0%2F1%2F3%2F6%2F013620%2F013620_w_5780007.jpg/KnDBKD8%2FF7pLuXhe7HcgwQ%3D%3D/5399,3744/6/Hotel_Paris_Prague-Prag-Wellness-1-13620.jpg",
    ],
    capacity: 900,
    cityId: "636e9b452367c51ce27eb197",
    userId: "636e67886d5bdab4b6f1716c",
  },
  {
    name: "Ayre Hotel Sevilla",
    photo: [
      "https://media-cdn.tripadvisor.com/media/photo-s/01/8b/12/e2/ayre-hotel-sevilla.jpg",
      "https://www.oyster.com/wp-content/uploads/sites/35/2019/05/pool-v3439574-1440.jpg",
      "https://www.viajeselcorteingles.es/imagenes/hoteles/espana/sevilla/has2fnda/24_x.jpg",
    ],
    capacity: 840,
    cityId: "636e9b452367c51ce27eb198",
    userId: "636e67886d5bdab4b6f1716c",
  },
  {
    name: "Shangri-La Hotel",
    photo: [
      "https://www.outthere.travel/wp-content/uploads/2020/07/Shangrila-London-at-the-Shard-1.jpg",

      "https://cf.bstatic.com/xdata/images/hotel/max500/295688389.jpg?k=e18cec73ae0cfa83fc74bc44a077c0dde0176b31198b1d20f5fd509d692b46ad&o=&hp=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/ba/db/57/pool-michutravel.jpg?w=1200&h=-1&s=1",
    ],
    capacity: 600,
    cityId: "636e9b452367c51ce27eb199",
    userId: "636e67886d5bdab4b6f1716d",
  },
  {
    name: "Novotel Barcelona City",
    photo: [
      "https://ak-d.tripcdn.com/images/20070h0000008zxyc1E71_Z_1100_824_R5_Q70_D.jpg",

      "https://y.cdrst.com/foto/hotel-sf/13197/granderesp/novotel-barcelona-city-general-877e8b2.jpg",
      "https://www.ahstatic.com/photos/5560_ho_00_p_1024x768.jpg",
    ],
    capacity: 950,
    cityId: "636e9b452367c51ce27eb19a",
    userId: "636e67886d5bdab4b6f1716d",
  },
  {
    name: "St Ermins Hotel",
    photo: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/3a/93/05/exterior.jpg?w=700&h=-1&s=1",
      "https://www.sohomyriad.com/img/projects/st-ermins-london/03.jpg",
      "https://phgcdn.com/images/uploads/LONSE/masthead/LONSE-masthead-sterminscloistersbanquet.jpg",
    ],
    capacity: 1450,
    cityId: "636eacf82a32900c3464f4a7",
    userId: "636e67886d5bdab4b6f1716d",
  },
  {
    name: "Crown Towers Sydney",
    photo: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/360752472.jpg?k=2dc15646829c1b969d707063090eb6fb37efd9d23ed513a91eb866dcb089903f&o=&hp=1",
      "https://www.f-pov.com/images/projects/hospitality/crown-spa-crown-towers-sydney/bwinstone-CrownSyd-L04-Spa_2070_210204.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/360754620.jpg?k=9ceb3a6c4743c607a18a8f79ceb1329711bc921a49475c0040a6b7939129e200&o=&hp=1",
    ],
    capacity: 1300,

    cityId: "636eacf82a32900c3464f4a8",
    userId: "636e67886d5bdab4b6f1716e",
  },
  {
    name: "Casino Di Venecia",
    photo: [
      "https://www.casinosavenue.com/upload/photoCasino/4170_casino-di-venezia-ca-vendramin-calergi-venice.jpeg",
      "https://siberiantimes.com/PICTURES/BUSINESS/Tigre-de-Cristal/Opening-October-2015/inside_casino_1.jpg",
      "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_669,h_446/w_41,x_7,y_7,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ib4oc0eh6krdgjeo2v6m/MadameTussaudsLasVegaswithGondolaBoatRide.webp",
    ],
    capacity: 700,
    cityId: "636eacf82a32900c3464f4a9",
    userId: "636e67886d5bdab4b6f1716e",
  },
  {
    name: "Holland Casino",
    photo: [
      "https://www.worldcasinodirectory.com/assets/images/pop_images/height/600/casinos/29520_Holland_Casino_Amsterdam_West_2.jpg",
      "https://res.cloudinary.com/pressmailings/image/fetch/q_auto:best,dpr_auto,w_575,c_limit/http:/files.smart.pr/01/a04b503e774c7e98c78d155683d12a/WPT_2018_Holland-Casino-Amsterdam.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/13/dc/b0/e6/interior.jpg",
    ],
    capacity: 500,
    cityId: "636e9b452367c51ce27eb19e",
    userId: "636e67886d5bdab4b6f1716e",
  },
];
require("dotenv").config();
require("../database");
const Hotel = require("../../models/Hotel");

hotels.forEach((elemento) => {
  Hotel.create({
    name: elemento.name,
    photo: elemento.photo,
    capacity: elemento.capacity,
    cityId: elemento.cityId,
    userId: elemento.userId,
  });
});
