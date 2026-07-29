export interface Intervention {
  slug: string;
  name: string;
  category: 'Silhouette' | 'Seins' | 'Visage' | 'Cheveux' | 'Intime' | 'Obésité' | 'Dentaire' | 'Fertilité' | 'Médecine esthétique';
  tagline: string;
  metaTitle: string;
  metaDesc: string;
  description: string[];
  indications: string[];
  contreIndications: string[];
  deroulement: { t: string; d: string }[];
  suites: { phase: string; desc: string }[];
  resultats: string[];
  faq: { q: string; a: string }[];
  prix: string;
  prixInclus: string;
  sejour: string;
  duree: string;
}

export const interventions: Intervention[] = [
  {
    slug: 'liposuccion',
    name: 'Liposuccion',
    category: 'Silhouette',
    tagline: 'Sculpture du corps par aspiration des graisses localisées. Technique VASER ou traditionnelle selon vos besoins.',
    metaTitle: 'Liposuccion Tunisie — Prix, chirurgiens & résultats | Health Travel',
    metaDesc: 'Liposuccion en Tunisie avec Health Travel. Chirurgiens certifiés, cliniques modernes, devis personnalisé sous 24h.',
    description: [
      "La liposuccion reste l'une des interventions de chirurgie esthétique les plus demandées en Tunisie. Cette technique permet d'éliminer définitivement les amas graisseux localisés résistants au régime et au sport — ventre, hanches, cuisses, bras, double menton. Chez Health Travel, nous proposons la liposuccion traditionnelle, la liposuccion VASER (ultrasons) et la liposculpture pour un résultat sculpté et naturel.",
      "Contrairement aux idées reçues, la liposuccion n'est pas une méthode d'amaigrissement mais une technique de remodelage du corps. Les cellules graisseuses aspirées ne se régénèrent pas ; un protocole nutritionnel post-opératoire vous aide à maintenir vos résultats sur le long terme."
    ],
    indications: [
      'Bonne santé générale (IMC < 30 idéalement)',
      'Zones de graisse localisées résistantes au sport',
      'Peau présentant une bonne élasticité',
      'Attentes réalistes',
      'Non-fumeuse ou arrêt 1 mois avant et après'
    ],
    contreIndications: [
      'Troubles de la coagulation',
      'Maladies cardiaques sévères',
      'Diabète non contrôlé',
      'Grossesse ou allaitement',
      'Antécédents de thrombose veineuse profonde',
      'Obésité morbide (IMC > 35)'
    ],
    deroulement: [
      { t: 'Consultation', d: 'Analyse morphologique, marquage des zones, simulation des résultats.' },
      { t: 'Anesthésie', d: 'Générale pour les grandes zones, locale + sédation pour les petites zones.' },
      { t: 'Incisions', d: '2 à 4 mm, dissimulées dans les plis naturels.' },
      { t: 'Infiltration', d: 'Solution tumescente pour réduire saignements et douleur.' },
      { t: 'Aspiration', d: 'Canules fines, mouvements contrôlés, symétrie vérifiée en temps réel.' },
      { t: 'Fermeture', d: 'Sutures fines, pansement compressif, gaine de contention.' }
    ],
    suites: [
      { phase: 'J1 – J3', desc: 'Œdèmes et ecchymoses normaux. Douleur modérée, gérée par antalgiques.' },
      { phase: 'J4 – J7', desc: 'Retrait des drains si présents. Première douche autorisée.' },
      { phase: 'J8 – J14', desc: 'Reprise des activités légères. Port de la gaine 23h/24.' },
      { phase: 'J15 – J30', desc: 'Œdèmes en régression. Résultat visible à 70 %.' },
      { phase: 'J30 – J90', desc: 'Résultat à 90 %. Reprise du sport léger.' },
      { phase: 'J90 – J180', desc: 'Résultat définitif. Peau rétractée, silhouette stabilisée.' }
    ],
    resultats: [
      'Silhouette affinée et harmonieuse',
      'Élimination définitive des cellules graisseuses traitées',
      'Résultat maintenu en cas de prise de poids modérée',
      'Confiance en soi restaurée'
    ],
    faq: [
      { q: 'La liposuccion fait-elle maigrir ?', a: "Non, elle sculpte la silhouette en éliminant les graisses localisées. Ce n'est pas une méthode d'amaigrissement." },
      { q: 'Les résultats sont-ils permanents ?', a: 'Oui, les cellules graisseuses aspirées ne reviennent pas, à condition de maintenir un poids stable.' },
      { q: 'Y a-t-il des cicatrices ?', a: 'Des micro-incisions de 2 à 4 mm, dissimulées dans les plis naturels et quasi invisibles après quelques mois.' },
      { q: 'Quand puis-je reprendre le sport ?', a: 'Marche dès J+3, sport léger à 4 semaines, sport intense à 6 semaines.' },
      { q: 'La liposuccion VASER est-elle meilleure ?', a: 'Plus précise pour la sculpture et moins traumatisante pour les tissus, avec une meilleure rétraction cutanée.' },
      { q: 'Puis-je combiner avec un BBL ?', a: "Oui, c'est le combo le plus populaire : la graisse aspirée est purifiée puis réinjectée dans les fesses." }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '1 à 3 heures'
  },
  {
    slug: 'bbl',
    name: 'BBL (Brazilian Butt Lift)',
    category: 'Silhouette',
    tagline: 'Augmentation naturelle des fesses par transfert de graisse autologue. Double bénéfice : affinement et galbe.',
    metaTitle: 'BBL Tunisie — Prix, sécurité & résultats naturels | Health Travel',
    metaDesc: 'BBL en Tunisie avec chirurgiens spécialisés. Injection superficielle sécurisée, résultat naturel, devis sous 24h.',
    description: [
      "Le BBL est l'intervention la plus demandée chez Health Travel. Elle consiste à prélever votre propre graisse par liposuccion (ventre, hanches, cuisses), à la purifier, puis à la réinjecter dans les fesses pour un galbe naturel et harmonieux. Double bénéfice : les zones donneuses sont affinées pendant que les fesses sont remodelées.",
      "La sécurité est notre priorité absolue : nos chirurgiens appliquent les protocoles internationaux avec injection strictement superficielle (sous-cutanée, jamais intramusculaire), ce qui élimine le risque d'embolie graisseuse. Le volume injecté est calculé selon votre morphologie pour un résultat proportionné, jamais artificiel."
    ],
    indications: [
      'IMC idéalement entre 22 et 28',
      'Zones donneuses de graisse suffisantes',
      'Bonne qualité de peau',
      'Attentes réalistes et morphologie compatible',
      'Possibilité de ne pas s\'asseoir 3 semaines'
    ],
    contreIndications: [
      'Maigreur excessive (graisse donneuse insuffisante)',
      'Troubles de la coagulation',
      'Maladies cardiovasculaires sévères',
      'Grossesse ou allaitement',
      'Tabagisme sans arrêt possible'
    ],
    deroulement: [
      { t: 'Consultation', d: 'Évaluation des zones donneuses, calcul du volume optimal, simulation.' },
      { t: 'Anesthésie générale', d: 'Intervention de 2 à 3 heures sous anesthésie générale.' },
      { t: 'Liposuccion', d: 'Aspiration douce de la graisse sur les zones donneuses.' },
      { t: 'Purification', d: 'Centrifugation et filtrage de la graisse pour ne garder que les cellules viables.' },
      { t: 'Injection', d: 'Réinjection superficielle en multicouches pour un galbe naturel et symétrique.' },
      { t: 'Gaine & suivi', d: 'Mise en place de la gaine, surveillance en salle de réveil.' }
    ],
    suites: [
      { phase: 'J1 – J7', desc: 'Position debout ou allongée sur le ventre. Aucune assise directe. Œdèmes normaux.' },
      { phase: 'S2 – S3', desc: 'Assise uniquement avec coussin BBL. Sommeil sur le ventre ou le côté.' },
      { phase: 'S4 – S6', desc: 'Reprise progressive de la position assise. Port de la gaine continu.' },
      { phase: 'M2 – M3', desc: 'Environ 60 à 70 % de la graisse greffée devient définitive. Résultat quasi final.' },
      { phase: 'M3+', desc: 'Résultat définitif et stable si poids maintenu.' }
    ],
    resultats: [
      'Fesses galbées et naturelles, proportionnées à votre morphologie',
      'Silhouette affinée sur les zones donneuses',
      'Résultat définitif après 3 mois',
      'Aucune prothèse, aucun corps étranger'
    ],
    faq: [
      { q: 'Le BBL est-il dangereux ?', a: "Non quand il est réalisé par un chirurgien spécialisé avec injection superficielle. Nos chirurgiens suivent strictement les protocoles de sécurité internationaux." },
      { q: 'Combien de temps sans m\'asseoir ?', a: '3 semaines minimum sans assise directe, puis avec coussin BBL jusqu\'à 6 semaines.' },
      { q: 'Le résultat est-il définitif ?', a: 'Oui, 60 à 70 % de la graisse greffée devient permanente après 3 mois, si votre poids reste stable.' },
      { q: 'Puis-je dormir sur le dos ?', a: 'Non, jamais pendant 3 semaines. Sur le ventre ou le côté uniquement.' },
      { q: 'Le prix inclut-il la liposuccion ?', a: 'Oui, le BBL est un package complet : liposuccion des zones donneuses + purification + injection.' },
      { q: 'Que se passe-t-il si je perds du poids après ?', a: 'Une perte modérée n\'altère pas le résultat. Une perte massive peut réduire le volume des fesses.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '2 à 3 heures'
  },
  {
    slug: 'abdominoplastie',
    name: 'Abdominoplastie',
    category: 'Silhouette',
    tagline: 'Remise en tension de la paroi abdominale avec repositionnement du nombril. Idéale après grossesses ou perte de poids.',
    metaTitle: 'Abdominoplastie Tunisie — Prix & résultats | Health Travel',
    metaDesc: 'Abdominoplastie en Tunisie : ventre plat après grossesse ou perte de poids. Chirurgiens certifiés, devis sous 24h.',
    description: [
      "L'abdominoplastie (plastie abdominale) corrige le relâchement de la peau et des muscles du ventre. Elle est particulièrement indiquée après une ou plusieurs grossesses, ou après une perte de poids importante ayant laissé un excès de peau et un diastasis (écartement) des muscles abdominaux.",
      "L'intervention retire l'excès de peau et de graisse, resserre les muscles de la paroi abdominale et repositionne le nombril pour un ventre plat et tonique. Les vergetures situées sous le nombril sont généralement excisées avec l'excès de peau. La cicatrice, placée très bas, est dissimulée sous le maillot de bain."
    ],
    indications: [
      'Excès de peau abdominale après grossesse ou amaigrissement',
      'Diastasis des muscles grands droits',
      'Poids stable depuis 3 à 6 mois (IMC < 28 recommandé)',
      'Projets de grossesse terminés',
      'Non-fumeuse ou arrêt 1 mois avant et après'
    ],
    contreIndications: [
      'Projet de grossesse à court ou moyen terme',
      'Obésité (IMC > 32)',
      'Troubles de la coagulation',
      'Diabète non contrôlé',
      'Cicatrices abdominales multiples à évaluer'
    ],
    deroulement: [
      { t: 'Consultation', d: 'Évaluation du relâchement cutané et musculaire, choix de la technique (mini ou complète).' },
      { t: 'Anesthésie générale', d: 'Intervention de 2 à 3 heures.' },
      { t: 'Incision', d: 'Incision basse au niveau du pubis, dissimulée sous les sous-vêtements.' },
      { t: 'Réparation musculaire', d: 'Resserrement des muscles abdominaux (cure du diastasis).' },
      { t: 'Redrapage', d: 'Retrait de l\'excès de peau, repositionnement du nombril, tension harmonieuse.' },
      { t: 'Fermeture', d: 'Sutures fines en plusieurs plans, drains, gaine de contention.' }
    ],
    suites: [
      { phase: 'J1 – J3', desc: 'Position fléchie (buste et jambes légèrement relevés). Marche dès J+1.' },
      { phase: 'J4 – J10', desc: 'Retrait des drains. Douches autorisées. Marche quotidienne encouragée.' },
      { phase: 'S2 – S4', desc: 'Station debout progressive. Port de la gaine 24h/24.' },
      { phase: 'M1 – M2', desc: 'Reprise du travail de bureau. Activités légères.' },
      { phase: 'M3 – M6', desc: 'Reprise du sport. La cicatrice s\'estompe progressivement.' },
      { phase: 'M12', desc: 'Résultat définitif, cicatrice fine et pâle.' }
    ],
    resultats: [
      'Ventre plat et paroi abdominale retendue',
      'Suppression de l\'excès de peau et des vergetures basses',
      'Tour de taille affiné',
      'Cicatrice basse dissimulée, s\'estompant sur 12 à 18 mois'
    ],
    faq: [
      { q: 'L\'abdominoplastie enlève-t-elle les vergetures ?', a: 'Celles situées sous le nombril sont excisées avec l\'excès de peau. Celles au-dessus deviennent souvent moins visibles après tension.' },
      { q: 'Puis-je tomber enceinte après ?', a: 'Oui, mais une nouvelle grossesse peut altérer le résultat. Nous recommandons d\'attendre la fin de vos projets de grossesse.' },
      { q: 'Où se situe la cicatrice ?', a: 'Très basse, au niveau du pubis, dissimulée sous le maillot de bain ou les sous-vêtements.' },
      { q: 'Quelle différence avec une mini-abdominoplastie ?', a: 'La mini concerne uniquement la zone sous le nombril, sans repositionnement de celui-ci. Le chirurgien détermine la technique adaptée.' },
      { q: 'Quand puis-je reprendre le sport ?', a: 'Marche dès J+3, sport léger à 6 semaines, gainage et abdominaux à 3 mois.' },
      { q: 'La gaine est-elle obligatoire ?', a: 'Oui, 6 à 8 semaines, jour et nuit les 3 premières semaines.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '2 à 3 heures'
  },
  {
    slug: 'mommy-makeover',
    name: 'Mommy Makeover',
    category: 'Silhouette',
    tagline: 'Combinaison personnalisée (ventre + seins + liposuccion) pour restaurer la silhouette post-grossesse.',
    metaTitle: 'Mommy Makeover Tunisie — Package complet | Health Travel',
    metaDesc: 'Mommy Makeover en Tunisie : abdominoplastie + seins + liposuccion en une seule intervention. Devis sous 24h.',
    description: [
      "Le Mommy Makeover est le package le plus complet de la chirurgie post-grossesse. Il combine en une seule intervention une abdominoplastie, une liposuccion des flancs et une correction des seins (augmentation, réduction ou lifting selon vos besoins). Une seule anesthésie, une seule convalescence, une silhouette entièrement restaurée.",
      "Chaque Mommy Makeover est entièrement personnalisé lors de la consultation vidéo : le chirurgien évalue votre morphologie, la qualité de vos tissus et vos objectifs pour composer le programme optimal. C'est l'intervention qui transforme le plus profondément la silhouette — et la confiance en soi."
    ],
    indications: [
      'Silhouette modifiée par une ou plusieurs grossesses',
      'Relâchement abdominal + ptose ou perte de volume mammaire',
      'Poids stable, IMC < 28 recommandé',
      'Allaitement terminé depuis au moins 6 mois',
      'Projets de grossesse terminés'
    ],
    contreIndications: [
      'Anémie ou troubles de la coagulation',
      'Tabagisme actif',
      'Diabète non contrôlé',
      'Projet de grossesse futur',
      'IMC > 32'
    ],
    deroulement: [
      { t: 'Consultation approfondie', d: 'Programme personnalisé : choix des interventions combinées et de leur ordre.' },
      { t: 'Anesthésie générale', d: 'Intervention de 3 à 4 heures, surveillance renforcée.' },
      { t: 'Liposuccion', d: 'Affinement des flancs et de la taille en premier temps.' },
      { t: 'Abdominoplastie', d: 'Réparation musculaire et redrapage abdominal.' },
      { t: 'Chirurgie mammaire', d: 'Augmentation, réduction ou lifting selon le programme validé.' },
      { t: 'Hospitalisation', d: '2 nuits en clinique avec surveillance rapprochée.' }
    ],
    suites: [
      { phase: 'J1 – J7', desc: 'Repos complet, position fléchie, soutien-gorge post-opératoire + gaine.' },
      { phase: 'S2 – S3', desc: 'Marche quotidienne, activités très légères. Aide à domicile recommandée.' },
      { phase: 'S4 – S6', desc: 'Reprise progressive du travail non physique.' },
      { phase: 'M2 – M3', desc: 'Reprise du sport léger. Œdèmes en forte régression.' },
      { phase: 'M6 – M12', desc: 'Résultat définitif complet.' }
    ],
    resultats: [
      'Silhouette globalement restaurée : ventre plat, taille affinée, seins raffermis',
      'Une seule convalescence pour trois interventions',
      'Résultat harmonieux et durable',
      'Retour de confiance spectaculaire'
    ],
    faq: [
      { q: 'Combien d\'interventions peut-on combiner ?', a: 'Généralement 3 : abdominoplastie, liposuccion et chirurgie des seins. Le chirurgien valide la faisabilité selon votre état de santé.' },
      { q: 'La convalescence est-elle plus longue ?', a: 'Non, c\'est l\'avantage du package : une seule convalescence de 2 à 4 semaines au lieu de trois.' },
      { q: 'Puis-je allaiter après un Mommy Makeover ?', a: 'L\'allaitement doit être terminé depuis 6 mois avant l\'intervention. Selon la technique mammaire, l\'allaitement futur peut rester possible.' },
      { q: 'Quel est le prix par rapport aux interventions séparées ?', a: 'Le package est 20 à 30 % moins cher que les mêmes interventions réalisées séparément.' },
      { q: 'Combien de temps d\'arrêt de travail ?', a: 'Comptez 3 à 4 semaines pour un travail de bureau, et organisez de l\'aide pour les enfants les 2 premières semaines.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '3 à 4 heures'
  },
  {
    slug: 'augmentation-mammaire',
    name: 'Augmentation mammaire',
    category: 'Seins',
    tagline: 'Prothèses haut de gamme (Mentor, Motiva) ou lipofilling selon votre morphologie. Résultat naturel et proportionné.',
    metaTitle: 'Augmentation mammaire Tunisie — Prix & prothèses | Health Travel',
    metaDesc: 'Augmentation mammaire en Tunisie : prothèses Mentor & Motiva, résultat naturel, chirurgiens certifiés. Devis 24h.',
    description: [
      "L'augmentation mammaire restaure ou crée un volume harmonieux, adapté à votre morphologie. Nous utilisons exclusivement des prothèses haut de gamme (Mentor, Motiva) garanties 10 ans par le fabricant, ou le lipofilling (injection de votre propre graisse) pour une augmentation modérée et totalement naturelle.",
      "Le choix de la taille, de la forme (ronde ou anatomique) et de la position (sous-musculaire ou sous-glandulaire) se fait avec le chirurgien à l'aide de sizers lors de la consultation. Notre philosophie : un résultat qui vous ressemble, en mieux — jamais artificiel."
    ],
    indications: [
      'Seins jugés trop petits ou asymétriques',
      'Perte de volume après grossesse ou amaigrissement',
      'Développement mammaire insuffisant',
      'Attentes réalistes, morphologie évaluée en consultation',
      'Mammographie récente si > 40 ans'
    ],
    contreIndications: [
      'Grossesse ou allaitement',
      'Antécédents mammaires non stabilisés (à évaluer)',
      'Maladies auto-immunes actives',
      'Troubles de la coagulation',
      'Infection cutanée locale'
    ],
    deroulement: [
      { t: 'Consultation', d: 'Essai de sizers, choix de la prothèse, de la voie d\'abord et de la position.' },
      { t: 'Anesthésie générale', d: 'Intervention de 1 à 1h30.' },
      { t: 'Incision', d: 'Sous-mammaire, axillaire ou péri-aréolaire selon votre anatomie.' },
      { t: 'Positionnement', d: 'Création de la loge, placement de la prothèse sous le muscle ou la glande.' },
      { t: 'Vérification', d: 'Symétrie contrôlée en position assise.' },
      { t: 'Fermeture', d: 'Sutures fines, soutien-gorge post-opératoire.' }
    ],
    suites: [
      { phase: 'J1 – J7', desc: 'Sensation de tension normale. Repos, soutien-gorge 24h/24.' },
      { phase: 'S2', desc: 'Reprise du travail de bureau possible.' },
      { phase: 'S4 – S6', desc: 'Reprise du sport léger (pas de bras intensifs).' },
      { phase: 'M3 – M6', desc: 'Les seins prennent leur forme définitive et s\'assouplissent.' }
    ],
    resultats: [
      'Volume harmonieux et proportionné à votre silhouette',
      'Toucher naturel, notamment en position sous-musculaire',
      'Prothèses garanties 10 ans par le fabricant',
      'Cicatrice fine de 4-5 cm dissimulée'
    ],
    faq: [
      { q: 'Les prothèses sont-elles garanties à vie ?', a: 'Les prothèses modernes ont une garantie fabricant de 10 ans. Un suivi échographique ou IRM tous les 2 ans est recommandé.' },
      { q: 'Vais-je perdre la sensibilité des seins ?', a: 'Une altération temporaire est possible (20 % des cas), généralement résolue en 3 à 6 mois. Une perte définitive est rare (< 1 %).' },
      { q: 'Prothèses ou lipofilling ?', a: 'Le lipofilling convient à une augmentation modérée (+1 bonnet) avec graisse disponible. Les prothèses permettent un gain plus important et prévisible.' },
      { q: 'Puis-je allaiter après ?', a: 'Oui, dans la grande majorité des cas, notamment avec une incision sous-mammaire.' },
      { q: 'Quand les prothèses doivent-elles être changées ?', a: 'Pas de date d\'expiration systématique : un changement n\'est envisagé qu\'en cas de problème détecté au suivi.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '1 à 1h30'
  },
  {
    slug: 'reduction-mammaire',
    name: 'Réduction mammaire',
    category: 'Seins',
    tagline: 'Soulagement des douleurs dorsales et silhouette allégée. Retrait de l\'excès glandulaire et remontée des seins.',
    metaTitle: 'Réduction mammaire Tunisie — Prix & résultats | Health Travel',
    metaDesc: 'Réduction mammaire en Tunisie : soulagez vos douleurs, retrouvez légèreté et harmonie. Devis gratuit sous 24h.',
    description: [
      "La réduction mammaire soulage les douleurs du dos, du cou et des épaules causées par une poitrine trop volumineuse, tout en créant des seins plus légers, fermes et proportionnés. C'est l'une des interventions au taux de satisfaction le plus élevé de toute la chirurgie esthétique.",
      "L'intervention retire l'excès de glande, de graisse et de peau, remonte l'aréole et redonne aux seins une forme jeune et harmonieuse. La plupart de nos patientes décrivent un soulagement physique immédiat et une véritable libération dans leur vie quotidienne."
    ],
    indications: [
      'Douleurs dorsales, cervicales ou des épaules',
      'Gêne dans le sport et l\'habillement',
      'Irritations sous le sillon mammaire',
      'Seins lourds et tombants',
      'Poids stable'
    ],
    contreIndications: [
      'Grossesse ou allaitement',
      'Lésions mammaires non explorées',
      'Tabagisme actif (cicatrisation compromise)',
      'Troubles de la coagulation'
    ],
    deroulement: [
      { t: 'Consultation', d: 'Évaluation du volume à retirer, dessin du nouveau galbe, mammographie si > 40 ans.' },
      { t: 'Anesthésie générale', d: 'Intervention de 2 à 3 heures.' },
      { t: 'Résection', d: 'Retrait de l\'excès de glande et de peau selon le plan validé.' },
      { t: 'Remodelage', d: 'Remontée de l\'aréole, reconstruction d\'un galbe ferme et naturel.' },
      { t: 'Fermeture', d: 'Sutures fines en T inversé ou verticale selon la technique.' }
    ],
    suites: [
      { phase: 'J1 – J7', desc: 'Soutien-gorge post-opératoire 24h/24. Soulagement dorsal souvent immédiat.' },
      { phase: 'S2', desc: 'Reprise du travail de bureau.' },
      { phase: 'S4 – S6', desc: 'Reprise progressive du sport.' },
      { phase: 'M6 – M12', desc: 'Cicatrices s\'estompent, forme définitive.' }
    ],
    resultats: [
      'Disparition ou forte réduction des douleurs dorsales',
      'Seins allégés, fermes et remontés',
      'Silhouette rééquilibrée, habillement facilité',
      'Amélioration immédiate de la qualité de vie'
    ],
    faq: [
      { q: 'La réduction mammaire est-elle remboursée ?', a: 'En Tunisie, non. Dans votre pays, certaines mutuelles remboursent si une douleur dorsale documentée est causée par le poids des seins. Nous fournissons une facture détaillée.' },
      { q: 'Puis-je allaiter après une réduction ?', a: 'Cela dépend de la technique et du volume retiré. Le chirurgien vous informe précisément en consultation.' },
      { q: 'Où sont les cicatrices ?', a: 'Autour de l\'aréole, verticale sous le sein, et parfois dans le sillon (T inversé). Elles s\'estompent fortement en 12-18 mois.' },
      { q: 'Quel bonnet puis-je espérer ?', a: 'Le chirurgien vise la taille en harmonie avec votre morphologie — en général un bonnet B ou C.' },
      { q: 'La sensibilité du mamelon est-elle préservée ?', a: 'Dans la majorité des cas, oui. Une altération temporaire est possible et régresse en général en quelques mois.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '2 à 3 heures'
  },
  {
    slug: 'lifting-mammaire',
    name: 'Lifting mammaire',
    category: 'Seins',
    tagline: 'Remontée et raffermissement des seins tombants, avec ou sans prothèse. Galbe jeune et naturel.',
    metaTitle: 'Lifting mammaire Tunisie — Prix & techniques | Health Travel',
    metaDesc: 'Lifting des seins en Tunisie : corrigez la ptose mammaire et retrouvez un galbe ferme. Devis gratuit sous 24h.',
    description: [
      "Le lifting mammaire (mastopexie) corrige la ptose — l'affaissement des seins après grossesses, allaitement, variations de poids ou simplement le temps. L'intervention retire l'excès de peau, remonte l'aréole et reconcentre la glande pour recréer un galbe ferme et jeune.",
      "Si votre volume est suffisant, le lifting seul suffit. Sinon, une prothèse discrète ou un lipofilling peut être associé pour restaurer le galbe du haut du sein. Le chirurgien détermine la meilleure option lors de la consultation."
    ],
    indications: [
      'Seins tombants (ptose) avec volume satisfaisant ou non',
      'Aréoles orientées vers le bas',
      'Après grossesse, allaitement ou perte de poids',
      'Poids stable',
      'Non-fumeuse'
    ],
    contreIndications: [
      'Grossesse ou allaitement',
      'Projet de grossesse proche (recommandation d\'attendre)',
      'Tabagisme actif',
      'Lésions mammaires non explorées'
    ],
    deroulement: [
      { t: 'Consultation', d: 'Mesure du degré de ptose, décision : lifting seul ou avec volume.' },
      { t: 'Anesthésie générale', d: 'Intervention de 1h30 à 2h30.' },
      { t: 'Redrapage', d: 'Retrait de l\'excès de peau, recentrage de la glande.' },
      { t: 'Remontée de l\'aréole', d: 'Repositionnement à la hauteur idéale, réduction si nécessaire.' },
      { t: 'Fermeture', d: 'Sutures fines, soutien-gorge post-opératoire.' }
    ],
    suites: [
      { phase: 'J1 – J7', desc: 'Soutien-gorge 24h/24, activités légères.' },
      { phase: 'S2', desc: 'Reprise du travail non physique.' },
      { phase: 'S6', desc: 'Reprise du sport.' },
      { phase: 'M6 – M12', desc: 'Forme définitive, cicatrices estompées.' }
    ],
    resultats: [
      'Seins remontés, fermes et rajeunis',
      'Aréole repositionnée harmonieusement',
      'Galbe restauré avec ou sans prothèse',
      'Résultat durable avec maintien du poids'
    ],
    faq: [
      { q: 'Lifting sans prothèse, est-ce possible ?', a: 'Oui, si votre volume est suffisant. Sinon, une prothèse légère ou un lipofilling peut être associé.' },
      { q: 'Quelles cicatrices ?', a: 'Péri-aréolaire, verticale, et parfois dans le sillon selon le degré de ptose. Elles s\'estompent en 12-18 mois.' },
      { q: 'Puis-je allaiter après ?', a: 'Souvent oui, mais cela dépend de la technique. À discuter avec le chirurgien si vous envisagez une grossesse.' },
      { q: 'Le résultat dure-t-il ?', a: 'Oui, de nombreuses années. La gravité et les variations de poids continuent d\'agir : un bon soutien et un poids stable prolongent le résultat.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '1h30 à 2h30'
  },
  {
    slug: 'rhinoplastie',
    name: 'Rhinoplastie',
    category: 'Visage',
    tagline: 'Correction esthétique et fonctionnelle du nez. Technique ouverte ou fermée, simulation 3D en consultation.',
    metaTitle: 'Rhinoplastie Tunisie — Prix, techniques & résultats | Health Travel',
    metaDesc: 'Rhinoplastie en Tunisie : nez harmonieux et respiration améliorée. Chirurgiens spécialisés, simulation 3D. Devis 24h.',
    description: [
      "La rhinoplastie est l'intervention de chirurgie esthétique la plus technique : chaque millimètre compte. Elle corrige la bosse, la pointe, la largeur ou l'asymétrie du nez, et peut simultanément améliorer la respiration (déviation de cloison, cornets hypertrophiques).",
      "Nos chirurgiens maîtrisent les techniques ouverte et fermée, ainsi que la rhinoplastie ultrasonique (piezo) qui sculpte l'os avec une précision millimétrique et réduit les ecchymoses. Une simulation 3D de votre futur profil est réalisée en consultation pour aligner précisément vos attentes."
    ],
    indications: [
      'Bosse dorsale, pointe tombante ou large',
      'Asymétrie ou déviation',
      'Gêne respiratoire associée',
      'Croissance terminée (dès 17-18 ans)',
      'Attentes réalistes définies par simulation'
    ],
    contreIndications: [
      'Troubles de la coagulation',
      'Infection nasale active',
      'Dysmorphophobie (évaluation psychologique)',
      'Attentes irréalistes malgré la simulation'
    ],
    deroulement: [
      { t: 'Consultation', d: 'Analyse de face et de profil, simulation 3D, choix de la technique.' },
      { t: 'Anesthésie générale', d: 'Intervention de 1h30 à 2h30.' },
      { t: 'Correction', d: 'Sculpture osseuse (piezo) et cartilagineuse selon le plan validé.' },
      { t: 'Volet fonctionnel', d: 'Correction de la cloison si nécessaire (septoplastie).' },
      { t: 'Finition', d: 'Attelle thermoformée, mèches ou tampons résorbables selon technique.' }
    ],
    suites: [
      { phase: 'J1 – J7', desc: 'Attelle en place, œdèmes et ecchymoses modérés. Tête surélevée pour dormir.' },
      { phase: 'J7 – J10', desc: 'Retrait de l\'attelle. Retour social progressif.' },
      { phase: 'S2 – S4', desc: 'Œdème résiduel discret. Reprise du travail.' },
      { phase: 'M3 – M6', desc: 'Le nez s\'affine visiblement.' },
      { phase: 'M12 – M18', desc: 'Résultat définitif (l\'œdème de la pointe est long à résorber).' }
    ],
    resultats: [
      'Nez harmonieux, en accord avec vos traits',
      'Respiration améliorée si correction fonctionnelle',
      'Profil équilibré, résultat naturel',
      'Résultat définitif et stable'
    ],
    faq: [
      { q: 'Technique ouverte ou fermée ?', a: 'Fermée pour les corrections modérées (aucune cicatrice visible) ; ouverte pour les cas complexes ou de révision (micro-cicatrice invisible à 3 mois).' },
      { q: 'La rhinoplastie peut-elle améliorer ma respiration ?', a: 'Oui, la rhinoplastie fonctionnelle corrige la déviation de cloison et les cornets hypertrophiques.' },
      { q: 'Quel est le tarif d\'une rhinoplastie en Tunisie ?', a: 'Le tarif est établi sur devis personnalisé, après étude de votre dossier médical et consultation avec le chirurgien. Il dépend de la complexité (première intervention ou révision, technique ouverte ou fermée).' },
      { q: 'Peut-on me donner le nez d\'une célébrité ?', a: 'Non. Le chirurgien sculpte VOTRE nez en respectant votre anatomie. L\'objectif est l\'harmonie avec vos traits, pas la copie.' },
      { q: 'Quand verrai-je le résultat final ?', a: 'Le nez s\'affine pendant 12 à 18 mois, le temps que l\'œdème de la pointe se résorbe complètement.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '1h30 à 2h30'
  },
  {
    slug: 'blepharoplastie',
    name: 'Blépharoplastie',
    category: 'Visage',
    tagline: 'Correction des paupières tombantes et des poches sous les yeux. Regard rafraîchi, intervention ambulatoire.',
    metaTitle: 'Blépharoplastie Tunisie — Prix & récupération | Health Travel',
    metaDesc: 'Blépharoplastie en Tunisie : paupières rajeunies, regard reposé. Intervention rapide, récupération courte. Devis 24h.',
    description: [
      "La blépharoplastie rajeunit le regard en corrigeant les paupières supérieures tombantes (excès de peau) et les poches sous les yeux (hernie graisseuse). Le regard paraît plus ouvert, reposé et rafraîchi — sans changer votre expression.",
      "C'est une intervention légère, souvent réalisée sous anesthésie locale avec sédation, en ambulatoire : vous repartez le jour même en environnement adapté à votre récupération. Les incisions sont dissimulées dans le pli naturel de la paupière et à l'intérieur pour les poches (voie transconjonctivale, sans aucune cicatrice visible)."
    ],
    indications: [
      'Paupières supérieures lourdes ou tombantes',
      'Poches graisseuses sous les yeux',
      'Regard fatigué ou triste permanent',
      'Gêne visuelle par excès cutané (cas sévères)',
      'Bon état de santé oculaire'
    ],
    contreIndications: [
      'Sécheresse oculaire sévère',
      'Pathologies thyroïdiennes oculaires non stabilisées',
      'Troubles de la coagulation',
      'Hypertension non contrôlée'
    ],
    deroulement: [
      { t: 'Consultation', d: 'Examen des paupières, test de la fonction oculaire, choix des paupières à traiter (2 ou 4).' },
      { t: 'Anesthésie', d: 'Locale + sédation, ou générale selon votre préférence.' },
      { t: 'Correction', d: 'Retrait de l\'excès de peau et/ou des poches graisseuses. Durée : 1 heure.' },
      { t: 'Fermeture', d: 'Sutures très fines dans le pli naturel.' },
      { t: 'Retour', d: 'Sortie le jour même avec compresses froides et consignes, en environnement adapté à votre récupération.' }
    ],
    suites: [
      { phase: 'J1 – J5', desc: 'Œdèmes et ecchymoses légers. Compresses froides. Pas d\'effort.' },
      { phase: 'J5 – J7', desc: 'Retrait des fils. Maquillage couvrant possible à J+7.' },
      { phase: 'S2', desc: 'Retour social complet, lunettes de soleil pour dissimuler les traces résiduelles.' },
      { phase: 'M1 – M3', desc: 'Cicatrices invisibles, résultat définitif.' }
    ],
    resultats: [
      'Regard ouvert, reposé et rajeuni',
      'Disparition des poches et de l\'excès cutané',
      'Cicatrices invisibles',
      'Expression naturelle préservée'
    ],
    faq: [
      { q: 'La blépharoplastie est-elle douloureuse ?', a: 'Non. L\'anesthésie rend l\'intervention indolore ; les suites se limitent à une sensation de tension quelques jours.' },
      { q: 'Quand puis-je me maquiller ?', a: 'Maquillage du visage à J+7, en douceur au niveau des paupières.' },
      { q: 'Les cicatrices sont-elles visibles ?', a: 'Non : dissimulées dans le pli de la paupière, et aucune cicatrice externe pour les poches traitées par voie transconjonctivale.' },
      { q: 'Puis-je porter mes lentilles ?', a: 'Après 10 à 15 jours. Lunettes de vue conseillées entre-temps.' },
      { q: 'Combien de temps dure le résultat ?', a: '10 à 15 ans en moyenne, souvent définitif pour les poches.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '1 heure'
  },
  {
    slug: 'lifting-visage',
    name: 'Lifting du visage',
    category: 'Visage',
    tagline: 'Rajeunissement global du visage et du cou. Technique SMAS profond pour un résultat durable et naturel.',
    metaTitle: 'Lifting visage Tunisie — Prix & technique SMAS | Health Travel',
    metaDesc: 'Lifting cervico-facial en Tunisie : rajeunissement naturel et durable par technique SMAS. Chirurgiens experts. Devis 24h.',
    description: [
      "Le lifting cervico-facial corrige le relâchement du visage et du cou : bajoues, ovale flou, sillons profonds, cou fripé. Nos chirurgiens utilisent la technique SMAS profond, qui retend les structures musculaires et non seulement la peau — la clé d'un résultat naturel, jamais figé, et durable 10 ans et plus.",
      "Les incisions sont dissimulées dans les cheveux et dans les plis naturels autour de l'oreille : invisibles après 3 mois. Le lifting peut être combiné à une blépharoplastie ou à un lipofilling pour un rajeunissement global harmonieux."
    ],
    indications: [
      'Relâchement du bas du visage et du cou',
      'Bajoues et ovale du visage flou',
      'Sillons nasogéniens marqués',
      'Bon état général, non-fumeuse',
      'Attentes réalistes de rajeunissement naturel'
    ],
    contreIndications: [
      'Tabagisme actif (cicatrisation compromise)',
      'Hypertension non contrôlée',
      'Troubles de la coagulation',
      'Maladies auto-immunes actives'
    ],
    deroulement: [
      { t: 'Consultation', d: 'Analyse du relâchement, photos, plan chirurgical personnalisé.' },
      { t: 'Anesthésie générale', d: 'Intervention de 3 à 4 heures, 1 nuit en clinique.' },
      { t: 'Décollement', d: 'Incisions dissimulées (cheveux + contour de l\'oreille), décollement cutané contrôlé.' },
      { t: 'Suspension SMAS', d: 'Retension des plans musculaires profonds, repositionnement des volumes.' },
      { t: 'Redrapage', d: 'Retrait de l\'excès de peau sans tension excessive.' },
      { t: 'Fermeture', d: 'Sutures fines, pansement modelé.' }
    ],
    suites: [
      { phase: 'J1 – J7', desc: 'Œdèmes et ecchymoses modérés. Pansement puis contention légère. Repos.' },
      { phase: 'S2', desc: 'Retrait des fils. Retour social progressif avec coiffure adaptée.' },
      { phase: 'S3 – S4', desc: 'Retour social complet.' },
      { phase: 'M3 – M6', desc: 'Résultat stabilisé, cicatrices quasi invisibles.' }
    ],
    resultats: [
      'Visage visiblement rajeuni de 10 ans ou plus',
      'Ovale redessiné, cou retendu',
      'Expression naturelle, aucun aspect figé',
      'Résultat durable (10 ans et plus)'
    ],
    faq: [
      { q: 'Le lifting laisse-t-il des cicatrices visibles ?', a: 'Les incisions sont dissimulées dans les cheveux et derrière les oreilles : invisibles après 3 mois.' },
      { q: 'Le résultat est-il naturel ?', a: 'C\'est l\'avantage de la technique SMAS profond : la tension porte sur les muscles, pas sur la peau. Aucun aspect "tiré".' },
      { q: 'À quel âge faire un lifting ?', a: 'Il n\'y a pas d\'âge idéal : dès que le relâchement vous gêne, généralement entre 45 et 65 ans.' },
      { q: 'Combien de temps dure le résultat ?', a: '10 ans et plus. Le vieillissement reprend son cours naturel, mais vous gardez une longueur d\'avance.' },
      { q: 'Peut-on combiner avec une blépharoplastie ?', a: 'Oui, c\'est même fréquent pour un rajeunissement global en une seule intervention.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '3 à 4 heures'
  },
  {
    slug: 'lifting-bras',
    name: 'Lifting des bras',
    category: 'Silhouette',
    tagline: 'Suppression de l\'excès de peau des bras après perte de poids. Cicatrice dissimulée dans le pli interne.',
    metaTitle: 'Lifting des bras Tunisie — Prix & cicatrice | Health Travel',
    metaDesc: 'Lifting des bras (brachioplastie) en Tunisie : bras fermes et dessinés après amaigrissement. Devis sous 24h.',
    description: [
      "Le lifting des bras (brachioplastie) supprime l'excès de peau et de graisse de la face interne des bras, fréquent après une perte de poids importante ou avec l'âge. L'intervention redessine un contour de bras ferme et harmonieux.",
      "L'excès de peau est excisé et les tissus profonds remis en tension, souvent combiné à une liposuccion pour affiner l'ensemble du bras. La cicatrice est placée dans le pli interne du bras : discrète au quotidien, elle s'estompe sur 12 à 18 mois."
    ],
    indications: [
      'Excès de peau de la face interne des bras',
      'Après perte de poids importante',
      'Poids stable depuis 6 mois',
      'Gêne à l\'habillement ou dans le sport'
    ],
    contreIndications: [
      'Troubles de la coagulation',
      'Lymphœdème du bras',
      'Tabagisme actif',
      'Poids instable'
    ],
    deroulement: [
      { t: 'Consultation', d: 'Évaluation de l\'excès cutané et graisseux, tracé de l\'incision.' },
      { t: 'Anesthésie générale', d: 'Intervention de 1h30 à 2 heures.' },
      { t: 'Liposuccion', d: 'Affinement du bras si excès graisseux associé.' },
      { t: 'Excision', d: 'Retrait de l\'excès de peau, tension des tissus profonds.' },
      { t: 'Fermeture', d: 'Suture fine dans le pli interne, pansements compressifs.' }
    ],
    suites: [
      { phase: 'J1 – J7', desc: 'Bras surélevés au repos, pas de port de charges.' },
      { phase: 'S2 – S3', desc: 'Reprise des activités légères, manchon de contention.' },
      { phase: 'S6', desc: 'Reprise du sport.' },
      { phase: 'M12 – M18', desc: 'Cicatrice estompée, résultat définitif.' }
    ],
    resultats: [
      'Bras fermes et dessinés',
      'Disparition de l\'effet "chauve-souris"',
      'Confort retrouvé dans les vêtements manches courtes',
      'Cicatrice discrète dans le pli interne'
    ],
    faq: [
      { q: 'La cicatrice est-elle visible ?', a: 'Elle longe la face interne du bras, peu visible bras le long du corps. Elle s\'estompe fortement en 12-18 mois.' },
      { q: 'Peut-on éviter la cicatrice ?', a: 'Pour un excès cutané modéré, une liposuccion seule ou un bodytite peut suffire. Le chirurgien évalue en consultation.' },
      { q: 'Quand reprendre le sport ?', a: 'Marche immédiate, sport du haut du corps à 6 semaines.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '1h30 à 2 heures'
  },
  {
    slug: 'lifting-cuisses',
    name: 'Lifting des cuisses',
    category: 'Silhouette',
    tagline: 'Retension de la face interne des cuisses. Silhouette affinée et confort retrouvé au quotidien.',
    metaTitle: 'Lifting des cuisses Tunisie — Prix & résultats | Health Travel',
    metaDesc: 'Lifting des cuisses en Tunisie : corrigez le relâchement cutané après perte de poids. Chirurgiens certifiés. Devis 24h.',
    description: [
      "Le lifting des cuisses corrige le relâchement cutané de la face interne des cuisses, source de gêne esthétique et de frottements inconfortables au quotidien. Il est particulièrement indiqué après une perte de poids massive.",
      "L'excès de peau est retiré, les tissus retendus, et une liposuccion associée affine le résultat. La cicatrice est dissimulée dans le pli de l'aine, prolongée verticalement uniquement si l'excès cutané l'exige."
    ],
    indications: [
      'Relâchement de la face interne des cuisses',
      'Frottements et irritations à la marche',
      'Après amaigrissement important, poids stable',
      'Bonne santé générale'
    ],
    contreIndications: [
      'Troubles circulatoires ou de la coagulation',
      'Tabagisme actif',
      'Poids instable',
      'Diabète non contrôlé'
    ],
    deroulement: [
      { t: 'Consultation', d: 'Évaluation de l\'excès cutané, choix de l\'étendue de la cicatrice.' },
      { t: 'Anesthésie générale', d: 'Intervention de 2 à 2h30.' },
      { t: 'Liposuccion', d: 'Affinement préalable de la zone si nécessaire.' },
      { t: 'Retension', d: 'Excision de l\'excès de peau, fixation des tissus profonds.' },
      { t: 'Fermeture', d: 'Sutures dans le pli de l\'aine, contention.' }
    ],
    suites: [
      { phase: 'J1 – J10', desc: 'Marche douce encouragée, pas d\'écartement important des jambes.' },
      { phase: 'S3 – S4', desc: 'Reprise progressive des activités.' },
      { phase: 'S6 – S8', desc: 'Reprise du sport.' },
      { phase: 'M12', desc: 'Résultat définitif, cicatrice estompée.' }
    ],
    resultats: [
      'Cuisses fermes et affinées',
      'Confort retrouvé à la marche et dans l\'habillement',
      'Cicatrice dissimulée dans le pli de l\'aine',
      'Silhouette harmonisée'
    ],
    faq: [
      { q: 'Où se situe la cicatrice ?', a: 'Dans le pli de l\'aine, cachée par les sous-vêtements. Un prolongement vertical n\'est nécessaire que pour les excès cutanés importants.' },
      { q: 'Peut-on combiner avec une abdominoplastie ?', a: 'Oui, c\'est fréquent dans les protocoles post-amaigrissement massif.' },
      { q: 'Quand reprendre la marche sportive ?', a: 'Marche douce immédiate, marche sportive à 4 semaines, course à 8 semaines.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '2 à 2h30'
  },
  {
    slug: 'lipodeme',
    name: 'Lipœdème',
    category: 'Silhouette',
    tagline: 'Traitement chirurgical du lipœdème par liposuccion spécialisée. Soulagement de la douleur et de la lourdeur.',
    metaTitle: 'Lipœdème Tunisie — Traitement chirurgical | Health Travel',
    metaDesc: 'Traitement du lipœdème en Tunisie par liposuccion WAL spécialisée. Soulagement durable, équipe expérimentée. Devis 24h.',
    description: [
      "Le lipœdème est une maladie chronique de répartition de la graisse, touchant presque exclusivement les femmes : accumulation douloureuse et symétrique sur les jambes, cuisses et parfois les bras, qui ne répond ni au régime ni au sport. Ce n'est ni de l'obésité ni un simple problème esthétique.",
      "La liposuccion spécialisée (technique WAL ou tumescente, préservant les vaisseaux lymphatiques) est aujourd'hui le traitement de référence : elle retire la graisse pathologique, soulage durablement la douleur et la sensation de lourdeur, et stoppe l'évolution de la maladie. Plusieurs séances peuvent être nécessaires selon le stade."
    ],
    indications: [
      'Diagnostic de lipœdème confirmé (stade 1 à 3)',
      'Douleurs, lourdeur, ecchymoses faciles',
      'Échec des traitements conservateurs seuls',
      'Disproportion jambes/buste malgré un poids stable'
    ],
    contreIndications: [
      'Insuffisance veineuse sévère non traitée',
      'Troubles de la coagulation',
      'Infection cutanée active',
      'Grossesse'
    ],
    deroulement: [
      { t: 'Bilan spécialisé', d: 'Confirmation du diagnostic, stadification, plan de traitement (zones et nombre de séances).' },
      { t: 'Anesthésie', d: 'Tumescente locale ou générale selon l\'étendue.' },
      { t: 'Liposuccion WAL', d: 'Aspiration douce par jet d\'eau, préservant les vaisseaux lymphatiques.' },
      { t: 'Contention', d: 'Bas et collants de contention adaptés immédiatement.' },
      { t: 'Suivi', d: 'Drainage lymphatique post-opératoire et suivi à long terme.' }
    ],
    suites: [
      { phase: 'S1 – S2', desc: 'Contention permanente, marche quotidienne, drainages lymphatiques.' },
      { phase: 'S3 – S6', desc: 'Réduction nette des douleurs et de la lourdeur. Œdèmes en régression.' },
      { phase: 'M3 – M6', desc: 'Résultat visible : volumes réduits, silhouette harmonisée.' },
      { phase: 'Long terme', desc: 'Soulagement durable ; contention et hygiène de vie maintiennent le résultat.' }
    ],
    resultats: [
      'Soulagement significatif et durable de la douleur',
      'Réduction des volumes pathologiques',
      'Mobilité et qualité de vie améliorées',
      'Freinage de l\'évolution de la maladie'
    ],
    faq: [
      { q: 'Le lipœdème peut-il disparaître avec un régime ?', a: 'Non. La graisse du lipœdème est pathologique et ne répond pas au régime ni au sport — c\'est ce qui distingue la maladie de l\'obésité.' },
      { q: 'Combien de séances sont nécessaires ?', a: 'Selon le stade et l\'étendue : 1 à 3 séances espacées de 3 à 6 mois en général.' },
      { q: 'La maladie revient-elle après l\'opération ?', a: 'La graisse pathologique retirée ne revient pas. La contention et le suivi limitent tout risque de progression.' },
      { q: 'Est-ce remboursé ?', a: 'Certaines mutuelles prennent en charge le traitement du lipœdème diagnostiqué. Nous fournissons un dossier médical complet.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '1h30 à 3 heures'
  },
  {
    slug: 'greffe-capillaire',
    name: 'Greffe capillaire',
    category: 'Cheveux',
    tagline: 'Techniques FUE et DHI sans cicatrice visible. Densité naturelle, ligne frontale personnalisée, résultat définitif.',
    metaTitle: 'Greffe capillaire Tunisie — FUE & DHI, prix | Health Travel',
    metaDesc: 'Greffe de cheveux en Tunisie : FUE et DHI, résultat naturel et définitif. Équipes spécialisées. Devis gratuit sous 24h.',
    description: [
      "La greffe capillaire redonne densité et ligne frontale naturelle aux personnes touchées par la chute de cheveux. Nous proposons la FUE (extraction folliculaire unitaire) et la DHI (implantation directe au stylo Choi) — deux techniques sans cicatrice visible et au résultat définitif.",
      "Chaque greffe est dessinée sur mesure : la ligne frontale est personnalisée selon votre âge, votre visage et la forme de votre crâne pour un résultat indétectable. De 1 500 à 4 500 greffons selon la zone à couvrir, implantés un à un dans le sens naturel de pousse."
    ],
    indications: [
      'Alopécie androgénétique stabilisée (homme ou femme)',
      'Zone donneuse (couronne) de bonne densité',
      'Ligne frontale dégarnie ou golfes temporaux',
      'Attentes réalistes sur la densité'
    ],
    contreIndications: [
      'Alopécie diffuse instable ou en évolution rapide',
      'Zone donneuse insuffisante',
      'Maladies du cuir chevelu actives',
      'Troubles de la coagulation'
    ],
    deroulement: [
      { t: 'Consultation', d: 'Analyse du cuir chevelu, comptage des greffons, dessin de la ligne frontale.' },
      { t: 'Anesthésie locale', d: 'Intervention indolore de 5 à 7 heures, avec pauses.' },
      { t: 'Extraction', d: 'Prélèvement des follicules un à un dans la zone donneuse (FUE).' },
      { t: 'Implantation', d: 'Réimplantation au stylo Choi (DHI) ou après micro-incisions, dans le sens naturel de pousse.' },
      { t: 'Pansement', d: 'Protection légère, consignes post-op détaillées.' }
    ],
    suites: [
      { phase: 'J1 – J7', desc: 'Petites croûtes sur les zones greffées, sommeil tête surélevée, lavage doux dès J+3.' },
      { phase: 'J15 – J30', desc: 'Chute des cheveux transplantés (choc effluvium) : étape normale et attendue.' },
      { phase: 'M3', desc: 'Début de la repousse définitive.' },
      { phase: 'M6', desc: 'Résultat visible, densité en progression.' },
      { phase: 'M12 – M18', desc: 'Résultat définitif complet.' }
    ],
    resultats: [
      'Cheveux définitifs qui poussent naturellement',
      'Ligne frontale indétectable, dessinée sur mesure',
      'Aucune cicatrice visible (FUE/DHI)',
      'Résultat complet à 12-18 mois'
    ],
    faq: [
      { q: 'La greffe capillaire est-elle douloureuse ?', a: 'Non, l\'anesthésie locale rend la zone insensible. Un léger inconfort le soir même, géré par antalgiques.' },
      { q: 'Combien de greffons faut-il ?', a: 'De 1 500 à 4 500 selon la zone et la densité souhaitée. Le chirurgien évalue lors de la consultation.' },
      { q: 'Quand voit-on le résultat ?', a: 'Les cheveux greffés tombent à J+15-30 (normal), la repousse commence à 3 mois, résultat visible à 6 mois, définitif à 12-18 mois.' },
      { q: 'FUE ou DHI ?', a: 'La DHI offre une implantation plus dense et contrôlée ; la FUE convient aux grandes surfaces. Le choix dépend de votre cas.' },
      { q: 'Les cheveux greffés retombent-ils ?', a: 'Non : les follicules de la couronne sont génétiquement résistants à la chute, pour toute la vie.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '5 à 7 heures'
  },
  {
    slug: 'chirurgie-intime',
    name: 'Chirurgie intime',
    category: 'Intime',
    tagline: 'Nymphoplastie, vaginoplastie, pénoplastie. Discrétion absolue et accompagnement par une équipe féminine sur demande.',
    metaTitle: 'Chirurgie intime Tunisie — Discrétion & expertise | Health Travel',
    metaDesc: 'Chirurgie intime en Tunisie : nymphoplastie, vaginoplastie. Cadre privé, discrétion totale, équipe féminine. Devis 24h.',
    description: [
      "La chirurgie intime répond à des gênes physiques ou esthétiques très personnelles : hypertrophie des petites lèvres (nymphoplastie), relâchement vaginal après accouchements (vaginoplastie), ou chirurgie masculine (pénoplastie). Ces interventions améliorent le confort quotidien, la pratique sportive, l'habillement et l'intimité.",
      "Chez Health Travel, ces demandes sont traitées avec une discrétion absolue : consultation dans un cadre totalement privé, aucune information partagée, et accompagnement par une équipe entièrement féminine sur simple demande."
    ],
    indications: [
      'Gêne physique : frottements, douleurs au sport ou à l\'habillement',
      'Gêne esthétique ou psychologique',
      'Relâchement vaginal post-accouchement',
      'Demande mature et éclairée'
    ],
    contreIndications: [
      'Infection locale active',
      'Grossesse',
      'Troubles de la coagulation',
      'Attentes irréalistes'
    ],
    deroulement: [
      { t: 'Consultation privée', d: 'Écoute confidentielle, examen, explication détaillée de la technique.' },
      { t: 'Anesthésie', d: 'Locale + sédation ou générale selon l\'intervention.' },
      { t: 'Intervention', d: 'Technique précise et conservative, 45 min à 1h30 selon le cas.' },
      { t: 'Fermeture', d: 'Fils résorbables, aucune cicatrice visible.' },
      { t: 'Sortie', d: 'Retour le jour même ou après une nuit de surveillance, selon l\'avis de l\'équipe médicale.' }
    ],
    suites: [
      { phase: 'J1 – J7', desc: 'Soins locaux doux, repos, pas de bain ni de sport.' },
      { phase: 'S2 – S3', desc: 'Reprise du travail et des activités légères.' },
      { phase: 'S4 – S6', desc: 'Reprise progressive du sport et de la vie intime selon consignes médicales.' },
      { phase: 'M2 – M3', desc: 'Résultat définitif.' }
    ],
    resultats: [
      'Confort physique retrouvé au quotidien',
      'Résultat esthétique naturel',
      'Aucune cicatrice visible',
      'Confiance et qualité de vie intime améliorées'
    ],
    faq: [
      { q: 'La confidentialité est-elle garantie ?', a: 'Absolument. Consultation et intervention dans un cadre totalement privé. Aucune information n\'est jamais partagée.' },
      { q: 'Puis-je être accompagnée par une équipe féminine ?', a: 'Oui, sur simple demande : chirurgienne, anesthésiste et accompagnatrice femmes.' },
      { q: 'La sensibilité est-elle préservée ?', a: 'Oui, les techniques conservatives préservent les zones de sensibilité. Le chirurgien vous explique tout en consultation.' },
      { q: 'Quand reprendre une vie intime ?', a: 'Généralement après 4 à 6 semaines, selon la consigne du chirurgien.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '45 min à 1h30'
  }
];

const nouvellesInterventions: Intervention[] = [
  {
    slug: 'sleeve',
    name: 'Sleeve gastrique',
    category: 'Obésité',
    tagline: 'Réduction de l\'estomac par voie cœlioscopique. Perte de poids durable et encadrée médicalement.',
    metaTitle: 'Sleeve gastrique Tunisie — Prix & suivi | Health Travel',
    metaDesc: 'Sleeve en Tunisie : chirurgie de l\'obésité par chirurgiens bariatriques certifiés. Suivi nutritionnel 12 mois. Devis 24h.',
    description: [
      "La sleeve gastrectomie est la chirurgie de l'obésité la plus pratiquée au monde : l'estomac est réduit d'environ 75 % pour former un tube, ce qui diminue la faim et accélère la satiété. Elle est réalisée par cœlioscopie (petites incisions) sous anesthésie générale.",
      "Chez Health Travel, la sleeve n'est jamais une simple opération : c'est un programme complet avec bilan pré-opératoire approfondi (nutritionniste, gastro-entérologue, psychologue), chirurgien bariatrique expérimenté, et suivi nutritionnel pendant 12 mois après votre retour."
    ],
    indications: ['IMC ≥ 40, ou ≥ 35 avec comorbidités (diabète, apnée du sommeil, hypertension)', 'Échecs des régimes supervisés', 'Âge 18-65 ans', 'Motivation pour un changement durable', 'Bilan psychologique favorable'],
    contreIndications: ['Reflux gastro-œsophagien sévère (discuter du bypass)', 'Troubles alimentaires non stabilisés', 'Alcoolisme actif', 'Grossesse en cours ou prévue < 18 mois', 'Pathologies cardiaques décompensées'],
    deroulement: [
      { t: 'Bilan pré-opératoire', d: 'NFS, bilan hépatique, fibroscopie gastrique, consultation anesthésie, avis nutritionniste et psychologue.' },
      { t: 'Anesthésie générale', d: 'Intervention de 1h à 1h30 par cœlioscopie.' },
      { t: 'Résection', d: 'Retrait des 2/3 de l\'estomac, agrafage au bistouri automatique, test d\'étanchéité.' },
      { t: 'Hospitalisation', d: '2 nuits en clinique, réalimentation progressive dès J+1.' }
    ],
    suites: [
      { phase: 'S1 – S2', desc: 'Alimentation liquide puis mixée. Reprise marche immédiate.' },
      { phase: 'S3 – S6', desc: 'Alimentation semi-solide. Perte de 5-8 kg le premier mois.' },
      { phase: 'M2 – M6', desc: 'Réintroduction progressive. Perte de 15-25 % du poids total.' },
      { phase: 'M12', desc: 'Perte de 25-35 % du poids initial en moyenne, stabilisation.' }
    ],
    resultats: ['Perte de 25-35 % du poids initial à 12 mois', 'Rémission fréquente du diabète type 2 et de l\'apnée du sommeil', 'Réduction de la faim durable', 'Qualité de vie transformée'],
    faq: [
      { q: 'La sleeve est-elle réversible ?', a: 'Non, la partie retirée de l\'estomac ne repousse pas. C\'est un engagement à vie, d\'où l\'importance du bilan psychologique.' },
      { q: 'Combien de poids vais-je perdre ?', a: 'En moyenne 25-35 % du poids initial à 12 mois, si le suivi nutritionnel est respecté.' },
      { q: 'Quel suivi après le retour ?', a: 'Suivi nutritionnel vidéo pendant 12 mois, bilans sanguins à 3, 6 et 12 mois, coordination avec votre médecin traitant.' },
      { q: 'Sleeve ou bypass ?', a: 'La sleeve est plus simple et suffit dans la majorité des cas. Le bypass est préféré en cas de reflux sévère ou de diabète très avancé. Le chirurgien décide avec vous.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '1h à 1h30'
  },
  {
    slug: 'bypass',
    name: 'Bypass gastrique',
    category: 'Obésité',
    tagline: 'Technique de référence pour les obésités sévères avec diabète ou reflux. Perte de poids maximale.',
    metaTitle: 'Bypass gastrique Tunisie — Prix & résultats | Health Travel',
    metaDesc: 'Bypass gastrique en Tunisie : chirurgie bariatrique de référence, chirurgiens certifiés, suivi 12 mois. Devis gratuit.',
    description: [
      "Le bypass gastrique combine la réduction de l'estomac et une dérivation d'une partie de l'intestin : on mange moins ET on absorbe moins. C'est la technique la plus puissante contre l'obésité sévère, particulièrement en cas de diabète type 2 ou de reflux gastro-œsophagien.",
      "Comme pour la sleeve, Health Travel encadre le bypass par un programme complet : bilan multidisciplinaire, chirurgien bariatrique senior, hospitalisation surveillée et suivi nutritionnel renforcé pendant 12 mois (supplémentation vitaminique indispensable à vie)."
    ],
    indications: ['IMC ≥ 40, ou ≥ 35 avec diabète type 2 ou reflux sévère', 'Reprise de poids après sleeve ou anneau', 'Échecs des traitements médicaux', 'Engagement au suivi vitaminique à vie'],
    contreIndications: ['Carences vitaminiques sévères non corrigées', 'Maladies inflammatoires intestinales', 'Alcoolisme actif', 'Grossesse en cours ou prévue < 18 mois'],
    deroulement: [
      { t: 'Bilan multidisciplinaire', d: 'Fibroscopie, bilans sanguins complets, avis nutritionniste et psychologue.' },
      { t: 'Anesthésie générale', d: 'Intervention de 2h à 2h30 par cœlioscopie.' },
      { t: 'Montage', d: 'Création d\'une petite poche gastrique et court-circuit intestinal (anastomoses).' },
      { t: 'Hospitalisation', d: '2-3 nuits, surveillance renforcée des anastomoses.' }
    ],
    suites: [
      { phase: 'S1 – S2', desc: 'Alimentation liquide. Supplémentation vitaminique démarrée.' },
      { phase: 'S3 – S6', desc: 'Alimentation semi-solide. Perte rapide les premiers mois.' },
      { phase: 'M2 – M6', desc: 'Perte de 20-30 % du poids total. Bilans sanguins trimestriels.' },
      { phase: 'M12 – M18', desc: 'Perte de 30-40 % du poids initial en moyenne.' }
    ],
    resultats: ['Perte de 30-40 % du poids initial', 'Rémission du diabète type 2 dans 60-80 % des cas', 'Disparition du reflux', 'Amélioration majeure des comorbidités'],
    faq: [
      { q: 'Le bypass est-il plus efficace que la sleeve ?', a: 'Oui sur la perte de poids et le diabète, mais il est plus complexe et exige une supplémentation à vie. Le chirurgien vous oriente selon votre profil.' },
      { q: 'Quelles vitamines dois-je prendre ?', a: 'Multivitamines, B12, fer, calcium et vitamine D — à vie, avec bilans sanguins réguliers. Notre nutritionniste vous suit 12 mois.' },
      { q: 'Qu\'est-ce que le dumping syndrome ?', a: 'Malaise après sucres rapides (sueurs, vertiges). Il est évitable en respectant les règles alimentaires — et aide à changer les habitudes.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '2h à 2h30'
  },
  {
    slug: 'body-lift',
    name: 'Body lift',
    category: 'Silhouette',
    tagline: 'Remise en tension complète du tronc après perte de poids massive. Ventre, dos, fesses et taille en une intervention.',
    metaTitle: 'Body lift Tunisie — Prix après perte de poids | Health Travel',
    metaDesc: 'Body lift en Tunisie : correction circulaire du tronc après sleeve ou amaigrissement massif. Chirurgiens experts. Devis 24h.',
    description: [
      "Le body lift (ou lipectomie circulaire) est l'intervention reine après une perte de poids massive — souvent après sleeve ou bypass. Il retire l'excès de peau tout autour du tronc : ventre, taille, dos, et remonte les fesses au passage.",
      "C'est une chirurgie majeure (3 à 5 heures) qui transforme la silhouette entière. Elle est programmée lorsque le poids est stabilisé depuis au moins 6 mois, généralement 12-18 mois après la chirurgie bariatrique."
    ],
    indications: ['Perte de poids massive (> 30 kg), stabilisée depuis 6 mois', 'Excès cutané circulaire du tronc', 'Bonne santé générale, bilan sanguin correct', 'Non-fumeuse'],
    contreIndications: ['Poids instable', 'Anémie ou carences post-bariatriques non corrigées', 'Troubles de la coagulation', 'Tabagisme actif'],
    deroulement: [
      { t: 'Consultation', d: 'Évaluation complète, planification de la cicatrice circulaire dissimulée sous les sous-vêtements.' },
      { t: 'Anesthésie générale', d: 'Intervention de 3 à 5 heures, 2 nuits en clinique.' },
      { t: 'Excision circulaire', d: 'Retrait de l\'excès de peau ventre-dos-fesses, retension des tissus.' },
      { t: 'Fermeture', d: 'Sutures en plusieurs plans, drains, contention.' }
    ],
    suites: [
      { phase: 'S1 – S2', desc: 'Repos, position fléchie, marche douce.' },
      { phase: 'S3 – S6', desc: 'Reprise progressive, gaine 24h/24.' },
      { phase: 'M2 – M3', desc: 'Reprise du travail et du sport léger.' },
      { phase: 'M12', desc: 'Résultat définitif, cicatrice estompée.' }
    ],
    resultats: ['Silhouette complètement redessinée', 'Disparition de l\'excès cutané du tronc entier', 'Fesses remontées, taille affinée', 'Fin du parcours post-amaigrissement'],
    faq: [
      { q: 'Quand faire le body lift après une sleeve ?', a: 'Quand le poids est stable depuis 6 mois minimum, généralement 12 à 18 mois après la sleeve.' },
      { q: 'Où passe la cicatrice ?', a: 'Tout autour de la taille, dissimulée sous les sous-vêtements. Elle s\'estompe en 12-18 mois.' },
      { q: 'Peut-on combiner avec un lifting des cuisses ?', a: 'Parfois, mais souvent en deux temps pour limiter la durée opératoire. Le chirurgien planifie le programme complet.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '3 à 5 heures'
  },
  {
    slug: 'nymphoplastie',
    name: 'Nymphoplastie',
    category: 'Intime',
    tagline: 'Réduction des petites lèvres hypertrophiques. Confort retrouvé au quotidien, résultat naturel et discret.',
    metaTitle: 'Nymphoplastie Tunisie — Discrétion & prix | Health Travel',
    metaDesc: 'Nymphoplastie en Tunisie : labiaplastie par chirurgiens experts, cadre privé, équipe féminine sur demande. Devis 24h.',
    description: [
      "La nymphoplastie (ou labiaplastie) corrige l'hypertrophie des petites lèvres, source de gêne au quotidien : frottements, douleurs au sport ou à l'habillement, inconfort dans l'intimité, complexe esthétique.",
      "Intervention courte (45 min à 1h) sous anesthésie locale ou générale, en ambulatoire. Chez Health Travel, elle est traitée avec une discrétion absolue : consultation privée et accompagnement par une équipe entièrement féminine sur simple demande."
    ],
    indications: ['Hypertrophie des petites lèvres gênante', 'Douleurs au sport, à l\'habillement ou dans l\'intimité', 'Gêne esthétique ou psychologique', 'Demande mature et éclairée'],
    contreIndications: ['Infection locale active', 'Grossesse', 'Troubles de la coagulation'],
    deroulement: [
      { t: 'Consultation privée', d: 'Examen confidentiel, explication de la technique conservative.' },
      { t: 'Anesthésie', d: 'Locale + sédation ou générale, 45 min à 1h.' },
      { t: 'Correction', d: 'Résection précise et conservative, fils résorbables.' },
      { t: 'Sortie', d: 'Retour le jour même, selon l\'avis de l\'équipe médicale.' }
    ],
    suites: [
      { phase: 'J1 – J7', desc: 'Soins locaux doux, repos, pas de bain ni de sport.' },
      { phase: 'S2 – S3', desc: 'Reprise du travail et activités légères.' },
      { phase: 'S4 – S6', desc: 'Reprise du sport et de la vie intime selon consignes.' }
    ],
    resultats: ['Confort physique retrouvé', 'Résultat esthétique naturel', 'Aucune cicatrice visible', 'Sensibilité préservée'],
    faq: [
      { q: 'La sensibilité est-elle préservée ?', a: 'Oui, les techniques conservatives préservent les zones de sensibilité. Tout vous est expliqué en consultation.' },
      { q: 'Puis-je avoir une équipe féminine ?', a: 'Oui, sur simple demande : chirurgienne, anesthésiste et accompagnatrice.' },
      { q: 'Quand reprendre une vie intime ?', a: 'Après 4 à 6 semaines, selon la consigne du chirurgien.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '45 min à 1h'
  },
  {
    slug: 'implants-dentaires',
    name: 'Implants dentaires',
    category: 'Dentaire',
    tagline: 'Remplacement de dents manquantes par implants en titane. Mâchez, souriez, parlez comme avec vos dents naturelles.',
    metaTitle: 'Implants dentaires Tunisie — Prix & qualité | Health Travel',
    metaDesc: 'Implants dentaires en Tunisie : implants premium, chirurgiens-dentistes certifiés, jusqu\'à 60 % moins cher. Devis 24h.',
    description: [
      "L'implant dentaire remplace une dent manquante par une racine artificielle en titane sur laquelle est fixée une couronne en céramique. C'est la solution la plus durable et la plus naturelle : vous oubliez que vous avez un implant.",
      "Nos cliniques dentaires partenaires utilisent des implants de marques internationales premium, avec imagerie 3D et guide chirurgical pour une pose précise et indolore. Pour les édentements complets, la technique All-on-4 permet de retrouver une mâchoire complète en une journée."
    ],
    indications: ['Une ou plusieurs dents manquantes', 'Édentement complet (All-on-4 / All-on-6)', 'Bon état osseux ou greffe réalisable', 'Hygiène bucco-dentaire correcte'],
    contreIndications: ['Diabète non contrôlé', 'Ostéoporose sévère sous biphosphonates IV', 'Tabagisme important sans arrêt', 'Infection buccale active'],
    deroulement: [
      { t: 'Bilan 3D', d: 'Scanner, empreintes numériques, plan de traitement détaillé avec devis.' },
      { t: 'Pose de l\'implant', d: 'Anesthésie locale, 30-60 min par implant, indolore.' },
      { t: 'Ostéo-intégration', d: 'L\'os se soude à l\'implant : 3 à 6 mois.' },
      { t: 'Couronne', d: 'Pose de la couronne céramique définitive au 2e séjour (ou immédiate selon cas).' }
    ],
    suites: [
      { phase: 'J1 – J7', desc: 'Légers œdèmes, alimentation molle, antalgiques.' },
      { phase: 'S2 – S4', desc: 'Reprise normale, hygiène douce autour de l\'implant.' },
      { phase: 'M3 – M6', desc: 'Ostéo-intégration complète, pose de la couronne.' }
    ],
    resultats: ['Dent fixe, naturelle et durable', 'Confort de mastication complet', 'Préservation de l\'os et des dents voisines', 'Durée de vie 15-25 ans et plus'],
    faq: [
      { q: 'Combien de séjours sont nécessaires ?', a: 'Généralement 2 : pose de l\'implant, puis couronne 3-6 mois après. Selon les cas, le chargement immédiat permet un seul séjour.' },
      { q: 'La pose est-elle douloureuse ?', a: 'Non, sous anesthésie locale c\'est indolore — souvent plus simple qu\'une extraction.' },
      { q: 'Quelles marques d\'implants utilisez-vous ?', a: 'Des marques internationales premium reconnues. Le devis précise la marque exacte et la garantie.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '30-60 min / implant'
  },
  {
    slug: 'facettes-dentaires',
    name: 'Facettes dentaires',
    category: 'Dentaire',
    tagline: 'Sourire hollywoodien en une semaine : facettes céramique ou composite, teinte et forme sur mesure.',
    metaTitle: 'Facettes dentaires Tunisie — Hollywood smile prix | Health Travel',
    metaDesc: 'Facettes dentaires en Tunisie : céramique E-Max, sourire hollywoodien sur mesure. Devis gratuit sous 24h.',
    description: [
      "Les facettes dentaires sont de fines coques de céramique collées sur la face visible des dents pour corriger couleur, forme, alignement et espaces. C'est l'intervention préférée des célébrités — dont Fanny J, qui a choisi Health Travel pour les siennes.",
      "Nos laboratoires partenaires travaillent la céramique E-Max (référence esthétique) avec un smile design numérique : vous visualisez votre futur sourire avant même de commencer. La durée de votre séjour est définie selon votre plan de traitement, après étude de votre dossier."
    ],
    indications: ['Dents tachées, usées ou ébréchées', 'Espaces entre les dents (diastèmes)', 'Légers défauts d\'alignement ou de forme', 'Sourire harmonieux souhaité rapidement'],
    contreIndications: ['Bruxisme sévère non traité', 'Émail insuffisant', 'Malocclusion majeure (orthodontie d\'abord)', 'Hygiène buccale insuffisante'],
    deroulement: [
      { t: 'Smile design', d: 'Photos, empreintes numériques, simulation 3D de votre futur sourire validée ensemble.' },
      { t: 'Préparation', d: 'Préparation minimale de l\'émail, empreintes, facettes provisoires.' },
      { t: 'Fabrication', d: 'Laboratoire : céramique E-Max, teinte et translucidité sur mesure (3-5 jours).' },
      { t: 'Pose', d: 'Collage définitif, ajustements, polissage. Vous repartez avec votre sourire.' }
    ],
    suites: [
      { phase: 'J1 – J3', desc: 'Légère sensibilité possible, alimentation normale.' },
      { phase: 'S1', desc: 'Adaptation complète, contrôle final.' },
      { phase: 'Long terme', desc: 'Durée de vie 10-15 ans avec une bonne hygiène.' }
    ],
    resultats: ['Sourire blanc, aligné et harmonieux', 'Aspect naturel de la céramique E-Max', 'Résultat en une semaine', 'Confiance immédiate'],
    faq: [
      { q: 'Facettes céramique ou composite ?', a: 'Céramique E-Max : plus esthétique et durable (10-15 ans). Composite : moins chère, retouchable, durée 5-7 ans.' },
      { q: 'Combien de dents faut-il traiter ?', a: 'En général 8 à 10 dents par mâchoire (zone du sourire). Le smile design détermine le nombre exact.' },
      { q: 'Les facettes abîment-elles les dents ?', a: 'La préparation est minimale (0,3-0,5 mm). Les facettes sans préparation sont possibles selon les cas.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '2 à 3 séances'
  },
  {
    slug: 'fiv',
    name: 'FIV (Fécondation in vitro)',
    category: 'Fertilité',
    tagline: 'Parcours PMA complet et humain : stimulation, ponction, transfert d\'embryon dans des centres certifiés.',
    metaTitle: 'FIV Tunisie — Centre PMA certifié | Health Travel',
    metaDesc: 'FIV en Tunisie : centres de PMA certifiés, taux de réussite élevés, accompagnement complet du couple. Devis 24h.',
    description: [
      "La FIV offre une chance de grossesse aux couples confrontés à l'infertilité. En Tunisie, les centres de PMA partenaires de Health Travel disposent de laboratoires d'embryologie de pointe et de taux de réussite comparables aux meilleurs centres européens — pour un coût bien moindre.",
      "Nous accompagnons chaque couple avec discrétion et humanité : coordination des bilans, planning de stimulation, organisation du séjour, et soutien tout au long du parcours. Les protocoles incluent FIV classique, ICSI, et vitrification embryonnaire."
    ],
    indications: ['Infertilité tubaire, masculine ou inexpliquée', 'Échecs d\'inséminations', 'Endométriose, SOPK', 'Bilan hormonal complet récent'],
    contreIndications: ['Contre-indication médicale à la grossesse', 'Pathologies hormonales non stabilisées (à évaluer)'],
    deroulement: [
      { t: 'Bilan du couple', d: 'Bilans hormonaux, spermogramme, échographies — coordonnés à distance.' },
      { t: 'Stimulation', d: 'Protocole hormonal personnalisé, monitoring échographique.' },
      { t: 'Ponction & fécondation', d: 'Ponction des ovocytes, FIV ou ICSI au laboratoire.' },
      { t: 'Transfert', d: 'Transfert d\'embryon(s) à J3 ou J5, puis repos.' }
    ],
    suites: [
      { phase: 'J1 – J12', desc: 'Repos relatif, traitement de soutien.' },
      { phase: 'J12 – J14', desc: 'Dosage bêta-HCG : résultat de la tentative.' },
      { phase: 'Si succès', desc: 'Suivi de grossesse avec votre gynécologue, coordination assurée.' }
    ],
    resultats: ['Taux de grossesse par transfert jusqu\'à 45-50 % selon l\'âge', 'Laboratoires de dernière génération', 'Vitrification des embryons surnuméraires', 'Coût 40-60 % inférieur à l\'Europe'],
    faq: [
      { q: 'Combien de temps dure le séjour ?', a: 'La durée du séjour est déterminée selon votre protocole de traitement et votre situation médicale, après étude de votre dossier. Une partie de la stimulation peut être suivie dans votre pays.' },
      { q: 'Quels sont les taux de réussite ?', a: 'Jusqu\'à 45-50 % par transfert avant 35 ans, décroissant avec l\'âge. Le médecin vous donne votre pronostic personnalisé.' },
      { q: 'ICSI ou FIV classique ?', a: 'L\'ICSI (injection directe du spermatozoïde) est recommandée en cas de facteur masculin. Le laboratoire décide selon les résultats.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '1 cycle (3-4 semaines)'
  },
  {
    slug: 'botox',
    name: 'Botox & médecine esthétique',
    category: 'Médecine esthétique',
    tagline: 'Injections de Botox et acide hyaluronique : rides, volumes, hydratation. Sans chirurgie, résultat immédiat.',
    metaTitle: 'Botox Tunisie — Injections médecine esthétique | Health Travel',
    metaDesc: 'Botox et acide hyaluronique en Tunisie : médecins esthétiques certifiés, résultat naturel, tarifs doux. Devis 24h.',
    description: [
      "La médecine esthétique embellit sans chirurgie : le Botox lisse les rides d'expression (front, rides du lion, pattes d'oie), l'acide hyaluronique restaure les volumes (pommettes, lèvres, cernes, sillons) et les skinboosters hydratent en profondeur.",
      "Réalisées par des médecins esthétiques certifiés avec des produits agréés (Allergan, Juvederm), les injections prennent 20 à 30 minutes, sans éviction sociale. Idéales en complément d'un séjour chirurgical ou seules."
    ],
    indications: ['Rides d\'expression du haut du visage', 'Perte de volume, cernes creusés', 'Lèvres fines ou asymétriques', 'Peau déshydratée, terne'],
    contreIndications: ['Grossesse ou allaitement', 'Maladies neuromusculaires', 'Infection cutanée au point d\'injection', 'Allergie connue aux produits'],
    deroulement: [
      { t: 'Consultation', d: 'Analyse du visage, plan d\'injection personnalisé, devis précis.' },
      { t: 'Injections', d: '20-30 minutes, micro-aiguilles, inconfort minimal.' },
      { t: 'Résultat', d: 'Immédiat pour l\'acide hyaluronique, 3-7 jours pour le Botox.' },
      { t: 'Retouche', d: 'Contrôle et retouche possible à 15 jours.' }
    ],
    suites: [
      { phase: 'J1', desc: 'Pas de massage de la zone, pas de sport ni de sauna 24h.' },
      { phase: 'J3 – J7', desc: 'Effet Botox progressif et complet.' },
      { phase: 'M4 – M6', desc: 'Durée du Botox : 4-6 mois ; acide hyaluronique : 9-12 mois.' }
    ],
    resultats: ['Regard reposé et rides lissées', 'Volumes restaurés naturellement', 'Aucune éviction sociale', 'Résultat réversible et modulable'],
    faq: [
      { q: 'Le Botox fige-t-il les expressions ?', a: 'Non quand les doses sont adaptées : le but est de détendre, pas de paralyser. Résultat naturel garanti par nos médecins.' },
      { q: 'Combien de temps ça dure ?', a: 'Botox : 4 à 6 mois. Acide hyaluronique : 9 à 12 mois selon la zone.' },
      { q: 'Peut-on combiner avec une chirurgie ?', a: 'Oui, souvent pendant le même séjour, en respectant les délais conseillés par le chirurgien.' }
    ],
    prix: 'Tarif sur devis personnalisé',
    prixInclus: "Séjour médical postopératoire adapté à votre intervention et à votre état de santé. Le séjour est organisé dans un environnement médical afin d'assurer la surveillance, les soins et l'accompagnement nécessaires après l'intervention. La durée de prise en charge est déterminée après l'étude du dossier médical et selon les recommandations du chirurgien et de l'équipe médicale.",
    sejour: 'Déterminé après étude médicale',
    duree: '20-30 minutes'
  }
];

interventions.push(...nouvellesInterventions);

export const categories = ['Toutes', 'Silhouette', 'Seins', 'Visage', 'Cheveux', 'Intime', 'Obésité', 'Dentaire', 'Fertilité', 'Médecine esthétique'] as const;

export function getIntervention(slug: string) {
  return interventions.find(i => i.slug === slug);
}
