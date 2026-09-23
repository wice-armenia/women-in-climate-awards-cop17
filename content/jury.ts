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
  {
  key: "laura-milne",
  nameHy: "Laura Milne",
  nameEn: "Laura Milne",
  titleHy: "Հայաստանի գրասենյակի տնօրեն",
  titleEn: "Country Director, Armenia",
  organizationHy: "Ռաուլ Վալենբերգի մարդու իրավունքների և մարդասիրական իրավունքի ինստիտուտ",
  organizationEn: "Raoul Wallenberg Institute of Human Rights and Humanitarian Law",
  image: "/images/jury/laura-milne.JPG",
},
{
  key: "olga-azatyan",
  nameHy: "Օլգա Ազատյան",
  nameEn: "Olga Azatyan",
  titleHy: "Ծրագրի մասնագետ",
  titleEn: "Programme Specialist",
  organizationHy: "ՄԱԿ Կանայք հայաստանյան գրասենյակ",
  organizationEn: "UN Women Armenia Office",
  image: "/images/jury/olga-azatyan.jpeg",
},
];
