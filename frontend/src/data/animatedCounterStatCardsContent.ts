export interface AnimatedCounterStatCard {
  id: string;
  number: string;
  duration: string;
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

export const animatedCounterStatsCardContent: AnimatedCounterStatCard[] = [
  {
    id: "001",
    duration: "600",
    number: "25.5",
    text: "Decimal Numbers",
    subtext: "Subtext",
    imageWebp: benefitsWebp,
    imageAvif: benefitsAvif,
  },
  {
    number: "17",
    duration: "1200",
    id: "002",
    text: "Whole Numbers",
    subtext: "Subtext",
    imageWebp: graphWebp,
    imageAvif: graphAvif,
  },
  {
    number: "20,500",
    duration: "2400",
    id: "003",
    text: "With Commas",
    subtext: "Subtext",
    imageWebp: locationWebp,
    imageAvif: locationAvif,
  },
  {
    number: "100",
    duration: "3000",
    id: "004",
    text: "All timings flexible",
    subtext: "Subtext",
    imageWebp: insuranceWebp,
    imageAvif: insuranceAvif,
  },
];
