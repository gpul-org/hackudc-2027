export type Locale = "es" | "en" | "gl";

export type Copy = {
  nav: string[];
  edition: string;
  title: string;
  waitlist: string;
  waitlistShort: string;
  sponsor: string;
  marquee: string;
  aboutLabel: string;
  aboutTitle: string;
  aboutBody: string;
  aboutDetail: string;
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
  developedBy: string;
  manifestoCta: string;
  backToTop: string;
  terms: string;
  privacy: string;
  conduct: string;
  backHome: string;
};

export const copy: Record<Locale, Copy> = {
  es: {
    nav: ["Qué es", "La experiencia", "Patrocinio", "FAQ"],
    edition: "5ª EDICIÓN",
    title: "Hackea el futuro desde Galicia.",
    waitlist: "Apúntate a la lista de espera",
    waitlistShort: "Lista de espera",
    sponsor: "Patrocinar",
    marquee: "LISTA DE ESPERA ABIERTA · ÚNETE AHORA · HACKUDC27 · ",
    aboutLabel: "HACK + MARATÓN",
    aboutTitle: "¿Qué es HackUDC?",
    aboutBody:
      "HackUDC es una hackathon de código abierto organizada por GPUL. Construye un proyecto en 36 horas a partir de un reto patrocinado o crea algo original con un equipo de hasta cuatro hackers.",
    aboutDetail:
      "No hace falta sentirse preparado: ven a aprender, probar, conocer gente y compartir algo que pueda seguir creciendo después del evento.",
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
    developedBy: "Web desarrollada por",
    manifestoCta: "Descargar el manifiesto",
    backToTop: "Volver arriba",
    terms: "Términos y condiciones",
    privacy: "Política de privacidad",
    conduct: "Código de conducta",
    backHome: "Volver al inicio",
  },
  en: {
    nav: ["What is it", "The experience", "Sponsorship", "FAQ"],
    edition: "5TH EDITION",
    title: "Hack the future from Galicia.",
    waitlist: "Join the waitlist",
    waitlistShort: "Waitlist",
    sponsor: "Sponsor",
    marquee: "WAITLIST NOW OPEN · JOIN US · HACKUDC27 · ",
    aboutLabel: "HACK + MARATHON",
    aboutTitle: "What is HackUDC?",
    aboutBody:
      "HackUDC is an open-source hackathon organized by GPUL. Build a project in 36 hours from a sponsored challenge, or create something original with a team of up to four hackers.",
    aboutDetail:
      "You do not need to feel ready. Come to learn, try, meet people and share something that can keep growing after the event.",
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
    developedBy: "Website developed by",
    manifestoCta: "Download the manifesto",
    backToTop: "Back to top",
    terms: "Terms and conditions",
    privacy: "Privacy policy",
    conduct: "Code of conduct",
    backHome: "Back to home",
  },
  gl: {
    nav: ["Que é", "A experiencia", "Patrocinio", "FAQ"],
    edition: "5ª EDICIÓN",
    title: "Hackea o futuro desde Galicia.",
    waitlist: "Apúntate á lista de espera",
    waitlistShort: "Lista de espera",
    sponsor: "Patrocinar",
    marquee: "LISTA DE ESPERA ABERTA · ÚNETE AGORA · HACKUDC27 · ",
    aboutLabel: "HACK + MARATÓN",
    aboutTitle: "Que é HackUDC?",
    aboutBody:
      "HackUDC é unha hackathon de código aberto organizada por GPUL. Constrúe un proxecto en 36 horas a partir dun reto patrocinado ou crea algo orixinal cun equipo de ata catro hackers.",
    aboutDetail:
      "Non tes que sentirte preparado. Ven aprender, probar, coñecer xente e compartir algo que poida seguir medrando despois do evento.",
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
    developedBy: "Web desenvolvida por",
    manifestoCta: "Descargar o manifesto",
    backToTop: "Volver arriba",
    terms: "Termos e condicións",
    privacy: "Política de privacidade",
    conduct: "Código de conduta",
    backHome: "Volver ao inicio",
  },
};

export const languages: { code: Locale; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "gl", label: "GL" },
];
