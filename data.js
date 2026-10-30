/* ============================================================
   CONTENU DU SITE : c'est le seul fichier à modifier pour ajouter
   des ressources.

   Une ressource :
   { type: "cours" | "activite" | "exercice" | "video" | "simulation",
     titre: "Titre affiché",
     desc: "Phrase facultative",
     date: "2026-11-05",
     fichier: "pdf/seconde/ch1-cours.pdf"   // pour un PDF
     // ou  url: "https://..."               // pour une vidéo / simulation
   }
   ============================================================ */
window.SITE = {
  nom: "M. OUSTOU Adel",
  titre: "Professeur agrégé de Physique-Chimie",
  accroche: "Cours, activités, exercices, capsules vidéo et simulations pour mes élèves de seconde, de première et de terminale.",
  niveaux: [
    {
      id: "seconde", titre: "Seconde", couleur: "var(--s1)",
      sous: "Physique-Chimie, voie générale et technologique",
      chapitres: [
        { titre: "Constitution et transformations de la matière", ressources: [] },
        { titre: "Mouvement et interactions", ressources: [] },
        { titre: "L'énergie : conversions et transferts", ressources: [] },
        { titre: "Ondes et signaux", ressources: [] }
      ]
    },
    {
      id: "premiere-es", titre: "Première · Enseignement scientifique", court: "Première ES", couleur: "var(--s2)",
      sous: "Enseignement scientifique, voie générale",
      chapitres: [
        { titre: "Une longue histoire de la matière", ressources: [] },
        { titre: "Le Soleil, notre source d'énergie", ressources: [] },
        { titre: "La Terre, un astre singulier", ressources: [] },
        { titre: "Son et musique, porteurs d'information", ressources: [] }
      ]
    },
    {
      id: "premiere-spe", titre: "Première · Spécialité", court: "Première spé", couleur: "var(--s3)",
      sous: "Spécialité Physique-Chimie",
      chapitres: [
        { titre: "Constitution et transformations de la matière", ressources: [] },
        { titre: "Mouvement et interactions", ressources: [] },
        { titre: "L'énergie : conversions et transferts", ressources: [] },
        { titre: "Ondes et signaux", ressources: [] }
      ]
    },
    {
      id: "terminale-es", titre: "Terminale · Enseignement scientifique", court: "Terminale ES", couleur: "var(--s4)",
      sous: "Enseignement scientifique, voie générale",
      chapitres: [
        { titre: "Science, climat et société", ressources: [] },
        { titre: "Le futur des énergies", ressources: [] },
        { titre: "Une histoire du vivant", ressources: [] },
        { titre: "À la recherche de l'intelligence artificielle", ressources: [] }
      ]
    },
    {
      id: "terminale-spe", titre: "Terminale · Spécialité", court: "Terminale spé", couleur: "var(--s5)",
      sous: "Spécialité Physique-Chimie",
      chapitres: [
        { titre: "Constitution et transformations de la matière", ressources: [] },
        { titre: "Mouvement et interactions", ressources: [] },
        { titre: "L'énergie : conversions et transferts", ressources: [] },
        { titre: "Ondes et signaux", ressources: [] }
      ]
    },
    {
      id: "sciences-labo", titre: "Sciences et laboratoire", court: "Sciences et labo", couleur: "var(--s6)",
      sous: "Pratique expérimentale, méthodes et projets",
      chapitres: [
        { titre: "Sécurité au laboratoire", ressources: [] },
        { titre: "Matériel et verrerie", ressources: [] },
        { titre: "Mesures et incertitudes", ressources: [] },
        { titre: "Projets et expériences", ressources: [] }
      ]
    }
  ],
  liens: [
    { titre: "PhET : simulations interactives", url: "https://phet.colorado.edu/fr/", desc: "Simulations de physique et de chimie de l'université du Colorado." },
    { titre: "Éduscol : programmes de lycée", url: "https://eduscol.education.fr/", desc: "Programmes officiels et ressources du ministère." }
  ]
};
