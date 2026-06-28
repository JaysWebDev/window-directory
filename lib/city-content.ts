// lib/city-content.ts
// Original editorial content for city pages, organized by climate profile + pricing tier.
// getCityContent() interpolates {city} and {state} at runtime.

export interface CityContent {
  intro: string;
  seasonal: string;
  costNote: string;
  localTip: string;
}

type ClimateProfile =
  | "tropical-gulf"
  | "southeast"
  | "texas-plains"
  | "desert-sw"
  | "california"
  | "pacific-nw"
  | "mountain"
  | "midwest"
  | "northeast"
  | "mid-atlantic";

type PricingTier = "major-metro" | "large-city" | "mid-city" | "small-city";

interface CityMeta {
  profile: ClimateProfile;
  tier: PricingTier;
}

// ─── City → (profile, tier) map ──────────────────────────────────────────────

const CITY_MAP: Record<string, CityMeta> = {
  // Florida / Tropical Gulf
  "jacksonville-FL": { profile: "tropical-gulf", tier: "mid-city" },
  "orlando-FL":      { profile: "tropical-gulf", tier: "mid-city" },
  "tampa-FL":        { profile: "tropical-gulf", tier: "mid-city" },
  "miami-FL":        { profile: "tropical-gulf", tier: "large-city" },
  "hialeah-FL":      { profile: "tropical-gulf", tier: "mid-city" },
  // Southeast
  "charlotte-NC":      { profile: "southeast", tier: "mid-city" },
  "nashville-TN":      { profile: "southeast", tier: "mid-city" },
  "atlanta-GA":        { profile: "southeast", tier: "large-city" },
  "raleigh-NC":        { profile: "southeast", tier: "mid-city" },
  "memphis-TN":        { profile: "southeast", tier: "mid-city" },
  "louisville-KY":     { profile: "southeast", tier: "mid-city" },
  "greensboro-NC":     { profile: "southeast", tier: "mid-city" },
  "durham-NC":         { profile: "southeast", tier: "mid-city" },
  "winston-salem-NC":  { profile: "southeast", tier: "mid-city" },
  "fayetteville-NC":   { profile: "southeast", tier: "mid-city" },
  "birmingham-AL":     { profile: "southeast", tier: "mid-city" },
  "montgomery-AL":     { profile: "southeast", tier: "small-city" },
  "baton-rouge-LA":    { profile: "southeast", tier: "mid-city" },
  "shreveport-LA":     { profile: "southeast", tier: "mid-city" },
  "lexington-KY":      { profile: "southeast", tier: "mid-city" },
  // Texas / South Central
  "austin-TX":         { profile: "texas-plains", tier: "large-city" },
  "dallas-TX":         { profile: "texas-plains", tier: "large-city" },
  "houston-TX":        { profile: "texas-plains", tier: "large-city" },
  "san-antonio-TX":    { profile: "texas-plains", tier: "large-city" },
  "fort-worth-TX":     { profile: "texas-plains", tier: "large-city" },
  "corpus-christi-TX": { profile: "texas-plains", tier: "mid-city" },
  "oklahoma-city-OK":  { profile: "texas-plains", tier: "mid-city" },
  "plano-TX":          { profile: "texas-plains", tier: "mid-city" },
  "irving-TX":         { profile: "texas-plains", tier: "mid-city" },
  "garland-TX":        { profile: "texas-plains", tier: "mid-city" },
  "lubbock-TX":        { profile: "texas-plains", tier: "small-city" },
  "laredo-TX":         { profile: "texas-plains", tier: "small-city" },
  // Desert Southwest
  "phoenix-AZ":          { profile: "desert-sw", tier: "large-city" },
  "las-vegas-NV":        { profile: "desert-sw", tier: "large-city" },
  "tucson-AZ":           { profile: "desert-sw", tier: "mid-city" },
  "mesa-AZ":             { profile: "desert-sw", tier: "mid-city" },
  "albuquerque-NM":      { profile: "desert-sw", tier: "mid-city" },
  "henderson-NV":        { profile: "desert-sw", tier: "mid-city" },
  "chandler-AZ":         { profile: "desert-sw", tier: "mid-city" },
  "scottsdale-AZ":       { profile: "desert-sw", tier: "large-city" },
  "north-las-vegas-NV":  { profile: "desert-sw", tier: "mid-city" },
  "glendale-AZ":         { profile: "desert-sw", tier: "mid-city" },
  "gilbert-AZ":          { profile: "desert-sw", tier: "mid-city" },
  // California
  "los-angeles-CA":    { profile: "california", tier: "major-metro" },
  "san-diego-CA":      { profile: "california", tier: "large-city" },
  "san-jose-CA":       { profile: "california", tier: "major-metro" },
  "sacramento-CA":     { profile: "california", tier: "large-city" },
  "fresno-CA":         { profile: "california", tier: "mid-city" },
  "long-beach-CA":     { profile: "california", tier: "large-city" },
  "bakersfield-CA":    { profile: "california", tier: "mid-city" },
  "anaheim-CA":        { profile: "california", tier: "large-city" },
  "santa-ana-CA":      { profile: "california", tier: "large-city" },
  "riverside-CA":      { profile: "california", tier: "mid-city" },
  "san-bernardino-CA": { profile: "california", tier: "mid-city" },
  "irvine-CA":         { profile: "california", tier: "large-city" },
  "stockton-CA":       { profile: "california", tier: "mid-city" },
  "modesto-CA":        { profile: "california", tier: "mid-city" },
  "chula-vista-CA":    { profile: "california", tier: "mid-city" },
  "fremont-CA":        { profile: "california", tier: "large-city" },
  // Pacific Northwest
  "seattle-WA":  { profile: "pacific-nw", tier: "major-metro" },
  "portland-OR": { profile: "pacific-nw", tier: "large-city" },
  "tacoma-WA":   { profile: "pacific-nw", tier: "mid-city" },
  "spokane-WA":  { profile: "pacific-nw", tier: "mid-city" },
  // Mountain / High Desert
  "denver-CO":           { profile: "mountain", tier: "large-city" },
  "colorado-springs-CO": { profile: "mountain", tier: "mid-city" },
  "aurora-CO":           { profile: "mountain", tier: "mid-city" },
  "anchorage-AK":        { profile: "mountain", tier: "small-city" },
  "reno-NV":             { profile: "mountain", tier: "mid-city" },
  // Midwest
  "columbus-OH":     { profile: "midwest", tier: "mid-city" },
  "indianapolis-IN": { profile: "midwest", tier: "mid-city" },
  "kansas-city-MO":  { profile: "midwest", tier: "mid-city" },
  "omaha-NE":        { profile: "midwest", tier: "mid-city" },
  "cincinnati-OH":   { profile: "midwest", tier: "mid-city" },
  "toledo-OH":       { profile: "midwest", tier: "mid-city" },
  "akron-OH":        { profile: "midwest", tier: "mid-city" },
  "st-louis-MO":     { profile: "midwest", tier: "mid-city" },
  "madison-WI":      { profile: "midwest", tier: "mid-city" },
  "des-moines-IA":   { profile: "midwest", tier: "mid-city" },
  "lincoln-NE":      { profile: "midwest", tier: "small-city" },
  "minneapolis-MN":  { profile: "midwest", tier: "large-city" },
  "st-paul-MN":      { profile: "midwest", tier: "mid-city" },
  "chicago-IL":      { profile: "midwest", tier: "major-metro" },
  "aurora-IL":       { profile: "midwest", tier: "mid-city" },
  "fort-wayne-IN":   { profile: "midwest", tier: "small-city" },
  // Northeast
  "new-york-NY":    { profile: "northeast", tier: "major-metro" },
  "philadelphia-PA": { profile: "northeast", tier: "major-metro" },
  "boston-MA":      { profile: "northeast", tier: "major-metro" },
  "pittsburgh-PA":  { profile: "northeast", tier: "mid-city" },
  "buffalo-NY":     { profile: "northeast", tier: "mid-city" },
  "rochester-NY":   { profile: "northeast", tier: "mid-city" },
  "newark-NJ":      { profile: "northeast", tier: "large-city" },
  "jersey-city-NJ": { profile: "northeast", tier: "large-city" },
  // Mid-Atlantic
  "baltimore-MD":      { profile: "mid-atlantic", tier: "large-city" },
  "virginia-beach-VA": { profile: "mid-atlantic", tier: "mid-city" },
  "norfolk-VA":        { profile: "mid-atlantic", tier: "mid-city" },
  "chesapeake-VA":     { profile: "mid-atlantic", tier: "mid-city" },
  "richmond-VA":       { profile: "mid-atlantic", tier: "mid-city" },
};

