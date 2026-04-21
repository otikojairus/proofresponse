import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { getLocation } from "@/lib/restoration-data";
import { absoluteUrl, EMERGENCY_PHONE_DISPLAY, EMERGENCY_PHONE_E164, SITE_NAME } from "@/lib/seo";

const state = "quebec";
const city = "abercorn";
const serviceSlug = "water-damage";

const WATER_DAMAGE_KEYWORDS = [
  { phrase: "restauration des degats d'eau" },
  { phrase: "enlevement d'eau d'urgence" },
  { phrase: "nettoyage apres inondation" },
  { phrase: "nettoyage de sous-sol inonde" },
  { phrase: "restauration d'inondation d'urgence" },
  { phrase: "extraction d'eau" },
  { phrase: "aide pour sous-sol inonde" },
  { phrase: "reparation des degats d'eau causes par une tempete" },
  { phrase: "nettoyage apres rupture de canalisation" },
  { phrase: "service de degats d'eau 24 h" },
] as const;

const PROCESS_STEPS = [
  "Deploiement rapide et cartographie de l'humidite sur place",
  "Extraction de l'eau stagnante et enlevement des debris",
  "Sechage commercial, deshumidification et suivi",
  "Assainissement et planification de la restauration",
] as const;

const FAQS = [
  {
    q: "A quelle vitesse faut-il traiter des degats d'eau ?",
    a: "Une intervention immediate est preferable. L'eau peut se propager dans les murs et les planchers en quelques heures, ce qui augmente les couts de reparation et le risque de moisissure.",
  },
  {
    q: "Prenez-vous en charge les sinistres d'eau de categorie 2 et 3 ?",
    a: "Oui. Les equipes sont equipees pour les protocoles d'eau propre, grise et noire avec confinement et procedures d'assainissement.",
  },
  {
    q: "Pouvez-vous fournir la documentation pour l'assurance ?",
    a: "Oui. Nous fournissons des releves d'humidite, des preuves photo et des details de portee pour soutenir le traitement du dossier.",
  },
  {
    q: "Combien de temps dure habituellement le sechage structural ?",
    a: "Le delai varie selon les materiaux et la charge d'humidite, mais la plupart des projets necessitent plusieurs jours de sechage actif et de suivi.",
  },
  {
    q: "Retirez-vous les cloisons seches et les revetements de sol endommages ?",
    a: "Oui. Si les materiaux ne sont pas recuperables, les equipes peuvent retirer les sections touchees, assainir la zone et la preparer pour la reconstruction.",
  },
] as const;

const TRUST_CARDS = [
  {
    icon: "fa-camera",
    title: "Portee documentee",
    body: "Les preuves photo, les mesures d'humidite et les journaux d'intervention sont saisis tout au long de l'attenuation.",
  },
  {
    icon: "fa-phone",
    title: "Communication directe",
    body: "Des mises a jour claires de la prise d'appel jusqu'a la stabilisation et a la planification des prochaines etapes.",
  },
  {
    icon: "fa-file-invoice",
    title: "Coordination avec l'assurance",
    body: "Des resumes structures aident a garder le dossier et les echanges avec l'assurance clairs et coherents.",
  },
] as const;

const LOCAL_RESPONSE_CARDS = [
  {
    icon: "fa-clock",
    title: "Prise en charge rapide",
    body: "Le triage d'urgence commence immediatement avec des priorites claires selon la securite et l'impact sur la propriete.",
  },
  {
    icon: "fa-shield-halved",
    title: "Stabilisation d'abord",
    body: "Le confinement et les mesures pour limiter les pertes sont prioritaires afin de reduire l'aggravation et les dommages secondaires.",
  },
  {
    icon: "fa-file-lines",
    title: "Workflow documente",
    body: "Les notes de portee, les dossiers photo et les mises a jour jalonnees assurent une communication claire pendant toute l'attenuation.",
  },
] as const;

const WATER_LOCAL_FACTORS = [
  {
    icon: "fa-bolt",
    title: "Planification et deploiement rapides",
    body: "Une intervention sensible au facteur temps aide a limiter les pertes materielles et a raccourcir les delais de recuperation.",
  },
  {
    icon: "fa-clipboard-list",
    title: "Portee d'extraction claire",
    body: "Des priorites bien definies rendent l'enlevement d'eau d'urgence et l'extraction d'eau plus efficaces.",
  },
  {
    icon: "fa-droplet",
    title: "Sechage et suivi de l'humidite",
    body: "Le suivi mesure du sechage aide les equipes a prendre de meilleures decisions techniques jour apres jour.",
  },
  {
    icon: "fa-building",
    title: "Controle de l'impact operationnel",
    body: "Les plans sont adaptes aux maisons occupees, aux immeubles locatifs et aux proprietes commerciales en activite.",
  },
  {
    icon: "fa-file-pen",
    title: "Documentation prete pour l'assurance",
    body: "Des dossiers structures soutiennent les communications avec l'assurance et l'approbation des prochaines etapes.",
  },
  {
    icon: "fa-arrows-rotate",
    title: "Passage fluide aux reparations",
    body: "La cloture de l'attenuation se transforme en plan de restauration pratique sans delai inutile.",
  },
] as const;

