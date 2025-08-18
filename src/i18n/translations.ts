export type Locale = 'fr' | 'en';

type WhatsItem = {
    id: string;
    category: string;
    title: string;
    venue: string;
    dateLine: string;
    summary: string;
    image: string;
    alt: string;
};

type Dict = {
    nav: {
        menu: string;
        items: {
            exhibitions: string; program: string; pavilion: string; voices: string; about: string; partners: string;
        };
        langShort: { fr: 'FR'; en: 'EN' };
    };
    hero: { title: string; subtitle: string; register: string; explore: string };
    about: { lede: string; supporting: string; cta: string };
    program: { kicker: string; title: string; desc: string; explore: string; cta: string };
    curated: { kicker: string; title: string; desc: string; cta: string };
    featured: { kicker: string; ambience: string; slowCuts: string };
    whenwhere: {
        kicker: string;
        title: string;
        desc: string;
        datesCardTitle: string;
        datesCardDesc: string;
        venueTitle: string;
        venueDesc: string;
        directions: string;
        planTravel: string;
        travelNotes: string;
        transport: { dss: string; ter: string; shuttle: string; parking: string };
        accessibilityTitle: string;
        badges: {
            stepfree: string;
            hearing: string;
            quiet: string;
            water: string;
            wifi: string;
            medical: string;
        };
        notes: { fly: string; languages: string; info: string; rides: string };
    };
    whats: {
        title: string;
        intro: string;
        readMore: string;
        events: WhatsItem[];
    };
    register: {
        badge: string;
        title: string;
        subtitle: string;
        primary: string;
        secondary: string;
        disclaimer: string;
        qr: {
            label: string;
            secure: string;
            aria: string;
            alt: string;
            desc: string;
            tag: {
                program: string;
                map: string;
                calendar: string;
                whatsapp: string;
            };
        };
    };
    footer: {
        quote: string;
        contact: string;
        email: string;
        addressLabel: string;
        address: string;
        navTitle: string;
        connectTitle: string;
        instagram: string;
        linkedin: string;
        legalNotice: string;
        rights: string;
        band: string;
    };
    highlights: Array<{ date: string; title: string; blurb: string }>;
};

