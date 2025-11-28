export interface StatCard {
  text: string;
  subtext?: string;
  imageWebp: string;
  imageAvif: string;
}

import benefitsWebp from "../assets/icons/benefits_61_61.webp";
import benefitsAvif from "../assets/icons/benefits_61_61.avif";
import graphWebp from "../assets/icons/graph_61_61.webp";
import graphAvif from "../assets/icons/graph_61_61.avif";
import locationWebp from "../assets/icons/location_61_61.webp";
import locationAvif from "../assets/icons/location_61_61.avif";
import insuranceWebp from "../assets/icons/insurance_61_61.webp";
import insuranceAvif from "../assets/icons/insurance_61_61.avif";

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