const WATER_SCENARIO_CARDS = [
  {
    icon: "fa-house-flood-water",
    title: "Nettoyage de sous-sol inonde",
    body: "L'eau stagnante, les finis imbibes et les poches d'humidite cachees exigent un plan rapide d'extraction et de sechage.",
  },
  {
    icon: "fa-cloud-showers-heavy",
    title: "Reparation des degats d'eau causes par une tempete",
    body: "Les infiltrations liees a la meteo touchent souvent plusieurs surfaces et exigent un confinement rapide.",
  },
  {
    icon: "fa-faucet-drip",
    title: "Nettoyage apres rupture de canalisation",
    body: "Les fuites sous pression peuvent se propager rapidement dans les murs et les plafonds sans intervention immediate.",
  },
] as const;

const WATER_COORDINATION_CARDS = [
  {
    icon: "fa-calendar-check",
    title: "Deploiement + stabilisation du site",
    points: [
      "Prise d'appel d'urgence et acheminement des techniciens",
      "Analyse des dangers et mesures de confinement",
      "Extraction initiale et sequence d'attenuation",
    ],
  },
  {
    icon: "fa-file-circle-check",
    title: "Rapports + communication",
    points: [
      "Documentation photo et notes quotidiennes",
      "Releves d'humidite et mises a jour de progression",
      "Dossiers adaptes aux parties prenantes et a l'assurance",
    ],
  },
  {
    icon: "fa-screwdriver-wrench",
    title: "Recuperation + prochaines etapes",
    points: [
      "Fin du sechage et cloture de portee",
      "Planification recommandee du parcours de reparation",
      "Conseils pratiques pour reduire le risque de recurrence",
    ],
  },
] as const;

const WATER_PREP_STEPS = [
  "Indiquez d'ou vient l'eau et quelles zones ont ete touchees en premier.",
  "Deplacez les objets de valeur, les appareils electroniques et les articles sensibles loin des zones humides si cela est securitaire.",
  "Prenez des photos des dommages visibles avant le debut du nettoyage.",
  "Transmettez les details d'acces, les contraintes d'occupation et tout renseignement connu sur les coupures.",
] as const;

type WaterKeywordSection = {
  id: string;
  icon: string;
  title: string;
  keyword: string;
  intro: string;
  highlights: string[];
  steps: string[];
  reasons: string[];
  cta: string;
};

