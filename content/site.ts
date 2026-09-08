export type Locale = "hy" | "en";

type Category = { title: string; description: string; special?: boolean };
type TimelineItem = { date: string; title: string; note?: string };

export type SiteCopy = {
  languageLabel: string;
  nav: {
    home: string;
    about: string;
    categories: string;
    apply: string;
    timeline: string;
    jury: string;
    nominees: string;
    winners: string;
    contact: string;
  };
  nominate: string;
  learnMore: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    body: string;
    pillars: string[];
  };
  about: {
    title: string;
    body: string;
    stats: { value: string; label: string }[];
  };
  categoriesTitle: string;
  categoriesLead: string;
  categories: Category[];
  eligibility: {
    title: string;
    intro: string;
    bullets: string[];
    maleAlly: string;
    detailsButton: string;
  };
  infoSessions: {
  title: string;
  intro: string;
  sessions: {
    date: string;
    time: string;
    label: string;
  }[];
  join: string;
};
  timeline: {
    title: string;
    note: string;
    items: TimelineItem[];
  };
  recognition: {
    title: string;
    body: string;
    quote: string;
  };
  placeholders: {
    juryTitle: string;
    juryText: string;
    nomineesTitle: string;
    nomineesText: string;
    winnersTitle: string;
    winnersText: string;
  };
  footer: {
    organization: string;
    cooperation: string;
  };
};

