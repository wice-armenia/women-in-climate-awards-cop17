export type Locale = "hy" | "en";

type Category = {
  number: string;
  title: string;
  description: string;
  special?: boolean;
};

type TimelineItem = {
  date: string;
  title: string;
  note?: string;
  zoom?: boolean;
};

type SiteCopy = {
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
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    body: string;
    nominate: string;
    learnMore: string;
  };
  about: {
    title: string;
    body: string[];
    stats: { value: string; label: string }[];
  };
  categories: {
    title: string;
    intro: string;
    items: Category[];
  };
  eligibility: {
    title: string;
    intro: string;
    bullets: string[];
    maleAllyNote: string;
    cta: string;
  };
  timeline: {
    title: string;
    intro: string;
    items: TimelineItem[];
  };
  infoSessions: {
    title: string;
    intro: string;
    join: string;
  };
  recognition: {
    title: string;
    amount: string;
    body: string;
    quote: string;
  };
  placeholders: {
    juryTitle: string;
    juryBody: string;
    nomineesTitle: string;
    nomineesBody: string;
    winnersTitle: string;
    winnersBody: string;
  };
  partners: {
    title: string;
    lead: string;
    partner: string;
    supporting: string;
    become: string;
  };
  footer: {
    name: string;
    contact: string;
    website: string;
    facebook: string;
  };
};

