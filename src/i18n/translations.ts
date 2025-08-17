export type Locale = 'fr' | 'en';

type Dict = {
    nav: {
        menu: string;
        items: { exhibitions: string; learning: string; another: string; etc: string };
        langShort: { fr: 'FR'; en: 'EN' };
    };
    hero: { title: string; subtitle: string; register: string; explore: string };
    about: { lede: string; supporting: string; cta: string };
    program: {
        kicker: string;
        title: string;
        desc: string;
        explore: string;
        cta: string;
    };
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
        notes: {
            fly: string;
            languages: string;
            info: string;
            rides: string;
        };
    };
    highlights: Array<{ date: string; title: string; blurb: string }>;
};

export const translations: Record<Locale, Dict> = {
    fr: {
        nav: {
            menu: 'MENU',
            items: {
                exhibitions: 'Expositions',
                learning: 'Apprentissage et recherche',
                another: 'Autre',
                etc: 'Etc.',
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
        highlights: [
            {
                date: 'Jeu • 15 mai 2025',
                title: 'Première de la soirée d’ouverture',
                blurb:
                    'Avant‑première avec tapis rouge et concert d’accueil au Grand Hall du Centre d’Exposition.',
            },
            {
                date: 'Ven • 16 mai 2025',
                title: 'Forum des industries créatives',
                blurb:
                    'Financement, distribution et co‑productions transcontinentales.',
            },
        ],
    },
    en: {
        nav: {
            menu: 'MENU',
            items: {
                exhibitions: 'Exhibitions',
                learning: 'Learning and research',
                another: 'Another one',
                etc: 'Etc',
            },
            langShort: { fr: 'FR', en: 'EN' },
        },
        hero: {
            title: 'Dakar 2025: The Pan-African Arts Renaissance',
            subtitle:
                "Five days of art, dialogue, and innovation — reimagining Dakar's legacy as the cultural capital of Africa.",
            register: 'Register Now',
            explore: 'Explore Program',
        },
        about: {
            lede:
                "A reimagined International Fair returns to Dakar in 2025. A landmark meeting point for film, design, music, and technology shaping the Pan-African future.",
            supporting:
                "Hosted on the renovated grounds of the original Exhibition Centre, the 2025 Fair advances five core goals: Intellectual leadership in Pan-African cultural discourse, economic diversification through creative industries, the preservation and innovation of artisanal heritage, Digital Africa leadership, and education through cultural repatriation.",
            cta: 'ABOUT THE FAIR',
        },
        program: {
            kicker: 'Agenda at a glance',
            title: 'Program Highlights',
            desc:
                'Five days hosted at the renovated Exhibition Centre in Dakar — film premieres, forums, ateliers, and a closing gala.',
            explore: 'EXPLORE',
            cta: 'View full agenda',
        },
        curated: {
            kicker: 'Special Exhibition',
            title: 'Curated Pavilion 2025',
            desc:
                'A living archive: large‑scale artworks, pavilion renderings, and archival/modern juxtapositions.',
            cta: 'Explore Pavilion',
        },
        featured: {
            kicker: 'Featured Voices',
            ambience: 'Ambience — Dakar',
            slowCuts: 'Slow cuts',
        },
        whenwhere: {
            kicker: 'When & Where',
            title: 'Dates, Venue and Getting Here',
            desc:
                'Hosted at the renovated Exhibition Centre in Dakar — designed for accessibility, discovery, and a seamless visitor experience.',
            datesCardTitle: '15–19 May 2025',
            datesCardDesc:
                'Five days of exhibitions, forums, workshops and performances.',
            venueTitle: 'Exhibition Centre, Dakar',
            venueDesc:
                'Renovated grounds of the original Exhibition Centre. Almadies district, Dakar.',
            directions: 'Get directions',
            planTravel: 'PLAN YOUR TRAVEL',
            travelNotes: 'QUICK TRAVEL NOTES',
            transport: {
                dss: 'DSS 45–60 min',
                ter: 'TER to Dakar',
                shuttle: 'Shuttle Service',
                parking: 'On‑site parking',
            },
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
                fly:
                    'Fly into DSS (Blaise Diagne International). ~45–60 min transfer to venue.',
                languages:
                    'Languages: French, Wolof. English widely understood in venues.',
                info:
                    'Currency: XOF (CFA). Power: 230V Type C/E. eSIM available.',
                rides:
                    'Rideshare and metered taxis on-site. Shuttle service during peak hours.',
            },
        },
        highlights: [
            {
                date: 'Thu • May 15, 2025',
                title: 'Opening Night Premiere',
                blurb:
                    'Red-carpet screening and welcome concert at the Exhibition Centre Grand Hall.',
            },
            {
                date: 'Fri • May 16, 2025',
                title: 'Creative Industries Forum',
                blurb:
                    'Financing, distribution, and cross-continental co-production talks.',
            },
        ],
    },
};