export type Locale = "es" | "en" | "gl";

export type Copy = {
  nav: string[];
  edition: string;
  title: string;
  datePlaceholder: string;
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
  experienceKicker: string;
  experienceTitle: string;
  experienceBody: string;
  gallery: string;
  aftermovie: string;
  galleryCta: string;
  videoCta: string;
  comingSoon: string;
  stepsKicker: string;
  stepsTitle: string;
  steps: [string, string, string][];
  sponsorsKicker: string;
  sponsorsTitle: string;
  sponsorsBody: string;
  sponsorCta: string;
  sponsorWindow: string;
  sponsorVisit: string;
  sponsorExtras: string;
  sponsorTiers: [string, string][];
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
    datePlaceholder: "XX FEB — XX MAR",
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
    experienceKicker: "La experiencia",
    experienceTitle: "Ven con una idea. Vuelve con una historia.",
    experienceBody:
      "No hace falta saberlo todo. Solo traer curiosidad, ganas de probar y alguien con quien celebrarlo cuando compile a la primera.",
    gallery: "Galería de 2026",
    aftermovie: "Aftermovie 2026",
    galleryCta: "Ver fotos",
    videoCta: "Ver vídeo",
    comingSoon: "Próximamente",
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
    sponsorCta: "¿Te interesa patrocinarnos?",
    sponsorWindow: "Jugar con la ventana",
    sponsorVisit: "Visitar la web de",
    sponsorExtras: "Más patrocinadores",
    sponsorTiers: [
      ["root", "</root>"],
      ["admin", "</admin>"],
      ["user", "</user>"],
    ],
    faqKicker: "Preguntas frecuentes",
    faqTitle: "Lo importante, antes de hacer las maletas.",
    faq: [
      [
        "¿Cuándo se celebra HackUDC?",
        "Próximamente anunciaremos las fechas del evento.",
      ],
      [
        "¿Dónde se celebra HackUDC?",
        "El evento tendrá lugar en la Facultad de Informática (FIC) de la Universidade da Coruña (UDC), en el campus de Elviña, en A Coruña.",
      ],
      [
        "¿Qué incluye HackUDC?",
        "HackUDC es completamente gratuito. Tendrás WiFi y espacios de trabajo, además de desayunos, comidas, cenas y tentempiés durante todo el evento. No olvides indicar cualquier restricción alimentaria al registrarte.",
      ],
      [
        "¿Dónde puedo descansar?",
        "Si no tienes alojamiento, habrá zonas de descanso en las aulas. Recuerda que la Facultad no es un hotel y que estas zonas están pensadas para echar una siesta rápida y volver a programar.",
      ],
      [
        "¿Podré ducharme durante el evento?",
        "¡Claro! La Facultad permanecerá abierta durante todo el evento y habrá horarios reservados para que puedas ducharte y mantenerte fresco.",
      ],
      [
        "¿Qué puedo crear?",
        "Puedes crear cualquier proyecto relacionado con la tecnología. No hay restricciones sobre el tema. El único requisito es publicar el proyecto desarrollado durante la hackathon bajo una licencia libre. Puedes hacer aplicaciones web o móviles, proyectos de hardware, juegos, APIs y mucho más.",
      ],
      [
        "¿Qué tengo que llevar?",
        "Para acceder tendrás que verificar tu identidad con un documento oficial válido. También te recomendamos llevar un portátil y su cargador, ropa cómoda y ganas de crear. Si tienes algún hardware específico que quieras usar, tráelo contigo.",
      ],
      [
        "¿Quién puede participar?",
        "Pueden participar estudiantes o personas recién graduadas, hasta un año después de graduarse, de universidades, ciclos de formación profesional, bachillerato u otros itinerarios educativos.",
      ],
      [
        "¿Cómo puedo registrarme?",
        "¡El registro ya está cerrado! Cubrimos todas las plazas disponibles casi un mes antes del evento. Gracias por tu interés. Esperamos verte en la próxima edición.",
      ],
      [
        "¿Y si no soy estudiante?",
        "También puedes participar como mentor o mentora para disfrutar del evento y ayudar a las personas participantes con sus proyectos. El registro de mentores abrirá más adelante.",
      ],
      [
        "¿Y si no tengo experiencia programando?",
        "HackUDC es un lugar para aprender, así que no necesitas experiencia previa programando. También puedes contribuir en otras áreas, como diseño, pruebas o gestión de proyectos.",
      ],
      [
        "¿Y si no tengo equipo?",
        "Parte de la diversión de una hackathon es conocer gente nueva. Al principio del evento organizaremos una actividad para que puedas conocer a otras personas y formar equipo.",
      ],
      [
        "¿Cuál es el tamaño máximo de un equipo?",
        "Los equipos pueden tener hasta 4 hackers.",
      ],
      [
        "¿Puedo cambiar de equipo durante el evento?",
        "¡Sí! Solo cuenta la entrega final, así que asegúrate de enviar correctamente tu proyecto. Durante el evento compartiremos las instrucciones de entrega.",
      ],
      [
        "Sobre los créditos ECTS",
        "Si eres estudiante de la UDC, puedes conseguir 1,5 créditos ECTS por participar en HackUDC. Controlaremos la asistencia durante el evento. Si quieres reconocer los créditos, tendrás que solicitarlo a través de la VEE. Daremos más información antes, durante y después del evento.",
      ],
      [
        "¿Habrá mentores?",
        "Sí. Habrá mentores disponibles durante todo el evento para responder a tus preguntas. Si quieres participar como mentor o mentora, puedes cubrir el formulario que aparece debajo del registro de participantes. Si tienes alguna duda, escríbenos a hackudc@gpul.org.",
      ],
      [
        "¿Y si tengo otras preguntas?",
        "Puedes contactarnos a través de las redes sociales o escribirnos a hackudc@gpul.org.",
      ],
    ],
    footer: "Cinco años iluminando el camino.",
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
    datePlaceholder: "XX FEB — XX MAR",
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
    experienceKicker: "The experience",
    experienceTitle: "Bring an idea. Leave with a story.",
    experienceBody:
      "You do not need to know everything. Just bring curiosity, a willingness to try and someone to celebrate with when it compiles on the first go.",
    gallery: "2026 gallery",
    aftermovie: "2026 aftermovie",
    galleryCta: "View photos",
    videoCta: "Watch video",
    comingSoon: "Coming soon",
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
    sponsorCta: "Interested in sponsoring us?",
    sponsorWindow: "Play with window",
    sponsorVisit: "Visit the website of",
    sponsorExtras: "More sponsors",
    sponsorTiers: [
      ["root", "</root>"],
      ["admin", "</admin>"],
      ["user", "</user>"],
    ],
    faqKicker: "Frequently asked",
    faqTitle: "The useful stuff, before you pack your bags.",
    faq: [
      [
        "When does HackUDC take place?",
        "We will announce the event dates soon.",
      ],
      [
        "Where does HackUDC take place?",
        "The event will take place at the Faculty of Computer Science (FIC) of the University of A Coruña (UDC), on the Elviña Campus in A Coruña.",
      ],
      [
        "What does HackUDC include?",
        "HackUDC is completely free for participants. WiFi and workspaces are provided, as well as breakfasts, lunches, dinners and snacks throughout the event. Do not forget to include any dietary restrictions when registering.",
      ],
      [
        "Where can I rest?",
        "If you do not have accommodation, rest areas will be available in classrooms. Keep in mind that the Faculty is not a hotel, and these areas are meant for quick naps so that you can get back to hacking.",
      ],
      [
        "Will I be able to take a shower during the event?",
        "Of course! The Faculty will be open throughout the event, and there will be designated times for you to take a shower and stay fresh.",
      ],
      [
        "What can I create?",
        "You can create any project related to technology. We have no restrictions on the topic. The only requirement is that the project developed during the hackathon is published under a free license. Some examples are web applications, mobile applications, hardware projects, games and APIs.",
      ],
      [
        "What do I need to bring?",
        "For admission, you will need to verify your identity with a valid government-issued ID. Other common things to bring are a laptop and charger, comfortable clothing and eagerness to create. If you have any specific hardware you want to use, feel free to bring it along.",
      ],
      [
        "Who can participate?",
        "Students or recent graduates, up to one year after graduation, from universities, vocational training programs, high schools or other educational backgrounds are all welcome.",
      ],
      [
        "How can I register?",
        "Registration has already closed! We filled all the available spots almost a month before the event. Thanks for your interest in the hackathon. We hope to see you in next year's edition.",
      ],
      [
        "What if I am not a student?",
        "You can still participate as a mentor to enjoy the event and help participants with their projects. Mentor registration will open later.",
      ],
      [
        "What if I have no coding experience?",
        "HackUDC is a place to learn, so no prior programming experience is required. There are many other areas where you can contribute, such as design, testing and project management.",
      ],
      [
        "What if I do not have a team?",
        "Part of the fun of a hackathon is meeting new people. We will have a team-building activity at the beginning of the event so that everyone can meet and form teams.",
      ],
      ["What is the maximum team size?", "Teams can have up to 4 hackers."],
      [
        "Can I switch teams during the event?",
        "Yes! Only the final submission counts, so make sure your project is submitted correctly. Submission instructions will be provided during the event.",
      ],
      [
        "About ECTS credits",
        "If you are a UDC student, you can earn 1.5 ECTS credits by participating in HackUDC. Attendance will be monitored during the event. UDC students interested in receiving credits must request recognition through the VEE. More detailed information will be provided before, during and after the event.",
      ],
      [
        "Will there be mentors?",
        "Yes. Mentors will be available throughout the event to answer any questions you may have. If you would like to participate as a mentor, you can fill out the form linked below the participant registration. For any questions, email us at hackudc@gpul.org.",
      ],
      [
        "What if I have other questions?",
        "If you have any other questions, feel free to contact us via social media or at hackudc@gpul.org.",
      ],
    ],
    footer: "Five years beaming the way.",
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
    datePlaceholder: "XX FEB — XX MAR",
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
    experienceKicker: "A experiencia",
    experienceTitle: "Vén cunha idea. Volve cunha historia.",
    experienceBody:
      "Non tes que sabelo todo. Só traer curiosidade, ganas de probar e alguén con quen celebralo cando compile á primeira.",
    gallery: "Galería de 2026",
    aftermovie: "Aftermovie 2026",
    galleryCta: "Ver fotos",
    videoCta: "Ver vídeo",
    comingSoon: "Proximamente",
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
    sponsorCta: "Interésache patrocinarnos?",
    sponsorWindow: "Xogar coa xanela",
    sponsorVisit: "Visitar a web de",
    sponsorExtras: "Máis patrocinadores",
    sponsorTiers: [
      ["root", "</root>"],
      ["admin", "</admin>"],
      ["user", "</user>"],
    ],
    faqKicker: "Preguntas frecuentes",
    faqTitle: "O importante, antes de facer as maletas.",
    faq: [
      [
        "Cando se celebra HackUDC?",
        "En breve anunciaremos as datas do evento.",
      ],
      [
        "Onde se celebra HackUDC?",
        "O evento terá lugar na Facultade de Informática (FIC) da Universidade da Coruña (UDC), no campus de Elviña, na Coruña.",
      ],
      [
        "Que inclúe HackUDC?",
        "HackUDC é totalmente gratuíta. Terás WiFi e espazos de traballo, ademais de almorzos, xantares, ceas e petiscos durante todo o evento. Non esquezas indicar calquera restrición alimentaria ao rexistrarte.",
      ],
      [
        "Onde podo descansar?",
        "Se non tes aloxamento, haberá zonas de descanso nas aulas. Lembra que a Facultade non é un hotel e que estas zonas están pensadas para botar unha sesta rápida e volver ao hacking.",
      ],
      [
        "Poderei ducharme durante o evento?",
        "Por suposto! A Facultade permanecerá aberta durante todo o evento e haberá horarios establecidos para que poidas ducharte e manterte fresco.",
      ],
      [
        "Que podo crear?",
        "Podes crear calquera proxecto relacionado coa tecnoloxía. Non hai restricións sobre o tema. O único requisito é publicar o proxecto desenvolvido durante a hackathon baixo unha licenza libre. Podes facer aplicacións web ou móbiles, proxectos de hardware, xogos, APIs e moito máis.",
      ],
      [
        "Que teño que levar?",
        "Para acceder terás que verificar a túa identidade cun documento oficial válido. Tamén recomendamos levar un portátil e o seu cargador, roupa cómoda e ganas de crear. Se tes algún hardware específico que queiras usar, tráeo contigo.",
      ],
      [
        "Quen pode participar?",
        "Poden participar estudantes ou persoas recentemente graduadas, ata un ano despois de graduarse, de universidades, ciclos de formación profesional, institutos ou outros itinerarios educativos.",
      ],
      [
        "Como podo rexistrarme?",
        "A inscrición xa pechou! Cubrimos todas as prazas dispoñibles case un mes antes do evento. Grazas polo teu interese. Agardamos verte na próxima edición.",
      ],
      [
        "E se non son estudante?",
        "Tamén podes participar como mentor ou mentora para gozar do evento e axudar ás persoas participantes cos seus proxectos. A inscrición de mentores abrirá máis adiante.",
      ],
      [
        "E se non teño experiencia programando?",
        "HackUDC é un lugar para aprender, así que non precisas experiencia previa programando. Tamén podes contribuír noutras áreas, como deseño, probas ou xestión de proxectos.",
      ],
      [
        "E se non teño equipo?",
        "Parte da diversión dunha hackathon é coñecer xente nova. Ao comezo do evento organizaremos unha actividade para que poidas coñecer outras persoas e formar un equipo.",
      ],
      [
        "Cal é o tamaño máximo dun equipo?",
        "Os equipos poden ter ata 4 hackers.",
      ],
      [
        "Podo cambiar de equipo durante o evento?",
        "Si! Só conta a entrega final, así que asegúrate de enviar correctamente o teu proxecto. Durante o evento compartiremos as instrucións de entrega.",
      ],
      [
        "Sobre os créditos ECTS",
        "Se es estudante da UDC, podes conseguir 1,5 créditos ECTS por participar en HackUDC. Controlaremos a asistencia durante o evento. Se queres recoñecer os créditos, terás que solicitalo a través da VEE. Daremos máis información antes, durante e despois do evento.",
      ],
      [
        "Haberá mentores?",
        "Si. Haberá mentores dispoñibles durante todo o evento para responder as túas preguntas. Se queres participar como mentor ou mentora, podes cubrir o formulario que aparece debaixo do rexistro de participantes. Se tes algunha dúbida, escríbenos a hackudc@gpul.org.",
      ],
      [
        "E se teño outras preguntas?",
        "Podes contactar connosco a través das redes sociais ou escribirnos a hackudc@gpul.org.",
      ],
    ],
    footer: "Cinco anos iluminando o camiño.",
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
