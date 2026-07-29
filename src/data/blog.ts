export interface BlogBlock { h2?: string; p?: string[]; list?: string[]; table?: { head: string[]; rows: string[][] } }
export interface Article {
  slug: string; category: string; title: string; excerpt: string;
  metaTitle: string; metaDesc: string; date: string; readTime: string; author: string;
  intro: string; blocks: BlogBlock[]; conclusion: string;
}

export const articles: Article[] = [
  {
    slug: 'liposuccion-vs-cryolipolyse',
    category: 'Silhouette',
    title: 'Liposuccion vs cryolipolyse : que choisir en 2026 ?',
    excerpt: 'Chirurgicale ou non invasive ? Comparaison honnête des deux techniques, basée sur notre expérience avec plus de 2 000 patientes.',
    metaTitle: 'Liposuccion vs cryolipolyse 2026 : quel traitement choisir ? | Health Travel',
    metaDesc: 'Comparaison complète liposuccion et cryolipolyse. Techniques, résultats, prix, convalescence. Guide 2026 par Health Travel Tunisie.',
    date: '12 juillet 2026', readTime: '6 min', author: 'Hallan Khenissi',
    intro: "Vous rêvez d'une silhouette plus affinée mais hésitez entre la liposuccion chirurgicale et la cryolipolyse non invasive ? Cette question revient chaque jour dans nos consultations vidéo. La réponse dépend de vos objectifs, de votre morphologie et de votre tolérance à la convalescence. Voici un comparatif honnête, basé sur notre expérience avec plus de 2 000 patientes.",
    blocks: [
      { h2: 'La liposuccion : la solution chirurgicale', p: ["La liposuccion reste la référence pour éliminer les graisses localisées de manière définitive. En aspirant physiquement les cellules graisseuses, elle offre un résultat immédiat et mesurable. Idéale pour les patientes ayant des zones importantes à traiter (ventre, hanches, cuisses) et souhaitant un résultat significatif en une seule séance."], list: ['Avantages : résultat définitif, une seule intervention, sculptage précis, combinaison possible avec BBL.', 'Inconvénients : anesthésie, convalescence 1-2 semaines, œdèmes et ecchymoses, port de gaine 1 mois.'] },
      { h2: 'La cryolipolyse : l\'alternative non invasive', p: ["La cryolipolyse (CoolSculpting) utilise le froid pour détruire les cellules graisseuses sans incision. Les résultats apparaissent progressivement sur 2 à 3 mois. Parfaite pour les petites zones rebelles et les patientes qui refusent toute chirurgie."], list: ['Avantages : sans anesthésie, sans cicatrice, sans temps d\'arrêt, sessions de 35-60 min.', 'Inconvénients : résultat progressif, plusieurs sessions nécessaires, moins efficace sur les grandes zones, coût cumulé élevé.'] },
      { h2: 'Tableau comparatif', table: { head: ['Critère', 'Liposuccion', 'Cryolipolyse'], rows: [
        ['Invasivité', 'Chirurgicale', 'Non invasive'],
        ['Anesthésie', 'Générale ou locale', 'Aucune'],
        ['Durée', '1-3h', '35-60 min/session'],
        ['Résultat', 'Immédiat (à 3 mois)', 'Progressif (2-3 mois)'],
        ['Sessions', '1', '2-4'],
        ['Convalescence', '1-2 semaines', 'Aucune'],
        ['Cicatrices', 'Minuscules (2-4 mm)', 'Aucune'],
        ['Tarif', 'Sur devis personnalisé', 'Par session, selon la zone'],
        ['Effet définitif', 'Oui', 'Oui (si poids stable)']
      ] } },
      { h2: 'Notre recommandation', list: ['Choisissez la liposuccion si vous avez plusieurs zones à traiter, si vous voulez un résultat immédiat et significatif, ou si vous envisagez un BBL.', 'Choisissez la cryolipolyse si vous avez une petite zone rebelle, si vous refusez absolument la chirurgie, ou si vous ne pouvez pas vous permettre de temps d\'arrêt.'] },
      { h2: 'Et le BBL dans tout ça ?', p: ['Le BBL (Brazilian Butt Lift) nécessite de la graisse autologue. Seule la liposuccion peut fournir cette graisse. Si vous envisagez un BBL, la cryolipolyse n\'est pas une option.'] }
    ],
    conclusion: 'La meilleure technique est celle qui correspond à VOS besoins. Prenez rendez-vous pour une consultation vidéo gratuite et personnalisée.'
  },
  {
    slug: 'preparer-abdominoplastie',
    category: 'Silhouette',
    title: 'Comment préparer son corps avant une abdominoplastie',
    excerpt: 'Le protocole complet validé par nos chirurgiens et notre nutritionniste : poids, tabac, alimentation, gainage et organisation.',
    metaTitle: 'Préparation abdominoplastie : guide complet avant l\'opération | Health Travel',
    metaDesc: 'Tout ce qu\'il faut savoir pour préparer son corps avant une abdominoplastie en Tunisie. Conseils nutrition, sport, arrêt tabac.',
    date: '5 juillet 2026', readTime: '7 min', author: 'Hallan Khenissi',
    intro: "L'abdominoplastie est l'une des interventions les plus transformantes de la chirurgie esthétique. Mais un résultat optimal ne dépend pas uniquement du chirurgien. Votre préparation physique et mentale joue un rôle crucial. Voici le protocole que nous recommandons à toutes nos patientes, validé par nos chirurgiens et notre nutritionniste.",
    blocks: [
      { h2: '1. Atteindre un poids stable (3-6 mois avant)', p: ["L'abdominoplastie n'est pas une méthode d'amaigrissement. Idéalement, vous devez être à un poids stable depuis au moins 3 à 6 mois. Un IMC entre 18,5 et 28 est recommandé. Si vous prévoyez une perte de poids importante, reportez l'intervention."] },
      { h2: '2. Arrêter de fumer (au moins 1 mois avant)', p: ['Le tabac réduit drastiquement la vascularisation des tissus, ce qui augmente le risque de nécrose et retarde la cicatrisation. Arrêt obligatoire 1 mois avant et 1 mois après. Pas de compromis.'] },
      { h2: '3. Optimiser votre alimentation', list: ['Protéines : 1,2-1,5 g/kg/jour (poisson, volaille, œufs, légumineuses)', 'Vitamine C : agrumes, poivrons, kiwi (collagène)', 'Zinc : huîtres, viande rouge, graines (cicatrisation)', 'Fer : si anémie détectée (bilan sanguin)', 'Hydratation : 2 L d\'eau minimum par jour', 'Éviter : alcool, sucres raffinés, excès de sel'] },
      { h2: '4. Renforcer le transverse abdominal', p: ['Des exercices ciblés sur le transverse (gainage, hypopressif) améliorent la tonicité de la paroi abdominale avant l\'intervention. Pas de crunchs — ils épaississent le muscle rectus.'] },
      { h2: '5. Organiser votre post-opération', list: ['Prévoir 2 semaines d\'arrêt de travail minimum', 'Organiser de l\'aide à domicile pour les 5 premiers jours', 'Prévoir des vêtements amples et boutonnés (pas de pull-over)', 'Commander la gaine de contention recommandée par le chirurgien', 'Prévoir des coussins pour dormir en position semi-assise'] },
      { h2: '6. Bilan médical complet', list: ['NFS, ionogramme, créatinine', 'TP, TCA, fibrinogène (coagulation)', 'Électrocardiogramme', 'Bilan hépatique', 'Groupe sanguin + RAI', 'Mammographie si > 40 ans (si combiné avec seins)'] }
    ],
    conclusion: 'Une préparation rigoureuse réduit les complications de 40 % et améliore significativement le résultat final. Notre équipe vous accompagne à chaque étape.'
  },
  {
    slug: 'bbl-5-erreurs',
    category: 'Silhouette',
    title: 'BBL : les 5 erreurs à éviter absolument',
    excerpt: 'Après plus de 400 BBL accompagnés, voici les 5 erreurs que nous voyons le plus souvent — et comment les éviter.',
    metaTitle: 'BBL Tunisie : 5 erreurs fatales à éviter | Health Travel',
    metaDesc: 'Les 5 erreurs les plus courantes avant un BBL en Tunisie. Conseils d\'experts pour un résultat naturel et sécurisé.',
    date: '28 juin 2026', readTime: '5 min', author: 'Hallan Khenissi',
    intro: "Le BBL (Brazilian Butt Lift) est l'intervention la plus demandée chez Health Travel. Mais c'est aussi celle qui génère le plus de questions — et d'angoisses. Après avoir accompagné plus de 400 patientes pour cette opération, voici les 5 erreurs que nous voyons le plus souvent, et comment les éviter.",
    blocks: [
      { h2: 'Erreur 1 : vouloir un volume excessif', p: ["Le BBL n'est pas une course au volume. Un excès de graisse injectée augmente le risque de nécrose graisseuse, d'asymétrie et de résultat artificiel. Un bon BBL respecte votre morphologie : la taille de vos fesses doit être en harmonie avec vos hanches et vos cuisses."] },
      { h2: 'Erreur 2 : négliger la qualité des zones donneuses', p: ['Le BBL nécessite de la graisse de bonne qualité. Si vous êtes trop mince, le chirurgien peut ne pas récupérer assez de graisse viable. L\'IMC idéal pour un BBL est entre 22 et 28.'] },
      { h2: 'Erreur 3 : ne pas respecter le protocole post-opératoire', p: ['Après un BBL, vous ne devez PAS vous asseoir directement sur vos fesses pendant 3 semaines minimum. Dormir sur le ventre ou sur le côté, coussin BBL obligatoire pour les sièges. Négliger ces consignes = résultat dégradé, voire réintervention.'] },
      { h2: 'Erreur 4 : choisir un chirurgien non spécialisé', p: ['Le BBL est technique. Il nécessite une connaissance approfondie de l\'anatomie vasculaire fessière pour éviter l\'embolie graisseuse (complication rare mais grave). Vérifiez les diplômes, les certifications et le nombre de BBL réalisés.'] },
      { h2: 'Erreur 5 : avoir des attentes irréalistes', p: ['Le BBL améliore vos fesses, il ne les transforme pas en celles d\'une célébrité. Votre morphologie de départ, la qualité de votre peau et votre génétique déterminent le résultat final. Une consultation vidéo honnête avec simulation 3D vous donnera une vision réaliste.'] }
    ],
    conclusion: 'Le BBL est une intervention magnifique quand elle est bien faite. Évitez ces 5 pièges et confiez-vous à une équipe expérimentée.'
  },
  {
    slug: 'rhinoplastie-ouverte-fermee',
    category: 'Visage',
    title: 'Rhinoplastie : chirurgie ouverte ou fermée ?',
    excerpt: 'Chaque millimètre compte. Différences, avantages et indications des deux techniques, expliqués simplement.',
    metaTitle: 'Rhinoplastie ouverte vs fermée : laquelle choisir ? | Health Travel',
    metaDesc: 'Différences entre rhinoplastie ouverte et fermée. Avantages, inconvénients, cicatrices, résultats. Guide par Health Travel Tunisie.',
    date: '20 juin 2026', readTime: '5 min', author: 'Hallan Khenissi',
    intro: "La rhinoplastie est l'intervention de chirurgie esthétique la plus technique. Chaque millimètre compte. Et le choix entre technique ouverte et technique fermée est l'une des premières décisions que vous prendrez avec votre chirurgien. Voici tout ce que vous devez savoir.",
    blocks: [
      { h2: 'La rhinoplastie fermée', p: ["L'incision est faite à l'intérieur des narines. Aucune cicatrice visible. Convalescence légèrement plus courte. Idéale pour les corrections modérées : bosse, pointe légèrement tombante, asymétrie mineure."], list: ['Avantages : pas de cicatrice externe, moins d\'œdème, retour social plus rapide.', 'Inconvénients : visibilité limitée pour le chirurgien, moins précise pour les révisions complexes.'] },
      { h2: 'La rhinoplastie ouverte', p: ["Une petite incision est faite sur la columelle (peau entre les narines), complétée par des incisions internes. Le nez est complètement dégagé, offrant une vision parfaite au chirurgien. Indispensable pour les rhinoplasties complexes, ethniques ou de révision."], list: ['Avantages : précision maximale, contrôle total des structures, idéale pour les pointes complexes.', 'Inconvénients : micro-cicatrice sur la columelle (invisible à 3 mois), œdème plus marqué, convalescence 10-14 jours.'] },
      { h2: 'Notre recommandation', list: ['Fermée : première rhinoplastie, correction simple, peau fine, patiente jeune.', 'Ouverte : rhinoplastie ethnique, révision, pointe complexe, peau épaisse, asymétrie majeure.'] }
    ],
    conclusion: 'Le choix dépend de votre anatomie et de vos objectifs. Notre chirurgien spécialisé en rhinoplastie vous guidera vers la technique la plus adaptée lors de votre consultation vidéo.'
  },
  {
    slug: 'tourisme-medical-tunisie-guide',
    category: 'Voyage',
    title: 'Tourisme médical en Tunisie : guide complet 2026',
    excerpt: 'Qualité, prix, sécurité, formalités : tout ce qu\'il faut savoir avant de partir se faire opérer en Tunisie.',
    metaTitle: 'Tourisme médical Tunisie 2026 : guide complet & sécurisé | Health Travel',
    metaDesc: 'Tout savoir sur le tourisme médical en Tunisie en 2026. Sécurité, qualité, prix, formalités. Guide pratique par Health Travel.',
    date: '10 juin 2026', readTime: '8 min', author: 'Hallan Khenissi',
    intro: "La Tunisie accueille chaque année plus de 700 000 patients étrangers pour des soins médicaux. La chirurgie esthétique représente le segment le plus dynamique. Mais partir se faire opérer à l'étranger soulève naturellement des questions. Ce guide répond à tout.",
    blocks: [
      { h2: 'Pourquoi choisir la Tunisie ?', list: ['Qualité médicale : chirurgiens formés en Europe et aux USA, cliniques certifiées ISO/JCI', 'Prix compétitifs : 60 à 70 % moins cher qu\'en France ou en Suisse, sans compromis qualité', 'Proximité géographique : 2h30 de vol depuis Paris, même fuseau horaire', 'Tourisme : convalescence dans un cadre ensoleillé, plages, culture', 'Langue : français parlé couramment, aucune barrière'] },
      { h2: 'Les formalités', list: ['Passeport valide 6 mois minimum', 'Aucun visa pour les ressortissants européens (séjour < 90 jours)', 'Assurance voyage recommandée (nous proposons des partenariats)', 'Bilan médical à jour'] },
      { h2: 'La sécurité', list: ['Zones sécurisées : Tunis, Sousse, Hammamet', 'Transferts organisés porte à porte', 'Accompagnatrice dédiée pendant tout le séjour', 'Cliniques avec service d\'urgence 24/7'] },
      { h2: 'Le coût total d\'un séjour', table: { head: ['Élément', 'Organisation'], rows: [
        ['Vol A/R', 'Selon votre ville de départ'],
        ['Séjour médical postopératoire', 'Adapté à votre intervention et à votre état de santé'],
        ['Transferts privés', 'Inclus dans l\'organisation'],
        ['Intervention + prise en charge', 'Sur devis personnalisé'],
        ['Durée du séjour', 'Déterminée après étude du dossier médical']
      ] } }
    ],
    conclusion: 'La Tunisie offre aujourd\'hui un rapport qualité-prix inégalé en tourisme médical. Avec un accompagnement professionnel comme Health Travel, votre sécurité et votre confort sont garantis.'
  },
  {
    slug: 'nutrition-post-operatoire',
    category: 'Nutrition',
    title: 'Nutrition post-opératoire : quoi manger pour bien cicatriser',
    excerpt: 'Les 5 nutriments essentiels, les aliments à éviter et un menu type pour accélérer votre cicatrisation.',
    metaTitle: 'Nutrition post-opératoire : aliments pour bien cicatriser | Health Travel',
    metaDesc: 'Quels aliments manger après une chirurgie esthétique pour cicatriser plus vite ? Guide nutrition post-op par Health Travel Tunisie.',
    date: '2 juin 2026', readTime: '6 min', author: 'Hallan Khenissi',
    intro: "Après une chirurgie esthétique, votre corps a besoin de ressources pour réparer les tissus, réduire l'inflammation et minimiser les cicatrices. Ce que vous mangez — ou ne mangez pas — dans les 30 jours suivant l'opération influence directement votre résultat final.",
    blocks: [
      { h2: 'Les 5 nutriments essentiels', list: ['Protéines (1,5 g/kg/jour) : poisson, œufs, volaille, légumineuses — sans protéines, pas de réparation tissulaire.', 'Vitamine C (1 g/jour) : kiwi, poivron rouge, orange, fraise — cofacteur indispensable du collagène.', 'Zinc (15-30 mg/jour) : huîtres, viande rouge, graines de citrouille — accélère la cicatrisation.', 'Oméga-3 : saumon, sardines, chia, noix — anti-inflammatoires naturels, réduisent les œdèmes.', 'Vitamine A : carottes, patate douce, épinards — régénération épithéliale.'] },
      { h2: 'Ce qu\'il faut absolument éviter', list: ['Alcool : dilate les vaisseaux, augmente le saignement. Interdit 2 semaines minimum.', 'Tabac : vasoconstriction, nécrose tissulaire. Interdit 1 mois.', 'Sucres raffinés : inflammation, œdèmes persistants.', 'Sodium excessif : rétention d\'eau, gonflement.', 'Café excessif : déshydratation. Max 1 tasse/jour.'] },
      { h2: 'Menu type J+1 à J+7', list: ['Petit-déjeuner : smoothie protéiné (banane, lait d\'amande, whey, baies) + 1 kiwi', 'Collation : yaourt grec + graines de chia + miel', 'Déjeuner : saumon grillé + quinoa + brocolis vapeur + huile d\'olive', 'Goûter : amandes + orange', 'Dîner : soupe de lentilles + blanc de poulet + salade de roquette', 'Hydratation : 2,5 L d\'eau + tisane de camomille'] }
    ],
    conclusion: 'Votre alimentation post-opératoire est aussi importante que l\'intervention elle-même. Notre nutritionniste vous établit un plan personnalisé inclus dans votre package Health Travel.'
  }
];

export const blogCategories = ['Tous', 'Visage', 'Seins', 'Silhouette', 'Nutrition', 'Voyage', 'Conseils'];

export function getArticle(slug: string) {
  return articles.find(a => a.slug === slug);
}
