export type ServiceSlug =
  | "water-damage"
  | "fire-damage"
  | "mold-remediation"
  | "hazmat-cleanup";

export type ServiceContent = {
  slug: ServiceSlug;
  name: string;
  navLabel: string;
  shortDescription: string;
  emergencyLine: string;
  heroPrimary: string;
  heroSecondary: string;
  processSteps: string[];
  faqs: Array<{ q: string; a: string }>;
  seo: {
    focusKeyphrase: string;
    relatedTerms: string[];
  };
};

export type LocationContent = {
  stateSlug: string;
  stateName: string;
  citySlug: string;
  cityName: string;
  regionName: string;
  countryName: "Canada";
  cityHosts: string[];
};

export const SERVICES: Record<ServiceSlug, ServiceContent> = {
  "water-damage": {
    slug: "water-damage",
    name: "Water Damage Restoration",
    navLabel: "Water",
    shortDescription:
      "24/7 extraction, drying, dehumidification, and structural recovery for flooding and burst pipes.",
    emergencyLine: "(888) 480-7473",
    heroPrimary: "Emergency Flood Cleanup",
    heroSecondary: "Fast water extraction and structural drying to reduce damage and downtime.",
    processSteps: [
      "Rapid dispatch and on-site moisture mapping",
      "Standing water extraction and debris removal",
      "Commercial drying, dehumidification, and monitoring",
      "Sanitization and restoration planning",
    ],
    faqs: [
      {
        q: "How quickly should water damage be treated?",
        a: "Immediate mitigation is best. Water can spread into walls and flooring within hours, increasing repair costs and mold risk.",
      },
      {
        q: "Do you handle category 2 and category 3 water events?",
        a: "Yes. Teams are equipped for clean, gray, and black water protocols with containment and sanitation procedures.",
      },
      {
        q: "Can you support insurance documentation?",
        a: "Yes. We provide moisture logs, photo evidence, and scope details that help support claim workflows.",
      },
    ],
    seo: {
      focusKeyphrase: "water damage restoration",
      relatedTerms: [
        "flood cleanup",
        "burst pipe cleanup",
        "emergency water extraction",
        "structural drying",
      ],
    },
  },
  "fire-damage": {
    slug: "fire-damage",
    name: "Fire Damage Restoration",
    navLabel: "Fire",
    shortDescription:
      "Emergency board-up, soot cleanup, smoke odor control, and rebuild planning after structural fire events.",
    emergencyLine: "(888) 480-7473",
    heroPrimary: "Fire & Smoke Recovery",
    heroSecondary: "Stabilize the property quickly and start smoke, soot, and odor remediation without delay.",
    processSteps: [
      "Site stabilization and emergency board-up",
      "Soot and debris removal from surfaces and HVAC pathways",
      "Smoke odor treatment using targeted deodorization methods",
      "Damage documentation and rebuild coordination",
    ],
    faqs: [
      {
        q: "Can fire damage restoration begin before full reconstruction?",
        a: "Yes. Emergency stabilization and smoke remediation often begin first to prevent additional deterioration.",
      },
      {
        q: "Do you remove smoke odor from walls and ducts?",
        a: "Yes. Teams use deep cleaning and deodorization strategies for structural surfaces and HVAC components.",
      },
      {
        q: "Do you coordinate with adjusters?",
        a: "Yes. We provide clear scope documentation and progress records for insurance claim alignment.",
      },
    ],
    seo: {
      focusKeyphrase: "fire damage restoration",
      relatedTerms: ["smoke damage cleanup", "soot removal", "odor removal", "fire cleanup services"],
    },
  },
  "mold-remediation": {
    slug: "mold-remediation",
    name: "Mold Remediation",
    navLabel: "Mold",
    shortDescription:
      "Containment-first mold remediation with safe removal, filtration, and moisture source correction support.",
    emergencyLine: "(888) 480-7473",
    heroPrimary: "Targeted Mold Remediation",
    heroSecondary: "Isolate affected zones, remove contamination safely, and reduce recurrence risk.",
    processSteps: [
      "Inspection and moisture-source analysis",
      "Containment setup and air filtration",
      "Removal of affected materials and surface treatment",
      "Post-remediation cleaning and prevention guidance",
    ],
    faqs: [
      {
        q: "What signs indicate you may need mold remediation?",
        a: "Persistent odor, visible growth, humidity problems, or recent water damage are common triggers for inspection.",
      },
      {
        q: "Will remediation include moisture correction guidance?",
        a: "Yes. The process includes recommendations to address humidity or leak sources tied to recurrence.",
      },
      {
        q: "Is containment used during cleanup?",
        a: "Yes. Containment and filtration are used to limit cross-contamination during removal work.",
      },
    ],
    seo: {
      focusKeyphrase: "mold remediation",
      relatedTerms: ["mold cleanup", "mold removal company", "black mold remediation", "mold inspection"],
    },
  },
  "hazmat-cleanup": {
    slug: "hazmat-cleanup",
    name: "Hazmat Cleanup",
    navLabel: "HAZ",
    shortDescription:
      "Specialized hazardous material cleanup with controlled handling, containment, and compliant disposal workflows.",
    emergencyLine: "(888) 480-7473",
    heroPrimary: "Hazardous Material Response",
    heroSecondary: "Rapid containment and decontamination for complex property safety incidents.",
    processSteps: [
      "Incident assessment and hazard zoning",
      "Containment, PPE protocol, and controlled cleanup",
      "Material handling and approved disposal channels",
      "Final sanitation and property re-entry guidance",
    ],
    faqs: [
      {
        q: "What incidents require hazmat cleanup support?",
        a: "Events involving biological contamination, chemical hazards, or unsafe material exposure need specialized handling.",
      },
      {
        q: "Is the response available 24/7?",
        a: "Yes. Emergency intake runs continuously for urgent hazard stabilization and dispatch.",
      },
      {
        q: "Do you provide documentation for property managers or insurers?",
        a: "Yes. Work summaries and incident documentation are available for operational and claim records.",
      },
    ],
    seo: {
      focusKeyphrase: "hazmat cleanup",
      relatedTerms: ["hazard cleanup", "biohazard cleanup", "decontamination service", "hazardous waste cleanup"],
    },
  },
};