export const translations: Record<Locale, Dict> = {
    fr: {
        nav: {
            menu: 'MENU',
            items: {
                exhibitions: 'Expositions',
                program: 'Programme',
                pavilion: 'Pavillon Curaté',
                voices: 'Voix Mises en Avant',
                about: 'À propos de Dakar 2025',
                partners: 'Partenaires et Institutions'
            },
            langShort: { fr: 'FR', en: 'EN' },
        },
        hero: {
            title: 'Dakar 2025 : La renaissance des arts panafricains',
            subtitle:
                'Cinq jours d’art, de dialogue et d’innovation — pour réinventer l’héritage de Dakar comme capitale culturelle de l’Afrique.',
            register: 'S’inscrire',
            explore: 'Découvrir le programme',
        },
        about: {
            lede:
                'Un Salon international réinventé revient à Dakar en 2025. Un rendez‑vous majeur pour le cinéma, le design, la musique et la technologie qui façonnent l’avenir panafricain.',
            supporting:
                'Accueilli sur le site rénové de l’Exhibition Centre, le Salon 2025 poursuit cinq objectifs : leadership intellectuel du discours culturel panafricain, diversification économique par les industries créatives, préservation et innovation de l’héritage artisanal, leadership “Digital Africa” et éducation par la restitution culturelle.',
            cta: 'À PROPOS DU SALON',
        },
        program: {
            kicker: 'Aperçu du programme',
            title: 'Temps forts du programme',
            desc:
                'Cinq jours au Centre d’Exposition rénové de Dakar — avant‑premières, forums, ateliers et gala de clôture.',
            explore: 'VOIR',
            cta: 'Voir le programme complet',
        },
        curated: {
            kicker: 'Exposition spéciale',
            title: 'Pavillon Curaté 2025',
            desc:
                'Un archive vivant : œuvres grand format, rendus du pavillon et juxtapositions archives/moderne.',
            cta: 'Explorer le pavillon',
        },
        featured: {
            kicker: 'Voix à l’honneur',
            ambience: 'Ambiance — Dakar',
            slowCuts: 'Plans lents',
        },
        whenwhere: {
            kicker: 'Quand et où',
            title: 'Dates, lieu et accès',
            desc:
                'Accueilli au Centre d’Exposition rénové de Dakar — conçu pour l’accessibilité, la découverte et une expérience fluide.',
            datesCardTitle: '15–19 mai 2025',
            datesCardDesc:
                'Cinq jours d’expositions, forums, ateliers et performances.',
            venueTitle: 'Centre d’Exposition, Dakar',
            venueDesc:
                'Site rénové de l’Exhibition Centre d’origine. Quartier Almadies, Dakar.',
            directions: 'Itinéraire',
            planTravel: 'PRÉPARER VOTRE VOYAGE',
            travelNotes: 'NOTES DE VOYAGE',
            transport: {
                dss: 'DSS 45–60 min',
                ter: 'TER vers Dakar',
                shuttle: 'Navette',
                parking: 'Parking sur place',
            },
            accessibilityTitle: 'ACCESSIBILITÉ ET SERVICES SUR PLACE',
            badges: {
                stepfree: 'Parcours sans obstacles',
                hearing: 'Assistance auditive',
                quiet: 'Salle calme',
                water: 'Points d’eau',
                wifi: 'Wi‑Fi gratuit',
                medical: 'Service médical sur place',
            },
            notes: {
                fly:
                    'Arrivée à DSS (Blaise Diagne International). ~45–60 min de transfert vers le site.',
                languages:
                    'Langues : français, wolof. Anglais largement compris dans les lieux.',
                info:
                    'Monnaie : XOF (CFA). Électricité : 230V Type C/E. eSIM disponible.',
                rides:
                    'VTC et taxis à compteur sur site. Service de navette aux heures de pointe.',
            },
        },
        whats: {
            title: 'Quoi de neuf',
            intro: 'Rejoignez‑nous pour des expositions, événements, talks, concerts et projets publics.',
            readMore: 'En savoir plus',
            events: [
                {
                    id: 'e1',
                    category: 'Exposition',
                    title: 'Forêts de mémoire: installation monumentale',
                    venue: 'Grand Hall — Centre d’Exposition',
                    dateLine: '15–19 mai 2025',
                    summary: 'Sculptures en bois récupéré et textures sonores immersives sur la mémoire écologique.',
                    image: '/images/news/forests-memory.jpg',
                    alt: 'Installation monumentale en bois dans une grande salle',
                },
                {
                    id: 'e2',
                    category: 'Pavillon',
                    title: 'Pavillon 2025: Capsule du temps',
                    venue: 'Pavillon central — Jardins',
                    dateLine: 'Ouvert tous les jours',
                    summary: 'Une architecture légère, terre et métal, imaginée comme archive vivante.',
                    image: '/images/news/pavilion-aerial.jpg',
                    alt: 'Vue aérienne d’un pavillon au milieu de jardins',
                },
                {
                    id: 'e3',
                    category: 'Art public',
                    title: 'Mur de motifs Ndebele par des artisanes',
                    venue: 'Jardin Nord',
                    dateLine: '15 mai – 28 septembre 2025',
                    summary: 'Peinture murale collaborative célébrant les géométries d’Afrique australe.',
                    image: '/images/news/ndebele-wall.jpg',
                    alt: 'Grand mural coloré aux motifs géométriques',
                },
                {
                    id: 'e4',
                    category: 'Live',
                    title: 'Soirée d’ouverture: musique & poésie',
                    venue: 'Scène extérieure',
                    dateLine: 'Jeu 15 mai, 20h–23h',
                    summary: 'Créations inédites mêlant kora, électro et spoken word.',
                    image: '/images/news/opening-stage.jpeg',
                    alt: 'Concert en plein air au crépuscule',
                },
                {
                    id: 'e5',
                    category: 'Projection',
                    title: 'Première: Cinéma des archipels',
                    venue: 'Auditorium',
                    dateLine: 'Ven 16 mai, 19h',
                    summary: 'Film essai sur diasporas et littoraux, suivi d’une discussion.',
                    image: '/images/news/screening.avif',
                    alt: 'Salle de cinéma pendant une projection',
                },
                {
                    id: 'e6',
                    category: 'Atelier',
                    title: 'Tissage numérique — code & textile',
                    venue: 'Aile des Ateliers',
                    dateLine: 'Chaque matin, 10h–12h',
                    summary: 'De la matrice au métier: initiation au jacquard assisté par code.',
                    image: '/images/news/weaving.avif',
                    alt: 'Atelier de tissage avec métier à tisser',
                },
                {
                    id: 'e7',
                    category: 'Forum',
                    title: 'Financer les industries créatives',
                    venue: 'Forum Hall',
                    dateLine: 'Ven 16 mai, 11h–13h',
                    summary: 'Investissement, coproductions et nouveaux modèles pour l’audiovisuel.',
                    image: '/images/news/panel-forum.jpg',
                    alt: 'Table ronde avec intervenants et public',
                },
                {
                    id: 'e8',
                    category: 'Design',
                    title: 'Marché des designers: matières locales',
                    venue: 'Halle — Marché du Design',
                    dateLine: '16–18 mai, 12h–18h',
                    summary: 'Objets, mobilier et mode issus de filières responsables.',
                    image: '/images/news/design-market.jpeg',
                    alt: 'Stands de marché avec objets de design',
                },
                {
                    id: 'e9',
                    category: 'Talk',
                    title: 'Conversation: archives et restitutions',
                    venue: 'Salon des Idées',
                    dateLine: 'Sam 17 mai, 14h',
                    summary: 'Chercheur·euses et artistes autour des politiques de mémoire.',
                    image: '/images/news/archives-talk.webp',
                    alt: 'Conférence avec intervenants sur scène',
                },
                {
                    id: 'e10',
                    category: 'Musique',
                    title: 'Nuit des percussions atlantiques',
                    venue: 'Esplanade',
                    dateLine: 'Sam 17 mai, 21h–01h',
                    summary: 'Dialogues entre sabar, batá et rythmes électroniques.',
                    image: '/images/news/percussion.jpg',
                    alt: 'Percussionnistes sur scène de nuit',
                },
                {
                    id: 'e11',
                    category: 'Masterclass',
                    title: 'Photographie: lumière et mémoire',
                    venue: 'Studio 2',
                    dateLine: 'Dim 18 mai, 11h',
                    summary: 'Pratique documentaire, archives familiales et tirages alternatifs.',
                    image: '/images/news/photo-class.jpg',
                    alt: 'Atelier de photographie en studio',
                },
                {
                    id: 'e12',
                    category: 'Clôture',
                    title: 'Gala — Cercles et constellations',
                    venue: 'Grand Hall',
                    dateLine: 'Lun 19 mai, 19h',
                    summary: 'Célébration finale: performances, projections et DJ set.',
                    image: '/images/news/closing-gala.jpg',
                    alt: 'Gala de clôture dans une grande salle',
                },
            ],
        },
        register: {
            badge: 'Dernier appel',
            title: 'Inscrivez‑vous et recevez les mises à jour',
            subtitle:
                'Réservez votre place et restez informé·e. Téléchargez notre kit de presse ou scannez pour obtenir le programme, les infos de lieu et des mises à jour en direct sur votre appareil.',
            primary: 'S’inscrire',
            secondary: 'Télécharger le kit de presse',
            disclaimer:
                'En vous inscrivant, vous acceptez de recevoir des communications essentielles liées à l’événement.',
            qr: {
                label: 'Scanner pour les mises à jour',
                secure: 'Lien sécurisé',
                aria: 'Ouvrir le lien des mises à jour',
                alt: 'QR code vers le programme et les mises à jour',
                desc:
                    'Pointez votre appareil photo pour obtenir le programme en direct, les plans, l’ajout au calendrier et des notifications WhatsApp (optionnelles).',
                tag: {
                    program: 'Programme',
                    map: 'Plans',
                    calendar: 'Ajouter au calendrier',
                    whatsapp: 'WhatsApp',
                },
            },
        },
        footer: {
            quote: 'Une scène panafricaine pour la culture, le design et le leadership Digital Africa.',
            contact: 'Contact',
            email: 'inbox@dakar2025.org',
            addressLabel: 'Lieu',
            address: 'Centre d’Exposition\nAlmadies, Dakar, Sénégal',
            navTitle: 'Navigation',
            connectTitle: 'Réseaux',
            instagram: 'Instagram',
            linkedin: 'LinkedIn',
            legalNotice: 'MENTIONS LÉGALES',
            rights: '©2025 Dakar 2025 — Tous droits réservés.',
            band: 'AFRIQUE DIGITALE',
        },
        highlights: [
            { date: 'Jeu • 15 mai 2025', title: 'Première de la soirée d’ouverture', blurb: 'Avant‑première avec tapis rouge et concert d’accueil au Grand Hall du Centre d’Exposition.' },
            { date: 'Ven • 16 mai 2025', title: 'Forum des industries créatives', blurb: 'Financement, distribution et co‑productions transcontinentales.' },
        ],
    },
    en: {
        nav: {
            menu: 'MENU',
            items: {
                exhibitions: 'Exhibitions',
                program: 'Program',
                pavilion: 'Curated Pavilion',
                voices: 'Featured Voices',
                about: 'About Dakar 2025',
                partners: 'Partners & Institutions',
            },
            langShort: { fr: 'FR', en: 'EN' },
        },
        hero: {
            title: 'Dakar 2025: The Pan-African Arts Renaissance',
            subtitle: "Five days of art, dialogue, and innovation — reimagining Dakar's legacy as the cultural capital of Africa.",
            register: 'Register Now',
            explore: 'Explore Program',
        },
        about: {
            lede: "A reimagined International Fair returns to Dakar in 2025. A landmark meeting point for film, design, music, and technology shaping the Pan-African future.",
            supporting: "Hosted on the renovated grounds of the original Exhibition Centre, the 2025 Fair advances five core goals: Intellectual leadership in Pan-African cultural discourse, economic diversification through creative industries, the preservation and innovation of artisanal heritage, Digital Africa leadership, and education through cultural repatriation.",
            cta: 'ABOUT THE FAIR',
        },
        program: {
            kicker: 'Agenda at a glance',
            title: 'Program Highlights',
            desc: 'Five days hosted at the renovated Exhibition Centre in Dakar — film premieres, forums, ateliers, and a closing gala.',
            explore: 'EXPLORE',
            cta: 'View full agenda',
        },
        curated: {
            kicker: 'Special Exhibition',
            title: 'Curated Pavilion 2025',
            desc: 'A living archive: large‑scale artworks, pavilion renderings, and archival/modern juxtapositions.',
            cta: 'Explore Pavilion',
        },
        featured: { kicker: 'Featured Voices', ambience: 'Ambience — Dakar', slowCuts: 'Slow cuts' },
        whenwhere: {
            kicker: 'When & Where',
            title: 'Dates, Venue and Getting Here',
            desc: 'Hosted at the renovated Exhibition Centre in Dakar — designed for accessibility, discovery, and a seamless visitor experience.',
            datesCardTitle: '15–19 May 2025',
            datesCardDesc: 'Five days of exhibitions, forums, workshops and performances.',
            venueTitle: 'Exhibition Centre, Dakar',
            venueDesc: 'Renovated grounds of the original Exhibition Centre. Almadies district, Dakar.',
            directions: 'Get directions',
            planTravel: 'PLAN YOUR TRAVEL',
            travelNotes: 'QUICK TRAVEL NOTES',
            transport: { dss: 'DSS 45–60 min', ter: 'TER to Dakar', shuttle: 'Shuttle Service', parking: 'On‑site parking' },
            accessibilityTitle: 'ACCESSIBILITY & ON‑SITE SERVICES',
            badges: {
                stepfree: 'Step‑free routes',
                hearing: 'Hearing assistance',
                quiet: 'Quiet room',
                water: 'Water stations',
                wifi: 'Free Wi‑Fi',
                medical: 'On‑site medical',
            },
            notes: {
                fly: 'Fly into DSS (Blaise Diagne International). ~45–60 min transfer to venue.',
                languages: 'Languages: French, Wolof. English widely understood in venues.',
                info: 'Currency: XOF (CFA). Power: 230V Type C/E. eSIM available.',
                rides: 'Rideshare and metered taxis on-site. Shuttle service during peak hours.',
            },
        },
        whats: {
            title: "What's happening",
            intro: 'Join us for exhibitions, events, talks, concerts and public art projects.',
            readMore: 'Read more',
            events: [
                {
                    id: 'e1',
                    category: 'Exhibition',
                    title: 'Forests of Memory: Monumental Installation',
                    venue: 'Grand Hall — Exhibition Centre',
                    dateLine: '15–19 May 2025',
                    summary: 'Salvaged wood sculptures with immersive sound on ecological memory.',
                    image: '/images/news/forests-memory.jpg',
                    alt: 'Monumental wooden installation in a large hall',
                },
                {
                    id: 'e2',
                    category: 'Pavilion',
                    title: 'Pavilion 2025: A Capsule in Time',
                    venue: 'Central Pavilion — Gardens',
                    dateLine: 'Open daily',
                    summary: 'Lightweight architecture in earth and metal as a living archive.',
                    image: '/images/news/pavilion-aerial.jpg',
                    alt: 'Aerial view of a pavilion among gardens',
                },
                {
                    id: 'e3',
                    category: 'Public Art',
                    title: 'Ndebele Pattern Wall by Women Artisans',
                    venue: 'North Garden',
                    dateLine: '15 May – 28 September 2025',
                    summary: 'Collaborative mural celebrating Southern African geometries.',
                    image: '/images/news/ndebele-wall.jpg',
                    alt: 'Large colorful geometric mural',
                },
                {
                    id: 'e4',
                    category: 'Live',
                    title: 'Opening Night: Music & Poetry',
                    venue: 'Outdoor Stage',
                    dateLine: 'Thu 15 May, 8–11pm',
                    summary: 'New works fusing kora, electronics and spoken word.',
                    image: '/images/news/opening-stage.jpeg',
                    alt: 'Outdoor concert at dusk',
                },
                {
                    id: 'e5',
                    category: 'Screening',
                    title: 'Premiere: Cinema of Archipelagos',
                    venue: 'Auditorium',
                    dateLine: 'Fri 16 May, 7pm',
                    summary: 'Essay film on diasporas and shorelines, with Q&A.',
                    image: '/images/news/screening.avif',
                    alt: 'Cinema screening with audience',
                },
                {
                    id: 'e6',
                    category: 'Workshop',
                    title: 'Digital Weaving — Code & Textile',
                    venue: 'Atelier Wing',
                    dateLine: 'Daily, 10am–12pm',
                    summary: 'From matrix to loom: intro to code‑assisted jacquard.',
                    image: '/images/news/weaving.avif',
                    alt: 'Weaving workshop at a loom',
                },
                {
                    id: 'e7',
                    category: 'Forum',
                    title: 'Financing Creative Industries',
                    venue: 'Forum Hall',
                    dateLine: 'Fri 16 May, 11am–1pm',
                    summary: 'Investment, co‑productions and new models in audiovisual.',
                    image: '/images/news/panel-forum.jpg',
                    alt: 'Panel discussion on stage',
                },
                {
                    id: 'e8',
                    category: 'Design',
                    title: 'Design Market: Local Materials',
                    venue: 'Design Market Hall',
                    dateLine: '16–18 May, 12–6pm',
                    summary: 'Objects, furniture and fashion from responsible supply chains.',
                    image: '/images/news/design-market.jpeg',
                    alt: 'Design market stalls',
                },
                {
                    id: 'e9',
                    category: 'Talk',
                    title: 'Conversation: Archives and Restitutions',
                    venue: 'Salon of Ideas',
                    dateLine: 'Sat 17 May, 2pm',
                    summary: 'Researchers and artists on policies of memory.',
                    image: '/images/news/archives-talk.webp',
                    alt: 'Talk session with speakers on stage',
                },
                {
                    id: 'e10',
                    category: 'Music',
                    title: 'Atlantic Percussion Night',
                    venue: 'Esplanade',
                    dateLine: 'Sat 17 May, 9pm–1am',
                    summary: 'Dialogues between sabar, batá and electronic rhythms.',
                    image: '/images/news/percussion.jpg',
                    alt: 'Percussionists performing outdoors at night',
                },
                {
                    id: 'e11',
                    category: 'Masterclass',
                    title: 'Photography: Light and Memory',
                    venue: 'Studio 2',
                    dateLine: 'Sun 18 May, 11am',
                    summary: 'Documentary practice, family archives and alternative prints.',
                    image: '/images/news/photo-class.jpg',
                    alt: 'Photography workshop in studio',
                },
                {
                    id: 'e12',
                    category: 'Closing',
                    title: 'Gala — Circles and Constellations',
                    venue: 'Grand Hall',
                    dateLine: 'Mon 19 May, 7pm',
                    summary: 'Final celebration with performances, projections and DJ set.',
                    image: '/images/news/closing-gala.jpg',
                    alt: 'Closing gala in a large hall',
                },
            ],
        },
        register: {
            badge: 'Final Call',
            title: 'Register and get the latest updates',
            subtitle:
                'Secure your spot and stay informed. Download our press kit, or scan to get schedule, venue details, and live updates to your device.',
            primary: 'Register',
            secondary: 'Download Press Kit',
            disclaimer:
                'By registering you agree to receive essential event communications.',
            qr: {
                label: 'Scan for updates',
                secure: 'Secure link',
                aria: 'Open updates link',
                alt: 'QR code to program and updates',
                desc:
                    'Point your camera to get the live program, maps, add-to-calendar, and optional WhatsApp notifications.',
                tag: {
                    program: 'Program',
                    map: 'Maps',
                    calendar: 'Add to Calendar',
                    whatsapp: 'WhatsApp',
                },
            },
        },
        footer: {
            quote: 'A Pan‑African stage for culture, design, and Digital Africa leadership.',
            contact: 'Contact',
            email: 'inbox@dakar2025.org',
            addressLabel: 'Venue',
            address: 'Exhibition Centre\nAlmadies, Dakar, Senegal',
            navTitle: 'Navigation',
            connectTitle: 'Connect',
            instagram: 'Instagram',
            linkedin: 'LinkedIn',
            legalNotice: 'LEGAL NOTICE',
            rights: '©2025 Dakar 2025 — All rights reserved.',
            band: 'DIGITAL AFRICA',
        },
        highlights: [
            { date: 'Thu • May 15, 2025', title: 'Opening Night Premiere', blurb: 'Red-carpet screening and welcome concert at the Exhibition Centre Grand Hall.' },
            { date: 'Fri • May 16, 2025', title: 'Creative Industries Forum', blurb: 'Financing, distribution, and cross-continental co-production talks.' },
        ],
    },
};