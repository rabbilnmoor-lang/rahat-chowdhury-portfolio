// -----------------------------------------------------------------------------
// PROJECTS / CASE STUDIES  (source of truth: CV + Career Master File)
// Each project renders a card on /projects and a full case study at /projects/<slug>
// -----------------------------------------------------------------------------

export type Project = {
  slug: string;
  title: string;
  short: string; // one-line description for cards
  category: string;
  metrics?: { value: string; label: string }[];
  tags: string[];
  featured?: boolean;
  overview: string;
  challenge: string;
  role: string;
  whatIDid: string[];
  execution?: string[]; // process/journey steps for the visual
  outcome: string[];
  skills: string[];
  note?: string; // confidentiality / clarification note
};

export const projects: Project[] = [
  {
    slug: "qatar-airways-cargo-gsa",
    title: "Qatar Airways Cargo GSA — From Bid to Live Operations",
    short: "Led a General Sales Agent mandate end-to-end, from competitive bid to a live, revenue-generating operation.",
    category: "Business Development · Aviation",
    featured: true,
    metrics: [
      { value: "~BDT 12 crore", label: "Annual revenue (≈ US$1M)" },
      { value: "Bid → Operations", label: "Full mandate lifecycle" },
    ],
    tags: ["Business Development", "Commercial Negotiation", "Project Execution", "Regulatory Coordination", "Stakeholder Management"],
    overview:
      "Expo Group pursued and won the General Sales Agent (GSA) mandate for Qatar Airways Cargo. I led the initiative from the competitive bid through to a live operation that now generates approximately BDT 12 crore (≈ US$1 million) in annual revenue.",
    challenge:
      "Winning the mandate was only the start. Turning an award into a working operation meant landing several things at once — documentation, budgeting, HR planning and permits — on a tight timeline, with the regulatory approvals depending on external parties.",
    role:
      "I led and coordinated the mandate end-to-end, holding both the commercial and the operational threads through to launch and ongoing governance.",
    whatIDid: [
      "Prepared and submitted the competitive bid, proposal and application.",
      "Coordinated documentation, budgeting and HR/manpower planning for the new operation.",
      "Handled permit and regulatory coordination, sequencing the approvals that gated the launch.",
      "Drove implementation through to operational launch, then supported ongoing commercial and operational governance.",
    ],
    execution: ["Bid", "Proposal", "Documentation", "Budget", "HR", "Regulatory", "Launch", "Operations"],
    outcome: [
      "A live GSA operation generating approximately BDT 12 crore (≈ US$1 million) in annual revenue.",
      "A repeatable playbook for taking a commercial mandate from bid to a functioning, governed operation.",
    ],
    skills: ["Business Development", "Bid & Proposal Management", "Budgeting", "HR Planning", "Regulatory Coordination", "Project Execution", "Commercial Governance"],
    note: "Revenue reflects the GSA portfolio outcome. My role was to lead and coordinate the mandate and its implementation, not to solely own the business.",
  },

  {
    slug: "sitakunda-icd-cfs",
    title: "Sitakunda ICD/CFS — Developing a Large-Scale Logistics Infrastructure Venture",
    short: "Coordinating the planning and setup of an off-dock inland container depot and freight station near Chittagong Port.",
    category: "Project Management · Infrastructure",
    featured: true,
    metrics: [
      { value: "~US$28.75M", label: "Project (base plan)" },
      { value: "20.55 acres", label: "Secured of 26.66-acre Phase 1" },
      { value: "~38% IRR", label: "Projected (modelled)" },
    ],
    tags: ["Project Coordination", "Entity Formation", "Land & Licensing", "Regulatory Documentation", "Financial Modelling"],
    overview:
      "An Expo Group off-dock logistics infrastructure venture: an Inland Container Depot & Container Freight Station (ICD/CFS) about 22 km from Chittagong Port on the Dhaka–Chittagong corridor. This is an ongoing project at the planning and setup stage.",
    challenge:
      "A regulatory-heavy, multi-stakeholder infrastructure project where the land and approvals sit on the critical path and depend on external authorities whose timelines cannot be rushed.",
    role:
      "I coordinate the planning and setup — from new-entity formation and land coordination to licensing and regulatory documentation — alongside infrastructure scoping and financial/business-case support.",
    whatIDid: [
      "Coordinated new-entity formation for the venture.",
      "Coordinated land acquisition — 20.55 acres secured toward the 26.66-acre Phase 1 target.",
      "Led licensing and regulatory documentation.",
      "Supported infrastructure scoping and financial/business-case analysis.",
    ],
    execution: ["Land", "Licensing", "Infrastructure", "Financial Model", "Project Setup", "Logistics Hub"],
    outcome: [
      "Land largely secured and licensing/regulatory work in progress for a planned off-dock logistics hub.",
      "A modelled base plan of ~US$28.75M (70% debt / 30% equity), with the financial model projecting ~38% IRR and a ~3-year payback.",
    ],
    skills: ["Project Coordination", "Entity Formation", "Land Coordination", "Licensing & Regulatory", "Infrastructure Planning", "Financial Modelling"],
    note: "Ongoing, early-stage project. Financial figures are projected/modelled, not realised returns. Infrastructure scope shown at a high level only; detailed assumptions are confidential.",
  },

  {
    slug: "acos-air-cargo-operating-station",
    title: "ACOS — Developing a New Air Cargo Operating Station",
    short: "Coordinating an ongoing strategic initiative from concept and business case toward regulatory approval and operational design.",
    category: "Corporate Strategy · Project Development",
    featured: true,
    metrics: [
      { value: "Concept → Setup", label: "Strategy to implementation planning" },
      { value: "Ongoing", label: "Initiative under development" },
    ],
    tags: ["Corporate Strategy", "Project Development", "Business Planning", "Regulatory Coordination", "Stakeholder Management", "Operational Planning"],
    overview:
      "ACOS (Air Cargo Operating Station) is an Expo Group strategic initiative. It is an ongoing project under development, which I am helping to shape from concept through to its planning and setup stage.",
    challenge:
      "A complex, multi-stakeholder initiative that has to be built from the ground up — a clear business case, buy-in from senior management and government stakeholders, and a workable regulatory and operational path.",
    role:
      "I develop the concept and business case, prepare the strategic proposal and presentations, coordinate with regulatory and government authorities, and support the planning and operational design.",
    whatIDid: [
      "Developed the concept and business case for the initiative.",
      "Prepared the strategic proposal and presentations for senior management and government stakeholders.",
      "Coordinated with regulatory and government authorities on policy and licensing requirements.",
      "Developed process flows and operational concepts, and supported the planning and implementation framework.",
    ],
    execution: ["Concept", "Business Case", "Proposal", "Regulatory Coordination", "Operational Design", "Implementation Planning"],
    outcome: [
      "A structured business case and strategic proposal, progressing through stakeholder and regulatory coordination.",
      "An ongoing initiative being taken from idea toward a defined planning and setup stage.",
    ],
    skills: ["Corporate Strategy", "Business Case Development", "Regulatory Coordination", "Stakeholder Management", "Operational Planning", "Executive Presentations"],
    note: "Ongoing, early-stage strategic initiative — not a completed or launched project. Confidential commercial and regulatory details are not published.",
  },

  {
    slug: "agriculture-transformation",
    title: "Operational Transformation Through SOP & Process Optimisation",
    short: "Re-engineered an agriculture subsidiary's operations through SOPs and process redesign.",
    category: "Business Operations",
    featured: true,
    metrics: [
      { value: "~45%", label: "Production increase" },
      { value: "~35%", label: "Cost reduction" },
    ],
    tags: ["Process Improvement", "SOP Design", "Operations Management", "Change Management"],
    overview:
      "An agriculture-based subsidiary within the group was under-performing, with inconsistent processes and high cost. I was asked to bring order, then took on an operations-management role to embed the change.",
    challenge:
      "Lift output and cut cost without capital investment — and make the improvement stick after handover.",
    role:
      "I designed and implemented the standard operating procedures and optimised the processes, working with the team so they would own the new way of working; I then oversaw execution as operations lead.",
    whatIDid: [
      "Mapped the existing process and identified the bottlenecks.",
      "Designed and rolled out standard operating procedures (SOPs) with the operating team.",
      "Optimised processes to raise output and lower cost and daily effort.",
      "Moved into an operations-management role to sustain the gains.",
    ],
    execution: ["Challenge", "SOP Design", "Process Optimisation", "Implementation", "Result"],
    outcome: [
      "Production increased by approximately 45%.",
      "Cost reduced by approximately 35%, with lower routine daily effort.",
      "A team able to sustain the improved process without constant supervision.",
    ],
    skills: ["SOP Design", "Process Optimisation", "Operations Management", "Cost Reduction", "Team Coordination"],
  },

  {
    slug: "airline-gsa-portfolio",
    title: "Airline GSA Business Development Portfolio",
    short: "Led and supported 8+ airline GSA pursuits across cargo and passenger lines, plus agreement governance.",
    category: "Business Development · Aviation",
    metrics: [{ value: "8+", label: "Airline GSA pursuits" }],
    tags: ["GSA Bidding", "Proposal Development", "Negotiation", "Agreement Governance", "Carrier Relationships"],
    overview:
      "Beyond the Qatar Airways Cargo GSA, I have led or supported a portfolio of airline representation pursuits — cargo and passenger — and the governance of live carrier agreements.",
    challenge:
      "Airline representation is competitive and relationship-driven. Winning work needs credible commercial cases and a real operational plan; keeping principals needs disciplined agreement governance.",
    role:
      "I carried out market assessment, proposal development and competitive bidding, and supported the review and governance of carrier agreements.",
    whatIDid: [
      "Cargo GSA bids / applications: Riyadh Air, Air Asia, Delta, SolitAir, Uzbekistan Airways.",
      "Passenger GSA: Maldivian; Qatar Airways passenger GSA application.",
      "Agreement review and governance: KLM–Air France, Etihad, Fits Air.",
      "Coordinated communication and task distribution through an airline leadership transition to keep relationships stable.",
    ],
    execution: ["Market Assessment", "Opportunity", "Proposal", "Bid", "Negotiation", "Agreement", "Implementation"],
    outcome: [
      "A broadened airline-representation pipeline across cargo and passenger lines.",
      "Governed agreements with multiple international carriers.",
    ],
    skills: ["Market Assessment", "Proposal Development", "GSA Bidding", "Negotiation Support", "Agreement Governance"],
    note: "Represents pursuits and applications. Not every pursuit resulted in an award.",
  },

  {
    slug: "ecourier-aramex-partnership",
    title: "Creating a Reciprocal Delivery Partnership (e-Courier × Aramex)",
    short: "Structured a two-way partnership so each company became the other's delivery arm at home and abroad.",
    category: "Business Development",
    tags: ["Partnership Structuring", "Negotiation", "Commercial Development", "Relationship Management"],
    overview:
      "I brokered a reciprocal partnership between e-Courier and Aramex Bangladesh, matching two companies whose strengths complemented each other.",
    challenge:
      "Each company needed a capability the other already had — international reach on one side, domestic reach on the other — without either taking on significant new cost.",
    role:
      "I identified the fit and structured the reciprocal arrangement, then supported alignment and implementation.",
    whatIDid: [
      "Identified the opportunity and aligned both partners around it.",
      "Structured the commercial terms as a two-way partnership.",
      "Supported negotiation, relationship management and implementation.",
    ],
    execution: ["Aramex → e-Courier's International Partner", "e-Courier → Aramex's Domestic Partner"],
    outcome: [
      "A reciprocal partnership: Aramex as e-Courier's international delivery partner, and e-Courier as Aramex's domestic delivery partner.",
    ],
    skills: ["Opportunity Identification", "Commercial Structuring", "Negotiation", "Relationship Management"],
    note: "A commercial partnership structured for mutual benefit; financial results are not disclosed.",
  },

  {
    slug: "freight-forwarding-improvement",
    title: "Freight Forwarding Process & Operational Improvement",
    short: "Standardised the import process and enforced system governance across multiple freight-forwarding entities.",
    category: "Business Operations · Logistics",
    tags: ["Process Improvement", "System Governance", "Exception Monitoring", "Operational Excellence"],
    overview:
      "Freight-forwarding operations were being run inconsistently across group entities. I worked to standardise the process and tighten governance across APS, Expo Freight and Origin Solution (OSL).",
    challenge:
      "The same work was done differently in different entities, creating inconsistency and exceptions that surfaced late.",
    role:
      "I mapped the real process, standardised it, enforced system governance and put exception monitoring in place.",
    whatIDid: [
      "Optimised the import process across the entities.",
      "Enhanced sales-system usage and enforced system governance.",
      "Introduced operational-exception monitoring so issues surface early.",
    ],
    execution: ["Process", "Bottleneck", "Intervention", "Governance", "Monitoring"],
    outcome: [
      "More consistent, better-governed freight-forwarding operations across the entities.",
    ],
    skills: ["Process Optimisation", "System Governance", "Exception Monitoring", "Cross-functional Coordination"],
    note: "Focused on process and governance improvements; specific internal figures are not published.",
  },

  {
    slug: "xy-shed-lcl-operations",
    title: "Port-Side LCL Operations (XY Shed)",
    short: "Coordinated the setup of operations for a Chittagong Port-owned LCL cargo shed.",
    category: "Project Management · Logistics",
    tags: ["Operational Implementation", "Port-side Logistics", "Government Coordination", "LCL Cargo"],
    overview:
      "The XY Shed is a Chittagong Port-owned shed for LCL (less-than-container-load) cargo, awarded to Bay Cargo Center Limited (BCCL) to operate on behalf of and in coordination with the Chittagong Port Authority.",
    challenge:
      "Stand up an operation inside a government body's process, with the port authority's timeline and requirements setting the pace.",
    role:
      "I managed and implemented the operations setup, coordinating closely with the port authority.",
    whatIDid: [
      "Coordinated the operational setup so the shed could handle cargo.",
      "Aligned the work to the Chittagong Port Authority's process and requirements.",
      "Managed port-side logistics coordination for LCL cargo.",
    ],
    execution: ["Award (BCCL)", "Coordination", "Setup", "Operations"],
    outcome: [
      "An operational port-side LCL cargo setup, run in coordination with the Chittagong Port Authority.",
    ],
    skills: ["Operational Implementation", "Government Coordination", "Port-side Logistics"],
    note: "Throughput and commercial figures are not disclosed.",
  },

  {
    slug: "financial-modelling-business-cases",
    title: "Financial Modelling & Strategic Decision Support",
    short: "Turned market data into financial models, scenarios and investment cases for management decisions.",
    category: "Corporate Strategy · Commercial",
    tags: ["Financial Modelling", "Business Cases", "Market Research", "Investment Analysis", "Decision Support"],
    overview:
      "A recurring part of my work is translating research and data into financial models and business cases that support investment and management decisions.",
    challenge:
      "Give leadership a clear, defensible basis for go/no-go decisions — often where market data is thin.",
    role:
      "I build the models, run the scenarios and frame the investment case, staying honest about assumptions and confidence.",
    whatIDid: [
      "Financial model and business-case support for the Sitakunda ICD/CFS venture.",
      "Financial modelling and project management for House of Innovation (digital-media venture).",
      "Insurance-sector market study and brokerage review (Acorn Ventures).",
      "Property/asset proposal development (EHL) and other documented business cases.",
    ],
    execution: ["Market Data", "Assumptions", "Financial Model", "Scenario Analysis", "Investment Case", "Management Decision"],
    outcome: [
      "Clear, scenario-based investment cases used to support management decisions.",
    ],
    skills: ["Financial Modelling", "Scenario Analysis", "Market & Sectoral Research", "Business-case Development"],
    note: "Confidential financial-model details and assumptions are not published.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