// ─── Climate profile content templates ───────────────────────────────────────
// {city} and {state} are interpolated at runtime.

const PROFILES: Record<ClimateProfile, Omit<CityContent, "costNote">> = {
  "tropical-gulf": {
    intro:
      "Window cleaning in {city} is a year-round maintenance task, not a once-a-year event. The subtropical climate brings a combination of salt air from nearby coastlines, heavy summer rain that leaves mineral deposits on glass, and high humidity that promotes the growth of mold and mildew on frames and sills. Windows that go more than four months without professional cleaning in {state}'s climate often develop a milky film from mineral buildup that DIY cleaning can't fully remove.",
    seasonal:
      "{city} homeowners typically benefit from three to four cleanings per year. The most important windows are spring—after pollen season coats every exterior surface—and late summer after the peak of hurricane season, when salt spray and storm debris leave a heavy residue. The fall and winter months are actually ideal for interior work since lower humidity makes streak-free results easier to achieve. Many {state} window cleaning pros offer bundled interior/exterior packages at a discount for customers who schedule recurring service.",
    localTip:
      "In coastal {state} neighborhoods, salt deposits on glass are the most common cause of permanent etching. If windows have been neglected for more than a year, ask your pro about hard water and salt deposit removal treatment before the standard cleaning—it prevents the salt from bonding permanently into the glass surface.",
  },
  "southeast": {
    intro:
      "Window cleaning in {city} is driven by two seasonal realities: spring pollen and summer humidity. The {state} region is one of the highest pollen-producing areas in the country, and pine, oak, and sweetgum pollen coats exterior glass in a yellow-green film every March through May that standard rain doesn't wash off. Summer's humidity keeps that residue damp and allows mold and mildew to develop on frames and tracks, which is why professional cleaning is more effective than DIY rinsing in this climate.",
    seasonal:
      "The recommended schedule for {city} homeowners is twice a year: once in late May after pollen season ends, and once in October before the holiday season. The late-spring cleaning is the most impactful—it clears three months of pollen accumulation at once and brightens interiors noticeably. The fall cleaning prepares windows for the lower sun angles of winter, when interior light is most valuable. Homes with tree cover may benefit from an additional midsummer cleaning to address bird activity and debris from summer storms.",
    localTip:
      "Sweetgum and oak tree sap is a common problem on {state} homes—it drips onto glass during warm weather and bonds tightly if left more than a few weeks. Standard cleaning won't remove cured sap; ask your window pro about a solvent-based pre-treatment if you see sticky spots on the glass before the cleaning begins.",
  },
  "texas-plains": {
    intro:
      "Window cleaning in {city} contends with two things most other regions don't: intense spring pollen from mountain cedar, live oak, and pecan trees, and summer dust storms that coat glass with a fine grit that leaves scratches if wiped without proper lubrication. The dry, windy climate means airborne particles accumulate on exterior glass faster than in more humid regions where rainfall cleans surfaces between professional visits. {state} homeowners who wait more than six months between cleanings often find their windows are visibly hazed even after routine cleaning.",
    seasonal:
      "Most {city} homeowners schedule window cleaning twice a year: once in April after cedar and oak pollen season peaks, and once in October or November before the winter holidays. The spring cleaning is the most impactful—cedar pollen season in {state} runs from January through March, and by April the exterior glass of most homes has a heavy yellow cast. After any significant dust storm or haboob, a spot cleaning of the most affected windows is worth scheduling rather than waiting for the next full service.",
    localTip:
      "In {state}'s dry climate, hard water deposits from sprinkler systems are the number one cause of glass etching. If your irrigation system hits the windows—even occasionally—ask your pro about a mineral deposit treatment at each cleaning. Left unaddressed for more than a year, sprinkler mineral buildup becomes permanent white spots that can't be fully removed.",
  },
  "desert-sw": {
    intro:
      "Window cleaning in {city} looks different than most of the country. The arid climate means organic debris is minimal, but dust, sand, and windblown mineral particles accumulate on glass constantly. In {state}'s low humidity, water droplets evaporate quickly and leave behind concentrated mineral rings—even a single light rain can leave more spotting on glass than a full day of rain in a humid climate. Professional window cleaners in the desert use purified water and specialized squeegee technique to avoid the streaking that plagues DIY efforts in this environment.",
    seasonal:
      "{city} homeowners typically benefit from cleaning twice a year: once in late June before monsoon season, and once in late winter after dust season peaks. The pre-monsoon cleaning matters most—the first monsoon rains hit already-dusty glass and bake mineral deposits into the surface. After monsoon season ends in September, a spot treatment of the worst-affected windows can extend the main cleaning cycle by several months. Homes with south-facing windows get additional UV-accelerated etching and may benefit from a third annual cleaning.",
    localTip:
      "Monsoon dust in {state} contains fine silica particles that can cause micro-scratches if windows are wiped while dry. Never attempt to clean exterior windows in the desert with a dry cloth—always pre-wet with purified water first. Professional window cleaners in {city} are trained for this, but it's a common mistake that causes lasting damage on DIY attempts.",
  },
  "california": {
    intro:
      "Window cleaning in {city} benefits from the Mediterranean climate's dry summers but faces challenges year-round. Eucalyptus, Monterey pine, and various palms deposit pollen, sap, and debris on glass through spring and summer, while October through April brings the rainy season that leaves mineral deposits and water spots on any glass not cleaned immediately after rain. Ocean-facing homes add salt residue to the equation—properties within a mile of the coast typically need professional cleaning every three to four months to prevent mineral buildup from bonding permanently into the glass.",
    seasonal:
      "The best cleaning schedule for most {city} homeowners is twice a year: once in September before the rains arrive, and once in April after the wet season ends. The September cleaning removes summer's dry accumulation of pollen and organic debris before rainfall can bake it into the glass. The spring cleaning clears winter mineral deposits and brightens interiors for the long California summer. Coastal properties—particularly those in {state}'s beach communities—benefit from quarterly cleaning to manage ongoing salt exposure.",
    localTip:
      "Eucalyptus sap and bird droppings are the two hardest substances to remove from glass in {state}'s climate—both cure quickly in the California sun and bond to glass surfaces within days. If either is present, alert your window pro before the service so they can apply an appropriate pre-treatment rather than attempting to squeegee over hardened deposits.",
  },
  "pacific-nw": {
    intro:
      "Window cleaning in {city} is one of the more demanding in the country. The Pacific Northwest's constant rain doesn't clean windows—it leaves mineral deposits with every drop, and in a wet climate with minimal drying time between rains, those deposits accumulate into a dull film that blocks natural light significantly. Combined with year-round debris from Douglas fir, western red cedar, and big-leaf maple, {state} windows need professional cleaning more often than homeowners in drier climates typically expect.",
    seasonal:
      "{city} homeowners benefit most from cleaning in late April or May—after the heaviest rains taper off and before summer algae growth peaks—and again in September before the fall rains return. The spring cleaning is the most impactful: it removes an entire winter's worth of mineral deposit accumulation and typically makes a dramatic visible difference in how much light enters the home. During the rainy season, interior-only cleaning is a practical option that costs less and makes a noticeable difference even when exterior cleaning would just be undone by the next day's rain.",
    localTip:
      "In {state}'s damp climate, window tracks and sills develop mold faster than anywhere else in the country. If tracks haven't been cleaned in more than six months, they're likely harboring mold growth that affects indoor air quality. Ask your window pro to include a track and sill treatment with a mold-inhibiting cleaner, not just a standard wipe-down.",
  },
  "mountain": {
    intro:
      "Window cleaning in {city} is shaped by altitude and extreme seasonal swings. High UV exposure at elevation accelerates the bonding of mineral deposits, pollen, and organic debris to glass, making DIY cleaning with standard products less effective than at lower altitudes. Winter brings snow and ice that coat exterior surfaces, and spring snowmelt carries silty runoff that leaves a distinct gray film on lower-level windows. The dramatic light changes between seasons—brilliant summer sun and low winter angles—mean dirty windows are particularly noticeable in mountain communities.",
    seasonal:
      "The optimal schedule for most {city} homeowners is two cleanings per year: late May or June after snowmelt season ends and spring pollen peaks, and late September before the first significant snowfall. The late-spring cleaning is the most important—it removes winter mineral deposits, snowmelt silty film, and spring pollen all at once. The fall cleaning prepares windows for the low winter sun angles that make interior light most valuable and ensures frames are clear before freeze-thaw cycles make exterior cleaning impractical.",
    localTip:
      "At {city}'s elevation, UV intensity is significantly higher than at sea level, and window glass degrades faster without periodic professional cleaning to remove the silica and mineral buildup that accelerates surface oxidation. If your windows look faintly cloudy even after cleaning, it may be early-stage glass oxidation—ask your pro about a glass restoration polish at the next service.",
  },
  "midwest": {
    intro:
      "Window cleaning in {city} has a pronounced seasonal rhythm. Spring brings the heaviest demand—cottonwood fluff, maple pollen, and elm seed cases coat every exterior surface from April through June, and the spring rains that follow bake pollen residue into glass if windows aren't cleaned promptly. Summer is relatively stable, but fall's hardwood drop from oaks, maples, and elms leaves sap and tannin stains on glass that darken over the winter. {state} homeowners who clean in November before freeze-up preserve that clarity through the darker winter months when natural light matters most.",
    seasonal:
      "Most {city} homeowners schedule cleaning twice a year: late May after pollen season, and late October or early November before the first hard freeze makes exterior cleaning impractical. The spring cleaning makes the biggest visible difference—pollen accumulation in the Midwest is substantial, and a post-pollen cleaning typically brightens interiors noticeably. The fall cleaning extends window clarity through winter and prevents tannin stains from hardwood leaves from bonding permanently over the cold months.",
    localTip:
      "Cottonwood fluff in late May and early June is more than an annoyance in {state}—it packs densely into window tracks and weep holes, restricting drainage and encouraging mold growth in the track channel. The best time for a {city} spring cleaning is immediately after cottonwood season ends, so the full season's buildup can be cleared in one service.",
  },
  "northeast": {
    intro:
      "Window cleaning in {city} is demanding year-round but particularly critical in spring. The Northeast's heavy pollen season—running from March through June and cycling through tree, grass, and ragweed pollen in sequence—coats exterior glass in a persistent film that rain doesn't fully remove. Winter adds salt spray from road treatment that reaches windows on street-facing facades, and the freeze-thaw cycle drives moisture into frames and tracks in ways that promote mold and mildew in homes that go more than six months without professional cleaning.",
    seasonal:
      "{city} homeowners benefit most from two cleanings per year: late June after the main pollen sequence ends, and late October before winter road salting begins. The summer cleaning is the most impactful—it clears three months of sequential pollen accumulation at once and brightens interiors for the rest of the year. The fall cleaning addresses summer's organic debris and clears frames and tracks before freeze-up locks moisture in place. Homes on busy streets with salt exposure may benefit from an additional late-winter cleaning to address road salt residue before it etches the glass.",
    localTip:
      "Road salt is the most underrated window problem in {state} cities. Salt spray from winter plowing reaches windows on street-facing and first-floor facades and leaves a white film that standard cleaning doesn't fully remove without a mineral deposit treatment. If your ground-floor windows face the street, schedule your spring cleaning after the last salt application of the season—usually late March—rather than before it.",
  },
  "mid-atlantic": {
    intro:
      "Window cleaning in {city} sits at the intersection of the South's pollen intensity and the Northeast's seasonal variation. Spring brings a heavy pollen load from oaks, sweetgums, and Bradford pears, while summer adds humidity and bird activity. The region's periodic nor'easters leave salt deposits on coastal and urban windows, and fall's oak-dominated leaf drop produces tannin stains on glass that can darken permanently over winter if not cleaned before freeze-up. {state} homeowners who skip annual cleaning often find their windows look cloudy even in bright light.",
    seasonal:
      "The recommended schedule for most {city} homeowners is twice a year: late May after the main spring pollen push, and early November before winter sets in. The spring cleaning is typically the most visually impactful—oak and sweetgum pollen leave a thick yellow-green film on exterior glass that persists until professionally removed. The fall cleaning prepares windows for the holiday season and the low winter sun angles when dirty glass is most noticeable. Homes near water—the Chesapeake Bay region in particular—benefit from quarterly cleaning to address mineral and salt accumulation.",
    localTip:
      "Bradford pear trees are common in {state} neighborhoods and produce a heavy pollen drop in March that leaves a sticky, fine residue on glass that bonds faster than standard pollen. If your street has Bradford pears, scheduling a targeted cleaning in mid-April—before general pollen season peaks—prevents the Bradford residue from becoming a base layer that other pollen bonds on top of.",
  },
};

