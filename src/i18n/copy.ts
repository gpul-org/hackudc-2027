export type Locale = "es" | "en" | "gl";

export type Copy = {
  ogImageAlt: string;
  nav: string[];
  edition: string;
  title: string;
  dateComingSoon: string;
  waitlist: string;
  waitlistShort: string;
  sponsor: string;
  marquee: string;
  aboutLabel: string;
  aboutTitle: string;
  // Split around the GPUL link, which the component renders.
  aboutBody: [string, string];
  aboutDetail: string;
  statsTitle: string;
  stats: [string, string][];
  experienceTitle: string;
  aftermovie: string;
  videoCta: string;
  videoPlay: string;
  videoSound: string;
  videoPause: string;
  stepsKicker: string;
  stepsTitle: string;
  steps: [string, string, string][];
  sponsorsKicker: string;
  sponsorsTitle: string;
  sponsorCta: string;
  sponsorWindow: string;
  sponsorVisit: string;
  sponsorExtras: string;
  sponsorCollaborators: string;
  sponsorTiers: [string, string][];
  sponsorPackageSummaries: [string, string][];
  sponsorPackageHighlights: [
    string,
    [string, string, string] | [string, string, string, string],
  ][];
  sponsorCopyEmail: string;
  sponsorEmailCopied: string;
  sponsorDetails: string;
  sponsorDetailsSummary: string;
  sponsorDetailsCaption: string;
  sponsorContactTitle: string;
  sponsorContactBody: string;
  faqKicker: string;
  faqTitle: string;
  faq: [string, string][];
  galleryKicker: string;
  galleryTitle: string;
  galleryPrevious: string;
  galleryNext: string;
  galleryPause: string;
  galleryPlay: string;
  galleryPhotos: [string, string][];
  footer: string;
  developedBy: string;
  manifestoCta: string;
  backToTop: string;
  terms: string;
  privacy: string;
  conduct: string;
  backHome: string;
  backHomeShort: string;
};

