export type ServiceSection = {
  heading: string;
  content: string[];
  bullets?: string[];
};

export type ServiceContent = {
  id: string;
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  intro: string;
  quickStats: { costRange: string; duration: string; frequency: string };
  sections: ServiceSection[];
  faqs: { q: string; a: string }[];
  relatedGuides: string[];
  relatedServices: string[];
};

export const servicesContent: ServiceContent[] = [
  {
    id: "exterior-window-cleaning",
    slug: "exterior-window-cleaning",
    name: "Exterior Window Cleaning",
    title: "Exterior Window Cleaning Near Me | Free Quotes | ClearView Directory",
    metaDescription:
      "Find licensed exterior window cleaning pros near you. Learn what it costs, what's included, and how to get streak-free results. Free quotes, no obligation.",
    headline: "Exterior Window Cleaning",
    subheadline: "Professional exterior glass cleaning — the foundation of every window service",
    intro:
      "Exterior window cleaning is the most-requested window service and the one that makes the most visible difference to curb appeal and natural light. Professional exterior cleaning removes pollen, mineral deposits, bird droppings, and environmental grime that builds up on glass over months and bonds tightly enough that standard garden-hose rinsing can't remove it. Done with the right technique and tools — purified water, professional squeegees, and appropriate cleaning solution — results are streak-free in a way that DIY cleaning rarely achieves.",
    quickStats: { costRange: "$80–$175", duration: "1–2 hours", frequency: "Twice per year" },
    sections: [
      {
        heading: "What Exterior Window Cleaning Includes",
        content: [
          "A professional exterior window cleaning should include all of the following. Confirm scope before booking:",
        ],
        bullets: [
          "Full exterior glass cleaning on all accessible windows using professional squeegee technique",
          "Frame and sill wipe-down to remove accumulated dirt and prevent debris from running back onto clean glass",
          "Screen removal (where applicable) for cleaning or to allow direct glass access",
          "Scraping of stubborn deposits — bird droppings, paint overspray, or sap — with a razor blade if needed",
          "Final detail wipe of edges and corners to remove any water tracks",
        ],
      },
      {
        heading: "Why Professional Results Differ from DIY",
        content: [
          "The main reason DIY window cleaning leaves streaks is that consumer glass cleaners contain surfactants that dry unevenly and leave residue. Professional window cleaners use purified (zero-mineral) water that leaves no deposits when it dries, combined with a professional squeegee technique that removes all moisture in a single controlled pass.",
          "On hard water or mineral-coated glass, a pre-treatment step dissolves mineral bonds before cleaning — something standard household spray products can't accomplish. The result is glass that stays cleaner longer, since residue-free surfaces don't attract airborne particles as quickly.",
        ],
      },
      {
        heading: "Signs You're Overdue for Exterior Cleaning",
        content: [
          "You may be used to how your windows look, but compare them to these benchmarks:",
        ],
        bullets: [
          "A faint milky or hazy film visible when light strikes the glass at a low angle",
          "White or chalky spots from mineral-laden water (sprinklers, rain runoff) that don't wipe off",
          "Visible pollen or dust coating that hasn't improved after rain",
          "Yellow or brown staining from organic matter (tree sap, tannins, bird droppings)",
          "Reduced natural light indoors despite clear weather outside",
        ],
      },
      {
        heading: "What to Ask When Hiring a Pro",
        content: [
          "A few questions that reveal whether you're dealing with a quality operator:",
        ],
        bullets: [
          "Do you use purified/deionized water or standard tap? (Purified water prevents new mineral deposits)",
          "Is frame and sill cleaning included or extra?",
          "How do you handle screens — remove, clean separately, or clean in place?",
          "Are you licensed and insured? (Request a COI for any work above ground level)",
          "Do you guarantee streak-free results?",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does exterior window cleaning take?",
        a: "A typical single-story home with 15–20 windows takes 1–1.5 hours. A two-story home with 25–35 windows takes 2–3 hours. Homes with many divided-light or French-pane windows take longer due to the increased number of individual glass sections.",
      },
      {
        q: "How often should exterior windows be cleaned professionally?",
        a: "Twice a year is the standard recommendation for most homes — once in late spring after pollen season and once in fall. Homes near the ocean, busy roads, or with heavy tree coverage may benefit from three to four times per year. Commercial storefronts often need monthly service.",
      },
      {
        q: "Will cleaning damage my window seals or frames?",
        a: "Professional cleaning with appropriate pressure and technique does not damage window seals or frames. High-pressure washing can force water into frame gaps and damage seals — professional window cleaners use low-pressure water and squeegee technique, not pressure washing equipment.",
      },
      {
        q: "Can hard water stains be removed with exterior cleaning?",
        a: "Light mineral deposits are removed during a standard cleaning. Heavy hard water staining — particularly from sprinkler systems that have hit the glass repeatedly — requires a mineral deposit treatment as a separate step, usually priced as an add-on. Severe etching that has penetrated the glass surface may require professional glass restoration.",
      },
      {
        q: "Do I need to be home for exterior window cleaning?",
        a: "For exterior-only cleaning, you generally don't need to be present — the crew works around the outside of the house. Exceptions include gated properties, dogs in the yard, or specific access issues. Communicate any constraints when booking.",
      },
    ],
    relatedGuides: ["how-often-should-you-clean-windows", "window-cleaning-cost-guide", "best-time-of-year-to-clean-windows"],
    relatedServices: ["interior-window-cleaning", "screen-cleaning-repair", "track-sill-cleaning"],
  },

  {
    id: "interior-window-cleaning",
    slug: "interior-window-cleaning",
    name: "Interior Window Cleaning",
    title: "Interior Window Cleaning Near Me | Free Quotes | ClearView Directory",
    metaDescription:
      "Interior window cleaning removes fingerprints, dust, and indoor film from glass and frames. Find local pros for streak-free interior results. Free quotes.",
    headline: "Interior Window Cleaning",
    subheadline: "Clean from the inside out — the service most homeowners defer longer than they should",
    intro:
      "Interior window cleaning is often the missing half of a complete window service. While exterior glass picks up visible outdoor grime, interior glass accumulates a different kind of film — cooking grease, dust, pet activity, condensation residue, and fingerprints — that reduces clarity from the inside even when exterior windows look clean. Most homeowners clean their exteriors on some schedule and neglect interiors for years. A professional interior cleaning removes that film completely and leaves glass that visibly transmits more light.",
    quickStats: { costRange: "$100–$225", duration: "1.5–3 hours", frequency: "Once to twice per year" },
    sections: [
      {
        heading: "What Interior Window Cleaning Includes",
        content: ["A complete interior service should cover:"],
        bullets: [
          "Full glass cleaning on all interior window panes with streak-free finish",
          "Interior frame and sill cleaning — where dust, moisture, and mold commonly accumulate",
          "Track wipe-down (full track scrubbing is typically a separate add-on service)",
          "Removal and reinstallation of interior screens where applicable",
          "Detail wipe of all edges to prevent drips and residue streaking",
        ],
      },
      {
        heading: "The Interior Film Problem",
        content: [
          "Interior glass develops a distinct coating that's different from outdoor contamination. Cooking vapors leave a thin greasy film. Forced-air heating systems circulate fine dust particles that settle on glass surfaces. Pet dander and general household dust bond to any residue already on the glass, compounding over time.",
          "In rooms with gas appliances, the film develops faster and has an oily quality that requires a degreasing step before standard glass cleaning. In bathrooms, hard water from shower steam leaves mineral deposits on mirrors and any adjacent glass. A professional identifies these variations and adjusts the cleaning approach accordingly.",
        ],
      },
      {
        heading: "Protecting Interiors During Cleaning",
        content: [
          "A professional interior cleaning crew should take precautions that protect your furnishings and flooring:",
        ],
        bullets: [
          "Drop cloths or absorbent mats placed below window sills to catch drips",
          "Dry cloth or squeegee used at sill level to prevent water from reaching wood or carpet",
          "No chemical spray directly onto glass near electronics, artwork, or fabric",
          "Communication before moving furniture that's blocking window access",
        ],
      },
    ],
    faqs: [
      {
        q: "Is interior cleaning done at the same time as exterior?",
        a: "Yes — most companies offer combined interior/exterior service in a single visit, typically at a 15–25% discount versus booking each separately. If you only need interiors, that can usually be booked standalone, though some companies have a minimum charge that makes the combined service a better value.",
      },
      {
        q: "How should I prepare for interior window cleaning?",
        a: "Clear the window sill of any items (plants, decor, blinds on the sill) and move furniture that directly blocks window access. You don't need to empty the whole room. Letting the crew know in advance about any high-value items near windows (artwork, electronics) is helpful.",
      },
      {
        q: "Will the cleaning affect my blinds or window treatments?",
        a: "Professional window cleaners work around blinds and curtains when possible. For interior glass that's partially obscured by window treatments, some may need to be temporarily moved. Crews should not remove or handle motorized treatments — mention these when booking.",
      },
      {
        q: "What about condensation between double-pane glass?",
        a: "Interior cleaning cannot address fogging between panes of insulated glass — that's a seal failure that requires glass unit replacement. A window cleaner can confirm whether the haze you're seeing is on the surface (cleanable) or between the panes (not cleanable). Many homeowners don't realize the difference until they see one pane staying hazy after cleaning.",
      },
      {
        q: "How do I maintain interior windows between professional cleanings?",
        a: "A dry microfiber cloth handles fingerprints and dust between cleanings without leaving lint or streaks. Avoid paper towels, which leave fibers, and avoid ammonia-based cleaners on any tinted or film-treated glass. For kitchen windows specifically, a light degreaser wipe-down every month or two prevents buildup from becoming permanent.",
      },
    ],
    relatedGuides: ["professional-vs-diy-window-cleaning", "how-often-should-you-clean-windows"],
    relatedServices: ["exterior-window-cleaning", "track-sill-cleaning", "screen-cleaning-repair"],
  },

  {
    id: "screen-cleaning-repair",
    slug: "screen-cleaning-repair",
    name: "Screen Cleaning & Repair",
    title: "Window Screen Cleaning & Repair Near Me | ClearView Directory",
    metaDescription:
      "Dirty or damaged window screens reduce airflow and block light. Find local pros who clean, repair, and replace window screens. Free quotes.",
    headline: "Screen Cleaning & Repair",
    subheadline: "Remove the dust and pollen layer blocking your view and your airflow",
    intro:
      "Window screens are the most overlooked component of a window system. Most homeowners clean their glass and ignore their screens entirely — but a screen caked with pollen, dust, and spider webs reduces visible light by 10–20% and blocks airflow through open windows significantly. A professional screen cleaning removes all of that buildup, restores airflow, and eliminates the layer of debris that would otherwise fall back onto freshly cleaned glass the first time a window opens.",
    quickStats: { costRange: "$5–$15 per screen", duration: "30–60 min", frequency: "Once to twice per year" },
    sections: [
      {
        heading: "What Screen Cleaning Includes",
        content: ["A professional screen service covers:"],
        bullets: [
          "Removal of all screens from window frames",
          "Full wash with appropriate cleaning solution — both sides",
          "Rinse and dry (or air-dry) before reinstallation to prevent water spots on adjacent glass",
          "Inspection for tears, bent frames, or screen-to-frame separation",
          "Reinstallation with proper tensioning so screens sit flush in frames",
        ],
      },
      {
        heading: "Screen Repair vs. Replacement",
        content: [
          "Small tears (under 2–3 inches) in screen mesh can typically be repaired on-site with a patch kit for $5–$10 per screen. Tears larger than that, or screens where the mesh has separated from the frame spline in multiple places, are usually more economical to replace entirely.",
          "Standard aluminum mesh replacement costs $15–$35 per screen depending on size. Specialty screens — solar screens, pet-resistant heavy mesh, or motorized retractable screens — cost considerably more. A reputable screen service will give you honest guidance on repair vs. replace rather than automatically recommending replacement.",
        ],
      },
      {
        heading: "Why Screens Matter for Window Cleaning",
        content: [
          "When screens are left in place during glass cleaning — which some low-cost services do — the cleaning is compromised. Every time a window opens, air flows through the screen and deposits accumulated debris onto the freshly cleaned interior and exterior glass. Having screens professionally cleaned separately, then reinstalled after glass cleaning, is the correct sequence.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is screen cleaning included in standard window cleaning?",
        a: "It depends on the company. Some include screen removal, cleaning, and reinstallation in their base price; others charge per screen or offer it as an add-on. Confirm explicitly when getting quotes — 'window cleaning' often means glass only.",
      },
      {
        q: "Can screens be cleaned without removing them?",
        a: "In-place cleaning is possible with a soft brush and hose, but it's less thorough and risks pushing debris onto clean glass. Professional services remove screens, wash them separately, and reinstall after the glass is done — this is the correct technique.",
      },
      {
        q: "How do I know if a screen needs replacing rather than cleaning?",
        a: "If the mesh is torn, the frame is bent so the screen doesn't sit flush, or the spline (the rubber cord holding the mesh to the frame) is cracked and pulling away, replacement is warranted. If it's just dirty — no matter how dirty — cleaning will restore it.",
      },
      {
        q: "What's the difference between standard and solar screens?",
        a: "Solar screens use denser mesh (typically 80–90% shade fabric) that blocks UV and reduces heat gain but also reduces visibility and natural light. Standard screens block bugs with minimal light or view interference. Solar screens are common in hot climates as an energy-saving measure but require a professional to size and install correctly.",
      },
    ],
    relatedGuides: ["professional-vs-diy-window-cleaning"],
    relatedServices: ["exterior-window-cleaning", "track-sill-cleaning"],
  },

  {
    id: "track-sill-cleaning",
    slug: "track-sill-cleaning",
    name: "Track & Sill Cleaning",
    title: "Window Track & Sill Cleaning Near Me | ClearView Directory",
    metaDescription:
      "Window tracks and sills collect dirt, mold, and dead insects that affect indoor air quality. Find local pros for deep track cleaning. Free quotes.",
    headline: "Track & Sill Cleaning",
    subheadline: "The deep clean that glass-only services skip — and where mold hides",
    intro:
      "Window tracks and sills are the dirtiest part of any window system and the part most commonly skipped by standard window cleaning services. Over time, tracks accumulate compacted dirt, dead insects, pollen, moisture residue, and — particularly in humid climates — mold and mildew growth. That organic matter affects indoor air quality every time the window opens, and the mold that develops in damp tracks can spread to adjacent frames and walls if left untreated. Track cleaning is the unglamorous but necessary part of a complete window service.",
    quickStats: { costRange: "$3–$10 per window", duration: "45–90 min", frequency: "Once per year" },
    sections: [
      {
        heading: "What Track & Sill Cleaning Includes",
        content: ["A proper deep-clean of tracks and sills requires:"],
        bullets: [
          "Dry debris removal from track channels using a brush or vacuum before introducing any moisture",
          "Scrubbing of track channels with an appropriate tool — toothbrush-sized for tight tracks, larger for sliding door tracks",
          "Mold treatment with a mold-inhibiting cleaner where biological growth is present",
          "Weep hole clearing: small holes at the bottom of track channels that drain water — these clog with debris and cause water to back up inside the frame",
          "Sill surface cleaning and drying to prevent water retention under window frames",
        ],
      },
      {
        heading: "Mold in Window Tracks",
        content: [
          "Mold in window tracks is extremely common in any climate where windows occasionally have condensation — which includes most of the country except the driest desert climates. The track channel holds moisture longer than any other surface on the window, and it's dark, which encourages mold growth even with relatively brief wetness.",
          "Standard cleaning products don't reliably kill mold; they discolor it without removing the root structure. A professional track cleaning service uses an appropriate mold-inhibiting solution and physically scrubs the track, removing the visible mold along with the organic matter it's feeding on.",
        ],
      },
      {
        heading: "Weep Holes — The Detail Most People Miss",
        content: [
          "Every sliding window and sliding door track has small weep holes drilled through the exterior frame at the base of the track channel. Their function is to drain any water that enters the track to the outside. When weep holes are blocked — which they commonly are, with compacted dirt and debris — water backs up inside the track and accelerates the mold and frame damage that makes track cleaning necessary in the first place.",
          "A thorough track cleaning always includes clearing these holes with a wire or pick. It takes 30 seconds per window and dramatically extends the time between cleanings.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is track cleaning included in standard window cleaning?",
        a: "Usually not — standard window cleaning means glass cleaning. Track and sill cleaning is almost always a separate add-on, priced per window. If it matters to you, ask explicitly whether tracks are included before booking.",
      },
      {
        q: "How do I know if my tracks have mold?",
        a: "Black or dark gray spots at the base of track channels that don't wipe away with a dry cloth are usually mold. A musty smell when windows are opened is another indicator. In humid climates, mold can be present even when tracks look just dirty rather than visibly spotted.",
      },
      {
        q: "Can I clean tracks myself?",
        a: "Yes — a DIY track cleaning involves vacuuming loose debris, scrubbing with an old toothbrush and a diluted all-purpose cleaner or white vinegar, and following up with a mold inhibitor if growth is present. For heavily soiled or molded tracks, professional cleaning is more effective because pros have the right tools and appropriate cleaning products. For light maintenance between professional visits, DIY is perfectly reasonable.",
      },
      {
        q: "How often do tracks need professional cleaning?",
        a: "Once per year is sufficient for most homes in moderate climates. Homes in high-humidity regions, oceanfront properties, or homes where windows are opened frequently may benefit from twice per year. The best time is spring — clearing winter's moisture accumulation before summer's warm weather accelerates any mold growth.",
      },
    ],
    relatedGuides: ["how-often-should-you-clean-windows"],
    relatedServices: ["exterior-window-cleaning", "interior-window-cleaning"],
  },

  {
    id: "skylight-cleaning",
    slug: "skylight-cleaning",
    name: "Skylight Cleaning",
    title: "Skylight Cleaning Near Me | Free Quotes | ClearView Directory",
    metaDescription:
      "Dirty skylights block natural light and can obscure water damage or failing seals. Find local pros who safely clean interior and exterior skylights. Free quotes.",
    headline: "Skylight Cleaning",
    subheadline: "Restore the natural light that dirty glass is costing you",
    intro:
      "Skylights can lose 30–40% of their light transmission when coated with pollen, mineral deposits, and organic debris — and most homeowners never notice because the change happens gradually over months and years. Professional skylight cleaning restores that light transmission completely and, importantly, gives a trained eye access to inspect the skylight flashing, frame, and seals for early signs of leaks that cause significant damage if left undetected. It's one of the most impactful single services for interior light quality.",
    quickStats: { costRange: "$50–$150 per skylight", duration: "30–90 min per skylight", frequency: "Once to twice per year" },
    sections: [
      {
        heading: "Interior vs. Exterior Skylight Cleaning",
        content: [
          "Both surfaces matter — and they accumulate different types of contamination:",
        ],
        bullets: [
          "Exterior: pollen, bird droppings, mineral deposits from rain, debris from overhanging trees — standard with annual professional cleaning",
          "Interior: dust, condensation residue, cooking grease (for skylights over kitchens or open-plan spaces), insect activity — often neglected because of height",
          "Combined interior + exterior is the recommended service for maximum light restoration",
        ],
      },
      {
        heading: "Safety Considerations",
        content: [
          "Skylight cleaning requires either interior access from a tall ladder or scaffold, or exterior access on the roof. Both involve meaningful fall risk. Professional window cleaning companies carry the appropriate insurance and equipment for both scenarios — never attempt exterior skylight cleaning on a pitched roof without proper safety equipment.",
          "For interior cleaning of skylights more than 12 feet above the floor, professional equipment (tall ladders, scaffold towers, or water-fed poles) is required to reach the glass safely.",
        ],
      },
      {
        heading: "What Skylight Cleaning Reveals",
        content: [
          "A trained window cleaner examining a skylight at close range can identify early-stage problems that aren't visible from the floor:",
        ],
        bullets: [
          "Cracked or separating flashing at the roof-to-skylight junction",
          "Compromised weatherstripping or sealant around the frame perimeter",
          "Condensation between double-pane glass (indicating seal failure)",
          "Staining on the frame or adjacent ceiling plaster indicating past or active water infiltration",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I know if my skylight needs cleaning?",
        a: "Stand beneath the skylight on a clear day and compare the light quality to what you expect from the sky. If the glass looks hazy, yellow, or significantly darker than open sky viewed directly, it needs cleaning. Water staining around the frame on the interior side indicates a seal issue that should be inspected at the same time.",
      },
      {
        q: "Can skylights be cleaned from the inside only?",
        a: "Interior-only cleaning improves clarity from below but doesn't address the exterior surface, which usually carries the heavier contamination load. For meaningful light restoration, both surfaces should be cleaned. Interior-only is a reasonable approach when roof access is impossible or cost-prohibitive, but expect 50–60% of the improvement of a full clean.",
      },
      {
        q: "What's the cost premium for skylight cleaning vs. standard windows?",
        a: "Skylights are typically priced at $50–$150 each, depending on size and access complexity. The premium reflects the additional time, equipment, and safety requirements involved in working at height on a pitched roof versus standing windows.",
      },
      {
        q: "How often should skylights be cleaned?",
        a: "Once per year is adequate for most skylights. Those over kitchens or in rooms that generate significant humidity may need interior cleaning twice yearly. If a skylight is beneath a tree canopy, exterior cleaning twice per year prevents sap and debris buildup from bonding permanently to the glass.",
      },
    ],
    relatedGuides: ["how-often-should-you-clean-windows", "window-cleaning-cost-guide"],
    relatedServices: ["exterior-window-cleaning", "post-construction-window-cleanup"],
  },

  {
    id: "commercial-window-washing",
    slug: "commercial-window-washing",
    name: "Commercial Window Washing",
    title: "Commercial Window Washing Near Me | Free Quotes | ClearView Directory",
    metaDescription:
      "Professional commercial window washing for storefronts, offices, and retail. Scheduled maintenance contracts available. Free quotes from local pros.",
    headline: "Commercial Window Washing",
    subheadline: "First impressions start at the glass — and customers notice",
    intro:
      "Commercial window cleaning operates on a different schedule and with different stakes than residential service. A storefront or office with dirty windows signals to potential customers that the business doesn't attend to details — and research on retail environments consistently shows that natural light and clean windows correlate with higher sales and customer dwell time. Commercial window washing pros understand the business implications of their work and structure service around minimizing disruption, maintaining consistent schedules, and delivering predictable results.",
    quickStats: { costRange: "$100–$800+ per visit", duration: "1–8 hours", frequency: "Monthly to quarterly" },
    sections: [
      {
        heading: "Commercial Window Cleaning Pricing Factors",
        content: [
          "Commercial pricing varies more than residential because properties vary more in scale and access requirements:",
        ],
        bullets: [
          "Glass square footage: The primary driver — large storefront windows take significantly more time than small office windows",
          "Frequency: Monthly contracts are typically priced 20–30% lower per visit than one-time services",
          "Story count and access: Single-story storefronts are straightforward; anything above two stories requires lift equipment",
          "Hours of operation: After-hours or early-morning scheduling to avoid disrupting business typically carries a modest premium",
          "Interior cleaning: Many commercial clients only contract for exterior; interior cleaning is an add-on priced separately",
        ],
      },
      {
        heading: "Service Frequency by Business Type",
        content: [
          "Different business types have different cleaning frequency needs based on customer expectations and exposure:",
        ],
        bullets: [
          "Retail storefronts (clothing, food, specialty): Monthly — customer-facing glass is a direct reflection of brand quality",
          "Restaurants and cafes: Monthly to bi-weekly — grease, condensation, and food odors cause faster interior buildup",
          "Medical and dental offices: Monthly — cleanliness standards are part of patient trust",
          "General office: Quarterly — lower customer foot traffic reduces urgency, but annual minimum is standard",
          "Industrial and warehouse: Semi-annual at minimum for natural light and safety visibility requirements",
        ],
      },
      {
        heading: "What to Expect from a Commercial Cleaning Contract",
        content: [
          "A quality commercial window cleaning contract should specify: scheduled service dates or intervals, scope per visit (interior, exterior, or both), response time for off-schedule requests, and liability coverage. Ask for a certificate of insurance naming your business as an additional insured — this matters if a cleaner damages property or is injured on your premises.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do commercial window cleaners work around my business hours?",
        a: "Most do — early morning before opening or after close is standard for retail and food service. Some commercial cleaners specialize in after-hours work and price accordingly. For offices where exterior-only is needed, no scheduling around hours is required since they work from outside.",
      },
      {
        q: "What's included in a commercial window cleaning contract?",
        a: "Typically: scheduled exterior glass cleaning at the agreed frequency, frame wipe-down, and entry door glass. Interior cleaning, track cleaning, high-rise work, and specialty coatings are usually itemized separately. Review the contract scope carefully — what's included and excluded varies significantly between companies.",
      },
      {
        q: "How do I compare commercial window cleaning quotes?",
        a: "Get quotes from at least three companies and ensure they're quoting the same scope (same frequency, interior vs. exterior, which specific windows). Ask for references from current commercial clients at similar property types. Price per visit alone is not a useful comparison without standardizing scope.",
      },
      {
        q: "Can commercial cleaners handle high-rise glass?",
        a: "Yes, but it requires specialized equipment — boom lifts, scissor lifts, or rope access, depending on building height and configuration. High-rise work is a distinct specialty and is priced accordingly. Not all commercial window cleaning companies are equipped for it; confirm capability and insurance coverage before contracting for above-4-story work.",
      },
    ],
    relatedGuides: ["questions-to-ask-window-cleaning-company", "window-cleaning-cost-guide"],
    relatedServices: ["high-rise-window-cleaning", "exterior-window-cleaning"],
  },

  {
    id: "high-rise-window-cleaning",
    slug: "high-rise-window-cleaning",
    name: "High-Rise Window Cleaning",
    title: "High-Rise Window Cleaning Near Me | ClearView Directory",
    metaDescription:
      "High-rise and multi-story window cleaning requires specialized equipment and certified operators. Find qualified local pros for buildings above 3 stories. Free quotes.",
    headline: "High-Rise Window Cleaning",
    subheadline: "Specialized access equipment and certified operators for buildings above 3 stories",
    intro:
      "High-rise window cleaning is a distinct specialty within the window cleaning industry, requiring access equipment, safety certifications, and insurance coverage that standard residential window cleaners don't carry. Buildings above three to four stories require one of three approaches: boom lifts, scissor lifts, or rope access (rappelling) — each suited to different building configurations and subject to different safety regulations. Getting this work done correctly requires operators trained and certified in the specific access method being used.",
    quickStats: { costRange: "$500–$5,000+ per visit", duration: "Half-day to multiple days", frequency: "Quarterly to semi-annual" },
    sections: [
      {
        heading: "Access Methods for High-Rise Cleaning",
        content: [
          "The building's height and configuration determines which access method is appropriate:",
        ],
        bullets: [
          "Boom lift (aerial work platform): Used on buildings up to 6–8 stories with accessible ground-level positioning. Fastest setup, but requires flat ground clearance around the building perimeter",
          "Scissor lift: Used for lower sections of tall buildings or where boom extension isn't needed. Requires hard surface access and limited overhead obstacles",
          "Rope access / rappelling: Certified rope access technicians (IRATA-certified) rappel from anchor points on the roof. Used on tall buildings, curved facades, or where lifts can't access",
          "Building maintenance unit (BMU / gondola): Permanent or semi-permanent systems on skyscrapers. Operated only by certified BMU operators",
        ],
      },
      {
        heading: "Insurance and Certification Requirements",
        content: [
          "High-rise window cleaning carries significant liability exposure. Any contractor working above 4 stories should carry: commercial general liability of at least $2 million per occurrence, workers' compensation covering high-angle work, and equipment liability for powered access equipment. For rope access work, IRATA (Industrial Rope Access Trade Association) or SPRAT (Society of Professional Rope Access Technicians) certification is the industry standard.",
          "Request certificates of insurance specifically covering the work height before signing any contract. Generic CGL policies often exclude work above a specified height — verify this explicitly.",
        ],
      },
      {
        heading: "Frequency and Scheduling",
        content: [
          "High-rise building windows typically need cleaning twice to four times per year, depending on urban pollution exposure, building location (coastal buildings accumulate salt faster), and tenant requirements. Weather windows for high-rise work are narrower than for ground-level work — wind speed above 25 mph typically halts rope access operations for safety reasons.",
          "Buildings in urban cores with high pollution exposure may need quarterly cleaning to maintain acceptable appearance. Suburban office buildings can often stretch to semi-annual without significant visual impact.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I find a qualified high-rise window cleaner?",
        a: "Ask explicitly about their access method for your specific building, their certifications (IRATA or SPRAT for rope access, manufacturer certification for lift equipment), and request a certificate of insurance specifically covering work at your building's height. Don't assume a standard 'insured' residential window cleaner is equipped or covered for high-rise work.",
      },
      {
        q: "What's the lead time for scheduling high-rise window cleaning?",
        a: "Longer than residential — typically 2–4 weeks, and sometimes 6–8 weeks for buildings requiring rope access specialists. Equipment availability, permitting requirements in some jurisdictions, and the specialist nature of the work means last-minute scheduling is rarely possible.",
      },
      {
        q: "Does high-rise cleaning require permits?",
        a: "It depends on jurisdiction. Some cities require permits for boom lift or scaffold work that occupies sidewalk space. Rope access from a rooftop typically doesn't require a permit but may require notification to building management and in some cases local authorities. Your window cleaning contractor should handle any required permitting.",
      },
      {
        q: "Can individual floors be cleaned without doing the entire building?",
        a: "Technically yes, but it's rarely practical with rope access (requires the same rigging for any height) and usually more expensive per floor than cleaning the building in full. For lift work, cleaning a subset of floors is more feasible. Discuss scope and pricing explicitly with the contractor.",
      },
    ],
    relatedGuides: ["questions-to-ask-window-cleaning-company", "window-cleaning-cost-guide"],
    relatedServices: ["commercial-window-washing", "exterior-window-cleaning"],
  },

  {
    id: "post-construction-window-cleanup",
    slug: "post-construction-window-cleanup",
    name: "Post-Construction Window Cleanup",
    title: "Post-Construction Window Cleaning Near Me | ClearView Directory",
    metaDescription:
      "Construction leaves paint, silicone, concrete, and adhesive on glass. Find local pros who specialize in post-construction window cleanup. Free quotes.",
    headline: "Post-Construction Window Cleanup",
    subheadline: "Remove paint, silicone, concrete, and adhesive — without scratching the glass",
    intro:
      "Post-construction window cleaning is one of the most technically demanding window services. Construction trades leave multiple categories of contamination on glass: paint overspray, silicone sealant smears, mortar and concrete splatter, drywall compound dust, tape residue, and stickers. Each requires a different removal technique, and using the wrong approach — particularly with razor blades on tempered glass — can cause permanent scratching. Specialized post-construction cleaners have the chemistry knowledge and technique to remove all of these without damaging glass surfaces.",
    quickStats: { costRange: "$200–$1,500+", duration: "Half-day to full day", frequency: "One-time (post-project)" },
    sections: [
      {
        heading: "What Post-Construction Cleaning Removes",
        content: [
          "Construction contamination falls into several categories, each requiring different treatment:",
        ],
        bullets: [
          "Paint overspray: Requires chemical softening or careful razor blade removal — standard cleaning cannot remove cured paint",
          "Silicone sealant smears: Must be removed mechanically with a razor blade held at a safe angle — never with solvents, which can drive silicone into glass pores",
          "Concrete and mortar splatter: Acid washing or careful mechanical removal — high-pH concrete bonds aggressively to glass",
          "Drywall compound and plaster dust: Creates a film that hardens when wet — must be removed dry before any water is applied",
          "Adhesive residue (tape, labels, protection film): Solvent removal followed by standard cleaning",
          "Grout haze (on glass tile or adjacent glass): Acid-based grout remover applied carefully with appropriate dilution",
        ],
      },
      {
        heading: "The Razor Blade Question",
        content: [
          "Razor blades are a standard and appropriate tool for post-construction window cleaning on annealed (standard) glass when used properly — always with a lubricant, always pulled in one direction, always with a sharp blade. On tempered glass, the situation is more complex.",
          "Tempered glass can have microscopic surface defects from the tempering process ('fabricating debris') that cause scratching when a razor blade passes over them — scratching that looks like the cleaner's fault but pre-existed the cleaning. Reputable post-construction cleaners inspect for this and document glass condition before starting. Understand this risk and discuss it explicitly before contracting post-construction glass cleaning.",
        ],
      },
      {
        heading: "Timing Matters",
        content: [
          "Post-construction cleaning is more difficult the longer it's deferred. Paint and concrete that's been curing for weeks is significantly harder to remove than fresh contamination. The optimal time for post-construction window cleaning is immediately after construction is complete — before the building is occupied and before paint and concrete have months to fully cure.",
          "On occupied renovation projects where construction is phased, scheduling window cleaning at the completion of each phase rather than waiting until the entire project is done is more cost-effective and produces better results.",
        ],
      },
    ],
    faqs: [
      {
        q: "How is post-construction cleaning priced?",
        a: "Usually by the hour or by window count, since the time required depends heavily on what's on the glass. Get an on-site estimate rather than a phone quote — a contractor who won't estimate in person is likely to add significant charges on the day. Expect to pay 3–5x standard window cleaning rates for post-construction work.",
      },
      {
        q: "Can post-construction contamination cause permanent glass damage?",
        a: "Yes — if left too long. Concrete and mortar are high-pH and etch glass surfaces if left for months. Paint that has fully cured through multiple heat cycles becomes extremely difficult to remove without scratching. The sooner post-construction cleaning is done, the better the outcome.",
      },
      {
        q: "Will the cleaners damage my new windows?",
        a: "A qualified post-construction cleaner who assesses the glass beforehand and uses appropriate techniques should not damage properly manufactured glass. The main risks are: using razor blades on tempered glass with manufacturing defects (document beforehand), applying acid to coated glass, or using aggressive solvents near window seals and gaskets. Discuss all of these with the contractor before work begins.",
      },
      {
        q: "Does post-construction cleaning need to be done before final inspection?",
        a: "On many commercial projects, yes — architects and owners conduct final inspections with clean glass, so window cleaning is on the critical path. Schedule it as early as possible after construction completion, since specialty cleaners book out 1–3 weeks and timing with other finishing trades can be tight.",
      },
    ],
    relatedGuides: ["questions-to-ask-window-cleaning-company"],
    relatedServices: ["exterior-window-cleaning", "commercial-window-washing"],
  },
];
