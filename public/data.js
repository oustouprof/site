/* ============================================================
   CONTENU DU SITE : c'est le seul fichier à modifier pour ajouter
   des ressources.

   Une ressource :
   { type: "cours" | "activite" | "exercice" | "animation" | "video" | "maths",
     titre: "Titre affiché",
     desc: "Phrase facultative",
     date: "2026-11-05",
     fichier: "pdf/terminale-spe/titrages/cours.pdf"   // pour un PDF
     // ou  url: "https://..."                          // animation / capsule vidéo
   }
   Arborescence : niveau > chapitre > cours, activités, exercices, animations et
   simulations, capsules vidéo, points maths. Un PDF se range dans pdf/<niveau>/<chapitre>/.
   ============================================================ */
window.SITE = {
  nom: "M. OUSTOU Adel",
  titre: "Professeur agrégé de Physique-Chimie",
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
        { id: "titrages", titre: "Titrage avec suivi pH-métrique et titrage avec suivi conductimétrique", ressources: [
          { type: "cours", titre: "Titrage : l'essentiel du cours de Première", desc: "Prérequis des titrages pH-métrique et conductimétrique", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/cours-rappel-premiere-titrage.pdf" },
          { type: "activite", titre: "Titrage avec suivi pH-métrique d'un vinaigre", desc: "Sujet type ECE (2 h) : titre massique du vinaigre, comparaison avec l'étiquette", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/tp1-vinaigre-ph-metrique-sujet.pdf" },
          { type: "activite", titre: "Titrage avec suivi pH-métrique d'un vinaigre : notice Regressi", desc: "Saisie des mesures, méthode des tangentes et méthode de la dérivée", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/tp1-vinaigre-ph-metrique-notice-regressi.pdf" },
          { type: "activite", titre: "Titrage avec suivi conductimétrique du Destop", desc: "Sujet type ECE (1 h) : titre massique en hydroxyde de sodium", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/tp2-destop-conductimetrique-sujet.pdf" },
          { type: "activite", titre: "Titrage avec suivi conductimétrique du Destop : notice Regressi", desc: "Saisie des mesures et tracé de σ = f(VA)", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/tp2-destop-conductimetrique-notice-regressi.pdf" },
          { type: "activite", titre: "Titrage avec suivi conductimétrique du Destop : exemple de mesures expérimentales", desc: "Mesures de conductivité pour exploiter le titrage", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/tp2-destop-conductimetrique-tableau-mesures.pdf" },
          { type: "exercice", titre: "Titrage avec suivi pH-métrique : un comprimé de vitamine C bien dosé ?", desc: "Exercice type, 10 points, durée conseillée 1 h", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/exercice-vitamine-c-ph-metrique.pdf" },
          { type: "exercice", titre: "Titrage avec suivi conductimétrique : un détartrant contre le calcaire", desc: "Exercice type, 10 points", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/exercice-detartrant-conductimetrique.pdf" }
        ] }
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
