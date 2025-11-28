export interface StatCard {
  text: string;
  subtext?: string;
  imageWebp: string;
  imageAvif: string;
}

import benefitsWebp from "../assets/icons/benefits.webp";
import benefitsAvif from "../assets/icons/benefits.avif";
import graphWebp from "../assets/icons/graph.webp";
import graphAvif from "../assets/icons/graph.avif";
import locationWebp from "../assets/icons/location.webp";
import locationAvif from "../assets/icons/location.avif";
import insuranceWebp from "../assets/icons/insurance.webp";
import insuranceAvif from "../assets/icons/insurance.avif";

export const statCardsContent: StatCard[] = [
  {
    text: "Headline",
    subtext: "Subheading",
    imageWebp: benefitsWebp,
    imageAvif: benefitsAvif,
  },
  {
    text: "Headline",
    subtext: "Subheading*",
    imageWebp: graphWebp,
    imageAvif: graphAvif,
  },
  {
    text: "Headline",
    subtext: "Subheading",
    imageWebp: locationWebp,
    imageAvif: locationAvif,
  },
  {
    text: "Headline",
    subtext: "Subheading*",
    imageWebp: insuranceWebp,
    imageAvif: insuranceAvif,
  },
];
