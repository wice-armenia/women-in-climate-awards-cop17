import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { copy, type Locale } from "@/content/site";
import { partners } from "@/content/partners";
import { INFO_SESSION_ZOOM_URL, NOMINATION_FORM_URL } from "@/content/config";

const supportedLocales: Locale[] = ["hy", "en"];

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function AwardsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!supportedLocales.includes(rawLocale as Locale)) notFound();

  const locale = rawLocale as Locale;
  const t = copy[locale];

  return (
    <>
      <Header locale={locale} nav={t.nav} nominateLabel={t.hero.nominate} />
      <main id="top" className={`locale-${locale}`}>
        <section className="heroSection">
          <div className="shell heroGrid">
            <div className="heroCopy">
              <p className="eyebrow">{t.hero.kicker}</p>
              <h1>{t.hero.title}</h1>
              <h2>{t.hero.subtitle}</h2>
              <p className="heroBody">{t.hero.body}</p>
              <div className="heroButtons">
                <a className="button primary" href={NOMINATION_FORM_URL} target="_blank" rel="noreferrer">
                  {t.hero.nominate} <span>→</span>
                </a>
                <a className="button secondary" href="#about">{t.hero.learnMore} <span>→</span></a>
              </div>
            </div>
            <div className="heroVisual">
              <Image src="/images/hero-visual.png" alt="" width={1374} height={1145} priority />
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="shell">
            <div className="sectionHeading">
              <p className="eyebrow">COP17 Special Edition</p>
              <h2>{t.about.title}</h2>
            </div>
            <div className="aboutGrid">
              <div className="prose">{t.about.body.map((p) => <p key={p}>{p}</p>)}</div>
              <div className="statsGrid">
                {t.about.stats.map((s) => (
                  <div className="statCard" key={s.value + s.label}>
                    <strong>{s.value}</strong><span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section sectionSoft" id="categories">
          <div className="shell">
            <div className="sectionHeading splitHeading">
              <div><p className="eyebrow">7 + 1</p><h2>{t.categories.title}</h2></div>
              <p>{t.categories.intro}</p>
            </div>
            <div className="categoriesGrid">
              {t.categories.items.map((c) => (
                <article className={`categoryCard${c.special ? " special" : ""}`} key={c.number + c.title}>
                  <span className="categoryNumber">{c.number}</span>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="apply">
          <div className="shell eligibilityGrid">
            <div className="eligibilityImage">
              <Image src="/images/eligibility-event.jpg" alt="" width={2048} height={1365} />
            </div>
            <div className="eligibilityCopy">
              <p className="eyebrow">Applications</p>
              <h2>{t.eligibility.title}</h2>
              <p className="lead">{t.eligibility.intro}</p>
              <ul>{t.eligibility.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <div className="maleAllyNote">{t.eligibility.maleAllyNote}</div>
              <a className="button primary" href={NOMINATION_FORM_URL} target="_blank" rel="noreferrer">
                {t.eligibility.cta} <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section timelineSection" id="timeline">
          <div className="shell">
            <div className="sectionHeading splitHeading">
              <div><p className="eyebrow">2026</p><h2>{t.timeline.title}</h2></div>
              <p>{t.timeline.intro}</p>
            </div>
            <div className="timeline">
              {t.timeline.items.map((item) => (
                <div className="timelineItem" key={item.date + item.title}>
                  <div className="timelineDot" />
                  <div className="timelineDate">{item.date}</div>
                  <div className="timelineText">
                    <strong>{item.title}</strong>
                    {item.note && <span>{item.note}</span>}
                    {item.zoom && <a href={INFO_SESSION_ZOOM_URL} target="_blank" rel="noreferrer">{t.infoSessions.join} ↗</a>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section infoSessionsSection">
          <div className="shell">
            <div className="sectionHeading splitHeading">
              <div><p className="eyebrow">Zoom • Q&amp;A</p><h2>{t.infoSessions.title}</h2></div>
              <p>{t.infoSessions.intro}</p>
            </div>
            <div className="infoSessionsGrid">
              {t.timeline.items.filter((i) => i.zoom).map((s) => (
                <article className="infoSessionCard" key={s.date}>
                  <span>{s.date}</span>
                  <h3>{s.title}</h3>
                  {s.note && <p>{s.note}</p>}
                  <a className="button secondary" href={INFO_SESSION_ZOOM_URL} target="_blank" rel="noreferrer">
                    {t.infoSessions.join} <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section recognitionSection">
          <div className="shell recognitionGrid">
            <div>
              <p className="eyebrow">COP17 Special Edition</p>
              <h2>{t.recognition.title}</h2>
              <p>{t.recognition.body}</p>
            </div>
            <div className="awardAmountCard">
              <span>{locale === "hy" ? "Յուրաքանչյուր հիմնական անվանակարգի հաղթողին" : "Each main-category winner"}</span>
              <strong>{t.recognition.amount}</strong>
              <small>{locale === "hy" ? "ներառյալ կիրառելի հարկերը" : "inclusive of applicable taxes"}</small>
            </div>
            <blockquote>{t.recognition.quote}</blockquote>
          </div>
        </section>

        <section className="section sectionSoft statusSection">
          <div className="shell statusGrid">
            <article id="jury"><span>01</span><h2>{t.placeholders.juryTitle}</h2><p>{t.placeholders.juryBody}</p></article>
            <article id="nominees"><span>02</span><h2>{t.placeholders.nomineesTitle}</h2><p>{t.placeholders.nomineesBody}</p></article>
            <article id="winners"><span>03</span><h2>{t.placeholders.winnersTitle}</h2><p>{t.placeholders.winnersBody}</p></article>
          </div>
        </section>

        <section className="section partnersSection">
          <div className="shell">
            <div className="sectionHeading splitHeading">
              <div><p className="eyebrow">COP17 Special Edition</p><h2>{t.partners.title}</h2></div>
              <div className="partnerSectionCta">
                <p>{locale === "hy" ? "Միացեք նախաձեռնությանը և աջակցեք կանանց առաջնորդությանը, կլիմայական ու կենսաբազմազանության լուծումների տեսանելիությանը։" : "Join the initiative and help advance women’s leadership and practical climate and biodiversity solutions."}</p>
                <Link className="button secondary" href={`/${locale}/partners`}>{t.partners.become} <span>→</span></Link>
              </div>
            </div>

            <div className="partnerGroups">
              <div className="partnerGroup">
                <h3>{t.partners.lead}</h3>
                {partners.filter((p) => p.key === "idbank").map((p) => (
                  <a className="partnerCard" href={p.url} target="_blank" rel="noreferrer" key={p.key}>
                    <Image src={p.image} alt={locale === "hy" ? p.nameHy : p.nameEn} width={520} height={220} />
                  </a>
                ))}
              </div>

              <div className="partnerGroup">
                <h3>{t.partners.partner}</h3>
                {partners.filter((p) => p.key === "oxygen").map((p) => (
                  <a className={`partnerCard ${p.className || ""}`} href={p.url} target="_blank" rel="noreferrer" key={p.key}>
                    <Image src={p.image} alt={locale === "hy" ? p.nameHy : p.nameEn} width={420} height={150} />
                  </a>
                ))}
              </div>

              <div className="partnerGroup supporting">
                <h3>{t.partners.supporting}</h3>
                <div className="supportingGrid">
                  {partners.filter((p) => p.key === "undp" || p.key === "unwomen").map((p) => (
                    <a className={`partnerCard ${p.className || ""}`} href={p.url} target="_blank" rel="noreferrer" key={p.key}>
                      <Image src={p.image} alt={locale === "hy" ? p.nameHy : p.nameEn} width={520} height={260} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="finalCta">
          <div className="shell finalCtaInner">
            <div><p className="eyebrow">Women • Climate • Biodiversity • Solutions</p><h2>{t.hero.title}</h2></div>
            <a className="button primary" href={NOMINATION_FORM_URL} target="_blank" rel="noreferrer">{t.hero.nominate} <span>→</span></a>
          </div>
        </section>
      </main>
      <Footer footer={t.footer} />
    </>
  );
}
