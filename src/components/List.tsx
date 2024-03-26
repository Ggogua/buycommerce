export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  added?: boolean;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Premier Protein Shake",
    price: 12,
    description:
      "Chocolately goodness: Smooth and creamy, rich chocolate flavored shake",
    image: "https://m.media-amazon.com/images/I/719eDVmYeYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "Nerds Gum",
    price: 15,
    description:
      "NERDS GUMMY CLUSTERS: Contains one 8-ounce package of NERDS Rainbow Gummy Clusters",
    image: "https://m.media-amazon.com/images/I/61mqs5pQRDL._SL1000_.jpg",
  },
  {
    id: 3,
    name: "The Original Donut Shop",
    price: 24.99,
    description:
      "BRAND STORY: Dive headfirst into a cup of delicious coffee. With our full-bodied taste.",
    image: "https://m.media-amazon.com/images/I/81ls7DEceZL._SL1500_.jpg",
  },
  {
    id: 4,
    name: "Monster Energy Zero Ultra",
    price: 11,
    description:
      "FULL FLAVOR, ZERO SUGAR: Zero Ultra has 10 calories and zero sugar.",
    image: "https://m.media-amazon.com/images/I/71mgBpijzML._SL1200_.jpg",
  },
  {
    id: 5,
    name: "Nespresso Capsules VertuoLine",
    price: 50,
    description:
      "NESPRESSO VERTUOLINE VARIETY PACK ASSORTMENT: This Nespresso coffee assortment.",
    image: "https://m.media-amazon.com/images/I/61J0e7d0GEL._SL1500_.jpg",
  },
  {
    id: 6,
    name: "MAYBESTA Wireless Microphone",
    price: 58.2,
    description:
      "Easy Automatic Connection: This is innovative wireless lav microphone",
    image: "https://m.media-amazon.com/images/I/61ahgo1-PQL._AC_SL1500_.jpg",
  },
  {
    id: 7,
    name: "PUR Gum",
    price: 8.25,
    description: "SPEARMINT: This sugar free gum is refreshing ",
    image: "https://m.media-amazon.com/images/I/61Rfv6o8ToL._SL1000_.jpg",
  },
  {
    id: 8,
    name: "Easter Candy Lollipop ",
    price: 18,
    description: "EASTER CANDY: Unwrap the fun ",
    image: "https://m.media-amazon.com/images/I/91eiAEgD4yL._SL1500_.jpg",
  },
  {
    id: 9,
    name: "POPPI",
    price: 7.99,
    description: "Contains natural prebiotics from unfiltered Apple Vinegar",
    image: "https://m.media-amazon.com/images/I/81mzvAGkHkL._SL1500_.jpg",
  },
];
