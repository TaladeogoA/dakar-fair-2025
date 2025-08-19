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
    hero: { title: string; subtitle: string; register: string; explore: string; dates: string; venue: string };
    about: { lede: string; supporting: string; cta: string };
    program: { kicker: string; title: string; desc: string; explore: string; cta: string };
    curated: { kicker: string; title: string; desc: string; cta: string };
    featured: { kicker: string; ambience: string; slowCuts: string };
    preloader: { loading: string; ready: string };
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
            title: 'La renaissance panafricaine',
            subtitle:
                'Cinq jours d’art, de dialogue et d’innovation — pour réinventer l’héritage de Dakar comme capitale culturelle de l’Afrique.',
            dates: '15–19 mai',
            venue: 'Centre international des foires et expositions',
            register: 'S’inscrire',
            explore: 'Découvrir le programme',
        },
        about: {
            lede:
                'Le Festival mondial des arts nègres revient à Dakar pour sa sixième édition. À travers des présentations et des dialogues autour de l’art, de la musique, de la littérature et du cinéma, le festival célèbre la pensée africaine et l’expression culturelle.',
            supporting:
                'Accueilli au Centre international des foires et expositions, site historique, Dakar 2025 poursuit cinq objectifs : leadership intellectuel du discours culturel panafricain, diversification économique par les industries créatives, préservation et innovation de l’héritage artisanal, leadership “Digital Africa” et éducation par la restitution culturelle.',
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
            title: 'Une archive vivante : Pavillon principal Dakar 2025',
            desc: 'L’exposition interroge la production des archives africaines et les rôles qu’elles jouent dans la compréhension des réalités contemporaines.',
            cta: 'Explorer le pavillon',
        },
        featured: {
            kicker: 'Voix à l’honneur',
            ambience: 'Ambiance — Dakar',
            slowCuts: 'Plans lents',
        },
        preloader: {
            loading: 'Chargement des contenus...',
            ready: 'Prêt',
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
            title: 'Focus',
            intro: 'Rejoignez‑nous pour des expositions, événements, talks, concerts et projets publics.',
            readMore: 'En savoir plus',
            events: [
                {
                    id: 'focus1',
                    category: 'Expositions',
                    title: 'Expositions',
                    venue: '',
                    dateLine: '',
                    summary: 'Découvrez les exposants de Dakar 2025, du pavillon principal aux projets spécialement curatés.',
                    image: '/images/news/forests-memory.jpg',
                    alt: 'Installation monumentale en bois dans une grande salle',
                },
                {
                    id: 'focus2',
                    category: 'Actualités',
                    title: 'Actualités',
                    venue: '',
                    dateLine: '',
                    summary: 'Regardez et lisez les dernières actualités et interviews sur la prochaine édition du festival.',
                    image: '/images/news/pavilion-aerial.jpg',
                    alt: 'Vue aérienne d’un pavillon au milieu de jardins',
                },
                {
                    id: 'focus3',
                    category: 'Talks et ateliers',
                    title: 'Talks et ateliers',
                    venue: '',
                    dateLine: '',
                    summary: 'Parcourez nos séminaires et ateliers animés par des experts de premier plan dans des domaines culturels variés.',
                    image: '/images/news/panel-forum.jpg',
                    alt: 'Table ronde avec intervenants et public',
                },
                {
                    id: 'focus4',
                    category: 'Projections',
                    title: 'Projections : Un nouveau cinéma',
                    venue: '',
                    dateLine: '',
                    summary: 'Courts et longs métrages explorant les réalités africaines et diasporiques, suivis d’une discussion.',
                    image: '/images/news/screening.avif',
                    alt: 'Salle de cinéma pendant une projection',
                },
                {
                    id: 'focus5',
                    category: 'Salon du livre',
                    title: 'Salon du livre',
                    venue: '',
                    dateLine: '',
                    summary: 'Plongez dans des textes majeurs et des ouvrages essentiels proposés par des éditeurs à travers l’Afrique et la diaspora.',
                    image: '/images/news/book-fair.jpg',
                    alt: 'Stands de marché avec objets de design',
                },
                {
                    id: 'focus6',
                    category: 'Design',
                    title: 'Marché des designers : Matières locales',
                    venue: '',
                    dateLine: '',
                    summary: 'Objets, mobilier et mode issus de sources locales et autochtones.',
                    image: '/images/news/design-market.jpeg',
                    alt: 'Atelier de tissage avec métier à tisser',
                },
                {
                    id: 'focus7',
                    category: 'Live',
                    title: 'Dakar 2025 Live!',
                    venue: '',
                    dateLine: '',
                    summary: 'Deux nuits de DJ sets électroniques et de performances, entre mbalax, afro‑house et jazz.',
                    image: '/images/news/percussion.jpg',
                    alt: 'Percussionnistes sur scène de nuit',
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
            { date: '15 mai 2025', title: 'Cérémonie d’ouverture', blurb: 'Allocution de bienvenue présidentielle suivie d’une visite du pavillon principal d’exposition.' },
            { date: '16 mai 2025', title: 'Projection — Cinéma des archipels', blurb: 'Projection suivie d’une discussion.' },
            { date: '16 mai 2025', title: 'Talk — Financer les industries créatives', blurb: 'Investissements, coproductions et nouveaux modèles pour l’audiovisuel.' },
        ]
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
            title: 'The Pan-African Renaissance',
            subtitle: "Five days of art, dialogue and innovation — reinventing Dakar's legacy as Africa's cultural capital.",
            dates: 'May 15–19',
            venue: 'The International Trade Fair Centre',
            register: 'Register Now',
            explore: 'Explore Program',
        },
        about: {
            lede:
                'The World Festival of Black Arts returns to Dakar for its sixth edition. Featuring presentations and dialogue on art, music, literature and cinema, the festival celebrates African thought and cultural expression.',
            supporting:
                'Hosted at the historical International Trade Fair Centre, Dakar 2025 pursues five objectives: intellectual leadership of Pan-African cultural discourse, economic diversification through creative industries, preservation and innovation of artisanal heritage, “Digital Africa” leadership and education through cultural restitution.',
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
            kicker: 'Special exhibition',
            title: 'A Living Archive: Dakar 2025 Main Pavilion',
            desc: 'The exhibition dialogues with the production of the African archive, and what roles they play in understanding current realities.',
            cta: 'Explore Pavilion',
        },
        featured: { kicker: 'Featured Voices', ambience: 'Ambience — Dakar', slowCuts: 'Slow cuts' },
        preloader: {
            loading: 'Loading assets...',
            ready: 'Ready',
        },
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
            title: 'Focus',
            intro: 'Join us for exhibitions, events, talks, concerts and public projects.',
            readMore: 'Read more',
            events: [
                {
                    id: 'focus1',
                    category: 'Exhibitions',
                    title: 'Exhibitions',
                    venue: '',
                    dateLine: '',
                    summary: 'Discover the Dakar 2025 exhibitors from the main pavilion to specially curated projects.',
                    image: '/images/news/forests-memory.jpg',
                    alt: 'Monumental wooden installation in a large hall',
                },
                {
                    id: 'focus2',
                    category: 'News',
                    title: 'News',
                    venue: '',
                    dateLine: '',
                    summary: 'Watch and read the latest news and interviews about the upcoming edition of the festival.',
                    image: '/images/news/pavilion-aerial.jpg',
                    alt: 'Aerial view of a pavilion among gardens',
                },
                {
                    id: 'focus3',
                    category: 'Talks & Workshops',
                    title: 'Talks and Workshops',
                    venue: '',
                    dateLine: '',
                    summary: 'Browse our seminars and workshops hosted by leading experts across diverse cultural fields.',
                    image: '/images/news/panel-forum.jpg',
                    alt: 'Panel discussion on stage',
                },
                {
                    id: 'focus4',
                    category: 'Screenings',
                    title: 'Screenings: A New Cinema',
                    venue: '',
                    dateLine: '',
                    summary: 'Short and feature-length films exploring African and diasporic realities, followed by a discussion.',
                    image: '/images/news/screening.avif',
                    alt: 'Cinema screening with audience',
                },
                {
                    id: 'focus5',
                    category: 'Book Fair',
                    title: 'Book Fair',
                    venue: '',
                    dateLine: '',
                    summary: 'Immerse yourself in seminal texts and essential reading materials from publishers across Africa and the diaspora.',
                    image: '/images/news/book-fair.jpg',
                    alt: 'Design market stalls',
                },
                {
                    id: 'focus6',
                    category: 'Design',
                    title: 'Designer’s Market: Local Materials',
                    venue: '',
                    dateLine: '',
                    summary: 'Objects, furniture and fashion from local and indigenous sources.',
                    image: '/images/news/design-market.jpeg',
                    alt: 'Weaving workshop at a loom',
                },
                {
                    id: 'focus7',
                    category: 'Live',
                    title: 'Dakar 2025 Live!',
                    venue: '',
                    dateLine: '',
                    summary: 'Two nights of electronic DJ sets and performances spanning rhythms from mbalax, afro-house and jazz.',
                    image: '/images/news/percussion.jpg',
                    alt: 'Percussionists performing outdoors at night',
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
            { date: '15 May 2025', title: 'Opening Ceremony', blurb: 'Presidential welcome address followed by a tour of the main exhibition pavilion.' },
            { date: '16 May 2025', title: 'Screenings — Cinema of the Archipelagos', blurb: 'Film screening followed by a discussion.' },
            { date: '16 May 2025', title: 'Talk — Funding the Creative Industries', blurb: 'Investments, co-productions and new models for the audiovisual.' },
        ]
    },
};