export const LOCATION_PAGES: LocationContent[] = [
  {
    stateSlug: "ontario",
    stateName: "Ontario",
    citySlug: "toronto",
    cityName: "Toronto",
    regionName: "Greater Toronto Area",
    countryName: "Canada",
    cityHosts: ["toronto.example.com", "toronto.localhost"],
  },
  {
    stateSlug: "ontario",
    stateName: "Ontario",
    citySlug: "ottawa",
    cityName: "Ottawa",
    regionName: "National Capital Region",
    countryName: "Canada",
    cityHosts: ["ottawa.example.com", "ottawa.localhost"],
  },
  {
    stateSlug: "ontario",
    stateName: "Ontario",
    citySlug: "mississauga",
    cityName: "Mississauga",
    regionName: "Peel Region",
    countryName: "Canada",
    cityHosts: ["mississauga.example.com", "mississauga.localhost"],
  },
  {
    stateSlug: "british-columbia",
    stateName: "British Columbia",
    citySlug: "vancouver",
    cityName: "Vancouver",
    regionName: "Metro Vancouver",
    countryName: "Canada",
    cityHosts: ["vancouver.example.com", "vancouver.localhost"],
  },
  {
    stateSlug: "british-columbia",
    stateName: "British Columbia",
    citySlug: "surrey",
    cityName: "Surrey",
    regionName: "Metro Vancouver",
    countryName: "Canada",
    cityHosts: ["surrey.example.com", "surrey.localhost"],
  },
  {
    stateSlug: "british-columbia",
    stateName: "British Columbia",
    citySlug: "victoria",
    cityName: "Victoria",
    regionName: "Capital Regional District",
    countryName: "Canada",
    cityHosts: ["victoria.example.com", "victoria.localhost"],
  },
  {
    stateSlug: "alberta",
    stateName: "Alberta",
    citySlug: "calgary",
    cityName: "Calgary",
    regionName: "Calgary Metropolitan Region",
    countryName: "Canada",
    cityHosts: ["calgary.example.com", "calgary.localhost"],
  },
  {
    stateSlug: "alberta",
    stateName: "Alberta",
    citySlug: "edmonton",
    cityName: "Edmonton",
    regionName: "Edmonton Metropolitan Region",
    countryName: "Canada",
    cityHosts: ["edmonton.example.com", "edmonton.localhost"],
  },
  {
    stateSlug: "alberta",
    stateName: "Alberta",
    citySlug: "red-deer",
    cityName: "Red Deer",
    regionName: "Central Alberta",
    countryName: "Canada",
    cityHosts: ["red-deer.example.com", "red-deer.localhost"],
  },
  {
    stateSlug: "quebec",
    stateName: "Quebec",
    citySlug: "montreal",
    cityName: "Montreal",
    regionName: "Montreal Metropolitan Community",
    countryName: "Canada",
    cityHosts: ["montreal.example.com", "montreal.localhost"],
  },
  {
    stateSlug: "quebec",
    stateName: "Quebec",
    citySlug: "quebec-city",
    cityName: "Quebec City",
    regionName: "Capitale-Nationale",
    countryName: "Canada",
    cityHosts: ["quebec-city.example.com", "quebec-city.localhost"],
  },
  {
    stateSlug: "quebec",
    stateName: "Quebec",
    citySlug: "laval",
    cityName: "Laval",
    regionName: "Laval Region",
    countryName: "Canada",
    cityHosts: ["laval.example.com", "laval.localhost"],
  },
];

export const SERVICE_ORDER: ServiceSlug[] = [
  "water-damage",
  "fire-damage",
  "mold-remediation",
  "hazmat-cleanup",
];

export function getServiceBySlug(service: string) {
  return SERVICES[service as ServiceSlug] ?? null;
}

export function getLocation(state: string, city: string) {
  return (
    LOCATION_PAGES.find(
      (location) => location.stateSlug === state && location.citySlug === city,
    ) ?? null
  );
}

function normalizeHost(host: string) {
  return host.trim().toLowerCase().replace(/:\d+$/, "");
}

export function getLocationByHost(host: string) {
  const normalizedHost = normalizeHost(host);
  return (
    LOCATION_PAGES.find((location) =>
      location.cityHosts.some((cityHost) => normalizeHost(cityHost) === normalizedHost),
    ) ?? null
  );
}

export function getLocationsByState(state: string) {
  return LOCATION_PAGES.filter((location) => location.stateSlug === state);
}

export function getStates() {
  return Array.from(
    new Map(LOCATION_PAGES.map((location) => [location.stateSlug, location.stateName])),
  ).map(([slug, name]) => ({ slug, name }));
}

export function titleCaseFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
