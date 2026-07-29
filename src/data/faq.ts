export interface FaqTheme { theme: string; items: { q: string; a: string }[] }

export const faqThemes: FaqTheme[] = [
  {
    theme: 'Généralités',
    items: [
      { q: 'Qu\'est-ce que Health Travel exactement ?', a: 'Health Travel est une agence de tourisme médical spécialisée dans la chirurgie esthétique en Tunisie. Nous sélectionnons les meilleurs chirurgiens et cliniques certifiées, et organisons votre séjour complet de A à Z. Nous ne sommes pas une clinique — nous sommes votre accompagnateur de confiance.' },
      { q: 'Depuis quand Health Travel existe-t-elle ?', a: 'Health Travel a été fondée en 2018 par Hallan Khenissi. Depuis, nous avons accompagné plus de 2 000 patientes de 15 pays différents.' },
      { q: 'Health Travel est-elle une clinique ?', a: 'Non. Nous sommes une agence de tourisme médical. Nous collaborons avec plusieurs cliniques certifiées et chirurgiens indépendants que nous sélectionnons rigoureusement.' },
      { q: 'Où sont situées vos cliniques partenaires ?', a: 'Principalement à Tunis et Sousse, dans des zones sécurisées et facilement accessibles depuis l\'aéroport.' },
      { q: 'Parlez-vous ma langue ?', a: 'Oui. Notre équipe parle français, anglais, arabe, allemand et italien. Le chirurgien qui vous suit parle au minimum le français et l\'anglais.' },
      { q: 'Puis-je visiter la clinique avant de décider ?', a: 'Bien sûr. Nous organisons des visites virtuelles en visioconférence. Si vous êtes déjà en Tunisie, une visite physique peut être organisée sur rendez-vous.' },
      { q: 'Comment puis-je vérifier les diplômes des chirurgiens ?', a: 'Toutes les fiches chirurgiens sur notre site incluent les diplômes, universités et numéros d\'inscription à l\'ordre des médecins. Nous vous fournissons également les documents sur demande.' },
      { q: 'Puis-je parler à d\'anciennes patientes ?', a: 'Oui, avec leur consentement. Nous mettons en relation les patientes intéressées avec des patientes ayant fait la même intervention, dans le respect total de la confidentialité.' },
      { q: 'Quels pays représentent vos patientes ?', a: 'France, Belgique, Suisse, Canada, Allemagne, Italie, Royaume-Uni, Algérie, Maroc, Côte d\'Ivoire, Sénégal, et bien d\'autres.' },
      { q: 'Proposez-vous des garanties ?', a: 'Nous garantissons la transparence, l\'accompagnement illimité et la qualité médicale. En cas de complication nécessitant une révision, nous étudions chaque cas avec le chirurgien pour déterminer la prise en charge.' },
      { q: 'Puis-je annuler ou reporter mon intervention ?', a: 'Oui. Un report est possible sans frais jusqu\'à 14 jours avant la date. Un acompte est conservé pour toute annulation dans les 7 jours précédents.' },
      { q: 'Comment se déroule la première prise de contact ?', a: 'Par formulaire en ligne, WhatsApp ou email. Nous vous répondons sous 24h avec une fourchette de prix, des informations sur l\'intervention et la proposition d\'une consultation vidéo.' },
      { q: 'Faites-vous de la chirurgie réparatrice ?', a: 'Oui, sur demande et après évaluation médicale. Nous collaborons avec des chirurgiens spécialisés en chirurgie réparatrice et reconstructrice.' },
      { q: 'Acceptez-vous les patientes transgenres ?', a: 'Oui, avec bienveillance et discrétion. Nous travaillons avec des chirurgiens expérimentés en chirurgie d\'affirmation de genre.' },
      { q: 'Puis-je opérer plusieurs membres de ma famille ?', a: 'Oui, nous organisons des séjours groupés avec tarifs préférentiels. Chaque membre a son propre chirurgien et son propre accompagnement.' }
    ]
  },
  {
    theme: 'Interventions',
    items: [
      { q: 'Quelle est l\'intervention la plus demandée ?', a: 'Le BBL et la liposuccion sont nos interventions les plus populaires, suivies de la rhinoplastie et de l\'augmentation mammaire.' },
      { q: 'Puis-je combiner plusieurs interventions ?', a: 'Oui, c\'est même recommandé pour optimiser le séjour. Les combos les plus courants : liposuccion + BBL, abdominoplastie + seins (Mommy Makeover), rhinoplastie + blépharoplastie.' },
      { q: 'Quelle est la durée moyenne d\'une intervention ?', a: 'De 1 heure (blépharoplastie) à 4 heures (Mommy Makeover). Le chirurgien vous informe précisément lors de la consultation.' },
      { q: 'L\'anesthésie est-elle générale ?', a: 'Générale pour la plupart des interventions. Locale + sédation pour les petites zones. L\'anesthésiste vous évalue avant toute décision.' },
      { q: 'Les prothèses mammaires sont-elles garanties à vie ?', a: 'Les prothèses modernes (Mentor, Motiva) ont une garantie fabricant de 10 ans. Nous recommandons un suivi échographique ou IRM tous les 2 ans.' },
      { q: 'Le BBL est-il définitif ?', a: 'Oui, les cellules graisseuses greffées deviennent permanentes après 3 mois. Cependant, une perte de poids massive peut réduire le volume.' },
      { q: 'La rhinoplastie peut-elle corriger mes problèmes respiratoires ?', a: 'Oui, la rhinoplastie fonctionnelle corrige la déviation de cloison, les cornets hypertrophiques et améliore la ventilation nasale.' },
      { q: 'La greffe capillaire est-elle douloureuse ?', a: 'Non. L\'anesthésie locale rend la zone insensible. Un léger inconfort peut survenir le soir de l\'intervention, géré par des antalgiques.' },
      { q: 'Combien de greffons sont nécessaires ?', a: 'De 1 500 à 4 500 selon la zone et la densité souhaitée. Le chirurgien évalue lors de la consultation.' },
      { q: 'La liposuccion VASER est-elle meilleure ?', a: 'Plus précise pour la sculpture, moins traumatisante pour les tissus, meilleure rétraction cutanée. Recommandée pour les patientes avec peau de qualité moyenne.' },
      { q: 'L\'abdominoplastie enlève-t-elle les vergetures ?', a: 'Les vergetures situées sous le nombril sont généralement excisées avec l\'excès de peau. Celles au-dessus restent mais sont souvent moins visibles après tension.' },
      { q: 'Le Mommy Makeover inclut-il tout ?', a: 'Oui. Abdominoplastie, liposuccion des flancs, et intervention sur les seins (augmentation, réduction ou lifting). Personnalisable selon vos besoins.' },
      { q: 'La chirurgie intime est-elle discrète ?', a: 'Absolument. Consultation et intervention dans un cadre totalement privé. Aucune information n\'est partagée. Accompagnement par une équipe féminine sur demande.' },
      { q: 'Le lifting du visage laisse-t-il des cicatrices visibles ?', a: 'Les incisions sont dissimulées dans les cheveux et derrière les oreilles. Invisibles après 3 mois.' },
      { q: 'La blépharoplastie est-elle ambulatoire ?', a: 'Oui. Durée 1h, retour à l\'hôtel le jour même. Œdèmes légers pendant 5 à 7 jours.' },
      { q: 'Le lifting des bras enlève-t-il la peau en excès ?', a: 'Oui. L\'excès de peau est excisé et les tissus profonds remis en tension. Cicatrice dissimulée dans le pli interne du bras.' },
      { q: 'Le lipœdème peut-il être traité chirurgicalement ?', a: 'Oui, par liposuccion spécialisée (technique WAL ou tumescente). Soulagement significatif de la douleur et de la lourdeur.' },
      { q: 'La réduction mammaire est-elle remboursée ?', a: 'En Tunisie, non. Dans votre pays d\'origine, certaines mutuelles remboursent si le poids des seins cause des douleurs dorsales documentées.' },
      { q: 'Le lifting mammaire sans prothèse est-il possible ?', a: 'Oui, si le volume est suffisant. Sinon, une prothèse légère peut être associée pour restaurer le galbe.' },
      { q: 'La chirurgie esthétique est-elle douloureuse ?', a: 'La douleur est gérée efficacement par les antalgiques modernes. La plupart des patientes décrivent un inconfort modéré plutôt qu\'une douleur intense.' }
    ]
  },
  {
    theme: 'Séjour & Logistique',
    items: [
      { q: 'Comment réserver mon vol ?', a: 'Nous nous en chargeons. Nous vous proposons 2 à 3 options de vols selon vos préférences (horaires, compagnie, escale).' },
      { q: 'Quel hôtel me sera attribué ?', a: 'Hôtel 4 étoiles minimum, situé à proximité de la clinique. Chambre privée avec salle de bain, climatisation, WiFi. Chambre double disponible pour l\'accompagnant.' },
      { q: 'L\'accompagnatrice parle-t-elle français ?', a: 'Oui, toutes nos accompagnatrices parlent au minimum français et arabe. Certaines parlent également anglais et allemand.' },
      { q: 'Puis-je visiter la Tunisie pendant ma convalescence ?', a: 'Oui, selon votre état. Sidi Bou Saïd, Carthage, médina de Tunis. Le chirurgien valide chaque sortie.' },
      { q: 'Le transfert aéroport est-il inclus ?', a: 'Oui, dans tous nos packages. Chauffeur privé, véhicule climatisé, prise en charge à l\'arrivée et au départ.' },
      { q: 'Puis-je prolonger mon séjour pour du tourisme ?', a: 'Oui, sur demande et avec l\'accord médical. Nous organisons des excursions vers le Sahara, Djerba ou Sidi Bou Saïd.' },
      { q: 'Y a-t-il un restaurant à l\'hôtel ?', a: 'Oui, et nous proposons également un service de livraison de repas adaptés à votre régime post-opératoire (riche en protéines, pauvre en sel).' },
      { q: 'Puis-je sortir seule pendant le séjour ?', a: 'Oui, mais nous recommandons de toujours informer votre accompagnatrice. La Tunisie est sûre mais une vigilance de base est recommandée.' },
      { q: 'Le WiFi est-il disponible ?', a: 'Oui, dans l\'hôtel, la clinique et les véhicules. Notre équipe reste joignable par WhatsApp 24/7.' },
      { q: 'Puis-je recevoir des visites à la clinique ?', a: 'Oui, dans les horaires de visite. Nous recommandons de limiter les visites les 2 premiers jours pour préserver votre repos.' },
      { q: 'Comment gérer mes médicaments pendant le vol retour ?', a: 'Nous vous fournissons une ordonnance internationale, un certificat médical et les médicaments nécessaires pour le voyage. Gardez-les en cabine.' },
      { q: 'Le chirurgien me donne-t-il un certificat médical ?', a: 'Oui, certificat d\'intervention, ordonnance, compte-rendu opératoire et protocole de suivi. Tout est traduit en français.' },
      { q: 'Puis-je voyager seule ?', a: 'Oui, de nombreuses patientes voyagent seules. Notre accompagnatrice reste à vos côtés en permanence. Cependant, un accompagnant est recommandé pour les interventions lourdes.' },
      { q: 'Quel adaptateur électrique faut-il ?', a: 'Prises type C et E (européennes). Aucun adaptateur nécessaire pour les ressortissants européens.' },
      { q: 'Y a-t-il des pharmacies à proximité ?', a: 'Oui, plusieurs pharmacies ouvertes 24h/24 à proximité de nos hôtels et cliniques.' }
    ]
  },
  {
    theme: 'Prix & Paiement',
    items: [
      { q: 'Pourquoi les prix sont-ils moins chers en Tunisie ?', a: 'Le coût de la vie et des salaires sont plus bas, mais la qualité médicale est identique. Nos chirurgiens sont formés aux mêmes standards internationaux.' },
      { q: 'Le devis est-il vraiment gratuit ?', a: 'Oui, totalement gratuit et sans engagement. Vous recevez une fourchette de prix sous 24h, puis un devis détaillé après la consultation vidéo.' },
      { q: 'Quels modes de paiement acceptez-vous ?', a: 'Virement bancaire, carte bancaire via Stripe (sécurisé), espèces sur place. Paiement en plusieurs fois possible (30 % à la réservation, solde avant l\'intervention).' },
      { q: 'Le prix inclut-il vraiment tout ?', a: 'Oui : chirurgien, anesthésie, hospitalisation, médicaments, pansements, transferts, hôtel, accompagnatrice. Analyses médicales préalables et vol non inclus.' },
      { q: 'Y a-t-il des frais cachés ?', a: 'Non. Notre politique de transparence est absolue. Si des analyses supplémentaires sont nécessaires, nous vous en informons avant toute décision.' },
      { q: 'Puis-je payer en plusieurs fois ?', a: 'Oui. 30 % à la réservation, 40 % une semaine avant, 30 % sur place. Contactez-nous pour des solutions personnalisées.' },
      { q: 'Le prix change-t-il selon la saison ?', a: 'Non, nos tarifs sont fixes toute l\'année. Cependant, les vols peuvent être plus chers en haute saison (juillet-août).' },
      { q: 'Puis-je obtenir une facture pour ma mutuelle ?', a: 'Oui, nous fournissons une facture détaillée en français et en anglais. Certaines mutuelles remboursent partiellement les interventions médicalement justifiées.' },
      { q: 'Le prix du BBL inclut-il la liposuccion ?', a: 'Oui. Le BBL est un package : liposuccion des zones donneuses + purification de la graisse + injection dans les fesses.' },
      { q: 'Quel est le prix moyen d\'une rhinoplastie en Tunisie ?', a: 'Entre 2 200 € et 3 500 € selon la complexité (première intervention vs révision, technique ouverte vs fermée).' }
    ]
  },
  {
    theme: 'Sécurité & Risques',
    items: [
      { q: 'Quels sont les risques de la chirurgie esthétique ?', a: 'Comme toute chirurgie : saignement, infection, réaction à l\'anesthésie, cicatrices, asymétrie. Ces risques sont rares (< 2 %) et gérés par nos protocoles stricts.' },
      { q: 'Que se passe-t-il en cas d\'embolie graisseuse ?', a: 'Extrêmement rare (< 0,01 %). Nos chirurgiens utilisent des techniques d\'injection superficielle qui éliminent ce risque. Chaque clinique dispose d\'un service de réanimation.' },
      { q: 'Les prothèses mammaires peuvent-elles exploser ?', a: 'Non. Les prothèses modernes sont cohésives (le gel ne se propage pas). En cas de rupture, le gel reste contenu. Détection par IRM tous les 2 ans.' },
      { q: 'Puis-je faire une allergie aux matériaux ?', a: 'Les prothèses sont testées biocompatibles. Une allergie est exceptionnelle. Nous discutons des matériaux lors de la consultation.' },
      { q: 'Le BBL est-il dangereux ?', a: 'Non quand il est réalisé par un chirurgien spécialisé avec la technique correcte (injection superficielle, pas intramusculaire). Nos chirurgiens suivent les protocoles de sécurité internationaux.' },
      { q: 'Puis-je mourir pendant une liposuccion ?', a: 'Le risque est quasi nul avec un chirurgien expérimenté, une anesthésie contrôlée et un suivi post-op rigoureux. Nous ne réalisons jamais de liposuccion sur des patientes non éligibles médicalement.' },
      { q: 'Les cicatrices sont-elles permanentes ?', a: 'Oui, mais elles s\'estompent considérablement avec le temps. Nos chirurgiens utilisent des techniques de suture fine et des incisions dissimulées. Des traitements post-cicatriciels sont inclus.' },
      { q: 'Puis-je perdre la sensation dans mes seins après une augmentation ?', a: 'Une altération temporaire est possible (20 % des cas), généralement résolue en 3 à 6 mois. Une perte définitive est rare (< 1 %).' },
      { q: 'La rhinoplastie peut-elle empirer ma respiration ?', a: 'Non, au contraire. La rhinoplastie fonctionnelle améliore la ventilation. Une légère congestion est normale pendant 2 à 3 semaines.' },
      { q: 'Puis-je avoir une infection après l\'opération ?', a: 'Le risque est < 1 % grâce à nos protocoles d\'asepsie stricts, aux antibiotiques prophylactiques et au suivi infirmier quotidien.' },
      { q: 'Que faire si je ne suis pas satisfaite du résultat ?', a: 'Nous restons à vos côtés. Une révision peut être envisagée après 6 à 12 mois (temps de cicatrisation complet). Chaque cas est étudié individuellement avec le chirurgien.' },
      { q: 'Le tabac augmente-t-il vraiment les risques ?', a: 'Oui, drastiquement. Nécrose, retard de cicatrisation, infections. Arrêt obligatoire 1 mois avant et 1 mois après. Test de cotinine possible.' },
      { q: 'Puis-je faire du sport après l\'opération ?', a: 'Oui, progressivement. Marche dès J+3, sport léger à J+30, sport intense à J+60-90 selon l\'intervention. Protocole personnalisé fourni.' },
      { q: 'La reprise du travail est-elle rapide ?', a: 'Télétravail : J+3-7. Bureau : J+7-14. Travail physique : J+30-60. Selon l\'intervention.' },
      { q: 'Puis-je tomber enceinte après une abdominoplastie ?', a: 'Oui, mais une nouvelle grossesse peut altérer le résultat. Nous recommandons d\'attendre la fin de vos projets de grossesse.' }
    ]
  },
  {
    theme: 'Résultats & Attentes',
    items: [
      { q: 'Quand verrai-je le résultat final ?', a: 'Liposuccion : 3-6 mois. BBL : 3 mois. Rhinoplastie : 12-18 mois. Seins : 3-6 mois. Visage : 3-6 mois.' },
      { q: 'Les résultats sont-ils permanents ?', a: 'Oui, si poids stable. Les cellules graisseuses aspirées ne reviennent pas. Les prothèses sont garanties 10 ans. Le vieillissement naturel continue.' },
      { q: 'Puis-je reprendre du poids après ?', a: 'Oui, mais la graisse se répartira différemment. Un gain de 3 à 5 kg n\'altère pas significativement le résultat. Au-delà, les zones non traitées peuvent s\'épaissir.' },
      { q: 'Le résultat sera-t-il naturel ?', a: 'C\'est notre priorité absolue. Nos chirurgiens travaillent avec des techniques conservatrices. Le résultat doit vous ressembler, en mieux. Pas de look artificiel.' },
      { q: 'Puis-je choisir la taille de mes prothèses ?', a: 'Oui, mais avec les recommandations du chirurgien. La taille doit être en harmonie avec votre morphologie. Nous utilisons des sizers en consultation.' },
      { q: 'La rhinoplastie peut-elle me donner le nez d\'une célébrité ?', a: 'Non. Le chirurgien sculpte VOTRE nez, en respectant votre anatomie osseuse et cartilagineuse. L\'objectif est l\'harmonie, pas la copie.' },
      { q: 'Le BBL donnera-t-il des fesses "cartoon" ?', a: 'Non, si vous suivez les recommandations du chirurgien. Un BBL réussi est naturel, proportionné à vos hanches et vos cuisses.' },
      { q: 'Mes seins tomberont-ils après une augmentation ?', a: 'La ptose dépend de la qualité de vos tissus et de la gravité. Une prothèse sous-musculaire retarde la ptose. Un lifting peut être associé si nécessaire.' },
      { q: 'La greffe capillaire donne-t-elle un résultat immédiat ?', a: 'Non. Les cheveux transplantés tombent à J+15-30 (choc effluvium). La repousse commence à J+90. Résultat visible à 6 mois, définitif à 12-18 mois.' },
      { q: 'Puis-je avoir un résultat parfait ?', a: 'La perfection n\'existe pas en chirurgie esthétique. L\'objectif est l\'amélioration significative et l\'harmonie. Nos chirurgiens visent l\'excellence, pas l\'impossible.' }
    ]
  },
  {
    theme: 'Post-opération & Suivi',
    items: [
      { q: 'Comment se passe le suivi après mon retour ?', a: 'Consultations vidéo programmées (J+7, J+30, J+90). WhatsApp illimité. Coordination avec votre médecin traitant. Dossier médical partagé sécurisé.' },
      { q: 'Qui s\'occupe de mes pansements chez moi ?', a: 'Nous vous formons et votre accompagnatrice vous guide. Votre médecin traitant peut prendre le relais. Nous restons disponibles pour toute question.' },
      { q: 'Puis-je contacter le chirurgien après mon retour ?', a: 'Oui, via notre équipe. Le chirurgien répond à vos questions médicales. Pour les urgences, nous coordonnons avec un chirurgien de confiance dans votre région.' },
      { q: 'Quand puis-je reprendre ma vie sexuelle ?', a: 'Généralement à J+15-21 selon l\'intervention. Éviter les positions qui sollicitent la zone opérée. Le chirurgien vous précise selon votre cas.' },
      { q: 'Puis-je prendre un bain ou une douche ?', a: 'Douche à J+2-3 selon l\'intervention. Bain interdit 4 semaines. Piscine et mer interdites 6 semaines.' },
      { q: 'Quand puis-je me maquiller après une rhinoplastie ?', a: 'Maquillage du visage : J+7. Maquillage du nez : J+14. Démaquillage très doux.' },
      { q: 'Dois-je porter une gaine ? Combien de temps ?', a: 'Oui, obligatoire. Liposuccion/BBL : 6 semaines minimum. Abdominoplastie : 6-8 semaines. Seins : soutien-gorge spécial 6 semaines.' },
      { q: 'Les ecchymoses disparaissent-elles vite ?', a: 'Oui, généralement en 2 à 3 semaines. Arnica, bromélaïne et vitamine K accélèrent la résorption. Maquillage couvrant possible à J+7.' },
      { q: 'Puis-je dormir sur le côté après un BBL ?', a: 'Oui, sur le côté ou le ventre. JAMAIS sur le dos pendant 3 semaines minimum. Coussin BBL obligatoire pour les sièges.' },
      { q: 'Quand puis-je reprendre le sport ?', a: 'Marche : J+3. Yoga/Pilates : J+30. Course/cardio : J+45. Musculation : J+60-90. Piscine/mer : J+45. Selon l\'intervention.' },
      { q: 'Puis-je conduire après l\'opération ?', a: 'Non pendant 5 à 7 jours minimum. Pour le BBL : 3 semaines (pas d\'assise directe).' },
      { q: 'Dois-je continuer les vitamines après l\'opération ?', a: 'Oui, protéines, vitamine C, zinc et oméga-3 pendant 1 mois minimum. Notre nutritionniste vous établit un plan personnalisé.' },
      { q: 'Puis-je fumer un peu après l\'opération ?', a: 'Non. Même une cigarette peut compromettre la cicatrisation. Arrêt total 1 mois avant et 1 mois après. Test de cotinine possible.' },
      { q: 'Quand puis-je reprendre l\'alcool ?', a: 'Interdit 2 semaines minimum. L\'alcool dilate les vaisseaux, augmente le risque de saignement et interagit avec les médicaments.' },
      { q: 'Et si j\'ai une question à 2h du matin ?', a: 'Notre équipe répond sur WhatsApp 24/7. Pour les urgences médicales, un numéro d\'urgence est fourni. Vous n\'êtes jamais seule.' }
    ]
  }
];

