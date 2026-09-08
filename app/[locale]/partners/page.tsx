import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { copy, type Locale } from "@/content/site";
import { partnershipCopy } from "@/content/partnership";
import { WICE_EMAIL } from "@/content/config";

const supportedLocales: Locale[] = ["hy", "en"];

export default async function PartnershipPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!supportedLocales.includes(rawLocale as Locale)) notFound();

  const locale = rawLocale as Locale;
  const t = copy[locale];
  const p = partnershipCopy[locale];

  return (
    <>
      <Header locale={locale} nav={t.nav} nominateLabel={t.hero.nominate} />
      <main className={`locale-${locale} partnershipPage`}>
        <section className="partnershipHero">
          <div className="shell">
            <p className="eyebrow">Women in Climate Awards | COP17 Special Edition</p>
            <h1>{p.title}</h1>
            <p>{p.intro}</p>
            <div className="partnershipHeroActions">
              <a className="button primary" href={`mailto:${WICE_EMAIL}`}>{p.contactTitle} <span>→</span></a>
              <Link className="button secondary" href={`/${locale}`}>{p.back}</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="partnershipNote">{p.note}</div>
            <div className="partnershipLevels">
              {p.levels.map((level) => (
                <article className="partnershipLevelCard" key={level.title}>
                  <div>
                    <h2>{level.title}</h2>
                    <span>{p.contributionHeading}</span>
                    <strong>{level.contribution}</strong>
                  </div>
                  <div>
                    <span>{p.recognitionHeading}</span>
                    <p>{level.recognition}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section sectionSoft">
          <div className="shell">
            <div className="sectionHeading"><p className="eyebrow">Integrity • Transparency • Engagement</p><h2>{p.principlesTitle}</h2></div>
            <div className="principlesGrid">
              {p.principles.map((x) => <article key={x.title}><h3>{x.title}</h3><p>{x.text}</p></article>)}
            </div>
            <p className="partnershipClosing">{p.closing}</p>
          </div>
        </section>

        <section className="partnershipContact">
          <div className="shell finalCtaInner">
            <div><p className="eyebrow">WiCE</p><h2>{p.contactTitle}</h2><p>{p.contactText}</p></div>
            <a className="button primary" href={`mailto:${WICE_EMAIL}`}>{WICE_EMAIL} <span>→</span></a>
          </div>
        </section>
      </main>
      <Footer footer={t.footer} />
    </>
  );
}
