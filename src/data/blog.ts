export interface BlogBlock { h2?: string; p?: string[]; list?: string[]; table?: { head: string[]; rows: string[][] } }
export interface Article {
  slug: string; category: string; title: string; excerpt: string;
  metaTitle: string; metaDesc: string; date: string; readTime: string; author: string;
  intro: string; blocks: BlogBlock[]; conclusion: string;
}

export const articles: Article[] = [
  {
    slug: 'hallan-khenissi-fondatrice-portrait',
    category: "L'agence",
    title: 'Hallan Khenissi : qui est la femme derrière Health Travel ?',
    excerpt: "De l'expérience personnelle à la création d'une agence premium : parcours, vision et exigences de celle qui suit chaque patiente du premier message au suivi après le retour.",
    metaTitle: 'Hallan Khenissi, fondatrice de Health Travel : portrait',
    metaDesc: "Portrait de Hallan Khenissi, fondatrice et directrice de Health Travel, agence de tourisme médical premium en Tunisie. Parcours, vision, exigences.",
    date: '26 juillet 2026', readTime: '6 min', author: 'Équipe Health Travel',
    intro: "Derrière chaque séjour médical organisé par Health Travel, il y a une femme : Hallan Khenissi. Fondatrice et directrice de l'agence, elle répond encore personnellement aux messages, valide chaque dossier médical et suit les patientes bien après leur retour. Portrait d'une entrepreneure qui a fait de la confiance son métier.",
    blocks: [
      { h2: "Un parcours né d'une expérience personnelle", p: ["Avant de fonder Health Travel, Hallan Khenissi a elle-même mesuré à quel point organiser une opération de chirurgie esthétique à l'étranger pouvait ressembler à un parcours du combattant : devis opaques, agences injoignables après le paiement, chirurgiens que l'on ne rencontre jamais avant le jour J, suivi inexistant une fois rentrée chez soi.", "C'est de ce constat qu'est née l'agence : prouver qu'une autre manière de faire était possible — plus humaine, plus transparente et médicalement plus rigoureuse."] },
      { h2: 'Sa règle d\u2019or : le médical avant le marketing', p: ["Chez Health Travel, aucune intervention n'est proposée avant l'étude du dossier médical. C'est la règle n°1, et elle n'a jamais changé."], list: ["Chaque chirurgien partenaire est rencontré, vérifié et suivi dans la durée — diplômes, certifications, résultats réels.", "Chaque clinique est visitée en personne avant la moindre patiente envoyée.", "Les devis sont personnalisés, détaillés poste par poste, sans frais cachés.", "Un dossier médical à risque ? Hallan préfère refuser une patiente plutôt que compromettre sa sécurité."] },
      { h2: "Un rôle de chef d'orchestre", p: ["Entre les patientes, les chirurgiens, les cliniques et les accompagnatrices, Hallan coordonne tout : consultations vidéo, organisation du voyage, séjour médical postopératoire adapté à chaque intervention, suivi à distance après le retour. Son téléphone ne s'éteint jamais vraiment — et les patientes le savent."] },
      { h2: 'Sa philosophie, en trois phrases', list: ["« Vous ne serez jamais seule » — la promesse faite à chaque patiente, du premier message au dernier suivi.", "« Nous ne vendons pas des opérations. Nous construisons une relation de confiance. »", "« La chirurgie esthétique n'est pas un caprice : c'est un choix profond, qui mérite un accompagnement à la hauteur de son importance. »"] }
    ],
    conclusion: "Celles qui ont voyagé avec Health Travel le résument souvent ainsi : avec Hallan, on ne se sent jamais « cliente » — on se sent accompagnée."
  },
  {
    slug: 'temoignage-sophie-bbl-tunis',
    category: 'Témoignages',
    title: 'Le parcours de Sophie : son BBL à Tunis raconté de A à Z',
    excerpt: "Premier message un dimanche soir, consultation vidéo, arrivée à Tunis, réveil en clinique : Sophie raconte chaque étape de son parcours avec Health Travel.",
    metaTitle: 'Témoignage BBL en Tunisie : le parcours de Sophie | Health Travel',
    metaDesc: "Sophie raconte son BBL en Tunisie avec Health Travel : consultation vidéo, accueil, séjour médical postopératoire et suivi après le retour.",
    date: '22 juillet 2026', readTime: '7 min', author: 'Équipe Health Travel',
    intro: "Sophie, 32 ans, venue de Lyon, avait coché toutes les cases de la patiente anxieuse : peur de l'inconnu, peur du résultat, peur d'être seule là-bas. Un an après son BBL à Tunis, elle a accepté de raconter son parcours, étape par étape. Un récit recueilli par notre équipe.",
    blocks: [
      { h2: 'Le déclic : un message un dimanche soir', p: ["« J'ai envoyé mon premier message sur WhatsApp un dimanche à 22h, sans trop y croire. Hallan m'a répondu dans la soirée. Pas avec un message automatique : avec des questions précises sur ma morphologie, mes attentes, mon historique médical. J'ai tout de suite senti que ce n'était pas une agence comme les autres. »"] },
      { h2: 'La consultation vidéo qui a tout changé', p: ["Quelques jours plus tard, Sophie rencontre en visio le chirurgien qui l'opérera. « Il a analysé mes photos, m'a expliqué exactement ce qui était possible pour MA morphologie — et ce qui ne l'était pas. Il m'a même déconseillé un volume trop important que j'avais vu sur Instagram. Cette honnêteté m'a convaincue. »", "Le devis arrive ensuite : personnalisé, détaillé, sans surprise. Sophie prend le temps de réfléchir. « Personne ne m'a mise sous pression. C'est moi qui ai rappelé. »"] },
      { h2: "L'arrivée à Tunis : prise en main immédiate", p: ["À la sortie de l'aéroport, une accompagnatrice francophone l'attend. « Bilan pré-opératoire à la clinique, rencontre en chair et en os avec le chirurgien et l'anesthésiste : toutes mes dernières questions ont trouvé une réponse. Je me sentais attendue, pas traitée comme un numéro. »"] },
      { h2: "L'intervention et le séjour médical postopératoire", p: ["L'opération se déroule en clinique, dans un bloc moderne. « À mon réveil, l'infirmière était à côté, et Hallan est passée me voir le jour même. »", "Après la clinique, la convalescence se poursuit dans un cadre calme, adapté à sa récupération, avec le protocole post-BBL expliqué au millimètre : position pour dormir, coussin spécial, gaine de contention, consultations de contrôle avant le retour. « Chaque jour, quelqu'un de l'équipe prenait de mes nouvelles. »"] },
      { h2: "Le retour, et un suivi qui ne s'arrête pas à l'aéroport", p: ["De retour à Lyon, les consultations vidéo de contrôle s'enchaînent selon le calendrier prévu, et WhatsApp reste ouvert en permanence. « J'ai envoyé une photo un soir parce qu'un œdème m'inquiétait. Réponse en vingt minutes, et le chirurgien m'a rassurée dès le lendemain en visio. »"] },
      { h2: 'Un an après, son bilan', p: ["« Le résultat est naturel, harmonieux — exactement ce que le chirurgien m'avait projeté en consultation. Mais si je devais retenir une chose, ce n'est pas seulement le résultat : c'est de ne jamais m'être sentie seule, à aucun moment. »"] }
    ],
    conclusion: "Envie d'écrire votre propre histoire ? Écrivez-nous sur WhatsApp ou demandez votre devis personnalisé : réponse sous 24h, sans engagement."
  },
  {
    slug: 'temoignage-claire-rhinoplastie-tunis',
    category: 'Témoignages',
    title: 'Claire, 34 ans : sa rhinoplastie à Tunis, un an après',
    excerpt: "Un complexe d'adolescence, des mois d'hésitation, puis une consultation vidéo qui change tout : le récit complet de Claire, un an après sa rhinoplastie.",
    metaTitle: 'Témoignage rhinoplastie Tunisie : Claire, un an après | Health Travel',
    metaDesc: "Claire témoigne un an après sa rhinoplastie en Tunisie organisée par Health Travel : doutes, chirurgien, jour J, résultat final.",
    date: '18 juillet 2026', readTime: '6 min', author: 'Équipe Health Travel',
    intro: "Claire, 34 ans, de Bruxelles, pensait à la bosse sur son nez « depuis le collège ». Un an après sa rhinoplastie à Tunis, elle revient sur son parcours : les doutes, le choix du chirurgien, le jour J — et ce que cette opération a changé au-delà du miroir.",
    blocks: [
      { h2: 'Un complexe depuis l\u2019adolescence', p: ["« Sur les photos de profil, je détournais le visage. J'ai repoussé la décision pendant quinze ans, d'abord par peur du bistouri, ensuite par peur de mal choisir. Ce qui me bloquait, ce n'était pas l'opération : c'était de confier mon visage à quelqu'un. »"] },
      { h2: 'Pourquoi elle a choisi Health Travel', p: ["Après des semaines de recherches, Claire retient trois agences et les met à l'épreuve avec les mêmes questions. « Health Travel est la seule à m'avoir proposé une consultation vidéo directe avec le chirurgien, pas avec un commercial. Et la seule à m'avoir demandé un bilan médical complet AVANT de me parler d'organisation. »"] },
      { h2: 'La rencontre avec le chirurgien', p: ["En visio, le chirurgien analyse sa structure nasale et lui montre des cas comparables. « Il m'a dit une phrase que je n'oublierai pas : “Je ne vais pas vous faire un nouveau nez, je vais révéler le vôtre.” C'est exactement ce que je voulais entendre. »"] },
      { h2: 'Le jour J à Tunis', p: ["Accueil à l'aéroport, bilan complet à la clinique, dernier échange avec le chirurgien et l'anesthésiste. « Je suis entrée au bloc en serrant la main de mon accompagnatrice. À mon réveil, elle était là. Hallan aussi, le soir même. » Les jours suivants sont rythmés par les soins en clinique, les contrôles, puis une convalescence organisée et encadrée jusqu'au feu vert médical pour le vol retour."] },
      { h2: 'Un an après', p: ["« L'œdème a mis des mois à s'effacer complètement — on me l'avait dit, et il faut effectivement être patiente. Mais aujourd'hui, mon nez est celui que j'aurais dû avoir. Et surtout : je ne détourne plus la tête sur les photos. »"] }
    ],
    conclusion: "La rhinoplastie est l'intervention la plus technique de la chirurgie du visage. Une consultation vidéo avec un chirurgien spécialisé est la première étape — gratuite et sans engagement."
  },
  {
    slug: 'temoignage-nadia-abdominoplastie',
    category: 'Témoignages',
    title: 'Nadia : retrouver son ventre — et sa confiance — après deux grossesses',
    excerpt: "Après deux césariennes, Nadia ne reconnaissait plus son corps. Récit de son abdominoplastie à Tunis, entre organisation familiale et renaissance.",
    metaTitle: 'Témoignage abdominoplastie Tunisie après grossesse | Health Travel',
    metaDesc: "Nadia témoigne après son abdominoplastie en Tunisie avec Health Travel : diastasis, organisation, prise en charge en clinique et suivi au retour.",
    date: '14 juillet 2026', readTime: '6 min', author: 'Équipe Health Travel',
    intro: "Deux grossesses, deux césariennes, et un ventre « qui ne revenait pas » malgré le sport et les régimes. Nadia, 38 ans, de Lille, souffrait d'un diastasis des grands droits — un écartement des muscles abdominaux que seule la chirurgie peut réparer. Elle raconte.",
    blocks: [
      { h2: '« Ce n\u2019était plus une question de silhouette »', p: ["« Au-delà de l'esthétique, j'avais mal au dos, je me sentais affaiblie. Mon médecin a confirmé le diastasis. Quand j'ai compris qu'aucune séance d'abdominaux ne réparerait mes muscles, j'ai commencé à me renseigner sérieusement. »"] },
      { h2: 'Organiser le départ avec deux enfants', p: ["La vraie appréhension de Nadia n'était pas médicale : c'était logistique. « Partir sans mes enfants, c'était inimaginable pour moi. L'équipe m'a aidée à planifier un séjour médical adapté à mon intervention et à mon état de santé — ni trop court, ni inutilement long. Mon mari a pris des congés, ma sœur s'est déplacée. Tout était calé. »"] },
      { h2: 'La prise en charge sur place', p: ["« À la clinique, tout était rodé : bilan, marquage avec le chirurgien, anesthésie. À mon réveil, je savais déjà que c'était transformant. » Les premiers jours sont consacrés aux soins, à la contention, à la remise sur pied en douceur — avec l'accompagnatrice francophone toujours joignable et les visites de contrôle du chirurgien."] },
      { h2: 'Le suivi qui ne s\u2019arrête pas à l\u2019aéroport', p: ["« C'est ce qui m'a le plus marquée. Des mois après, je recevais encore des nouvelles, mes consultations vidéo de contrôle étaient honorées, et mes questions trouvaient toujours une réponse. Je n'ai jamais eu l'impression d'être un dossier clos. »"] },
      { h2: 'Aujourd\u2019hui', p: ["« J'ai retrouvé un ventre plat, un dos qui ne me fait plus souffrir, et une confiance que je n'espérais plus. Mes enfants disent que je souris davantage. Ils ont raison. »"] }
    ],
    conclusion: "L'abdominoplastie est une intervention de reconstruction autant qu'esthétique. Notre équipe vous aide à évaluer votre situation en consultation vidéo — gratuitement et sans engagement."
  },
  {
    slug: 'pourquoi-jai-cree-health-travel',
    category: "L'agence",
    title: "« Pourquoi j'ai créé Health Travel » — la lettre de notre fondatrice",
    excerpt: "Hallan Khenissi prend la plume : ce qu'elle a vu de pire dans l'industrie, et les trois engagements sur lesquels elle a bâti son agence.",
    metaTitle: "Pourquoi j'ai créé Health Travel — lettre de la fondatrice",
    metaDesc: "Hallan Khenissi, fondatrice de Health Travel, explique pourquoi elle a créé son agence de tourisme médical en Tunisie : confiance, transparence, suivi.",
    date: '9 juillet 2026', readTime: '5 min', author: 'Hallan Khenissi',
    intro: "On me demande souvent pourquoi j'ai créé une agence de tourisme médical. La réponse tient en quelques rencontres — et en trois engagements que je n'ai jamais trahis. Je l'écris aujourd'hui, une fois, pour toutes celles qui hésitent encore.",
    blocks: [
      { h2: "J'ai vu trop de patientes abandonnées", p: ["Avant Health Travel, j'ai croisé des dizaines de femmes opérées loin de chez elles, dans des conditions dignes — mais laissées seules. Seules face aux devis qui gonflent au dernier moment. Seules face aux agences qui ne répondent plus une fois le virement effectué. Seules face à leurs questions, le jour où un œdème inquiète, à des milliers de kilomètres du bloc opératoire.", "Je me suis promis une chose : aucune femme accompagnée par mon équipe ne vivra jamais cela."] },
      { h2: 'Trois engagements non négociables', list: ["La transparence : des devis personnalisés, détaillés, sans frais cachés — et le droit de prendre votre temps.", "La sécurité : des chirurgiens que je connais personnellement, des cliniques que j'ai visitées, un dossier médical étudié avant toute proposition.", "La présence : une équipe joignable 7j/7, avant, pendant et surtout APRÈS votre séjour. Le suivi ne s'arrête pas à l'aéroport."] },
      { h2: "Ce que je regarde avant d'accepter un dossier", p: ["On croit souvent qu'une agence dit oui à tout. La nôtre dit parfois non. Non quand l'intervention demandée n'est pas indiquée médicalement. Non quand les attentes sont irréalistes. Non quand le timing médical n'est pas le bon. Ces « non » sont peut-être ce dont je suis le plus fière : ils prouvent que votre santé passe avant tout le reste."] },
      { h2: 'Ma porte reste ouverte', p: ["Si vous hésitez, si vous avez peur, si vous avez été déçue ailleurs : écrivez-moi. Je lis encore chaque message. Et si votre projet se concrétise, je serai là — du premier échange à votre dernier contrôle, et bien au-delà."] }
    ],
    conclusion: "Health Travel n\u2019est pas une agence de plus. C\u2019est une promesse : vous ne serez jamais seule. — Hallan Khenissi"
  },
  {
    slug: 'une-journee-equipe-health-travel-tunis',
    category: "L'agence",
    title: "Coulisses : une journée avec l'équipe Health Travel à Tunis",
    excerpt: "Revue des dossiers à 8h30, consultations vidéo, coordination avec les cliniques, suivi des patientes rentrées : immersion au Tanit Business Center.",
    metaTitle: 'Coulisses de Health Travel : une journée avec notre équipe à Tunis',
    metaDesc: "Immersion dans les bureaux de Health Travel à Tunis : suivi des patientes, consultations vidéo avec les chirurgiens, coordination avec les cliniques partenaires.",
    date: '3 juillet 2026', readTime: '5 min', author: 'Équipe Health Travel',
    intro: "Tanit Business Center, au cœur de Tunis. C'est ici, dans ces bureaux, que chaque parcours patient commence — bien avant la clinique. Après vous avoir montré nos coulisses en vidéo sur la page d'accueil, voici à quoi ressemble une journée type de l'équipe.",
    blocks: [
      { h2: '8h30 — la revue des dossiers', p: ["La journée commence par le point d'équipe : nouvelles demandes de devis reçues dans la nuit, dossiers médicaux à compléter, patientes en cours de séjour à Tunis. Chaque dossier est passé en revue, chaque situation a un nom et un visage."] },
      { h2: '11h00 — consultations vidéo avec les chirurgiens', p: ["C'est le cœur du métier : les échanges en visio entre nos futures patientes et les chirurgiens qui les opéreront. Analyse des photos, réponses aux questions, parfois un avis médical qui recommande d'attendre — ou de renoncer. Notre équipe prépare chaque rendez-vous et reste disponible pendant l'échange."] },
      { h2: '14h00 — coordination avec les cliniques partenaires', p: ["Plannings de bloc, disponibilités des chirurgiens, organisation des séjours médicaux postopératoires adaptés à chaque intervention : l'après-midi est consacré à la logistique médicale. Un travail invisible — et c'est précisément ce qui rend un séjour fluide pour nos patientes."] },
      { h2: '17h00 — le suivi des patientes rentrées chez elles', p: ["Photos de cicatrisation reçues sur WhatsApp, consultations vidéo de contrôle à J+7, J+30, J+90, questions de dernière minute : la fin de journée appartient à celles qui sont déjà rentrées. Chez Health Travel, un dossier n'est jamais « clos »."] },
      { h2: '7j/7, même le dimanche', p: ["Une angoisse un dimanche soir ? Une question la veille d'un vol ? L'équipe se relaie pour répondre tous les jours, en français, anglais, arabe, allemand ou italien. Parce qu'un séjour médical ne connaît pas les horaires de bureau."] }
    ],
    conclusion: "Vous voulez mettre un visage sur l'équipe qui vous accompagnera ? Regardez nos vidéos de coulisses sur la page d'accueil — ou écrivez-nous directement sur WhatsApp."
  },
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

export const blogCategories = ['Tous', "L'agence", 'Témoignages', 'Visage', 'Seins', 'Silhouette', 'Nutrition', 'Voyage', 'Conseils'];

export function getArticle(slug: string) {
  return articles.find(a => a.slug === slug);
}
