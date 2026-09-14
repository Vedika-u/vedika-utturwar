export const profile = {
  name: 'Vedika Utturwar',
  tagline: 'I build intelligent software systems — not just academic projects.',
  role: 'Aspiring Software Engineer & AI Engineer',
  focus: 'Agentic AI · Generative AI · Backend Engineering · Cybersecurity Automation',
  location: 'Banasthali Vidyapeeth, Rajasthan',
  email: 'btbti24094_vedika@banasthali.in',
  github: 'https://github.com/Vedika-u',
  linkedin: 'https://www.linkedin.com/in/vedika-utturwar-b37b75336',
  year: 'Third-year',
  cgpa: '9.61',
  gradYear: '2028',
}

export const about = {
  paragraphs: [
    "I'm a third-year Information Technology undergraduate at Banasthali Vidyapeeth (graduating 2028), currently holding a 9.61 CGPA. My focus is on agentic AI systems — software that doesn't just respond to input, but reasons through multi-step workflows: triaging, prioritizing, and acting with a human kept in the loop.",
    "Across two hackathons, I've helped build a SIEM-SOAR platform for banking cybersecurity and an autonomous productivity agent for email — both under real time pressure, both shipped as working systems rather than slide decks. More recently, I took that same detection instinct into a self-directed project: building an LLM agent from scratch and red-teaming it myself, measuring Attack Success Rate before and after a custom detection layer instead of just demoing a happy path. I work comfortably across the stack: Python/FastAPI services, React/TypeScript frontends, and data layers spanning MySQL and Elasticsearch.",
    "Outside of engineering, I placed 4th nationally in Le Grand Concours, a French language competition run with the Embassy of France in India — evidence that the same discipline I bring to debugging a detection pipeline applies elsewhere too.",
  ],
}

