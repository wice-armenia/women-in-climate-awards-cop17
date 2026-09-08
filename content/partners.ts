export type Partner = {
  key: string;
  nameHy: string;
  nameEn: string;
  image: string;
  url: string;
  className?: string;
};

export const partners: Partner[] = [
  {
    key: "idbank",
    nameHy: "ԱյԴի Բանկ",
    nameEn: "IDBank",
    image: "/images/idbank.png",
    url: "https://idbank.am/",
  },
  {
    key: "oxygen",
    nameHy: "ՕքսԵՋեն հիմնադրամ",
    nameEn: "Oxygen Foundation",
    image: "/images/oxygen-trimmed.png",
    url: "https://oxygen.org.am/",
    className: "partnerOxygen",
  },
  {
    key: "undp",
    nameHy: "ՄԱԿ-ի զարգացման ծրագիր",
    nameEn: "UNDP",
    image: "/images/undp.jpg",
    url: "https://www.undp.org/armenia",
    className: "partnerUndp",
  },
  {
    key: "unwomen",
    nameHy: "ՄԱԿ Կանայք",
    nameEn: "UN Women",
    image: "/images/unwomen.png",
    url: "https://eca.unwomen.org/en",
  },
];
