import Image from "next/image";
import { WICE_EMAIL, WICE_FACEBOOK_URL, WICE_HOME_URL } from "@/content/config";

type Props = {
  footer: { name: string; contact: string; website: string; facebook: string };
};

export default function Footer({ footer }: Props) {
  return (
    <footer className="siteFooter" id="contact">
      <div className="footerMountains" aria-hidden="true">
        <Image src="/images/footer-mountains.svg" alt="" width={1440} height={190} />
      </div>
      <div className="shell footerContent">
        <div className="footerBrand">
          <Image src="/images/wice-logo.png" alt="Women in Climate and Energy (WiCE)" width={1459} height={700} />
          <strong>{footer.name}</strong>
        </div>
        <div className="footerLinks">
          <a href={`mailto:${WICE_EMAIL}`}>{footer.contact}: {WICE_EMAIL}</a>
          <a href={WICE_HOME_URL} target="_blank" rel="noreferrer">{footer.website}: wice.am</a>
          <a href={WICE_FACEBOOK_URL} target="_blank" rel="noreferrer">{footer.facebook}: /wicearmenia</a>
        </div>
      </div>
    </footer>
  );
}
