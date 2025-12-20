export const languages = {
    fr: 'Français',
    en: 'English',
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
    en: {
        title: "SnoringPony - Open source show control software",
        comingSoon: "Coming soon!",
        menu: {
            about: "À propos",
            features: "Features",
            downloads: "Downloads",
            docs: "Documentation",
            community: "Community",
        },
        hero: {
            baseline: "Control your shows without falling off your horse",
            comingSoon: "Coming soon to your stable!",
        },
        about: {
            title: "About SnoringPony",
            block1: {
                title: "What is SnoringPony?",
                text: "<strong>SnoringPony</strong> is an <strong>open-source</strong> software, under <a href=\"https://www.gnu.org/licenses/gpl-3.0.fr.html\" target=\"_blank\"><strong>GPLv3 license</strong></a>, aimed at simplifying the programming of <strong>live shows</strong>. Designed for <strong>theater, dance, or musicals companies</strong>, this software, based on <strong>Cue</strong> system, allows you to <strong>easily trigger various programmed actions</strong> during your show as easily as a pony's neigh!",
            },
            block2: {
                title: "Is it really free?",
                text1: "<strong>Absolutely, it is free and will remain so!</strong>",
                text2: "You can find the <strong>source code</strong> directly on <a href=\"https://github.com/boherm/SnoringPony\"target=\"_blank\">GitHub</a>, so if you want to join the adventure and add new features, <strong>feel free to contribute!</strong>",
                text3: "If you don't have time to contribute but still want to help, <strong>you can also make a donation</strong>, so I can continue to <strong>work on this project in my free time</strong>, and allow me to feed my horses <small>(yes, really!)</small>:",
            }
        },
        features: {
            title: 'Features',
            description: 'Discover the main features of SnoringPony',
            sliders: [
                { image: '/ui.png', description: "Main window of SnoringPony" },
                { image: '/conductor.png', description: "Conductor window to display current and next cue." },
                { image: '/osc-cue.png', description: "Example of the configuration for a OSC Cue" }
            ],
            blocks: [
                {
                    title: 'Audio',
                    items: [
                        "Playing audio files (WAV, MP3, etc.)",
                        "Using multiple audio interfaces and simultaneous audio outputs",
                        "Cue to play multiple audio files at the same time on different outputs",
                        "Playlist cue to chain multiple audio files one after the other",
                    ]
                },
                {
                    title: 'OSC',
                    items: [
                        "Incoming OSC messages to control SnoringPony remotely",
                        "Cue to send custom OSC messages",
                        "Use of templates to facilitate programming messages to send",
                    ]
                },
                {
                    title: "And many more to discover!",
                    items: [
                        "User-friendly and intuitive interface",
                        "Multi-platform support (Windows, MacOS, Linux)",
                        "Fire cues in relation to other cues (before, after, at the same time)",
                        "Error and log management for simplified troubleshooting",
                        "Colorable Cuelist and Cues for better visual organization",
                    ]
                },
                {
                    title: "And coming very soon...",
                    items: [
                        "MIDI support",
                        "Feedback for OSC and MIDI interfaces",
                        "DCA management to help you mix your musical shows",
                        "..."
                    ]
                }
            ],
        },
        downloads: {
            title: "Saddle up!",
            description: "Download SnoringPony and start programming your next show today.",
            latestStableVersion: "Latest stable version",
            latestBetaVersion: "Latest beta version",
            devVersion: {
                title: "Developer version",
                description: "For adventurers wishing to test the latest features under development. May be unstable and contain bugs!",
            },
            betaWarning: {
                title: "⚠ Warning ⚠",
                message: "This version may be unstable and contain bugs!",
            },
            noStableVersionAvailable: "No stable version available at the moment!",
            noBetaVersionAvailable: "No beta version available at the moment!",
            seeChangelog: "See changelog",
            downloadWin64: "Download for Windows 64-bits",
            downloadMacIntel: "Download for MacOS Intel",
            downloadMacSilicon: "Download for MacOS Apple Silicon",
            downloadLinux64: "Download for Linux 64-bits",
            modal: {
                text1: "If SnoringPony proudly helps you hold the reins of your shows, consider slipping a few coins into its digital trough. A well-fed pony runs faster, jumps higher, and develops new features without complaining!",
                text2: "Your support, even modest, allows us to offer you a faithful companion for your projects.",
                donatePaypal: "Make a donation via PayPal",
                donatePatreon: "Become a Patreon member",
                donateGithub: "Become a GitHub sponsor",
                download: "Download %s for %s",
            },
        },
        docs: {
            title: "Rider's Guide",
            description: "Everything you need to know to tame your new companion.",
            docs: {
                title: 'Official documentation',
                description: "The complete guide to mastering SnoringPony.",
                url: '#',
                label: 'Go to the documentation',
            },
            youtube: {
                title: "Video tutorials",
                description: "A series of video tutorials to help you get started with SnoringPony.",
                url: '#',
                label: "Go to the playlist",
            },
        },
        community: {
            title: "Poney Club",
            description: "Join our community to share your experiences, get help, and contribute to the development of SnoringPony.",
            github: {
                title: 'GitHub Repository',
                description: "Report issues, contribute to the code, and join the development community.",
                label: 'Visit our repository',
            },
            discord: {
                title: 'Discord Server',
                description: "Join the community chat to discuss features, get help, and share your projects.",
                url: '#',
                label: 'Join us on Discord',
            }
        },
        footer: {
            thanks: {
                title: "Thanks to",
                to: '<a href="http://benjamin.kuperberg.fr/" target="_blank">Ben Kuperberg</a> <small>(<a href="https://github.com/benkuper/juce_organicui" target="_blank">juce_organicui</a>)</small> - Cindy - Indy <small>(<a href="/indy.jpg" target="_blank">the real poney</a>)</small> - All contributors, testers and donors',
            },
        },
    },
    fr: {
        title: "SnoringPony - Logiciel libre pour la régie technique du spectacle vivant",
        comingSoon: "Bientôt disponible !",
        menu: {
            about: "À propos",
            features: "Fonctionnalités",
            downloads: "Téléchargements",
            docs: "Documentation",
            community: "Communauté",
        },
        hero: {
            baseline: "La régie de vos spectacles sans tomber de selle",
            comingSoon: "Bientôt disponible dans votre écurie !",
        },
        about: {
            title: "À propos de SnoringPony",
            block1: {
                title: "Qu'est-ce que SnoringPony ?",
                text: "<strong>SnoringPony</strong> est un logiciel <strong>open-source</strong>, sous <a href=\"https://www.gnu.org/licenses/gpl-3.0.fr.html\" target=\"_blank\"><strong>licence GPLv3</strong></a>, visant à simplifier la programmation des <strong>spectacles vivants</strong>. Conçu pour les <strong>compagnies de théâtre, de danse ou de comédie musicale</strong>, ce logiciel, reposant sur un système de <strong>Cue</strong>, permet de <strong>lancer facilement diverses actions programmées</strong> au cours de votre spectacle aussi facilement que de pousser un hennissement pour un poney&nbsp;!",
            },
            block2: {
                title: "Est-ce que c'est vraiment gratuit ?",
                text1: "<strong>Tout à fait, il est gratuit et le restera&nbsp;!</strong>",
                text2: "Tu peux retrouver <strong>les sources</strong> directement sur <a href=\"https://github.com/boherm/SnoringPony\"target=\"_blank\">GitHub</a>, donc si tu souhaites participer à l'aventure et rajouter de nouvelles fonctionnalitées, <strong>n'hésite pas à contribuer&nbsp;!</strong>",
                text3: "Si tu n'as pas de temps à donner mais que tu souhaites aider, <strong>tu peux aussi faire un don</strong>, pour que je puisse continuer à <strong>travailler sur ce projet dans mon temps libre</strong>, et me permettre de nourir mes chevaux <small>(oui vraiment&nbsp;!)</small>&nbsp;:"
            }
        },
        features: {
            title: 'Fonctionnalités',
            description: 'Découvrez les fonctionnalités principales de SnoringPony',
            sliders: [
                { image: '/ui.png', description: "Interface de SnoringPony" },
                { image: '/conductor.png', description: "Fenêtre de conducteur permettant de visualiser l'action en cours ainsi que la prochaine à être jouée." },
                { image: '/osc-cue.png', description: "Exemple de programmation d'une Cue de type OSC" }
            ],
            blocks: [
                {
                    title: 'Audio',
                    items: [
                        'Lecture de fichiers audio (WAV, MP3, etc.)',
                        'Utilisation de plusieurs interfaces audio et de sorties audio simultanément',
                        'Action pour lire plusieurs fichiers audio en même temps sur des sorties différentes',
                        'Action de playlist pour enchaîner plusieurs fichiers audio les uns après les autres',
                    ]
                },
                {
                    title: 'OSC',
                    items: [
                        "Réception de messages OSC pour contrôler SnoringPony à distance",
                        "Actions pour envoyer des messages OSC personnalisés",
                        "Utilisation de template pour faciliter la programmation des messages a envoyer",
                    ]
                },
                {
                    title: "Et d'autres à découvrir !",
                    items: [
                        "Interface intuitive et facile à utiliser",
                        "Support multi-plateforme (Windows, MacOS, Linux)",
                        "Lancement d'actions par rapport à d'autres cues (avant, après, en même temps)",
                        "Gestion des erreurs et des logs pour un dépannage simplifié",
                        "Cuelist et Cues colorables pour une meilleure organisation visuelle",
                    ]
                },
                {
                    title: "Et très prochainement...",
                    items: [
                        "Gestion du MIDI",
                        "Mise en place du feedback pour les interfaces OSC et MIDI",
                        "Gestion des DCA pour vous aider au mixage de vos spectacles musicaux",
                        "..."
                    ]
                }
            ],
        },
        downloads: {
            title: "En selle !",
            description: "Téléchargez SnoringPony et commencez à programmer votre prochain spectacle dès aujourd'hui.",
            latestStableVersion: "Dernière version stable",
            latestBetaVersion: "Dernière version bêta",
            devVersion: {
                title: "Version développeur",
                description: "Pour les aventuriers souhaitant tester les dernières fonctionnalités en cours de développement. Peut être instable et contenir des bugs !",
            },
            betaWarning: {
                title: "⚠ Attention ⚠",
                message: "Cette version peut être instable<br> et contenir des bugs !",
            },
            noStableVersionAvailable: "Aucune version stable n'est disponible pour le moment !",
            noBetaVersionAvailable: "Aucune version bêta disponible pour le moment !",
            seeChangelog: "Voir le changelog",
            downloadWin64: "Télécharger pour Windows 64-bits",
            downloadMacIntel: "Télécharger pour MacOS Intel",
            downloadMacSilicon: "Télécharger pour MacOS Apple Silicon",
            downloadLinux64: "Télécharger pour Linux 64-bits",
            modal: {
                text1: "Si SnoringPony vous aide fièrement à tenir la bride de vos spectacles, pensez à glisser quelques pièces dans sa mangeoire numérique. Un poney bien nourri court plus vite, saute plus haut et développe de nouvelles fonctionnalités sans rechigner !",
                text2: "Votre soutien, même modeste, nous permet de vous offrir un compagnon fidèle pour vos projets.",
                donatePaypal: "Faire un don via PayPal",
                donatePatreon: "Devenir membre du Patreon",
                donateGithub: "Devenir sponsor GitHub",
                download: "Télécharger %s pour %s",
            },
        },
        docs: {
            title: "Guide du cavalier",
            description: "Tout ce que vous devez savoir pour bien apprivoiser votre nouveau compagnon.",
            docs: {
                title: 'Documentation officielle',
                description: "Le guide complet pour maîtriser SnoringPony.",
                url: '#',
                label: 'Aller à la documentation',
            },
            youtube: {
                title: "Tutoriels vidéo",
                description: "Une série de tutoriels vidéo pour vous aider à démarrer avec SnoringPony.",
                url: '#',
                label: "Voir la playlist",
            },
        },
        community: {
            title: "Poney Club",
            description: "Rejoignez notre communauté pour partager vos expériences, obtenir de l'aide et contribuer au développement de SnoringPony.",
            github: {
                title: 'Dépôt GitHub',
                description: "Signaler des problèmes, contribuer au code et rejoindre la communauté de développement.",
                label: 'Voir le repository',
            },
            discord: {
                title: 'Serveur Discord',
                description: "Rejoignez notre serveur Discord pour discuter des fonctionnalités, obtenir de l'aide et partager vos projets.",
                url: '#',
                label: 'Nous rejoindre sur Discord',
            }
        },
        footer: {
            thanks: {
                title: "Remerciements",
                to: '<a href="http://benjamin.kuperberg.fr/" target="_blank">Ben Kuperberg</a> <small>(<a href="https://github.com/benkuper/juce_organicui" target="_blank">juce_organicui</a>)</small> - Cindy - Indy <small>(<a href="/indy.jpg" target="_blank">le vrai poney</a>)</small> - Tous les contributeurs, testeurs et donateurs',
            },
        },
    },
} as const;