// ─── Pricing tier cost notes ──────────────────────────────────────────────────

const COST_NOTES: Record<PricingTier, string> = {
  "major-metro":
    "Window cleaning in {city} typically runs $200–$400 for a standard single-story home with interior and exterior service, reflecting the area's higher labor costs. Exterior-only service generally runs $125–$225. Commercial storefronts and multi-story buildings are priced per pane or by square footage. Spring demand is intense in most {city} markets—reputable companies book two to three weeks out from May through early July. Scheduling in late summer or early winter typically gets you better pricing and faster availability.",
  "large-city":
    "In {city}, most interior and exterior residential cleanings run $150–$300 for a single-story home. Exterior-only service is typically $100–$175. Prices are moderate compared to coastal major markets but rise 15–20% during spring pollen season when demand peaks. Booking in September or February—the two lowest-demand windows—often gets you better rates and the most reliable scheduling.",
  "mid-city":
    "Window cleaning in {city} typically costs $120–$220 for full interior and exterior service on a single-story home—below the national average for large metros. Exterior-only service generally runs $80–$140. Spring is the busiest season; {city} companies often run one to two week backlogs from late April through early June. Getting on a recurring semi-annual schedule locks in better pricing than booking one-off services during peak season.",
  "small-city":
    "Expect to pay $90–$175 for interior and exterior window cleaning in {city}—among the lower-cost markets in the country. Exterior-only service typically runs $60–$110. The tradeoff is a smaller pool of established local pros, which can mean scheduling constraints during spring peak season. Locking in a semi-annual recurring appointment tends to give {city} homeowners both the best pricing and guaranteed availability.",
};

// ─── Helper to build a lookup key from city + state ──────────────────────────

function makeKey(city: string, stateAbbr: string): string {
  return `${city.toLowerCase().replace(/[\s.]+/g, "-")}-${stateAbbr}`;
}

function interpolate(template: string, city: string, state: string): string {
  return template.replace(/\{city\}/g, city).replace(/\{state\}/g, state);
}

// ─── Public API ───────────────────────────────────────────────────────────────

export function getCityContent(
  city: string,
  state: string,
  stateAbbr: string
): CityContent {
  const key = makeKey(city, stateAbbr);
  const meta = CITY_MAP[key] ?? { profile: "midwest" as ClimateProfile, tier: "mid-city" as PricingTier };
  const profileContent = PROFILES[meta.profile];
  const costNote = COST_NOTES[meta.tier];

  return {
    intro:     interpolate(profileContent.intro,    city, state),
    seasonal:  interpolate(profileContent.seasonal, city, state),
    costNote:  interpolate(costNote,                city, state),
    localTip:  interpolate(profileContent.localTip, city, state),
  };
}
