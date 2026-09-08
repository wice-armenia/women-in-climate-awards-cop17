import type { Locale } from "@/content/site";

export type PartnershipLevel = {
  title: string;
  contribution: string;
  recognition: string;
};

type PartnershipCopy = {
  title: string;
  intro: string;
  note: string;
  contributionHeading: string;
  recognitionHeading: string;
  levels: PartnershipLevel[];
  principlesTitle: string;
  principles: { title: string; text: string }[];
  closing: string;
  contactTitle: string;
  contactText: string;
  back: string;
};

export const partnershipCopy: Record<Locale, PartnershipCopy> = {
  hy: {
    title: "Դարձեք գործընկեր",
    intro: "«Կանայք կլիմայում» մրցանակաբաշխության COP17 հատուկ թողարկման գործընկերությունը հնարավորություն է տալիս աջակցելու կանանց առաջնորդությանը, կիրառելի կլիմայական և կենսաբազմազանության լուծումների տեսանելիությանը և դրանց հետագա զարգացմանը։",
    note: "Գործընկերության մակարդակը որոշվում է COP17 հատուկ թողարկման ընդհանուր նախաձեռնությանը գործընկերոջ ամբողջական ներդրման հիման վրա՝ անկախ նրանից՝ աջակցությունը վերաբերում է մեկ, թե մի քանի աշխատանքային ուղղությունների։",
    contributionHeading: "Կողմնորոշիչ ներդրում",
    recognitionHeading: "Ճանաչում և ներգրավում",
    levels: [
      { title: "Առաջատար գործընկեր", contribution: "15,000 ԱՄՆ դոլարից սկսած", recognition: "Ճանաչում որպես ընդհանուր նախաձեռնության Առաջատար գործընկեր, առաջնային տեսանելիություն հիմնական մրցանակաբաշխության նյութերում և երկլեզու հրապարակման մեջ՝ համապատասխան հաստատումների պայմանով, բարձր մակարդակի մասնակցություն մրցանակաբաշխությանը, բացման խոսքի, մրցանակի հանձնման կամ թեմատիկ քննարկման մասնակցության հնարավորություն՝ ծրագրային նպատակահարմարության դեպքում, շփում հաղթողների և ընտրված լուծումների հետ, հրավերներ COP17-ին առնչվող միջոցառումներին և հետմիջոցառման արդյունքների ու տեսանելիության ամփոփում։" },
      { title: "Ծրագրային գործընկեր", contribution: "7,500–14,999 ԱՄՆ դոլար", recognition: "Ճանաչում որպես ընդհանուր նախաձեռնության Ծրագրային գործընկեր, լոգոյի և անվան ներկայացում համապատասխան ծրագրային նյութերում և երկլեզու հրապարակման մեջ՝ հաստատումների պայմանով, մասնակցություն մրցանակաբաշխությանը և հարակից քննարկումներին, շփում հաղթողների ու ընտրված լուծումների հետ, հիշատակում հաղորդակցական և արդյունքների նյութերում և հրավերներ COP17-ին առնչվող միջոցառումներին։" },
      { title: "Ներդրումային գործընկեր", contribution: "3,000–7,499 ԱՄՆ դոլար", recognition: "Ճանաչում որպես Ներդրումային գործընկեր, հիշատակում համապատասխան միջոցառումների, թվային և հրապարակման նյութերում՝ անհրաժեշտ հաստատումների պայմանով, հրավերներ մրցանակաբաշխությանը և հարակից միջոցառումներին, շփման հնարավորություններ հաղթողների և լուծումների հետ, ինչպես նաև հասանելիություն վերջնական գիտելիքային և արդյունքների նյութերին։" },
      { title: "Աջակցող / բնաիրային գործընկեր", contribution: "3,000 ԱՄՆ դոլարից պակաս կամ բնաիրային աջակցություն", recognition: "Ճանաչումը կհարմարեցվի ներդրման բնույթին և արժեքին և կարող է ներառել հիշատակում համապատասխան նյութերում, հրավերներ մրցանակաբաշխությանը և հարակից միջոցառումներին, ինչպես նաև ծրագրի գիտելիքային նյութերի և արդյունքների հասանելիություն։" },
    ],
    principlesTitle: "Գործընկերության սկզբունքներ",
    principles: [
      { title: "Հարմարեցված ճանաչում", text: "Ճանաչման ձևն ու մակարդակը յուրաքանչյուր գործընկերոջ հետ կհամաձայնեցվեն՝ ըստ աջակցության բնույթի և մակարդակի, կազմակերպության ներքին քաղաքականությունների և կիրառելի COP17/CBD բրենդային պահանջների։" },
      { title: "Ծրագրի ամբողջականություն", text: "Ֆինանսական աջակցությունը որևէ ազդեցություն չի տալիս մրցանակակիրների ընտրության վրա։ Բոլոր առաջադրումները և մրցանակային որոշումները կառավարվում են անկախ Ժյուրիի գնահատման գործընթացով։" },
      { title: "Ծրագրային դերեր", text: "Ժյուրիի մասնակցությունը, ելույթները և մրցանակների հանձնման հնարավորությունները որոշվում են մասնագիտական համապատասխանությամբ, ծրագրային նպատակահարմարությամբ և շահերի բախման նկատառումներով և ավտոմատ կերպով կապված չեն ֆինանսական ներդրման մակարդակին։" },
      { title: "Ներգրավում՝ տեսանելիությունից անդին", text: "Համապատասխան դեպքերում գործընկերները կարող են համագործակցել հաղթողների և ընտրված լուծումների հետ՝ կրկնօրինակման, ընդլայնման, տեխնիկական համագործակցության, ֆինանսավորման և ապագա գործընկերությունների շուրջ։" },
    ],
    closing: "Գործընկերները կարող են աջակցել նախաձեռնությանը որպես ամբողջություն կամ իրենց ներդրումը հիմնականում կապել որևէ կոնկրետ աշխատանքային ուղղության հետ, մինչդեռ գործընկերության մակարդակը արտացոլում է COP17 հատուկ թողարկման ընդհանուր նախաձեռնությանը նրանց ամբողջական ներդրումը։",
    contactTitle: "Հետաքրքրվա՞ծ եք համագործակցությամբ",
    contactText: "Կապվեք WiCE-ի հետ՝ գործընկերության ձևաչափը, ներդրման ուղղությունը և ճանաչման հնարավորությունները քննարկելու համար։",
    back: "Վերադառնալ մրցանակաբաշխության էջ",
  },
  en: {
    title: "Become a Partner",
    intro: "Partnership with the Women in Climate Awards | COP17 Special Edition offers an opportunity to support women’s leadership, increase the visibility of practical climate and biodiversity solutions, and help advance their future development and scaling.",
    note: "Recognition is based on the partner’s total contribution to the overall COP17 Special Edition, regardless of whether the contribution supports one or several workstreams.",
    contributionHeading: "Indicative Contribution",
    recognitionHeading: "Recognition & Engagement",
    levels: [
      { title: "Lead Partner", contribution: "USD 15,000+", recognition: "Recognition as a Lead Partner of the overall Women in Climate Awards: COP17 Special Edition; prominent acknowledgement/logo across key Awards materials and the bilingual publication, subject to institutional approval; high-level participation in the Awards Ceremony; opportunity to contribute opening remarks, present an award or join a relevant panel/dialogue where programmatically appropriate; engagement with winners and selected solutions; invitation to related COP17 activities; and a post-event results and visibility summary." },
      { title: "Programme Partner", contribution: "USD 7,500–14,999", recognition: "Recognition as a Programme Partner of the overall initiative; acknowledgement/logo on relevant programme materials and in the bilingual publication, subject to approval; participation in the Awards Ceremony and related discussions; engagement with winners and selected solutions; recognition in relevant communications and results materials; and invitations to related COP17 activities." },
      { title: "Contributing Partner", contribution: "USD 3,000–7,499", recognition: "Recognition as a Contributing Partner; acknowledgement on relevant event, digital and publication materials where appropriate and subject to approval; invitations to the Awards Ceremony and related activities; engagement opportunities with winners and solutions; and access to final knowledge products and results." },
      { title: "Supporting / In-kind Partner", contribution: "Below USD 3,000 or in-kind", recognition: "Recognition tailored to the nature and value of the contribution, which may include acknowledgement in relevant materials, invitations to Awards-related activities and access to programme knowledge products and results." },
    ],
    principlesTitle: "Partnership Principles",
    principles: [
      { title: "Tailored recognition", text: "The form and level of acknowledgement will be agreed with each partner according to the nature and level of support, institutional policies and applicable COP17/CBD branding requirements." },
      { title: "Programme integrity", text: "Financial support does not confer influence over the selection of awardees. All nominations and award decisions are managed through an independent Jury process." },
      { title: "Programme roles", text: "Jury participation, speaking roles and award presentation opportunities are determined by expertise, programme relevance and conflict-of-interest considerations and are not automatically linked to the level of financial contribution." },
      { title: "Engagement beyond visibility", text: "Where relevant, partners may engage with award winners and selected solutions around replication, scaling, technical cooperation, financing and future partnership opportunities." },
    ],
    closing: "Partners may support the initiative as a whole or associate their contribution primarily with a specific workstream, while partnership level reflects their total contribution to the overall COP17 Special Edition.",
    contactTitle: "Interested in partnering?",
    contactText: "Contact WiCE to discuss the most suitable partnership format, areas of support and recognition opportunities.",
    back: "Back to the Awards",
  },
};
