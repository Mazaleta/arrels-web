export type Language = "ca" | "es" | "en";

export const languages: { value: Language; label: string; short: string }[] = [
  { value: "ca", label: "Valencià", short: "VA" },
  { value: "es", label: "Castellano", short: "ES" },
  { value: "en", label: "English", short: "EN" },
];

type Feature = { title: string; description: string };

export interface SiteCopy {
  meta: { title: string; description: string };
  accessibility: {
    skip: string;
    menu: string;
    closeMenu: string;
    primaryNav: string;
    home: string;
    language: string;
    scroll: string;
  };
  nav: { vision: string; dream: string; universe: string; puzzle: string; lab: string; team: string; contact: string };
  hero: { kicker: string; intro: string; primary: string; secondary: string; imageAlt: string };
  vision: { quote: string; features: Feature[] };
  dream: {
    eyebrow: string;
    subtitle: string;
    imageAlt: string;
    trailer: string;
    traits: Feature[];
    steam: string;
    development: string;
    unavailable: string;
  };
  universe: {
    eyebrow: string;
    title: string;
    subtitle: string;
    imageAlt: string;
    current: string;
    currentDetail: string;
    seed: string;
    seedDetail: string;
  };
  puzzle: {
    eyebrow: string;
    title: string;
    subtitle: string;
    imageAlt: string;
    play: string;
    next: string;
    days: string;
    hours: string;
    minutes: string;
    players: string;
    completed: string;
    bestTime: string;
    gameReady: string;
    gameSoon: string;
    gameConsent: string;
    openSettings: string;
    closeGame: string;
    frameTitle: string;
    loading: string;
  };
  lab: { eyebrow: string; title: string; intro: string; comingSoon: string; features: Feature[] };
  team: { eyebrow: string; title: string; intro: string; values: string[] };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    name: string;
    email: string;
    message: string;
    nameHint: string;
    emailHint: string;
    messageHint: string;
    submit: string;
    sending: string;
    sent: string;
    error: string;
    required: string;
  };
  cookies: {
    branchSettings: string;
    branchPolicy: string;
    bannerTitle: string;
    bannerText: string;
    accept: string;
    reject: string;
    configure: string;
    dialogTitle: string;
    dialogIntro: string;
    necessary: string;
    necessaryDescription: string;
    preferences: string;
    preferencesDescription: string;
    analytics: string;
    analyticsDescription: string;
    external: string;
    externalDescription: string;
    alwaysActive: string;
    save: string;
    close: string;
    policyTitle: string;
    policyIntro: string;
    policyUseTitle: string;
    policyUse: string;
    policyControlTitle: string;
    policyControl: string;
    policyRetentionTitle: string;
    policyRetention: string;
    backToSettings: string;
  };
  footer: { tagline: string; policy: string; preferences: string; rights: string };
}