export const faqHome = [
  { q: 'Quels sont les délais entre la demande de devis et l\'opération ?', a: 'En général, comptez 2 à 4 semaines. Ce délai permet d\'organiser la consultation vidéo avec le chirurgien, de recevoir vos analyses médicales et de réserver votre séjour complet. En cas d\'urgence, nous pouvons accélérer le processus à 7-10 jours.' },
  { q: 'Les chirurgiens sont-ils certifiés et expérimentés ?', a: 'Absolument. Tous nos chirurgiens sont diplômés de facultés de médecine reconnues (Tunisie, France, Belgique, Turquie), inscrits à l\'ordre des médecins tunisien et possèdent plus de 10 ans d\'expérience. Leurs fiches complètes sont disponibles sur le site.' },
  { q: 'Quelle est la durée du séjour en Tunisie ?', a: 'Selon l\'intervention : 5 à 7 jours pour une rhinoplastie ou une blépharoplastie ; 7 à 10 jours pour une liposuccion, un BBL ou une augmentation mammaire ; jusqu\'à 12 jours pour un Mommy Makeover.' },
  { q: 'Le suivi post-opératoire est-il inclus et illimité ?', a: 'Oui, totalement. Consultations vidéo à J+7, J+30, J+90 et au-delà. Notre équipe répond à vos messages WhatsApp en moins de 2 heures. Nous coordonnons également avec votre médecin traitant.' },
  { q: 'Les prix sont-ils vraiment transparents ?', a: 'Oui. Chaque devis détaille exactement ce qui est inclus : honoraires du chirurgien, anesthésie, hospitalisation, médicaments, transferts et hébergement. Aucun frais caché.' },
  { q: 'Puis-je payer en plusieurs fois ?', a: 'Oui : acompte de 30 % à la réservation, puis le solde avant l\'intervention. Virements, carte via Stripe (sécurisé) ou espèces sur place.' },
  { q: 'Les photos avant/après sont-elles réelles ?', a: 'Chaque photo publiée est réelle, non retouchée, et publiée avec le consentement écrit de la patiente. La consultation vidéo permet d\'établir des attentes réalistes selon votre morphologie.' },
  { q: 'Quelles langues parle votre équipe ?', a: 'Français, anglais, arabe, allemand et italien. Le chirurgien qui vous suit parle au minimum le français et l\'anglais. Traduction des documents médicaux incluse.' },
  { q: 'La Tunisie est-elle sûre pour le tourisme médical ?', a: 'La Tunisie accueille plus de 700 000 patients étrangers par an. Nos cliniques sont situées dans des zones sécurisées, vos transferts sont organisés de porte à porte et notre accompagnatrice reste à vos côtés.' },
  { q: 'Que se passe-t-il en cas de complication ?', a: 'Chaque clinique dispose d\'une équipe d\'urgence 24/7 et d\'un service de réanimation. Après votre retour, nous coordonnons immédiatement avec un chirurgien de confiance dans votre pays.' },
  { q: 'Puis-je venir avec un accompagnant ?', a: 'Bien sûr, c\'est même encouragé. Chambres doubles à tarif préférentiel et visites touristiques pendant votre convalescence (Carthage, Sidi Bou Saïd).' },
  { q: 'Comment protégez-vous mes données personnelles et médicales ?', a: 'Chiffrement AES-256 de bout en bout, stockage sécurisé avec accès restreint, conformité RGPD. Droit d\'accès, de rectification et de suppression à tout moment.' }
];
