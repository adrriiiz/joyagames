/* ============================================================
   CONFIG.JS — Edita AQUÍ, no toques los demás archivos.
   ============================================================

   1) Datos generales del sitio: cambia nombre, frase y autor.
   2) Lista ITEMS: cada bloque { ... } es una tarjeta en la web.

   Para AÑADIR algo nuevo: copia un bloque entero (desde la { hasta
   la }, incluida la coma de después) y pégalo antes del ]  final.
   Para QUITAR algo: borra su bloque completo.

   Campos de cada item:
     id          -> texto corto único, tipo "plg-004" (no repetir)
     name        -> nombre que se ve en la tarjeta
     type        -> "plugin" o "config"  (solo esas dos opciones)
     version     -> texto libre, ej "1.0.0" o "v2"
     description -> descripción corta (1-2 frases)
     tags        -> lista de palabras clave entre comillas
     downloadUrl -> tu enlace de Mediafire (u otro)
     updated     -> fecha "AAAA-MM-DD", se muestra en la tarjeta

   No borres las comas ni las llaves { } — si algo se rompe,
   revisa que cada bloque tenga su coma final y sus comillas.
   ============================================================ */

window.SITE_CONFIG = {

  // ---- Datos generales -------------------------------------
  siteName: "JoyaGames",
  tagline: "Sin virus ni mierdas, unicamente el juego limpio.",
  author: "Adrriii",

  // Texto que sale pequeño en el pie de página
  footerNote: "Creado en Europa con amor para ti ❤",  

  // ---- Tus items ---------------------------------------------
  items: [
    {
      id: "juego-001",
      name: "R.E.P.O",
      type: "steam",
      version: "0.4.4",
      description: "El objetivo y la premisa recuerdan indefectiblemente al videojuego de 2023 Lethal Company, pero con superioridad notable en aspectos como las físicas y el movimiento.[3][4] Un grupo de hasta 6 jugadores debe localizar objetos de valor en un mapa, y sin que sean dañados entregarlos a un punto de extracción, mientras diversos monstruos deambulan y buscan eliminar al jugador que se encuentren.",
      tags: ["horror", "co-op", "multijugador"],
      downloadUrl: "https://www.mediafire.com/file/hsr9v4lm6n477io/REPO_BYJOYAGAMES.rar/file",
	  image: "images/repo.jpg",
      updated: "2026-08-19"
    },
    {
      id: "juego-002",
      name: "Grand Theft Auto V (not available)",
      type: "steam",
      version: "1.72",
      description: "Grand Theft Auto V (abreviado como GTA V o GTA 5) es un videojuego de acción y aventura de mundo abierto desarrollado por Rockstar North y publicado por Rockstar Games. Fue lanzado inicialmente el 17 de septiembre de 2013 para PlayStation 3 y Xbox 360. Posteriormente, se publicó el 18 de noviembre de 2014 para PlayStation 4 y Xbox One, incorporando, entre otras mejoras, un modo de juego con perspectiva en primera persona.",
      tags: ["accion", "aventura", "mundo abierto"],
      downloadUrl: "",
	  image: "images/gtav.jpg",
      updated: "2026-08-19"
    },
    {
      id: "juego-003",
      name: "Red Dead Redemption II (not available)",
      type: "steam",
      version: "1491.50",
      description: "Red Dead Redemption 2 (abreviado como RDR2 y estilizado como Red Dead Redemption II) es un videojuego de acción-aventura de mundo abierto desarrollado y publicado por Rockstar Games. El juego es la tercera entrada de la serie Red Dead y una precuela del juego Red Dead Redemption de 2010.",
      tags: ["accion", "aventura", "shooters"],
      downloadUrl: "",
	  image: "images/rdr2.jpg",
      updated: "2026-08-19"
    },
    {
      id: "juego-004",
      name: "Rust",
      type: "steam",
      version: "2631",
      description: "Rust es un juego de supervivencia creado por Facepunch Studios.[1] La inspiración del videojuego viene de múltiples juegos del género de supervivencia. Su lanzamiento oficial se produjo el 8 de febrero de 2018,[2] aunque estuvo en acceso anticipado desde 2013. Rust también está disponible en consolas como Xbox One y PlayStation 4 desde el 21 de mayo de 2021 en colaboración con Double Eleven.",
      tags: ["supervivencia", "mundo abierto"],
      downloadUrl: "https://gofile.io/d/UQ9o9Rza",
	  image: "images/rust.jpg",
      updated: "2026-08-19"
    },
    {
      id: "juego-005",
      name: "Schedule I",
      type: "steam",
      version: "0.4.6f13",
      description: "Schedule I es un videojuego de simulación de crimen de mundo abierto desarrollado por la desarrolladora australiana TVGS.[1][2] Lanzado en acceso anticipado el 24 de marzo de 2025, este juego combina gestión de negocios, estrategia y táctica mientras los jugadores construyen y expanden un imperio de negocios en un mundo ficticio. Se hizo muy popular tras su lanzamiento, sobre todo gracias a las transmisiones en vivo en Twitch y TikTok.[3].",
      tags: ["accion", "multijugador", "simulador"],
      downloadUrl: "https://www.mediafire.com/file/o96lmuotamf8w5f/Schedule-I-JOYAGAMES.space.rar/file",
	  image: "images/schedule1.jpg",
      updated: "2026-08-19"
    },	
	{
      id: "juego-006",
      name: "Elden Ring (not available)",
      type: "steam",
      version: "1.16.2",
      description: "El videojuego se lanzó al mercado a nivel mundial el 25 de febrero de 2022 en las plataformas Xbox One, Xbox Series X/S, Microsoft Windows, PlayStation 4, PlayStation 5.[1][2] La crítica lo elogió por el diseño de su mundo abierto, la jugabilidad y la ambientación, recibiendo algunas críticas por su rendimiento técnico. También, recibió múltiples premios a juego del año, tales como el de los Game Awards de 2022, y alcanzó las 20 millones de unidades vendidas en su primer año.",
      tags: ["accion", "juego de rol"],
      downloadUrl: "",
	  image: "images/elden.jpg",
      updated: "2026-08-19"
    },
	{
      id: "juego-007",
      name: "MECCHA CHAMELEON",
      type: "steam",
      version: "1.16.2",
      description: "Meccha Chameleon (en japonés: めっちゃカメレオン, Metcha Kamereon) es un videojuego independiente de género casual desarrollado por el desarrollador japonés Lemorion_1224 con la ayuda de Haganeiro.[1][2] Fue lanzado el 10 de junio de 2026 para PC. Tras dos semanas de su lanzamiento, alcanzó las 10 millones de copias vendidas, convirtiéndose en uno de los videojuegos más vendidos de PC de la historia.[3].",
      tags: ["multijugador", "juego de roles"],
      downloadUrl: "https://www.mediafire.com/file/56zmp1rrnl62p86/MECCHA-CHAMELEON-JoyaGames.space.rar/file",
	  image: "images/mecha.jpg",
      updated: "2026-08-19"
    },
	{
      id: "juego-008",
      name: "PALWORLD",
      type: "steam",
      version: "1.0.3.101283",
      description: "Palworld (パルワールド Paruwārudo?) es un videojuego de acción y aventura de supervivencia del desarrollador japonés Pocket Pair. El juego está ambientado en un mundo abierto poblado por criaturas parecidas a animales conocidas como Pals. Los jugadores pueden luchar y capturar a sus amigos para usarlos en la construcción de bases, el recorrido y el combate.",
      tags: ["multijugador", "juego de roles"],
      downloadUrl: "https://gofile.io/d/eM2YCuOw",
	  image: "images/palworld.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-009",
      name: "PROJECT ZOMBOID",
      type: "steam",
      version: "42.20.0",
      description: "Project Zomboid es un videojuego de supervivencia isométrico de mundo abierto desarrollado por el estudio independiente británico y canadiense The Indie Stone. El videojuego se desarrolla en la zona de exclusión postapocalíptica e infestada de zombis en una versión ficticia de Knox County, Kentucky, donde el jugador tiene el desafío de sobrevivir el mayor tiempo posible antes de morir.",
      tags: ["horror", "indie", "multijugador"],
      downloadUrl: "https://www.mediafire.com/file/sarq00d4vs2x58p/Project.Zomboid-JoyaGAMES.space.rar/file",
	  image: "images/projectzomboid.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-010",
      name: "EA SPORTS FC™ 26",
      type: "steam",
      version: "1.6.2",
      description: "EA Sports FC 26 es un videojuego de fútbol desarrollado por EA Vancouver y EA Romania y publicado por Electronic Arts. Su lanzamiento mundial fue el 26 de septiembre de 2025 para Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, Nintendo Switch, Nintendo Switch 2 y Amazon Luna.[1] Es la tercera entrega de la serie EA Sports FC tras EA FC 24 y EA FC 25.",
      tags: ["accion", "aventura", "multijugador"],
      downloadUrl: "",
	  image: "images/fc26.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-011",
      name: "MORTAL SHELL II",
      type: "steam",
      version: "-",
      description: "Mortal Shell 2 llega dispuesto a ser uno de los mejores soulslikes del año. La secuela del juego lanzado en 2020 supone un enorme salto para Cold Symmetry, que ha demostrado saber cómo potenciar sus ideas propias y aplicar la identidad de los juegos de FromSoftware para darnos una aventura con garra que atrapa desde un primer momento.",
      tags: ["accion", "aventura", "horror"],
      downloadUrl: "",
	  image: "images/ms2.jpg",
      updated: "2026-08-20"
    },

	{
      id: "juego-012",
      name: "WALLPAPER ENGINE",
      type: "steam",
      version: "6.1.3",
      description: "Wallpaper Engine es una aplicación para Windows con una aplicación complementaria para Android[1] que permite a los usuarios usar y crear fondos de pantalla animados e interactivos, similares al actualmente inexistente DreamScene de Windows. Los fondos de pantalla se comparten a través de Steam Workshop como contenido descargable creado por el usuario.",
      tags: ["herramienta"],
      downloadUrl: "https://www.mediafire.com/file/alvjh3yv2awgpay/Wallpaper.Engine-JoyaGAMES.space.rar/file",
	  image: "images/we.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-013",
      name: "BLACK CLOVER: QUARTET KNIGHTS",
      type: "steam",
      version: "-",
      description: "Raro es el manga o anime de éxito que no acaba recibiendo algún tipo de adaptación en forma de videojuego, por ello no resulta de extrañar que Bandai Namco haya decidido apostar por Black Clover, la aclamada obra de Yuki Tabata en la que nos cuentan la historia de Asta, un joven huérfano que aspira a convertirse en rey en un mundo de fantasía medieval en el que todo el mundo tiene capacidades mágicas menos él.",
      tags: ["accion", "anime"],
      downloadUrl: "https://gofile.io/d/KP7WwdYh",
	  image: "images/qn.jpg",
      updated: "2026-08-20"
    },  
	{
      id: "juego-014",
      name: "THE LEGEND OF ZELDA: TOTK (YUZU)",
      type: "steam",
      version: "1.1.1",
      description: "The Legend of Zelda: Tears of the Kingdom (ゼルダの伝説 ティアーズ オブ ザ キングダム Zeruda no Densetsu: Tiāzu obu za Kingudamu?, tdl. «La leyenda de Zelda: Lágrimas del reino») es un videojuego de acción-aventura y mundo abierto de 2023 de la serie The Legend of Zelda, desarrollado por la filial Nintendo EPD en colaboración con Monolith Soft y publicado por Nintendo para la consola Nintendo Switch.",
      tags: ["accion", "aventura", "juego de rol"],
      downloadUrl: "",
	  image: "images/totk.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-015",
      name: "THE LEGEND OF ZELDA: BOTW",
      type: "steam",
      version: "1.5.0",
      description: "The Legend of Zelda: Breath of the Wild (ゼルダの伝説 ブレス オブ ザ ワイルド Zeruda no Densetsu Buresu obu za Wairudo?, tdl. «La leyenda de Zelda: El aliento de la naturaleza») es un videojuego de acción-aventura de 2017 de la serie The Legend of Zelda, desarrollado por la filial Nintendo EPD en colaboración con Monolith Soft y publicado por Nintendo para las consolas Wii U, Nintendo Switch, y Nintendo Switch 2.",
      tags: ["accion", "aventura", "juego de rol"],
      downloadUrl: "",
	  image: "images/botw.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-016",
      name: "SUPER MARIO ODYSSEY (YUZU)",
      type: "steam",
      version: "1.3.0",
      description: "Super Mario Odyssey[b] es un videojuego de plataformas desarrollado y publicado por Nintendo para la Nintendo Switch. Una entrega de la serie Super Mario, sigue a Mario y a su nuevo aliado Cappy —un sombrero con conciencia propia— en su viaje por varios reinos para salvar a la Princesa Peach de los planes de matrimonio forzado de Bowser, su archienemigo.",
      tags: ["accion", "aventura"],
      downloadUrl: "https://www.mediafire.com/file/1tuu3onccbd52f4/Super-Mario-Odyssey-JoyaGAMES.rar/file",
	  image: "images/smo.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-017",
      name: "FIVE NIGHTS AT FREDDY'S 1",
      type: "steam",
      version: "1.132",
      description: "Five Nights at Freddy's, (en su traducción al español como «Cinco Noches en Freddy») abreviado como FNAF, es una franquicia de medios basada en una serie de videojuegos de terror independientes creada, diseñada, desarrollada y publicada por Scott Cawthon. La serie se centra en la historia de una pizzería llamada Freddy Fazbear's Pizza.",
      tags: ["horror"],
      downloadUrl: "https://www.mediafire.com/file/t4gjy4wgco1r1lh/Five-Nights-at-Freddys-JoyaGAMES.space.rar/file",
	  image: "images/fnaf1.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-018",
      name: "FIVE NIGHTS AT FREDDY'S 2",
      type: "steam",
      version: "1.033",
      description: "Five Nights at Freddy's 2 (a menudo abreviado como FNaF 2) es un videojuego de terror y supervivencia point-and-click de 2014 desarrollado y publicado por Scott Cawthon. Es la segunda entrega de la serie Five Nights at Freddy's. Ambientado en una pizzería ficticia, el jugador asume el papel de los guardias de seguridad nocturnos Jeremy Fitzgerald y Fritz Smith, defendiéndose de las hostiles mascotas animatrónicas del restaurante.",
      tags: ["horror"],
      downloadUrl: "https://www.mediafire.com/file/08a4s089yu1fss0/Five-Nights-at-Freddys-2-JoyaGAMES.space.rar/file",
	  image: "images/fnaf2.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-019",
      name: "FIVE NIGHTS AT FREDDY'S 3",
      type: "steam",
      version: "1.0.32",
      description: "Five Nights at Freddy's 3 (a menudo abreviado como FNaF 3) es un videojuego de terror y supervivencia point-and-click desarrollado y publicado por Scott Cawthon. Es la tercera entrega de la serie Five Nights at Freddy's y tiene lugar en una atracción con temática de terror basada en la cadena de restaurantes que aparece en los dos primeros juegos.",
      tags: ["horror"],
      downloadUrl: "https://www.mediafire.com/file/cv82k9l8ky2u1e6/Five-Nights-at-Freddys-3-JoyaGAMES.space.rar/file",
	  image: "images/fnaf3.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-020",
      name: "FIVE NIGHTS AT FREDDY'S 4",
      type: "steam",
      version: "1.132",
      description: "Five Nights at Freddy's 4 (abreviado como FNaF 4 o FNAF 4) es un videojuego de terror y supervivencia point-and-click desarrollado y publicado por Scott Cawthon. Es la cuarta entrega de la serie Five Nights at Freddy's. El juego se desarrolla en la habitación de un niño, donde el jugador debe evitar el ataque de animatrónicos de pesadilla que lo acechan.",
      tags: ["horror"],
      downloadUrl: "https://www.mediafire.com/file/gagobwrmjfb2sxa/Five-Nights-at-Freddys-4-JoyaGAMES.space.rar/file",
	  image: "images/fnaf4.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-021",
      name: "THE QUINTESSENTIAL QUINTUPLETS",
      type: "steam",
      version: "-",
      description: "The Quintessential Quintuplets es un manga romántico y de comedia creado por Negi Haruba, publicado entre 2017 y 2020, que sigue la historia sigue a Futaro Uesugi, un estudiante sobresaliente pero económicamente necesitado, que acepta el trabajo de tutor para cinco hermanas quintillizas: Ichika, Nino, Miku, Yotsuba e Itsuki Nakano.",
      tags: ["accion", "anime"],
      downloadUrl: "https://www.mediafire.com/file/2f77rn35cjvhiji/The.Quintessential.Quintuplets.Five.Memories.Spent.With.You.JoyaGAMES.Space.rar/file",
	  image: "images/tqq.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-022",
      name: "BUCKSHOT ROULETTE",
      type: "steam",
      version: "2.2.0.6",
      description: "Buckshot Roulette es un videojuego de terror independiente de mesa desarrollado y publicado por el desarrollador de juegos estonio Mike Klubnika el 28 de diciembre de 2023. En un inicio fue publicado en itch.io, y más tarde fue lanzado en Steam por Critical Reflex el 4 de abril de 2024 para coincidir con una nueva actualización.",
      tags: ["accion", "horror", "multiplayer"],
      downloadUrl: "https://www.mediafire.com/file/81a152k0bxu781d/BuckShot-Roulette-Joyagames.space.rar/file",
	  image: "images/br.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-023",
      name: "DISPATCH",
      type: "steam",
      version: "1.0.17912",
      description: "The Quintessential Quintuplets es un manga romántico y de comedia creado por Negi Haruba, publicado entre 2017 y 2020, que sigue la historia sigue a Futaro Uesugi, un estudiante sobresaliente pero económicamente necesitado, que acepta el trabajo de tutor para cinco hermanas quintillizas: Ichika, Nino, Miku, Yotsuba e Itsuki Nakano.",
      tags: ["accion", "aventura", "indie"],
      downloadUrl: "",
	  image: "images/dispatch.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-024",
      name: "MARVEL'S SPIDER-MAN 2",
      type: "steam",
      version: "2.810.0.0",
      description: "Marvel's Spider-Man 2 es un videojuego de acción y aventura de mundo abierto desarrollado por Insomniac Games y publicado por Sony Interactive Entertainment. Basado en el personaje de Marvel Comics, Spider-Man y presenta una narrativa inspirada en su extensa mitología de cómics, que también se deriva de diversas adaptaciones en otros medios.",
      tags: ["accion", "aventura"],
      downloadUrl: "",
	  image: "images/sm2.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-025",
      name: "PEAK",
      type: "steam",
      version: "2.1.a",
      description: "El juego se creó inicialmente para una game jam en febrero de 2025. Después, se amplió y se lanzó como juego completo el 16 de junio de 2025.[3] El videojuego se volvió popular rápidamente en la plataforma de transmisión en vivo Twitch, y su nivel de éxito ha sido comparado con el de juegos como Lethal Company y Phasmophobia.",
      tags: ["accion", "aventura", "multijugador"],
      downloadUrl: "https://www.mediafire.com/file/8pjzumnb2pmdjvi/PEAK-JoyaGAMES.space.rar/file",
	  image: "images/peak.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-026",
      name: "THE BLINDING OF ISAAC: REBIRTH",
      type: "steam",
      version: "1.9.7.17",
      description: "Rebirth es una nueva versión de The Binding of Isaac, desarrollada por McMillen y Florian Himsl y lanzada en 2011 como una aplicación Adobe Flash. Esta plataforma tenía limitaciones y llevó a McMillen a trabajar con Nicalis para producir Rebirth con un motor de juego más avanzado, lo que a su vez permitió la adición sustancial de contenido y características de juego.",
      tags: ["accion", "horror"],
      downloadUrl: "https://www.mediafire.com/file/kjyncihdfgjm60c/The.Binding.of.Isaac-Repentance-JoyaGAMES.space.rar/file",
	  image: "images/tboi.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-027",
      name: "DAYZ",
      type: "steam",
      version: "1.26",
      description: "Rebirth es una nueva versión de The Binding of Isaac, desarrollada por McMillen y Florian Himsl y lanzada en 2011 como una aplicación Adobe Flash. Esta plataforma tenía limitaciones y llevó a McMillen a trabajar con Nicalis para producir Rebirth con un motor de juego más avanzado, lo que a su vez permitió la adición sustancial de contenido y características de juego.",
      tags: ["accion", "aventura", "multijugador"],
      downloadUrl: "",
	  image: "images/dayz.jpg",
      updated: "2026-08-20"
    },
	{
      id: "juego-028",
      name: "THE CAVE DIVER",
      type: "steam",
      version: "-",
      description: "The Cave Diver es, a partes iguales, un rage-game, horror psicológico y una pesadilla folclórica. Un descenso a la oscuridad de 3 a 5 horas, construido alrededor de controles poco convencionales basados en las manos y una historia enterrada en lo más profundo de la tierra.",
      tags: ["indie", "aventura", "horror"],
      downloadUrl: "https://www.mediafire.com/file/z3b96nht1b90iex/The_Cave_Diver_ByJoyaGames.rar/file",
	  image: "images/tcd.jpg",
      updated: "2026-08-21"
    },
	{
      id: "juego-029",
      name: "MINECRAFT DUNGEONS",
      type: "steam",
      version: "1.17.0.0",
      description: "Minecraft Dungeons es un videojuego de rol de acción que se lanzó el 26 de mayo de 2020 para Windows, Xbox One, Nintendo Switch y PlayStation 4; más tarde se lanzó para macOS, Xbox Series X|S y PlayStation 5.[1] Fue desarrollado por Mojang y, cuya conversión a las consolas, fue realizada por Double Eleven. Se puede jugar solo o en línea con hasta cuatro jugadores.",
      tags: ["accion", "aventura", "multijugador"],
      downloadUrl: "https://www.mediafire.com/file/y3mz0g533nibgz6/Minecraft-Dungeons-JoyaGAMES.space.rar/file",
	  image: "images/mcd.jpg",
      updated: "2026-08-21"
    },
	{
      id: "juego-030",
      name: "MINECRAFT WINDOWS 10 EDITION",
      type: "otros",
      version: "1.21.130",
      description: "Minecraft Bedrock Edition o simplemente Minecraft Bedrock[1] (anteriormente Minecraft: Pocket Edition y Minecraft: Windows 10 Edition) es una edición del videojuego Minecraft para dispositivos móviles, realidad virtual, consolas de comando y la Microsoft Store de Windows.",
      tags: ["construccion", "aventura", "multijugador"],
      downloadUrl: "",
	  image: "images/mcw.jpg",
      updated: "2026-08-21"
    },
	{
      id: "juego-031",
      name: "HOTEL ARCHITECT",
      type: "steam",
      version: "1.0.2",
      description: "Este nos pone sobre la mesa, una propuesta donde se mezcla construcción, estrategia y gestión hotelera en tiempo real. Diseñamos nuestro propio establecimiento planta por planta, contratamos empleados, administramos presupuestos y nos adaptamos a clientes con necesidades completamente distintas.",
      tags: ["simulador", "estrategia"],
      downloadUrl: "https://www.mediafire.com/file/pn3btfvjm167z9z/Hotel.Architect-JoyaGAMES.space.rar/file",
	  image: "images/ha.jpg",
      updated: "2026-08-21"
    },
	{
      id: "juego-032",
      name: "HOLLOW KNIGHT: SILKSONG",
      type: "steam",
      version: "1.0.30000",
      description: "Hollow Knight: Silksong fue anunciado el 14 de febrero de 2019 en un tráiler[15] y con un vídeo en formato de diario de desarrollador en donde se dieron más detalles del juego.[16] El juego se lanzó para Windows, Mac, PlayStation, Xbox, Linux y en Nintendo Switch.",
      tags: ["accion", "aventura", "indie"],
      downloadUrl: "https://www.mediafire.com/file/cn4sq865r0u6ic5/Hollow-Knight-Silksong-JoyaGAMES.space.rar/file",
	  image: "images/hk.jpg",
      updated: "2026-08-21"
    },	
	{
      id: "juego-033",
      name: "GEOMETRY DASH",
      type: "steam",
      version: "2.2081",
      description: "El juego utiliza un sistema sencillo de pulsación para controlar diferentes vehículos (como dar clic con el ratón o teclado para su versión de escritorio).[1] El objetivo del juego es completar niveles, así sean los principales, hechos por el desarrollador y que conforman el juego base, o creados por la comunidad.",
      tags: ["accion", "indie"],
      downloadUrl: "https://www.mediafire.com/file/1ausc0cgewz9u70/Geometry-Dash-JoyaGAMES.space.rar/file",
	  image: "images/gd.jpg",
      updated: "2026-08-21"
    },
	{
      id: "juego-034",
      name: "ULTRAKILL",
      type: "steam",
      version: "22957324 (build)",
      description: "Ultrakill (estilizado como ULTRAKILL) es un próximo juego de disparos en primera persona desarrollado por Arsi Hakita Patala y publicado por New Blood Interactive. Se lanzó en Steam en acceso anticipado para Microsoft Windows el 3 de septiembre de 2020.",
      tags: ["accion", "indie"],
      downloadUrl: "https://www.mediafire.com/file/fzmnu12bd1e5au0/ULTRAKILL-JoyaGAMES.space.rar/file",
	  image: "images/uk.jpg",
      updated: "2026-08-21"
    },
	{
      id: "juego-035",
      name: "HOLLOW KNIGHT",
      type: "steam",
      version: "-",
      description: "Hollow Knight es un videojuego perteneciente al género metroidvania. El videojuego fue inicialmente lanzado para Microsoft Windows en febrero de 2017, y más tarde para macOS y Linux en abril de 2017.[2] La adaptación para Nintendo Switch fue lanzada el 12 de junio de 2018.",
      tags: ["accion", "indie"],
      downloadUrl: "https://www.mediafire.com/file/k8br7v5p7zr884l/Hollow.Knight-JoyaGAMES.space.rar/file",
	  image: "images/hok.jpg",
      updated: "2026-08-21"
    },
	{
      id: "juego-036",
      name: "BLOONS TD 6",
      type: "steam",
      version: "55.2.10954",
      description: "Bloons Tower Defense (También conocido como Bloons TD) es una saga de videojuegos de defensa de torres sobre la saga de Bloons creada y producida por Ninja Kiwi. El juego fue inicialmente desarrollado como un juego de navegador, hecho en Adobe Flash y lanzado en 2007.",
      tags: ["multijugador", "estrategia"],
      downloadUrl: "https://www.mediafire.com/file/grcz3y87n04t7is/Bloons-TD-6-JoyaGAMES.space.rar/file",
	  image: "images/btd6.jpg",
      updated: "2026-08-21"
    },
	{
      id: "juego-037",
      name: "CUPHEAD",
      type: "steam",
      version: "1.3.4",
      description: "Cuphead (subtitulado Don't deal with The Devil que traducido significa No hagas tratos con el diablo) es un videojuego perteneciente al género de corre y dispara, publicado por la empresa canadiense StudioMDHR. Fue lanzado al mercado el 29 de septiembre de 2017.",
      tags: ["accion", "indie"],
      downloadUrl: "https://www.mediafire.com/file/5dtbluzx3n8g4qn/Cuphead-JoyaGAMES.space.rar/file",
	  image: "images/cuphead.jpg",
      updated: "2026-08-21"
    },
	{
      id: "juego-038",
      name: "RAFT",
      type: "steam",
      version: "1.1.01",
      description: "Hollow Knight es un videojuego perteneciente al género metroidvania. El videojuego fue inicialmente lanzado para Microsoft Windows en febrero de 2017, y más tarde para macOS y Linux en abril de 2017.[2] La adaptación para Nintendo Switch fue lanzada el 12 de junio de 2018.",
      tags: ["accion", "aventura", "construccion"],
      downloadUrl: "https://www.mediafire.com/file/8tf8wtg0rxr7qjs/Raft-JoyaGAMES.space.rar/file",
	  image: "images/raft.jpg",
      updated: "2026-08-21"
    },	  
	{
      id: "juego-039",
      name: "TERRARIA",
      type: "steam",
      version: "1.4.5.6",
      description: "Terraria es un videojuego sandbox y de mundo abierto en 2D. Contiene elementos de construcción, exploración, aventura y combate, muy similar a juegos clásicos de la consola Super NES, como por ejemplo la serie Metroid, y a otras sagas como Minecraft.",
      tags: ["accion", "aventura", "construccion"],
      downloadUrl: "https://www.mediafire.com/file/rdq06lq3w5npz55/Terraria-JoyaGAMES.space.rar/file",
	  image: "images/terraria.jpg",
      updated: "2026-08-21"
    },	  
	{
      id: "juego-040",
      name: "STRAY",
      type: "steam",
      version: "1.5#368",
      description: "Stray es un juego de aventuras desarrollado por BlueTwelve Studio y publicado por Annapurna Interactive. La historia se centra en un gato callejero que cae en una ciudad amurallada, poblada por robots, máquinas y organismos mutantes, y su viaje para volver a la superficie en compañía de un dron, B-12.",
      tags: ["aventura", "horror", "indie"],
      downloadUrl: "https://www.mediafire.com/file/nyjlfncu8zbvfhy/Stray-JoyaGAMES.space.rar/file",
	  image: "images/stray.jpg",
      updated: "2026-08-21"
    },	  
	{
      id: "juego-041",
      name: "PACIFIC DRIVE",
      type: "steam",
      version: "1.15.0",
      description: "Pacific Drive es un videojuego de supervivencia desarrollado por Ironwood Studios y publicado por Kepler Interactive en 2024. El juego se desarrolla en el noroeste del Pacífico, que el jugador recorre a pie o en una camioneta mientras intenta encontrar una forma de escapar.",
      tags: ["aventura", "accion", "indie"],
      downloadUrl: "",
	  image: "images/pd.jpg",
      updated: "2026-08-23"
    },
	{
      id: "juego-042",
      name: "MY GAMING CLUB",
      type: "steam",
      version: "2.0",
      description: "Tienes que sacar adelante tu negocio desde cero; lo único que tienes al principio es un viejo garaje que heredaste de tu difunto tío Ben. Eres el propietario de un club de videojuegos, y cada día acuden a ti visitantes deseosos de jugar a diversos videojuegos.",
      tags: ["simulador", "indie"],
      downloadUrl: "",
	  image: "images/mgc.jpg",
      updated: "2026-08-23"
    },
	{
      id: "juego-043",
      name: "HOUSE OF GOLF 2",
      type: "steam",
      version: "1.2.5",
      description: "Embárcate en una aventura de golf inolvidable con House of Golf 2, ¡no solo un juego, sino una invitación a crear recuerdos duraderos con la familia y amigos! Ya seas un profesional experimentado o un recién llegado a los greens virtuales, sumérgete en un mundo lleno de desafíos y emoción.",
      tags: ["simulador", "indie"],
      downloadUrl: "",
	  image: "images/hog2.jpg",
      updated: "2026-08-23"
    },
	{
      id: "juego-044",
      name: "SURVIVE THE FALL",
      type: "steam",
      version: "-",
      description: "Este juego de supervivencia en mundo abierto combina exploración táctica, gestión de asentamientos y un enfoque narrativo envolvente en un mundo transformado para siempre por el impacto de un meteorito.",
      tags: ["accion", "aventura"],
      downloadUrl: "",
	  image: "images/stf.jpg",
      updated: "2026-08-23"
    },	
	{
      id: "juego-045",
      name: "ONLY UP!",
      type: "steam",
      version: "11651418 (build)",
      description: "Only Up! es un videojuego indie de plataformas y parkour de 2023 creado por SCKR Games. El juego fue lanzado el 24 de mayo de 2023 a Steam creciendo rápidamente llegando el 14 de junio a los más de 109.000 espectadores en la plataforma de Twitch.",
      tags: ["aventura", "indie"],
      downloadUrl: "",
	  image: "images/ou.jpg",
      updated: "2026-08-23"
    },
	{
      id: "juego-046",
      name: "MONSTER TRAIN 2",
      type: "steam",
      version: "21751654 (build)",
      description: "En cuanto al argumento, hay uno, pero probablemente no le prestarás demasiada atención. Básicamente, en lugar de estar ambientado en el infierno y girar en torno a la recuperación del retorcido dominio, ahora ángeles y demonios han unido sus fuerzas para organizar un asalto al cielo, en un intento de recuperar la ciudad celestial de los invasores Titanes.",
      tags: ["estrategia", "indie"],
      downloadUrl: "",
	  image: "images/mt2.jpg",
      updated: "2026-08-23"
    },
	{
      id: "juego-047",
      name: "KINDERGARTEN 3",
      type: "steam",
      version: "1.01",
      description: "Kindergarten 3 es un videojuego independiente de aventura y puzles con humor negro, desarrollado por Con Man Games y lanzado para PC. Este título continúa la serie Kindergarten, famosa por su mezcla única de comedia oscura, narrativa retorcida y jugabilidad centrada en la toma de decisiones y resolución de puzles.",
      tags: ["indie", "aventura"],
      downloadUrl: "",
	  image: "images/kg3.jpg",
      updated: "2026-08-23"
    },	  
  ]
};
