// Notas de El Ojo Vago News. Para agregar o editar una nota, se cambia este archivo.
window.STORIES = {
      uruguay: {
        kicker: 'Bukelizame el paisito',
        flags: true,
        video: 'assets/uruguay-orsi-ulloa.webp',
        imageAlt: 'Yamandú Orsi y Félix Ulloa en la Torre Ejecutiva',
        lead: 'Orsi se reúne con el vice de El Salvador',
        dek: 'El presidente recibe este miércoles en la Torre Ejecutiva a Félix Ulloa, vicepresidente del gobierno de Nayib Bukele. En su visita, Ulloa también tiene previsto reunirse con Andrés Ojeda, secretario general del Partido Colorado, y con el expresidente Julio María Sanguinetti. En noviembre de 2025 Orsi había dicho que el modelo de seguridad salvadoreño era un caso para analizar, aunque aclaró que no lo respaldaba.'
      },
      internacional: {
        kicker: "Ni Nostradamus tuvo una semana con tanto material",
        lead: "El fin del mundo, versión semanal",
        video: 'assets/fin-del-mundo-aviones.webp',
        imageAlt: "Aviones en tierra en un aeropuerto de Estados Unidos durante la parada nacional de vuelos",
        dek: "Se cayó Outlook, se cayeron los aviones, se derritieron los congeladores, casi hierven la sangre y un banco se tragó los ahorros de medio Paraguay. Todo en dos semanas. ¿Complot o martes?",
        byline: "Por Román · 14 de noviembre de 2026 · ⏱ 7 min de lectura",
        body: [
          ["h", "La pregunta"],
          ["p", "Me lo pregunto en serio. En dos semanas se cayeron los aviones de Estados Unidos y el Outlook de medio mundo, alguien calentó a 50 grados las heladeras de cientos de supermercados, otro intentó hervir el plasma de los bancos de sangre franceses y un banco paraguayo se quedó con los ahorros de casi tres millones de personas. Cada caso vino con su comunicado tranquilizador."],
          ["p", "¿Es el principio de algo, o nos llega tanta información que cualquier semana parece el fin del mundo? Me puse a unir los puntos, a ver qué dibujo salía."],
          ["h", "1. Estados Unidos se queda sin cielo"],
          ["p", "El viernes 13 de noviembre (sí, viernes 13: el guionista no se esforzó) la FAA frenó todos los despegues del país durante más de cuatro horas. Es la primera parada nacional desde enero de 2023. Hubo más de 600 vuelos desviados, miles de cancelaciones y gente durmiendo en los aeropuertos."],
          ["p", "La explicación oficial del secretario de Transporte, Sean Duffy: un sistema de control aéreo \"increíblemente viejo\", con telecomunicaciones analógicas, cuyos equipos se saturaron de datos. No es la primera vez que lo dice: viene hablando de radares de los años 70, de un sistema que no se actualiza desde los 80 y de pantallas de los 90 que todavía usan disquetes. El secretario de Seguridad Nacional, Markwayne Mullin, dijo que por ahora no hay indicios de un acto malicioso, pero que van a revisar si tiene que ver con el nuevo sistema de inteligencia artificial que la FAA venía desplegando."],
          ["p", "Y acá viene lo mejor. Esa misma mañana, antes del apagón, el gobierno le había pedido al Congreso 30.100 millones de dólares para modernizar el sistema. A la noche, con los aviones todavía en tierra, Duffy subió la apuesta: \"Quiero 50.000 millones\". Mullin le hizo coro y dijo que hace falta un sistema nuevo de cero. Del desayuno a la cena, el presupuesto creció un 66 %. Ni la inflación argentina."],
          ["p", "Claro que también existe la otra teoría: una bandera falsa hecha en casa para destrabar la plata. Si es así, hay que reconocerles el timing, porque lo hicieron un viernes 13. Al lado de eso, Jason es un pollito mojado."],
          ["card", "La letra chica", "Ojo con esto", "En septiembre pasó lo mismo a escala regional, en Filadelfia. Falló un circuito que ya estaba programado para reemplazarse, y cuando quisieron pasar al respaldo descubrieron que una cuadrilla de obras había cortado el cable. El sistema aéreo yanqui viene avisando hace rato."],
          ["h", "2. Supermercados a baño María"],
          ["p", "Esto sí es un ataque, y nadie lo niega. En octubre le tocó a unos 700 supermercados en Francia. En la madrugada del 1 al 2 de noviembre, a más de cien locales en Bélgica, Luxemburgo, Suecia, Irlanda, Países Bajos, Estonia y Finlandia. Alguien entró a los controladores de las heladeras (muchos de la danesa Danfoss) y les puso 50 °C o los mandó a descongelar de noche, con la tienda cerrada. Un Delhaize belga calculó unos 100.000 euros de mercadería a la basura."],
          ["card", "La letra chica", "Ojo con esto", "De \"ataques aislados\", nada. Las autoridades lo tratan como una campaña en serie, la fiscalía belga abrió una investigación y el jefe de la agencia francesa de ciberseguridad dijo que lo de octubre fue posible por fallas de seguridad básicas. Traducción libre: equipos de frío colgados de internet sin la protección mínima. El culpable, por ahora, no tiene nombre."],
          ["h", "3. La sangre que no llegó a hervir"],
          ["p", "Esa misma noche hackearon el sistema de frío de un proveedor del servicio nacional de sangre de Francia (EFS) en tres sedes. Según el semanario Le Canard Enchaîné, la temperatura programada pasó de -30 °C a 110 °C. Un técnico de guardia vio subir los números, avisó, y el plasma se trasladó o se aseguró a tiempo. No se perdió ni una bolsa."],
          ["card", "La letra chica", "Ojo con esto", "Los 110 °C son lo que se tecleó en el sistema, no la temperatura que alcanzaron las cámaras. El héroe de la semana es un tipo de turno noche mirando una pantalla. Ni algoritmos ni protocolos de la OTAN."],
          ["h", "4. Microsoft 364"],
          ["p", "El jueves 12, desde media tarde (hora de Greenwich), Outlook, Teams y Copilot se cayeron en 74 países. Downdetector juntó más de 100.000 reclamos en una hora, y millones de oficinistas pasaron casi un día entero sin mail (seamos honestos: no todos lloraron)."],
          ["p", "Microsoft pidió perdón y explicó que el problema venía de una ampliación de capacidad de red que se destapó después de otro cambio en la red. Aclaró, por las dudas, que no fue un ciberataque ni la IA."],
          ["card", "La letra chica", "Ojo con esto", "Esto pasa un par de veces por año. En enero de 2026 ya había habido una caída de casi diez horas."],
          ["h", "5. Ueno: el banco que se comió Paraguay"],
          ["p", "Acá no hay hacker. Hay algo mucho más viejo. El 2 de noviembre el Banco Central del Paraguay intervino Ueno Bank, el banco digital estrella que en menos de cinco años pasó de financiera chica a estar en el celular de todo el mundo. Los inspectores encontraron préstamos mal documentados a empresas vinculadas a los propios dueños y gastos anotados como si fueran activos. Resultado: 2,9 millones de clientes según el banco (la prensa paraguaya habla de unas 1,7 millones de cuentas) sin acceso a su plata."],
          ["h", "Y ueno... ¿qué se le va a hacer?"],
          ["p", "Después vino el efecto dominó. Hay ocho directivos detenidos, entre ellos el fundador Federico Vázquez y el presidente del banco, Juan Manuel Gustale. Renunció el presidente del Banco Central, Carlos Carvallo, que antes había dirigido Financiera Ueno. Y el presidente de la República, Santiago Peña, que fue accionista del grupo dueño del banco hasta marzo de 2025, dejó el cargo en medio de un juicio político. Desde el 7 de noviembre está en prisión preventiva, imputado por lesión de confianza y administración en provecho propio (imputado no es condenado). Asumió Pedro Alliana, que promete devolverles la plata a los ahorristas."],
          ["p", "Para el lector uruguayo: imaginate que Midinero se lleva puestos los ahorros de medio país y arrastra al presidente."],
          ["h", "¿Unimos los puntos o no?"],
          ["p", "Aviones y Microsoft: fallaron por lo mismo, y no es Rusia. Infraestructura vieja más una actualización que sale mal. El jueves se cae Outlook, el viernes se caen los aviones, y en los dos casos la causa suena a \"tocamos algo y se rompió\". No es un complot: es el mantenimiento de un mundo que corre sobre cables de hace treinta años."],
          ["p", "Heladeras y sangre: ahí sí hay alguien, y parece la misma mano. Pero no tiene nada que ver con la FAA ni con Microsoft. Es la factura por haber conectado a internet aparatos que nunca debieron estar conectados. Una heladera no debería aceptar la orden de calentarse a 50 grados, la mande quien la mande."],
          ["p", "Paraguay: ni hackers ni IA. Lo de siempre: el banco les presta a los amigos del dueño, el regulador viene del banco y el presidente fue socio. Esto lo inventaron los banqueros florentinos."],
          ["h", "El dibujo final"],
          ["p", "Los puntos están, pero forman tres dibujos distintos y ninguno es una conspiración global. Es peor: es desidia, vulnerabilidad e impunidad, y ninguna de las tres necesita coordinarse con las otras para funcionar."],
          ["h", "Crónica de los fines del mundo que no fueron"],
          ["p", "El mundo se viene terminando con puntualidad suiza. En el año 2000 se iban a caer los aviones y los cajeros por el Y2K, y no se cayó nada (o porque se exageró, o porque miles de programadores laburaron dos años para que no pasara; elegí tu versión). En 2012 se terminaba el calendario maya y lo único que se terminó fue el calendario. Tuvimos la gripe aviar, el acelerador de partículas que iba a abrir un agujero negro en Suiza y el apagón de CrowdStrike de 2024, que llenó de pantallas azules medio planeta. Y acá estamos, leyendo sobre el fin del mundo en un celular que funciona."],
          ["h", "¿Bombardeo o se vienen cositas?"],
          ["p", "Las dos cosas, y conviene no mezclarlas. Hace veinte años, una heladera hackeada en Suecia no llegaba a un celular en Montevideo; hoy llega en minutos, pegada a todo lo demás, y el algoritmo te la sirve en fila como si fuera una sola historia. Eso es el bombardeo."],
          ["p", "Pero los incidentes son reales y se apilan. Ninguno solo te mata, y juntos dejan una sensación muy concreta: el mundo funciona de casualidad, sostenido por un técnico de guardia en Francia y algún router viejo en un sótano."],
          ["h", "La pregunta de Brecht"],
          ["p", "Bertolt Brecht lo planteó en 1928, en La ópera de los tres centavos: ¿qué es robar un banco comparado con fundar uno? Paraguay acaba de actualizar la pregunta."],
          ["h", "Pasamontañas contra licencia bancaria"],
          ["p", "El ladrón de bancos clásico necesita pasamontañas, un auto en marcha y suerte, y se lleva lo que entra en un bolso. El que funda un banco necesita una licencia, buen marketing y amigos en el Banco Central, y se lleva los ahorros de casi tres millones de personas: los que no tenían cuenta en otro lado, los que abrieron la app porque era fácil. La plata de los pobres, como Midinero."],
          ["p", "¿Quién es más rico? El segundo, por lejos. ¿Quién va preso más seguido? El primero, por lejos. Que esta vez caigan dueños, regulador y presidente es noticia justamente porque es la excepción."],
          ["h", "La moraleja del Ojo Vago"],
          ["p", "Si llega el apocalipsis, va a ser por un router viejo, una heladera mal protegida o un banquero con amigos. No hace falta un villano con gato blanco: alcanza con que nadie haga el mantenimiento."],
          ["p", "Mientras tanto, el consejo de la casa: sacá la guita viva y guardala en un cofre fort. A prueba de hackers, de caídas de Outlook y de banqueros simpáticos. Eso sí, no lo conectes al wifi, que ya vimos lo que les pasó a las heladeras. (Y no, esto no es asesoramiento financiero: es El Ojo Vago.)"],
          ["fuentes", [["CNN — Ground stop de la FAA, cobertura en vivo", "https://www.cnn.com/2026/11/13/us/live-news/flights-ground-stop-faa"], ["PBS — La FAA deja en tierra todos los vuelos de EE.UU.", "https://www.pbs.org/newshour/nation/faa-grounds-all-flights-at-u-s-airports-due-to-air-traffic-control-communications-problems"], ["The Hill — Duffy y Mullin piden 50.000 millones", "https://thehill.com/policy/transportation/6220399-duffy-billions-air-traffic-ground-stop/"], ["AeroTime — De 30.100 a 50.000 millones en un día", "https://www.aerotime.aero/articles/duffy-congress-atc-funding-nationwide-outage"], ["AeroCorner — El corte de septiembre en Filadelfia", "https://aerocorner.com/news/philadelphia-tracon-outage-newark-ground-stop/"], ["IBTimes UK — Congeladores de supermercados a 50 °C en Europa", "https://www.ibtimes.co.uk/europe-supermarket-refrigeration-cyberattacks-food-waste-1829795"], ["ARY News — Ataques a heladeras y la advertencia de la ANSSI", "https://arynews.tv/cyberattacks-send-supermarket-fridge-temperatures-soaring-across-europe.amp"], ["IBTimes UK — Ataque a los bancos de sangre franceses", "https://www.ibtimes.co.uk/hackers-target-french-blood-storage-systems-reportedly-setting-temperatures-110c-1830218"], ["Cybernews — El técnico de guardia que frenó el ataque al EFS", "https://cybernews.com/security/frances-blood-storage-breach-temperatures-rise/"], ["ABC News — Microsoft pide disculpas y descarta un hackeo", "https://abcnews.com/US/outlook-down-microsoft-outage-reported-mail/story?id=138088203"], ["Al Jazeera — Caída de Microsoft en 74 países", "https://www.aljazeera.com/news/2026/11/13/microsoft-hit-by-global-outages-what-happened-and-why"], ["El Economista — El escándalo de Ueno Bank", "https://eleconomista.com.ar/internacional/escandalo-ueno-bank-drastica-decision-gobierno-paraguay-tras-colapso-bancario-n99459"], ["TechSpot — Préstamos a vinculados en Ueno", "https://www.techspot.com/news/114467-paraguay-president-steps-down-after-digital-bank-ueno.html"], ["BBC Mundo vía Teletica — Prisión preventiva para Santiago Peña", "https://www.teletica.com/bbc-news-mundo/juez-de-paraguay-ordena-prision-preventiva-para-expresidente-pena_420744"]]]
        ]
      },
      francia: {
        section: 'internacional',
        kicker: 'Más de 5.000 detenidos en una semana',
        lead: 'Las protestas en Francia, ¿son estudiantiles?',
        video: 'assets/francia-protestas.webp',
        imageAlt: 'Manifestantes encapuchados corren entre gases lacrimógenos en la Place de la Nation, París',
        dek: 'Más de mil liceos afectados y una acusación cruzada entre el gobierno y la izquierda radical. Un reclamo por falta de profesores terminó en una crisis política a seis meses de las elecciones presidenciales.',
        byline: 'Por Román · 9 de octubre de 2026 · ⏱ 5 min de lectura',
        body: [
          ['p', 'Francia atraviesa una ola de protestas en los liceos, el equivalente a nuestros liceos de secundaria. Desde que empezaron los bloqueos, las autoridades informaron más de 5.000 detenidos, y el 85% son menores de edad. Solo el viernes 2 de octubre hubo unas 1.700 detenciones.'],
          ['p', 'El jueves 1 de octubre, más de mil de los cerca de 3.700 liceos del país tuvieron algún tipo de protesta, y 222 quedaron bloqueados. Hubo 170 alumnos heridos, 78 trabajadores de la educación lesionados y más de 300 policías y gendarmes heridos. Según el ministro de Educación, Édouard Geffray, 24 liceos fueron incendiados o vandalizados, con daños estimados entre 20 y 30 millones de euros.'],
          ['p', 'Vale la pena entender cómo se llegó hasta acá, porque la historia empieza con un reclamo muy concreto.'],
          ['img', 'assets/ilustracion-liceo-frances.jpg', 'Ilustración: fachada de un liceo francés bloqueado con contenedores y un cartel que dice ¿Y los profes?', 'Ilustración: El Ojo Vago News'],
          ['h', 'Un reclamo real en Créteil'],
          ['p', 'Todo empezó a mediados de septiembre en el liceo Saint-Exupéry de Créteil, en las afueras de París. Los alumnos bloquearon la entrada porque, desde el inicio de clases, había cargos de profesores sin cubrir. También denunciaban falta de enfermeras, aulas superpobladas y edificios en mal estado.'],
          ['p', 'No es un caso aislado. Créteil es una de las zonas educativas donde más le cuesta al Estado francés conseguir docentes. El propio ministro de Educación reconoció que los reclamos eran legítimos.'],
          ['h', 'La política entra al liceo'],
          ['p', 'Desde los primeros días apareció en Créteil Louis Boyard, diputado de La Francia Insumisa (LFI). Es el principal partido de la izquierda radical francesa, fundado y liderado por Jean-Luc Mélenchon, y uno de los opositores más duros al presidente Emmanuel Macron. Boyard llamó a extender el movimiento a otros liceos.'],
          ['p', 'Después, la Unión Sindical Liceal, el principal gremio de estudiantes secundarios, convocó a un bloqueo nacional para el 29 de septiembre. Esa fecha coincidió con una gran huelga de empleados públicos.'],
          ['p', 'Mélenchon, que es abiertamente anti-Macron, acusó al primer ministro Sébastien Lecornu, nombrado por Macron, de ordenar una represión con tinte racista. También llamó a sus militantes a "interponerse" para proteger a los estudiantes.'],
          ['p', 'El gobierno, por su parte, denunció la presencia de personas encapuchadas que no son estudiantes. El ministro de Educación afirmó que el movimiento fue tomado por grupos ultraviolentos.'],
          ['h', 'Dos versiones enfrentadas'],
          ['p', 'Tras una reunión de crisis, la oficina del primer ministro atribuyó el movimiento a LFI y a grupos de ultraizquierda, basándose en informes de inteligencia. LFI rechazó la acusación: su coordinador, Manuel Bompard, acusó al gobierno de caer en el complotismo.'],
          ['p', 'La presidenta de la región de París, Valérie Pécresse, también acusó a LFI de usar a los liceales con fines electorales, y el cruce con Boyard terminó en la justicia. Pécresse es de Los Republicanos, la derecha tradicional francesa. No pertenece al partido de Macron: fue su rival en la elección de 2022, aunque su partido colaboró con gobiernos del período macronista en distintos momentos.'],
          ['h', 'Cómo vienen las encuestas'],
          ['p', 'La primera vuelta de la elección presidencial será el 18 de abril de 2027, dentro de algo más de seis meses, y la segunda el 2 de mayo. Macron no puede presentarse, porque ya cumplió dos mandatos.'],
          ['p', 'Según una encuesta de Cluster17 para Politico, realizada a mediados de septiembre, Marine Le Pen, de la derecha nacionalista, encabeza con un 30-31%. Detrás aparecen empatados, cerca del 19,5%, Mélenchon y el ex primer ministro de centroderecha Édouard Philippe. Más atrás vienen Gabriel Attal, del partido de Macron, con 13,5%, y el socialdemócrata Raphaël Glucksmann, con 12-14%.'],
          ['p', 'En ese contexto, el voto joven es clave para la izquierda radical, y por eso el gobierno sospecha que hay un cálculo electoral detrás de la movilización.'],
          ['h', 'La respuesta del gobierno'],
          ['p', 'El gobierno optó por la vía policial. Autorizó la intervención de las fuerzas del orden en los liceos bloqueados, y el ministro del Interior, Laurent Nuñez, rechazó que haya habido excesos. Al mismo tiempo, el ministro de Educación admitió que el movimiento no tiene un reclamo nacional unificado: nació de demandas locales.'],
          ['p', 'El margen para negociar con dinero es chico. La deuda pública francesa llegó a unos 3,6 billones de euros, el 119% del PIB, un récord según el INSEE, el instituto oficial de estadística.'],
          ['h', '¿Por qué faltan profesores?'],
          ['p', 'En Francia la educación pública es gratuita, y aun así el Estado no logra cubrir todos los cargos. En los concursos de ingreso de 2025 quedaron unos 2.600 puestos vacantes, sobre todo en matemáticas y en zonas como Créteil y Versalles. Según la OCDE, un profesor de secundaria con 15 años de antigüedad gana alrededor de un 15% menos que el promedio de los países de la organización. Hay pocos candidatos y la carrera no resulta atractiva.'],
          ['h', 'Mi mirada'],
          ['p', 'La vida del estudiante siempre fue sacrificada. Yo estudié en la educación pública y me tocó sentarme en el piso frío. Los primeros años son un filtro, y no todo puede ser cómodo. Por eso me pregunto hasta dónde tener calefacción o aire acondicionado es una necesidad o un reclamo de una generación más exigente.'],
          ['p', 'Pero hay algo que no admite discusión: que falten profesores no es una cuestión de comodidad. Es lo mínimo que tiene que garantizar un sistema educativo. Y ese reclamo, que era justo, hoy quedó tapado por los incendios, los heridos y la pelea política.'],
          ['h', 'Entonces, ¿son estudiantiles?'],
          ['p', 'En su origen, sí. Las protestas nacieron de un reclamo concreto que el propio gobierno reconoció. Pero la participación de dirigentes políticos, la coincidencia con huelgas sindicales y la presencia de personas ajenas a los liceos convirtieron el movimiento en algo más amplio. A seis meses de una elección muy polarizada, la falta de profesores ya no es lo único que está en juego.']
        ]
      },
      musica: {
        kicker: 'Adam Duritz, un rastafari que le sacó punta',
        lead: 'Counting Crows: mucho más que Mr. Jones',
        video: 'assets/counting-crows-portada.webp',
        imageAlt: 'Collage animado: Adam Duritz en el centro, cantando en un escenario, y a sus costados aparecen las fotos de Jennifer Aniston, Courteney Cox, Mary-Louise Parker, Emmy Rossum, Christina Applegate y Monica Potter',
        mediaCredit: 'Fotos vía Wikimedia Commons: Shannon McGee (CC BY-SA 2.0), Angela George (CC BY-SA 3.0), Albert Domasin (CC BY-SA 2.0), Rick Marshall (CC BY 2.0), S Pakhrin (CC BY 2.0), LG Electronics (CC BY 2.0) y Thomas Attila Lewis (CC BY 2.0). Collage: El Ojo Vago News, CC BY-SA.',
        dek: 'Uno de mis grupos contemporáneos en el debe: el carisma de un tipo común que estuvo con la mina que quiso, y cuyo hit más conocido se hizo realidad y terminó siendo su karma.',
        byline: 'Por Román · 9 de octubre de 2026 · ⏱ 6 min de lectura',
        body: [
          ['h', 'Mi opinión'],
          ['p', 'Elegí abrir la sección Música con una bandaza que me gustaría difundir: Counting Crows. Para muchos es "la de Mr. Jones" y nada más, pero detrás de ese tema hay mucho más.'],
          ['p', 'Para entender lo que fueron en su momento, hay un dato que lo resume: en 1993, August and Everything After fue el disco debut que más rápido se vendió en Estados Unidos desde Nevermind de Nirvana, que había salido dos años antes por el mismo sello. En apenas seis meses ya había vendido un millón de copias.'],
          ['p', 'Si tengo que recomendar por dónde empezar, voy con tres. August and Everything After (1993), el debut, que para mí no tiene un tema de relleno. Recovering the Satellites (1996), el segundo. Y Across a Wire: Live in New York City (1998), un disco doble en vivo donde hay una versión de Mr. Jones que no tiene nada que ver con la original, y me encanta.'],
          ['p', 'Y hablando de Duritz: el tipo tiene que tener un carisma de la puta madre, porque se ganó a las mejores minas de Hollywood, y fachero no es.'],
          ['p', 'Los invito a que la investiguen y le den una oportunidad más allá del hit. Es una banda que tengo en el debe: no quiero que se separen ni morirme antes de verlos en vivo.'],
          ['p', 'Y acá va la pregunta: ¿no vendrán nunca a Sudamérica? Hasta donde pude averiguar, nunca tocaron por acá. Sus giras pasan por Estados Unidos, Europa, Australia, Nueva Zelanda y hasta Sudáfrica, pero en 35 años de carrera nunca se les ocurrió venir.'],
          ['h', 'Historia'],
          ['p', 'Counting Crows nació en 1991 en la zona de la Bahía de San Francisco, alrededor del cantante y compositor Adam Duritz y el guitarrista David Bryson. Fue el mismo año en que Nirvana sacó Nevermind y el rock alternativo se apoderó de las radios.'],
          ['p', '¿Y por qué Counting Crows, "contando cuervos"? El nombre sale de una vieja rima popular inglesa, One for Sorrow, que se usaba para adivinar la suerte contando los pájaros que uno veía: uno es tristeza, dos es alegría, y la cuenta sigue con bodas, nacimientos, plata y secretos. Duritz la escuchó en la película Signs of Life (1989) y de ahí tomó el nombre. La rima vuelve a aparecer en A Murder of One, el tema que cierra su disco debut.'],
          ['p', 'En setiembre de 1993 publicaron August and Everything After, producido por T Bone Burnett. El disco llegó al cuarto puesto en Estados Unidos, fue certificado siete veces platino en ese país y vendió alrededor de 10 millones de copias en el mundo. Al año siguiente fueron nominados al Grammy como Mejor Artista Nuevo.'],
          ['card', 'August and Everything After vs. Nevermind', 'Ventas comparadas', 'Nevermind tiene 13 discos de platino en Estados Unidos y más de 30 millones de copias vendidas en el mundo: unas tres veces más que el debut de Counting Crows. Pero en Estados Unidos, August and Everything After superó la mitad de esas ventas, con 7 millones. Para un disco de baladas en plena era grunge, es una cifra enorme.'],
          ['p', 'Hoy siguen activos. En 2025 sacaron disco nuevo, en diciembre se estrenó en HBO Max el documental Counting Crows: Have You Seen Me Lately?, sobre su salto a la fama, y en 2026 salieron de gira por Australia y Nueva Zelanda.'],
          ['card', 'Adam Duritz', 'El líder', 'Nació en 1964 y tiene 62 años. Es la voz, el compositor principal y la cara del grupo, reconocible por sus rastas y una forma de cantar muy emotiva. Ha hablado abiertamente de sus problemas de salud mental y de lo difícil que le resultó la fama repentina.', 'assets/adam-duritz.jpg', 'Foto: Shannon McGee / CC BY-SA 2.0, vía Wikimedia Commons'],
          ['h', 'Las ex del Adam: un tipo que comió caviar toda su vida pero se dio cuenta de que el asado es más rico'],
          ['p', 'El Adam nunca fue un loco fachero, pero supo ganarse a algunas de las minas más lindas de Hollywood. La historia la comparo con el tema de Ricky Maravilla, "Qué tendrá el petiso", pero en versión gringa. Debe tener terrible labia...'],
          ['card', 'Jennifer Aniston', 'Actriz · 1995', 'En ese momento ya era Rachel en Friends (1994–2004), el papel que la convirtió en una de las actrices más famosas del mundo. Más tarde se casó con Brad Pitt. Duritz contó que los presentaron amigos en común, que la relación fue breve y que ella fue a verlo tocar al Viper Room.', 'assets/jennifer-aniston.jpg', 'Foto: Angela George / CC BY-SA 3.0, vía Wikimedia Commons'],
          ['card', 'Courteney Cox', 'Actriz · desde 1996', 'La Monica de Friends y protagonista de la saga Scream. Se conocieron cuando ella apareció en el video de A Long December. Duritz la describe como su relación más larga, aunque estuvieron separados buena parte del tiempo porque, según él, no estaban en la misma sintonía.', 'assets/courteney-cox.jpg', 'Foto: Albert Domasin / CC BY-SA 2.0, vía Wikimedia Commons'],
          ['card', 'Mary-Louise Parker', 'Actriz · años noventa', 'Actriz de cine, teatro y televisión. Se hizo conocida con Tomates verdes fritos (1991), ganó un Tony por la obra Proof y después un Globo de Oro por la serie Weeds.', 'assets/mary-louise-parker.jpg', 'Foto: Rick Marshall / CC BY 2.0, vía Wikimedia Commons'],
          ['card', 'Emmy Rossum', 'Actriz y cantante · 2009–2010', 'Protagonizó la película El fantasma de la ópera (2004) y fue Fiona en la serie Shameless. Según la prensa, salieron brevemente entre 2009 y 2010.', 'assets/emmy-rossum.jpg', 'Foto: S Pakhrin / CC BY 2.0, vía Wikimedia Commons'],
          ['card', 'Christina Applegate', 'Actriz · fines de los noventa', 'Fue Kelly Bundy en la serie Casados con hijos y años después protagonizó Dead to Me. Algunas listas de internet la cuentan entre las novias de Duritz, pero lo único confirmado es que él le alquiló la casa a fines de los noventa.', 'assets/christina-applegate.jpg', 'Foto: LG Electronics / CC BY 2.0, vía Wikimedia Commons'],
          ['card', 'Monica Potter', 'Actriz', 'Actriz estadounidense que se hizo conocida a fines de los noventa con películas como Con Air (1997), junto a Nicolas Cage, y Patch Adams (1998), con Robin Williams. Años después fue Kristina Braverman en la serie Parenthood. Su nombre aparece en varias listas de romances de Duritz, aunque ninguno de los dos lo confirmó públicamente.', 'assets/monica-potter.jpg', 'Foto: Thomas Attila Lewis / CC BY 2.0, vía Wikimedia Commons'],
          ['p', 'Después de tanto caviar, el Adam bajó a tierra: en 2014 dicen los paparazzi que encontró a su actual novia en Tinder. Un crack. No se mareó.'],
          ['h', 'La historia de Mr. Jones'],
          ['p', 'La canción nació alrededor de 1990, cuando Counting Crows ni siquiera existía como tal. Mr. Jones era Marty Jones, bajista de la banda anterior de Duritz y amigo de la infancia. El padre de Marty era un guitarrista de flamenco estadounidense que había hecho carrera en España.'],
          ['p', 'Una noche, después de ver tocar al padre en el barrio de la Misión, en San Francisco, terminaron en un bar. Ahí vieron al baterista de Chris Isaak sentado con tres mujeres, y Duritz y Marty sintieron que a ellos ni siquiera les daba para hablarles: necesitaban ser estrellas de rock. Duritz volvió a su casa esa misma noche y escribió la canción.'],
          ['p', 'La letra habla de ese sueño: imaginarse famoso, admirado, rodeado de gente. Pero el propio Duritz explica que el protagonista es un ingenuo, porque cree que la fama le va a curar la soledad.'],
          ['card', 'Mr. Jones', 'Diciembre de 1993', 'Fue el primer single del disco debut y su tema más exitoso: llegó al puesto 5 en las radios de Estados Unidos y convirtió a Counting Crows en uno de los grupos más escuchados de 1994.'],
          ['p', 'Lo irónico es que el sueño se cumplió al pie de la letra. A mediados de 1994, después de una gira por Europa, Duritz llegó a un festival en Nueva Orleans y se encontró con una multitud que lo perseguía. Siguieron los fanáticos en todos lados y la prensa sensacionalista metiéndose en su vida privada. Ese mismo año murió Kurt Cobain, y Duritz contó que eso lo asustó, porque le mostró lo que la fama podía hacerle a él también.'],
          ['p', 'Con los años descubrió que la fama no era lo que había imaginado aquella noche en el bar. Hoy casi no toca Mr. Jones en vivo. La canción que escribió soñando con ser famoso terminó siendo la que le enseñó el precio de serlo.'],
          ['p', 'Si llegaste hasta acá leyendo, dale una escuchada. Es un bandún para momentos de introspección o para estar con tu media naranja tomando un vinito.'],
          ['video', 'Mr. Jones', 'Video oficial · Counting Crows · 1993', 'https://www.youtube.com/watch?v=-oqAU5VxFWs']
        ]
      },
      deportes: {
        kicker: "Los tenemos de hijos (en la Bombonera)",
        lead: "Uruguay le dio la bienvenida a la era post-Messi",
        video: 'assets/uruguay-argentina-scaloni.webp',
        imageAlt: "Lionel Scaloni camina junto al banco de Argentina en la Bombonera",
        dek: "La Celeste le ganó 2 a 1 a Argentina en Buenos Aires, en el primer partido de la Albiceleste sin Messi. Segunda visita seguida a la casa de Boca, segunda victoria. Que alguien les avise que ahí ya no nos invitan.",
        byline: "Por Román · 14 de noviembre de 2026 · ⏱ 2 min de lectura",
        body: [
          ["h", "Lo que pasó"],
          ["p", "El viernes 13 de noviembre (sí, el mismo viernes 13 en que Estados Unidos se quedó sin aviones), Uruguay le ganó 2 a 1 a Argentina en la Bombonera, en un amistoso de fecha FIFA. El primer tiempo terminó 0 a 0 y todo se definió en un ratito del segundo."],
          ["p", "A los 48 minutos, una pelota rebotó en Leonardo Balerdi y terminó en su propio arco. Cinco minutos después, Maxi Araújo puso el 2 a 0. Argentina descontó a los 73 con Julián Álvarez, que no perdonó en su segunda chance, y no le dio para más."],
          ["h", "La era post-Messi arrancó como arrancó"],
          ["p", "Era el primer partido de Argentina después de la despedida de Lionel Messi de la selección. Y no fue el único que faltó: tampoco estuvieron Otamendi, Paredes, Lautaro Martínez ni De Paul. En el arco atajó Gerónimo Rulli, porque el Dibu Martínez se está recuperando de una fractura de mandíbula."],
          ["p", "Scaloni lo planteó como el comienzo de una etapa nueva. Uruguay se encargó de que el comienzo fuera con una derrota en casa. De nada, hermanos."],
          ["h", "La forlaneta suma"],
          ["p", "Del otro lado, Diego Forlán dirigió su cuarto partido como técnico interino desde la salida de Marcelo Bielsa, y volvió Federico Valverde después de perderse los amistosos anteriores por lesión. El que hace un mes le metía seis a India ahora se trae una victoria de la Bombonera. El hombre se elige las pintas y también los resultados."],
          ["h", "Los tenemos de hijos (con letra chica)"],
          ["p", "La última vez que Uruguay había pisado la Bombonera fue el 16 de noviembre de 2023, por Eliminatorias: 2 a 0 con goles de Ronald Araújo y Darwin Núñez, con Bielsa en el banco y Messi en la cancha. Fue la primera vez en la historia que la Celeste ganaba ahí. Ahora van dos de dos."],
          ["p", "Y si alguno se pone pesado, siempre está el archivo: la final del Mundial de 1930, en el Centenario, la ganamos 4 a 2. La de los Juegos Olímpicos de 1928, también."],
          ["card", "La letra chica", "Ojo con esto", "En el historial completo, mejor no mirar. Antes de este partido se habían enfrentado 214 veces, con 97 triunfos argentinos, 64 uruguayos y 53 empates. Pero acá no vinimos a hacer estadística: vinimos a disfrutar el viernes."],
          ["h", "Lo que viene"],
          ["p", "Argentina cierra la fecha FIFA contra Costa Rica. Uruguay busca rival para jugar de local, aunque el Centenario no va a estar disponible. Mientras tanto, la Bombonera ya se puede ir anotando como cancha amiga."],
          ["fuentes", [["beIN Sports — Todos los goles de Argentina vs. Uruguay", "https://www.beinsports.com/es-us/football/amistosos/articles/todos-los-goles-argentina-vs-uruguay-2026-11-13"], ["El Economista — Argentina vs. Uruguay, el primer partido sin Messi", "https://eleconomista.com.ar/deportes/argentina-vs-uruguay-amistoso-internacional-2026-n99652"], ["TUDN — El historial del clásico del Río de la Plata", "https://www.tudn.com/futbol/argentina-vs-uruguay-a-que-hora-y-donde-ver-el-partido-amistoso-de-fecha-fifa"], ["Montevideo Portal — Uruguay y Argentina confirman el amistoso", "https://www.montevideo.com.uy/Deportes/Uruguay-y-Argentina-confirmaron-amistoso-en-Buenos-Aires-por-la-fecha-FIFA-de-noviembre-uc978830"], ["ESPN — La primera victoria uruguaya en la Bombonera (2023)", "https://espndeportes.espn.com/futbol/mundial/nota/_/id/12879048/uruguay-vencio-argentina-clasico-la-bombonera-eliminatorias"]]]
        ]
      },
      politica: {
        "section": "politica",
        "kicker": "Descargo del editor",
        "lead": "Mi identidad Soberana es solo mía",
        "dek": "Descargo del editor. Sobre Gustavo Salle y mi primer intento en política.",
        "byline": "Por Fekes · 14 de noviembre de 2026 · ⏱ 14 min de lectura",
        "image": "assets/identidad-soberana.webp",
        "imageAlt": "Hombre de traje abraza el escudo de Identidad Soberana contra el pecho",
        "body": [
          [
            "p",
            "Esta nota es para mis amigos que me dijeron \"no comas con Salle\", para los que convencí de que votaran a Salle, para mis colegas ex del partido y para mi mamá. Quiero que entiendan que tengo una mala versión de Salle como persona, pero que estoy de acuerdo con que él (no su hija) ocupe una banca en Diputados, no me arrepiento de darle el voto, sí mi tiempo y mi confianza."
          ],
          [
            "p",
            "Fue la primera vez en mi vida que me tomé en serio la política, y esta me defraudó. Quiero poner la cara frente a mis 8 lectores. Es bravo asumir, da como vergüenza reconocer el \"y pensar que me habían dicho\"... \"tenías razón\" o \"perdón por hacerte votar a un papanatas\"."
          ],
          [
            "h",
            "Ahora son equipos de fútbol"
          ],
          [
            "p",
            "Bueno, voy a hablar un poco de mi experiencia con Salle. Me parecía un loco, un distinto, ¿viste? Me hablaba de cosas que la mayoría de los políticos no hablaba. Empezó a hablar en un programa y pidió en internet que tenía que llegar a las mil personas que firmen. Y la gente se copó. Hasta a mí, que nunca estuve en política ni nada, me pareció bueno que no sea de ningún partido."
          ],
          [
            "p",
            "Estoy en contra del sistema político partidario. Ahora son equipos de fútbol, la gente vota colores... Imaginate, vos votás a un candidato porque lo conocés, sale diputado y es tu diputado. Sabés que, por ejemplo, está a favor de la legalización de la marihuana, y vos también. Por eso lo votaste, porque piensa como vos. Sin embargo, el partido le dice que no levante la mano. Después, a la semana, te encontrás con tu diputado a quien votaste, y le decís: \"Che, ¿por qué votaste esto?\". Y te dice: \"Yo estaba a favor, pero tuve que votar en contra por política partidaria\". Escuchame... eso es lo más antidemocrático que hay."
          ],
          [
            "p",
            "En ese momento lo bancaba porque tuvo los huevos. Había tenido los huevos de soñarlo, hacerlo, y lo estaba haciendo."
          ],
          [
            "h",
            "Los jueves en Maldonado"
          ],
          [
            "p",
            "La primera vez que entré a un comité político en mis 44 años fue la trinchera de los \"valores\", y lo quería ayudar, porque el tipo me caía bien y otro poco para matar el ocio. Se juntaban creo que los jueves, fui un día y después seguí yendo. Ayudé en los últimos cuatro meses de la campaña, creo."
          ],
          [
            "p",
            "Me divertía ir porque todos intercambiábamos sobre cosas que podíamos hacer. Gente muy plural. Había muchos radicales antivacuna, que eso no era mi lucha; no tengo una opinión formada al respecto. Había bastante ecologista y estaba bueno ver una perspectiva que a veces uno se la pasa por alto. Y después había otros tipos desencantados de su anterior partido, y otros con experiencia en campañas políticas, del Frente Amplio sobre todo, o del PERI de Vega. Aprendí bastantes términos técnicos sobre las elecciones."
          ],
          [
            "p",
            "Uno decía: bueno, mirá, si nos va bien tenemos un diputado, por lo menos podemos hacer cambiar boludeces. Ponerle nombre a una calle. Teníamos ideas tipo poner carteles en las paradas de ómnibus para que la gente efectivamente sepa a qué hora pasa. Taradeces, cosas que mejorarían la calidad de vida en boludeces chiquitas, metas alcanzables, qué sé yo."
          ],
          [
            "p",
            "Pidió gente para figurar en las listas y yo no aparecí, por suerte, porque hoy estaría bastante más avergonzado. Por suerte no quedé escrito en ningún papel. Tampoco es que milité mucho; nunca fui a repartir volantes. Hay gente que metía en serio: gente que se levantaba a las 7 de la mañana a repartir listas, ponía la cara, daba notas en TV, llamaba gente para convencerla y la convencía."
          ],
          [
            "p",
            "La campaña política de Identidad Soberana fue gratis. Hasta el jingle era con inteligencia artificial. Había mucha gente que había puesto guita para ayudar al Salle. Gente que alquiló el local y lo pagaba de su bolsillo, o ponía materia prima y su oficio para hacer una rifa, verdaderos apasionados de la política sin fines de lucro."
          ],
          [
            "p",
            "El segundo jueves que fui al comité ese creo que estaba la hija de Salle; era la primera vez que iba, recién la habían puesto en la lista. Algunos ya veían esa jugada de poner a su hija medio rara ya... Ese día, en esa reunión, me llevé unos cartelitos de 30 cm por 30 que alguien había mandado a imprimir con aportes de los propios convencionales. Me llevé tipo 40, me fui en bicicleta, como un paseo, y los puse en toda la principal, parando cuadra por cuadra para matar el ocio. A la postre, obviamente fue casualidad, no estoy diciendo que yo haya hecho nada, pero I.S. sacó 2,69% en Uruguay, 3,58% en Maldonado, y en Balneario Buenos Aires sacó 6,10%. Récord absoluto."
          ],
          [
            "p",
            "Ganó en octubre. Impresionante: festejo, todo color de rosas. Fue un éxito: 2,69% a nivel nacional. Casi llega a senador. El partido casi triplica su expectativa, su meta."
          ],
          [
            "h",
            "El partido era de él"
          ],
          [
            "p",
            "Cuando puso a la hija, la gente se quemó. Fue como medio una movida política, pero ninguno se animaba a decirle \"bo, loco, pará\". Obviamente nadie tenía la fuerza. El partido era de él, básicamente. ¿Por qué puso a la hija? Bueno, obviamente hay que rodearse de las personas que más confías. Pero no era que la hija estaba metida en eso. Era una mina que se había alejado de la sociedad y la bajó de la tabla de surf para meterla de candidata número 1 por Montevideo. Mi teoría es que la puso por tema de desconfianza y paranoia un poco, y todo el resto por la plata. Nadie se paró de manos porque en realidad estaban en plena campaña; no daba para desunir y perder la oportunidad de tener un diputado al menos."
          ],
          [
            "p",
            "Yo creo que Salle mismo la vio venir. Dijo: si ganamos un diputado, lo vamos a ganar en Montevideo, y si ganamos otro, lo vamos a ganar en Canelones. El loco es un estratega, básicamente. Con el diario del lunes, la hizo bien. Y por partida doble, porque son dos diputados. Es una locura."
          ],
          [
            "h",
            "El edil y el espía del MPP"
          ],
          [
            "p",
            "Salle, para empezar, no es un buen negociador, porque no transa. Aparecía algún loco con una buena idea, o alguno refutándole alguna, siempre con altura, tratando de falsear la teoría, como decía Karl Popper, para hacerla más verídica. Y el líder se paraba de manos. Tal cual lo ves en la televisión: si lo apuran un poco, empieza a gritar y a acusar, a hacerse la víctima, a confrontar en una mala al que le plantea la duda."
          ],
          [
            "p",
            "Si bien obviamente él es gran parte, no te podés considerar el 100% de tu partido bajo ningún concepto. Como decía Artigas, \"mi autoridad emana de vosotros\". Esto es todo lo contrario. Emana de él mismo."
          ],
          [
            "p",
            "Había un tipo en Maldonado que era el que más metía, era como el referente. Con lo de la hija ya estaba medio quemado, pero estaba. IS venía con una fuerza bárbara en Maldonado, era el departamento insignia en share de votos... Y hablando de esto que querían sus militantes, cosas reales, desde cambiar una parada de un bondi o pintar una plaza, luego de ver que Maldonado tenía un 3,5% quisieron participar en las departamentales para tal vez sacar un edil, y decidieron, levantando la mano, que se tire esta persona para edil."
          ],
          [
            "p",
            "De la plata de los votos, unos 60.000 dólares corresponden a los votos de Maldonado. Le pidieron 20 lucas para gastar en una campaña para edil, imprimir cosas, pasar algún aviso en la radio. Le pidieron que del casi un millón de dólares que había ganado el partido reinvierta un 2% en las elecciones de mayo. En el acto el dictador le cortó las gambas. Decía que no había gente formada, o algo así. Este loco se calentó bastante y renunció al partido porque Salle le había prometido otra cosa."
          ],
          [
            "p",
            "Yo me lo explico fácil: megalomanía. No quería otra cara en el partido. Es algo que no permite que piense distinto. Se lo tomó en serio: la identidad soberana es solo de él, no es del partido, es su identidad soberana. Él es el soberano y el resto acatan. Podríamos haber sacado un edil. Yo estaría súper contento de que ese man hubiese llegado a edil."
          ],
          [
            "p",
            "Ahí ya se empezó a hundir la cosa. A los 3 meses. Un par ya se fueron, algunos más después. Luego designó unos representantes; nosotros éramos los representantes de Maldonado, creo que éramos 9. Al principio íbamos a las reuniones con 3 ideas cada uno y era constante la respuesta del diputado: \"No, hay que esperar\". Nos estaba matando la ansiedad, porque todos queríamos hacer cosas. Repito, boludeces. Queríamos decirle un montón de cosas, el loco venía y te cambiaba de tema, y nadie le decía nada."
          ],
          [
            "p",
            "Quedaba una que era casi un soldado de él, Natalia Pigurina, que era la 3 del partido, que también renunció al partido y presentó algunos descargos en algunos programas. Por lo menos contó toda la verdad; no se fue en silencio. Creo que Marita, la vice, tampoco está más."
          ],
          [
            "p",
            "Yo seguí ahí. Capaz que todavía pensaba que el loco tenía una estrategia, pero no para él, sino para hacer crecer el partido. Tenía la esperanza de que en algún momento, igual gratis, iba a estar ahí en los pasillos del Palacio Legislativo, aprendiendo, viendo la realidad en vivo y en directo. Me llama el 2 de Maldonado a ofrecerme eso y le agradecí por confiar; me dice que pagan poco, unos 20.000 pesos, y le dije: voy gratis. Estar ahí llevando carpetas y viendo todo era una experiencia hermosa. Al final todo quedó en la nada."
          ],
          [
            "p",
            "Empieza a designar representantes departamentales que no le discutían nada, básicamente. Había un montón de gente mucho más capaz que los que elegía: los tipos más sumisos y menos pensantes, fanatizados. Buscaba fanáticos: que el loco diga A y todo el mundo le aplauda. Un dictador, básicamente."
          ],
          [
            "h",
            "Mi último día en \"Isallidad Sallidana\""
          ],
          [
            "p",
            "Un día estábamos en un asado, ponele que tres meses después de haber sido electo. Viene Salle, a mostrar su camioneta nueva (para mí, comprada con la de los votos). Le preguntaban qué pasó con la Salleneta. Ya para ese entonces veía que el diputado estaba esquivo, no me daba mucha bola hacía meses. Había otro loco y un par más que me decían \"qué raro\", y le digo: yo lo voy a encarar. Me dice: \"No, pará, que yo le pregunto\". Estábamos comiendo en el parrillero y vuelve con cara medio larga. Según lo que me dijo, alguien le había dicho a Salle que yo era un espía del MPP. Esa persona, que además me conocía, me dijo que no podía creer lo que escuchó, y creo que ese día se alejó también. ¡Del MPP, nada más y nada menos! De dónde habrá sacado ese delirio."
          ],
          [
            "p",
            "Yo lo ayudé, pero no hice mucha cosa. Había problemas con los convencionales, había que votar no sé qué estatuto, y armé un par de videos con IA, no sé, le regalé un micrófono porque la calidad de los vivos era nefasta... tonterías. No entendí cómo me dice que soy un espía del MPP."
          ],
          [
            "p",
            "Imaginate el nivel de paranoia que maneja este loco."
          ],
          [
            "h",
            "Un negocio de 2 palos verdes"
          ],
          [
            "p",
            "Mucha gente, repito, lo ayudó. Y muchos, básicamente, estafados en su moral y otros en su bolsillo, tengo entendido, por lo que me contaron: que hubo gente que le prestó plata y nunca más les habló... Y estamos hablando de que para un loco USD 2.000 es plata. Por los votos, el partido cobró del Estado unos 860 mil dólares, y que yo sepa ni siquiera sacó un poco para tapar esas deudas, a modo de agradecimiento al menos. Para mí, un tipo con una relación enfermiza con el dinero."
          ],
          [
            "p",
            "Después, cobran sueldo él y la hija. Si sumás todos los sueldos de él y la hija en los cinco años, es más de un millón de dólares. Un negocio de 2 palos verdes hizo el tipo."
          ],
          [
            "p",
            "La campaña fue gratis, por eso digo que es la mayor movida política a nivel negocios. Le generó un lucro enorme, y fue toda una estrategia diseñada por él; no fue casualidad. Para mí es la mejor estrategia de la historia política del Uruguay a nivel de dinero. Es un tipo que engañó al sistema político uruguayo, básicamente. Y por partida doble. Triste."
          ],
          [
            "p",
            "Hete aquí los costos del Estado: un diputado le sale a Uruguay más de medio millón de dólares por quinquenio, solo en sueldos. Los 99 diputados, más de 55 millones de dólares. Somos 3 millones de personas, y encima los parlamentarios votan lo que les diga el partido, no tienen decisiones propias. En vez de 99 diputados, que sean 33, y ponemos 11 senadores. O bajar el sueldo a un tercio a cada uno, que ya está suficiente para vivir como un uruguayo, no tan de a pie pero un sueldo terrenal. Cualquiera de las dos reformas (bajar el sueldo o la cantidad a un tercio) te ahorra cerca de 50 millones de dólares cada cinco años."
          ],
          [
            "p",
            "Por eso es que la política es un negocio: hay mucha guita en juego, y la gente al final dice \"voy a entrar en política porque hay tanta plata\". Dale, entonces no seas político. El político tiene que ganar lo mismo que gana un ciudadano promedio. Y eso de que \"ay, tenés que pagarle bien a los políticos porque si no hacen jodas y roban\"... roban igual."
          ],
          [
            "p",
            "Un político tiene que vivir con la plata con la que viven sus votantes por mes, para vivir en carne propia los aumentos de sueldo, la inflación, etcétera."
          ],
          [
            "h",
            "¿Qué hizo \"Salle e Hijos S.A.\" en un año y medio?"
          ],
          [
            "p",
            "Cuando el tipo saca el 2,8% de los votos, dice que lo llama el candidato Álvaro Delgado para negociar. Ese 3% podía definir el balotaje. Eso me gustó en su momento, por un lado, que no se casó con nadie. Pero si realmente tu interés es lograr cambiar algo, nadie lo va a poder hacer solo. Él dice que son lo mismo el Frente que la Coalición, que son el PUNOM. Y bueno, si son lo mismo, negociá y, no sé... agarrá un ministerio. Para mí se apuró, y pensó solo en él. No pensó en las personas que lo rodearon durante 9 meses y que hicieron más campaña que él, ni en una estrategia política a largo plazo."
          ],
          [
            "p",
            "Hasta con Galeano, de Hacemos lo que Podemos, que es gran responsable de su éxito. El loco le promete que va a seguir en el programa el año que viene; después que gana, festejan, toman champán, se va de viaje, vuelve y le dice que no a Galeano, que va a hacer su propio programa. Ni siquiera es un tema de valores, ¿viste? Como agradecimiento al menos debió seguir un año con ese programa."
          ],
          [
            "p",
            "Su campaña, después de un año y medio: hay que buscar qué es lo que hizo, más allá del show, qué hizo para ayudar a la gente o para cambiar algo tangible. Sí, está bien: que ataques de falsa bandera, que el Banco Mundial, que la diosa del mercado. Es verdad que Uruguay vive un endeudamiento perpetuo. Pero no propone, critica; si le preguntás la solución, dice que no hay. Entonces habla de Jeffrey Epstein; está bien, podés hablar en un programa de televisión, pero son cosas que no tienen nada que ver con la Cámara de Diputados. Lo de la vacuna, ya está: por más que hagas, pediste informes y no te dieron ni pelota. No inauguró una escuela. No ayudó a nadie, básicamente. A él y a su famiglia solamente."
          ],
          [
            "p",
            "Y siempre la paranoia a la orden del día: que lo quieren bajar del Parlamento, que el sionismo, que le van a aplicar el artículo no me acuerdo cuál, que lo están escuchando. Propuso que si todos los diputados se bajaban el sueldo, él se lo bajaba también. Eso sí, lo cobró. Podía haber hecho una donación dando un ejemplo histórico, pero él no quería eso, quería salir en TV."
          ],
          [
            "p",
            "En definitiva, no quiere cambiar nada... quiere salir en la tele."
          ],
          [
            "h",
            "Me comí la pastilla"
          ],
          [
            "p",
            "A mí me hablaban del loco tras bambalinas: \"Mirá que es un ave rapaz, no te comas la pastilla\". Y bueno, me comí la pastilla al haber confiado. Estoy muy arrepentido de haberlo apoyado, y arrepentido también de que en algún momento creí."
          ],
          [
            "p",
            "No estoy arrepentido de que haya ganado. Me parece que el diputado tiene que ser una cosa plural, y no lo que es ahora. Pero claro, el loco se quejaba del sistema y se lo morfó el sistema, como dicen. Y ahora está mirando el reloj, esperando que termine. Ya se aseguró los nietos, todo."
          ],
          [
            "p",
            "Es una pena, porque capaz que ese loco, bien rodeado, podía hacer que el partido, que en realidad no es de él sino de los que lo votaron, crezca. Hacer una buena gestión, lograr boludeces, ir despacito por las piedras, y llegar en las próximas elecciones a uno o dos senadores, cuatro o cinco diputados. Pero no tiene estructura. Por eso digo que es un cadáver político. Para mí quiere que estos 5 años pasen rápido, facturar y retirarse. Ya dice en entrevistas que la mujer quiere que renuncie a la política al final de este quinquenio... y claro, 2 palos verdes y a vivir como a él le gusta: como un burgués."
          ],
          [
            "p",
            "Ahora que está cada vez más solo, la estrategia es renovar el público, que no me gustaría que pase. Por eso, tal vez, hago estos descargos, para \"avivar giles\"."
          ],
          [
            "p",
            "Creo que más de la mitad de sus listas se fueron, o porque son excluidos, o a los que por h o por b Salle fue haciendo uno a uno que renuncien, con su estrategia, repito, histórica... Estos arrepentidos de Salle creo que se la hacen muy fácil. Deberían ir con un megáfono a donde vaya, contándole un poco la verdad a él mismo, un poco de su propia medicina. Que tome conocimiento público."
          ],
          [
            "p",
            "Un bajón. La verdad que es un bajón para toda la gente que pensó que podía llegar a cambiar algo, proponer, o ser parte de un partido. Varios de los defraudados de su lista me decían: \"No, yo no me meto nunca más en política, no quiero saber nada\". Mi mensaje a todos ellos es: no se equivoca el que no hace nada."
          ],
          [
            "p",
            "Fekes"
          ],
          [
            "fuentes",
            [
              [
                "Montevideo Portal — Las cifras que cada partido cobra del Estado por las elecciones",
                "https://www.montevideo.com.uy/Archivo/Uno-a-uno-las-cifras-millonarias-que-cada-partido-cobrara-del-Estado-por-las-elecciones-uc905523"
              ],
              [
                "Montevideo Portal — Salle mostró su recibo de sueldo",
                "https://www.montevideo.com.uy/Noticias/Salle-mostro-su-recibo-de-sueldo-cuanto-cobra-como-diputado-y-que-dinero-va-a-su-partido-uc922777"
              ],
              [
                "Cámara de Representantes — Sueldo de diputados, enero 2025",
                "http://www.diputados.gub.uy/wp-content/uploads/2025/03/SUELDO-Diputados-enero-2025.pdf"
              ],
              [
                "El Observador — Gustavo Salle por partida doble",
                "https://www.elobservador.com.uy/gustavo-salle-partida-doble-la-hija-sera-la-otra-diputada-identidad-soberana-n5967809"
              ]
            ]
          ]
        ]
      },
      'eek-a-mouse': {
        "section": "musica",
        "kicker": "Le puso el nombre de un caballo que siempre perdía",
        "lead": "Eek-A-Mouse, la leyenda viviente que todos usaron",
        "dek": "Inventó el singjay, alegró a Jamaica cuando murió Marley y lleva más de 40 años en los escenarios. En el camino, según cuenta él, lo estafaron managers, se peleó con los Marley y terminó expulsado de Estados Unidos.",
        "byline": "Por Román · 14 de noviembre de 2026 · ⏱ 10 min de lectura",
        "image": "assets/eek-a-mouse.svg",
        "imageAlt": "Ilustración con el nombre Eek-A-Mouse",
        "body": [
          [
            "p",
            "Hay artistas que inventan un estilo y hay artistas que lo pagan caro. Ripton Joseph Hylton, a quien el mundo conoce como Eek-A-Mouse, hizo las dos cosas. Creó una forma de cantar que todavía se copia, puso a bailar a un país que lloraba a Bob Marley y llenó escenarios durante cuatro décadas. A la vez, según cuenta él mismo, lo estafó un manager, le cobraron regalías a sus espaldas, se peleó con los Marley y terminó preso y expulsado de Estados Unidos. A los 68 años sigue arriba del escenario. Esta es su historia."
          ],
          [
            "h",
            "Un caballo que siempre perdía"
          ],
          [
            "p",
            "Nació el 19 de noviembre de 1957 en Kingston, en el ghetto de Trench Town, el mismo barrio que crió a Marley. Empezó a cantar de chico y, cuando estudiaba, grabó dos singles de roots reggae con su nombre real, producidos por su profesor de matemáticas, un tal Mr. Dehaney."
          ],
          [
            "p",
            "El nombre artístico es una joya. Eek-A-Mouse era un caballo de carreras al que Ripton le apostaba siempre, y siempre perdía. Cuenta la leyenda que el único día que no le jugó, el caballo ganó. Sus amigos empezaron a llamarlo así y en 1979 lo adoptó para siempre. Ese mismo año pegó sus primeros hits, \"Once a Virgin\" y \"Wa-Do-Dem\", que estuvo varias semanas arriba en los rankings jamaiquinos."
          ],
          [
            "h",
            "El que alegró el velorio"
          ],
          [
            "p",
            "En 1981, Jamaica todavía estaba de luto por la muerte de Bob Marley. En el festival Reggae Sunsplash de ese año, la figura fue un flaco altísimo que cantaba con trajes estrafalarios y una voz que no se parecía a nada. Esa noche Eek-A-Mouse levantó a un público que no tenía muchas ganas de festejar, y se volvió un fijo del festival."
          ],
          [
            "p",
            "Él dice que Bob Marley le decía \"Eek-A-Lion\". Puede ser cierto o puede ser parte del personaje, pero la anécdota pinta bien quién es: un tipo que se siente parte de la realeza del reggae."
          ],
          [
            "h",
            "El inventor del singjay"
          ],
          [
            "p",
            "Su gran aporte fue un estilo. En los 80, los DJs jamaiquinos hacían \"toasting\": hablar rítmico arriba de la base, la semilla del rap. Eek-A-Mouse empezó a cantar y a hablar al mismo tiempo, con melodías raras y frases sin sentido del tipo \"bidi bidi bong bong\" metidas en el medio. A eso se le llamó singjay, y él es de los primeros a los que se les puso esa etiqueta."
          ],
          [
            "p",
            "De la mano del productor Henry \"Junjo\" Lawes encadenó hits: \"Virgin Girl\", \"Wild Like a Tiger\", \"For Hire and Removal\" y \"Ganja Smuggling\". El disco Wa-Do-Dem, de 1981, es un clásico absoluto del dancehall temprano. Para él, el show era tan importante como la canción. En 1985 lo dijo clarito: entretener no es solo cantar, la gente quiere verte disfrazado y bailando."
          ],
          [
            "p",
            "En los 90 hasta llegó a Hollywood: en 1991 hizo de Fat Smitty, un rastafari narcotraficante, en New Jack City, y ese mismo año apareció como chofer de un proxeneta en Out for Justice, con Steven Seagal. Firmó con Island Records, el sello de Marley, y grabó una versión reggae de \"D'yer Mak'er\" de Led Zeppelin."
          ],
          ["p", "Su influencia se escucha en cualquier dancehall de los últimos 40 años: mezclar canto y rap, meter sonidos inventados como si fueran palabras y convertir cada tema en un personaje. Él mismo lo dijo en una entrevista de los 80: otros cantantes rellenan con \"la la\" o \"yeah yeah\", él no; eso es su estilo, y muchos DJs lo siguieron. También grabó con gente que nada tiene que ver con el reggae, como la banda de nu metal P.O.D. o el pianista de jazz Roger Kellaway."],
          [
            "h",
            "Los Marley: un traje caqui que salió caro"
          ],
          [
            "p",
            "En 2005, Damian Marley sacó Welcome to Jamrock, uno de los discos de reggae más exitosos del siglo, ganador de un Grammy. Ahí está \"Khaki Suit\", con Bounty Killer y con Eek-A-Mouse en los coros. Hasta acá, una linda historia de generaciones."
          ],
          [
            "p",
            "La versión de Eek es otra. Según contó en entrevistas, por esa grabación le dieron 4.000 dólares como \"plata de bolsillo\" y le prometieron cifras de seis dígitos si el tema pegaba. El tema pegó y él dice que nunca vio esa plata. Va más lejos: asegura que, estando en Brasil, Ziggy Marley les dijo a los promotores locales que no trabajaran con él, que estaba \"prohibido en el reggae\". Son acusaciones suyas; la familia Marley no las respondió públicamente, que yo sepa. Pero explican por qué Eek habla de los Marley con una bronca que no se le pasa."
          ],
          [
            "h",
            "El manager, el fondo fiduciario y el IRS"
          ],
          [
            "p",
            "La historia de la plata es la más triste. En una carta abierta a sus fans y en varias entrevistas, Eek-A-Mouse acusó a su exmanager, Robert Fitzpatrick, de haberse quedado con lo que ganaba en las giras. La versión de Eek es así: el manager le dijo que iba a poner su dinero en un \"fondo fiduciario del artista\", y cuando terminaron los cuatro años de contrato, se fue con la plata. Al poco tiempo, cuenta, le llegó una carta del fisco estadounidense diciendo que debía 60.000 dólares."
          ],
          [
            "p",
            "En la misma carta denunció que otros miembros de su entorno se quedaban con la recaudación de los shows, y que una vez lo abandonaron con la banda en Florida, sin plata y sin la camioneta. En 2021 le contó a The Gleaner otra parte: al principio de su carrera se anotó en la sociedad de autores británica, pero después tuvo \"problemas de gestión\" y se dio cuenta de que otros estaban cobrando sus regalías, con la excusa de que él era un gastador. Él mismo admite que le encanta comprar ropa cara."
          ],
          [
            "p",
            "Lo irónico es que en esa misma entrevista dijo que nunca tuvo problemas con regalías, porque nunca firmó con gente que no supiera leer y escribir. Pero la realidad de muchos artistas jamaiquinos de su época es la de firmar y marchar: contratos que cedían los derechos, editoriales que manejaban todo y artistas que veían pasar los millones de largo. Eek lo resumió así en otra entrevista: el reggae es un negocio multimillonario y ellos no ven la plata."
          ],
          [
            "p",
            "Un ejemplo reciente: en 2022, Shaggy sacó \"Mi Nuh Know\", que usa partes de \"Wa-Do-Dem\". Eek salió a decir que Shaggy nunca le pidió permiso. El equipo de Shaggy respondió que el tema se había autorizado por la editorial que maneja las canciones de Eek. O sea, a la canción la autorizaron otros, sin consultarlo a él. Al final quedó acreditado como autor y dijo que estaba conforme con un 25% de las regalías, pero con un reproche: lo mínimo era llamarlo primero."
          ],
          [
            "p",
            "Y un dato que lo pinta de cuerpo entero: según él, Warner Bros le ofreció un contrato de seis cifras para quedarse con el nombre Eek-A-Mouse. Dijo que no y se fue de la reunión."
          ],
          [
            "h",
            "El problema en Estados Unidos"
          ],
          [
            "p",
            "La parte más oscura es de 2008. El 16 de agosto de ese año lo detuvieron en Carolina del Norte, después de un show, acusado de violación y de posesión de drogas. Se fue del país, no se presentó a la primera audiencia y la Justicia fijó una fianza de un millón de dólares. En 2010 apareció en Holanda, y en noviembre de 2012 lo encontraron en Paraguay sin la visa en regla, de donde lo extraditaron a Estados Unidos."
          ],
          [
            "p",
            "En julio de 2013 llegó a un acuerdo: los cargos graves se cayeron y se declaró \"sin oposición\" a dos delitos menores. El tiempo que ya había pasado preso cubrió la condena y lo deportaron a Jamaica. Él siempre sostuvo que fue una trampa por ser quien es, y lo llamó racismo institucional. Le quedó una prohibición de cinco años para entrar a Estados Unidos, de 2013 a 2018."
          ],
          [
            "p",
            "En 2023 anunció su regreso con una gira por la costa oeste. Inmigración le aprobó el permiso de trabajo, pero la visa se trabó en el consulado y la gira se postergó. Desde 2017 vive en Suecia con su pareja."
          ],
          [
            "h",
            "Tres canciones para entenderlo"
          ],
          [
            "p",
            "Las letras de Eek-A-Mouse son su mejor carta de presentación. Van tres, una de cada palo."
          ],
          [
            "p",
            "La divertida: \"Anarexol\". Un hombre se va un tiempo y cuando vuelve encuentra a su mujer completamente cambiada. A partir de ahí la canción se vuelve una comedia de barrio sobre los celos, los chismes y la vergüenza pública, con todo el mundo opinando de un asunto privado. Arriba de un ritmo liviano y saltarín, la historia nunca se pone amarga: es para reírse del absurdo."
          ],
          [
            "p",
            "La seria: \"Operation Eradication\". Es del disco Wa-Do-Dem y está inspirada en el asesinato de un amigo suyo, el DJ Errol Shorter, a manos de un grupo de justicieros. Acá no hay disfraces: es el Eek que vio de cerca la violencia de Kingston. En el mismo disco, \"Ganja Smuggling\" parece una canción de contrabando de marihuana, pero cuando avanza aparece lo que hay atrás: la infancia pobre, la familia durmiendo en el piso, la casa rota por las tormentas. Divertida de escuchar y pesada de entender."
          ],
          [
            "p",
            "La de la reina: \"Queen Elizabeth\". Salió en 1984 en el disco Mouseketeer y cuenta un hecho real. El 9 de julio de 1982, un desocupado llamado Michael Fagan trepó las rejas del Palacio de Buckingham, llegó hasta el dormitorio de la reina Isabel II y se sentó a hablar con ella antes de que apareciera la seguridad. Eek lo narra como un noticiero de barrio: lo que dice el reportero, lo que dicen los diarios y los rumores que corren (que no se llevó nada, que salió sudando, que lo agarraron con una red). El estribillo es el grito de la casa real echando al intruso del patio. Es periodismo en clave de dancehall, con humor y con una pregunta de fondo: si un tipo cualquiera puede llegar hasta la cama de la reina, ¿qué tan segura está la realeza?"
          ],
          [
            "h",
            "Una leyenda viviente"
          ],
          [
            "p",
            "Eek-A-Mouse pasó por todo: la gloria del Sunsplash, Hollywood, Island Records, managers que se esfumaron con la plata, peleas con la familia más famosa del reggae, una cárcel en Estados Unidos y el exilio en Suecia. Y sigue. En 2022 sacó Put Food On The Ghetto Youth Table y en 2025 siguió grabando versiones a su manera, de \"Israelites\" a \"Sweet Child O' Mine\"."
          ],
          [
            "p",
            "Es un tipo difícil, desbordado, a veces contradictorio y siempre fiel a su personaje. Pero es de los últimos que quedan de la generación que inventó el dancehall. Si alguna vez pasa cerca, vale la pena verlo: flaco, larguísimo, con un traje imposible y su \"bidi bidi bong bong\" sigue siendo uno de los espectáculos más raros y únicos del reggae."
          ],
          ["h", "Mi primera vez"],
          ["p", "Y acá va la parte personal. Hace años que lo escucho y nunca lo vi en vivo. Ahora tengo la chance: el próximo 12 de diciembre toca en Río de Janeiro, y la idea es ir a verlo por primera vez."],
          ["p", "Ir a ver a una leyenda viviente tiene algo de urgente. Eek-A-Mouse tiene 68 años y una vida que daría para tres películas. No sé qué Eek me voy a encontrar: el del traje imposible, el que se pelea con medio mundo o el que levantó a Jamaica en el Sunsplash del 81. Probablemente los tres. Lo que sí sé es que cuando arranque con su \"bidi bidi bong bong\", voy a estar ahí."],
          ["p", "A la vuelta les cuento."],
          [
            "fuentes",
            [
              [
                "Wikipedia — Eek-A-Mouse",
                "https://en.wikipedia.org/wiki/Eek-A-Mouse"
              ],
              [
                "The Gleaner — Five Questions With Eek-A-Mouse (2021)",
                "https://past.jamaica-gleaner.com/article/entertainment/20210618/five-questions-eek-mouse"
              ],
              [
                "Entrevista con Big Stone — Eek-A-Mouse sobre su manager",
                "https://dia-inc.com/Eek-A-Mouse-BigStone.html"
              ],
              [
                "Steemit — Eek-A-Mouse vs. la familia Marley",
                "https://steemit.com/hive-181925/@justinparke/eek-a-mouse-vs-the-marley-family"
              ],
              [
                "DancehallMag — Shaggy no pidió permiso, dice Eek-A-Mouse (2022)",
                "https://dancehallmag.com/?p=53062"
              ],
              [
                "DancehallMag — Eek-A-Mouse conforme con el 25% de Mi Nuh Know",
                "https://dancehallmag.com/?p=53473"
              ],
              [
                "Reggaeville — Gira por la costa oeste postergada (2023)",
                "https://reggaeville.com/artist-details/eek-a-mouse/news/view/eek-a-mouse-usa-west-coast-tour-may-2023"
              ],
              [
                "Apple Music — Wa-Do-Dem",
                "https://music.apple.com/gb/album/383364321"
              ]
            ]
          ]
        ]
      },
      'uruguay-india': {
        section: 'deportes',
        kicker: 'La forlaneta se elige las pintas',
        lead: 'Uruguay ganó 6 a 1 contra la "poderosa" selección de India',
        dek: 'En Calcuta, la Celeste cerró su gira de amistosos con goleada. Darwin Núñez hizo dos y también marcaron Maxi Araújo, Rodrigo Zalazar, Juan Martín Sanabria y Rodrigo Aguirre. El partido estuvo detenido unos minutos por una tormenta eléctrica.',
        source: 'Subrayado',
        sourceUrl: 'https://www.subrayado.com.uy/uruguay-goleo-6-1-india-darwin-nunez-dos-maxi-araujo-zalazar-sanabria-y-rodrigo-aguirre-n1019981',
        date: '6 de octubre de 2026',
        video: 'assets/uruguay-india.webp',
        imageAlt: 'Jugadores de Uruguay en el partido ante India'
      }
    };
