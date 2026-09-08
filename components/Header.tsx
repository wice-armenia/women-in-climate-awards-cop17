import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/site";
import { NOMINATION_FORM_URL, WICE_HOME_URL } from "@/content/config";

type Props = {
  locale: Locale;
  nav: {
    home: string; about: string; categories: string; apply: string; timeline: string;
    jury: string; nominees: string; winners: string; contact: string;
  };
  nominateLabel: string;
};

export default function Header({ locale, nav, nominateLabel }: Props) {
  return (
    <header className="siteHeader">
      <div className="shell brandBar">
        <div className="brandCluster">
          <a className="brand brandAwards" href="#top">
            <Image src="/images/wca-logo.jpg" alt="Women in Climate Awards" width={1287} height={595} priority />
          </a>
          <span className="brandDivider" />
          <div className="brand brandCop17">
            <Image src="/images/cop17-symbol.png" alt="COP17 Yerevan Armenia" width={1517} height={2048} priority />
          </div>
          <span className="brandDivider" />
          <div className="brand brandMinistry">
            <Image src="/images/ministry-en.jpg" alt="Republic of Armenia Ministry of Environment" width={595} height={709} priority />
          </div>
          <span className="brandDivider" />
          <div className="brand brandWice">
            <Image src="/images/wice-logo.png" alt="Women in Climate and Energy (WiCE)" width={1459} height={700} priority />
          </div>
        </div>

        <div className="headerActions">
          <div className="languageSwitch">
            <Link className={locale === "hy" ? "active" : ""} href="/hy">HY</Link>
            <span>|</span>
            <Link className={locale === "en" ? "active" : ""} href="/en">EN</Link>
          </div>
          <a className="button primary headerCta" href={NOMINATION_FORM_URL} target="_blank" rel="noreferrer">
            {nominateLabel} <span>→</span>
          </a>
        </div>
      </div>

      <div className="navBorder">
        <nav className="shell mainNav">
          <Link href={`/${locale}`}>{nav.home}</Link>
          <a href="#about">{nav.about}</a>
          <a href="#categories">{nav.categories}</a>
          <a href="#apply">{nav.apply}</a>
          <a href="#timeline">{nav.timeline}</a>
          <a href="#jury">{nav.jury}</a>
          <a href="#nominees">{nav.nominees}</a>
          <a href="#winners">{nav.winners}</a>
          <a href="#contact">{nav.contact}</a>
        </nav>
      </div>
    </header>
  );
}