export const copy: Record<Locale, SiteCopy> = {
  hy: {
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
    hero: {
      kicker: "«ԿԱՆԱՅՔ ԿԼԻՄԱՅՈՒՄ» ՄՐՑԱՆԱԿԱԲԱՇԽՈՒԹՅՈՒՆ",
      title: "COP17 հատուկ թողարկում",
      subtitle: "Կանայք՝ կլիմայի և կենսաբազմազանության լուծումների առաջատարներ",
      body:
        "Մրցանակաբաշխությունը ճանաչում, խրախուսում և տեսանելի է դարձնում կանանց առաջնորդությունն ու ներդրումը կլիմայի փոփոխության և կենսաբազմազանության պահպանության ոլորտներում իրականացվող գործողություններում և լուծումներում։",
      nominate: "Առաջադրել թեկնածու",
      learnMore: "Իմանալ ավելին",
    },
    about: {
      title: "Մրցանակաբաշխության մասին",
      body: [
        "Հայաստանում 2022 և 2024 թվականներին կազմակերպված մրցանակաբաշխությունները ձևավորել են կանանց ներդրումը ճանաչելու, հաջողված լուծումները հանրայնացնելու և կանանց առաջնորդությունը խրախուսելու հարթակ։ Յուրաքանչյուր փուլում ստացվել է շուրջ 100–150 հայտ և առաջադրում՝ տարբեր ոլորտներից և Հայաստանի տարբեր համայնքներից։",
        "COP17 հատուկ թողարկումը զարգացնում է այդ փորձը՝ կլիմայի փոփոխության և կենսաբազմազանության փոխկապակցվածության համատեքստում։ COP17-ը Երևանում անցկացվելու է 2026 թվականի հոկտեմբերի 19–30-ը։",
        "Հատուկ թողարկման առանցքային մոտեցումն է՝ «ճանաչումից դեպի լուծումների առաջմղում»։ Հաղթողները հնարավորություն կունենան COP17-ի շրջանակում ներկայացնելու իրենց փորձը, լուծումները և դրանց ընդլայնման ներուժը։",
      ],
      stats: [
        { value: "2022 • 2024", label: "նախորդ մրցանակաբաշխություններ" },
        { value: "100–150", label: "հայտ և առաջադրում յուրաքանչյուր փուլում" },
        { value: "7 + 1", label: "յոթ հիմնական անվանակարգ և մեկ հատուկ ճանաչում" },
        { value: "COP17", label: "ազգային փորձը՝ միջազգային լսարանին" },
      ],
    },
    categories: {
      title: "Մրցանակաբաշխության անվանակարգերը",
      intro:
        "Յոթ հիմնական թեմատիկ ուղղություններ՝ COP17 հատուկ թողարկման շրջանակին համապատասխանեցված նկարագրություններով, ինչպես նաև մեկ հատուկ ճանաչում։",
      items: [
        { number: "01", title: "Կլիմայի փոփոխության մեղմում և կենսաբազմազանության պահպանում", description: "Կանանց կողմից առաջարկվող կամ առաջնորդվող լուծումներ՝ կլիմայի փոփոխության մեղմման, կենսաբազմազանության, բնական էկոհամակարգերի և բնական ռեսուրսների պահպանության կամ վերականգնման համար։" },
        { number: "02", title: "Կլիմայի փոփոխության հարմարվողականություն և էկոհամակարգերի դիմակայունություն", description: "Լուծումներ՝ ուղղված մարդկանց, համայնքների, տնտեսության և/կամ էկոհամակարգերի դիմակայունության բարձրացմանը։ Խրախուսվում են բնության և էկոհամակարգերի վրա հիմնված մոտեցումները։" },
        { number: "03", title: "Համայնքային գործողություններ և քաղաքականություն", description: "Համայնքային նախաձեռնություններ, մասնակցային գործընթացներ, կառավարման կամ քաղաքականության լուծումներ՝ կլիմայական և/կամ կենսաբազմազանության խնդիրների հասցեագրման համար։" },
        { number: "04", title: "Կլիմայի և կենսաբազմազանության խնդիրների ու լուծումների լուսաբանում", description: "Լրագրողների, հաղորդակցության մասնագետների, բովանդակություն ստեղծողների և այլ մասնագետների աշխատանքներ, որոնք բարձրացնում են հանրային իրազեկվածությունն ու մասնակցությունը։" },
        { number: "05", title: "Կլիմայի և կենսաբազմազանության կրթություն բոլորի համար", description: "Կրթական ծրագրեր, մեթոդաբանություններ և նախաձեռնություններ՝ կլիմայի, բնության և կենսաբազմազանության վերաբերյալ գիտելիք, կարողություններ և գործնական գործողություններ ձևավորելու համար։" },
        { number: "06", title: "Կլիմայական և բնապահպանական ֆինանսավորման ու նորարարության լուծումներ", description: "Ֆինանսական, տեխնոլոգիական, ձեռնարկատիրական, թվային կամ այլ նորարարական լուծումներ՝ կլիմայական գործողությունների և/կամ կենսաբազմազանության պահպանության համար։" },
        { number: "07", title: "Երիտասարդները կլիմայական և բնապահպանական գործողություններում", description: "Երիտասարդ կանանց և աղջիկների կողմից առաջնորդվող նախաձեռնություններ՝ կլիմայական գործողությունների, բնության ու կենսաբազմազանության պահպանության, կրթության կամ նորարարության ոլորտներում։" },
        { number: "★", title: "Հատուկ ճանաչում՝ կանանց կլիմայական և կենսաբազմազանության առաջնորդության աջակից տղամարդու համար", description: "Պատվավոր հատուկ ճանաչում կարող է շնորհվել տղամարդու, որը շարունակական և նշանակալի աջակցություն է ցուցաբերել կանանց մասնակցությանը, առաջնորդությանը և մասնագիտական առաջխաղացմանը։ Ինքնաառաջադրում չի ընդունվում, և հատուկ ճանաչումը չի ներառում յոթ հիմնական անվանակարգերի համար նախատեսված դրամական մրցանակը։", special: true },
      ],
    },
    eligibility: {
      title: "Ո՞վ կարող է մասնակցել",
      intro: "Հայտերն ընդունվում են ինքնաառաջադրմամբ կամ այլ կազմակերպության կամ կառույցի կողմից առաջադրմամբ։",
      bullets: [
        "Ինքնաառաջադրվել կարող են տարբեր ոլորտներում աշխատող կամ գործունեություն իրականացնող կանայք։",
        "Թեկնածուն պետք է ունենա ներկայացվող լուծման մշակման, իրականացման, ղեկավարման կամ առաջմղման գործում հստակ և հիմնավորելի դերակատարում։",
        "Թեկնածուներ կարող են առաջադրել պետական և տեղական կառավարման մարմինները, հասարակական և միջազգային կազմակերպությունները, գիտական ու կրթական հաստատությունները, մասնավոր ընկերությունները, մասնագիտական միավորումները և այլ կառույցներ։",
        "Կազմակերպությունը կարող է առաջադրել մեկից ավելի թեկնածու կամ լուծում, իսկ մեկ լուծումը կարող է ներկայացվել առավելագույնը երկու անվանակարգում, եթե համապատասխանում է երկու անվանակարգերի չափորոշիչներին։",
        "Ինքնաառաջադրման դեպքում անհրաժեշտ է ներկայացնել առնվազն մեկ երաշխավորագիր։",
        "Ընդունվում են վերջին հինգ տարիների ընթացքում իրականացված կամ շարունակվող այն լուծումները, որոնք արդեն ունեն ներկայացման և գնահատման ենթակա արդյունքներ։",
      ],
      maleAllyNote: "Հատուկ ճանաչման համար տղամարդ թեկնածուն կարող է առաջադրվել կանանց, կազմակերպությունների, հաստատությունների կամ մասնագիտական գործընկերների կողմից։ Ինքնաառաջադրում չի ընդունվում։",
      cta: "Առաջադրել թեկնածու",
    },
    timeline: {
      title: "Հիմնական ժամանակացույց",
      intro: "Հայտերի ընդունումը բաց է 2026 թվականի սեպտեմբերի 8-ից մինչև սեպտեմբերի 30-ը։",
      items: [
        { date: "8 սեպտեմբերի 2026", title: "Հայտերի ընդունման մեկնարկ" },
        { date: "15 սեպտեմբերի 2026 • 15:00", title: "Տեղեկատվական և հարցուպատասխանի առցանց հանդիպում", note: "Երևանի ժամանակով (UTC+4)", zoom: true },
        { date: "22 սեպտեմբերի 2026 • 15:00", title: "Տեղեկատվական և հարցուպատասխանի առցանց հանդիպում", note: "Երևանի ժամանակով (UTC+4)", zoom: true },
        { date: "30 սեպտեմբերի 2026", title: "Հայտերի ընդունման վերջնաժամկետ" },
        { date: "23 հոկտեմբերի 2026", title: "COP17 Կանաչ գոտում նախատեսվող մրցանակաբաշխություն", note: "Երևան" },
        { date: "27 հոկտեմբերի 2026", title: "Հաղթողների մասնակցությամբ նախատեսվող թեմատիկ պանելային քննարկում" },
      ],
    },
    infoSessions: {
      title: "Տեղեկատվական առցանց հանդիպումներ",
      intro: "Հայտերի ընդունման ընթացքում կանցկացվեն երկու առցանց տեղեկատվական և հարցուպատասխանի հանդիպումներ՝ անվանակարգերի, մասնակցության պայմանների, գնահատման չափորոշիչների և հայտադիմումի լրացման վերաբերյալ պարզաբանումներ տրամադրելու համար։",
      join: "Միանալ Zoom հանդիպմանը",
    },
    recognition: {
      title: "Ճանաչումից դեպի լուծումների առաջմղում",
      amount: "300,000 ՀՀ դրամ",
      body: "Յոթ հիմնական անվանակարգերից յուրաքանչյուրի հաղթողին կտրամադրվի 300,000 ՀՀ դրամ մրցանակային գումար՝ ներառյալ կիրառելի հարկերը։ Մրցանակը նպատակ ունի նպաստել հաղթող լուծման հետագա զարգացմանը, տեսանելիությանը, կրկնօրինակմանը կամ ընդլայնմանը։ Հաղթողները նաև հնարավորություն կունենան COP17-ի շրջանակում ներկայացնելու իրենց փորձը, լուծումները և դրանց ընդլայնման ներուժը։",
      quote: "Առաջնորդության ճանաչումն ու խրախուսումը նպաստում են ավելի դիմակայուն և առողջ ապագայի ձևավորմանը։",
    },
    placeholders: {
      juryTitle: "Ժյուրի",
      juryBody: "Գնահատող ժյուրիի կազմը կհրապարակվի այս բաժնում։ Հայտերը կգնահատվեն միասնական չափորոշիչների և միավորային համակարգի հիման վրա՝ ապահովելով մասնագիտական փորձն ու անկախ գնահատման սկզբունքները։",
      nomineesTitle: "Թեկնածուներ",
      nomineesBody: "Թեկնածուների և ընտրված լուծումների վերաբերյալ տեղեկատվությունը կհրապարակվի մրցույթի համապատասխան փուլում։",
      winnersTitle: "Հաղթողներ",
      winnersBody: "Յոթ հիմնական անվանակարգերի հաղթողները և, կիրառելիության դեպքում, հատուկ ճանաչման արժանացած թեկնածուն կհրապարակվեն արդյունքների ամփոփումից հետո։",
    },
    partners: {
      title: "Գործընկերներ",
      lead: "Առաջատար գործընկեր",
      partner: "Գործընկեր",
      supporting: "Աջակցող գործընկերներ",
      become: "Դարձեք գործընկեր",
    },
    footer: {
      name: "«Կանայք կլիմայում և էներգետիկայում» (WiCE) ՀԿ",
      contact: "Էլ․ փոստ",
      website: "Կայք",
      facebook: "Facebook",
    },
  },
  en: {
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
    hero: {
      kicker: "WOMEN IN CLIMATE AWARDS",
      title: "COP17 Special Edition",
      subtitle: "Women Leading at the Climate-Biodiversity Nexus",
      body: "Recognizing, encouraging and increasing the visibility of women’s leadership and contributions to actions and solutions in climate change and biodiversity conservation.",
      nominate: "Nominate a Candidate",
      learnMore: "Learn More",
    },
    about: {
      title: "About the Awards",
      body: [
        "The Awards organized in Armenia in 2022 and 2024 established a platform and culture for recognizing women’s contributions, showcasing successful solutions and encouraging women’s leadership. Each edition received approximately 100–150 applications and nominations from different sectors and communities across Armenia.",
        "The COP17 Special Edition builds on this experience in the context of the interconnection between climate change and biodiversity. COP17 will take place in Yerevan from 19 to 30 October 2026.",
        "A key principle of the Special Edition is moving “from recognition to advancing solutions”. Winners will have opportunities within COP17 to present their experience, solutions and potential for scaling.",
      ],
      stats: [
        { value: "2022 • 2024", label: "previous editions" },
        { value: "100–150", label: "applications and nominations per edition" },
        { value: "7 + 1", label: "seven main categories and one special recognition" },
        { value: "COP17", label: "Armenian solutions for national and international audiences" },
      ],
    },
    categories: {
      title: "Award Categories",
      intro: "Seven main thematic directions adapted to the COP17 Special Edition, together with one honorary special recognition.",
      items: [
        { number: "01", title: "Climate Change Mitigation and Biodiversity Conservation", description: "Women-led or women-proposed solutions contributing to climate change mitigation and/or the conservation or restoration of biodiversity, natural ecosystems and natural resources." },
        { number: "02", title: "Climate Change Adaptation and Ecosystem Resilience", description: "Women-led solutions strengthening the resilience of people, communities, the economy and/or ecosystems to climate risks. Nature-based and ecosystem-based approaches are particularly encouraged." },
        { number: "03", title: "Community Action and Policy", description: "Women-led community initiatives, participatory processes, governance approaches or policy solutions addressing climate and/or biodiversity challenges." },
        { number: "04", title: "Communication on Climate and Biodiversity Challenges and Solutions", description: "Work by journalists, communication professionals, content creators and other practitioners that raises public awareness and promotes engagement." },
        { number: "05", title: "Climate and Biodiversity Education for All", description: "Educational programmes, methodologies and initiatives that build knowledge and capacities on climate, nature and biodiversity and encourage practical action." },
        { number: "06", title: "Climate and Environmental Finance and Innovation Solutions", description: "Financial, technological, entrepreneurial, digital or other innovative solutions contributing to climate action and/or biodiversity conservation." },
        { number: "07", title: "Youth in Climate and Environmental Action", description: "Initiatives led by young women and girls contributing to climate action, nature and biodiversity conservation, environmental education or innovative solutions." },
        { number: "★", title: "Special Recognition: Male Ally for Women’s Climate and Biodiversity Leadership", description: "An honorary recognition may be granted to a man demonstrating sustained and meaningful support for women’s participation, leadership and professional advancement in climate, biodiversity and environmental action. Self-nominations are not accepted, and the recognition does not include the cash award provided to winners of the seven main categories.", special: true },
      ],
    },
    eligibility: {
      title: "Who Can Apply",
      intro: "Applications are accepted through self-nomination or nomination by another organization or institution.",
      bullets: [
        "Women working or carrying out activities in different sectors may self-nominate.",
        "The candidate must have a clear and demonstrable role in developing, implementing, leading or advancing the submitted solution.",
        "Candidates may be nominated by government institutions, local self-government bodies, NGOs, international organizations, scientific and educational institutions, private companies, professional associations and other organizations or institutions.",
        "An organization may nominate more than one candidate or solution. A single solution may be submitted in a maximum of two categories where it meets both sets of criteria.",
        "Self-nominated candidates are required to submit at least one letter of recommendation.",
        "Eligible solutions include those implemented or ongoing during the last five years and already demonstrating results that can be presented and assessed.",
      ],
      maleAllyNote: "For the Special Recognition, a male candidate may be nominated by women, organizations, institutions or professional peers. Self-nomination is not permitted.",
      cta: "Nominate a Candidate",
    },
    timeline: {
      title: "Key Dates",
      intro: "Applications are open from 8 September through 30 September 2026.",
      items: [
        { date: "8 September 2026", title: "Applications open" },
        { date: "15 September 2026 • 15:00", title: "Online information and Q&A session", note: "Yerevan time (UTC+4)", zoom: true },
        { date: "22 September 2026 • 15:00", title: "Online information and Q&A session", note: "Yerevan time (UTC+4)", zoom: true },
        { date: "30 September 2026", title: "Application deadline" },
        { date: "23 October 2026", title: "Planned Awards Ceremony in the COP17 Green Zone", note: "Yerevan" },
        { date: "27 October 2026", title: "Planned thematic panel discussion with award winners" },
      ],
    },
    infoSessions: {
      title: "Online Information Sessions",
      intro: "Two online information and Q&A sessions will be held during the application period to provide guidance on the award categories, eligibility and participation requirements, evaluation criteria, and completion of the application form.",
      join: "Join Zoom Session",
    },
    recognition: {
      title: "From Recognition to Advancing Solutions",
      amount: "AMD 300,000",
      body: "Each winner in the seven main award categories will receive an award of AMD 300,000, inclusive of applicable taxes. The award is intended to support the further development, visibility, replication or scaling of the winning solution. Winners will also have opportunities within COP17 to present their experience, solutions and potential for scaling.",
      quote: "Recognizing and encouraging leadership helps build a more resilient and healthy future.",
    },
    placeholders: {
      juryTitle: "Jury",
      juryBody: "The Evaluation Jury will be published in this section. Applications will be assessed using common criteria and a scoring system designed to ensure relevant professional expertise and independent evaluation.",
      nomineesTitle: "Nominees",
      nomineesBody: "Information on nominees and selected solutions will be published at the relevant stage of the competition.",
      winnersTitle: "Winners",
      winnersBody: "Winners in the seven main categories and, where applicable, the Special Recognition recipient will be published after the evaluation process is finalized.",
    },
    partners: {
      title: "Partners",
      lead: "Lead Partner",
      partner: "Partner",
      supporting: "Supporting Partners",
      become: "Become a Partner",
    },
    footer: {
      name: "Women in Climate and Energy (WiCE) NGO",
      contact: "Email",
      website: "Website",
      facebook: "Facebook",
    },
  },
};