export type Project = {
  slug: string
  name: string
  category: string
  event: string
  date: string
  tagline: string
  oneLiner: string
  shortFeatures: string[]
  problem: string
  solution: string
  role: string
  results: string
  features: string[]
  stack: {
    label: string
    items: string[]
  }[]
  links: { label: string; href: string }[]
  diagram: 'emailAgent' | 'actAware' | 'orbitDesk' | 'agentPenTest'
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'agent-penetration-test',
    name: 'AgentPenetrationTest — LLM Agent Red-Teaming Harness',
    category: 'AI · Security Research',
    event: 'Self-Directed Research Project',
    date: 'September 2026',
    tagline: 'A red-teaming harness that attacks an LLM agent built from scratch — then measures, in real numbers, how often the attacks work.',
    oneLiner: 'A benchmarked red-teaming harness that attacks a self-built LLM agent and measures Attack Success Rate before and after a custom detection layer.',
    shortFeatures: ['Self-built LangGraph target', 'garak-driven red-teaming', 'Embedding-based injection detector', 'Benchmarked ASR + live dashboard'],
    results:
      'Measured a real precision/recall/F1 (0.689 / 0.840 / 0.757) for the injection detector on 196 held-out examples, and an Attack Success Rate of 5% → 0% before/after detection on a 20-behavior stratified JailbreakBench subset — reported honestly alongside the caveat that the sample is small and the target model’s own safety tuning already blocked 19/20 attempts independent of the detector.',
    problem:
      'Most AI red-teaming demos run a public scanner against someone else’s chatbot and report a vague "it worked" — without fully understanding the target’s actual attack surface, and without a measured, reproducible before/after result.',
    solution:
      'A target agent built end-to-end for this project — a LangGraph state graph with web search, a SQLite-backed persistent notes store, and a calculator — deliberately designed to expose direct prompt injection, indirect tool-output injection, and memory poisoning as first-class attack surfaces. A harness wraps the agent’s API as a garak REST generator, drives garak’s probe suite against it, and ingests every attack/response pair. A detection layer — a grounding/claim check, a memory-integrity check on the notes tool, and an embedding-similarity injection classifier (Ollama nomic-embed-text) — is wired directly into the agent’s own verification node rather than bolted on separately. Results are scored against JailbreakBench and a StrongREJECT-style rubric and surfaced on a deployed React dashboard.',
    role:
      'Solo, self-directed project with no external deadline, built across five phases: the target agent, the attack harness, the detection layer, benchmark scoring, and the dashboard — including the literature review (garak, JailbreakBench, StrongREJECT, OWASP LLM Top 10) that shaped the scope decisions.',
    features: [
      'LangGraph target agent with three tools (web search, notes, calculator) and SQLite-backed persistent memory, exposing a memory-poisoning attack surface most toy agents lack the state to exhibit',
      'garak-driven attack harness wrapping the agent’s /attack endpoint as a REST generator, ingesting every (probe, prompt, output, detector score) row into SQLite',
      'In-graph detection layer: grounding/claim check, memory-integrity check on the notes tool, and an embedding-similarity injection/jailbreak classifier',
      'Detector precision/recall/F1 measured against a held-out mix of deepset/prompt-injections and JailbreakBench/JBB-Behaviors',
      'Attack Success Rate benchmarked before/after detection using a StrongREJECT-lite LLM-judge rubric, with methodology and caveats disclosed in full',
      'React/TypeScript dashboard deployed to GitHub Pages, reading real result JSON rather than mock data',
    ],
    stack: [
      { label: 'Target Agent', items: ['Python', 'LangGraph', 'FastAPI', 'Ollama'] },
      { label: 'Red-Teaming', items: ['garak', 'JailbreakBench', 'StrongREJECT'] },
      { label: 'Detection', items: ['Ollama (nomic-embed-text)', 'SQLite'] },
      { label: 'Dashboard', items: ['React', 'TypeScript', 'Vite'] },
    ],
    links: [
      { label: 'Repository', href: 'https://github.com/Vedika-u/agent-penetration-test' },
      { label: 'Live Dashboard', href: 'https://vedika-u.github.io/agent-penetration-test/' },
    ],
    diagram: 'agentPenTest',
    featured: true,
  },
  {
    slug: 'act-aware',
    name: 'Act Aware — AI-Powered Cyber Incident Response Platform',
    category: 'AI · Cybersecurity',
    event: 'Barclays Hack-O-Hire Hackathon',
    date: 'March 2026',
    tagline: 'A fully offline SIEM-SOAR pipeline that detects, correlates, and explains banking security incidents.',
    oneLiner: 'An offline AI platform that detects, explains, and helps respond to banking security incidents.',
    shortFeatures: ['Anomaly detection', 'Attack graph modeling', 'Explainable AI', 'Human-gated automation'],
    results:
      'Working across the detection and response layers with a 5-person team reinforced how much explainability and human-in-the-loop control matter in security automation — not just raw detection accuracy.',
    problem:
      'Banking SOC teams drown in false alerts from rule-based SIEM tools, miss multi-stage and insider attacks, and spend hours manually correlating logs across EDR, firewall, IAM, and application sources — with no explainable trail for why an action was taken.',
    solution:
      'A ten-layer, fully offline SIEM-SOAR pipeline: logs are normalized from any format (JSON/CSV/Syslog, 80+ field mappings) into a unified schema, aggregated into per-user behavioral profiles, and scored by an ensemble of anomaly detectors (Isolation Forest, LOF, HBOS) over tsfresh time-series features. Correlated signals are mapped onto an attack graph (NetworkX) to reveal lateral movement, weighted into a fidelity score, and — only when a human explicitly requests it — reasoned over by a local LLM (LangGraph + Ollama) to produce an explainable, step-by-step response playbook. Every action is RBAC-gated and logged with full decision provenance.',
    role:
      'Built as part of a 5-person team ("Team Phoenix Core") in a 48-hour hackathon. I contributed across multiple stages of the pipeline — including the aggregation/detection layers and LLM reasoning integration — with primary ownership of Layer 10: SOAR response execution and evaluation (the human-approved action layer and its performance metrics).',
    features: [
      'Universal log normalization across JSON, CSV, and Syslog with 80+ field-name mappings',
      'Ensemble anomaly detection (Isolation Forest + LOF + HBOS) over 3,000+ engineered time-series features per user',
      'Graph-based attack modeling to trace lateral movement and blast radius',
      'Weighted fidelity scoring with full decision provenance for every incident',
      'Local, human-triggered LLM reasoning that drafts explainable response playbooks — never auto-executed',
      'RBAC-gated SOAR actions (block IP, disable account, isolate endpoint, and more) with an immutable audit trail',
    ],
    stack: [
      { label: 'Backend', items: ['Python', 'FastAPI', 'Elasticsearch'] },
      { label: 'ML / Detection', items: ['PyOD', 'tsfresh', 'scikit-learn', 'NetworkX'] },
      { label: 'Agentic AI', items: ['LangGraph', 'LangChain', 'Ollama (local LLM)'] },
      { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
    ],
    links: [
      { label: 'Backend repo', href: 'https://github.com/Vedika-u/hack_o_hire' },
      { label: 'SOC frontend', href: 'https://github.com/Vedika-u/aware-security-hub' },
    ],
    diagram: 'actAware',
    featured: true,
  },
  {
    slug: 'email-productivity-agent',
    name: 'Autonomous Email Productivity Agent',
    category: 'AI · Automation',
    event: 'HackCelestia Hackathon',
    date: 'January 2026',
    tagline: 'An agentic AI system that triages, summarizes, and schedules around your inbox — so you don’t have to.',
    oneLiner: 'An agentic AI system that prioritizes, summarizes, and schedules your inbox automatically.',
    shortFeatures: ['Smart prioritization', 'LLM summarization', 'Task auto-extraction', 'Voice compose'],
    results:
      'Shipping both the agent logic and the UI in 48 hours meant prioritizing a simple, verifiable reasoning flow over a cleverer but harder-to-debug one.',
    problem:
      'Inboxes accumulate faster than they can be processed: important messages sit next to noise, tasks buried in email threads get missed, and manually re-prioritizing every morning is dead time.',
    solution:
      'An agentic productivity system that reasons over incoming email with context-aware prioritization, LLM-based summarization, and automatic task/schedule extraction — turning an inbox into a ranked, actionable worklist instead of a wall of unread messages.',
    role:
      'Designed and built in a 48-hour hackathon, contributing across both the frontend and backend and the overall system design. The interface was rapid-prototyped with an AI app builder and then hand-customized (compose flow, voice input) on top.',
    features: [
      'Context-aware email prioritization to surface what actually needs attention',
      'LLM-based summarization of long threads into scannable digests',
      'Automatic task extraction and scheduling from email content',
      'Voice-input compose flow for faster response drafting',
    ],
    stack: [
      { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'] },
      { label: 'Backend', items: ['Supabase (Postgres, Edge Functions, Auth)'] },
      { label: 'AI Concepts', items: ['Agentic AI', 'Generative AI', 'LLM summarization & prioritization'] },
    ],
    links: [{ label: 'Repository', href: 'https://github.com/Vedika-u/Celestia-UI' }],
    diagram: 'emailAgent',
    featured: true,
  },
  {
    slug: 'orbitdesk',
    name: 'OrbitDesk — Local-First Support Agent',
    category: 'AI · LLM',
    event: 'AI Engineer Internship Assignment, Tantrabodh AI',
    date: 'August 2026',
    tagline: 'A fully offline, test-verified LangGraph agent that answers support questions and refuses to guess.',
    oneLiner: 'A local-first support agent that verifies its own answers instead of guessing.',
    shortFeatures: ['Grounded retrieval', 'Self-verification', '16 automated tests', 'Fully offline'],
    results:
      'The verification node ended up mattering as much as the generation model itself — a small model with strict grounding checks is more trustworthy than a bigger one without them.',
    problem:
      'Support agents built on LLMs tend to hallucinate answers or cite outdated guidance when documentation and resolved-case history disagree — and most demos never prove correctness beyond a happy-path example.',
    solution:
      'A LangGraph-orchestrated pipeline — triage → retrieval → generation → verification — running entirely on local models after the first download (sentence-transformers for retrieval, Qwen2.5 for generation via Ollama-style local inference). A dedicated verification node checks grounding, citation validity, and whether a superseded case was cited before an answer is allowed to return, with an embedding-similarity fallback for citation inference.',
    role:
      'Solo project built end-to-end, including the test suite and documentation. Use of Claude Code as a pair-programming assistant is disclosed directly in the README, per the assignment’s requirements.',
    features: [
      'Triage → retrieval → generation → verification pipeline with per-node execution logs',
      '16 automated tests covering routing, retrieval, schema validation, and a forced verification-failure path',
      'Deterministic grounding and citation checks — including detecting citations of superseded guidance',
      'Fully offline after first run (models cached locally); benchmarked load time and per-question latency',
    ],
    stack: [
      { label: 'Core', items: ['Python', 'LangGraph', 'LangChain'] },
      { label: 'Models', items: ['sentence-transformers (MiniLM)', 'Qwen2.5-1.5B-Instruct'] },
      { label: 'Testing', items: ['pytest'] },
    ],
    links: [{ label: 'Repository', href: 'https://github.com/Vedika-u/OrbitDesk-Local-AI-Agent' }],
    diagram: 'orbitDesk',
    featured: true,
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'REST API design', 'Supabase'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Data',
    items: ['MySQL', 'Elasticsearch'],
  },
  {
    category: 'AI / Agentic Systems',
    items: ['Agentic AI', 'Generative AI', 'LangGraph', 'LangChain', 'LLM application development', 'Workflow automation'],
  },
  {
    category: 'Security & ML',
    items: ['Anomaly detection', 'UEBA', 'Behavioral analytics', 'RBAC design'],
  },
]

export const capabilities = [
  {
    title: 'Agentic pipeline design',
    description:
      'Structuring multi-step reasoning (triage, retrieval, generation, verification) as explicit graphs with human-in-the-loop gating, instead of a single opaque prompt.',
  },
  {
    title: 'LLM output verification',
    description:
      'Treating an LLM’s output as unverified by default — building deterministic grounding, citation, and safety checks before an answer or action is allowed through.',
  },
  {
    title: 'Anomaly & behavioral detection',
    description:
      'Feature-engineering time-series behavior profiles and combining ensemble ML models to catch what static, rule-based detection misses.',
  },
  {
    title: 'Full-stack delivery under pressure',
    description:
      'Shipping working, end-to-end systems — API, data layer, and UI — inside 48-hour hackathon windows, not just architecture diagrams.',
  },
  {
    title: 'Security-conscious system design',
    description:
      'Designing with RBAC, audit trails, and decision provenance as first-class requirements, not afterthoughts bolted on later.',
  },
  {
    title: 'Test-driven verification',
    description:
      'Writing automated test suites and benchmarking latency/accuracy before calling a pipeline done — not just demoing the happy path.',
  },
]

export const achievements = [
  {
    title: 'Barclays Hack-O-Hire Hackathon',
    detail: 'Built Act Aware, an offline AI-powered SIEM-SOAR platform for banking cybersecurity, as part of a 5-member team.',
    date: 'March 2026',
  },
  {
    title: 'HackCelestia — 48-Hour Hackathon',
    detail: 'Designed and presented an autonomous productivity agent for email prioritization, task management, and scheduling.',
    date: 'January 2026',
  },
  {
    title: 'Le Grand Concours 2024 — French Language Competition',
    detail:
      'Secured 94/100 and Position IV nationally, in a competition organized with Uzbekistan State World Languages University and the Embassy of France in India.',
    date: 'October 2024',
  },
]

export type Milestone = {
  title: string
  detail: string
  date: string
  tone: 'lavender' | 'blue' | 'peach' | 'pink'
  kind: 'Hackathon' | 'Language'
}

export const milestones: Milestone[] = [
  {
    title: 'Barclays Hack-O-Hire Hackathon',
    detail: 'Built Act Aware, an offline AI-powered SIEM-SOAR platform for banking cybersecurity, as part of a 5-member team.',
    date: 'March 2026',
    tone: 'lavender',
    kind: 'Hackathon',
  },
  {
    title: 'HackCelestia — 48-Hour Hackathon',
    detail: 'Designed and presented an autonomous productivity agent for email prioritization, task management, and scheduling.',
    date: 'January 2026',
    tone: 'blue',
    kind: 'Hackathon',
  },
  {
    title: 'Certificate Course for Modern European Language (French)',
    detail: 'Completed a certified French language course with Distinction in the university-conducted examination.',
    date: 'May 2025',
    tone: 'peach',
    kind: 'Language',
  },
  {
    title: 'Le Grand Concours 2024 — French Language Competition',
    detail:
      'Secured 94/100 and Position IV nationally, in a competition organized with Uzbekistan State World Languages University and the Embassy of France in India.',
    date: 'October 2024',
    tone: 'pink',
    kind: 'Language',
  },
]

export const education = [
  {
    degree: "Bachelor's in Information Technology",
    institution: 'Banasthali Vidyapeeth, Rajasthan',
    detail: '9.61 CGPA',
    date: 'July 2024 – Expected 2028',
  },
  {
    degree: '12th — Maharashtra State Board',
    institution: 'Nirala Junior College, Nagpur',
    detail: '65.17%',
    date: '2023 – 2024',
  },
  {
    degree: '10th — C.B.S.E. Board',
    institution: 'Montfort Higher Secondary School, Ballarpur',
    detail: '93.8%',
    date: '2021 – 2022',
  },
]

export const githubRepos = [
  {
    name: 'agent-penetration-test',
    description: 'Self-built LangGraph target agent + garak-driven red-teaming harness, benchmarked against JailbreakBench.',
    language: 'Python',
    url: 'https://github.com/Vedika-u/agent-penetration-test',
  },
  {
    name: 'hack_o_hire',
    description: 'Act Aware backend — offline SIEM-SOAR pipeline (Python, FastAPI, Elasticsearch).',
    language: 'Python',
    url: 'https://github.com/Vedika-u/hack_o_hire',
  },
  {
    name: 'aware-security-hub',
    description: 'Act Aware SOC dashboard — RBAC-gated incident response frontend.',
    language: 'TypeScript',
    url: 'https://github.com/Vedika-u/aware-security-hub',
  },
  {
    name: 'Celestia-UI',
    description: 'Autonomous Email Productivity Agent — React frontend on Supabase.',
    language: 'TypeScript',
    url: 'https://github.com/Vedika-u/Celestia-UI',
  },
  {
    name: 'OrbitDesk-Local-AI-Agent',
    description: 'Local-first LangGraph support agent with a 16-test verification suite.',
    language: 'Python',
    url: 'https://github.com/Vedika-u/OrbitDesk-Local-AI-Agent',
  },
  {
    name: 'sar-generator-oops',
    description: 'Automated SAR (Suspicious Activity Report) generation system, built with OOP principles in C++.',
    language: 'C++',
    url: 'https://github.com/Vedika-u/sar-generator-oops',
  },
]

export const certifications = [
  {
    title: 'Hack Celstia — 48-Hour Hackathon',
    detail: 'Participated in a 48-hour hackathon focused on Gen AI and Agentic AI; designed and presented an autonomous productivity agent.',
    date: 'January 2026',
  },
  {
    title: 'Certificate Course for Modern European Language (French)',
    detail: 'Completed a certified French language course with Distinction in the university-conducted examination.',
    date: 'May 2025',
  },
  {
    title: 'Le Grand Concours 2024 — French Language Competition',
    detail: 'Secured 94/100 and Position IV in a national-level French-English language and literature competition.',
    date: 'October 2024',
  },
]
