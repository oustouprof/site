/* ============================================================
   CONTENU DU SITE : c'est le seul fichier à modifier pour ajouter
   des ressources.

   Une ressource :
   { type: "cours" | "activite" | "exercice" | "evaluation" | "animation" | "video" | "maths",
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
   RÈGLE : sur le site, écrire les consignes avec des verbes à l'infinitif
   (« Choisir un chapitre », « Ouvrir le PDF »), jamais à l'impératif (« Choisis »).
   RÈGLE : les chapitres d'un niveau sont rangés dans l'ordre de la progression
   (Terminale spé : chap 1 acide-base, 2 ondes sonores et Doppler, 3 dosage par
   étalonnage, 4 lunette astronomique afocale, 5 titrages ; Première spé : quantité de matière,
   dosage par étalonnage spectrophotométrique, lentilles minces convergentes). Insérer un nouveau chapitre à sa place.
   RÈGLE : ne jamais publier de fiche professeur. Si un PDF en contient une
   (pages « Fiche professeur » en fin de sujet), retirer ces pages avant la mise en ligne.
   Seuls le sujet et le corrigé des activités sont publiés. Uniquement des PDF.

   Arborescence : niveau > chapitre > cours, activités, exercices, évaluations,
   animations et simulations, capsules vidéo, points maths. Les évaluations (sujets et
   corrigés) vont dans la rubrique « Évaluations » (type "evaluation"), pas dans Exercices. Un PDF se range dans pdf/<niveau>/<chapitre>/.
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
        { id: "quantite-de-matiere", titre: "Quantité de matière", ressources: [
          { type: "cours", titre: "Autour de la quantité de matière", desc: "Cours complet : quantité de matière et constante d'Avogadro, masse molaire, volume molaire, concentration, préparation d'une solution", date: "2026-10-31", fichier: "pdf/premiere-spe/quantite-de-matiere/cours-quantite-de-matiere.pdf" },
          { type: "activite", groupe: "La bouteille bleue (TP évalué)", titre: "La bouteille bleue (TP évalué)", desc: "Préparer une solution par dissolution, quantité de matière et concentration (1 h 30)", date: "2026-10-31", fichier: "pdf/premiere-spe/quantite-de-matiere/tp-bouteille-bleue-sujet.pdf" },
          { type: "activite", groupe: "La bouteille bleue (TP évalué)", titre: "La bouteille bleue (TP évalué) : grille d'évaluation", desc: "Évaluation des compétences", date: "2026-10-31", fichier: "pdf/premiere-spe/quantite-de-matiere/tp-bouteille-bleue-grille.pdf" },
          { type: "activite", groupe: "La bouteille bleue (TP évalué)", titre: "La bouteille bleue (TP évalué), corrigé", desc: "Corrigé et barème", date: "2026-10-31", fichier: "pdf/premiere-spe/quantite-de-matiere/tp-bouteille-bleue-corrige.pdf" },
          { type: "exercice", groupe: "Autour de la quantité de matière : feuille d'exercices", titre: "Autour de la quantité de matière : feuille d'exercices", desc: "8 exercices", date: "2026-10-31", fichier: "pdf/premiere-spe/quantite-de-matiere/exercices-quantite-de-matiere.pdf" },
          { type: "exercice", groupe: "Autour de la quantité de matière : feuille d'exercices", titre: "Autour de la quantité de matière : feuille d'exercices, corrigé", desc: "Les 8 exercices résolus pas à pas : la méthode, le calcul en entier et les points de vigilance", date: "2026-10-31", fichier: "pdf/premiere-spe/quantite-de-matiere/exercices-quantite-de-matiere-corrige.pdf" },
          { type: "evaluation", groupe: "Évaluation de 50 min (sujet A)", titre: "Évaluation de 50 min (sujet A)", desc: "QCM de cours et exercices, sur 20 points, calculatrice autorisée", date: "2026-10-31", fichier: "pdf/premiere-spe/quantite-de-matiere/evaluation-sujet-a.pdf" },
          { type: "evaluation", groupe: "Évaluation de 50 min (sujet A)", titre: "Évaluation de 50 min (sujet A), corrigé", desc: "Corrigé détaillé", date: "2026-10-31", fichier: "pdf/premiere-spe/quantite-de-matiere/evaluation-sujet-a-corrige.pdf" },
          { type: "evaluation", groupe: "Évaluation de 50 min (sujet B)", titre: "Évaluation de 50 min (sujet B)", desc: "QCM de cours et exercices, sur 20 points, calculatrice autorisée", date: "2026-10-31", fichier: "pdf/premiere-spe/quantite-de-matiere/evaluation-sujet-b.pdf" },
          { type: "evaluation", groupe: "Évaluation de 50 min (sujet B)", titre: "Évaluation de 50 min (sujet B), corrigé", desc: "Corrigé détaillé", date: "2026-10-31", fichier: "pdf/premiere-spe/quantite-de-matiere/evaluation-sujet-b-corrige.pdf" },
          { type: "evaluation", groupe: "Évaluation type bac de 1 h : du bicarbonate à la cartouche de CO2", titre: "Évaluation type bac de 1 h : du bicarbonate à la cartouche de CO2", desc: "Deux exercices indépendants, sur 20 points", date: "2026-10-31", fichier: "pdf/premiere-spe/quantite-de-matiere/evaluation-type-bac-sujet.pdf" },
          { type: "evaluation", groupe: "Évaluation type bac de 1 h : du bicarbonate à la cartouche de CO2", titre: "Évaluation type bac de 1 h : du bicarbonate à la cartouche de CO2, corrigé", desc: "Corrigé détaillé et barème", date: "2026-10-31", fichier: "pdf/premiere-spe/quantite-de-matiere/evaluation-type-bac-corrige.pdf" },
          { type: "evaluation", groupe: "Évaluation C de 1 h : solutions, dilution, masse volumique (permanganate de potassium)", titre: "Évaluation C de 1 h : solutions, dilution, masse volumique (permanganate de potassium)", desc: "Niveau soutenu, aucune formule fournie, sur 20 points", date: "2026-10-31", fichier: "pdf/premiere-spe/quantite-de-matiere/evaluation-c-permanganate-dilution-sujet.pdf" },
          { type: "evaluation", groupe: "Évaluation C de 1 h : solutions, dilution, masse volumique (permanganate de potassium)", titre: "Évaluation C de 1 h : solutions, dilution, masse volumique (permanganate de potassium), corrigé", desc: "Corrigé détaillé et barème", date: "2026-10-31", fichier: "pdf/premiere-spe/quantite-de-matiere/evaluation-c-permanganate-dilution-corrige.pdf" },
          { type: "maths", titre: "Fiche méthode : chiffres significatifs et analyse des unités", desc: "Combien de chiffres garder dans un résultat, et comment vérifier ou retrouver une formule grâce aux unités, avec applications", date: "2026-10-31", fichier: "pdf/premiere-spe/quantite-de-matiere/fiche-methode-chiffres-significatifs-unites.pdf" },
          { type: "maths", titre: "Le produit en croix", desc: "Méthode pour retrouver une quantité inconnue dans une égalité de deux fractions", date: "2026-10-31", fichier: "pdf/premiere-spe/quantite-de-matiere/fiche-produit-en-croix.pdf" }
        ] },
        { id: "lentilles-convergentes", titre: "Lentilles minces convergentes : la relation de conjugaison et le principe de la loupe", ressources: [
          { type: "cours", titre: "Lentilles convergentes : la relation de conjugaison et le principe de la loupe", desc: "Cours du chapitre : image d'un objet, relation de conjugaison, grandissement, image virtuelle et principe de la loupe", date: "2026-10-31", fichier: "pdf/premiere-spe/lentilles-convergentes/cours-lentilles-loupe.pdf" },
          { type: "activite", groupe: "Mise au point et relation de conjugaison", titre: "Mise au point et relation de conjugaison", desc: "Activité expérimentale (1 h 30, en binôme) : mise au point sur un banc optique, comme dans un appareil photo", date: "2026-10-31", fichier: "pdf/premiere-spe/lentilles-convergentes/tp-relation-conjugaison-sujet.pdf" },
          { type: "activite", groupe: "Mise au point et relation de conjugaison", titre: "Mise au point et relation de conjugaison : notice Regressi", desc: "Saisir les mesures, créer X et Y, modéliser par une fonction affine", date: "2026-10-31", fichier: "pdf/premiere-spe/lentilles-convergentes/tp-relation-conjugaison-notice-regressi.pdf" },
          { type: "activite", groupe: "La loupe : une image virtuelle… que l'œil sait voir !", titre: "La loupe : une image virtuelle… que l'œil sait voir !", desc: "Activité documentaire : image réelle et image virtuelle, principe optique de la loupe", date: "2026-10-31", fichier: "pdf/premiere-spe/lentilles-convergentes/act-doc-loupe-sujet.pdf" },
          { type: "activite", groupe: "La loupe : une image virtuelle… que l'œil sait voir !", titre: "La loupe : une image virtuelle… que l'œil sait voir !, corrigé", desc: "Éléments de correction", date: "2026-10-31", fichier: "pdf/premiere-spe/lentilles-convergentes/act-doc-loupe-corrige.pdf" },
          { type: "activite", groupe: "Construire une loupe", titre: "Construire une loupe", desc: "Activité expérimentale (1 h, en binôme) : une image qu'on voit… mais qu'on ne peut pas former sur un écran", date: "2026-10-31", fichier: "pdf/premiere-spe/lentilles-convergentes/tp-construire-une-loupe-sujet.pdf" },
          { type: "activite", groupe: "Construire une loupe", titre: "Construire une loupe, corrigé", desc: "Corrigé avec la construction graphique de l'image virtuelle et les calculs (relation de conjugaison, grandissement)", date: "2026-10-31", fichier: "pdf/premiere-spe/lentilles-convergentes/tp-construire-une-loupe-corrige.pdf" },
          { type: "exercice", groupe: "Retour sur les lentilles convergentes (travail à la maison)", titre: "Retour sur les lentilles convergentes (travail à la maison)", desc: "Révision des acquis de seconde : rappels avec capsules vidéo, exercice de construction, QCM et résumé à compléter (environ 1 h)", date: "2026-10-31", fichier: "pdf/premiere-spe/lentilles-convergentes/retour-lentilles-fiche.pdf" },
          { type: "exercice", groupe: "Retour sur les lentilles convergentes (travail à la maison)", titre: "Retour sur les lentilles convergentes (travail à la maison), corrigé", desc: "Corrigé de la construction, du QCM et du résumé de cours", date: "2026-10-31", fichier: "pdf/premiere-spe/lentilles-convergentes/retour-lentilles-corrige.pdf" },
          { type: "exercice", groupe: "Lentilles convergentes : feuille d'exercices", titre: "Lentilles convergentes : feuille d'exercices", desc: "Exercice 1 : la mise au point d'un appareil photo ; exercice 2 : la loupe du philatéliste (1 h)", date: "2026-10-31", fichier: "pdf/premiere-spe/lentilles-convergentes/exercices-lentilles-loupe.pdf" },
          { type: "exercice", groupe: "Lentilles convergentes : feuille d'exercices", titre: "Lentilles convergentes : feuille d'exercices, corrigé", desc: "Corrigé des exercices 1 et 2", date: "2026-10-31", fichier: "pdf/premiere-spe/lentilles-convergentes/exercices-lentilles-loupe-corrige.pdf" },
          { type: "video", titre: "Lentille mince convergente (Paul Olivier)", desc: "Capsule 1 de la révision : le vocabulaire de la lentille", date: "2026-10-31", url: "https://www.youtube.com/watch?v=7rjeXimQGfk" },
          { type: "video", titre: "Lentille mince convergente : construction de l'image (PCCL)", desc: "Capsule 2 de la révision : construire l'image d'un objet", date: "2026-10-31", url: "https://www.youtube.com/watch?v=gGWIvUpIg4E" },
          { type: "video", titre: "Lentille : construction de l'image et grandissement (Paul Olivier)", desc: "Capsule 3 de la révision : caractériser l'image avec le grandissement", date: "2026-10-31", url: "https://www.youtube.com/watch?v=kjxgnWVZa6I" },
          { type: "video", titre: "Les lentilles : foyers, image réelle, grandissement, œil (Nicolas Galiot)", desc: "Capsule 4 de la révision : le modèle de l'œil réduit", date: "2026-10-31", url: "https://www.youtube.com/watch?v=_JWc2igkbcQ" }
        ] },
        { id: "dosage-spectrophotometrique", titre: "Dosage par étalonnage spectrophotométrique", ressources: [
          { type: "activite", groupe: "Construction d'un spectre d'absorption (courbe d'absorbance)", titre: "Construction d'un spectre d'absorption (courbe d'absorbance) : groupe 1, le bleu patenté", desc: "Pourquoi une solution de bleu patenté nous paraît-elle bleue ?", date: "2026-10-30", fichier: "pdf/premiere-spe/dosage-spectrophotometrique/absorption-groupe1-bleu-patente.pdf" },
          { type: "activite", groupe: "Construction d'un spectre d'absorption (courbe d'absorbance)", titre: "Construction d'un spectre d'absorption (courbe d'absorbance) : groupe 2, la tartrazine", desc: "Pourquoi une solution de tartrazine nous paraît-elle jaune ?", date: "2026-10-30", fichier: "pdf/premiere-spe/dosage-spectrophotometrique/absorption-groupe2-tartrazine.pdf" },
          { type: "activite", groupe: "Construction d'un spectre d'absorption (courbe d'absorbance)", titre: "Construction d'un spectre d'absorption (courbe d'absorbance) : groupe 3, le mélange bleu patenté et tartrazine", desc: "Pourquoi le mélange d'une solution bleue et d'une solution jaune paraît-il vert ?", date: "2026-10-30", fichier: "pdf/premiere-spe/dosage-spectrophotometrique/absorption-groupe3-melange.pdf" },
          { type: "activite", groupe: "Construction d'un spectre d'absorption (courbe d'absorbance)", titre: "Construction d'un spectre d'absorption (courbe d'absorbance) : notice Regressi", desc: "Tracer le spectre d'absorption A = f(λ)", date: "2026-10-30", fichier: "pdf/premiere-spe/dosage-spectrophotometrique/absorption-notice-regressi.pdf" },
          { type: "activite", groupe: "Dosage par étalonnage spectrophotométrique de l'eau de Dakin", titre: "Dosage par étalonnage spectrophotométrique de l'eau de Dakin", desc: "Sujet type ECE, 1 h 30", date: "2026-10-30", fichier: "pdf/premiere-spe/dosage-spectrophotometrique/dakin-sujet.pdf" },
          { type: "activite", groupe: "Dosage par étalonnage spectrophotométrique de l'eau de Dakin", titre: "Dosage par étalonnage spectrophotométrique de l'eau de Dakin : notice Regressi", desc: "Tracer une droite d'étalonnage et déterminer une concentration inconnue", date: "2026-10-30", fichier: "pdf/premiere-spe/dosage-spectrophotometrique/dakin-notice-regressi.pdf" },
          { type: "activite", groupe: "Dosage par étalonnage spectrophotométrique de l'eau de Dakin", titre: "Dosage par étalonnage spectrophotométrique de l'eau de Dakin : exemple de mesures expérimentales", desc: "Absorbances des solutions étalons", date: "2026-10-30", fichier: "pdf/premiere-spe/dosage-spectrophotometrique/dakin-exemple-mesures.pdf" },
          { type: "exercice", titre: "Dosage par étalonnage spectrophotométrique : le colorant E133 d'un sirop de menthe glaciale", desc: "Exercice type, énoncé", date: "2026-10-30", fichier: "pdf/premiere-spe/dosage-spectrophotometrique/exercice-type-sirop-e133.pdf" },
          { type: "video", titre: "Le principe du dosage par étalonnage spectrophotométrique", date: "2026-10-31", url: "https://www.youtube.com/watch?v=FySfA2eKlhI" }
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
        { id: "transformations-acide-base", titre: "Les transformations acide-base", ressources: [
          { type: "cours", titre: "Les transformations acide-base", desc: "Cours du chapitre : transformations acide-base, couples acide-base, pH en solution aqueuse", date: "2026-10-31", fichier: "pdf/terminale-spe/transformations-acide-base/cours-transformations-acide-base.pdf" },
          { type: "cours", titre: "Fiche méthode : nomenclature des acides carboxyliques", desc: "Une page A4 : le groupe carboxyle et le nom des acides carboxyliques", date: "2026-10-31", fichier: "pdf/terminale-spe/transformations-acide-base/fiche-methode-acides-carboxyliques.pdf" },
          { type: "activite", groupe: "Vérification de la relation pH = −log([H₃O⁺]/c°)", titre: "Vérification de la relation pH = −log([H₃O⁺]/c°)", desc: "Activité expérimentale : dilutions successives d'une solution d'acide chlorhydrique et mesures de pH", date: "2026-10-31", fichier: "pdf/terminale-spe/transformations-acide-base/activite-ph-log-sujet.pdf" },
          { type: "activite", groupe: "Vérification de la relation pH = −log([H₃O⁺]/c°)", titre: "Vérification de la relation pH = −log([H₃O⁺]/c°) : notice Regressi", desc: "Créer un tableau de mesures et afficher graphiquement les points expérimentaux", date: "2026-10-31", fichier: "pdf/terminale-spe/transformations-acide-base/activite-ph-log-notice-regressi.pdf" },
          { type: "activite", groupe: "Vérification de la relation pH = −log([H₃O⁺]/c°)", titre: "Vérification de la relation pH = −log([H₃O⁺]/c°), corrigé", desc: "Corrigé de l'activité", date: "2026-10-31", fichier: "pdf/terminale-spe/transformations-acide-base/activite-ph-log-corrige.pdf" },
          { type: "exercice", titre: "Les transformations acide-base : fiche d'exercices", desc: "7 exercices d'application du cours", date: "2026-10-31", fichier: "pdf/terminale-spe/transformations-acide-base/exercices-transformations-acide-base.pdf" },
          { type: "evaluation", groupe: "Évaluation de 50 min : QCM de cours et exercice type bac (la triméthylamine)", titre: "Évaluation de 50 min : QCM de cours et exercice type bac (la triméthylamine)", desc: "Sur 20 points, calculatrice autorisée", date: "2026-10-31", fichier: "pdf/terminale-spe/transformations-acide-base/evaluation-50min-sujet.pdf" },
          { type: "evaluation", groupe: "Évaluation de 50 min : QCM de cours et exercice type bac (la triméthylamine)", titre: "Évaluation de 50 min : QCM de cours et exercice type bac (la triméthylamine), corrigé", desc: "Corrigé et barème", date: "2026-10-31", fichier: "pdf/terminale-spe/transformations-acide-base/evaluation-50min-corrige.pdf" },
          { type: "evaluation", groupe: "Évaluation de 30 min : l'acide propanoïque, conservateur du pain de mie (sujet A)", titre: "Évaluation de 30 min : l'acide propanoïque, conservateur du pain de mie (sujet A)", desc: "Sur 20 points, calculatrice autorisée", date: "2026-10-31", fichier: "pdf/terminale-spe/transformations-acide-base/evaluation-propanoique-sujet.pdf" },
          { type: "evaluation", groupe: "Évaluation de 30 min : l'acide propanoïque, conservateur du pain de mie (sujet A)", titre: "Évaluation de 30 min : l'acide propanoïque, conservateur du pain de mie (sujet A), corrigé", desc: "Corrigé et barème détaillé", date: "2026-10-31", fichier: "pdf/terminale-spe/transformations-acide-base/evaluation-propanoique-corrige.pdf" },
          { type: "evaluation", groupe: "Évaluation de 30 min : l'acide lactique, conservateur des produits laitiers (sujet B)", titre: "Évaluation de 30 min : l'acide lactique, conservateur des produits laitiers (sujet B)", desc: "Sur 20 points, calculatrice autorisée", date: "2026-10-31", fichier: "pdf/terminale-spe/transformations-acide-base/evaluation-lactique-sujet.pdf" },
          { type: "evaluation", groupe: "Évaluation de 30 min : l'acide lactique, conservateur des produits laitiers (sujet B)", titre: "Évaluation de 30 min : l'acide lactique, conservateur des produits laitiers (sujet B), corrigé", desc: "Corrigé et barème détaillé", date: "2026-10-31", fichier: "pdf/terminale-spe/transformations-acide-base/evaluation-lactique-corrige.pdf" }
        ] },
        { id: "ondes-sonores-doppler", titre: "Les ondes sonores et l'effet Doppler", ressources: [
          { type: "cours", titre: "Les ondes sonores et l'effet Doppler", desc: "Cours du chapitre : intensité sonore, niveau d'intensité sonore, atténuation, effet Doppler", date: "2026-10-31", fichier: "pdf/terminale-spe/ondes-sonores-doppler/cours-ondes-sonores-doppler.pdf" },
          { type: "maths", titre: "Les propriétés du logarithme décimal : la touche « log »", desc: "Point maths, utile pour le niveau d'intensité sonore", date: "2026-10-31", fichier: "pdf/terminale-spe/ondes-sonores-doppler/point-maths-logarithme-decimal.pdf" },
          { type: "video", titre: "L'effet Doppler : le son d'une formule 1 qui passe", desc: "Le son se rapproche puis s'éloigne d'un récepteur (vidéo citée dans le cours)", date: "2026-10-31", url: "https://www.youtube.com/watch?v=jSJBk8FDf8g" },
          { type: "exercice", groupe: "Les ondes sonores et l'effet Doppler : feuille d'exercices", titre: "Les ondes sonores et l'effet Doppler : feuille d'exercices", desc: "9 exercices : intensité sonore, niveau d'intensité sonore, atténuation et effet Doppler", date: "2026-10-31", fichier: "pdf/terminale-spe/ondes-sonores-doppler/exercices-ondes-sonores-doppler.pdf" },
          { type: "exercice", groupe: "Les ondes sonores et l'effet Doppler : feuille d'exercices", titre: "Les ondes sonores et l'effet Doppler : feuille d'exercices, corrigé", desc: "Corrigé succinct des 9 exercices", date: "2026-10-31", fichier: "pdf/terminale-spe/ondes-sonores-doppler/exercices-ondes-sonores-doppler-corrige.pdf" },
          { type: "evaluation", groupe: "L'écholocation chez la chauve-souris (sujet A)", titre: "L'écholocation chez la chauve-souris (sujet A)", desc: "Ondes sonores et effet Doppler, 45 min, sur 20 points, calculatrice autorisée", date: "2026-10-31", fichier: "pdf/terminale-spe/ondes-sonores-doppler/evaluation-echolocation-sujet-a.pdf" },
          { type: "evaluation", groupe: "L'écholocation chez la chauve-souris (sujet A)", titre: "L'écholocation chez la chauve-souris (sujet A), corrigé", desc: "Corrigé et barème", date: "2026-10-31", fichier: "pdf/terminale-spe/ondes-sonores-doppler/evaluation-echolocation-corrige-a.pdf" },
          { type: "evaluation", groupe: "L'écholocation chez la chauve-souris (sujet B)", titre: "L'écholocation chez la chauve-souris (sujet B)", desc: "Ondes sonores et effet Doppler, 45 min, sur 20 points, calculatrice autorisée", date: "2026-10-31", fichier: "pdf/terminale-spe/ondes-sonores-doppler/evaluation-echolocation-sujet-b.pdf" },
          { type: "evaluation", groupe: "L'écholocation chez la chauve-souris (sujet B)", titre: "L'écholocation chez la chauve-souris (sujet B), corrigé", desc: "Corrigé et barème", date: "2026-10-31", fichier: "pdf/terminale-spe/ondes-sonores-doppler/evaluation-echolocation-corrige-b.pdf" }
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
          { type: "evaluation", groupe: "QCM : dosage par étalonnage spectrophotométrique (sujet A)", titre: "QCM : dosage par étalonnage spectrophotométrique (sujet A)", desc: "QCM de 9 questions, 15 min, calculatrice autorisée (permanganate de potassium)", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/evaluation-qcm-spectro-sujet-a.pdf" },
          { type: "evaluation", groupe: "QCM : dosage par étalonnage spectrophotométrique (sujet A)", titre: "QCM : dosage par étalonnage spectrophotométrique (sujet A), corrigé", desc: "Grille de réponses et barème", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/evaluation-qcm-spectro-corrige-a.pdf" },
          { type: "evaluation", groupe: "QCM : dosage par étalonnage spectrophotométrique (sujet B)", titre: "QCM : dosage par étalonnage spectrophotométrique (sujet B)", desc: "QCM de 9 questions, 15 min, calculatrice autorisée (diiode)", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/evaluation-qcm-spectro-sujet-b.pdf" },
          { type: "evaluation", groupe: "QCM : dosage par étalonnage spectrophotométrique (sujet B)", titre: "QCM : dosage par étalonnage spectrophotométrique (sujet B), corrigé", desc: "Grille de réponses et barème", date: "2026-10-31", fichier: "pdf/terminale-spe/dosage-etalonnage/evaluation-qcm-spectro-corrige-b.pdf" },
          { type: "video", titre: "Absorbance et loi de Beer-Lambert", desc: "Capsule 1 de la révision de Première (10 min)", date: "2026-10-31", url: "https://youtu.be/P65SvG00qgA" },
          { type: "video", titre: "Couleur d'une solution et dosage par étalonnage", desc: "Capsule 2 de la révision de Première (15 min)", date: "2026-10-31", url: "https://youtu.be/5fk_-1Lnq-A" },
          { type: "video", titre: "Le geste expérimental, version ECE", desc: "Capsule 3 de la révision de Première (12 min)", date: "2026-10-31", url: "https://youtu.be/MCKHTuwwbY8" },
          { type: "video", titre: "Bonus : un exercice résolu au tableau", desc: "Calcul d'une concentration à partir d'une courbe d'étalonnage (8 min)", date: "2026-10-31", url: "https://youtu.be/DXaEzYwXc-I" }
        ] },
        { id: "lunette-astronomique", titre: "La lunette astronomique afocale", ressources: [
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
