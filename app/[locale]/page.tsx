import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { ArrowIcon, LeafIcon, SolarIcon, WindIcon } from "@/components/Icons";
import { copy, Locale } from "@/content/site";
import {
  INFO_SESSION_ZOOM_URL,
  NOMINATION_FORM_URL,
  WICE_EMAIL,
  WICE_FACEBOOK_URL,
  WICE_HOME_URL,
} from "@/content/config";
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
    <main className={locale === "hy" ? "armenian" : "english"}>
      <Header locale={locale} t={t} />

      <section className="hero" id="top">
        <div className="heroDecor heroDecorOne" />
        <div className="heroDecor heroDecorTwo" />
        <div className="shell heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <h2>{t.hero.subtitle}</h2>
            <p className="heroBody">{t.hero.body}</p>
            <div className="heroButtons">
              <a className="button primary" href={NOMINATION_FORM_URL} target="_blank" rel="noreferrer">
                {t.nominate} <ArrowIcon />
              </a>
              <a className="button secondary" href="#about">
                {t.learnMore} <ArrowIcon />
              </a>
            </div>
            <div className="pillars">
              {t.hero.pillars.map((pillar, index) => (
                <div className="pillar" key={pillar}>
                  <span className="pillarIcon">{index === 0 ? <LeafIcon /> : index === 1 ? "✦" : index === 2 ? "●●●" : "↗"}</span>
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="heroVisual" aria-label="Women, nature, climate and solutions visual">
            <Image src="/images/hero-visual.jpg" alt="Women, nature, climate and solutions with renewable energy elements" fill sizes="(max-width: 900px) 100vw, 48vw" priority />
            <div className="energyBadge windBadge"><WindIcon /></div>
            <div className="energyBadge solarBadge"><SolarIcon /></div>
            <div className="heroWords" aria-hidden="true">Women<br />Nature<br />Climate<br />Solutions</div>
          </div>
        </div>
        <div className="wave waveHero" />
      </section>

      <section className="section shell" id="about">
        <div className="sectionGrid aboutGrid">
          <div>
            <p className="sectionKicker">COP17 · Yerevan 2026</p>
            <h2>{t.about.title}</h2>
            <p className="leadText">{t.about.body}</p>
          </div>
          <div className="statsGrid">
            {t.about.stats.map((stat) => (
              <div className="statCard" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionTint" id="categories">
        <div className="shell">
          <div className="sectionHeadingRow">
            <div>
              <p className="sectionKicker">Women · Nature · Climate · Solutions</p>
              <h2>{t.categoriesTitle}</h2>
              <p>{t.categoriesLead}</p>
            </div>
          </div>
          <div className="categoriesGrid">
            {t.categories.map((category, index) => (
              <article className={`categoryCard ${category.special ? "special" : ""}`} key={category.title}>
                <span className="categoryNumber">{category.special ? "★" : String(index + 1).padStart(2, "0")}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="eligibility section" id="apply">
        <div className="shell eligibilityGrid">
          <div className="eligibilityPhoto">
            <Image src="/images/eligibility-event.jpg" alt="Previous Women in Climate Awards event in Armenia" fill sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
          <div className="eligibilityCopy">
            <p className="sectionKicker">{locale === "hy" ? "Առաջադրում և ինքնաառաջադրում" : "Nomination and self-nomination"}</p>
            <h2>{t.eligibility.title}</h2>
            <p>{t.eligibility.intro}</p>
            <ul>
              {t.eligibility.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <div className="maleAllyNote"><strong>Male Ally:</strong> {t.eligibility.maleAlly}</div>
            <a className="button primary" href={NOMINATION_FORM_URL} target="_blank" rel="noreferrer">
              {t.nominate} <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
<section className="section infoSessionsSection" id="info-sessions">
  <div className="shell">
    <div className="sectionHeadingRow">
      <div>
        <p className="sectionKicker">
          {locale === "hy" ? "Հայտերի ընդունման ընթացքում" : "During the application period"}
        </p>
        <h2>{t.infoSessions.title}</h2>
        <p>{t.infoSessions.intro}</p>
      </div>
    </div>

    <div className="infoSessionsGrid">
      {t.infoSessions.sessions.map((session) => (
        <article className="infoSessionCard" key={session.date}>
          <span className="infoSessionDate">{session.date}</span>
          <strong className="infoSessionTime">{session.time}</strong>
          <p>{session.label}</p>

          <a
            className="button primary"
            href={INFO_SESSION_ZOOM_URL}
            target="_blank"
            rel="noreferrer"
          >
            {t.infoSessions.join} <ArrowIcon />
          </a>
        </article>
      ))}
    </div>
  </div>
</section>
      <section className="section timelineSection" id="timeline">
        <div className="shell">
          <div className="sectionHeadingRow">
            <div>
              <p className="sectionKicker">COP17 Special Edition</p>
              <h2>{t.timeline.title}</h2>
              <p>{t.timeline.note}</p>
            </div>
          </div>
          <div className="timeline">
            {t.timeline.items.map((item, index) => (
              <div className="timelineItem" key={`${item.date}-${item.title}`}>
                <span className="timelineDot" />
                <div className="timelineIndex">0{index + 1}</div>
                <strong>{item.date}</strong>
                <h3>{item.title}</h3>
                {item.note && <p>{item.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="recognition section">
        <div className="shell recognitionGrid">
          <div>
            <p className="sectionKicker">COP17</p>
            <h2>{t.recognition.title}</h2>
            <p className="leadText">{t.recognition.body}</p>
            <a className="button primary" href={NOMINATION_FORM_URL} target="_blank" rel="noreferrer">
              {t.nominate} <ArrowIcon />
            </a>
          </div>
          <blockquote>{t.recognition.quote}</blockquote>
        </div>
      </section>

      <section className="section placeholdersSection">
        <div className="shell placeholdersGrid">
          <article id="jury"><span>01</span><h2>{t.placeholders.juryTitle}</h2><p>{t.placeholders.juryText}</p></article>
          <article id="nominees"><span>02</span><h2>{t.placeholders.nomineesTitle}</h2><p>{t.placeholders.nomineesText}</p></article>
          <article id="winners"><span>03</span><h2>{t.placeholders.winnersTitle}</h2><p>{t.placeholders.winnersText}</p></article>
        </div>
      </section>

      <section className="section partnersSection">
  <div className="shell">
    <div className="sectionHeadingRow">
      <div>
        <p className="sectionKicker">COP17 Special Edition</p>
        <h2>{locale === "hy" ? "Գործընկերներ" : "Partners"}</h2>
      </div>
    </div>

    <div className="partnersGrid">
      <div className="partnerCard">
        <Image
          src="/images/oxygen.jpg"
          alt="Oxygen Foundation"
          width={220}
          height={90}
        />
      </div>

      <div className="partnerCard">
        <Image
          src="/images/undp.jpg"
          alt="UNDP"
          width={220}
          height={90}
        />
      </div>

      <div className="partnerCard">
        <Image
          src="/images/unwomen.png"
          alt="UN Women"
          width={220}
          height={90}
        />
      </div>

      <div className="partnerCard">
        <Image
          src="/images/idbank.png"
          alt="IDBank"
          width={220}
          height={90}
        />
      </div>
    </div>
  </div>
</section>
      
      <section className="copWave" aria-hidden="true">
        <span className="waveBand bandOne" />
        <span className="waveBand bandTwo" />
        <span className="waveBand bandThree" />
        <span className="waveBand bandFour" />
      </section>

      <footer className="footer" id="contact">
        <div className="shell footerGrid">
          <div className="footerBrand">
            <Image src="/images/wice.png" alt="WiCE" width={150} height={85} />
            <div><strong>{t.footer.organization}</strong><p>{t.footer.cooperation}</p></div>
          </div>
          <div className="footerLinks">
            <a href={`mailto:${WICE_EMAIL}`}>{WICE_EMAIL}</a>
            <a href={WICE_HOME_URL}>www.wice.am</a>
            <a href={WICE_FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook /wicearmenia</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
