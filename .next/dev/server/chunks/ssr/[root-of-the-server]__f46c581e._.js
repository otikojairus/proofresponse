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
"[project]/app/[state]/[city]/[service]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocalServicePage,
    "generateMetadata",
    ()=>generateMetadata,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$json$2d$ld$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/json-ld.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/restoration-data.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seo.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const revalidate = 86400;
const WATER_DAMAGE_KEYWORDS = [
    {
        phrase: "water damage restoration",
        range: "$3,000-$25,000+"
    },
    {
        phrase: "emergency water removal",
        range: "$1,500-$7,500"
    },
    {
        phrase: "flood cleanup",
        range: "$2,500-$20,000+"
    },
    {
        phrase: "basement flooding cleanup",
        range: "$2,000-$15,000+"
    },
    {
        phrase: "emergency flood restoration",
        range: "$4,000-$30,000+"
    },
    {
        phrase: "water extraction",
        range: "$1,200-$6,000"
    },
    {
        phrase: "flooded basement help",
        range: "$1,500-$12,000"
    },
    {
        phrase: "storm water damage repair",
        range: "$3,000-$25,000+"
    },
    {
        phrase: "burst pipe water cleanup",
        range: "$2,000-$15,000+"
    },
    {
        phrase: "24 hour water damage service",
        range: "$2,000-$18,000+"
    }
];
const TRUST_CARDS = [
    {
        icon: "fa-camera",
        title: "Documented Scope",
        body: "Photo evidence, moisture readings, and work logs are captured throughout mitigation."
    },
    {
        icon: "fa-phone",
        title: "Direct Communication",
        body: "Clear updates from intake through stabilization and next-step planning."
    },
    {
        icon: "fa-file-invoice",
        title: "Insurance Alignment",
        body: "Structured summaries help keep claim workflows clear and consistent."
    }
];
const LOCAL_RESPONSE_CARDS = [
    {
        icon: "fa-clock",
        title: "Rapid Intake",
        body: "Emergency triage starts immediately with clear priorities based on safety and property impact."
    },
    {
        icon: "fa-shield-halved",
        title: "Stabilization First",
        body: "Containment and loss-limiting actions are prioritized to reduce escalation and secondary damage."
    },
    {
        icon: "fa-file-lines",
        title: "Documented Workflow",
        body: "Scope notes, photo records, and milestone updates keep communication clear throughout mitigation."
    }
];
const WATER_LOCAL_FACTORS = [
    {
        icon: "fa-bolt",
        title: "Fast scheduling and dispatch",
        body: "Time-sensitive response helps limit material loss and shortens recovery timelines."
    },
    {
        icon: "fa-clipboard-list",
        title: "Clear extraction scope",
        body: "Defined priorities make emergency water removal and water extraction more efficient."
    },
    {
        icon: "fa-droplet",
        title: "Drying and moisture tracking",
        body: "Measured drying progress helps teams make better technical decisions day by day."
    },
    {
        icon: "fa-building",
        title: "Operational impact control",
        body: "Plans are adapted to occupied homes, rentals, and active commercial properties."
    },
    {
        icon: "fa-file-pen",
        title: "Insurance-ready documentation",
        body: "Structured records support claim communication and next-step approvals."
    },
    {
        icon: "fa-arrows-rotate",
        title: "Smooth handoff to repairs",
        body: "Mitigation closeout transitions into practical restoration planning without delays."
    }
];
const WATER_SCENARIO_CARDS = [
    {
        icon: "fa-house-flood-water",
        title: "Basement Flooding Cleanup",
        body: "Standing water, soaked finishes, and hidden moisture pockets require fast extraction and drying plans."
    },
    {
        icon: "fa-cloud-showers-heavy",
        title: "Storm Water Damage Repair",
        body: "Weather-driven intrusion often affects multiple surfaces and demands quick containment."
    },
    {
        icon: "fa-faucet-drip",
        title: "Burst Pipe Water Cleanup",
        body: "Pressurized leaks can spread rapidly through walls and ceilings without immediate intervention."
    }
];
const WATER_COORDINATION_CARDS = [
    {
        icon: "fa-calendar-check",
        title: "Dispatch + Site Stabilization",
        points: [
            "Emergency intake and technician routing",
            "Hazard review and containment steps",
            "Initial extraction and mitigation sequencing"
        ]
    },
    {
        icon: "fa-file-circle-check",
        title: "Reporting + Communication",
        points: [
            "Photo documentation and daily notes",
            "Moisture readings and progress updates",
            "Records suitable for stakeholders and insurance"
        ]
    },
    {
        icon: "fa-screwdriver-wrench",
        title: "Recovery + Next Steps",
        points: [
            "Drying completion and scope closeout",
            "Recommended repair-path planning",
            "Practical guidance to reduce recurrence risk"
        ]
    }
];
const WATER_PREP_STEPS = [
    "Share where water is entering and which areas were affected first.",
    "Move valuables, electronics, and sensitive items away from wet zones if safe.",
    "Take photos of visible damage before cleanup activity starts.",
    "Provide access details, occupancy constraints, and any known shutoff status."
];
function buildWaterKeywordSections(cityName) {
    return [
        {
            id: "water-damage-restoration",
            icon: "fa-house-flood-water",
            title: `Professional Water Damage Restoration in ${cityName}`,
            keyword: `water damage restoration ${cityName}`,
            intro: "When water damage hits, response speed determines how much of the structure and contents can be saved. This service covers full-cycle mitigation, sanitization, and reconstruction planning.",
            highlights: [
                "Limits structural weakening in drywall, framing, and subfloors through immediate stabilization.",
                "Reduces mold risk by controlling moisture within the first 24-48 hour window.",
                "Protects salvageable contents with documented handling and cleaning.",
                "Supports faster insurance workflows through clear scope and photo-backed records."
            ],
            steps: [
                "24/7 emergency contact and on-site moisture-based inspection.",
                "High-volume extraction using truck-mounted pumps and vacuums.",
                "Detailed scope development and insurer-facing documentation.",
                "Drying and dehumidification to industry moisture targets.",
                "Cleaning, deodorizing, and restoration handoff for rebuilds."
            ],
            reasons: [
                "Local crews familiar with typical property layouts and recurring water risks.",
                "Certified technicians and calibrated drying documentation.",
                "One accountable team from emergency intake through closeout."
            ],
            cta: `For expert water damage restoration in ${cityName}, call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]} at ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"]}.`
        },
        {
            id: "emergency-water-removal",
            icon: "fa-pump-soap",
            title: `Emergency Water Removal in ${cityName}`,
            keyword: `emergency water removal ${cityName}`,
            intro: "Emergency water removal is the first operational priority after a leak, overflow, or sudden flood. Fast extraction directly lowers secondary damage and total recovery scope.",
            highlights: [
                "Prevents rapid saturation of floors, walls, and insulation cavities.",
                "Stops standing-water conditions that accelerate microbial growth.",
                "Improves salvageability of furniture, electronics, and finishes.",
                "Cuts restoration costs by reducing demolition and rebuild depth."
            ],
            steps: [
                "Immediate dispatch to active-loss locations.",
                "Source and hazard check: water category, shutoff, and safety controls.",
                "Bulk extraction with high-capacity pump and vacuum systems.",
                "Targeted extraction under flooring edges, padding, and baseboard zones.",
                "Pre-drying prep for structural dehumidification."
            ],
            reasons: [
                "High-powered equipment far beyond rental-grade extraction tools.",
                "Teams trained to locate hidden moisture migration paths.",
                "Clear communication from first call through transition to drying."
            ],
            cta: `Need immediate emergency water removal in ${cityName}? ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]} is available 24/7 at ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"]}.`
        },
        {
            id: "flood-cleanup",
            icon: "fa-water",
            title: `Flood Cleanup in ${cityName}`,
            keyword: `flood cleanup ${cityName}`,
            intro: "Flood cleanup requires a biohazard-aware process, not surface-level cleanup. Category 3 floodwater can carry contaminants that require controlled removal, disinfection, and material disposal.",
            highlights: [
                "Addresses sewage, bacteria, and contaminant exposure risk.",
                "Removes sludge, silt, and residues that cause odor and corrosion.",
                "Disposes unsalvageable porous materials using compliant procedures.",
                "Restores sanitary conditions before rebuild activity starts."
            ],
            steps: [
                "Emergency flood response and site safety triage.",
                "Heavy-duty pumping with debris and sediment removal.",
                "Controlled demolition of contaminated porous materials.",
                "EPA-aligned cleaning, sanitizing, and deodorization.",
                "Structural drying and final safety verification."
            ],
            reasons: [
                "Teams equipped for contaminated-water environments.",
                "End-to-end process management from extraction to sanitized closeout.",
                "Documentation suitable for property owners and claim stakeholders."
            ],
            cta: `For professional flood cleanup in ${cityName}, contact ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]} now at ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"]}.`
        },
        {
            id: "basement-flooding-cleanup",
            icon: "fa-down-long",
            title: `Basement Flooding Cleanup in ${cityName}`,
            keyword: `basement flooding cleanup ${cityName}`,
            intro: "Basement floods are high-risk due to below-grade humidity, restricted airflow, and hidden moisture behind finishes. Cleanup must be aggressive, measured, and mold-preventive.",
            highlights: [
                "Handles hydrostatic intrusion and groundwater-related seepage paths.",
                "Targets moisture trapped in slab interfaces and wall assemblies.",
                "Reduces persistent basement humidity and future odor issues.",
                "Prioritizes mold prevention in poorly ventilated environments."
            ],
            steps: [
                "Rapid source control and below-grade risk assessment.",
                "Submersible pumping and wet extraction for pooled water.",
                "Debris removal and sanitation prep.",
                "LGR dehumidification and directional airflow planning.",
                "Post-dry inspection with recommendations for prevention upgrades."
            ],
            reasons: [
                "Specialized basement drying tools and below-grade mitigation workflows.",
                "Strong mold-prevention focus during cleanup and closeout.",
                "Fast turnaround for finished and unfinished basement configurations."
            ],
            cta: `For expert basement flooding cleanup in ${cityName}, call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]} at ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"]}.`
        },
        {
            id: "emergency-flood-restoration",
            icon: "fa-house-circle-check",
            title: `Emergency Flood Restoration in ${cityName}`,
            keyword: `emergency flood restoration ${cityName}`,
            intro: "Emergency flood restoration connects mitigation and reconstruction into one managed path. Instead of juggling vendors, owners get a single coordinated recovery workflow.",
            highlights: [
                "Combines extraction, drying, and reconstruction planning under one scope.",
                "Reduces schedule gaps between mitigation and repairs.",
                "Improves accountability with one team managing milestones.",
                "Keeps communication centralized for owners and insurers."
            ],
            steps: [
                "Immediate emergency mitigation and property securing.",
                "Comprehensive moisture and material damage assessment.",
                "Content handling, inventory support, and salvage coordination.",
                "Drying, sanitization, and odor control.",
                "Repair/reconstruction mobilization and final handoff."
            ],
            reasons: [
                "One-company workflow from first dispatch to final restoration.",
                "Fewer delays and fewer handoff errors across project phases.",
                "Consistent quality controls across mitigation and rebuild stages."
            ],
            cta: `Need full emergency flood restoration in ${cityName}? Reach ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]} 24/7 at ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"]}.`
        },
        {
            id: "water-extraction",
            icon: "fa-syringe",
            title: `Water Extraction in ${cityName}`,
            keyword: `water extraction ${cityName}`,
            intro: "Professional water extraction removes standing water quickly and deeply. This is the technical foundation for every successful drying and mitigation outcome.",
            highlights: [
                "Rapidly reduces pressure load from accumulated standing water.",
                "Pulls moisture from carpet, padding, and hard-surface interfaces.",
                "Limits lateral and upward capillary spread through porous materials.",
                "Improves drying efficiency and lowers overall project duration."
            ],
            steps: [
                "Rapid deployment with extraction-ready equipment.",
                "Bulk removal with submersible pumps where needed.",
                "Deep extraction using truck-mounted vacuum systems.",
                "Specialty tooling for edges, corners, and floor seams.",
                "Moisture verification for post-extraction planning."
            ],
            reasons: [
                "Industrial extraction power beyond portable consumer units.",
                "Technicians trained to find hidden water pockets quickly.",
                "Extraction protocols designed to accelerate downstream drying."
            ],
            cta: `For fast, high-capacity water extraction in ${cityName}, call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]} at ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"]}.`
        },
        {
            id: "flooded-basement-help",
            icon: "fa-life-ring",
            title: `Flooded Basement Help in ${cityName}`,
            keyword: `flooded basement help ${cityName}`,
            intro: "Flooded basement emergencies require immediate, practical support. The priority is safety first, then rapid pumping, salvage triage, and controlled drying.",
            highlights: [
                "Fast action prevents water migration into main living areas.",
                "Early safety checks reduce electrical and environmental hazards.",
                "Structured salvage triage helps protect high-value contents.",
                "Professional drying reduces long-term mold and odor exposure."
            ],
            steps: [
                "Emergency call intake with safety-first instructions.",
                "Arrival hazard checks before active mitigation work.",
                "High-capacity pumping and exposure of affected surfaces.",
                "Salvage guidance for contents and material triage.",
                "Drying and cleanup setup for full basement recovery."
            ],
            reasons: [
                "Local response teams with basement-loss experience.",
                "Clear communication during high-stress emergency conditions.",
                "Equipment and staffing built for small and large basement events."
            ],
            cta: `If you need immediate flooded basement help in ${cityName}, call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]} now at ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"]}.`
        },
        {
            id: "storm-water-damage-repair",
            icon: "fa-cloud-bolt",
            title: `Storm Water Damage Repair in ${cityName}`,
            keyword: `storm water damage repair ${cityName}`,
            intro: "Storm losses often combine exterior breach damage with interior water saturation. Repair requires both emergency property securing and full interior mitigation.",
            highlights: [
                "Handles roofing/siding breach points and interior wet materials together.",
                "Prevents additional rain entry through immediate tarping/board-up actions.",
                "Controls hidden migration in roof decks and wall cavities.",
                "Supports full recovery from weather event to finished repairs."
            ],
            steps: [
                "24/7 post-storm emergency mobilization.",
                "Immediate roof tarp and opening security work.",
                "Interior extraction, demolition, and structural drying.",
                "Exterior/interior repairs including finishes and weather sealing.",
                "Final walkthrough and quality closeout."
            ],
            reasons: [
                "Storm-specific response planning for complex dual-damage events.",
                "Single coordination point for emergency and repair phases.",
                "Claim-ready documentation across mitigation and reconstruction."
            ],
            cta: `For complete storm water damage repair in ${cityName}, contact ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]} at ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"]}.`
        },
        {
            id: "burst-pipe-water-cleanup",
            icon: "fa-faucet",
            title: `Burst Pipe Water Cleanup in ${cityName}`,
            keyword: `burst pipe water cleanup ${cityName}`,
            intro: "Burst pipes can release high volumes in minutes and spread loss across multiple rooms or levels. Cleanup must be immediate, controlled, and source-focused.",
            highlights: [
                "Stops ongoing pressurized water spread and rapid saturation.",
                "Improves salvage odds for finishes and contents through fast extraction.",
                "Targets hidden flow paths in walls, ceilings, and utility chases.",
                "Transitions quickly from cleanup into coordinated repair."
            ],
            steps: [
                "Emergency call with shutoff guidance where possible.",
                "Rapid extraction across all active and migrated wet zones.",
                "Pipe-damage assessment and repair coordination.",
                "Targeted demolition and controlled drying of affected assemblies.",
                "Rebuild and finish restoration after moisture clearance."
            ],
            reasons: [
                "High-urgency protocols designed specifically for active burst events.",
                "Seamless coordination between water mitigation and repair teams.",
                "Proven workflows for freeze-break and corrosion-related failures."
            ],
            cta: `For urgent burst pipe water cleanup in ${cityName}, call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]} immediately at ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"]}.`
        },
        {
            id: "24-hour-water-damage-service",
            icon: "fa-phone-volume",
            title: `24 Hour Water Damage Service in ${cityName}`,
            keyword: `24 hour water damage service ${cityName}`,
            intro: "Water emergencies do not follow business hours. True 24/7 service means live intake, active dispatch, and real mitigation starts at any hour.",
            highlights: [
                "Avoids overnight delays that increase structural and microbial risk.",
                "Reduces spread from small incidents before they escalate by morning.",
                "Provides real-time dispatch and on-call crew mobilization.",
                "Supports continuous recovery handoff from night response to daytime work."
            ],
            steps: [
                "Live emergency call answered by trained dispatch personnel.",
                "Immediate routing of nearest available response crew.",
                "Rapid arrival with extraction and stabilization equipment.",
                "Night-hour mitigation: extraction, containment, and drying setup.",
                "Seamless continuation into daytime restoration operations."
            ],
            reasons: [
                "True around-the-clock response capability, not just message intake.",
                "Local teams positioned for fast arrival across the service area.",
                "Consistent process quality regardless of time of day."
            ],
            cta: `For true 24 hour water damage service in ${cityName}, call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]} anytime at ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"]}.`
        }
    ];
}
async function generateMetadata({ params }) {
    const { state, city, service: serviceSlug } = await params;
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLocation"])(state, city);
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceBySlug"])(serviceSlug);
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
    const isWaterDamage = service.slug === "water-damage";
    const waterKeywordVariants = isWaterDamage ? WATER_DAMAGE_KEYWORDS.map(({ phrase })=>`${phrase} ${location.cityName}`) : [];
    return {
        title,
        description,
        keywords: [
            primaryKeyword,
            secondaryKeyword,
            `${secondaryKeyword} ${location.stateName}`,
            ...waterKeywordVariants,
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
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$restoration$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLocation"])(state, city);
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceBySlug"])(serviceSlug);
    if (!location || !service) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const primaryKeyword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceLocationKeyword"])(service.name, location.cityName);
    const secondaryKeyword = service.name;
    const canonicalPath = `/${location.stateSlug}/${location.citySlug}/${service.slug}`;
    const phoneHref = `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"].replace(/[^0-9]/g, "")}`;
    const isWaterDamage = service.slug === "water-damage";
    const waterKeywordSections = isWaterDamage ? buildWaterKeywordSections(location.cityName) : [];
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
        className: "iris-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$json$2d$ld$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: breadcrumbSchema
            }, void 0, false, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 594,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$json$2d$ld$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: serviceSchema
            }, void 0, false, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 595,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$json$2d$ld$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: localBusinessSchema
            }, void 0, false, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 596,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$json$2d$ld$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: faqSchema
            }, void 0, false, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 597,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "iris-hero iris-section py-14",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "iris-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#d7e4ee]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:text-white",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                    lineNumber: 602,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                    lineNumber: 603,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/services/${service.slug}`,
                                    className: "hover:text-white",
                                    children: secondaryKeyword
                                }, void 0, false, {
                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                    lineNumber: 604,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                    lineNumber: 607,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: location.cityName
                                }, void 0, false, {
                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                    lineNumber: 608,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                            lineNumber: 601,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "iris-hero-title mt-4",
                            children: primaryKeyword
                        }, void 0, false, {
                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                            lineNumber: 611,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "iris-hero-lead max-w-3xl",
                            children: [
                                "If your home or business needs immediate ",
                                secondaryKeyword.toLowerCase(),
                                " in ",
                                location.cityName,
                                ", call",
                                " ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"],
                                " for live emergency intake and rapid dispatch."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                            lineNumber: 612,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 max-w-3xl text-sm text-[#d6e6f0]",
                            children: [
                                "This local page covers response steps, first-24-hour priorities, scenario-specific guidance, and practical decision support for property owners and managers in ",
                                location.cityName,
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                            lineNumber: 616,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "iris-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: phoneHref,
                                    className: "iris-btn iris-btn-primary",
                                    children: [
                                        "Call ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"]
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                    lineNumber: 622,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/services",
                                    className: "iris-btn iris-btn-secondary",
                                    children: "View All Services"
                                }, void 0, false, {
                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                    lineNumber: 625,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                            lineNumber: 621,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                    lineNumber: 600,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 599,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "iris-section pt-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "iris-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "space-y-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "iris-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "iris-title text-2xl",
                                        children: "Quick Answer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 636,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "iris-subtitle",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: primaryKeyword
                                            }, void 0, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 638,
                                                columnNumber: 17
                                            }, this),
                                            " means rapid mitigation to limit property loss, followed by documented cleanup and stabilization."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 637,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 635,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "iris-divider"
                            }, void 0, false, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 642,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "iris-band-soft rounded-2xl px-6 py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "iris-title text-2xl",
                                        children: [
                                            "Definition: What Is ",
                                            secondaryKeyword,
                                            "?"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 645,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "iris-subtitle",
                                        children: [
                                            secondaryKeyword,
                                            " is a structured response including assessment, containment, cleanup, drying or decontamination, and restoration planning adapted for ",
                                            location.cityName,
                                            " properties."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 646,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 644,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "iris-band rounded-2xl px-6 py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "iris-section-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "iris-title text-2xl",
                                                children: [
                                                    "How Response Is Managed In ",
                                                    location.cityName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 654,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "A structured emergency workflow that balances urgency, safety, and documentation quality."
                                            }, void 0, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 655,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 653,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 grid gap-4 md:grid-cols-3",
                                        children: LOCAL_RESPONSE_CARDS.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "iris-panel",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44] text-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: `fa-solid ${card.icon}`,
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                            lineNumber: 661,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 660,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-3 text-base font-bold text-[#0d2d44]",
                                                        children: card.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 663,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm text-[#5c6875]",
                                                        children: card.body
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 664,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, card.title, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 659,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 657,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 652,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "iris-band rounded-2xl px-6 py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "iris-title text-2xl",
                                        children: [
                                            "Process in ",
                                            location.cityName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 671,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "mt-4 space-y-3",
                                        children: service.processSteps.map((step, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "iris-panel text-[#243443]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mr-2 font-semibold text-[#0d2d44]",
                                                        children: [
                                                            idx + 1,
                                                            "."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 675,
                                                        columnNumber: 21
                                                    }, this),
                                                    step
                                                ]
                                            }, step, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 674,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 672,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 670,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "iris-card iris-card-pad",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "iris-title text-2xl",
                                        children: "Trust Signals"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 683,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid gap-4 md:grid-cols-3",
                                        children: TRUST_CARDS.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "iris-panel",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44] text-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: `fa-solid ${card.icon}`,
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                            lineNumber: 688,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 687,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-3 text-base font-bold text-[#0d2d44]",
                                                        children: card.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 690,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm text-[#5c6875]",
                                                        children: card.body
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 691,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, card.title, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 686,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 684,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 682,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "iris-band-soft rounded-2xl px-6 py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "iris-title text-2xl",
                                        children: "What Happens In The First 24 Hours"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 698,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "iris-subtitle",
                                        children: "Initial call intake confirms safety concerns, access details, and urgency level. The early response window focuses on hazard control, containment, loss-limiting work, and documentation so recovery can move forward with fewer delays."
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 699,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 697,
                                columnNumber: 13
                            }, this),
                            isWaterDamage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "iris-band-soft rounded-2xl px-6 py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "iris-section-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "iris-title text-2xl",
                                                children: [
                                                    "Common Water Emergency Scenarios In ",
                                                    location.cityName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 709,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "High-frequency incidents that usually require urgent stabilization and moisture control."
                                            }, void 0, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 710,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 708,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 grid gap-4 md:grid-cols-3",
                                        children: WATER_SCENARIO_CARDS.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "iris-panel",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44] text-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: `fa-solid ${card.icon}`,
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                            lineNumber: 716,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 715,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-3 text-base font-bold text-[#0d2d44]",
                                                        children: card.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 718,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm text-[#5c6875]",
                                                        children: card.body
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 719,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, card.title, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 714,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 712,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 707,
                                columnNumber: 15
                            }, this) : null,
                            isWaterDamage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "iris-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "iris-section-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "iris-title text-2xl",
                                                children: "Top Priorities During Water Mitigation"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 729,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "What property owners and managers usually care about most in early response."
                                            }, void 0, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 730,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 728,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "iris-factors-list",
                                        children: WATER_LOCAL_FACTORS.map((factor, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "iris-factor-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "iris-factor-icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: `fa-solid ${factor.icon}`,
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                            lineNumber: 736,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 735,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "iris-factor-title",
                                                                children: [
                                                                    index + 1,
                                                                    ". ",
                                                                    factor.title
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                                lineNumber: 739,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "iris-factor-body",
                                                                children: factor.body
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                                lineNumber: 742,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 738,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, factor.title, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 734,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 732,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 727,
                                columnNumber: 15
                            }, this) : null,
                            isWaterDamage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "iris-band rounded-2xl px-6 py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "iris-section-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "iris-title text-2xl",
                                                children: "What We Coordinate On Water-Damage Calls"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 753,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "From first dispatch to mitigation closeout and recovery handoff."
                                            }, void 0, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 754,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 752,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 grid gap-4 md:grid-cols-3",
                                        children: WATER_COORDINATION_CARDS.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "iris-card iris-card-pad",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44] text-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: `fa-solid ${card.icon}`,
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                            lineNumber: 760,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 759,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-3 text-base font-bold text-[#0d2d44]",
                                                        children: card.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 762,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "mt-2 space-y-1 text-sm text-[#5c6875]",
                                                        children: card.points.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    "• ",
                                                                    point
                                                                ]
                                                            }, point, true, {
                                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                                lineNumber: 765,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 763,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, card.title, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 758,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 756,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 751,
                                columnNumber: 15
                            }, this) : null,
                            isWaterDamage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "iris-band-soft rounded-2xl px-6 py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "iris-section-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "iris-title text-2xl",
                                                children: "How To Prepare For Emergency Water Response"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 777,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Sharing these details early improves dispatch speed and scope accuracy."
                                            }, void 0, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 778,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 776,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 grid gap-3 md:grid-cols-2",
                                        children: WATER_PREP_STEPS.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "iris-card iris-card-pad",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-bold uppercase tracking-[0.16em] text-[#1e4a63]",
                                                        children: [
                                                            "Step ",
                                                            index + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 783,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-sm font-medium text-[#243443]",
                                                        children: step
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 784,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, step, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 782,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 780,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 775,
                                columnNumber: 15
                            }, this) : null,
                            isWaterDamage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "iris-band rounded-2xl px-6 py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "iris-title text-2xl",
                                        children: [
                                            "Emergency Water Damage & Flood Mitigation In ",
                                            location.cityName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 793,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "iris-subtitle",
                                        children: [
                                            "Common emergency requests include",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    "water damage restoration ",
                                                    location.cityName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 797,
                                                columnNumber: 19
                                            }, this),
                                            ",",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    "emergency water removal ",
                                                    location.cityName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 799,
                                                columnNumber: 19
                                            }, this),
                                            ",",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    "flood cleanup ",
                                                    location.cityName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 801,
                                                columnNumber: 19
                                            }, this),
                                            ", and",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    "basement flooding cleanup ",
                                                    location.cityName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 803,
                                                columnNumber: 19
                                            }, this),
                                            ". This page also addresses intents like",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    "burst pipe water cleanup ",
                                                    location.cityName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 805,
                                                columnNumber: 19
                                            }, this),
                                            " and",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    "24 hour water damage service ",
                                                    location.cityName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 807,
                                                columnNumber: 19
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 794,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 grid gap-3 md:grid-cols-2",
                                        children: WATER_DAMAGE_KEYWORDS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "iris-panel",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-[#0d2d44]",
                                                        children: [
                                                            item.phrase,
                                                            " ",
                                                            location.cityName
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 812,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm text-[#5c6875]",
                                                        children: [
                                                            "Typical project range: ",
                                                            item.range
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                        lineNumber: 815,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, item.phrase, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 811,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 809,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 792,
                                columnNumber: 15
                            }, this) : null,
                            isWaterDamage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "iris-band-soft rounded-2xl px-6 py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "iris-section-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "iris-title text-2xl",
                                                children: [
                                                    "Detailed Service Modules For ",
                                                    location.cityName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 825,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Use these sections to find the exact help you need based on your current water emergency."
                                            }, void 0, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 826,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 824,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 grid gap-3 md:grid-cols-2",
                                        children: waterKeywordSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `#${section.id}`,
                                                className: "iris-panel transition-transform duration-300 hover:-translate-y-0.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: `fa-solid ${section.icon}`,
                                                                "aria-hidden": "true"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                                lineNumber: 837,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                            lineNumber: 836,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block font-bold text-[#0d2d44]",
                                                                    children: section.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                                    lineNumber: 840,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mt-1 block text-sm text-[#5c6875]",
                                                                    children: "Step-by-step response guidance"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                                    lineNumber: 841,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                            lineNumber: 839,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                    lineNumber: 835,
                                                    columnNumber: 23
                                                }, this)
                                            }, section.id, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 830,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 828,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 823,
                                columnNumber: 15
                            }, this) : null,
                            isWaterDamage ? waterKeywordSections.map((section, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: section.id,
                                    className: `${sectionIndex % 2 === 0 ? "iris-band" : "iris-band-soft"} scroll-mt-32 rounded-2xl px-6 py-8`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "iris-title text-2xl",
                                                    children: section.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                    lineNumber: 858,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "iris-chip",
                                                    children: "Emergency Support"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                    lineNumber: 859,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                            lineNumber: 857,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "iris-subtitle mt-3",
                                            children: section.intro
                                        }, void 0, false, {
                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                            lineNumber: 861,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 grid gap-4 lg:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "iris-panel",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-base font-bold text-[#0d2d44]",
                                                            children: "Why This Service Matters"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                            lineNumber: 865,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "mt-3 space-y-2 text-sm text-[#5c6875]",
                                                            children: section.highlights.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        "• ",
                                                                        item
                                                                    ]
                                                                }, item, true, {
                                                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                                    lineNumber: 868,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                            lineNumber: 866,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                    lineNumber: 864,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "iris-panel",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-base font-bold text-[#0d2d44]",
                                                            children: "Our Process"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                            lineNumber: 873,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                            className: "mt-3 space-y-2 text-sm text-[#5c6875]",
                                                            children: section.steps.map((step, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-semibold text-[#0d2d44]",
                                                                            children: [
                                                                                idx + 1,
                                                                                "."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                                            lineNumber: 877,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        " ",
                                                                        step
                                                                    ]
                                                                }, step, true, {
                                                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                                    lineNumber: 876,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                            lineNumber: 874,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                    lineNumber: 872,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                            lineNumber: 863,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 grid gap-4 lg:grid-cols-[1.5fr_1fr]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "iris-panel",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-base font-bold text-[#0d2d44]",
                                                            children: [
                                                                "Why ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"],
                                                                " In ",
                                                                location.cityName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                            lineNumber: 886,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "mt-3 space-y-2 text-sm text-[#5c6875]",
                                                            children: section.reasons.map((reason)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        "• ",
                                                                        reason
                                                                    ]
                                                                }, reason, true, {
                                                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                                    lineNumber: 889,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                            lineNumber: 887,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                    lineNumber: 885,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "iris-panel",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-base font-bold text-[#0d2d44]",
                                                            children: "Ready To Start?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                            lineNumber: 894,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-sm text-[#5c6875]",
                                                            children: section.cta
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                            lineNumber: 895,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: phoneHref,
                                                            className: "iris-btn iris-btn-primary mt-4",
                                                            children: [
                                                                "Call ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMERGENCY_PHONE_DISPLAY"]
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                            lineNumber: 896,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                    lineNumber: 893,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                            lineNumber: 884,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, section.id, true, {
                                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                    lineNumber: 852,
                                    columnNumber: 19
                                }, this)) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                        lineNumber: 634,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                    lineNumber: 633,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 632,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "iris-section pt-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "iris-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "iris-card iris-card-pad",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "iris-title text-2xl",
                                children: [
                                    primaryKeyword,
                                    " FAQs"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 911,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 space-y-4",
                                children: service.faqs.map((faq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "iris-panel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                className: "cursor-pointer font-semibold text-[#0d2d44]",
                                                children: faq.q
                                            }, void 0, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 915,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-sm text-[#5c6875]",
                                                children: faq.a
                                            }, void 0, false, {
                                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                                lineNumber: 916,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, faq.q, true, {
                                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                        lineNumber: 914,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                                lineNumber: 912,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                        lineNumber: 910,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                    lineNumber: 909,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
                lineNumber: 908,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[state]/[city]/[service]/page.tsx",
        lineNumber: 593,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/[state]/[city]/[service]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[state]/[city]/[service]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f46c581e._.js.map