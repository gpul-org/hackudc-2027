import { useEffect, useRef, type CSSProperties } from "react";

type Locale = "es" | "en" | "gl";

type Copy = {
  nav: string[];
  edition: string;
  eyebrow: string;
  title: string;
  intro: string;
  waitlist: string;
  sponsor: string;
  scroll: string;
  marquee: string;
  kicker: string;
  aboutTitle: string;
  aboutBody: string;
  stats: [string, string][];
  experienceKicker: string;
  experienceTitle: string;
  experienceBody: string;
  gallery: string;
  aftermovie: string;
  galleryCta: string;
  videoCta: string;
  stepsKicker: string;
  stepsTitle: string;
  steps: [string, string, string][];
  sponsorsKicker: string;
  sponsorsTitle: string;
  sponsorsBody: string;
  sponsorCta: string;
  faqKicker: string;
  faqTitle: string;
  faq: [string, string][];
  footer: string;
  footerLinks: string[];
};

interface Props {
  locale: Locale;
  localeUrls: Record<Locale, string>;
}

const copy: Record<Locale, Copy> = {
  es: {
    nav: ["Qué es", "La experiencia", "Patrocinio", "FAQ"],
    edition: "5ª EDICIÓN",
    eyebrow: "A Coruña · 2027 · 36 horas",
    title: "Hackea el futuro desde Galicia.",
    intro:
      "Un fin de semana para convertir ideas imposibles en proyectos que funcionan.",
    waitlist: "Apúntate a la lista de espera",
    sponsor: "Quiero patrocinar",
    scroll: "Desliza para entrar",
    marquee: "LISTA DE ESPERA ABIERTA · ÚNETE AHORA · HACKUDC27 · ",
    kicker: "HACKUDC27 / UNA HISTORIA QUE CONTINÚA",
    aboutTitle: "Tecnología, creatividad y comunidad.",
    aboutBody:
      "HackUDC es una hackathon universitaria abierta a cualquier persona con ganas de aprender, crear y compartir. Durante 36 horas, equipos multidisciplinares convierten una idea en algo real.",
    stats: [
      ["500+", "participantes"],
      ["36h", "de hacking"],
      ["X€", "en premios"],
      ["100%", "open source"],
    ],
    experienceKicker: "La experiencia",
    experienceTitle: "Ven con una idea. Vuelve con una historia.",
    experienceBody:
      "No hace falta saberlo todo. Solo traer curiosidad, ganas de probar y alguien con quien celebrarlo cuando compile a la primera.",
    gallery: "Galería de 2026",
    aftermovie: "Aftermovie 2026",
    galleryCta: "Ver fotos",
    videoCta: "Ver vídeo",
    stepsKicker: "Cómo funciona",
    stepsTitle: "Tu próximo proyecto empieza aquí.",
    steps: [
      [
        "01",
        "Trae una idea",
        "Una intuición, un problema o una pregunta que no te deje dormir.",
      ],
      [
        "02",
        "Forma equipo",
        "Encuentra personas distintas a ti y reparte el caos con cariño.",
      ],
      [
        "03",
        "Constrúyelo",
        "Mentoría, herramientas y 36 horas para hacer que pase.",
      ],
    ],
    sponsorsKicker: "Con el apoyo de",
    sponsorsTitle: "Las mejores ideas necesitan espacio para crecer.",
    sponsorsBody:
      "Conecta tu marca con la próxima generación de personas que construyen el futuro.",
    sponsorCta: "Descargar dossier de patrocinio",
    faqKicker: "Preguntas frecuentes",
    faqTitle: "Lo importante, antes de hacer las maletas.",
    faq: [
      [
        "¿Quién puede participar?",
        "Cualquier persona mayor de 18 años con ganas de aprender y construir. No importa tu carrera ni tu nivel.",
      ],
      [
        "¿Cuánto cuesta?",
        "Nada. La entrada, la comida, el café y todas las actividades de la hackathon son gratuitas.",
      ],
      [
        "¿Necesito equipo?",
        "No. Puedes venir solo y conocer a tu equipo en el evento, o traer a tu crew de confianza.",
      ],
    ],
    footer: "Hecho en A Coruña para cambiar lo que viene.",
    footerLinks: ["Instagram", "LinkedIn", "GitHub"],
  },
  en: {
    nav: ["What is it", "The experience", "Sponsorship", "FAQ"],
    edition: "5TH EDITION",
    eyebrow: "A Coruña · 2027 · 36 hours",
    title: "Hack the future from Galicia.",
    intro: "A weekend to turn impossible ideas into projects that work.",
    waitlist: "Join the waitlist",
    sponsor: "I want to sponsor",
    scroll: "Scroll to enter",
    marquee: "WAITLIST NOW OPEN · JOIN US · HACKUDC27 · ",
    kicker: "HACKUDC27 / A STORY IN THE MAKING",
    aboutTitle: "Technology, creativity and community.",
    aboutBody:
      "HackUDC is a university hackathon open to anyone who wants to learn, create and share. For 36 hours, multidisciplinary teams turn an idea into something real.",
    stats: [
      ["500+", "participants"],
      ["36h", "of hacking"],
      ["X€", "in prizes"],
      ["100%", "open source"],
    ],
    experienceKicker: "The experience",
    experienceTitle: "Bring an idea. Leave with a story.",
    experienceBody:
      "You do not need to know everything. Just bring curiosity, a willingness to try and someone to celebrate with when it compiles on the first go.",
    gallery: "2026 gallery",
    aftermovie: "2026 aftermovie",
    galleryCta: "View photos",
    videoCta: "Watch video",
    stepsKicker: "How it works",
    stepsTitle: "Your next project starts here.",
    steps: [
      [
        "01",
        "Bring an idea",
        "A hunch, a problem or a question that will not let you sleep.",
      ],
      [
        "02",
        "Build a team",
        "Find people different from you and share the chaos with care.",
      ],
      ["03", "Make it real", "Mentors, tools and 36 hours to make it happen."],
    ],
    sponsorsKicker: "Supported by",
    sponsorsTitle: "Great ideas need room to grow.",
    sponsorsBody:
      "Connect your brand with the next generation of people building the future.",
    sponsorCta: "Download sponsorship deck",
    faqKicker: "Frequently asked",
    faqTitle: "The useful stuff, before you pack your bags.",
    faq: [
      [
        "Who can participate?",
        "Anyone over 18 who wants to learn and build. Your degree and experience level do not matter.",
      ],
      [
        "How much does it cost?",
        "Nothing. Entry, food, coffee and every hackathon activity are free.",
      ],
      [
        "Do I need a team?",
        "No. Come solo and meet your team at the event, or bring your trusted crew.",
      ],
    ],
    footer: "Made in A Coruña for what comes next.",
    footerLinks: ["Instagram", "LinkedIn", "GitHub"],
  },
  gl: {
    nav: ["Que é", "A experiencia", "Patrocinio", "FAQ"],
    edition: "5ª EDICIÓN",
    eyebrow: "A Coruña · 2027 · 36 horas",
    title: "Hackea o futuro desde Galicia.",
    intro:
      "Unha fin de semana para converter ideas imposibles en proxectos que funcionan.",
    waitlist: "Apúntate á lista de espera",
    sponsor: "Quero patrocinar",
    scroll: "Desliza para entrar",
    marquee: "LISTA DE ESPERA ABERTA · ÚNETE AGORA · HACKUDC27 · ",
    kicker: "HACKUDC27 / UNHA HISTORIA QUE CONTINÚA",
    aboutTitle: "Tecnoloxía, creatividade e comunidade.",
    aboutBody:
      "HackUDC é unha hackathon universitaria aberta a calquera persoa con ganas de aprender, crear e compartir. Durante 36 horas, equipos multidisciplinares converten unha idea en algo real.",
    stats: [
      ["500+", "participantes"],
      ["36h", "de hacking"],
      ["X€", "en premios"],
      ["100%", "open source"],
    ],
    experienceKicker: "A experiencia",
    experienceTitle: "Vén cunha idea. Volve cunha historia.",
    experienceBody:
      "Non tes que sabelo todo. Só traer curiosidade, ganas de probar e alguén con quen celebralo cando compile á primeira.",
    gallery: "Galería de 2026",
    aftermovie: "Aftermovie 2026",
    galleryCta: "Ver fotos",
    videoCta: "Ver vídeo",
    stepsKicker: "Como funciona",
    stepsTitle: "O teu próximo proxecto comeza aquí.",
    steps: [
      [
        "01",
        "Trae unha idea",
        "Unha intuición, un problema ou unha pregunta que non che deixe durmir.",
      ],
      [
        "02",
        "Forma equipo",
        "Atopa persoas diferentes a ti e reparte o caos con cariño.",
      ],
      [
        "03",
        "Constrúeo",
        "Mentoría, ferramentas e 36 horas para facer que pase.",
      ],
    ],
    sponsorsKicker: "Co apoio de",
    sponsorsTitle: "As mellores ideas precisan espazo para medrar.",
    sponsorsBody:
      "Conecta a túa marca coa próxima xeración de persoas que constrúen o futuro.",
    sponsorCta: "Descargar dossier de patrocinio",
    faqKicker: "Preguntas frecuentes",
    faqTitle: "O importante, antes de facer as maletas.",
    faq: [
      [
        "Quen pode participar?",
        "Calquera persoa maior de 18 anos con ganas de aprender e construír. Non importa a túa carreira nin o teu nivel.",
      ],
      [
        "Canto custa?",
        "Nada. A entrada, a comida, o café e todas as actividades da hackathon son gratuítas.",
      ],
      [
        "Necesito equipo?",
        "Non. Podes vir só e coñecer o teu equipo no evento, ou traer a túa crew de confianza.",
      ],
    ],
    footer: "Feito na Coruña para cambiar o que vén.",
    footerLinks: ["Instagram", "LinkedIn", "GitHub"],
  },
};

