export type JuryMember = {
  key: string;
  nameHy: string;
  nameEn: string;
  titleHy: string;
  titleEn: string;
  organizationHy: string;
  organizationEn: string;
  image: string;
  imageClass?: string;
};
export const juryMembers: JuryMember[] = [
  {
  key: "amelia-arreguin-prado",
  nameHy: "Amelia Arreguin Prado",
  nameEn: "Amelia Arreguin Prado",
  titleHy: "Համակարգող",
  titleEn: "Coordinator",
  organizationHy: "Կենսաբազմազանության մասին կոնվենցիայի կանանց խմբակցություն",
  organizationEn: "CBD Women's Caucus",
  image: "/images/jury/amelia-arreguin-prado.jpeg",
},
 {
  key: "artem-kharazyan",
  nameHy: "Արտեմ Խարազյան",
  nameEn: "Artem Kharazyan",
  titleHy: "Ազգային փորձագետ Հայաստանում",
  titleEn: "Country Expert in Armenia",
  organizationHy: "«Քաղաքապետերի դաշնագիր՝ Արևելք»",
  organizationEn: "Covenant of Mayors East",
  image: "/images/jury/artem-kharazyan.jpeg",
  imageClass: "artemPhoto",
},
];