function buildWaterKeywordSections(cityName: string): WaterKeywordSection[] {
  return [
    {
      id: "water-damage-restoration",
      icon: "fa-house-flood-water",
      title: `Restauration des degats d'eau professionnelle a ${cityName}`,
      keyword: `restauration des degats d'eau ${cityName}`,
      intro:
        "Lorsque des degats d'eau surviennent, la rapidite d'intervention determine l'ampleur des elements de structure et du contenu qui peuvent etre sauves. Ce service couvre l'attenuation complete, l'assainissement et la planification de la reconstruction.",
      highlights: [
        "Limite l'affaiblissement structural des cloisons seches, des ossatures et des sous-planchers grace a une stabilisation immediate.",
        "Reduit le risque de moisissure en controlant l'humidite dans la fenetre critique des 24 a 48 premieres heures.",
        "Protege les biens recuperables avec une manutention et un nettoyage documentes.",
        "Favorise un traitement plus rapide du dossier d'assurance grace a une portee claire et a des preuves photo.",
      ],
      steps: [
        "Contact d'urgence 24/7 et inspection sur place basee sur l'humidite.",
        "Extraction a haut debit avec pompes et aspirateurs de qualite professionnelle.",
        "Definition detaillee de la portee et documentation destinee a l'assureur.",
        "Sechage et deshumidification jusqu'aux cibles techniques d'humidite.",
        "Nettoyage, desodorisation et transition vers la restauration et la reconstruction.",
      ],
      reasons: [
        "Equipes locales familieres avec les configurations de proprietes typiques et les risques d'eau recurrents.",
        "Techniciens certifies et documentation de sechage mesuree.",
        "Une seule equipe responsable de la prise d'appel d'urgence jusqu'a la cloture.",
      ],
      cta: `Pour une restauration experte des degats d'eau a ${cityName}, appelez ${SITE_NAME} au ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "emergency-water-removal",
      icon: "fa-pump-soap",
      title: `Enlevement d'eau d'urgence a ${cityName}`,
      keyword: `enlevement d'eau d'urgence ${cityName}`,
      intro:
        "L'enlevement d'eau d'urgence est la premiere priorite operationnelle apres une fuite, un debordement ou une inondation soudaine. Une extraction rapide reduit directement les dommages secondaires et l'ampleur globale de la recuperation.",
      highlights: [
        "Evite la saturation rapide des planchers, des murs et des cavites isolees.",
        "Supprime les conditions d'eau stagnante qui accelerent la croissance microbienne.",
        "Ameliore les chances de recuperation du mobilier, des appareils electroniques et des finis.",
        "Reduit les couts de restauration en limitant la demolition et la reconstruction.",
      ],
      steps: [
        "Deploiement immediat vers les sites de pertes actives.",
        "Verification de la source et des dangers : categorie d'eau, coupure et controles de securite.",
        "Extraction massive avec systemes de pompage et d'aspiration haute capacite.",
        "Extraction ciblee sous les rebords de plancher, sous-tapis et zones de plinthes.",
        "Preparation avant sechage pour la deshumidification structurale.",
      ],
      reasons: [
        "Equipements puissants bien au-dela des outils d'extraction de location.",
        "Equipes formees pour reperer rapidement les chemins migratoires de l'humidite cachee.",
        "Communication claire du premier appel jusqu'a la transition vers le sechage.",
      ],
      cta: `Besoin d'un enlevement d'eau d'urgence a ${cityName} ? ${SITE_NAME} est disponible 24/7 au ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "flood-cleanup",
      icon: "fa-water",
      title: `Nettoyage apres inondation a ${cityName}`,
      keyword: `nettoyage apres inondation ${cityName}`,
      intro:
        "Le nettoyage apres inondation exige un processus conscient des risques biologiques, et non un simple nettoyage de surface. Les eaux d'inondation de categorie 3 peuvent contenir des contaminants necessitant un retrait controle, une desinfection et l'elimination de materiaux.",
      highlights: [
        "Traite les risques d'exposition aux eaux usees, aux bacteries et aux contaminants.",
        "Retire la boue, les sediments et les residus qui causent odeurs et corrosion.",
        "Elimine les materiaux poreux non recuperables selon des procedures conformes.",
        "Retablit des conditions sanitaires avant le debut des travaux de reconstruction.",
      ],
      steps: [
        "Intervention d'urgence apres inondation et triage de securite du site.",
        "Pompage intensif avec retrait des debris et des sediments.",
        "Demolition controlee des materiaux poreux contamines.",
        "Nettoyage, assainissement et desodorisation selon les pratiques appropriees.",
        "Sechage structural et verification finale de securite.",
      ],
      reasons: [
        "Equipes equipees pour les environnements d'eau contaminee.",
        "Gestion complete du processus, de l'extraction jusqu'a la cloture assainie.",
        "Documentation utile pour les proprietaires et les intervenants en assurance.",
      ],
      cta: `Pour un nettoyage professionnel apres inondation a ${cityName}, communiquez avec ${SITE_NAME} maintenant au ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "basement-flooding-cleanup",
      icon: "fa-down-long",
      title: `Nettoyage de sous-sol inonde a ${cityName}`,
      keyword: `nettoyage de sous-sol inonde ${cityName}`,
      intro:
        "Les inondations de sous-sol presentent un risque eleve en raison de l'humidite sous le niveau du sol, d'une circulation d'air limitee et d'une humidite cachee derriere les finis. Le nettoyage doit etre energique, mesure et preventif contre la moisissure.",
      highlights: [
        "Prend en charge les infiltrations hydrostatiques et les chemins de seepage lies aux eaux souterraines.",
        "Cible l'humidite emprisonnee aux interfaces de dalle et dans les assemblages muraux.",
        "Reduit l'humidite persistante du sous-sol et les problemes d'odeur futurs.",
        "Priorise la prevention de la moisissure dans les environnements peu ventiles.",
      ],
      steps: [
        "Controle rapide de la source et evaluation des risques sous le niveau du sol.",
        "Pompage submersible et extraction humide de l'eau accumulee.",
        "Retrait des debris et preparation a l'assainissement.",
        "Plan de deshumidification et de circulation d'air directionnelle.",
        "Inspection apres sechage avec recommandations de prevention.",
      ],
      reasons: [
        "Outils specialises pour le sechage de sous-sol et workflows adaptes aux pertes sous le niveau du sol.",
        "Forte attention a la prevention des moisissures pendant le nettoyage et la cloture.",
        "Intervention rapide pour les configurations de sous-sol finies ou non finies.",
      ],
      cta: `Pour un nettoyage expert de sous-sol inonde a ${cityName}, appelez ${SITE_NAME} au ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "emergency-flood-restoration",
      icon: "fa-house-circle-check",
      title: `Restauration d'inondation d'urgence a ${cityName}`,
      keyword: `restauration d'inondation d'urgence ${cityName}`,
      intro:
        "La restauration d'inondation d'urgence relie l'attenuation et la reconstruction dans un seul parcours gere. Au lieu de coordonner plusieurs fournisseurs, le proprietaire obtient un workflow de recuperation centralise.",
      highlights: [
        "Combine extraction, sechage et planification de reconstruction dans une seule portee.",
        "Reduit les interruptions entre l'attenuation et les reparations.",
        "Ameliore l'imputabilite grace a une seule equipe qui gere les jalons.",
        "Centralise la communication pour les proprietaires et les assureurs.",
      ],
      steps: [
        "Attenuation d'urgence immediate et securisation de la propriete.",
        "Evaluation complete de l'humidite et des materiaux endommages.",
        "Gestion du contenu, soutien a l'inventaire et coordination du sauvetage.",
        "Sechage, assainissement et controle des odeurs.",
        "Mobilisation pour les reparations et la reconstruction puis transition finale.",
      ],
      reasons: [
        "Workflow d'une seule entreprise, du premier deploiement jusqu'a la restauration finale.",
        "Moins de retards et moins d'erreurs de transfert entre les phases du projet.",
        "Controles de qualite coherents entre l'attenuation et la reconstruction.",
      ],
      cta: `Besoin d'une restauration d'inondation d'urgence complete a ${cityName} ? Joignez ${SITE_NAME} 24/7 au ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "water-extraction",
      icon: "fa-syringe",
      title: `Extraction d'eau a ${cityName}`,
      keyword: `extraction d'eau ${cityName}`,
      intro:
        "L'extraction d'eau professionnelle retire rapidement et en profondeur l'eau stagnante. C'est la base technique de tout resultat de sechage et d'attenuation reussi.",
      highlights: [
        "Reduit rapidement la charge exercee par l'accumulation d'eau stagnante.",
        "Retire l'humidite des tapis, des sous-tapis et des interfaces sur surfaces dures.",
        "Limite la propagation laterale et ascendante dans les materiaux poreux.",
        "Ameliore l'efficacite du sechage et reduit la duree globale du projet.",
      ],
      steps: [
        "Deploiement rapide avec equipement pret pour l'extraction.",
        "Retrait massif avec pompes submersibles au besoin.",
        "Extraction en profondeur avec systemes d'aspiration de grande capacite.",
        "Outils specialises pour les rebords, les coins et les joints de plancher.",
        "Verification de l'humidite pour planifier l'apres-extraction.",
      ],
      reasons: [
        "Puissance d'extraction industrielle superieure aux unites portatives grand public.",
        "Techniciens formes pour trouver rapidement les poches d'eau cachees.",
        "Protocoles d'extraction concus pour accelerer le sechage qui suit.",
      ],
      cta: `Pour une extraction d'eau rapide et a haute capacite a ${cityName}, appelez ${SITE_NAME} au ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "flooded-basement-help",
      icon: "fa-life-ring",
      title: `Aide pour sous-sol inonde a ${cityName}`,
      keyword: `aide pour sous-sol inonde ${cityName}`,
      intro:
        "Les urgences de sous-sol inonde demandent une aide immediate et pratique. La priorite est d'abord la securite, puis le pompage rapide, le triage des biens recuperables et le sechage controle.",
      highlights: [
        "Une action rapide empeche la migration de l'eau vers les aires de vie principales.",
        "Les controles de securite precoces reduisent les risques electriques et environnementaux.",
        "Un triage structure des biens aide a proteger les objets de valeur.",
        "Le sechage professionnel reduit l'exposition a long terme a la moisissure et aux odeurs.",
      ],
      steps: [
        "Prise d'appel d'urgence avec consignes prioritaires de securite.",
        "Verification des dangers a l'arrivee avant le debut des travaux d'attenuation.",
        "Pompage de grande capacite et exposition des surfaces touchees.",
        "Conseils de sauvetage du contenu et triage des materiaux.",
        "Mise en place du sechage et du nettoyage pour la recuperation complete du sous-sol.",
      ],
      reasons: [
        "Equipes locales experimentees dans les pertes en sous-sol.",
        "Communication claire dans des conditions d'urgence tres stressantes.",
        "Equipements et effectifs adaptes aux petits comme aux grands sinistres de sous-sol.",
      ],
      cta: `Si vous avez besoin d'une aide immediate pour un sous-sol inonde a ${cityName}, appelez ${SITE_NAME} maintenant au ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "storm-water-damage-repair",
      icon: "fa-cloud-bolt",
      title: `Reparation des degats d'eau causes par une tempete a ${cityName}`,
      keyword: `reparation des degats d'eau causes par une tempete ${cityName}`,
      intro:
        "Les sinistres causes par les tempetes combinent souvent des breches exterieures avec une saturation d'eau interieure. La reparation exige a la fois une securisation d'urgence de la propriete et une attenuation interieure complete.",
      highlights: [
        "Traite ensemble les points de breche de toiture ou de revetement et les materiaux interieurs mouilles.",
        "Evite toute nouvelle infiltration de pluie grace a des travaux immediats de bache et de fermeture.",
        "Controle la migration cachee dans les toitures et les cavites murales.",
        "Soutient la recuperation complete, de l'evenement meteorologique jusqu'aux reparations finies.",
      ],
      steps: [
        "Mobilisation d'urgence 24/7 apres la tempete.",
        "Installation immediate de baches et securisation des ouvertures.",
        "Extraction interieure, demolition et sechage structural.",
        "Reparations exterieures et interieures incluant les finis et l'etancheite.",
        "Inspection finale et cloture de qualite.",
      ],
      reasons: [
        "Planification de reponse specifique aux tempetes pour les sinistres complexes a dommages multiples.",
        "Un seul point de coordination pour les phases d'urgence et de reparation.",
        "Documentation prete pour l'assurance du debut de l'attenuation jusqu'a la reconstruction.",
      ],
      cta: `Pour une reparation complete des degats d'eau causes par une tempete a ${cityName}, communiquez avec ${SITE_NAME} au ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "burst-pipe-water-cleanup",
      icon: "fa-faucet",
      title: `Nettoyage apres rupture de canalisation a ${cityName}`,
      keyword: `nettoyage apres rupture de canalisation ${cityName}`,
      intro:
        "Une canalisation eclatee peut liberer de grands volumes en quelques minutes et propager les dommages dans plusieurs pieces ou etages. Le nettoyage doit etre immediat, controle et centre sur la source.",
      highlights: [
        "Arrete la propagation continue d'eau sous pression et la saturation rapide.",
        "Ameliore les chances de recuperation des finis et du contenu grace a une extraction rapide.",
        "Cible les parcours caches dans les murs, les plafonds et les gaines techniques.",
        "Passe rapidement du nettoyage a une reparation coordonnee.",
      ],
      steps: [
        "Appel d'urgence avec conseils de coupure lorsque possible.",
        "Extraction rapide dans toutes les zones humides actives et touchees par migration.",
        "Evaluation des dommages a la canalisation et coordination de la reparation.",
        "Demolition ciblee et sechage controle des assemblages touches.",
        "Reconstruction et remise en etat des finis apres validation de l'humidite.",
      ],
      reasons: [
        "Protocoles a haute urgence concus precisement pour les ruptures actives.",
        "Coordination fluide entre les equipes d'attenuation de l'eau et de reparation.",
        "Workflows eprouves pour les ruptures dues au gel et a la corrosion.",
      ],
      cta: `Pour un nettoyage urgent apres rupture de canalisation a ${cityName}, appelez ${SITE_NAME} immediatement au ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "24-hour-water-damage-service",
      icon: "fa-phone-volume",
      title: `Service de degats d'eau 24 h a ${cityName}`,
      keyword: `service de degats d'eau 24 h ${cityName}`,
      intro:
        "Les urgences liees a l'eau ne suivent pas les heures d'ouverture. Un vrai service 24/7 signifie une prise d'appel en direct, un deploiement actif et un debut d'attenuation a toute heure.",
      highlights: [
        "Evite les retards de nuit qui augmentent les risques structuraux et microbiens.",
        "Reduit la propagation des petits incidents avant qu'ils ne s'aggravent au matin.",
        "Offre un deploiement en temps reel et la mobilisation d'equipes de garde.",
        "Assure un relais continu entre l'intervention de nuit et les travaux de jour.",
      ],
      steps: [
        "Appel d'urgence repondu en direct par un personnel forme au deploiement.",
        "Acheminement immediat de l'equipe disponible la plus proche.",
        "Arrivee rapide avec equipement d'extraction et de stabilisation.",
        "Attenuation de nuit : extraction, confinement et mise en place du sechage.",
        "Poursuite fluide vers les operations de restauration de journee.",
      ],
      reasons: [
        "Veritable capacite de reponse en continu, et non une simple prise de message.",
        "Equipes locales positionnees pour arriver rapidement dans toute la zone desservie.",
        "Qualite de processus coherente peu importe l'heure de la journee.",
      ],
      cta: `Pour un vrai service de degats d'eau 24 h a ${cityName}, appelez ${SITE_NAME} en tout temps au ${EMERGENCY_PHONE_DISPLAY}.`,
    },
  ];
}

