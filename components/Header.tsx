import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./Icons";
import { Locale, SiteCopy } from "@/content/site";
import { NOMINATION_FORM_URL, WICE_HOME_URL } from "@/content/config";

export default function Header({ locale, t }: { locale: Locale; t: SiteCopy }) {
  const otherLocale = locale === "hy" ? "en" : "hy";
  return (
    <header className="siteHeader">
      <div className="logoRow shell">
        <div className="brandLogos" aria-label="Awards and institutional logos">
          <Image className="logo awardsLogo" src="/images/women-in-climate-awards.jpg" alt="Women in Climate Awards" width={190} height={88} priority />
          <span className="logoDivider" />
          <Image className="logo copLogo" src="/images/cop17.webp" alt="COP17 Yerevan Armenia" width={148} height={82} priority />
          <span className="logoDivider optionalDivider" />
<Image
  src="/images/ministry-en.jpg"
  alt="Ministry of Environment of the Republic of Armenia"
  width={150}
  height={90}
  className="ministryLogo"
/>
          <span className="logoDivider optionalDivider" />
          <Image className="logo wiceLogo" src="/images/wice.png" alt="Women in Climate and Energy" width={128} height={70} />
        </div>
        <div className="headerActions">
          <div className="languageSwitch" aria-label="Language switcher">
            <Link className={locale === "hy" ? "active" : ""} href="/hy">HY</Link>
            <span>|</span>
            <Link className={locale === "en" ? "active" : ""} href="/en">EN</Link>
          </div>
          <a className="button primary compact" href={NOMINATION_FORM_URL} target="_blank" rel="noreferrer">
            {t.nominate} <ArrowIcon />
          </a>
        </div>
      </div>
      <nav className="mainNav shell" aria-label="Main navigation">
        <a href={WICE_HOME_URL}>{t.nav.home}</a>
        <a href="#about">{t.nav.about}</a>
        <a href="#categories">{t.nav.categories}</a>
        <a href="#apply">{t.nav.apply}</a>
        <a href="#timeline">{t.nav.timeline}</a>
        <a href="#jury">{t.nav.jury}</a>
        <a href="#nominees">{t.nav.nominees}</a>
        <a href="#winners">{t.nav.winners}</a>
        <a href="#contact">{t.nav.contact}</a>
      </nav>
    </header>
  );
}
