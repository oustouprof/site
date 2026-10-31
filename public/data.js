/* ============================================================
   CONTENU DU SITE : c'est le seul fichier à modifier pour ajouter
   des ressources.

   Une ressource :
   { type: "cours" | "activite" | "exercice" | "animation" | "video" | "maths",
     titre: "Titre affiché",
     desc: "Phrase facultative",
     date: "2026-11-05",
     groupe: "Nom de l'activité"   // facultatif : range les documents d'une rubrique en sous-rubriques
     fichier: "pdf/terminale-spe/titrages/cours.pdf"   // pour un PDF
     // ou  url: "https://..."                          // animation / capsule vidéo
   }
   RÈGLE : dès qu'une activité, un exercice ou un cours comporte plus d'un document
   (sujet + notice, énoncé + corrigé, etc.), tous ses documents reçoivent le même
   "groupe" : ils sont alors réunis dans une sous-rubrique portant ce nom.
   RÈGLE : ne jamais publier de fiche professeur. Si un PDF en contient une
   (pages « Fiche professeur » en fin de sujet), retirer ces pages avant la mise en ligne.
   Seuls le sujet et le corrigé des activités sont publiés. Uniquement des PDF.

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
        { id: "dosage-spectrophotometrique", titre: "Dosage par étalonnage spectrophotométrique", ressources: [
          { type: "activite", groupe: "Construction d'un spectre d'absorption (courbe d'absorbance)", titre: "Construction d'un spectre d'absorption (courbe d'absorbance) : groupe 1, le bleu patenté", desc: "Pourquoi une solution de bleu patenté nous paraît-elle bleue ?", date: "2026-10-30", fichier: "pdf/premiere-spe/dosage-spectrophotometrique/absorption-groupe1-bleu-patente.pdf" },
          { type: "activite", groupe: "Construction d'un spectre d'absorption (courbe d'absorbance)", titre: "Construction d'un spectre d'absorption (courbe d'absorbance) : groupe 2, la tartrazine", desc: "Pourquoi une solution de tartrazine nous paraît-elle jaune ?", date: "2026-10-30", fichier: "pdf/premiere-spe/dosage-spectrophotometrique/absorption-groupe2-tartrazine.pdf" },
          { type: "activite", groupe: "Construction d'un spectre d'absorption (courbe d'absorbance)", titre: "Construction d'un spectre d'absorption (courbe d'absorbance) : groupe 3, le mélange bleu patenté et tartrazine", desc: "Pourquoi le mélange d'une solution bleue et d'une solution jaune paraît-il vert ?", date: "2026-10-30", fichier: "pdf/premiere-spe/dosage-spectrophotometrique/absorption-groupe3-melange.pdf" },
          { type: "activite", groupe: "Construction d'un spectre d'absorption (courbe d'absorbance)", titre: "Construction d'un spectre d'absorption (courbe d'absorbance) : notice Regressi", desc: "Tracer le spectre d'absorption A = f(λ)", date: "2026-10-30", fichier: "pdf/premiere-spe/dosage-spectrophotometrique/absorption-notice-regressi.pdf" },
          { type: "activite", groupe: "Dosage par étalonnage spectrophotométrique de l'eau de Dakin", titre: "Dosage par étalonnage spectrophotométrique de l'eau de Dakin", desc: "Sujet type ECE, 1 h 30", date: "2026-10-30", fichier: "pdf/premiere-spe/dosage-spectrophotometrique/dakin-sujet.pdf" },
          { type: "activite", groupe: "Dosage par étalonnage spectrophotométrique de l'eau de Dakin", titre: "Dosage par étalonnage spectrophotométrique de l'eau de Dakin : notice Regressi", desc: "Tracer une droite d'étalonnage et déterminer une concentration inconnue", date: "2026-10-30", fichier: "pdf/premiere-spe/dosage-spectrophotometrique/dakin-notice-regressi.pdf" },
          { type: "activite", groupe: "Dosage par étalonnage spectrophotométrique de l'eau de Dakin", titre: "Dosage par étalonnage spectrophotométrique de l'eau de Dakin : exemple de mesures expérimentales", desc: "Absorbances des solutions étalons", date: "2026-10-30", fichier: "pdf/premiere-spe/dosage-spectrophotometrique/dakin-exemple-mesures.pdf" },
          { type: "exercice", titre: "Dosage par étalonnage spectrophotométrique : le colorant E133 d'un sirop de menthe glaciale", desc: "Exercice type, énoncé", date: "2026-10-30", fichier: "pdf/premiere-spe/dosage-spectrophotometrique/exercice-type-sirop-e133.pdf" }
        ] }
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
          { type: "cours", titre: "Titrage avec suivi pH-métrique et titrage avec suivi conductimétrique", desc: "Cours du chapitre, avec renvois (QR codes) vers la révision de Première, la simulation, les activités et les exercices types", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/cours-titrage-ph-metrique-conductimetrique.pdf" },
          { type: "activite", groupe: "Titrage avec suivi pH-métrique d'un vinaigre", titre: "Titrage avec suivi pH-métrique d'un vinaigre", desc: "Sujet type ECE (2 h) : titre massique du vinaigre, comparaison avec l'étiquette", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/tp1-vinaigre-ph-metrique-sujet.pdf" },
          { type: "activite", groupe: "Titrage avec suivi pH-métrique d'un vinaigre", titre: "Titrage avec suivi pH-métrique d'un vinaigre : notice Regressi", desc: "Saisie des mesures, méthode des tangentes et méthode de la dérivée", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/tp1-vinaigre-ph-metrique-notice-regressi.pdf" },
          { type: "activite", groupe: "Titrage avec suivi conductimétrique du Destop", titre: "Titrage avec suivi conductimétrique du Destop", desc: "Sujet type ECE (1 h) : titre massique en hydroxyde de sodium", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/tp2-destop-conductimetrique-sujet.pdf" },
          { type: "activite", groupe: "Titrage avec suivi conductimétrique du Destop", titre: "Titrage avec suivi conductimétrique du Destop : notice Regressi", desc: "Saisie des mesures et tracé de σ = f(VA)", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/tp2-destop-conductimetrique-notice-regressi.pdf" },
          { type: "activite", groupe: "Titrage avec suivi conductimétrique du Destop", titre: "Titrage avec suivi conductimétrique du Destop : exemple de mesures expérimentales", desc: "Mesures de conductivité pour exploiter le titrage", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/tp2-destop-conductimetrique-tableau-mesures.pdf" },
          { type: "exercice", groupe: "Rappels de Première sur le titrage : contrôle qualité d'une eau oxygénée", titre: "Rappels de Première sur le titrage : contrôle qualité d'une eau oxygénée", desc: "Exercice type", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/exercice-rappels-premiere-eau-oxygenee.pdf" },
          { type: "exercice", groupe: "Rappels de Première sur le titrage : contrôle qualité d'une eau oxygénée", titre: "Rappels de Première sur le titrage : contrôle qualité d'une eau oxygénée, corrigé", desc: "Corrigé de l'exercice type", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/exercice-rappels-premiere-eau-oxygenee-corrige.pdf" },
          { type: "exercice", titre: "Titrage avec suivi pH-métrique : un comprimé de vitamine C bien dosé ?", desc: "Exercice type, 10 points, durée conseillée 1 h", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/exercice-vitamine-c-ph-metrique.pdf" },
          { type: "exercice", titre: "Titrage avec suivi conductimétrique : un détartrant contre le calcaire", desc: "Exercice type, 10 points", date: "2026-10-30", fichier: "pdf/terminale-spe/titrages/exercice-detartrant-conductimetrique.pdf" },
          { type: "animation", titre: "Évolution des quantités de matière au cours d'un titrage", desc: "Simulation interactive : burette, bécher, nombre d'entités et courbe N = f(V)", date: "2026-10-30", url: "simulations/titrage-quantites-de-matiere.html" }
        ] },
        { id: "lunette-astronomique", titre: "La lunette astronomique", ressources: [
          { type: "cours", titre: "La lunette astronomique", desc: "Cours du chapitre : diamètre apparent, image d'un objet à l'infini, lunette afocale et grossissement, avec renvois vers les activités et les exercices", date: "2026-10-31", fichier: "pdf/terminale-spe/lunette-astronomique/cours-lunette-astronomique.pdf" },
          { type: "cours", titre: "Fiche résumé : rayons lumineux provenant d'un objet à l'infini et entrant dans une lentille convergente", desc: "Une page A4 : où se forme l'image d'un objet à l'infini", date: "2026-10-31", fichier: "pdf/terminale-spe/lunette-astronomique/fiche-resume-lentille-objet-infini.pdf" },
          { type: "activite", groupe: "De la lentille convergente à la lunette astronomique", titre: "De la lentille convergente à la lunette astronomique", desc: "Constructions graphiques : objet à l'infini, objet dans le plan focal objet, lunette afocale", date: "2026-10-31", fichier: "pdf/terminale-spe/lunette-astronomique/activite-lentille-a-lunette-sujet.pdf" },
          { type: "activite", groupe: "De la lentille convergente à la lunette astronomique", titre: "De la lentille convergente à la lunette astronomique, corrigé", desc: "Corrigé avec les figures complétées", date: "2026-10-31", fichier: "pdf/terminale-spe/lunette-astronomique/activite-lentille-a-lunette-corrige.pdf" },
          { type: "activite", groupe: "Objets et images « à l'infini »", titre: "Objets et images « à l'infini »", desc: "Activité expérimentale avec une lentille de distance focale 200 mm (autocollimation)", date: "2026-10-31", fichier: "pdf/terminale-spe/lunette-astronomique/tp-objets-images-infini-sujet.pdf" },
          { type: "activite", groupe: "Objets et images « à l'infini »", titre: "Objets et images « à l'infini », corrigé", desc: "Corrigé avec un exemple de mesures", date: "2026-10-31", fichier: "pdf/terminale-spe/lunette-astronomique/tp-objets-images-infini-corrige.pdf" },
          { type: "activite", groupe: "Mesurer un « cratère » avec une lunette astronomique", titre: "Mesurer un « cratère » avec une lunette astronomique", desc: "Sujet type ECE (1 h) : maquette de lunette afocale, diamètre du « cratère » et grossissement", date: "2026-10-31", fichier: "pdf/terminale-spe/lunette-astronomique/ece-mesurer-cratere-sujet.pdf" },
          { type: "activite", groupe: "Mesurer un « cratère » avec une lunette astronomique", titre: "Mesurer un « cratère » avec une lunette astronomique, corrigé", desc: "Corrigé avec un exemple de mesures (trou de 1,1 cm)", date: "2026-10-31", fichier: "pdf/terminale-spe/lunette-astronomique/ece-mesurer-cratere-corrige.pdf" },
          { type: "exercice", groupe: "La lunette astronomique : feuille d'exercices", titre: "La lunette astronomique : feuille d'exercices", desc: "4 exercices types et 2 exercices bilan type bac, adaptés de sujets de bac", date: "2026-10-31", fichier: "pdf/terminale-spe/lunette-astronomique/exercices-lunette-astronomique.pdf" },
          { type: "exercice", groupe: "La lunette astronomique : feuille d'exercices", titre: "La lunette astronomique : feuille d'exercices, corrigé", desc: "Exercice type 1 (questions 4 et 5), type 2 (partie B), type 4, bilan 1 (questions 8 à 10) et bilan 2", date: "2026-10-31", fichier: "pdf/terminale-spe/lunette-astronomique/exercices-lunette-astronomique-corrige.pdf" }
        ] },
        { id: "dosage-etalonnage", titre: "Dosage par étalonnage spectrophotométrique et dosage par étalonnage conductimétrique", ressources: [
          { type: "cours", titre: "Dosage par étalonnage spectrophotométrique et dosage par étalonnage conductimétrique", desc: "Cours du chapitre : rappels sur le dosage par étalonnage spectrophotométrique, puis dosage par étalonnage conductimétrique", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/cours-dosage-etalonnage.pdf" },
          { type: "cours", titre: "Rappels de Première : solides ioniques et dissolution dans l'eau", desc: "Fiche d'une page, prérequis du dosage par étalonnage conductimétrique", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/fiche-rappels-solides-ioniques.pdf" },
          { type: "activite", groupe: "Révision de Première : dosage par étalonnage spectrophotométrique", titre: "Révision de Première : dosage par étalonnage spectrophotométrique", desc: "À faire à la maison (1 h 30) : trois capsules vidéo, deux QCM, un résumé de cours à compléter et un sujet type", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/revision-premiere-spectro-sujet.pdf" },
          { type: "activite", groupe: "Révision de Première : dosage par étalonnage spectrophotométrique", titre: "Révision de Première : dosage par étalonnage spectrophotométrique, corrigé", desc: "Corrigé des QCM, du résumé de cours et du sujet type", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/revision-premiere-spectro-corrige.pdf" },
          { type: "activite", groupe: "Dosage par étalonnage conductimétrique d'une eau salée préparée par un aquariophile", titre: "Dosage par étalonnage conductimétrique d'une eau salée préparée par un aquariophile", desc: "Activité expérimentale : dilution, droite d'étalonnage σ = f(C), incertitude et z-score", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/eau-salee-sujet.pdf" },
          { type: "activite", groupe: "Dosage par étalonnage conductimétrique d'une eau salée préparée par un aquariophile", titre: "Dosage par étalonnage conductimétrique d'une eau salée préparée par un aquariophile : notice Regressi", desc: "Créer un tableau de valeurs, modéliser un nuage de points, exploiter la courbe au réticule", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/eau-salee-notice-regressi.pdf" },
          { type: "activite", groupe: "Dosage par étalonnage conductimétrique d'une eau salée préparée par un aquariophile", titre: "Dosage par étalonnage conductimétrique d'une eau salée préparée par un aquariophile, corrigé", desc: "Corrigé des quatre parties de l'activité", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/eau-salee-corrige.pdf" },
          { type: "activite", groupe: "Dosage par étalonnage conductimétrique d'une eau salée préparée par un aquariophile", titre: "Dosage par étalonnage conductimétrique d'une eau salée préparée par un aquariophile : exemple de résultats et exploitation chiffrée", desc: "Jeu de mesures de référence et exploitation complète", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/eau-salee-exemple-resultats.pdf" },
          { type: "exercice", groupe: "Dosage par étalonnage : feuille d'exercices", titre: "Dosage par étalonnage : feuille d'exercices", desc: "7 exercices : spectrophotométrie (spiruline, crème contre l'acné, sirop de grenadine) et conductimétrie", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/exercices-dosage-etalonnage.pdf" },
          { type: "exercice", groupe: "Dosage par étalonnage : feuille d'exercices", titre: "Dosage par étalonnage : feuille d'exercices, corrigé", desc: "Corrigé des 7 exercices", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/exercices-dosage-etalonnage-corrige.pdf" },
          { type: "exercice", groupe: "Évaluation QCM : dosage par étalonnage spectrophotométrique (sujet A)", titre: "Évaluation QCM : dosage par étalonnage spectrophotométrique (sujet A)", desc: "QCM de 9 questions, 15 min, calculatrice autorisée (permanganate de potassium)", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/evaluation-qcm-spectro-sujet-a.pdf" },
          { type: "exercice", groupe: "Évaluation QCM : dosage par étalonnage spectrophotométrique (sujet A)", titre: "Évaluation QCM : dosage par étalonnage spectrophotométrique (sujet A), corrigé", desc: "Grille de réponses et barème", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/evaluation-qcm-spectro-corrige-a.pdf" },
          { type: "exercice", groupe: "Évaluation QCM : dosage par étalonnage spectrophotométrique (sujet B)", titre: "Évaluation QCM : dosage par étalonnage spectrophotométrique (sujet B)", desc: "QCM de 9 questions, 15 min, calculatrice autorisée (diiode)", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/evaluation-qcm-spectro-sujet-b.pdf" },
          { type: "exercice", groupe: "Évaluation QCM : dosage par étalonnage spectrophotométrique (sujet B)", titre: "Évaluation QCM : dosage par étalonnage spectrophotométrique (sujet B), corrigé", desc: "Grille de réponses et barème", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/evaluation-qcm-spectro-corrige-b.pdf" },
          { type: "video", titre: "Absorbance et loi de Beer-Lambert", desc: "Capsule 1 de la révision de Première (10 min)", date: "2026-10-31", url: "https://youtu.be/P65SvG00qgA" },
          { type: "video", titre: "Couleur d'une solution et dosage par étalonnage", desc: "Capsule 2 de la révision de Première (15 min)", date: "2026-10-31", url: "https://youtu.be/5fk_-1Lnq-A" },
          { type: "video", titre: "Le geste expérimental, version ECE", desc: "Capsule 3 de la révision de Première (12 min)", date: "2026-10-31", url: "https://youtu.be/MCKHTuwwbY8" },
          { type: "video", titre: "Bonus : un exercice résolu au tableau", desc: "Calcul d'une concentration à partir d'une courbe d'étalonnage (8 min)", date: "2026-10-31", url: "https://youtu.be/DXaEzYwXc-I" }
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
