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

export const SERVICES: Record<ServiceSlug, ServiceContent> = {
  "water-damage": {
    slug: "water-damage",
    name: "Water Damage Restoration",
    navLabel: "Water",
    shortDescription:
      "24/7 extraction, drying, dehumidification, and structural recovery for flooding and burst pipes.",
    emergencyLine: "+1 855-318-3325",
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
      {
        q: "How long does structural drying usually take?",
        a: "Drying timelines vary by material and moisture load, but most projects require active drying and monitoring over several days.",
      },
      {
        q: "Do you remove damaged drywall and flooring?",
        a: "Yes. If materials are unsalvageable, teams can remove affected sections, sanitize the area, and prepare it for rebuild.",
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
    emergencyLine: "+1 855-318-3325",
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
      {
        q: "Can contents cleaning be included after a fire?",
        a: "Yes. Depending on condition, affected belongings can be assessed, cleaned, and inventoried as part of recovery planning.",
      },
      {
        q: "What happens if there is water damage after firefighting?",
        a: "The response can combine water extraction and drying with soot and smoke remediation to address both damage types together.",
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
    emergencyLine: "+1 855-318-3325",
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
      {
        q: "Do you test air quality after remediation?",
        a: "Post-remediation verification options can be coordinated to help confirm cleanup goals were met before normal occupancy resumes.",
      },
      {
        q: "Can mold return after remediation?",
        a: "It can if moisture issues remain unresolved, which is why source control and humidity management are key parts of the plan.",
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
    emergencyLine: "+1 855-318-3325",
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
      {
        q: "How is hazardous waste disposal handled?",
        a: "Collected materials are packaged, transported, and documented through approved channels based on incident and regulatory requirements.",
      },
      {
        q: "Can occupied properties remain open during cleanup?",
        a: "In some cases, partial operations can continue with strict containment zones, but it depends on hazard level and safety clearance.",
      },
    ],
    seo: {
      focusKeyphrase: "hazmat cleanup",
      relatedTerms: ["hazard cleanup", "biohazard cleanup", "decontamination service", "hazardous waste cleanup"],
    },
  },
};

export const SERVICE_ORDER: ServiceSlug[] = [
  "water-damage",
  "fire-damage",
  "mold-remediation",
  "hazmat-cleanup",
];

export function getServiceBySlug(service: string) {
  return SERVICES[service as ServiceSlug] ?? null;
}
