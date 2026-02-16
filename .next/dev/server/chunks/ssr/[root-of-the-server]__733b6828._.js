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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/restoration-data.ts [app-rsc] (ecmascript)");
;
;
;
;
function getSiteUrl() {
    return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}
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
            title: "Page Not Found | restoxpertrestoration"
        };
    }
    const title = `${service.name} in ${location.cityName}, ${location.stateName}, Canada | 24/7 Response`;
    const description = `${service.name} in ${location.cityName}, ${location.stateName}, Canada. ${service.shortDescription}`;
    const canonicalPath = `/${location.stateSlug}/${location.citySlug}/${service.slug}`;
    return {
        title,
        description,
        keywords: [
            `${service.seo.focusKeyphrase} ${location.cityName}`,
            `${location.cityName} ${service.name.toLowerCase()}`,
            `${location.stateName} Canada emergency restoration`,
            ...service.seo.relatedTerms
        ],
        alternates: {
            canonical: canonicalPath
        },
        openGraph: {
            title,
            description,
            url: `${getSiteUrl()}${canonicalPath}`,
            type: "article",
            siteName: "restoxpertrestoration"
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#07131c] text-slate-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden border-b border-[#fbbf24]/25 bg-gradient-to-br from-[#0d2432] via-[#143246] to-[#0d2432]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-20 top-8 h-60 w-60 rounded-full bg-[#1e4a63]/30 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -right-20 top-24 h-64 w-64 rounded-full bg-[#fbbf24]/20 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                        lineNumber: 74,
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
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/services/${service.slug}`,
                                        className: "text-[#fbbf24] hover:brightness-110",
                                        children: service.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: location.cityName
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 inline-flex rounded-full border border-[#fbbf24]/40 bg-[#fbbf24]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#fbbf24]",
                                children: service.slug === "water-damage" ? "Primary Focus" : "Secondary Focus"
                            }, void 0, false, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl",
                                children: [
                                    service.name,
                                    " in ",
                                    location.cityName,
                                    ", ",
                                    location.stateName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 max-w-3xl text-lg text-slate-300",
                                children: service.heroSecondary
                            }, void 0, false, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `tel:${service.emergencyLine.replace(/[^0-9]/g, "")}`,
                                        className: "rounded-md bg-[#fbbf24] px-5 py-3 text-sm font-semibold text-[#1e4a63] hover:brightness-105",
                                        children: [
                                            "Call ",
                                            service.emergencyLine
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/services",
                                        className: "rounded-md border border-[#1e4a63] px-5 py-3 text-sm font-semibold text-slate-100 hover:border-[#fbbf24] hover:text-[#fbbf24]",
                                        children: "View All Services"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1.5fr_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "rounded-2xl border border-[#1e4a63] bg-gradient-to-b from-[#0b1f2c] to-[#081824] p-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-white",
                                children: [
                                    "Local Response in ",
                                    location.regionName,
                                    ", ",
                                    location.countryName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-slate-300",
                                children: [
                                    "Our ",
                                    service.name.toLowerCase(),
                                    " team supports residential and commercial properties across ",
                                    location.cityName,
                                    "and nearby markets in ",
                                    location.stateName,
                                    ". Dispatch is prioritized for emergency scenarios with clear communication from intake to stabilization."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-slate-300",
                                children: "Water events remain our primary operational focus, with rapid response teams ready for urgent mitigation and recovery."
                            }, void 0, false, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-8 text-xl font-bold text-[#fbbf24]",
                                children: "Process"
                            }, void 0, false, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 123,
                                columnNumber: 11
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
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            step
                                        ]
                                    }, step, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                        lineNumber: 109,
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
                                        lineNumber: 136,
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
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 21
                                                }, this)
                                            }, item.slug, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 135,
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
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-slate-300",
                                        children: "Interlink nearby city pages to strengthen topical clusters."
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-4 space-y-2 text-sm",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCATION_PAGES"].filter((candidate)=>candidate.stateSlug === location.stateSlug).filter((candidate)=>candidate.citySlug !== location.citySlug).slice(0, 4).map((candidate)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/${candidate.stateSlug}/${candidate.citySlug}/${service.slug}`,
                                                    className: "text-[#fbbf24] hover:brightness-110",
                                                    children: [
                                                        service.navLabel,
                                                        " in ",
                                                        candidate.cityName,
                                                        ", ",
                                                        candidate.stateName
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, this)
                                            }, candidate.citySlug, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 108,
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
                                service.name,
                                " FAQs"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                            lineNumber: 176,
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
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-sm text-slate-300",
                                            children: faq.a
                                        }, void 0, false, {
                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, faq.q, true, {
                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/[state]/[city]/[service]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[state]/[city]/[service]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__733b6828._.js.map