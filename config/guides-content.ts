export type GuideSection = {
  heading: string;
  content: string[];
  bullets?: string[];
  numbered?: string[];
};

export type GuideContent = {
  slug: string;
  title: string;
  headline: string;
  metaDescription: string;
  publishDate: string;
  updatedDate: string;
  readTime: string;
  intro: string;
  sections: GuideSection[];
  relatedServices: string[];
  relatedGuides: string[];
};

export const guidesContent: GuideContent[] = [
  {
    slug: "how-often-should-you-clean-windows",
    title: "How Often Should You Clean Your Windows? | ClearView Directory",
    headline: "How Often Should You Clean Your Windows?",
    metaDescription:
      "The right window cleaning frequency depends on your climate, property type, and exposure. Here's how to set the right schedule for your home.",
    publishDate: "2026-01-15",
    updatedDate: "2026-01-15",
    readTime: "5 min read",
    intro:
      "There's no single correct answer to how often windows should be cleaned — the right frequency depends on where you live, what's around your property, and what your windows are exposed to. Most homeowners default to 'never' or 'when it gets bad enough,' which usually means years between cleanings and glass that's significantly dirtier than they realize. This guide gives you a framework to set an actual schedule based on your specific situation.",
    sections: [
      {
        heading: "The Baseline: Twice Per Year for Most Homes",
        content: [
          "For a typical suburban home in a moderate climate, twice per year is the right starting point. The optimal timing is late spring — after pollen season peaks and before summer heat bakes deposits onto glass — and late fall — after leaves have dropped and before winter weather reduces visibility on dirty glass.",
          "This schedule works well for homes in the Midwest, Southeast, and Mid-Atlantic where pollen load is moderate, precipitation is distributed through the year, and there are no extreme single-season contamination events. If your home fits this profile and you clean twice per year, your windows will rarely look noticeably dirty.",
        ],
      },
      {
        heading: "When You Need More Than Twice Per Year",
        content: [
          "Several factors push the frequency higher. If any of these apply, consider quarterly or three-times-per-year cleaning:",
        ],
        bullets: [
          "Ocean or coastal proximity: Salt air deposits minerals on glass within days and causes permanent etching if left for months. Homes within a mile of saltwater typically need cleaning every 3–4 months",
          "Heavy tree coverage: Trees produce pollen, sap, and debris continuously, and the accumulation is faster and stickier than open-area homes. Quarterly cleaning keeps up; semi-annual cleaning often doesn't",
          "Irrigation systems that hit glass: Sprinklers depositing tap water on exterior glass create mineral buildup that accelerates dramatically with frequency. Either adjust sprinkler direction or clean every 2–3 months",
          "Busy road frontage: Exhaust particulates and road spray from passing vehicles coat street-facing glass quickly. Urban street-level windows may need monthly cleaning",
          "Renovation or nearby construction: Construction dust and debris contaminate glass within days. Schedule a cleaning immediately after any work is completed",
        ],
      },
      {
        heading: "When Twice Per Year May Be Too Much",
        content: [
          "In dry, dusty climates where rain is infrequent (desert Southwest, high plains), rainfall doesn't deposit minerals regularly and there's less pollen-season intensity. Homes in these climates often do fine with once-per-year cleaning, supplemented by a pre-monsoon season cleaning if applicable.",
          "Interior cleaning frequency is also lower for most homes — once per year is adequate for living spaces. Kitchens with significant cooking activity may benefit from semi-annual interior cleaning due to grease film accumulation.",
        ],
      },
      {
        heading: "Commercial Properties: Monthly to Quarterly",
        content: [
          "Commercial storefronts and customer-facing businesses operate on a different calculus. Clean windows are part of first impressions and brand standards, and the consequences of dirty glass — reduced customer confidence, lower perceived quality — are more immediate than for a residence.",
          "Most retail, restaurant, and professional office clients schedule monthly exterior cleaning. Office buildings with less foot-traffic exposure can stretch to quarterly. The right frequency for a commercial property is the one that ensures windows never look notably dirty during business hours.",
        ],
      },
      {
        heading: "How to Calibrate Your Own Schedule",
        content: [
          "The most reliable calibration method is to observe how quickly your windows look dirty after a professional cleaning. If they look clean for 4 months and then start to degrade, a 3-cleaning-per-year schedule is appropriate. If they look clean for 7 months before you notice decline, twice per year is right.",
          "The key is doing at least one professional cleaning so you have a baseline of what 'clean' actually looks like for your windows. Most people living with gradually dirtying windows significantly underestimate how dirty their glass actually is until they see the difference.",
        ],
      },
    ],
    relatedServices: ["exterior-window-cleaning", "interior-window-cleaning"],
    relatedGuides: ["best-time-of-year-to-clean-windows", "window-cleaning-cost-guide"],
  },

  {
    slug: "professional-vs-diy-window-cleaning",
    title: "Professional vs. DIY Window Cleaning: Which Is Worth It? | ClearView",
    headline: "Professional vs. DIY Window Cleaning: Which Is Worth It?",
    metaDescription:
      "Honest comparison of professional window cleaning vs. DIY. When DIY makes sense, when it doesn't, and what professionals do that you actually can't replicate at home.",
    publishDate: "2026-01-15",
    updatedDate: "2026-01-15",
    readTime: "6 min read",
    intro:
      "Window cleaning seems like one of those tasks that obviously doesn't need a professional — you have a bucket, some glass cleaner, and paper towels at home already. In practice, most DIY window cleaning produces mediocre results: streaks from cleaning solution residue, smears from low-quality cloths, and missed contamination on the exterior that standard spray products can't dissolve. This guide breaks down what professionals actually do differently, what it costs, and when DIY is genuinely sufficient.",
    sections: [
      {
        heading: "What Professionals Do Differently",
        content: [
          "The difference between professional and DIY window cleaning isn't just effort — it's technique, chemistry, and tools:",
        ],
        bullets: [
          "Purified water: Professional cleaners use deionized or reverse-osmosis water with zero mineral content. When it dries, it leaves nothing behind. Tap water — even in soft-water areas — leaves mineral deposits that become the next cleaning problem",
          "Squeegee technique: A professional squeegee pulled correctly removes all moisture in one pass, preventing streaks. This takes practice to do consistently — most DIYers produce streaks because they're wiping rather than pulling moisture off in a controlled pass",
          "Commercial cleaning solution: Professional-grade glass cleaning solution has different chemistry than consumer products — it breaks down contamination more effectively and doesn't leave the surfactant residue that household sprays do",
          "Proper tools for different contamination: Razor blades for cured deposits, acid treatments for mineral etching, appropriate solvents for adhesives — none of this is in a consumer toolkit",
          "Access equipment: Professional cleaners have ladders, water-fed poles, and fall protection for second-story and above work. DIY ladder work is one of the leading causes of home injury",
        ],
      },
      {
        heading: "What DIY Window Cleaning Actually Produces",
        content: [
          "For ground-floor interior windows with light contamination — fingerprints, dust, light film — a good microfiber cloth and a spray bottle of diluted dish soap can produce acceptable results. This is genuinely where DIY competes with professional cleaning.",
          "For exterior windows, multi-story access, hard water deposits, or post-season pollen accumulation, DIY results are consistently inferior. The equipment limitations (no purified water, no professional squeegee technique, limited reach) mean that the outcome is roughly 60–70% as good as professional cleaning even with significant effort.",
        ],
      },
      {
        heading: "The True Cost Comparison",
        content: [
          "Professional cleaning for a typical single-story home (15–20 windows, exterior only) costs $80–$150. Interior and exterior combined is $150–$250. On a twice-per-year schedule, that's $160–$500 annually.",
          "DIY costs are lower in dollar terms — a squeegee, bucket, professional-grade cleaning solution, and a good microfiber supply runs $30–$60 for the first year and very little subsequently. But DIY has real costs that aren't in the equipment list:",
        ],
        bullets: [
          "Time: A thorough DIY cleaning of all windows on a house takes 3–5 hours; professionals do it in 1–2 hours with better results",
          "Injury risk: Falls from ladders account for 300+ deaths and 165,000+ emergency room visits annually in the U.S. Exterior second-story window cleaning from a residential ladder is meaningfully risky",
          "Outcome quality: Streaked or partially clean windows are the most common DIY result — you've spent 3 hours and the windows still look mediocre",
        ],
      },
      {
        heading: "When DIY Makes Sense",
        content: [
          "DIY is genuinely appropriate in specific circumstances:",
        ],
        bullets: [
          "Interior-only cleaning of ground-floor windows with light contamination",
          "Quick spot-cleaning between professional visits (fingerprints, splatter)",
          "Small apartments or homes where all windows are ground-level accessible from inside",
          "Budgets where professional cleaning isn't feasible — imperfect cleaning is better than none",
        ],
      },
      {
        heading: "The Verdict",
        content: [
          "For exterior windows, second-story access, hard water contamination, or any situation requiring a razor blade or specialty chemistry — professional cleaning is worth it. The quality gap is real, the time savings are significant, and the safety argument (especially for ladder work) is compelling.",
          "For quick interior maintenance between professional visits — DIY with a good microfiber cloth and minimal spray is the right approach. The two aren't mutually exclusive: professional cleaning twice a year plus DIY touch-ups in between is the approach most window cleaning pros themselves recommend.",
        ],
      },
    ],
    relatedServices: ["exterior-window-cleaning", "interior-window-cleaning"],
    relatedGuides: ["how-often-should-you-clean-windows", "window-cleaning-cost-guide"],
  },

  {
    slug: "how-to-remove-hard-water-stains-from-windows",
    title: "How to Remove Hard Water Stains from Windows | ClearView Directory",
    headline: "How to Remove Hard Water Stains from Windows",
    metaDescription:
      "White spots and cloudy film from hard water stains on windows can be removed — but only with the right technique. Learn what works and what causes permanent damage.",
    publishDate: "2026-01-15",
    updatedDate: "2026-01-15",
    readTime: "7 min read",
    intro:
      "Hard water stains are the most common complaint in window cleaning — and the most misunderstood. Those white spots and cloudy film on glass aren't dirt; they're mineral deposits, primarily calcium and magnesium carbonate, left behind when water evaporates and leaves its dissolved minerals behind. Standard glass cleaners don't touch them. Vigorous scrubbing makes them worse. But the right chemistry and technique removes them completely — unless they've etched the glass surface, at which point you're in restoration territory.",
    sections: [
      {
        heading: "What Causes Hard Water Stains on Windows",
        content: [
          "Hard water stains come from any water source that contacts the glass and then evaporates: rain (especially in areas with hard ground water), irrigation sprinklers, roof runoff, and air conditioning condensation. Of these, irrigation sprinklers are the most destructive — they cycle water onto glass repeatedly over months and years, building up a mineral layer that concentrates with each application.",
          "The rate of buildup depends on water hardness. In soft-water regions (Pacific Northwest, parts of New England), tap water leaves minimal deposits. In hard-water regions (much of the Mountain West, Southwest, Midwest, and Florida), water can have 200–400+ parts per million of dissolved minerals, and staining appears quickly.",
        ],
      },
      {
        heading: "The Difference Between Surface Deposits and Etching",
        content: [
          "This distinction matters because the treatment is completely different:",
        ],
        bullets: [
          "Surface deposits: Mineral calcium/magnesium carbonate sitting on top of the glass surface. Can be removed chemically. Glass beneath is undamaged.",
          "Glass etching: Silica in the glass has actually been chemically attacked by alkaline minerals over time, creating microscopic pits and channels in the glass surface itself. Cannot be chemically dissolved — requires physical abrasion (polishing) or glass replacement.",
          "How to tell: Deposits wipe away when treated with acid. Etching remains as haze even after all deposits are removed. A professional can assess which you're dealing with.",
        ],
      },
      {
        heading: "Removing Hard Water Deposits: What Works",
        content: [
          "For mineral deposits on glass, the correct chemistry is mild acid — specifically something that dissolves calcium carbonate without attacking the glass itself. In order of aggressiveness:",
        ],
        numbered: [
          "White vinegar (5% acetic acid): Effective for light deposits. Apply undiluted, let dwell 2–3 minutes, scrub with a non-scratch pad, rinse. Safe for all glass types including tinted and coated glass.",
          "Citric acid solution (1–2 tbsp per cup of water): More effective than vinegar for moderate deposits. Available as a powder; mix fresh. Same dwell time and scrub process.",
          "Commercial hard water removers (CLR, Lime-A-Way, etc.): More aggressive acids for heavy deposits. Follow label directions; do not use on coated glass or tinted films without testing on an inconspicuous area.",
          "Professional mineral deposit treatment: Buffered acid products used by window cleaning pros, applied with appropriate safety gear. Most effective for heavy buildup and appropriate for glass types where consumer acids aren't suitable.",
        ],
      },
      {
        heading: "What NOT to Do",
        content: [
          "Several common approaches make hard water stains worse or cause new damage:",
        ],
        bullets: [
          "Scrubbing with steel wool or abrasive pads: Creates permanent scratches that trap mineral deposits and make future cleaning impossible",
          "Using bleach: Has no effect on mineral deposits and can damage window frames and seals",
          "Applying dry heat (hair dryer): Drives remaining moisture deeper into deposits and accelerates bonding",
          "Pressure washing: The high-pressure stream forces mineral-laden water into frame seams and can damage window seals — it doesn't remove existing deposits",
          "Repeated application of standard glass cleaner: No acid content means no effect on deposits; the alcohol in some cleaners can actually concentrate minerals as it evaporates",
        ],
      },
      {
        heading: "When to Call a Professional",
        content: [
          "If vinegar and citric acid treatments don't fully resolve the staining after two or three applications, you're likely dealing with either heavy accumulated deposits that require professional-grade chemistry, or early-stage etching that requires glass polishing. Attempting increasingly aggressive DIY treatments at this point risks causing damage.",
          "A professional window cleaner can assess whether the glass is restorable and give you an honest answer about restoration vs. replacement. Glass polishing (for etching) costs $50–$150 per window and can restore glass that looks permanently damaged. It's worth getting a professional assessment before replacing glass.",
        ],
      },
    ],
    relatedServices: ["exterior-window-cleaning", "post-construction-window-cleanup"],
    relatedGuides: ["professional-vs-diy-window-cleaning", "window-cleaning-cost-guide"],
  },

  {
    slug: "window-cleaning-cost-guide",
    title: "Window Cleaning Cost Guide: What to Expect in 2026 | ClearView",
    headline: "Window Cleaning Cost Guide: What to Expect in 2026",
    metaDescription:
      "Real 2026 window cleaning prices by home size, story count, service type, and region. What drives cost up, what's included, and how to evaluate quotes.",
    publishDate: "2026-01-15",
    updatedDate: "2026-01-15",
    readTime: "6 min read",
    intro:
      "Window cleaning pricing is more variable than most homeowners expect — the difference between a 15-window single-story home and a 35-window two-story can be 3x the price, and coastal California and the Northeast cost significantly more than the Midwest for the same work. This guide breaks down exactly what drives pricing so you can evaluate quotes accurately, know when something is suspiciously cheap, and understand what scope differences between quotes actually mean.",
    sections: [
      {
        heading: "Typical Price Ranges by Home Type",
        content: [
          "These are mid-market ranges in average U.S. metro areas. Coastal and Northeast markets run 20–40% higher; rural and small-market areas run 10–20% lower.",
        ],
        bullets: [
          "Single-story home, exterior only (15–20 windows): $80–$150 (avg $110)",
          "Single-story home, interior + exterior: $150–$250 (avg $190)",
          "Two-story home, exterior only (20–30 windows): $130–$225 (avg $170)",
          "Two-story home, interior + exterior: $225–$375 (avg $295)",
          "Large home / complex roofline (30+ windows): $300–$600+",
          "Condo / apartment (varies by unit window count): $75–$175",
        ],
      },
      {
        heading: "What's Included (and What Isn't)",
        content: [
          "Standard window cleaning — the base price — typically includes exterior glass cleaning, frame wipe-down, and basic screen-in-place cleaning or screen removal. What's often extra:",
        ],
        bullets: [
          "Interior cleaning: Almost always quoted separately unless you specify interior + exterior",
          "Screen removal, cleaning, and reinstallation: Some companies include this; many charge $3–$8 per screen",
          "Track and sill cleaning: Almost always an add-on, priced per window ($3–$10 each)",
          "Hard water stain treatment: Add-on when significant mineral deposits require acid treatment",
          "Skylight cleaning: Per-skylight pricing, $50–$150 each depending on size and access",
          "Post-construction cleanup: Separate service entirely, priced 3–5x standard rates",
        ],
      },
      {
        heading: "What Pushes Prices Up",
        content: [
          "Understanding the cost drivers helps you evaluate whether a quote premium is legitimate:",
        ],
        bullets: [
          "Story count: Each additional story adds ladder or equipment time and safety requirements — two-story homes cost 40–80% more than single-story for the same window count",
          "Window count and type: More windows, larger panes, divided-light/French windows (more individual panes), and specialty shapes all increase time",
          "Hard water or heavy contamination: If the glass requires pre-treatment or more time per pane, expect a higher price",
          "Interior + exterior vs. exterior only: Full service typically costs 60–80% more than exterior-only",
          "Coastal location: Salt air deposits clean up faster but require more frequent service; coastal pros often charge a premium",
          "Off-season or weekend scheduling: 10–20% premium is common",
        ],
      },
      {
        heading: "Regional Price Differences",
        content: [
          "Where you live affects pricing significantly. The most expensive markets in the U.S. for window cleaning are the Boston–New York–Washington corridor, the San Francisco Bay Area, and coastal Southern California. The most affordable markets tend to be inland Midwest and rural Southeast.",
        ],
        bullets: [
          "New York / New Jersey: Single-story exterior $130–$250; full service $225–$400",
          "Boston / Providence area: Single-story exterior $140–$275; full service $240–$425",
          "Los Angeles / San Diego: Single-story exterior $110–$200; full service $190–$350",
          "Atlanta / Charlotte / Nashville: Single-story exterior $80–$150; full service $140–$250",
          "Chicago / Midwest metro: Single-story exterior $85–$165; full service $150–$275",
          "Phoenix / Las Vegas: Single-story exterior $75–$145; full service $130–$230",
        ],
      },
      {
        heading: "How to Compare Quotes",
        content: [
          "Price-per-quote comparisons are meaningless unless you're comparing the same scope. Before comparing numbers, confirm each quote includes the same elements:",
        ],
        numbered: [
          "Exterior only vs. interior + exterior — the most common scope difference between quotes",
          "Screen handling — removed and cleaned separately, cleaned in place, or not touched",
          "Track and sill cleaning — included or extra",
          "Frame cleaning — included in the base or per-frame charge",
          "Number of windows quoted — count your own windows and verify the quote matches",
        ],
      },
    ],
    relatedServices: ["exterior-window-cleaning", "interior-window-cleaning", "screen-cleaning-repair"],
    relatedGuides: ["how-often-should-you-clean-windows", "professional-vs-diy-window-cleaning"],
  },

  {
    slug: "best-time-of-year-to-clean-windows",
    title: "Best Time of Year to Clean Windows | ClearView Directory",
    headline: "Best Time of Year to Clean Windows",
    metaDescription:
      "The best time to clean windows depends on your climate and what's been on the glass. Here's the optimal timing by region and what to avoid.",
    publishDate: "2026-01-15",
    updatedDate: "2026-01-15",
    readTime: "5 min read",
    intro:
      "The best time to clean windows isn't the same everywhere. The right timing depends on your climate, your local pollen calendar, the precipitation pattern, and what you're trying to achieve. Cleaning in the wrong season — right before the heaviest pollen drop, or right as salt air season peaks — can mean your windows are noticeably dirty within weeks of a professional cleaning. This guide breaks it down by region and situation.",
    sections: [
      {
        heading: "The Two Best Windows for Most Climates",
        content: [
          "For the majority of U.S. climates, two timing windows produce the longest-lasting clean:",
        ],
        bullets: [
          "Late spring (May–early June): After the main tree and grass pollen peak, before summer heat bakes deposits onto glass. This is typically the highest-impact cleaning of the year.",
          "Late fall (October–November): After leaves have dropped and before winter precipitation begins. Clears the year's accumulated organic residue and sets you up for cleaner glass through the winter months when low sun angles make dirty glass most noticeable.",
        ],
      },
      {
        heading: "By Region: Optimal Timing",
        content: [
          "Regional climate drives significant variation in optimal timing:",
        ],
        bullets: [
          "Southeast and Mid-Atlantic: Late May (post-oak-pollen, pre-heat) and late October (post-leaf-drop). Avoid March–April when tree pollen is at peak.",
          "Midwest: Late May and mid-November. Cottonwood season (late May) is the trigger for the spring cleaning — wait until after it ends. Fall cleaning in November after all hardwood species have dropped.",
          "Texas and South Central: April (post-cedar, mid-oak pollen) and November. Cedar pollen from January through March is the contamination driver — clean after it peaks.",
          "Desert Southwest (AZ, NV, NM): Late June before monsoon season and February. The pre-monsoon cleaning is the most important — the first monsoon rains hit dusty glass and deposit a mineral layer that requires professional removal.",
          "California: September–October before the rainy season begins, and April after spring rains end. The fall cleaning is the most important — it removes summer's dry accumulation before rain bakes it in.",
          "Pacific Northwest: Late April–May after the winter rains taper, and September before fall rains return. Interior cleaning is valuable year-round since outdoor cleaning is quickly undone by the next day's rain in winter.",
          "Northeast: Late June after the sequential pollen season (tree → grass → mold spores), and October before first frost. Do not clean in April or May — you're cleaning into peak pollen season.",
          "Mountain: Late May–June after snowmelt, and September before first freeze. The post-snowmelt cleaning is the most impactful — it removes the silty film that melt water leaves on lower-level glass.",
        ],
      },
      {
        heading: "What to Avoid",
        content: [
          "Certain timing choices consistently produce shorter-lasting results:",
        ],
        bullets: [
          "Cleaning during active pollen season: Pollen deposits on glass within hours of cleaning in high-pollen periods. Wait until after your local pollen peak.",
          "Cleaning right before heavy rain: Light rain rinses and deposits minerals; heavy rain during a storm doesn't 'clean' glass, it deposits more. If a significant storm is forecast within 48 hours, defer cleaning.",
          "Cleaning exterior glass when temperatures are below freezing: Water-fed pole and squeegee cleaning requires above-freezing temperatures for safe operation and quality results. Many window cleaning companies pause exterior service below 35°F.",
          "Cleaning coastal glass right before onshore wind events: Salt air deposits in hours during high-wind coastal conditions. For coastal properties, clean during low-wind periods.",
        ],
      },
      {
        heading: "Interior Timing Is Different",
        content: [
          "Interior window cleaning doesn't have the same seasonal constraints as exterior work. Interior glass isn't subject to weather and pollen — it accumulates cooking grease, dust, and film at a fairly constant rate year-round.",
          "The best time for interior cleaning is whenever it fits your schedule, with one consideration: low-light winter months make interior glass clarity most valuable, so a fall or early-winter interior cleaning makes the most of the season when you're indoors most and natural light is limited.",
        ],
      },
    ],
    relatedServices: ["exterior-window-cleaning", "interior-window-cleaning"],
    relatedGuides: ["how-often-should-you-clean-windows", "window-cleaning-cost-guide"],
  },

  {
    slug: "questions-to-ask-window-cleaning-company",
    title: "10 Questions to Ask Before Hiring a Window Cleaning Company | ClearView",
    headline: "10 Questions to Ask Before Hiring a Window Cleaning Company",
    metaDescription:
      "The right questions reveal whether a window cleaning company is qualified, properly insured, and actually competitive on scope — not just price.",
    publishDate: "2026-01-15",
    updatedDate: "2026-01-15",
    readTime: "6 min read",
    intro:
      "Window cleaning looks like a simple commodity service — show up, clean glass, leave. In practice, there's meaningful variation in quality, equipment, technique, insurance coverage, and scope that isn't visible in a price quote. The right questions before hiring reveal which companies will deliver professional results and handle problems correctly, and which are cutting corners on insurance, equipment, or training. Here are the ten questions that matter most.",
    sections: [
      {
        heading: "Insurance and Licensing",
        content: [
          "These aren't optional questions — they protect you from significant financial exposure:",
        ],
        numbered: [
          "Are you licensed and insured? What does your coverage include? — Ask for a Certificate of Insurance (COI) specifically. General liability should be at least $1 million per occurrence. For any work above ground level, verify the policy covers work at height. A company that won't provide a COI on request is a red flag.",
          "Does your insurance cover work-related injuries on my property? — Workers' compensation covers employees injured on your property. Without it, an injured worker could potentially pursue a claim against your homeowner's insurance. Confirm workers' comp is active and covers window cleaning work.",
        ],
      },
      {
        heading: "Scope and What's Included",
        content: [
          "The most common source of quote disputes is scope misunderstanding — these questions prevent it:",
        ],
        numbered: [
          "Does your quote include interior cleaning, or exterior only? — Never assume. Interior + exterior is typically 60–80% more than exterior-only. Confirm explicitly which you're getting.",
          "Are screens removed and cleaned separately, or cleaned in place? — In-place screen 'cleaning' usually means a quick wipe that leaves debris, which falls on freshly cleaned glass the first time you open a window. Proper technique removes, washes, and reinstalls screens after the glass is done.",
          "Is track and sill cleaning included? — Almost always a separate add-on. If track cleaning matters to you, get it quoted explicitly — it adds $3–$10 per window.",
          "How do you handle hard water stains or other difficult deposits? — A good company will assess before committing to a result and will be honest about whether deposits require additional treatment or are beyond standard cleaning.",
        ],
      },
      {
        heading: "Technique and Equipment",
        content: [
          "These questions reveal whether you're dealing with a professional operation or a one-person-with-a-squeegee setup:",
        ],
        numbered: [
          "Do you use purified water or tap water? — Professional water-fed pole systems use deionized or reverse-osmosis water that leaves no mineral residue. If the answer is 'tap water from a bucket,' expect mineral spots.",
          "What do you use for difficult deposits — razor blades, chemicals, or both? — A professional should have a clear answer and know which deposits require which treatment. 'We just spray and wipe' is not sufficient for glass with contamination beyond light film.",
        ],
      },
      {
        heading: "References, Reviews, and Guarantees",
        content: [
          "The last questions are about accountability:",
        ],
        numbered: [
          "Do you guarantee streak-free results? What's your policy if I'm not satisfied? — A professional company stands behind their work. Ask specifically what they'll do if you call the next day and find streaks or missed areas. Most reputable companies will return to address issues at no charge.",
          "Can you provide recent Google reviews or references from customers with similar properties? — General review counts are less useful than reviews from people with similar homes or commercial properties. A company with 200 reviews but only from residential clients may not have experience with your commercial property.",
        ],
      },
      {
        heading: "Red Flags to Watch For",
        content: [
          "Beyond specific questions, these indicators should make you pause before booking:",
        ],
        bullets: [
          "Refuses to provide a COI or says they're 'self-insured' (meaningless)",
          "Gives a firm quote over the phone for a multi-story home without asking about window count, story count, or contamination",
          "No verifiable online presence, reviews, or business address",
          "Quote is more than 40% below other quotes for the same scope — usually means scope exclusions, unlicensed workers, or no insurance",
          "Cannot answer the purified water question clearly",
          "Pressure to book immediately or 'this price is only good today'",
        ],
      },
    ],
    relatedServices: ["exterior-window-cleaning", "commercial-window-washing", "high-rise-window-cleaning"],
    relatedGuides: ["window-cleaning-cost-guide", "professional-vs-diy-window-cleaning"],
  },
];