export const copy: Record<Language, SiteCopy> = {
  ca: {
    meta: {
      title: "Arrels — Experiències botàniques d'escape",
      description: "Arrels crea experiències digitals d'exploració, narrativa i puzles per a PC i realitat virtual.",
    },
    accessibility: {
      skip: "Anar al contingut principal",
      menu: "Obrir navegació",
      closeMenu: "Tancar navegació",
      primaryNav: "Navegació principal",
      home: "inici",
      language: "Seleccionar idioma",
      scroll: "Continuar cap avall",
    },
    nav: { vision: "Visió", dream: "El Sueño", universe: "Univers", puzzle: "Puzle", lab: "Lab", team: "Equip", contact: "Contacte" },
    hero: {
      kicker: "Experiències digitals d'escape per a PC i VR",
      intro: "Creem mons on els puzles, l'exploració i les històries creixen junts.",
      primary: "Descobrir El Sueño",
      secondary: "Jugar al puzle del mes",
      imageAlt: "Entrada lluminosa a un món botànic entre arrels, ruïnes i vegetació.",
    },
    vision: {
      quote: "Arrels significa origen. Creem experiències on cada puzle connecta amb una història i cada espai convida a descobrir.",
      features: [
        { title: "Exploració", description: "Mons que premien la curiositat i el desig de perdre's." },
        { title: "Puzles", description: "Reptes entrellaçats amb la història i amb cada espai." },
        { title: "Emoció", description: "Relats que continuen ressonant més enllà de la pantalla." },
      ],
    },
    dream: {
      eyebrow: "Projecte destacat",
      subtitle: "El primer capítol de l'univers Botanical Escapes.",
      imageAlt: "Hivernacle fantàstic amb fragments de puzle lluminosos sobre un mecanisme circular.",
      trailer: "Tràiler pròximament",
      traits: [
        { title: "PC i VR", description: "Una experiència pensada per a les dues formes de jugar." },
        { title: "Exploració", description: "Espais densos, tranquils i plens de pistes." },
        { title: "Narrativa", description: "La història es descobreix interactuant amb el món." },
        { title: "Atmosfera", description: "Llum, so i natura formen part de cada enigma." },
      ],
      steam: "Afegir a Steam",
      development: "Seguir el desenvolupament",
      unavailable: "Enllaç pendent de configuració",
    },
    universe: {
      eyebrow: "L'univers",
      title: "Botanical Escapes",
      subtitle: "Un univers en creixement d'experiències d'escape connectades.",
      imageAlt: "Arbre antic de fulles daurades, fanals florals i camins entre les arrels.",
      current: "El Sueño",
      currentDetail: "Primer capítol — en desenvolupament",
      seed: "Llavor encara per florir",
      seedDetail: "Encara arreplega llum…",
    },
    puzzle: {
      eyebrow: "El laboratori",
      title: "Puzle mensual",
      subtitle: "Cada mes apareix un misteri nou.",
      imageAlt: "Laboratori botànic amb herbes, vidre, llautó i un mecanisme circular lluminós.",
      play: "Obrir el puzle",
      next: "fins al pròxim misteri",
      days: "dies",
      hours: "hores",
      minutes: "minuts",
      players: "jugadors",
      completed: "completats",
      bestTime: "millor temps",
      gameReady: "El joc està preparat per carregar-se en esta mateixa pàgina.",
      gameSoon: "Este espai està preparat per al videojoc. Només falta indicar la seua URL de publicació.",
      gameConsent: "El joc està allotjat fora d'Arrels. Activa el contingut extern per carregar-lo ací.",
      openSettings: "Configurar cookies",
      closeGame: "Tancar el joc",
      frameTitle: "Puzle mensual d'Arrels",
      loading: "Carregant…",
    },
    lab: {
      eyebrow: "Experimental",
      title: "Arrels Lab",
      intro: "On la curiositat es troba amb el codi. Un espai de joc per a idees estranyes i boniques.",
      comingSoon: "Pròximament",
      features: [
        { title: "Minijocs", description: "Experiments de puzle breus i concentrats." },
        { title: "Experiments VR", description: "Prototips espacials immersius." },
        { title: "Prototips", description: "Idees crues que comencen a prendre forma." },
        { title: "Conceptes", description: "Exploracions visuals i estudis d'ambient." },
        { title: "Idees estranyes", description: "Allò inesperat, fràgil i meravellós." },
        { title: "Proves creatives", description: "Desmuntar coses per construir-les millor." },
      ],
    },
    team: {
      eyebrow: "Les persones",
      title: "Arrels Studio",
      intro: "Creem experiències on jugar significa descobrir. Som un estudi indie arrelat en la curiositat, els puzles i la bellesa dels mons fets a mà.",
      values: ["Natura", "Puzles", "Artesania", "Meravella"],
    },
    contact: {
      eyebrow: "Parlem",
      title: "Contacte",
      intro: "Una idea, una col·laboració o una pregunta? Ens encantarà llegir-te.",
      name: "Nom",
      email: "Correu electrònic",
      message: "Missatge",
      nameHint: "Com et dius?",
      emailHint: "tu@exemple.com",
      messageHint: "Conta'ns què tens al cap…",
      submit: "Enviar missatge",
      sending: "Enviant…",
      sent: "Missatge preparat. Gràcies per escriure'ns.",
      error: "No s'ha pogut enviar. Torna-ho a intentar o escriu-nos per correu.",
      required: "Camp obligatori",
    },
    cookies: {
      branchSettings: "Obrir preferències de cookies",
      branchPolicy: "Llegir la política de cookies",
      bannerTitle: "Tu tries què arrela",
      bannerText: "Utilitzem l'emmagatzematge necessari per recordar la teua decisió. La resta només s'activa amb el teu permís.",
      accept: "Acceptar totes",
      reject: "Rebutjar opcionals",
      configure: "Configurar",
      dialogTitle: "Preferències de cookies",
      dialogIntro: "Pots canviar esta decisió en qualsevol moment des de la branca visible de la pàgina.",
      necessary: "Necessàries",
      necessaryDescription: "Guarden la teua elecció de privacitat i permeten el funcionament bàsic.",
      preferences: "Preferències",
      preferencesDescription: "Recorden l'idioma seleccionat entre visites.",
      analytics: "Analítica",
      analyticsDescription: "Reservada per a estadístiques anònimes si s'incorpora un proveïdor en el futur.",
      external: "Contingut extern",
      externalDescription: "Permet carregar jocs o vídeos allotjats en altres plataformes.",
      alwaysActive: "Sempre actives",
      save: "Guardar preferències",
      close: "Tancar",
      policyTitle: "Política de cookies",
      policyIntro: "Esta primera versió no instal·la analítica ni publicitat. Només desa localment la teua decisió i, amb permís, l'idioma.",
      policyUseTitle: "Què guardem",
      policyUse: "arrels-cookie-preferences conserva les categories acceptades. arrels-language conserva l'idioma quan autoritzes preferències.",
      policyControlTitle: "Com ho controles",
      policyControl: "La branca de cookies està sempre visible. Des d'allí pots retirar o concedir permisos sense haver de buscar el peu de pàgina.",
      policyRetentionTitle: "Conservació",
      policyRetention: "La decisió es conserva al dispositiu fins que la canvies o elimines les dades del navegador.",
      backToSettings: "Tornar a preferències",
    },
    footer: { tagline: "Mons botànics, puzles i històries fetes a mà.", policy: "Política de cookies", preferences: "Preferències de cookies", rights: "Tots els drets reservats." },
  },
  es: {
    meta: {
      title: "Arrels — Experiencias botánicas de escape",
      description: "Arrels crea experiencias digitales de exploración, narrativa y puzles para PC y realidad virtual.",
    },
    accessibility: {
      skip: "Saltar al contenido principal",
      menu: "Abrir navegación",
      closeMenu: "Cerrar navegación",
      primaryNav: "Navegación principal",
      home: "inicio",
      language: "Seleccionar idioma",
      scroll: "Continuar hacia abajo",
    },
    nav: { vision: "Visión", dream: "El Sueño", universe: "Universo", puzzle: "Puzle", lab: "Lab", team: "Equipo", contact: "Contacto" },
    hero: {
      kicker: "Experiencias digitales de escape para PC y VR",
      intro: "Creamos mundos donde los puzles, la exploración y las historias crecen juntos.",
      primary: "Descubrir El Sueño",
      secondary: "Jugar al puzle del mes",
      imageAlt: "Entrada luminosa a un mundo botánico entre raíces, ruinas y vegetación.",
    },
    vision: {
      quote: "Arrels significa raíces. Creamos experiencias donde cada puzle conecta con una historia y cada espacio invita a descubrir.",
      features: [
        { title: "Exploración", description: "Mundos que recompensan la curiosidad y las ganas de perderse." },
        { title: "Puzles", description: "Retos entretejidos con la historia y con cada espacio." },
        { title: "Emoción", description: "Relatos que siguen resonando más allá de la pantalla." },
      ],
    },
    dream: {
      eyebrow: "Proyecto destacado",
      subtitle: "El primer capítulo del universo Botanical Escapes.",
      imageAlt: "Invernadero fantástico con fragmentos de puzle luminosos sobre un mecanismo circular.",
      trailer: "Tráiler próximamente",
      traits: [
        { title: "PC y VR", description: "Una experiencia pensada para ambas formas de jugar." },
        { title: "Exploración", description: "Espacios densos, tranquilos y llenos de pistas." },
        { title: "Narrativa", description: "La historia se descubre al interactuar con el mundo." },
        { title: "Atmósfera", description: "Luz, sonido y naturaleza forman parte de cada enigma." },
      ],
      steam: "Añadir a Steam",
      development: "Seguir el desarrollo",
      unavailable: "Enlace pendiente de configuración",
    },
    universe: {
      eyebrow: "El universo",
      title: "Botanical Escapes",
      subtitle: "Un universo en crecimiento de experiencias de escape conectadas.",
      imageAlt: "Árbol antiguo de hojas doradas, faroles florales y caminos entre las raíces.",
      current: "El Sueño",
      currentDetail: "Primer capítulo — en desarrollo",
      seed: "Semilla aún por florecer",
      seedDetail: "Todavía reuniendo luz…",
    },
    puzzle: {
      eyebrow: "El laboratorio",
      title: "Puzle mensual",
      subtitle: "Cada mes aparece un nuevo misterio.",
      imageAlt: "Laboratorio botánico con hierbas, vidrio, latón y un mecanismo circular luminoso.",
      play: "Abrir el puzle",
      next: "hasta el próximo misterio",
      days: "días",
      hours: "horas",
      minutes: "minutos",
      players: "jugadores",
      completed: "completados",
      bestTime: "mejor tiempo",
      gameReady: "El juego está preparado para cargarse en esta misma página.",
      gameSoon: "Este espacio está preparado para el videojuego. Solo falta indicar su URL de publicación.",
      gameConsent: "El juego está alojado fuera de Arrels. Activa el contenido externo para cargarlo aquí.",
      openSettings: "Configurar cookies",
      closeGame: "Cerrar el juego",
      frameTitle: "Puzle mensual de Arrels",
      loading: "Cargando…",
    },
    lab: {
      eyebrow: "Experimental",
      title: "Arrels Lab",
      intro: "Donde la curiosidad se encuentra con el código. Un espacio de juego para ideas extrañas y bonitas.",
      comingSoon: "Próximamente",
      features: [
        { title: "Minijuegos", description: "Experimentos de puzle breves y concentrados." },
        { title: "Experimentos VR", description: "Prototipos espaciales inmersivos." },
        { title: "Prototipos", description: "Ideas crudas que comienzan a tomar forma." },
        { title: "Conceptos", description: "Exploraciones visuales y estudios de ambiente." },
        { title: "Ideas extrañas", description: "Lo inesperado, frágil y maravilloso." },
        { title: "Pruebas creativas", description: "Desmontar cosas para construirlas mejor." },
      ],
    },
    team: {
      eyebrow: "Las personas",
      title: "Arrels Studio",
      intro: "Creamos experiencias donde jugar significa descubrir. Somos un estudio indie arraigado en la curiosidad, los puzles y la belleza de los mundos hechos a mano.",
      values: ["Naturaleza", "Puzles", "Artesanía", "Asombro"],
    },
    contact: {
      eyebrow: "Hablemos",
      title: "Contacto",
      intro: "¿Una idea, una colaboración o una pregunta? Nos encantará leerte.",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      nameHint: "¿Cómo te llamas?",
      emailHint: "tu@ejemplo.com",
      messageHint: "Cuéntanos qué tienes en mente…",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      sent: "Mensaje preparado. Gracias por escribirnos.",
      error: "No se ha podido enviar. Inténtalo de nuevo o escríbenos por correo.",
      required: "Campo obligatorio",
    },
    cookies: {
      branchSettings: "Abrir preferencias de cookies",
      branchPolicy: "Leer la política de cookies",
      bannerTitle: "Tú eliges qué arraiga",
      bannerText: "Usamos el almacenamiento necesario para recordar tu decisión. El resto solo se activa con tu permiso.",
      accept: "Aceptar todas",
      reject: "Rechazar opcionales",
      configure: "Configurar",
      dialogTitle: "Preferencias de cookies",
      dialogIntro: "Puedes cambiar esta decisión en cualquier momento desde la rama visible de la página.",
      necessary: "Necesarias",
      necessaryDescription: "Guardan tu elección de privacidad y permiten el funcionamiento básico.",
      preferences: "Preferencias",
      preferencesDescription: "Recuerdan el idioma seleccionado entre visitas.",
      analytics: "Analítica",
      analyticsDescription: "Reservada para estadísticas anónimas si se incorpora un proveedor en el futuro.",
      external: "Contenido externo",
      externalDescription: "Permite cargar juegos o vídeos alojados en otras plataformas.",
      alwaysActive: "Siempre activas",
      save: "Guardar preferencias",
      close: "Cerrar",
      policyTitle: "Política de cookies",
      policyIntro: "Esta primera versión no instala analítica ni publicidad. Solo guarda localmente tu decisión y, con permiso, el idioma.",
      policyUseTitle: "Qué guardamos",
      policyUse: "arrels-cookie-preferences conserva las categorías aceptadas. arrels-language conserva el idioma cuando autorizas preferencias.",
      policyControlTitle: "Cómo lo controlas",
      policyControl: "La rama de cookies está siempre visible. Desde ella puedes retirar o conceder permisos sin buscar el pie de página.",
      policyRetentionTitle: "Conservación",
      policyRetention: "La decisión se conserva en el dispositivo hasta que la cambies o elimines los datos del navegador.",
      backToSettings: "Volver a preferencias",
    },
    footer: { tagline: "Mundos botánicos, puzles e historias hechos a mano.", policy: "Política de cookies", preferences: "Preferencias de cookies", rights: "Todos los derechos reservados." },
  },
  en: {
    meta: {
      title: "Arrels — Botanical escape experiences",
      description: "Arrels creates digital exploration, narrative and puzzle experiences for PC and virtual reality.",
    },
    accessibility: {
      skip: "Skip to main content",
      menu: "Open navigation",
      closeMenu: "Close navigation",
      primaryNav: "Primary navigation",
      home: "home",
      language: "Select language",
      scroll: "Continue down",
    },
    nav: { vision: "Vision", dream: "El Sueño", universe: "Universe", puzzle: "Puzzle", lab: "Lab", team: "Team", contact: "Contact" },
    hero: {
      kicker: "Digital escape experiences for PC and VR",
      intro: "We create worlds where puzzles, exploration and storytelling grow together.",
      primary: "Discover El Sueño",
      secondary: "Play the monthly puzzle",
      imageAlt: "A luminous entrance to a botanical world among roots, ruins and foliage.",
    },
    vision: {
      quote: "Arrels means roots. We create experiences where every puzzle connects with a story and every space invites discovery.",
      features: [
        { title: "Exploration", description: "Worlds that reward curiosity and wandering." },
        { title: "Puzzles", description: "Challenges woven into the story and every space." },
        { title: "Emotion", description: "Stories that resonate beyond the screen." },
      ],
    },
    dream: {
      eyebrow: "Featured project",
      subtitle: "The first chapter in the Botanical Escapes universe.",
      imageAlt: "Fantasy greenhouse with luminous puzzle fragments over a circular mechanism.",
      trailer: "Trailer coming soon",
      traits: [
        { title: "PC & VR", description: "An experience designed for both ways of playing." },
        { title: "Exploration", description: "Rich, quiet spaces filled with clues." },
        { title: "Narrative", description: "The story unfolds as you interact with the world." },
        { title: "Atmospheric", description: "Light, sound and nature are part of every riddle." },
      ],
      steam: "Wishlist on Steam",
      development: "Follow development",
      unavailable: "Link awaiting configuration",
    },
    universe: {
      eyebrow: "The universe",
      title: "Botanical Escapes",
      subtitle: "A growing universe of interconnected escape experiences.",
      imageAlt: "Ancient tree with golden leaves, floral lanterns and paths between its roots.",
      current: "El Sueño",
      currentDetail: "First chapter — now in development",
      seed: "Seed not yet blooming",
      seedDetail: "Still gathering light…",
    },
    puzzle: {
      eyebrow: "The laboratory",
      title: "Monthly puzzle",
      subtitle: "Each month a new mystery appears.",
      imageAlt: "Botanical laboratory with herbs, glass, brass and a luminous circular mechanism.",
      play: "Open the puzzle",
      next: "until the next mystery",
      days: "days",
      hours: "hours",
      minutes: "minutes",
      players: "players",
      completed: "completed",
      bestTime: "best time",
      gameReady: "The game is ready to load on this page.",
      gameSoon: "This space is ready for the game. Its published URL is the only missing piece.",
      gameConsent: "The game is hosted outside Arrels. Enable external content to load it here.",
      openSettings: "Cookie settings",
      closeGame: "Close game",
      frameTitle: "Arrels monthly puzzle",
      loading: "Loading…",
    },
    lab: {
      eyebrow: "Experimental",
      title: "Arrels Lab",
      intro: "Where curiosity meets code. A playground for strange and beautiful ideas.",
      comingSoon: "Coming soon",
      features: [
        { title: "Mini games", description: "Bite-sized puzzle experiments." },
        { title: "VR experiments", description: "Immersive spatial prototypes." },
        { title: "Prototypes", description: "Raw ideas beginning to take shape." },
        { title: "Concepts", description: "Visual explorations and mood studies." },
        { title: "Strange ideas", description: "The unexpected, fragile and wonderful." },
        { title: "Creative tests", description: "Breaking things to build them better." },
      ],
    },
    team: {
      eyebrow: "The people",
      title: "Arrels Studio",
      intro: "We create experiences where playing means discovering. We are a small indie studio rooted in curiosity, puzzles and the beauty of handcrafted worlds.",
      values: ["Nature", "Puzzles", "Craft", "Wonder"],
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Contact",
      intro: "An idea, a collaboration or a question? We would love to hear from you.",
      name: "Name",
      email: "Email",
      message: "Message",
      nameHint: "What should we call you?",
      emailHint: "you@example.com",
      messageHint: "Tell us what you have in mind…",
      submit: "Send message",
      sending: "Sending…",
      sent: "Your message is ready. Thank you for writing.",
      error: "It could not be sent. Try again or contact us by email.",
      required: "Required field",
    },
    cookies: {
      branchSettings: "Open cookie preferences",
      branchPolicy: "Read the cookie policy",
      bannerTitle: "You choose what takes root",
      bannerText: "We use necessary storage to remember your decision. Everything else is enabled only with your permission.",
      accept: "Accept all",
      reject: "Reject optional",
      configure: "Configure",
      dialogTitle: "Cookie preferences",
      dialogIntro: "You can change this decision at any time from the branch that remains visible on the page.",
      necessary: "Necessary",
      necessaryDescription: "Stores your privacy choice and enables essential functionality.",
      preferences: "Preferences",
      preferencesDescription: "Remembers your selected language between visits.",
      analytics: "Analytics",
      analyticsDescription: "Reserved for anonymous statistics if a provider is added in the future.",
      external: "External content",
      externalDescription: "Allows games or videos hosted on other platforms to load.",
      alwaysActive: "Always active",
      save: "Save preferences",
      close: "Close",
      policyTitle: "Cookie policy",
      policyIntro: "This first version installs no analytics or advertising. It only stores your decision and, with permission, your language locally.",
      policyUseTitle: "What we store",
      policyUse: "arrels-cookie-preferences stores accepted categories. arrels-language stores the language when you allow preferences.",
      policyControlTitle: "How you control it",
      policyControl: "The cookie branch is always visible. It lets you withdraw or grant permission without searching the footer.",
      policyRetentionTitle: "Retention",
      policyRetention: "The decision remains on the device until you change it or clear your browser data.",
      backToSettings: "Back to preferences",
    },
    footer: { tagline: "Handcrafted botanical worlds, puzzles and stories.", policy: "Cookie policy", preferences: "Cookie preferences", rights: "All rights reserved." },
  },
};
