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
const LOCATION_PAGES = [
    {
        stateSlug: "ontario",
        stateName: "Ontario",
        citySlug: "toronto",
        cityName: "Toronto",
        regionName: "Greater Toronto Area",
        countryName: "Canada",
        cityHosts: [
            "toronto.example.com",
            "toronto.localhost"
        ]
    },
    {
        stateSlug: "ontario",
        stateName: "Ontario",
        citySlug: "ottawa",
        cityName: "Ottawa",
        regionName: "National Capital Region",
        countryName: "Canada",
        cityHosts: [
            "ottawa.example.com",
            "ottawa.localhost"
        ]
    },
    {
        stateSlug: "ontario",
        stateName: "Ontario",
        citySlug: "mississauga",
        cityName: "Mississauga",
        regionName: "Peel Region",
        countryName: "Canada",
        cityHosts: [
            "mississauga.example.com",
            "mississauga.localhost"
        ]
    },
    {
        stateSlug: "british-columbia",
        stateName: "British Columbia",
        citySlug: "vancouver",
        cityName: "Vancouver",
        regionName: "Metro Vancouver",
        countryName: "Canada",
        cityHosts: [
            "vancouver.example.com",
            "vancouver.localhost"
        ]
    },
    {
        stateSlug: "british-columbia",
        stateName: "British Columbia",
        citySlug: "surrey",
        cityName: "Surrey",
        regionName: "Metro Vancouver",
        countryName: "Canada",
        cityHosts: [
            "surrey.example.com",
            "surrey.localhost"
        ]
    },
    {
        stateSlug: "british-columbia",
        stateName: "British Columbia",
        citySlug: "victoria",
        cityName: "Victoria",
        regionName: "Capital Regional District",
        countryName: "Canada",
        cityHosts: [
            "victoria.example.com",
            "victoria.localhost"
        ]
    },
    {
        stateSlug: "alberta",
        stateName: "Alberta",
        citySlug: "calgary",
        cityName: "Calgary",
        regionName: "Calgary Metropolitan Region",
        countryName: "Canada",
        cityHosts: [
            "calgary.example.com",
            "calgary.localhost"
        ]
    },
    {
        stateSlug: "alberta",
        stateName: "Alberta",
        citySlug: "edmonton",
        cityName: "Edmonton",
        regionName: "Edmonton Metropolitan Region",
        countryName: "Canada",
        cityHosts: [
            "edmonton.example.com",
            "edmonton.localhost"
        ]
    },
    {
        stateSlug: "alberta",
        stateName: "Alberta",
        citySlug: "red-deer",
        cityName: "Red Deer",
        regionName: "Central Alberta",
        countryName: "Canada",
        cityHosts: [
            "red-deer.example.com",
            "red-deer.localhost"
        ]
    },
    {
        stateSlug: "quebec",
        stateName: "Quebec",
        citySlug: "montreal",
        cityName: "Montreal",
        regionName: "Montreal Metropolitan Community",
        countryName: "Canada",
        cityHosts: [
            "montreal.example.com",
            "montreal.localhost"
        ]
    },
    {
        stateSlug: "quebec",
        stateName: "Quebec",
        citySlug: "quebec-city",
        cityName: "Quebec City",
        regionName: "Capitale-Nationale",
        countryName: "Canada",
        cityHosts: [
            "quebec-city.example.com",
            "quebec-city.localhost"
        ]
    },
    {
        stateSlug: "quebec",
        stateName: "Quebec",
        citySlug: "laval",
        cityName: "Laval",
        regionName: "Laval Region",
        countryName: "Canada",
        cityHosts: [
            "laval.example.com",
            "laval.localhost"
        ]
    }
];
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
"[project]/app/services/[service]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceHubPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/restoration-data.ts [app-rsc] (ecmascript)");
;
;
;
;
function getSiteUrl() {
    return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SERVICE_ORDER"].map((service)=>({
            service
        }));
}
async function generateMetadata({ params }) {
    const { service: serviceSlug } = await params;
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceBySlug"])(serviceSlug);
    if (!service) {
        return {
            title: "Service Not Found | restoxpertrestoration"
        };
    }
    const title = `${service.name} Service Areas | restoxpertrestoration`;
    const description = `Emergency ${service.name.toLowerCase()} coverage across major Canadian cities.`;
    return {
        title,
        description,
        alternates: {
            canonical: `/services/${service.slug}`
        },
        openGraph: {
            title,
            description,
            url: `${getSiteUrl()}/services/${service.slug}`,
            type: "website"
        }
    };
}
async function ServiceHubPage({ params }) {
    const { service: serviceSlug } = await params;
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceBySlug"])(serviceSlug);
    if (!service) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#07131c] px-6 py-16 text-slate-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/services",
                    className: "text-sm font-semibold text-[#fbbf24] hover:brightness-110",
                    children: "← Back to Services"
                }, void 0, false, {
                    fileName: "[project]/app/services/[service]/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "relative mt-6 overflow-hidden rounded-2xl border border-[#1e4a63] bg-gradient-to-br from-[#0d2432] via-[#143246] to-[#0d2432] p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#fbbf24]/20 blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/app/services/[service]/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-[#1e4a63]/30 blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/app/services/[service]/page.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "relative text-xs uppercase tracking-[0.2em] text-[#fbbf24]",
                            children: [
                                service.navLabel,
                                " Focus"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/services/[service]/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "relative mt-3 text-4xl font-black text-white",
                            children: service.name
                        }, void 0, false, {
                            fileName: "[project]/app/services/[service]/page.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "relative mt-4 max-w-3xl text-slate-300",
                            children: service.shortDescription
                        }, void 0, false, {
                            fileName: "[project]/app/services/[service]/page.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/services/[service]/page.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold",
                            children: "Live Canadian City Pages"
                        }, void 0, false, {
                            fileName: "[project]/app/services/[service]/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-slate-300",
                            children: "Find local emergency response coverage by city."
                        }, void 0, false, {
                            fileName: "[project]/app/services/[service]/page.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCATION_PAGES"].map((location)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${location.stateSlug}/${location.citySlug}/${service.slug}`,
                                    className: "rounded-xl border border-[#1e4a63] bg-gradient-to-b from-[#0b1f2c] to-[#081824] p-5 transition hover:-translate-y-0.5 hover:border-[#fbbf24]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white",
                                        children: location.cityName
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/[service]/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this)
                                }, `${location.stateSlug}-${location.citySlug}`, false, {
                                    fileName: "[project]/app/services/[service]/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/services/[service]/page.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/services/[service]/page.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/services/[service]/page.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/services/[service]/page.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/services/[service]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/services/[service]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0376d2ab._.js.map