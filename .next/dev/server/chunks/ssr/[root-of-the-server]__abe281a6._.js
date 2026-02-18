module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/json-ld.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JsonLd",
    ()=>JsonLd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function JsonLd({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(data)
        }
    }, void 0, false, {
        fileName: "[project]/components/json-ld.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/restoration-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LOCATION_PAGES",
    ()=>LOCATION_PAGES,
    "SERVICES",
    ()=>SERVICES,
    "SERVICE_ORDER",
    ()=>SERVICE_ORDER,
    "getLocation",
    ()=>getLocation,
    "getLocationByHost",
    ()=>getLocationByHost,
    "getLocationsByState",
    ()=>getLocationsByState,
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "getStates",
    ()=>getStates,
    "titleCaseFromSlug",
    ()=>titleCaseFromSlug
]);
const SERVICES = {
    "water-damage": {
        slug: "water-damage",
        name: "Water Damage Restoration",
        navLabel: "Water",
        shortDescription: "24/7 extraction, drying, dehumidification, and structural recovery for flooding and burst pipes.",
        emergencyLine: "(888) 480-7473",
        heroPrimary: "Emergency Flood Cleanup",
        heroSecondary: "Fast water extraction and structural drying to reduce damage and downtime.",
        processSteps: [
            "Rapid dispatch and on-site moisture mapping",
            "Standing water extraction and debris removal",
            "Commercial drying, dehumidification, and monitoring",
            "Sanitization and restoration planning"
        ],
        faqs: [
            {
                q: "How quickly should water damage be treated?",
                a: "Immediate mitigation is best. Water can spread into walls and flooring within hours, increasing repair costs and mold risk."
            },
            {
                q: "Do you handle category 2 and category 3 water events?",
                a: "Yes. Teams are equipped for clean, gray, and black water protocols with containment and sanitation procedures."
            },
            {
                q: "Can you support insurance documentation?",
                a: "Yes. We provide moisture logs, photo evidence, and scope details that help support claim workflows."
            },
            {
                q: "How long does structural drying usually take?",
                a: "Drying timelines vary by material and moisture load, but most projects require active drying and monitoring over several days."
            },
            {
                q: "Do you remove damaged drywall and flooring?",
                a: "Yes. If materials are unsalvageable, teams can remove affected sections, sanitize the area, and prepare it for rebuild."
            }
        ],
        seo: {
            focusKeyphrase: "water damage restoration",
            relatedTerms: [
                "flood cleanup",
                "burst pipe cleanup",
                "emergency water extraction",
                "structural drying"
            ]
        }
    },
    "fire-damage": {
        slug: "fire-damage",
        name: "Fire Damage Restoration",
        navLabel: "Fire",
        shortDescription: "Emergency board-up, soot cleanup, smoke odor control, and rebuild planning after structural fire events.",
        emergencyLine: "(888) 480-7473",
        heroPrimary: "Fire & Smoke Recovery",
        heroSecondary: "Stabilize the property quickly and start smoke, soot, and odor remediation without delay.",
        processSteps: [
            "Site stabilization and emergency board-up",
            "Soot and debris removal from surfaces and HVAC pathways",
            "Smoke odor treatment using targeted deodorization methods",
            "Damage documentation and rebuild coordination"
        ],
        faqs: [
            {
                q: "Can fire damage restoration begin before full reconstruction?",
                a: "Yes. Emergency stabilization and smoke remediation often begin first to prevent additional deterioration."
            },
            {
                q: "Do you remove smoke odor from walls and ducts?",
                a: "Yes. Teams use deep cleaning and deodorization strategies for structural surfaces and HVAC components."
            },
            {
                q: "Do you coordinate with adjusters?",
                a: "Yes. We provide clear scope documentation and progress records for insurance claim alignment."
            },
            {
                q: "Can contents cleaning be included after a fire?",
                a: "Yes. Depending on condition, affected belongings can be assessed, cleaned, and inventoried as part of recovery planning."
            },
            {
                q: "What happens if there is water damage after firefighting?",
                a: "The response can combine water extraction and drying with soot and smoke remediation to address both damage types together."
            }
        ],
        seo: {
            focusKeyphrase: "fire damage restoration",
            relatedTerms: [
                "smoke damage cleanup",
                "soot removal",
                "odor removal",
                "fire cleanup services"
            ]
        }
    },
    "mold-remediation": {
        slug: "mold-remediation",
        name: "Mold Remediation",
        navLabel: "Mold",
        shortDescription: "Containment-first mold remediation with safe removal, filtration, and moisture source correction support.",
        emergencyLine: "(888) 480-7473",
        heroPrimary: "Targeted Mold Remediation",
        heroSecondary: "Isolate affected zones, remove contamination safely, and reduce recurrence risk.",
        processSteps: [
            "Inspection and moisture-source analysis",
            "Containment setup and air filtration",
            "Removal of affected materials and surface treatment",
            "Post-remediation cleaning and prevention guidance"
        ],
        faqs: [
            {
                q: "What signs indicate you may need mold remediation?",
                a: "Persistent odor, visible growth, humidity problems, or recent water damage are common triggers for inspection."
            },
            {
                q: "Will remediation include moisture correction guidance?",
                a: "Yes. The process includes recommendations to address humidity or leak sources tied to recurrence."
            },
            {
                q: "Is containment used during cleanup?",
                a: "Yes. Containment and filtration are used to limit cross-contamination during removal work."
            },
            {
                q: "Do you test air quality after remediation?",
                a: "Post-remediation verification options can be coordinated to help confirm cleanup goals were met before normal occupancy resumes."
            },
            {
                q: "Can mold return after remediation?",
                a: "It can if moisture issues remain unresolved, which is why source control and humidity management are key parts of the plan."
            }
        ],
        seo: {
            focusKeyphrase: "mold remediation",
            relatedTerms: [
                "mold cleanup",
                "mold removal company",
                "black mold remediation",
                "mold inspection"
            ]
        }
    },
    "hazmat-cleanup": {
        slug: "hazmat-cleanup",
        name: "Hazmat Cleanup",
        navLabel: "HAZ",
        shortDescription: "Specialized hazardous material cleanup with controlled handling, containment, and compliant disposal workflows.",
        emergencyLine: "(888) 480-7473",
        heroPrimary: "Hazardous Material Response",
        heroSecondary: "Rapid containment and decontamination for complex property safety incidents.",
        processSteps: [
            "Incident assessment and hazard zoning",
            "Containment, PPE protocol, and controlled cleanup",
            "Material handling and approved disposal channels",
            "Final sanitation and property re-entry guidance"
        ],
        faqs: [
            {
                q: "What incidents require hazmat cleanup support?",
                a: "Events involving biological contamination, chemical hazards, or unsafe material exposure need specialized handling."
            },
            {
                q: "Is the response available 24/7?",
                a: "Yes. Emergency intake runs continuously for urgent hazard stabilization and dispatch."
            },
            {
                q: "Do you provide documentation for property managers or insurers?",
                a: "Yes. Work summaries and incident documentation are available for operational and claim records."
            },
            {
                q: "How is hazardous waste disposal handled?",
                a: "Collected materials are packaged, transported, and documented through approved channels based on incident and regulatory requirements."
            },
            {
                q: "Can occupied properties remain open during cleanup?",
                a: "In some cases, partial operations can continue with strict containment zones, but it depends on hazard level and safety clearance."
            }
        ],
        seo: {
            focusKeyphrase: "hazmat cleanup",
            relatedTerms: [
                "hazard cleanup",
                "biohazard cleanup",
                "decontamination service",
                "hazardous waste cleanup"
            ]
        }
    }
};
const PROVINCE_CITY_ROWS = [
    {
        province: "Alberta",
        cities: [
            "Airdrie",
            "Beaumont",
            "Brooks",
            "Calgary",
            "Camrose",
            "Chestermere",
            "Cold Lake",
            "Edmonton",
            "Fort Saskatchewan",
            "Grande Prairie",
            "Lacombe",
            "Leduc",
            "Lethbridge",
            "Lloydminster",
            "Medicine Hat",
            "Red Deer",
            "Spruce Grove",
            "St. Albert",
            "Wetaskiwin",
            "Fort McMurray",
            "Okotoks",
            "Canmore"
        ]
    },
    {
        province: "British Columbia",
        cities: [
            "Abbotsford",
            "Armstrong",
            "Burnaby",
            "Campbell River",
            "Castlegar",
            "Chilliwack",
            "Colwood",
            "Coquitlam",
            "Courtenay",
            "Cranbrook",
            "Dawson Creek",
            "Delta",
            "Duncan",
            "Enderby",
            "Fernie",
            "Fort St. John",
            "Grand Forks",
            "Greenwood",
            "Kamloops",
            "Kelowna",
            "Kimberley",
            "Langford",
            "Langley",
            "Maple Ridge",
            "Merritt",
            "Mission",
            "Nanaimo",
            "Nelson",
            "New Westminster",
            "North Vancouver",
            "Parksville",
            "Penticton",
            "Pitt Meadows",
            "Port Alberni",
            "Port Coquitlam",
            "Port Moody",
            "Powell River",
            "Prince George",
            "Prince Rupert",
            "Quesnel",
            "Revelstoke",
            "Richmond",
            "Rossland",
            "Salmon Arm",
            "Surrey",
            "Terrace",
            "Trail",
            "Vancouver",
            "Vernon",
            "Victoria",
            "West Kelowna",
            "White Rock",
            "Williams Lake",
            "West Vancouver",
            "North Delta",
            "Squamish",
            "Whistler"
        ]
    },
    {
        province: "Manitoba",
        cities: [
            "Brandon",
            "Dauphin",
            "Flin Flon",
            "Morden",
            "Selkirk",
            "Steinbach",
            "Thompson",
            "Winkler",
            "Winnipeg",
            "Portage la Prairie"
        ]
    },
    {
        province: "New Brunswick",
        cities: [
            "Bathurst",
            "Campbellton",
            "Dieppe",
            "Edmundston",
            "Fredericton",
            "Miramichi",
            "Moncton",
            "Saint John",
            "Riverview",
            "Quispamsis"
        ]
    },
    {
        province: "Newfoundland and Labrador",
        cities: [
            "Corner Brook",
            "Mount Pearl",
            "St. John's",
            "Grand Falls-Windsor",
            "Gander",
            "Happy Valley-Goose Bay"
        ]
    },
    {
        province: "Northwest Territories",
        cities: [
            "Yellowknife"
        ]
    },
    {
        province: "Nova Scotia",
        cities: [
            "Halifax",
            "Sydney",
            "Truro",
            "New Glasgow",
            "Kentville",
            "Amherst"
        ]
    },
    {
        province: "Nunavut",
        cities: [
            "Iqaluit"
        ]
    },
    {
        province: "Ontario",
        cities: [
            "Ajax",
            "Barrie",
            "Belleville",
            "Brampton",
            "Brantford",
            "Brockville",
            "Burlington",
            "Cambridge",
            "Clarence-Rockland",
            "Cornwall",
            "Dryden",
            "Elliot Lake",
            "Greater Sudbury",
            "Guelph",
            "Hamilton",
            "Kawartha Lakes",
            "Kingston",
            "Kitchener",
            "London",
            "Markham",
            "Mississauga",
            "Niagara Falls",
            "North Bay",
            "Oakville",
            "Oshawa",
            "Ottawa",
            "Pembroke",
            "Peterborough",
            "Pickering",
            "Richmond Hill",
            "Sarnia",
            "Sault Ste. Marie",
            "St. Catharines",
            "St. Thomas",
            "Thorold",
            "Thunder Bay",
            "Timmins",
            "Toronto",
            "Vaughan",
            "Waterloo",
            "Welland",
            "Windsor",
            "Milton",
            "Whitby",
            "Orangeville",
            "Newmarket",
            "Aurora",
            "Stouffville",
            "Orillia",
            "Woodstock",
            "Leamington"
        ]
    },
    {
        province: "Prince Edward Island",
        cities: [
            "Charlottetown",
            "Summerside"
        ]
    },
    {
        province: "Quebec",
        cities: [
            "Acton Vale",
            "Alma",
            "Amos",
            "Amqui",
            "Baie-Comeau",
            "Baie-D'Urfé",
            "Baie-Saint-Paul",
            "Barkmere",
            "Beaconsfield",
            "Beauceville",
            "Beauharnois",
            "Beaupré",
            "Bécancour",
            "Bedford",
            "Belleterre",
            "Beloeil",
            "Berthierville",
            "Blainville",
            "Boisbriand",
            "Bois-des-Filion",
            "Bonaventure",
            "Boucherville",
            "Bromont",
            "Brossard",
            "Brownsburg-Chatham",
            "Candiac",
            "Cap-Chat",
            "Cap-Santé",
            "Carignan",
            "Carleton-sur-Mer",
            "Causapscal",
            "Chambly",
            "Chandler",
            "Chapais",
            "Charlemagne",
            "Châteauguay",
            "Château-Richer",
            "Chibougamau",
            "Clermont",
            "Coaticook",
            "Contrecoeur",
            "Cookshire-Eaton",
            "Coteau-du-Lac",
            "Côte-Saint-Luc",
            "Cowansville",
            "Crabtree",
            "Danville",
            "Daveluyville",
            "Dégelis",
            "Delson",
            "Desbiens",
            "Deux-Montagnes",
            "Disraeli",
            "Dolbeau-Mistassini",
            "Dollard-des-Ormeaux",
            "Donnacona",
            "Dorval",
            "Drummondville",
            "Dunham",
            "Duparquet",
            "East Angus",
            "Estérel",
            "Farnham",
            "Fermont",
            "Forestville",
            "Fossambault-sur-le-Lac",
            "Gaspé",
            "Gatineau",
            "Gracefield",
            "Granby",
            "Grande-Rivière",
            "Hampstead",
            "Hudson",
            "Huntingdon",
            "Joliette",
            "Kingsey Falls",
            "Kirkland",
            "La Malbaie",
            "La Pocatière",
            "La Prairie",
            "La Sarre",
            "La Tuque",
            "Lac-Brome",
            "Lac-Delage",
            "Lac-des-Aigles",
            "Lachute",
            "Lac-Mégantic",
            "Lac-Saint-Joseph",
            "Lac-Sergent",
            "L'Ancienne-Lorette",
            "L'Assomption",
            "Laval",
            "Lavaltrie",
            "Lebel-sur-Quévillon",
            "L'Épiphanie",
            "Léry",
            "Lévis",
            "L'Île-Cadieux",
            "L'Île-Dorval",
            "L'Île-Perrot",
            "Longueuil",
            "Lorraine",
            "Louiseville",
            "Macamic",
            "Magog",
            "Malartic",
            "Maniwaki",
            "Marieville",
            "Mascouche",
            "Matagami",
            "Matane",
            "McMasterville",
            "Mercier",
            "Métabetchouan--Lac-à-la-Croix",
            "Métis-sur-Mer",
            "Mirabel",
            "Mont-Joli",
            "Mont-Laurier",
            "Montmagny",
            "Montréal",
            "Montréal-Est",
            "Montréal-Ouest",
            "Mont-Royal",
            "Mont-Saint-Hilaire",
            "Mont-Tremblant",
            "Murdochville",
            "Neuville",
            "New Richmond",
            "Nicolet",
            "Normandin",
            "Notre-Dame-de-l'Île-Perrot",
            "Notre-Dame-des-Prairies",
            "Otterburn Park",
            "Paspébiac",
            "Percé",
            "Pincourt",
            "Plessisville",
            "Pohénégamook",
            "Pointe-Claire",
            "Pont-Rouge",
            "Port-Cartier",
            "Portneuf",
            "Prévost",
            "Princeville",
            "Québec",
            "Repentigny",
            "Richelieu",
            "Richmond",
            "Rigaud",
            "Rimouski",
            "Rivière-du-Loup",
            "Rivière-Rouge",
            "Roberval",
            "Rosemère",
            "Rouyn-Noranda",
            "Saguenay",
            "Saint-Amable",
            "Saint-Antonin",
            "Saint-Augustin-de-Desmaures",
            "Saint-Basile",
            "Saint-Basile-le-Grand",
            "Saint-Bruno-de-Montarville",
            "Saint-Césaire",
            "Saint-Charles-Borromée",
            "Saint-Colomban",
            "Saint-Constant",
            "Sainte-Adèle",
            "Sainte-Agathe-des-Monts",
            "Sainte-Anne-de-Beaupré",
            "Sainte-Anne-de-Bellevue",
            "Sainte-Anne-des-Monts",
            "Sainte-Anne-des-Plaines",
            "Sainte-Brigitte-de-Laval",
            "Sainte-Catherine",
            "Sainte-Catherine-de-la-Jacques-Cartier",
            "Sainte-Julie",
            "Sainte-Marguerite-du-Lac-Masson",
            "Sainte-Marie",
            "Sainte-Marthe-sur-le-Lac",
            "Sainte-Thérèse",
            "Saint-Eustache",
            "Saint-Félicien",
            "Saint-Gabriel",
            "Saint-Georges",
            "Saint-Honoré",
            "Saint-Hyacinthe",
            "Saint-Jean-sur-Richelieu",
            "Saint-Jérôme",
            "Saint-Joseph-de-Beauce",
            "Saint-Joseph-de-Sorel",
            "Saint-Lambert",
            "Saint-Lazare",
            "Saint-Lin--Laurentides",
            "Saint-Marc-des-Carrières",
            "Saint-Ours",
            "Saint-Pamphile",
            "Saint-Pascal",
            "Saint-Philippe",
            "Saint-Pie",
            "Saint-Raymond",
            "Saint-Rémi",
            "Saint-Sauveur",
            "Saint-Tite",
            "Saint-Zotique",
            "Salaberry-de-Valleyfield",
            "Schefferville",
            "Scotstown",
            "Senneterre",
            "Sept-Îles",
            "Shannon",
            "Shawinigan",
            "Sherbrooke",
            "Sorel-Tracy",
            "Stanstead",
            "Sutton",
            "Témiscaming",
            "Témiscouata-sur-le-Lac",
            "Terrebonne",
            "Thetford Mines",
            "Thurso",
            "Trois-Pistoles",
            "Trois-Rivières",
            "Valcourt",
            "Val-des-Sources",
            "Val-d'Or",
            "Varennes",
            "Vaudreuil-Dorion",
            "Victoriaville",
            "Ville-Marie",
            "Warwick",
            "Waterloo",
            "Waterville",
            "Westmount",
            "Windsor"
        ]
    },
    {
        province: "Saskatchewan",
        cities: [
            "Estevan",
            "Flin Flon",
            "Humboldt",
            "Kindersley",
            "Lloydminster",
            "Martensville",
            "Melville",
            "Moose Jaw",
            "North Battleford",
            "Prince Albert",
            "Regina",
            "Saskatoon",
            "Swift Current",
            "Warman",
            "Weyburn",
            "Yorkton",
            "Melfort"
        ]
    },
    {
        province: "Yukon",
        cities: [
            "Whitehorse"
        ]
    }
];
function slugifyLocationSegment(value) {
    return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
const LOCATION_PAGES = PROVINCE_CITY_ROWS.flatMap(({ province, cities })=>{
    const stateSlug = slugifyLocationSegment(province);
    return cities.map((cityName)=>{
        const citySlug = slugifyLocationSegment(cityName);
        return {
            stateSlug,
            stateName: province,
            citySlug,
            cityName,
            regionName: province,
            countryName: "Canada",
            cityHosts: [
                `${citySlug}.example.com`,
                `${citySlug}.localhost`
            ]
        };
    });
});
const SERVICE_ORDER = [
    "water-damage",
    "fire-damage",
    "mold-remediation",
    "hazmat-cleanup"
];
function getServiceBySlug(service) {
    return SERVICES[service] ?? null;
}
function getLocation(state, city) {
    return LOCATION_PAGES.find((location)=>location.stateSlug === state && location.citySlug === city) ?? null;
}
function normalizeHost(host) {
    return host.trim().toLowerCase().replace(/:\d+$/, "");
}
function getLocationByHost(host) {
    const normalizedHost = normalizeHost(host);
    return LOCATION_PAGES.find((location)=>location.cityHosts.some((cityHost)=>normalizeHost(cityHost) === normalizedHost)) ?? null;
}
function getLocationsByState(state) {
    return LOCATION_PAGES.filter((location)=>location.stateSlug === state);
}
function getStates() {
    return Array.from(new Map(LOCATION_PAGES.map((location)=>[
            location.stateSlug,
            location.stateName
        ]))).map(([slug, name])=>({
            slug,
            name
        }));
}
function titleCaseFromSlug(slug) {
    return slug.split("-").map((part)=>part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}
}),
"[project]/app/[state]/[city]/[service]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocalServicePage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$json$2d$ld$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/json-ld.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/restoration-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seo.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCATION_PAGES"].flatMap((location)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SERVICE_ORDER"].map((service)=>({
                state: location.stateSlug,
                city: location.citySlug,
                service
            })));
}
async function generateMetadata({ params }) {
    const { state, city, service: serviceSlug } = await params;
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocation"])(state, city);
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceBySlug"])(serviceSlug);
    if (!location || !service) {
        return {
            title: "Page Not Found"
        };
    }
    const primaryKeyword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceLocationKeyword"])(service.name, location.cityName);
    const secondaryKeyword = service.name;
    const canonicalPath = `/${location.stateSlug}/${location.citySlug}/${service.slug}`;
    const title = `${primaryKeyword} | 24/7 Emergency Response`;
    const description = `${primaryKeyword} for homes and businesses in ${location.cityName}, ${location.stateName}. Call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"]} for immediate dispatch.`;
    return {
        title,
        description,
        keywords: [
            primaryKeyword,
            secondaryKeyword,
            `${secondaryKeyword} ${location.stateName}`,
            ...service.seo.relatedTerms
        ],
        alternates: {
            canonical: canonicalPath
        },
        openGraph: {
            title: `${primaryKeyword} | ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]}`,
            description,
            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(canonicalPath),
            type: "article",
            siteName: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"],
            locale: "en_CA"
        },
        twitter: {
            card: "summary_large_image",
            title: `${primaryKeyword} | ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]}`,
            description
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true
            }
        }
    };
}
async function LocalServicePage({ params }) {
    const { state, city, service: serviceSlug } = await params;
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocation"])(state, city);
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceBySlug"])(serviceSlug);
    if (!location || !service) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const primaryKeyword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceLocationKeyword"])(service.name, location.cityName);
    const secondaryKeyword = service.name;
    const canonicalPath = `/${location.stateSlug}/${location.citySlug}/${service.slug}`;
    const phoneHref = `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"].replace(/[^0-9]/g, "")}`;
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])("/")
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])("/services")
            },
            {
                "@type": "ListItem",
                position: 3,
                name: secondaryKeyword,
                item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(`/services/${service.slug}`)
            },
            {
                "@type": "ListItem",
                position: 4,
                name: primaryKeyword,
                item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(canonicalPath)
            }
        ]
    };
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: primaryKeyword,
        serviceType: secondaryKeyword,
        description: `${secondaryKeyword} in ${location.cityName}, ${location.stateName}. ${service.shortDescription}`,
        areaServed: {
            "@type": "City",
            name: location.cityName,
            containedInPlace: {
                "@type": "AdministrativeArea",
                name: location.stateName
            }
        },
        provider: {
            "@type": "Organization",
            name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"],
            telephone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_E164"],
            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])("/")
        },
        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(canonicalPath)
    };
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]} ${location.cityName}`,
        telephone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_E164"],
        areaServed: [
            location.cityName,
            location.stateName
        ],
        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(canonicalPath),
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])("/next.svg"),
        priceRange: "$$",
        availableService: {
            "@type": "Service",
            name: secondaryKeyword
        }
    };
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq)=>({
                "@type": "Question",
                name: `${faq.q} (${location.cityName})`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.a
                }
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#07131c] text-slate-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$json$2d$ld$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: breadcrumbSchema
            }, void 0, false, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$json$2d$ld$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: serviceSchema
            }, void 0, false, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$json$2d$ld$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: localBusinessSchema
            }, void 0, false, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$json$2d$ld$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: faqSchema
            }, void 0, false, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden border-b border-[#fbbf24]/25 bg-gradient-to-br from-[#0d2432] via-[#143246] to-[#0d2432]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-20 top-8 h-60 w-60 rounded-full bg-[#1e4a63]/30 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -right-20 top-24 h-64 w-64 rounded-full bg-[#fbbf24]/20 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto max-w-7xl px-6 py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-slate-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "text-[#fbbf24] hover:brightness-110",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/services/${service.slug}`,
                                        className: "text-[#fbbf24] hover:brightness-110",
                                        children: secondaryKeyword
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: location.cityName
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 inline-flex rounded-full border border-[#fbbf24]/40 bg-[#fbbf24]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#fbbf24]",
                                children: [
                                    "Primary Keyword: ",
                                    primaryKeyword
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl",
                                children: primaryKeyword
                            }, void 0, false, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 max-w-3xl text-lg text-slate-300",
                                children: [
                                    "Secondary keyword: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: secondaryKeyword
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 32
                                    }, this),
                                    ". Call ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"],
                                    " to start emergency intake in ",
                                    location.cityName,
                                    ", ",
                                    location.stateName,
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: phoneHref,
                                        className: "rounded-md bg-[#fbbf24] px-5 py-3 text-sm font-semibold text-[#1e4a63] hover:brightness-105",
                                        children: [
                                            "Call ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/services",
                                        className: "rounded-md border border-[#1e4a63] px-5 py-3 text-sm font-semibold text-slate-100 hover:border-[#fbbf24] hover:text-[#fbbf24]",
                                        children: "View All Services"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1.5fr_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-[#1e4a63] bg-gradient-to-b from-[#0b1f2c] to-[#081824] p-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-white",
                                        children: "Quick Answer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: primaryKeyword
                                            }, void 0, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 15
                                            }, this),
                                            " means rapid mitigation to limit property loss, followed by documented cleanup and stabilization. Immediate phone intake improves dispatch speed and reduces secondary damage risk."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-[#1e4a63] bg-gradient-to-b from-[#0b1f2c] to-[#081824] p-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-white",
                                        children: [
                                            "Definition: What Is ",
                                            secondaryKeyword,
                                            "?"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-slate-300",
                                        children: [
                                            secondaryKeyword,
                                            " is the structured response to property damage events, including assessment, containment, cleanup, drying or decontamination, and restoration planning. In ",
                                            location.cityName,
                                            ", this process is adapted to local property conditions and urgency level."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-[#1e4a63] bg-gradient-to-b from-[#0b1f2c] to-[#081824] p-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-white",
                                        children: [
                                            "Process in ",
                                            location.cityName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "mt-4 space-y-3",
                                        children: service.processSteps.map((step, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "rounded-lg border border-[#1e4a63] bg-[#081824] p-4 text-slate-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mr-2 font-semibold text-[#fbbf24]",
                                                        children: [
                                                            idx + 1,
                                                            "."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 19
                                                    }, this),
                                                    step
                                                ]
                                            }, step, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-[#1e4a63] bg-gradient-to-b from-[#0b1f2c] to-[#081824] p-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-white",
                                        children: "Trust Signals"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-4 space-y-3 text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "rounded-lg border border-[#1e4a63] bg-[#081824] p-4",
                                                children: "Scope documentation includes photos, condition notes, and step-by-step work records."
                                            }, void 0, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "rounded-lg border border-[#1e4a63] bg-[#081824] p-4",
                                                children: "Communication stays direct from intake through stabilization and next-step planning."
                                            }, void 0, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 258,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "rounded-lg border border-[#1e4a63] bg-[#081824] p-4",
                                                children: "Insurance-facing summaries are prepared to support clear claim workflows."
                                            }, void 0, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-[#1e4a63] bg-[#0b1f2c] p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white",
                                        children: "Service Mix"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-4 space-y-2 text-sm text-slate-300",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SERVICE_ORDER"].map((serviceKey)=>{
                                            const item = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SERVICES"][serviceKey];
                                            const isCurrent = item.slug === service.slug;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/${location.stateSlug}/${location.citySlug}/${item.slug}`,
                                                    className: `inline-flex ${isCurrent ? "text-[#fbbf24]" : "text-slate-300 hover:text-white"}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceLocationKeyword"])(item.name, location.cityName)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 21
                                                }, this)
                                            }, item.slug, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 276,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-[#1e4a63] bg-[#0b1f2c] p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white",
                                        children: "Nearby Internal Links"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-slate-300",
                                        children: [
                                            "Same-service city pages in ",
                                            location.stateName,
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-4 space-y-2 text-sm",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCATION_PAGES"].filter((candidate)=>candidate.stateSlug === location.stateSlug).filter((candidate)=>candidate.citySlug !== location.citySlug).slice(0, 6).map((candidate)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/${candidate.stateSlug}/${candidate.citySlug}/${service.slug}`,
                                                    className: "text-[#fbbf24] hover:brightness-110",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceLocationKeyword"])(service.name, candidate.cityName)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 21
                                                }, this)
                                            }, candidate.citySlug, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-[#1e4a63] bg-[#0b1f2c] p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white",
                                        children: "Call Priority"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-slate-300",
                                        children: "Primary intent on this page is immediate phone contact."
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: phoneHref,
                                        className: "mt-4 inline-flex rounded-md bg-[#fbbf24] px-4 py-2 text-sm font-semibold text-[#1e4a63] hover:brightness-105",
                                        children: [
                                            "Call ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-7xl px-6 pb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-[#1e4a63] bg-[#0b1f2c] p-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-white",
                            children: [
                                primaryKeyword,
                                " FAQs"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 space-y-4",
                            children: service.faqs.map((faq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: "rounded-lg border border-[#1e4a63] bg-[#081824] p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "cursor-pointer font-semibold text-[#fbbf24]",
                                            children: faq.q
                                        }, void 0, false, {
                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-sm text-slate-300",
                                            children: faq.a
                                        }, void 0, false, {
                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, faq.q, true, {
                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                    lineNumber: 317,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/[state]/[city]/[service]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[state]/[city]/[service]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__abe281a6._.js.map