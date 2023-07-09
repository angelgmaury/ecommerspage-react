//*OG Images
//MEN
import airJordanOG from "../assets/images/jordan1/air-jordan-i-og-white-natural-grey.png";
import jordan1BandW from "../assets/images/jordan1/jordan1BlueAndBlack.png";
import jordan1WandB from "../assets/images/jordan1/jordan1WhiteAndBlack.png";
import jordan1RandW from "../assets/images/jordan1/jordan1-white-black-red-chicago.png";

//WOMEN
import airJordanOGWOMEN from "../assets/images/jordan1/jordan1-gym-red-white-black-.png";
import jordan1Obsidian from "../assets/images/jordan1/jordan1-obsidian-blue-blue-chill-white.png";
import joradn1Orchid from "../assets/images/jordan1/jordan1-orchid-mist-white-metallic-gold.png";
import joradn1BlueGymRed from "../assets/images/jordan1/jordan1-black-dark-powder-blue-gym-red.png";

//*Retro 4 Images
//MEN
import r4Main from "../assets/images/r4/retro4main-white-fire-red-black.png";
import r4Olive from "../assets/images/r4/retro4-olive-oiled-suede-flight-satin.png";
import r4Black from "../assets/images/r4/retro4.png";
import r4WhiteBlack from "../assets/images/r4/retro4-white-black-bright-crimson.png";
//WOMEN
import r4WomenMain from "../assets/images/r4/r4women-fire-red-summit-white-black.png";
import r4SailMuslin from "../assets/images/r4/r4women-sail-muslin-white-black.png";
import r4SiltRedBlack from "../assets/images/r4/r4women-silt-red-black-phantom-volt-metallic-gold.png";
import r4WhiteRed from "../assets/images/r4/r4women-white-university-red-lucid-green-black-.png";

//*jORDAN 11 OG'S IMAGES
//MEN
import jordan11OgBlack from "../assets/images/jordan11/jordan11-og-black-true-red-white.png";
import jordan11Black from "../assets/images/jordan11/jordan11-black-dark-grey-true-red.png";
import jordan11OgWhite from "../assets/images/jordan11/jordan11-og-white-black-dark-concord-concord.png";
import jordan11WhiteLight from "../assets/images/jordan11/jordan11-white-light-grey-cobalt.png";

//*JORDAN 11 RETROS IMAGES
//MEN
import jordan11RetroBlack from "../assets/images/jordan11/jordan11Retro-black-dark-concord-white-.png";
import jordan11RetroMidnight from "../assets/images/jordan11/jordan11Retro-midnight-navy-white-gum-light-brown.png";
import jordan11RetroWhiteBlack from "../assets/images/jordan11/jordan11Retro-white-black-legend-blue.png";
import jordan11RetroWhiteUniversity from "../assets/images/jordan11/jordan11Retro-white-university-blue-midnight-navy.png";

//WOMEN
import jordan11RWomenBlackFuchsia from "../assets/images/jordan11/jordan11RetroWomen-black-fuchsia-blast.png";
import jordan11RWomenNeutral from "../assets/images/jordan11/jordan11RetroWomen-neutral-olive-metallic-stout-sail.png";
import jordan11RWomenWhite from "../assets/images/jordan11/jordan11RetroWomen-white-black-concord-.png";
import jordan11RWomenWhiteMetalic from "../assets/images/jordan11/jordan11RetroWomen-white-metallic-silver-vast-grey.png";

export const productsCollections = [
  //Jordan 1
  {
    imgMain: airJordanOG,
    title: "JORDAN 1 OG'S",
    description:
      "Discover the Jordan OG shoes! They are the symbol of style and performance. With its leather upper and air cushioning, these shoes give you comfort and elegance with every step. Get your Jordan OG and let yourself be carried away by the legend!",
    price: 350,
    type: "men",
    descuento: 35,
    imagesVersions: [airJordanOG, jordan1BandW, jordan1WandB, jordan1RandW],
  },

  {
    imgMain: airJordanOGWOMEN,
    title: "JORDAN 1 WOMEN'S",
    description:
      "Discover the fabulous women's Jordan OG sneakers! They strike the perfect balance between style and performance. With their leather upper and air cushioning, these sneakers offer you comfort and sophistication with every step. Stand out with style and live the legend with the women's Jordan OG!",
    price: 220,
    type: "women",
    descuento: 15,
    imagesVersions: [
      airJordanOGWOMEN,
      jordan1Obsidian,
      joradn1Orchid,
      joradn1BlueGymRed,
    ],
  },
  //Jordan retro 4
  {
    imgMain: r4Main,
    title: "JORDAN RETRO 4",
    description:
      "Experience the authentic legacy of Michael Jordan with the Jordan Retro 4: legendary style and exceptional performance in one pair of sneakers.",
    price: 280,
    type: "men",
    descuento: 25,
    imagesVersions: [r4Olive, r4Main, r4Black, r4WhiteBlack],
  },

  {
    imgMain: r4WomenMain,
    title: "JORDAN RETRO 4 WOMEN'S",
    description:
      "These iconic kicks seamlessly blend style and performance, offering women a perfect combination of fashion-forward design and athletic prowess. Step into a world of unparalleled comfort and style with these legendary women's sneakers.",
    price: 260,
    type: "women",
    descuento: 30,
    imagesVersions: [r4WomenMain, r4SailMuslin, r4SiltRedBlack, r4WhiteRed],
  },

  //JORDAN 11 OG'S
  {
    imgMain: jordan11OgBlack,
    title: "JORDAN 11 OG'S",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem, dolor ipsum Quisquam amet consectetur.",
    price: 350,
    type: "men",
    descuento: 15,
    imagesVersions: [
      jordan11OgBlack,
      jordan11Black,
      jordan11OgWhite,
      jordan11WhiteLight,
    ],
  },

  //JORDAN 11 RETROS.

  //MEN
  {
    imgMain: jordan11RetroBlack,
    title: "JORDAN 11 RETRO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem, dolor ipsum Quisquam amet consectetur.",
    price: 260,
    type: "men",
    descuento: 20,
    imagesVersions: [
      jordan11RetroBlack,
      jordan11RetroMidnight,
      jordan11RetroWhiteBlack,
      jordan11RetroWhiteUniversity,
    ],
  },
  //WOMEN
  {
    imgMain: jordan11RWomenNeutral,
    title: "JORDAN 11 RETRO WOMEN'S",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem, dolor ipsum Quisquam amet consectetur.",
    price: 230,
    type: "women",
    descuento: 20,
    imagesVersions: [
      jordan11RWomenNeutral,
      jordan11RWomenBlackFuchsia,
      jordan11RWomenWhite,
      jordan11RWomenWhiteMetalic,
    ],
  },
];
