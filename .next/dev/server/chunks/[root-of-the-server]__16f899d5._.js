module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/restoration-data.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/restoration-data.ts [middleware] (ecmascript)");
;
;
function extractHost(request) {
    return request.headers.get("x-forwarded-host") || request.headers.get("host") || "";
}
function proxy(request) {
    const host = extractHost(request);
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["getLocationByHost"])(host);
    if (!location) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const { pathname } = request.nextUrl;
    if (pathname === "/") {
        const url = request.nextUrl.clone();
        url.pathname = `/${location.stateSlug}/${location.citySlug}/water-damage`;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(url);
    }
    const servicePath = pathname.replace(/^\//, "");
    const isTopLevelService = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["SERVICE_ORDER"].some((service)=>service === servicePath);
    if (isTopLevelService) {
        const url = request.nextUrl.clone();
        url.pathname = `/${location.stateSlug}/${location.citySlug}/${servicePath}`;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(url);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__16f899d5._.js.map