export async function generateMetadata(): Promise<Metadata> {
  const location = getLocation(state, city);

  if (!location) {
    return {
      title: "Page introuvable",
    };
  }

  const primaryKeyword = `Restauration des degats d'eau ${location.cityName}`;
  const canonicalPath = `/fr/${location.stateSlug}/${location.citySlug}/${serviceSlug}`;
  const title = `${primaryKeyword} | Intervention d'urgence 24/7`;
  const description = `${primaryKeyword} pour les residences et commerces de ${location.cityName}, ${location.stateName}. Appelez au ${EMERGENCY_PHONE_DISPLAY} pour une intervention immediate.`;

  return {
    title,
    description,
    keywords: [
      primaryKeyword,
      `Degats d'eau ${location.cityName}`,
      `Restauration d'urgence ${location.cityName}`,
      ...WATER_DAMAGE_KEYWORDS.map(({ phrase }) => `${phrase} ${location.cityName}`),
    ],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${primaryKeyword} | ${SITE_NAME}`,
      description,
      url: absoluteUrl(canonicalPath),
      type: "article",
      siteName: SITE_NAME,
      locale: "fr_CA",
    },
    twitter: {
      card: "summary_large_image",
      title: `${primaryKeyword} | ${SITE_NAME}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default function AbercornWaterDamageFrenchPage() {
  const location = getLocation(state, city);

  if (!location) {
    notFound();
  }

  const primaryKeyword = `Restauration des degats d'eau ${location.cityName}`;
  const secondaryKeyword = "Restauration des degats d'eau";
  const canonicalPath = `/fr/${location.stateSlug}/${location.citySlug}/${serviceSlug}`;
  const phoneHref = `tel:${EMERGENCY_PHONE_DISPLAY.replace(/[^0-9]/g, "")}`;
  const waterKeywordSections = buildWaterKeywordSections(location.cityName);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: absoluteUrl("/services"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: secondaryKeyword,
        item: absoluteUrl(canonicalPath),
      },
      {
        "@type": "ListItem",
        position: 4,
        name: primaryKeyword,
        item: absoluteUrl(canonicalPath),
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: primaryKeyword,
    serviceType: secondaryKeyword,
    description: `${secondaryKeyword} a ${location.cityName}, ${location.stateName}. Extraction d'eau 24/7, sechage structural et planification de recuperation.`,
    areaServed: {
      "@type": "City",
      name: location.cityName,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.stateName,
      },
    },
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      telephone: EMERGENCY_PHONE_E164,
      url: absoluteUrl("/"),
    },
    url: absoluteUrl(canonicalPath),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE_NAME} ${location.cityName}`,
    telephone: EMERGENCY_PHONE_E164,
    areaServed: [location.cityName, location.stateName],
    url: absoluteUrl(canonicalPath),
    image: absoluteUrl("/next.svg"),
    priceRange: "$$",
    availableService: {
      "@type": "Service",
      name: secondaryKeyword,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: `${faq.q} (${location.cityName})`,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="iris-shell">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      <section className="iris-hero iris-section py-14">
        <div className="iris-container">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#d7e4ee]">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/services/water-damage" className="hover:text-white">
              {secondaryKeyword}
            </Link>
            <span>/</span>
            <span>{location.cityName}</span>
          </div>

          <h1 className="iris-hero-title mt-4">{primaryKeyword}</h1>
          <p className="iris-hero-lead max-w-3xl">
            Si votre residence ou votre commerce a besoin d'une {secondaryKeyword.toLowerCase()} immediate a{" "}
            {location.cityName}, appelez au {EMERGENCY_PHONE_DISPLAY} pour une prise d'appel d'urgence en direct et un
            deploiement rapide.
          </p>
          <p className="mt-4 max-w-3xl text-sm text-[#d6e6f0]">
            Cette page locale presente les etapes d'intervention, les priorites des 24 premieres heures, des conseils
            selon le scenario et une aide pratique a la decision pour les proprietaires et gestionnaires a{" "}
            {location.cityName}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:hidden">
            <a href={phoneHref} className="iris-btn iris-btn-primary">
              Appeler {EMERGENCY_PHONE_DISPLAY}
            </a>
            <Link href="/services" className="iris-btn iris-btn-secondary">
              Voir tous les services
            </Link>
          </div>

          <div className="hidden sm:block">
            <div className="iris-actions">
              <a href={phoneHref} className="iris-btn iris-btn-primary">
                Appeler {EMERGENCY_PHONE_DISPLAY}
              </a>
              <Link href="/services" className="iris-btn iris-btn-secondary">
                Voir tous les services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="iris-section pt-10">
        <div className="iris-container">
          <article className="space-y-7">
            <div className="iris-block">
              <h2 className="iris-title text-2xl">Reponse rapide</h2>
              <p className="iris-subtitle">
                <strong>{primaryKeyword}</strong> signifie une attenuation rapide pour limiter les pertes materielles,
                suivie d'un nettoyage documente et d'une stabilisation.
              </p>
            </div>
            <div className="iris-divider" />

            <div className="iris-band-soft rounded-2xl px-6 py-8">
              <h2 className="iris-title text-2xl">Definition : qu'est-ce que la restauration des degats d'eau ?</h2>
              <p className="iris-subtitle">
                La restauration des degats d'eau est une intervention structuree qui comprend l'evaluation, le
                confinement, le nettoyage, le sechage ou la decontamination, et la planification de la restauration,
                adaptee aux proprietes de {location.cityName}.
              </p>
            </div>

            <div className="iris-band rounded-2xl px-6 py-8">
              <div className="iris-section-head">
                <h2 className="iris-title text-2xl">Comment l'intervention est geree a {location.cityName}</h2>
                <p>Un workflow d'urgence structure qui equilibre l'urgence, la securite et la qualite de la documentation.</p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {LOCAL_RESPONSE_CARDS.map((card) => (
                  <div key={card.title} className="iris-panel">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44] text-lg">
                      <i className={`fa-solid ${card.icon}`} aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-base font-bold text-[#0d2d44]">{card.title}</h3>
                    <p className="mt-1 text-sm text-[#5c6875]">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="iris-band rounded-2xl px-6 py-8">
              <h2 className="iris-title text-2xl">Processus a {location.cityName}</h2>
              <ol className="mt-4 space-y-3">
                {PROCESS_STEPS.map((step, idx) => (
                  <li key={step} className="iris-panel text-[#243443]">
                    <span className="mr-2 font-semibold text-[#0d2d44]">{idx + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="iris-card iris-card-pad">
              <h2 className="iris-title text-2xl">Signaux de confiance</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {TRUST_CARDS.map((card) => (
                  <div key={card.title} className="iris-panel">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44] text-lg">
                      <i className={`fa-solid ${card.icon}`} aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-base font-bold text-[#0d2d44]">{card.title}</h3>
                    <p className="mt-1 text-sm text-[#5c6875]">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="iris-band-soft rounded-2xl px-6 py-8">
              <h2 className="iris-title text-2xl">Ce qui se passe pendant les 24 premieres heures</h2>
              <p className="iris-subtitle">
                La prise d'appel initiale confirme les enjeux de securite, les details d'acces et le niveau d'urgence.
                La premiere fenetre d'intervention se concentre sur le controle des dangers, le confinement, les
                travaux pour limiter les pertes et la documentation afin que la recuperation puisse avancer avec moins
                de retards.
              </p>
            </div>

            <div className="iris-band-soft rounded-2xl px-6 py-8">
              <div className="iris-section-head">
                <h2 className="iris-title text-2xl">Scenarios courants d'urgence liee a l'eau a {location.cityName}</h2>
                <p>Incidents frequents qui exigent habituellement une stabilisation urgente et un controle de l'humidite.</p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {WATER_SCENARIO_CARDS.map((card) => (
                  <div key={card.title} className="iris-panel">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44] text-lg">
                      <i className={`fa-solid ${card.icon}`} aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-base font-bold text-[#0d2d44]">{card.title}</h3>
                    <p className="mt-1 text-sm text-[#5c6875]">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="iris-block">
              <div className="iris-section-head">
                <h2 className="iris-title text-2xl">Principales priorites pendant l'attenuation de l'eau</h2>
                <p>Ce qui compte le plus, en general, pour les proprietaires et gestionnaires au debut de l'intervention.</p>
              </div>
              <div className="iris-factors-list">
                {WATER_LOCAL_FACTORS.map((factor, index) => (
                  <div key={factor.title} className="iris-factor-item">
                    <div className="iris-factor-icon">
                      <i className={`fa-solid ${factor.icon}`} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="iris-factor-title">
                        {index + 1}. {factor.title}
                      </p>
                      <p className="iris-factor-body">{factor.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="iris-band rounded-2xl px-6 py-8">
              <div className="iris-section-head">
                <h2 className="iris-title text-2xl">Ce que nous coordonnons lors des appels pour degats d'eau</h2>
                <p>Du premier deploiement jusqu'a la cloture de l'attenuation et au relais vers la recuperation.</p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {WATER_COORDINATION_CARDS.map((card) => (
                  <div key={card.title} className="iris-card iris-card-pad">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44] text-lg">
                      <i className={`fa-solid ${card.icon}`} aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-base font-bold text-[#0d2d44]">{card.title}</h3>
                    <ul className="mt-2 space-y-1 text-sm text-[#5c6875]">
                      {card.points.map((point) => (
                        <li key={point}>- {point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="iris-band-soft rounded-2xl px-6 py-8">
              <div className="iris-section-head">
                <h2 className="iris-title text-2xl">Comment se preparer a une intervention d'urgence pour l'eau</h2>
                <p>Partager ces renseignements rapidement ameliore la vitesse de deploiement et la precision de la portee.</p>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {WATER_PREP_STEPS.map((step, index) => (
                  <div key={step} className="iris-card iris-card-pad">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1e4a63]">Etape {index + 1}</p>
                    <p className="mt-2 text-sm font-medium text-[#243443]">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="iris-band rounded-2xl px-6 py-8">
              <h2 className="iris-title text-2xl">Urgence degats d'eau et attenuation des inondations a {location.cityName}</h2>
              <p className="iris-subtitle">
                Les demandes d'urgence courantes comprennent{" "}
                <strong>restauration des degats d'eau {location.cityName}</strong>,{" "}
                <strong>enlevement d'eau d'urgence {location.cityName}</strong>,{" "}
                <strong>nettoyage apres inondation {location.cityName}</strong> et{" "}
                <strong>nettoyage de sous-sol inonde {location.cityName}</strong>. Cette page couvre aussi des
                intentions comme <strong>nettoyage apres rupture de canalisation {location.cityName}</strong> et{" "}
                <strong>service de degats d'eau 24 h {location.cityName}</strong>.
              </p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {WATER_DAMAGE_KEYWORDS.map((item) => (
                  <div key={item.phrase} className="iris-panel">
                    <p className="font-semibold text-[#0d2d44]">
                      {item.phrase} {location.cityName}
                    </p>
                    <p className="mt-1 text-sm text-[#5c6875]">
                      La portee et l'echeancier dependent de la rapidite du debut de l'attenuation et de l'etendue de
                      la propagation de l'humidite.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="iris-band-soft rounded-2xl px-6 py-8">
              <div className="iris-section-head">
                <h2 className="iris-title text-2xl">Modules de service detailles pour {location.cityName}</h2>
                <p>Utilisez ces sections pour trouver exactement l'aide dont vous avez besoin selon votre urgence actuelle.</p>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {waterKeywordSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="iris-panel transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44]">
                        <i className={`fa-solid ${section.icon}`} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-bold text-[#0d2d44]">{section.title}</span>
                        <span className="mt-1 block text-sm text-[#5c6875]">Guide d'intervention etape par etape</span>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {waterKeywordSections.map((section, sectionIndex) => (
              <section
                key={section.id}
                id={section.id}
                className={`${sectionIndex % 2 === 0 ? "iris-band" : "iris-band-soft"} scroll-mt-32 rounded-2xl px-6 py-8`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="iris-title text-2xl">{section.title}</h2>
                  <span className="iris-chip">Soutien d'urgence</span>
                </div>
                <p className="iris-subtitle mt-3">{section.intro}</p>

                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div className="iris-panel">
                    <h3 className="text-base font-bold text-[#0d2d44]">Pourquoi ce service est important</h3>
                    <ul className="mt-3 space-y-2 text-sm text-[#5c6875]">
                      {section.highlights.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="iris-panel">
                    <h3 className="text-base font-bold text-[#0d2d44]">Notre processus</h3>
                    <ol className="mt-3 space-y-2 text-sm text-[#5c6875]">
                      {section.steps.map((step, idx) => (
                        <li key={step}>
                          <span className="font-semibold text-[#0d2d44]">{idx + 1}.</span> {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
                  <div className="iris-panel">
                    <h3 className="text-base font-bold text-[#0d2d44]">Pourquoi choisir {SITE_NAME} a {location.cityName}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-[#5c6875]">
                      {section.reasons.map((reason) => (
                        <li key={reason}>- {reason}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="iris-panel">
                    <h3 className="text-base font-bold text-[#0d2d44]">Pret a commencer ?</h3>
                    <p className="mt-2 text-sm text-[#5c6875]">{section.cta}</p>
                    <a href={phoneHref} className="iris-btn iris-btn-primary mt-4">
                      Appeler {EMERGENCY_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>

      <section className="iris-section pt-0">
        <div className="iris-container">
          <div className="iris-card iris-card-pad">
            <h2 className="iris-title text-2xl">FAQ sur {primaryKeyword}</h2>
            <div className="mt-6 space-y-4">
              {FAQS.map((faq) => (
                <details key={faq.q} className="iris-panel">
                  <summary className="cursor-pointer font-semibold text-[#0d2d44]">{faq.q}</summary>
                  <p className="mt-3 text-sm text-[#5c6875]">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