export const copy: Record<Locale, SiteCopy> = {
  hy: {
    languageLabel: "Հայերեն",
    nav: {
      home: "Գլխավոր",
      about: "Մրցանակի մասին",
      categories: "Անվանակարգեր",
      apply: "Ինչպե՞ս մասնակցել",
      timeline: "Ժամանակացույց",
      jury: "Ժյուրի",
      nominees: "Թեկնածուներ",
      winners: "Հաղթողներ",
      contact: "Կապ",
    },
    nominate: "Առաջադրել թեկնածու",
    learnMore: "Իմանալ ավելին",
    hero: {
      eyebrow: "«ԿԱՆԱՅՔ ԿԼԻՄԱՅՈՒՄ» ՄՐՑԱՆԱԿԱԲԱՇԽՈՒԹՅՈՒՆ",
      title: "COP17 հատուկ թողարկում",
      subtitle: "Կանայք՝ կլիմայի և կենսաբազմազանության լուծումների առաջատարներ",
      body:
        "Մրցանակաբաշխությունը ճանաչում, խրախուսում և տեսանելի է դարձնում կանանց առաջնորդությունն ու ներդրումը կլիմայի փոփոխության և կենսաբազմազանության պահպանության ոլորտներում իրականացվող գործողություններում և լուծումներում։",
      pillars: [
        "Կլիմայական գործողություններ",
        "Կենսաբազմազանության պահպանում",
        "Կանանց առաջնորդություն",
        "Լուծումների առաջմղում",
      ],
    },
    about: {
      title: "Մրցանակաբաշխության մասին",
      body:
        "Հայաստանում 2022 և 2024 թվականներին կազմակերպված մրցանակաբաշխությունը ձևավորել է կանանց ներդրումը ճանաչելու, հաջողված լուծումները հանրայնացնելու և կանանց առաջնորդությունը խրախուսելու հարթակ։ COP17 հատուկ թողարկումը զարգացնում է այս փորձը՝ շեշտադրելով կլիմայի և կենսաբազմազանության փոխկապակցվածությունը և Հայաստանում ձևավորված լուծումների ներկայացումը ազգային ու միջազգային լսարանին։",
      stats: [
        { value: "2022 / 2024", label: "նախորդ մրցանակաբաշխություններ" },
        { value: "100–150", label: "հայտ և առաջադրում յուրաքանչյուր փուլում" },
        { value: "7 + 1", label: "յոթ հիմնական անվանակարգ և հատուկ ճանաչում" },
      ],
    },
    categoriesTitle: "Մրցանակաբաշխության անվանակարգերը",
    categoriesLead: "Յոթ հիմնական թեմատիկ ուղղություն և մեկ հատուկ ճանաչում",
    categories: [
      {
        title: "Կլիմայի փոփոխության մեղմում և կենսաբազմազանության պահպանում",
        description:
          "Կանանց կողմից առաջարկվող կամ առաջնորդվող լուծումներ՝ կլիմայի փոփոխության մեղմման, կենսաբազմազանության, բնական էկոհամակարգերի և բնական ռեսուրսների պահպանության կամ վերականգնման համար։",
      },
      {
        title: "Կլիմայի փոփոխության հարմարվողականություն և էկոհամակարգերի դիմակայունություն",
        description:
          "Կանանց կողմից առաջնորդվող լուծումներ՝ մարդկանց, համայնքների, տնտեսության և/կամ էկոհամակարգերի դիմակայունության բարձրացման համար։",
      },
      {
        title: "Համայնքային գործողություններ և քաղաքականություն",
        description:
          "Համայնքային նախաձեռնություններ, մասնակցային գործընթացներ, կառավարման կամ քաղաքականության լուծումներ՝ կլիմայական և/կամ կենսաբազմազանության խնդիրների հասցեագրման համար։",
      },
      {
        title: "Կլիմայի և կենսաբազմազանության խնդիրների ու լուծումների լուսաբանում",
        description:
          "Լրագրողների, հաղորդակցության մասնագետների և բովանդակություն ստեղծողների աշխատանքներ՝ հանրային իրազեկվածությունն ու մասնակցությունը բարձրացնելու համար։",
      },
      {
        title: "Կլիմայի և կենսաբազմազանության կրթություն բոլորի համար",
        description:
          "Կրթական ծրագրեր, մեթոդաբանություններ և նախաձեռնություններ, որոնք զարգացնում են գիտելիք ու կարողություններ և խրախուսում գործնական գործողությունները։",
      },
      {
        title: "Կլիմայական և բնապահպանական ֆինանսավորման ու նորարարության լուծումներ",
        description:
          "Ֆինանսական, տեխնոլոգիական, ձեռնարկատիրական, թվային կամ այլ նորարարական լուծումներ՝ կլիմայական գործողությունների և/կամ կենսաբազմազանության պահպանության համար։",
      },
      {
        title: "Երիտասարդները կլիմայական և բնապահպանական գործողություններում",
        description:
          "Երիտասարդ կանանց և աղջիկների կողմից առաջնորդվող նախաձեռնություններ՝ կլիմայական գործողությունների, բնության, կենսաբազմազանության, կրթության կամ նորարարության ոլորտներում։",
      },
      {
        title: "Հատուկ ճանաչում՝ կանանց կլիմայական և կենսաբազմազանության առաջնորդությանը աջակցող տղամարդ",
        description:
          "Պատվավոր հատուկ ճանաչում այն տղամարդու համար, ով շարունակական և նշանակալի աջակցություն է ցուցաբերել կանանց մասնակցությանը, առաջնորդությանը և մասնագիտական առաջընթացին։ Ինքնաառաջադրում չի թույլատրվում։",
        special: true,
      },
    ],
    eligibility: {
      title: "Ո՞վ կարող է մասնակցել",
      intro:
        "Մրցանակաբաշխության դիմումներն ընդունվում են ինքնաառաջադրմամբ կամ այլ կազմակերպության կամ կառույցի կողմից առաջադրմամբ։",
      bullets: [
        "Ինքնաառաջադրվել կարող են տարբեր ոլորտներում աշխատող կամ գործունեություն իրականացնող կանայք։",
        "Թեկնածուն պետք է ունենա ներկայացվող լուծման մշակման, իրականացման, ղեկավարման կամ առաջմղման գործում հստակ և հիմնավորելի դերակատարում։",
        "Մեկ լուծումը կարող է ներկայացվել առավելագույնը երկու անվանակարգում, եթե համապատասխանում է երկու ուղղությունների չափորոշիչներին։",
        "Ինքնաառաջադրման դեպքում պահանջվում է առնվազն մեկ երաշխավորագիր։",
        "Նախատեսվում է ընդունել վերջին հինգ տարիների ընթացքում իրականացված կամ շարունակվող և արդեն արդյունքներ ունեցող լուծումներ։",
      ],
      maleAlly:
        "Male Ally հատուկ ճանաչման համար թեկնածու կարող են առաջադրել կանայք, կազմակերպությունները, հաստատությունները կամ մասնագիտական գործընկերները։ Ինքնաառաջադրում չի թույլատրվում։ Հատուկ ճանաչումը պատվավոր է և չի ներառում յոթ հիմնական անվանակարգերի հաղթողների համար նախատեսված դրամական մրցանակը։",
      detailsButton: "Դիտել մասնակցության պայմանները",
    },
    hy: {
  ...

  eligibility: {
    title: "Ո՞վ կարող է մասնակցել",
    ...
  },

  infoSessions: {
    title: "Տեղեկատվական առցանց հանդիպումներ",
    intro:
      "Հայտերի ընդունման ընթացքում կանցկացվեն երկու առցանց տեղեկատվական և հարցուպատասխանի հանդիպումներ՝ անվանակարգերի, մասնակցության պայմանների, գնահատման չափորոշիչների և հայտադիմումի լրացման վերաբերյալ պարզաբանումներ տրամադրելու համար։",
    sessions: [
      {
        date: "15 սեպտեմբերի 2026",
        time: "15:00՝ Երևանի ժամանակով",
        label: "Տեղեկատվական և հարցուպատասխանի հանդիպում",
      },
      {
        date: "22 սեպտեմբերի 2026",
        time: "15:00՝ Երևանի ժամանակով",
        label: "Տեղեկատվական և հարցուպատասխանի հանդիպում",
      },
    ],
    join: "Միանալ Zoom հանդիպմանը",
  },

  timeline: {
    ...
  },
    timeline: {
      title: "Նախնական ժամանակացույց",
      note: "Ժամկետները ենթակա են վերջնական հաստատման և կարող են թարմացվել։",
      items: [
        { date: "8–30 սեպտեմբեր 2026", title: "Հայտերի ընդունում", note: "23 օրացուցային օր" },
        { date: "30 սեպտեմբեր – 5 հոկտեմբեր", title: "Տեխնիկական ստուգում" },
        { date: "5–15 հոկտեմբեր", title: "Ժյուրիի գնահատում" },
        { date: "15–19 հոկտեմբեր", title: "Արդյունքների ամփոփում" },
        { date: "23 հոկտեմբեր", title: "Մրցանակաբաշխություն", note: "COP17 Կանաչ գոտի, Երևան" },
        { date: "27 հոկտեմբեր", title: "Հաղթողների թեմատիկ պանել", note: "28 հոկտեմբերը՝ այլընտրանքային օր" },
      ],
    },
    recognition: {
      title: "Ճանաչումից դեպի լուծումների առաջմղում",
      body:
        "Յոթ հիմնական անվանակարգերից յուրաքանչյուրի հաղթողին կտրամադրվի 300,000 ՀՀ դրամ մրցանակային գումար՝ ներառյալ կիրառելի հարկերը։ Մրցանակը նպատակ ունի նպաստել հաղթող լուծման հետագա զարգացմանը, տեսանելիությանը, կրկնօրինակմանը կամ ընդլայնմանը։ Հաղթողները նաև հնարավորություն կունենան COP17-ի շրջանակում ներկայացնելու իրենց փորձը, լուծումները և դրանց ընդլայնման ներուժը։",
    },
    placeholders: {
      juryTitle: "Ժյուրի",
      juryText: "Ժյուրիի կազմը կհրապարակվի հաստատումից հետո։",
      nomineesTitle: "Թեկնածուներ",
      nomineesText: "Թեկնածուների մասին տեղեկատվությունը կհրապարակվի առաջադրումների և համապատասխանության ստուգման ավարտից հետո։",
      winnersTitle: "Հաղթողներ",
      winnersText: "Հաղթողները կհայտարարվեն գնահատման գործընթացի ավարտից հետո։",
    },
    footer: {
      organization: "Կանայք կլիմայում և էներգետիկայում (WiCE) ՀԿ",
      cooperation: "ՀՀ շրջակա միջավայրի նախարարության հետ համագործակցությամբ",
    },
  },
  en: {
    languageLabel: "English",
    nav: {
      home: "Home",
      about: "About",
      categories: "Categories",
      apply: "How to Apply",
      timeline: "Timeline",
      jury: "Jury",
      nominees: "Nominees",
      winners: "Winners",
      contact: "Contact",
    },
    nominate: "Nominate a Candidate",
    learnMore: "Learn More",
    hero: {
      eyebrow: "WOMEN IN CLIMATE AWARDS",
      title: "COP17 Special Edition",
      subtitle: "Women Leading at the Climate-Biodiversity Nexus",
      body:
        "Recognizing, encouraging and increasing the visibility of women’s leadership and contributions to actions and solutions in climate change and biodiversity conservation.",
      pillars: ["Climate Action", "Biodiversity Conservation", "Women’s Leadership", "Advancing Solutions"],
    },
    about: {
      title: "About the Awards",
      body:
        "The Awards organized in Armenia in 2022 and 2024 established a platform for recognizing women’s contributions, showcasing successful solutions and promoting women’s leadership. The COP17 Special Edition builds on that experience, highlighting the climate-biodiversity nexus and presenting solutions developed in Armenia to national and international COP17 audiences.",
      stats: [
        { value: "2022 / 2024", label: "previous editions" },
        { value: "100–150", label: "applications and nominations per edition" },
        { value: "7 + 1", label: "seven main categories and a special recognition" },
      ],
    },
    categoriesTitle: "Award Categories",
    categoriesLead: "Seven thematic categories and one special recognition",
    categories: [
      {
        title: "Climate Change Mitigation and Biodiversity Conservation",
        description:
          "Women-led solutions contributing to climate change mitigation and/or the conservation or restoration of biodiversity, natural ecosystems and natural resources.",
      },
      {
        title: "Climate Change Adaptation and Ecosystem Resilience",
        description:
          "Women-led solutions strengthening the resilience of people, communities, the economy and/or ecosystems to climate risks.",
      },
      {
        title: "Community Action and Policy",
        description:
          "Women-led community initiatives, participatory processes, governance approaches or policy solutions addressing climate and/or biodiversity challenges.",
      },
      {
        title: "Communication on Climate and Biodiversity Challenges and Solutions",
        description:
          "Work by journalists, communication professionals, content creators and other practitioners that raises public awareness and promotes engagement.",
      },
      {
        title: "Climate and Biodiversity Education for All",
        description:
          "Educational programmes, methodologies and initiatives that build knowledge and capacities on climate, nature and biodiversity and encourage practical action.",
      },
      {
        title: "Climate and Environmental Finance and Innovation Solutions",
        description:
          "Financial, technological, entrepreneurial, digital or other innovative solutions contributing to climate action and/or biodiversity conservation.",
      },
      {
        title: "Youth in Climate and Environmental Action",
        description:
          "Initiatives led by young women and girls contributing to climate action, nature and biodiversity conservation, environmental education or innovative solutions.",
      },
      {
        title: "Special Recognition: Male Ally for Women’s Climate and Biodiversity Leadership",
        description:
          "Honorary recognition for a man who has demonstrated sustained and meaningful support for women’s participation, leadership and professional advancement. Self-nominations are not accepted.",
        special: true,
      },
    ],
    eligibility: {
      title: "Who Can Be Nominated?",
      intro:
        "Applications are accepted through self-nomination or nomination by another organization or institution.",
      bullets: [
        "Women working or carrying out activities in different sectors may self-nominate.",
        "The candidate must have a clear and demonstrable role in developing, implementing, leading or advancing the submitted solution.",
        "A single solution may be submitted in a maximum of two categories where it meets both sets of criteria.",
        "Self-nominated candidates are required to submit at least one letter of recommendation.",
        "Eligible solutions are expected to include those implemented or ongoing during the last five years and already demonstrating assessable results.",
      ],
      maleAlly:
        "For the Male Ally Special Recognition, nominations may be submitted by women, organizations, institutions or professional peers. Self-nomination is not permitted. The recognition is honorary and does not include the catalytic cash award provided to winners of the seven main categories.",
      detailsButton: "View Eligibility Details",
    },
    infoSessions: {
  title: "Online Information Sessions",
  intro:
    "Two online information and Q&A sessions will be held during the application period to provide guidance on the award categories, eligibility and participation requirements, evaluation criteria, and completion of the application form.",
  sessions: [
    {
      date: "15 September 2026",
      time: "15:00 Yerevan time",
      label: "Online information and Q&A session",
    },
    {
      date: "22 September 2026",
      time: "15:00 Yerevan time",
      label: "Online information and Q&A session",
    },
  ],
  join: "Join Zoom session",
},
    timeline: {
      title: "Indicative Timeline",
      note: "Dates are subject to final confirmation and may be updated.",
      items: [
        { date: "8–30 September 2026", title: "Application period", note: "23 calendar days" },
        { date: "30 Sep – 5 Oct", title: "Screening" },
        { date: "5–15 October", title: "Jury scoring" },
        { date: "15–19 October", title: "Results" },
        { date: "23 October", title: "Awards Ceremony", note: "COP17 Green Zone, Yerevan" },
        { date: "27 October", title: "Thematic panel with winners", note: "28 October as an alternative date" },
      ],
    },
    recognition: {
      title: "From Recognition to Advancing Solutions",
      body:
        "Each winner in the seven main award categories will receive an award of AMD 300,000, inclusive of applicable taxes. The award is intended to support the further development, visibility, replication or scaling of the winning solution. Winners will also have opportunities within COP17 to present their experience, solutions and potential for scaling.",
      quote: "Investing in women’s leadership is investing in a more resilient and biodiverse future.",
    },
    placeholders: {
      juryTitle: "Jury",
      juryText: "The Jury composition will be published once confirmed.",
      nomineesTitle: "Nominees",
      nomineesText: "Nominee information will be published after the nomination and eligibility screening process.",
      winnersTitle: "Winners",
      winnersText: "Winners will be announced after completion of the evaluation process.",
    },
    footer: {
      organization: "Women in Climate and Energy (WiCE) NGO",
      cooperation: "In cooperation with the Ministry of Environment of the Republic of Armenia",
    },
  },
};
