export type JuryMember = {
  key: string;
  nameHy: string;
  nameEn: string;
  titleHy: string;
  titleEn: string;
  organizationHy: string;
  organizationEn: string;
  juryRoleHy?: string;
  juryRoleEn?: string;
  image?: string;
  imageClass?: string;
  placeholder?: boolean;
};
export const juryMembers: JuryMember[] = [
  {
  key: "amelia-arreguin-prado",
  nameHy: "Ամելիա Արրեգուին Պրադո",
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
  nameHy: "Լաուրա Միլնե",
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
{
  key: "nona-budoyan",
  nameHy: "Նոնա Բուդոյան",
  nameEn: "Nona Budoyan",
  titleHy: "Կլիմայական քաղաքականության վարչության պետ",
  titleEn: "Head of Climate Policy Department",
  organizationHy: "ՀՀ շրջակա միջավայրի նախարարություն",
  organizationEn: "Ministry of Environment of the Republic of Armenia",
  image: "/images/jury/nona-budoyan.JPG",
},
{
  key: "diana-harutyunyan",
  nameHy: "Դոկտոր Դիանա Հարությունյան",
  nameEn: "Dr. Diana Harutyunyan",
  titleHy: "Հայաստանում կլիմայի փոփոխության ծրագրի ավագ խորհրդական",
  titleEn: "Senior Adviser, Climate Change Programme in Armenia",
  organizationHy: "ՄԱԿ-ի զարգացման ծրագիր (UNDP)",
  organizationEn: "United Nations Development Programme (UNDP)",
  image: "/images/jury/diana-harutyunyan.jpg",
},
  {
  key: "vahan-amirkhanyan",
  nameHy: "Վահան Ամիրխանյան",
  nameEn: "Vahan Amirkhanyan",
  titleHy: "Գյուղատնտեսության մասնագետ",
  titleEn: "Agriculture Specialist",
  organizationHy: "ՄԱԿ-ի Պարենի և գյուղատնտեսության կազմակերպություն (FAO)",
  organizationEn: "Food and Agriculture Organization of the United Nations (FAO)",
  placeholder: true,
},
{
  key: "bella-vasilyan",
  nameHy: "Բելլա Վասիլյան",
  nameEn: "Bella Vasilyan",
  titleHy: "Թումո լաբերի ղեկավար",
  titleEn: "Head of TUMO Labs",
  organizationHy: "Թումո լաբեր",
  organizationEn: "TUMO Labs",
  image: "/images/jury/bella-vasilyan.png",
},
{
  key: "siranush-galstyan",
  nameHy: "Սիրանուշ Գալստյան",
  nameEn: "Siranush Galstyan",
  titleHy: "SE4Resilience ծրագրի խորհրդատու",
  titleEn: "Advisor, SE4Resilience Project",
  organizationHy: "Գերմանիայի միջազգային համագործակցության ընկերություն (GIZ)",
  organizationEn: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH",
  placeholder: true,
},
 {
  key: "astghine-pasoyan",
  nameHy: "Աստղինե Պասոյան",
  nameEn: "Astghine Pasoyan",
  titleHy: "Տնօրեն",
  titleEn: "Director",
  organizationHy: "Էներգախնայողության աջակցման հիմնադրամ",
  organizationEn: "Energy Saving Foundation",
  juryRoleHy: "Ժյուրիի փոխարինող գնահատող",
  juryRoleEn: "Alternate Jury Assessor",
  image: "/images/jury/astghine-pasoyan.jpeg",
  imageClass: "astghinePhoto",
},
];