export const copy: Record<Locale, Copy> = {
  es: {
    ogImageAlt:
      "HackUDC 2027, 5ª edición. Programa. Crea. Conecta. 36 horas para construir algo increíble.",
    nav: ["Qué es", "La experiencia", "Patrocinio", "FAQ"],
    edition: "5ª EDICIÓN",
    title: "Hackea el futuro desde Galicia.",
    dateComingSoon: "Fechas próximamente",
    waitlist: "Apúntate a la lista de espera",
    waitlistShort: "Lista de espera",
    sponsor: "Patrocinar",
    marquee: "LISTA DE ESPERA ABIERTA · ÚNETE AHORA · HACKUDC27 · ",
    aboutLabel: "HACK + MARATÓN",
    aboutTitle: "¿Qué es HackUDC?",
    aboutBody: [
      "HackUDC es una hackathon de código abierto organizada por ",
      ". Construye un proyecto en 36 horas a partir de un reto patrocinado o crea algo original con un equipo de hasta cuatro hackers.",
    ],
    aboutDetail:
      "No hace falta sentirse preparado: ven a aprender, probar, conocer gente y compartir algo que pueda seguir creciendo después del evento.",
    statsTitle: "HackUDC en cifras",
    stats: [
      ["500+", "participantes"],
      ["36h", "de hacking"],
      // Restore once the prize pool is confirmed.
      // ["X€", "en premios"],
      ["100%", "open source"],
    ],
    experienceTitle: "Así se vivió HackUDC 2026.",
    aftermovie: "Aftermovie 2026",
    videoCta: "Ver en YouTube",
    videoPlay: "Reproducir el aftermovie",
    videoSound: "Sonido",
    videoPause: "Pausar",
    stepsKicker: "Cómo funciona",
    stepsTitle: "Tu próximo proyecto empieza aquí.",
    steps: [
      [
        "01",
        "Forma equipo",
        "Hasta cuatro personas. Ven con tu equipo o únete a uno en el evento.",
      ],
      [
        "02",
        "Elige un reto",
        "Inspírate en los retos de patrocinadores y organización para crear algo original.",
      ],
      [
        "03",
        "Programa",
        "36 horas para darle vida, con tu lenguaje de siempre o probando algo nuevo.",
      ],
      [
        "04",
        "Presenta",
        "Documentación, una buena demo y código abierto. Los premios se anuncian en la clausura.",
      ],
    ],
    sponsorsKicker: "Patrocinadores",
    sponsorsTitle: "Gracias a quienes hacen posible HackUDC.",
    sponsorCta: "¿Te interesa patrocinarnos?",
    sponsorWindow: "Jugar con la ventana",
    sponsorVisit: "Visitar la web de",
    sponsorExtras: "Más patrocinadores",
    sponsorCollaborators: "Colaboradores",
    sponsorTiers: [
      ["root", "</root>"],
      ["admin", "</admin>"],
      ["user", "</user>"],
    ],
    sponsorPackageSummaries: [
      ["</root>", "La máxima presencia de marca y participación en el evento."],
      ["</admin>", "Una presencia destacada para conectar con la comunidad."],
      ["</user>", "Visibilidad y acceso a la experiencia HackUDC."],
      ["</collab>", "Colaboración en especie para hacer posible el evento."],
    ],
    sponsorPackageHighlights: [
      [
        "</root>",
        [
          "Desde 6 entradas",
          "Stand grande",
          "2 h de charlas",
          "Proponer un reto",
        ],
      ],
      [
        "</admin>",
        [
          "Desde 4 entradas",
          "Stand regular",
          "1 h de charla",
          "Posibilidad de proponer reto",
        ],
      ],
      ["</user>", ["Desde 2 entradas", "Logo regular", "30 min de charla"]],
      [
        "</collab>",
        ["Logo en la web", "Mención en redes", "Aportación en especie"],
      ],
    ],
    sponsorCopyEmail: "Copiar hackudc@gpul.org",
    sponsorEmailCopied: "Correo copiado",
    sponsorDetails: "Comparar todas las prestaciones",
    sponsorDetailsSummary: "Consulta el detalle de cada paquete.",
    sponsorDetailsCaption:
      "Prestaciones incluidas en cada paquete de patrocinio",
    sponsorContactTitle: "¿Te interesa patrocinar?",
    sponsorContactBody:
      "Escríbenos si quieres patrocinar HackUDC o preparar una colaboración a medida.",
    faqKicker: "Preguntas frecuentes",
    faqTitle: "Lo importante, antes de hacer las maletas.",
    faq: [
      [
        "¿Cuándo se celebra HackUDC?",
        "Próximamente anunciaremos las fechas del evento.",
      ],
      [
        "¿Dónde se celebra y dónde puedo descansar?",
        "El evento tendrá lugar en la Facultad de Informática (FIC) de la Universidade da Coruña (UDC), en el campus de Elviña, en A Coruña. Si lo necesitas, habrá zonas de descanso en las aulas para echar una siesta rápida.",
      ],
      [
        "¿Qué incluye HackUDC?",
        "HackUDC es completamente gratuito. Tendrás WiFi y espacios de trabajo, además de desayunos, comidas, cenas y tentempiés durante todo el evento. No olvides indicar cualquier restricción alimentaria al registrarte.",
      ],
      [
        "¿Qué puedo crear y qué tengo que llevar?",
        "Puedes crear cualquier proyecto relacionado con la tecnología, siempre que lo publiques bajo una licencia libre. Trae un documento oficial válido, tu portátil y cargador, ropa cómoda y cualquier hardware que quieras usar.",
      ],
      [
        "¿Quién puede participar?",
        "Pueden participar estudiantes y personas recién graduadas, hasta un año después de graduarse, de universidades, formación profesional, bachillerato u otros itinerarios educativos. No necesitas experiencia programando: también puedes aportar desde diseño, pruebas o gestión de proyectos.",
      ],
      [
        "¿Cómo funcionan los equipos?",
        "No necesitas venir con equipo: organizaremos una actividad para que conozcas a otras personas y forméis uno. Los equipos pueden tener hasta cuatro personas y pueden cambiar durante el evento.",
      ],
      [
        "¿Puedo participar como mentor o mentora?",
        "Sí. Habrá mentores durante todo el evento para resolver dudas. Si quieres colaborar como mentor o mentora, podrás inscribirte cuando abramos el registro.",
      ],
      [
        "Sobre los créditos ECTS",
        "Si eres estudiante de la UDC, puedes conseguir 1,5 créditos ECTS por participar en HackUDC. Controlaremos la asistencia durante el evento. Si quieres reconocer los créditos, tendrás que solicitarlo a través de la VEE. Daremos más información antes, durante y después del evento.",
      ],
      [
        "¿Y si tengo otras preguntas?",
        "Puedes contactarnos a través de las redes sociales o escribirnos a hackudc@gpul.org.",
      ],
    ],
    galleryKicker: "En imágenes",
    galleryTitle: "Esto también es HackUDC.",
    galleryPrevious: "Foto anterior",
    galleryNext: "Foto siguiente",
    galleryPause: "Pausar galería",
    galleryPlay: "Reproducir galería",
    galleryPhotos: [
      [
        "conversations.webp",
        "Un grupo de participantes conversa de pie en un pasillo, con acreditaciones de HackUDC.",
      ],
      [
        "team-coding.webp",
        "Un equipo programa con sus portátiles alrededor de una mesa en un aula, con acreditaciones de HackUDC y pegatinas en los equipos.",
      ],
      [
        "virtual-reality.webp",
        "Un participante prueba un visor de realidad virtual con un mando en cada mano, junto a otras personas con visores.",
      ],
      [
        "stairs.webp",
        "Varios participantes se sientan en los peldaños de una escalera y consultan portátiles y teléfonos.",
      ],
      [
        "food-break.webp",
        "Un participante se sirve salsa de un dispensador para acompañar su comida en un puesto al aire libre.",
      ],
      [
        "outdoor-break.webp",
        "Participantes comparten una pausa alrededor de mesas rojas al aire libre durante la noche.",
      ],
      [
        "last-minute-changes.webp",
        "Un equipo sentado en el suelo de un pasillo hace cambios de última hora en un portátil antes de presentar su proyecto.",
      ],
      [
        "project-presentation.webp",
        "Un equipo presenta su proyecto ante el público; una participante explica el código proyectado mientras sus compañeros están a su lado.",
      ],
      [
        "yellow-shirts.webp",
        "El equipo detrás de HackUDC 2026 posa en dos filas sobre el escenario; la mayoría lleva camisetas amarillas del evento.",
      ],
      [
        "group-photo.webp",
        "Foto de grupo de HackUDC en el auditorio, con participantes y personas con camisetas amarillas saludando a la cámara.",
      ],
    ],
    footer: "Cinco años iluminando el camino.",
    developedBy: "Web desarrollada por",
    manifestoCta: "Leer el manifiesto",
    backToTop: "Volver arriba",
    terms: "Términos y condiciones",
    privacy: "Política de privacidad",
    conduct: "Código de conducta",
    backHome: "Volver al inicio",
    backHomeShort: "Volver",
  },
  en: {
    ogImageAlt:
      "HackUDC 2027, 5th edition. Code. Create. Connect. 36 hours to build something amazing.",
    nav: ["What is it", "The experience", "Sponsorship", "FAQ"],
    edition: "5TH EDITION",
    title: "Hack the future from Galicia.",
    dateComingSoon: "Dates coming soon",
    waitlist: "Join the waitlist",
    waitlistShort: "Waitlist",
    sponsor: "Sponsor",
    marquee: "WAITLIST NOW OPEN · JOIN US · HACKUDC27 · ",
    aboutLabel: "HACK + MARATHON",
    aboutTitle: "What is HackUDC?",
    aboutBody: [
      "HackUDC is an open-source hackathon organized by ",
      ". Build a project in 36 hours from a sponsored challenge, or create something original with a team of up to four hackers.",
    ],
    aboutDetail:
      "You do not need to feel ready. Come to learn, try, meet people and share something that can keep growing after the event.",
    statsTitle: "HackUDC by the numbers",
    stats: [
      ["500+", "participants"],
      ["36h", "of hacking"],
      // Restore once the prize pool is confirmed.
      // ["X€", "in prizes"],
      ["100%", "open source"],
    ],
    experienceTitle: "This is how HackUDC 2026 felt.",
    aftermovie: "2026 aftermovie",
    videoCta: "Watch on YouTube",
    videoPlay: "Play the aftermovie",
    videoSound: "Sound",
    videoPause: "Pause",
    stepsKicker: "How it works",
    stepsTitle: "Your next project starts here.",
    steps: [
      [
        "01",
        "Build a team",
        "Up to four people. Bring your own team or join one at the event.",
      ],
      [
        "02",
        "Pick a challenge",
        "Get inspired by the sponsors' and organizers' challenges to build something original.",
      ],
      [
        "03",
        "Code",
        "36 hours to bring it to life, in your go-to language or something new.",
      ],
      [
        "04",
        "Submit",
        "Docs, a compelling demo and open-source code. Winners are announced at the closing ceremony.",
      ],
    ],
    sponsorsKicker: "Sponsors",
    sponsorsTitle: "Thanks to the companies that make HackUDC possible.",
    sponsorCta: "Interested in sponsoring us?",
    sponsorWindow: "Play with window",
    sponsorVisit: "Visit the website of",
    sponsorExtras: "More sponsors",
    sponsorCollaborators: "Collaborators",
    sponsorTiers: [
      ["root", "</root>"],
      ["admin", "</admin>"],
      ["user", "</user>"],
    ],
    sponsorPackageSummaries: [
      ["</root>", "Maximum brand presence and participation at the event."],
      ["</admin>", "A prominent presence for connecting with the community."],
      ["</user>", "Visibility and access to the HackUDC experience."],
      ["</collab>", "In-kind collaboration to help make the event happen."],
    ],
    sponsorPackageHighlights: [
      [
        "</root>",
        [
          "From 6 tickets",
          "Large stand",
          "2 h of talks",
          "Propose a challenge",
        ],
      ],
      [
        "</admin>",
        [
          "From 4 tickets",
          "Standard stand",
          "1 h talk",
          "Option to propose a challenge",
        ],
      ],
      ["</user>", ["From 2 tickets", "Standard logo", "30 min talk"]],
      [
        "</collab>",
        ["Website logo", "Social media mention", "In-kind contribution"],
      ],
    ],
    sponsorCopyEmail: "Copy hackudc@gpul.org",
    sponsorEmailCopied: "Email copied",
    sponsorDetails: "Compare every benefit",
    sponsorDetailsSummary: "See the detail for each package.",
    sponsorDetailsCaption: "Benefits included in each sponsorship package",
    sponsorContactTitle: "Interested in sponsoring?",
    sponsorContactBody:
      "Get in touch to sponsor HackUDC or put together a partnership that fits your needs.",
    faqKicker: "Frequently asked",
    faqTitle: "The useful stuff, before you pack your bags.",
    faq: [
      [
        "When does HackUDC take place?",
        "We will announce the event dates soon.",
      ],
      [
        "Where does it take place and where can I rest?",
        "The event will take place at the Faculty of Computer Science (FIC) of the University of A Coruña (UDC), on the Elviña Campus in A Coruña. If you need one, rest areas in classrooms will be available for a quick nap.",
      ],
      [
        "What does HackUDC include?",
        "HackUDC is completely free for participants. WiFi and workspaces are provided, as well as breakfasts, lunches, dinners and snacks throughout the event. Do not forget to include any dietary restrictions when registering.",
      ],
      [
        "What can I create and what should I bring?",
        "You can create any technology-related project, as long as you publish it under a free licence. Bring a valid government-issued ID, your laptop and charger, comfortable clothes and any hardware you want to use.",
      ],
      [
        "Who can participate?",
        "Students and recent graduates, up to one year after graduation, from universities, vocational training, high schools or other educational backgrounds can participate. No coding experience is needed: you can also contribute through design, testing or project management.",
      ],
      [
        "How do teams work?",
        "You do not need to arrive with a team: we will organise an activity to help you meet people and form one. Teams can have up to four people, and you can change teams during the event.",
      ],
      [
        "Can I take part as a mentor?",
        "Yes. Mentors will be available throughout the event to answer questions. If you would like to help as a mentor, you will be able to sign up when registration opens.",
      ],
      [
        "About ECTS credits",
        "If you are a UDC student, you can earn 1.5 ECTS credits by participating in HackUDC. Attendance will be monitored during the event. UDC students interested in receiving credits must request recognition through the VEE. More detailed information will be provided before, during and after the event.",
      ],
      [
        "What if I have other questions?",
        "If you have any other questions, feel free to contact us via social media or at hackudc@gpul.org.",
      ],
    ],
    galleryKicker: "In pictures",
    galleryTitle: "This is HackUDC, too.",
    galleryPrevious: "Previous photo",
    galleryNext: "Next photo",
    galleryPause: "Pause gallery",
    galleryPlay: "Play gallery",
    galleryPhotos: [
      [
        "conversations.webp",
        "A group of participants chats while standing in a corridor, wearing HackUDC badges.",
      ],
      [
        "team-coding.webp",
        "A team codes on laptops around a classroom table, wearing HackUDC badges, with stickers on their computers.",
      ],
      [
        "virtual-reality.webp",
        "A participant tries a virtual reality headset with a controller in each hand, alongside others wearing headsets.",
      ],
      [
        "stairs.webp",
        "Participants sit on staircase steps, looking at laptops and phones.",
      ],
      [
        "food-break.webp",
        "A participant serves himself sauce from a dispenser to go with his food at an outdoor stall.",
      ],
      [
        "outdoor-break.webp",
        "Participants share a break around red tables outdoors at night.",
      ],
      [
        "last-minute-changes.webp",
        "A team sitting on a corridor floor makes last-minute changes on a laptop before presenting their project.",
      ],
      [
        "project-presentation.webp",
        "A team presents its project to an audience; a participant explains the projected code while her teammates stand beside her.",
      ],
      [
        "yellow-shirts.webp",
        "The team behind HackUDC 2026 poses in two rows on the stage; most wear yellow event T-shirts.",
      ],
      [
        "group-photo.webp",
        "A HackUDC group photo in the auditorium, with participants and people in yellow T-shirts waving at the camera.",
      ],
    ],
    footer: "Five years beaming the way.",
    developedBy: "Website developed by",
    manifestoCta: "Read the manifesto",
    backToTop: "Back to top",
    terms: "Terms and conditions",
    privacy: "Privacy policy",
    conduct: "Code of conduct",
    backHome: "Back to home",
    backHomeShort: "Back",
  },
  gl: {
    ogImageAlt:
      "HackUDC 2027, 5ª edición. Programa. Crea. Conecta. 36 horas para construír algo incrible.",
    nav: ["Que é", "A experiencia", "Patrocinio", "FAQ"],
    edition: "5ª EDICIÓN",
    title: "Hackea o futuro desde Galicia.",
    dateComingSoon: "Datas proximamente",
    waitlist: "Apúntate á lista de espera",
    waitlistShort: "Lista de espera",
    sponsor: "Patrocinar",
    marquee: "LISTA DE ESPERA ABERTA · ÚNETE AGORA · HACKUDC27 · ",
    aboutLabel: "HACK + MARATÓN",
    aboutTitle: "Que é HackUDC?",
    aboutBody: [
      "HackUDC é unha hackathon de código aberto organizada por ",
      ". Constrúe un proxecto en 36 horas a partir dun reto patrocinado ou crea algo orixinal cun equipo de ata catro hackers.",
    ],
    aboutDetail:
      "Non tes que sentirte preparado. Ven aprender, probar, coñecer xente e compartir algo que poida seguir medrando despois do evento.",
    statsTitle: "HackUDC en cifras",
    stats: [
      ["500+", "participantes"],
      ["36h", "de hacking"],
      // Restore once the prize pool is confirmed.
      // ["X€", "en premios"],
      ["100%", "open source"],
    ],
    experienceTitle: "Así se viviu HackUDC 2026.",
    aftermovie: "Aftermovie 2026",
    videoCta: "Ver en YouTube",
    videoPlay: "Reproducir o aftermovie",
    videoSound: "Son",
    videoPause: "Pausar",
    stepsKicker: "Como funciona",
    stepsTitle: "O teu próximo proxecto comeza aquí.",
    steps: [
      [
        "01",
        "Forma equipo",
        "Ata catro persoas. Ven co teu equipo ou únete a un no evento.",
      ],
      [
        "02",
        "Escolle un reto",
        "Inspírate nos retos de patrocinadores e organización para crear algo orixinal.",
      ],
      [
        "03",
        "Programa",
        "36 horas para darlle vida, coa túa linguaxe de sempre ou probando algo novo.",
      ],
      [
        "04",
        "Presenta",
        "Documentación, unha boa demo e código aberto. Os premios anúncianse na clausura.",
      ],
    ],
    sponsorsKicker: "Patrocinadores",
    sponsorsTitle: "Grazas a quen fai posible HackUDC.",
    sponsorCta: "Interésache patrocinarnos?",
    sponsorWindow: "Xogar coa xanela",
    sponsorVisit: "Visitar a web de",
    sponsorExtras: "Máis patrocinadores",
    sponsorCollaborators: "Colaboradores",
    sponsorTiers: [
      ["root", "</root>"],
      ["admin", "</admin>"],
      ["user", "</user>"],
    ],
    sponsorPackageSummaries: [
      ["</root>", "A máxima presenza de marca e participación no evento."],
      ["</admin>", "Unha presenza destacada para conectar coa comunidade."],
      ["</user>", "Visibilidade e acceso á experiencia HackUDC."],
      ["</collab>", "Colaboración en especie para facer posible o evento."],
    ],
    sponsorPackageHighlights: [
      [
        "</root>",
        [
          "Desde 6 entradas",
          "Stand grande",
          "2 h de charlas",
          "Propoñer un reto",
        ],
      ],
      [
        "</admin>",
        [
          "Desde 4 entradas",
          "Stand normal",
          "1 h de charla",
          "Posibilidade de propoñer un reto",
        ],
      ],
      ["</user>", ["Desde 2 entradas", "Logo normal", "30 min de charla"]],
      [
        "</collab>",
        ["Logo na web", "Mención en redes", "Aportación en especie"],
      ],
    ],
    sponsorCopyEmail: "Copiar hackudc@gpul.org",
    sponsorEmailCopied: "Correo copiado",
    sponsorDetails: "Comparar todas as prestacións",
    sponsorDetailsSummary: "Consulta o detalle de cada paquete.",
    sponsorDetailsCaption:
      "Prestacións incluídas en cada paquete de patrocinio",
    sponsorContactTitle: "Interésache patrocinar?",
    sponsorContactBody:
      "Escríbenos se queres patrocinar HackUDC ou preparar unha colaboración á medida.",
    faqKicker: "Preguntas frecuentes",
    faqTitle: "O importante, antes de facer as maletas.",
    faq: [
      [
        "Cando se celebra HackUDC?",
        "En breve anunciaremos as datas do evento.",
      ],
      [
        "Onde se celebra e onde podo descansar?",
        "O evento terá lugar na Facultade de Informática (FIC) da Universidade da Coruña (UDC), no campus de Elviña, na Coruña. Se o precisas, haberá zonas de descanso nas aulas para botar unha sesta rápida.",
      ],
      [
        "Que inclúe HackUDC?",
        "HackUDC é totalmente gratuíta. Terás WiFi e espazos de traballo, ademais de almorzos, xantares, ceas e petiscos durante todo o evento. Non esquezas indicar calquera restrición alimentaria ao rexistrarte.",
      ],
      [
        "Que podo crear e que teño que levar?",
        "Podes crear calquera proxecto relacionado coa tecnoloxía, sempre que o publiques baixo unha licenza libre. Trae un documento oficial válido, o teu portátil e cargador, roupa cómoda e calquera hardware que queiras usar.",
      ],
      [
        "Quen pode participar?",
        "Poden participar estudantes e persoas recentemente graduadas, ata un ano despois de graduarse, de universidades, formación profesional, institutos ou outros itinerarios educativos. Non precisas experiencia programando: tamén podes contribuír desde deseño, probas ou xestión de proxectos.",
      ],
      [
        "Como funcionan os equipos?",
        "Non necesitas vir con equipo: organizaremos unha actividade para que coñezas outras persoas e formedes un. Os equipos poden ter ata catro persoas e podes cambiar de equipo durante o evento.",
      ],
      [
        "Podo participar como mentor ou mentora?",
        "Si. Haberá mentores durante todo o evento para resolver dúbidas. Se queres colaborar como mentor ou mentora, poderás inscribirte cando abramos o rexistro.",
      ],
      [
        "Sobre os créditos ECTS",
        "Se es estudante da UDC, podes conseguir 1,5 créditos ECTS por participar en HackUDC. Controlaremos a asistencia durante o evento. Se queres recoñecer os créditos, terás que solicitalo a través da VEE. Daremos máis información antes, durante e despois do evento.",
      ],
      [
        "E se teño outras preguntas?",
        "Podes contactar connosco a través das redes sociais ou escribirnos a hackudc@gpul.org.",
      ],
    ],
    galleryKicker: "En imaxes",
    galleryTitle: "Isto tamén é HackUDC.",
    galleryPrevious: "Foto anterior",
    galleryNext: "Foto seguinte",
    galleryPause: "Pausar galería",
    galleryPlay: "Reproducir galería",
    galleryPhotos: [
      [
        "conversations.webp",
        "Un grupo de participantes conversa de pé nun corredor, con acreditacións de HackUDC.",
      ],
      [
        "team-coding.webp",
        "Un equipo programa cos seus portátiles arredor dunha mesa nunha aula, con acreditacións de HackUDC e adhesivos nos equipos.",
      ],
      [
        "virtual-reality.webp",
        "Un participante proba un visor de realidade virtual cun mando en cada man, xunto a outras persoas con visores.",
      ],
      [
        "stairs.webp",
        "Varios participantes sentan nos chanzos dunha escaleira e consultan portátiles e teléfonos.",
      ],
      [
        "food-break.webp",
        "Un participante sérvese salsa dun dispensador para acompañar a súa comida nun posto ao aire libre.",
      ],
      [
        "outdoor-break.webp",
        "Participantes comparten unha pausa arredor de mesas vermellas ao aire libre durante a noite.",
      ],
      [
        "last-minute-changes.webp",
        "Un equipo sentado no chan dun corredor fai cambios de última hora nun portátil antes de presentar o seu proxecto.",
      ],
      [
        "project-presentation.webp",
        "Un equipo presenta o seu proxecto ante o público; unha participante explica o código proxectado mentres os seus compañeiros están ao seu lado.",
      ],
      [
        "yellow-shirts.webp",
        "O equipo detrás de HackUDC 2026 posa en dúas filas sobre o escenario; a maioría leva camisetas amarelas do evento.",
      ],
      [
        "group-photo.webp",
        "Foto de grupo de HackUDC no auditorio, con participantes e persoas con camisetas amarelas saudando á cámara.",
      ],
    ],
    footer: "Cinco anos iluminando o camiño.",
    developedBy: "Web desenvolvida por",
    manifestoCta: "Ler o manifesto",
    backToTop: "Volver arriba",
    terms: "Termos e condicións",
    privacy: "Política de privacidade",
    conduct: "Código de conduta",
    backHome: "Volver ao inicio",
    backHomeShort: "Volver",
  },
};

export const languages: { code: Locale; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "gl", label: "GL" },
];