const languages: { code: Locale; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "gl", label: "GL" },
];

export default function HomePage({ locale, localeUrls }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const t = copy[locale];

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const reveals = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const drifts = Array.from(
      root.querySelectorAll<HTMLElement>("[data-scroll-drift]"),
    );

    if (reduceMotion || !("IntersectionObserver" in window)) {
      reveals.forEach((element) => element.classList.add("is-visible"));
    }

    const observer =
      reduceMotion || !("IntersectionObserver" in window)
        ? null
        : new IntersectionObserver(
            (entries, currentObserver) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
              });
            },
            { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
          );

    reveals.forEach((element) => observer?.observe(element));

    if (reduceMotion || drifts.length === 0) {
      return () => observer?.disconnect();
    }

    let frame = 0;
    const updateDrift = () => {
      const viewport = window.innerHeight || 1;
      drifts.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const progress = (viewport - rect.top) / (viewport + rect.height);
        const offset = Math.max(-1, Math.min(1, progress - 0.5)) * -28;
        element.style.transform = element.classList.contains("about-lamp")
          ? `translate3d(0, ${offset}px, 0) rotate(-4deg)`
          : `translate3d(0, ${offset}px, 0)`;
      });
      frame = 0;
    };
    const requestDrift = () => {
      if (!frame) frame = window.requestAnimationFrame(updateDrift);
    };

    window.addEventListener("scroll", requestDrift, { passive: true });
    requestDrift();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", requestDrift);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main ref={rootRef} className="site-shell overflow-clip bg-[var(--cream)]">
      <header className="site-header absolute top-0 left-0 z-10 flex w-full items-center justify-between gap-8 px-5 py-4 text-[var(--ink)] md:px-[4vw]">
        <a
          className="wordmark inline-flex items-center gap-2 no-underline"
          href={localeUrls[locale]}
          aria-label="HackUDC27, home"
        >
          <span className="wordmark-mark">H</span>
          <span className="wordmark-type">
            HACKUDC
            <sup>
              20
              <br />
              27
            </sup>
          </span>
        </a>

        <nav
          className="desktop-nav hidden gap-[2.5vw] lg:flex"
          aria-label="Primary navigation"
        >
          <a href="#about">{t.nav[0]}</a>
          <a href="#experience">{t.nav[1]}</a>
          <a href="#sponsors">{t.nav[2]}</a>
          <a href="#faq">{t.nav[3]}</a>
        </nav>

        <div className="header-actions ml-auto flex items-center gap-3">
          <div className="language-switcher" aria-label="Language selector">
            {languages.map((language) => (
              <a
                key={language.code}
                className={language.code === locale ? "active" : ""}
                href={localeUrls[language.code]}
                hrefLang={language.code}
                aria-current={language.code === locale ? "page" : undefined}
              >
                {language.label}
              </a>
            ))}
          </div>
          <a
            className="header-cta hidden rounded-full bg-[var(--ink)] px-4 py-3 text-[0.72rem] font-extrabold tracking-wide text-[var(--cream)] no-underline transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[var(--red)] sm:block"
            href="#waitlist"
          >
            {t.waitlist}
          </a>
        </div>
      </header>

      <section
        className="hero relative isolate flex min-h-[49rem] items-center justify-center overflow-hidden bg-gradient-to-b from-[#7fc2ee] via-[#a8d3f1] to-[#dff0fb] px-5 pt-32 pb-64 text-center md:min-h-screen md:pb-80"
        id="top"
        aria-labelledby="hero-title"
      >
        <div className="hero-sun" aria-hidden="true" />
        <div className="hero-cloud hero-cloud-one" aria-hidden="true" />
        <div className="hero-cloud hero-cloud-two" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="relative z-[2] flex max-w-6xl flex-col items-center">
          <div className="hero-edition" aria-label={t.edition}>
            {t.edition}
          </div>
          <p className="eyebrow mb-5 text-[var(--ink)]/70">{t.eyebrow}</p>
          <picture className="hero-logo-picture">
            <source
              media="(max-width: 42rem)"
              srcSet="/assets/brand/logo-vertical-navy.svg"
            />
            <img
              className="hero-logo block h-auto w-[92vw] max-w-[62rem]"
              src="/assets/brand/logo-navy.svg"
              alt="HackUDC27"
              width="1003"
              height="153"
            />
          </picture>
          <h1
            id="hero-title"
            className="mt-6 max-w-[10ch] font-serif text-[clamp(2.25rem,6vw,3.5rem)] leading-[0.98] tracking-[-0.055em]"
          >
            {t.title}
          </h1>
          <p className="mt-5 max-w-xl text-[clamp(1rem,1.45vw,1.28rem)] leading-[1.45]">
            {t.intro}
          </p>
          <div
            className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
            id="waitlist"
          >
            <a
              className="button button-dark"
              href="mailto:hello@hackudc.gpul.org?subject=HackUDC27%20waitlist"
            >
              {t.waitlist}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-light"
              href="mailto:sponsors@hackudc.gpul.org?subject=HackUDC27%20sponsorship"
            >
              {t.sponsor}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-floor" aria-hidden="true">
          <div className="marquee">
            <span>{t.marquee.repeat(3)}</span>
          </div>
          <img
            className="hero-building"
            src="/assets/scene/building.svg"
            alt=""
            width="990"
            height="441"
          />
          <div className="hero-ground" />
        </div>

        <a className="scroll-cue" href="#about">
          <span className="scroll-line" aria-hidden="true" />
          <span>{t.scroll}</span>
        </a>
      </section>

      <section
        className="about section-light"
        id="about"
        aria-labelledby="about-title"
      >
        <img
          className="about-mascot"
          src="/assets/scene/mascot.svg"
          alt=""
          width="93"
          height="94"
          data-scroll-drift
        />
        <img
          className="about-lamp"
          src="/assets/scene/farola.svg"
          alt=""
          width="706"
          height="742"
          data-scroll-drift
        />
        <div className="section-wrap">
          <p className="eyebrow reveal" data-reveal>
            {t.kicker}
          </p>
          <div className="about-grid">
            <h2 className="display reveal" data-reveal id="about-title">
              {t.aboutTitle}
            </h2>
            <div className="about-copy reveal" data-reveal>
              <p>{t.aboutBody}</p>
              <a className="text-link" href="#experience">
                {t.nav[1]} <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
        </div>

        <div className="stats-band" aria-label="HackUDC27 statistics">
          <div className="stats-shape" aria-hidden="true" />
          <div className="stats-wrap">
            {t.stats.map(([value, label], index) => (
              <div
                className="stat reveal"
                data-reveal
                key={label}
                style={{ "--delay": `${index * 70}ms` } as CSSProperties}
              >
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-blue"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="section-wrap">
          <div className="section-heading">
            <p className="eyebrow eyebrow-dark reveal" data-reveal>
              {t.experienceKicker}
            </p>
            <h2 className="display reveal" data-reveal id="experience-title">
              {t.experienceTitle}
            </h2>
            <p className="section-lede reveal" data-reveal>
              {t.experienceBody}
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card feature-photo reveal" data-reveal>
              <div className="card-topline">
                <span>{t.gallery}</span>
                <span>01</span>
              </div>
              <div className="photo-window">
                <div className="photo-sky" />
                <img
                  src="/assets/scene/building-wide.svg"
                  alt=""
                  width="990"
                  height="459"
                />
                <span className="photo-caption">{t.galleryCta} ↗</span>
              </div>
            </article>
            <article className="feature-card feature-video reveal" data-reveal>
              <div className="card-topline">
                <span>{t.aftermovie}</span>
                <span>02</span>
              </div>
              <div className="video-window">
                <span className="play-button" aria-hidden="true">
                  ▶
                </span>
                <span className="video-caption">{t.videoCta} ↗</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-cream" aria-labelledby="steps-title">
        <div className="section-wrap steps-wrap">
          <div className="steps-compass reveal" data-reveal aria-hidden="true">
            <img
              src="/assets/scene/compass.svg"
              alt=""
              width="990"
              height="987"
            />
          </div>
          <div className="section-heading steps-heading">
            <p className="eyebrow reveal" data-reveal>
              {t.stepsKicker}
            </p>
            <h2 className="display reveal" data-reveal id="steps-title">
              {t.stepsTitle}
            </h2>
          </div>
          <div className="step-list">
            {t.steps.map(([number, title, body]) => (
              <article className="step reveal" data-reveal key={number}>
                <span className="step-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-red"
        id="sponsors"
        aria-labelledby="sponsors-title"
      >
        <div className="sponsors-stars" aria-hidden="true" />
        <div className="section-wrap sponsors-wrap">
          <div className="section-heading sponsors-heading">
            <p className="eyebrow eyebrow-light reveal" data-reveal>
              {t.sponsorsKicker}
            </p>
            <h2
              className="display display-light reveal"
              data-reveal
              id="sponsors-title"
            >
              {t.sponsorsTitle}
            </h2>
            <p className="section-lede section-lede-light reveal" data-reveal>
              {t.sponsorsBody}
            </p>
            <a
              className="button button-cream reveal"
              data-reveal
              href="mailto:sponsors@hackudc.gpul.org?subject=HackUDC27%20sponsorship"
            >
              {t.sponsorCta}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div
            className="sponsor-stack reveal"
            data-reveal
            aria-label="Sponsorship tiers"
          >
            <div className="sponsor-tier sponsor-root">
              <span>root</span>
              <b />
              <b />
              <b />
              <b />
            </div>
            <div className="sponsor-tier sponsor-admin">
              <span>admin</span>
              <b />
              <b />
              <b />
            </div>
            <div className="sponsor-tier sponsor-user">
              <span>user</span>
              <b />
            </div>
          </div>
        </div>
      </section>

      <section
        className="faq section-light"
        id="faq"
        aria-labelledby="faq-title"
      >
        <div className="section-wrap faq-wrap">
          <div className="section-heading">
            <p className="eyebrow reveal" data-reveal>
              {t.faqKicker}
            </p>
            <h2 className="display reveal" data-reveal id="faq-title">
              {t.faqTitle}
            </h2>
          </div>
          <div className="faq-list">
            {t.faq.map(([question, answer]) => (
              <details className="faq-item reveal" data-reveal key={question}>
                <summary>
                  <span>{question}</span>
                  <span className="faq-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-topline">
          <img
            src="/assets/brand/logo-cream.svg"
            alt="HackUDC27"
            width="1003"
            height="153"
          />
          <p>{t.footer}</p>
        </div>
        <div className="footer-bottomline">
          <span>© 2027 HackUDC</span>
          <div>
            {t.footerLinks.map((link) => (
              <a href="#top" key={link}>
                {link}
              </a>
            ))}
          </div>
          <a href="#top">
            ↑ {locale === "en" ? "Back to top" : "Volver arriba"}
          </a>
        </div>
      </footer>
    </main>
  );
}
