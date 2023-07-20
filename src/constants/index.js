import { down } from "../assets";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  location,
  special1,
  special2,
  special3,
  star,
  plan1,
  plan2,
  plan3,
  facebook,
  instagram,
  pinterest,
  twitter,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "home",
  },
  {
    id: "explore",
    title: "explore",
  },
  {
    id: "contact",
    title: "contact",
  },
  {
    id: "blog",
    title: "blog",
  },
  {
    id: "pricing",
    title: "pricing",
  },
];

export const inputs = [
  {
    title: "destination",
    type: "text",
    placeholder: "Dubai",
  },
  {
    title: "person",
    type: "number",
    placeholder: "2",
    logo: down,
  },
  {
    title: "check in",
    type: "text",
    placeholder: "Sun, 17th July 2023",
    logo: down,
  },
  {
    title: "check out",
    type: "text",
    placeholder: "Tue, 17th Oct 2023",
    logo: down,
  },
];

export const gallery = [
  {
    id: "gallery-1",
    image: gallery1,
    title: "Monument of Berlin",
    logo: location,
    location: "Berlin, Germany",
  },
  {
    id: "gallery-2",
    image: gallery2,
    title: "Millennium Bridge",
    logo: location,
    location: "London, United Kingdom",
  },
  {
    id: "gallery-3",
    image: gallery3,
    title: "Rialto Bridge",
    logo: location,
    location: "Venice, Italy",
  },
  {
    id: "gallery-4",
    image: gallery4,
    title: "Sea of Orange Tiles",
    logo: location,
    location: "Lisbon, Portugal",
  },
];

export const pricings = [
  {
    id: "special-1",
    image: special1,
    title: "Lisbon, Portugal",
    rate: star,
    about:
      "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    price: "€500",
  },
  {
    id: "special-2",
    image: special2,
    title: "Athens, Greece",
    rate: star,
    about:
      "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    price: "€800",
  },
  {
    id: "special-3",
    image: special3,
    title: "Rome, Italy",
    rate: star,
    about:
      "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    price: "€750",
  },
];

export const plans = [
  {
    id: "plan-1",
    image: plan1,
    price: "€95/day",
    place: "paris city tour",
    rate: star,
    duration: "7 days tour",
  },
  {
    id: "plan-2",
    image: plan2,
    price: "€126/day",
    place: "rome",
    rate: star,
    duration: "7 days tour",
  },
  {
    id: "plan-3",
    image: plan3,
    price: "€90/day",
    place: "madrid",
    rate: star,
    duration: "7 days tour",
  },
];

export const socials = [
  {
    id: "facebook",
    logo: facebook,
    link_to: "https://www.facebook.com/",
  },
  {
    id: "pinterest",
    logo: pinterest,
    link_to: "https://www.pinterest.com/",
  },
  {
    id: "instagram",
    logo: instagram,
    link_to: "https://www.instagram.com/",
  },
  {
    id: "twitter",
    logo: twitter,
    link_to: "https://twitter.com/",
  },
];
