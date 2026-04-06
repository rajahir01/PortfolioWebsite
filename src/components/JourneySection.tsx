import { useRef } from "react";
import { motion } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Chapter {
  id: string;
  label: string;
  year: string;
  company: string;
  role: string;
  title: string;
  body: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  visual: "origin" | "scale" | "production" | "frontier" | "vision";
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const chapters: Chapter[] = [
  {
    id: "01",
    label: "Origin",
    year: "2020 – 2022",
    company: "Self-directed",
    role: "Independent Study",
    title: "The question that changed everything",
    body: "It started with a single question: how do machines understand language? Not from a textbook — from a YouTube video at 2 AM. That question led to C++, then Python, then an obsessive dive into neural networks. Long before any job title, the habit was already there: find the edge of what you know, then push past it. BERT was the first model I pulled apart. I didn't just run it — I rebuilt it layer by layer to understand why attention worked. That instinct to understand deeply, not just use quickly, has shaped every system built since.",
    metrics: [
      { value: "2020", label: "First model" },
      { value: "BERT", label: "Starting point" },
      { value: "∞", label: "Late nights" },
    ],
    tags: ["Python", "PyTorch", "Transformers", "NLP", "Deep Learning"],
    visual: "origin",
  },
  {
    id: "02",
    label: "Foundation",
    year: "Aug 2022 – Oct 2024",
    company: "Signatech Services",
    role: "Associate Software Engineer",
    title: "Building infrastructure that doesn't break",
    body: "Signatech was the proving ground for everything that came before. 50+ REST APIs in .NET, a real-time polling system with WebSockets that cut latency by 35%, and an RBAC system managing 100K+ enterprise users. Scale wasn't theoretical — it was daily. Then came the pivot that mattered: a natural language interface letting business users query large datasets conversationally, returning answers in under two seconds. That was SignaInsight. Built with LangChain and ChromaDB, it was the first production AI system I owned end-to-end. The moment AI stopped being a side project and became the work.",
    metrics: [
      { value: "50+", label: "APIs shipped" },
      { value: "100K+", label: "Users managed" },
      { value: "35%", label: "Latency reduced" },
      { value: "<2s", label: "NL query response" },
    ],
    tags: [".NET Core", "WebSockets", "LangChain", "ChromaDB", "Azure", "Docker"],
    visual: "scale",
  },
  {
    id: "03",
    label: "Acceleration",
    year: "Nov 2024 – Mar 2025",
    company: "Eazybe",
    role: "Software Development Engineer II",
    title: "AI features only work when the plumbing does",
    body: "Eazybe operated at a different order of magnitude. Six CRM platforms — Salesforce, HubSpot, Zoho, Monday.com, and more — unified under a single GPT-powered intelligence layer that extracted actionable insights from sales conversations. The backend: NestJS APIs processing over a million records per day, with Redis caching keeping latency invisible to end users. The insight reinforced here was that AI features are only as good as the infrastructure beneath them. A brilliant model behind a slow API is a broken product. You have to own both.",
    metrics: [
      { value: "6", label: "CRM platforms" },
      { value: "1M+", label: "Records/day" },
      { value: "GPT", label: "Intelligence layer" },
    ],
    tags: ["NestJS", "TypeScript", "Redis", "PostgreSQL", "GraphQL", "AWS", "Docker"],
    visual: "production",
  },
  {
    id: "04",
    label: "Frontier",
    year: "Mar 2025 – Present",
    company: "Wartinlabs",
    role: "AI Engineer",
    title: "The full stack of intelligence",
    body: "Wartinlabs is where every skill converged into something new. A diffusion-based interior design app running on serverless AWS. A real estate voice agent combining Eleven Labs, LiveKit, and CrewAI — speaking naturally, reasoning in real time, closing loops through multi-agent orchestration. An AI psychiatrist that adapts CBT sessions to each individual using MCP. A real-time digital human: Wav2Lip lip-sync on NVIDIA H100 GPUs, delivered over WebRTC with sub-200ms latency. A VoIP calling agent. A WhatsApp AI agent. All backed by Terraform IaC on AWS Fargate with auto-scaling.",
    metrics: [
      { value: "H100", label: "GPU tier" },
      { value: "<200ms", label: "Avatar latency" },
      { value: "5+", label: "AI systems" },
      { value: "AWS", label: "Serverless infra" },
    ],
    tags: ["Python", "PyTorch", "Wav2Lip", "CrewAI", "MCP", "WebRTC", "Eleven Labs", "LiveKit", "Terraform", "AWS"],
    visual: "frontier",
  },
  {
    id: "05",
    label: "Vision",
    year: "Looking ahead",
    company: "What's next",
    role: "The next chapter",
    title: "Precision over scale. Agency over assistance.",
    body: "The frontier isn't always the largest model — it's the most precise one. The focus going forward is Small Language Models fine-tuned for domains where accuracy is non-negotiable: healthcare diagnostics, legal reasoning, financial analysis. Models that are smaller, faster, and more reliable than general-purpose alternatives. Alongside that: agentic systems that move beyond single-turn interactions into sustained, goal-driven execution. Multi-agent pipelines that plan, verify, and course-correct.",
    metrics: [
      { value: "SLM", label: "Core focus" },
      { value: "Multi-agent", label: "Architecture" },
      { value: "Edge", label: "Deployment" },
    ],
    tags: ["SLMs", "LoRA / QLoRA", "Agentic Systems", "Edge AI", "Healthcare AI", "Autonomous Pipelines"],
    visual: "vision",
  },
];

// ─── Visuals ──────────────────────────────────────────────────────────────────

const OriginVisual = () => {
  const lines = [
    { tokens: [{ t: "import", c: "text-primary/80" }, { t: " torch", c: "text-foreground/70" }] },
    { tokens: [{ t: "from", c: "text-primary/80" }, { t: " transformers ", c: "text-foreground/70" }, { t: "import", c: "text-primary/80" }, { t: " AutoModel", c: "text-accent/90" }] },
    { tokens: [] },
    { tokens: [{ t: "# BERT: 12 layers, 110M params", c: "text-muted-foreground/60" }] },
    { tokens: [{ t: "model", c: "text-accent/90" }, { t: " = ", c: "text-foreground/50" }, { t: "AutoModel", c: "text-primary" }, { t: ".from_pretrained(", c: "text-foreground/70" }] },
    { tokens: [{ t: '    "bert-base-uncased"', c: "text-foreground/60" }] },
    { tokens: [{ t: ")", c: "text-foreground/70" }] },
    { tokens: [] },
    { tokens: [{ t: "outputs", c: "text-accent/90" }, { t: " = ", c: "text-foreground/50" }, { t: "model", c: "text-accent/90" }, { t: "(**inputs)", c: "text-foreground/70" }] },
    { tokens: [{ t: "logits", c: "text-accent/90" }, { t: " = ", c: "text-foreground/50" }, { t: "outputs", c: "text-accent/90" }, { t: ".last_hidden_state", c: "text-primary" }] },
  ];
  return (
    <div className="w-full rounded-lg bg-background/60 border border-border overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-muted/50">
        <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/15" />
        <span className="ml-2 font-display text-[10px] text-muted-foreground">bert_explore.py</span>
      </div>
      <div className="p-4 font-display text-[11px] leading-[1.8]">
        {lines.map((line, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="flex">
            <span className="text-muted-foreground/25 w-6 shrink-0 select-none text-right mr-4">{line.tokens.length > 0 ? i + 1 : ""}</span>
            <span>{line.tokens.map((tok, j) => <span key={j} className={tok.c}>{tok.t}</span>)}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ScaleVisual = () => {
  const bars = [
    { label: "APIs", value: 50, max: 50, suffix: "+" },
    { label: "Users", value: 100, max: 100, suffix: "K+" },
    { label: "Latency ↓", value: 35, max: 100, suffix: "%" },
    { label: "NL resp.", value: 2, max: 10, suffix: "s" },
  ];
  return (
    <div className="w-full space-y-4">
      {bars.map((bar, i) => (
        <motion.div key={bar.label} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
          <div className="flex justify-between mb-1.5">
            <span className="font-display text-[11px] text-muted-foreground uppercase tracking-wider">{bar.label}</span>
            <span className="font-display text-[11px] text-primary font-semibold">{bar.value}{bar.suffix}</span>
          </div>
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <motion.div className="h-full bg-primary rounded-full" initial={{ width: 0 }} whileInView={{ width: `${(bar.value / bar.max) * 100}%` }} viewport={{ once: true }} transition={{ delay: i * 0.12 + 0.2, duration: 0.8, ease: "easeOut" }} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const ProductionVisual = () => {
  const nodes = [
    { label: "Salesforce", x: 10, y: 10 },
    { label: "HubSpot", x: 70, y: 10 },
    { label: "Zoho", x: 10, y: 55 },
    { label: "Monday", x: 70, y: 55 },
    { label: "GPT Layer", x: 40, y: 32 },
    { label: "Insights", x: 40, y: 75 },
  ];
  const edges = [[0, 4], [1, 4], [2, 4], [3, 4], [4, 5]];
  return (
    <div className="w-full relative h-28">
      <svg viewBox="0 0 100 90" className="w-full h-full">
        {edges.map(([a, b], i) => {
          const na = nodes[a], nb = nodes[b];
          return (
            <motion.line key={i} x1={na.x + na.label.length * 1.5} y1={na.y + 4} x2={nb.x + nb.label.length * 1.5} y2={nb.y + 4} stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} />
          );
        })}
        {nodes.map((n, i) => (
          <motion.g key={n.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <rect x={n.x} y={n.y} width={n.label.length * 2.9 + 2} height="8" rx="1.5" fill={i === 4 ? "hsl(var(--primary) / 0.15)" : "hsl(var(--muted))"} stroke={i === 4 ? "hsl(var(--primary) / 0.5)" : "hsl(var(--border))"} strokeWidth="0.3" />
            <text x={n.x + n.label.length * 1.45 + 1} y={n.y + 5.5} textAnchor="middle" fontSize="3" fill={i === 4 ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"} fontFamily="monospace">{n.label}</text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

const FrontierVisual = () => {
  const systems = [
    { name: "Digital Avatar", sub: "Wav2Lip · H100 · <200ms", bar: 98 },
    { name: "Voice Agent", sub: "LiveKit · Eleven Labs · CrewAI", bar: 92 },
    { name: "AI Psychiatrist", sub: "MCP · CBT · Adaptive", bar: 85 },
    { name: "Design AI", sub: "Diffusion · ComfyUI · AWS", bar: 88 },
  ];
  return (
    <div className="w-full space-y-3">
      {systems.map((s, i) => (
        <motion.div key={s.name} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <div className="font-display text-[11px] font-semibold text-foreground truncate">{s.name}</div>
            <div className="font-display text-[10px] text-muted-foreground/60 truncate">{s.sub}</div>
          </div>
          <div className="w-16 h-1 bg-muted rounded-full overflow-hidden shrink-0">
            <motion.div className="h-full rounded-full bg-primary" initial={{ width: 0 }} whileInView={{ width: `${s.bar}%` }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const VisionVisual = () => {
  const domains = ["Healthcare", "Legal", "Finance", "Edge"];
  return (
    <div className="w-full">
      <div className="relative flex items-center justify-center h-24">
        <motion.div className="absolute z-10 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 font-display text-[11px] text-primary font-semibold" animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 3, repeat: Infinity }}>
          SLM Core
        </motion.div>
        {domains.map((d, i) => {
          const angle = (i / domains.length) * 360 - 90;
          const r = 38;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + r * Math.cos(rad);
          const y = 50 + r * Math.sin(rad);
          return (
            <motion.div key={d} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 + 0.3 }} className="absolute px-2 py-1 rounded bg-card border border-border font-display text-[10px] text-muted-foreground -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
              {d}
            </motion.div>
          );
        })}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <motion.circle cx="50" cy="50" r="38" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.3" strokeOpacity="0.2" strokeDasharray="4 3" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "50% 50%" }} />
        </svg>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
        {["LoRA fine-tuning", "GGUF quantization", "Tool use", "Planning loops"].map((t) => (
          <span key={t} className="px-2 py-0.5 rounded bg-muted border border-border font-display text-[10px] text-muted-foreground">{t}</span>
        ))}
      </div>
    </div>
  );
};

const visualMap: Record<Chapter["visual"], JSX.Element> = {
  origin: <OriginVisual />,
  scale: <ScaleVisual />,
  production: <ProductionVisual />,
  frontier: <FrontierVisual />,
  vision: <VisionVisual />,
};

// ─── Metric Chip ──────────────────────────────────────────────────────────────

const MetricChip = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center px-4 py-2.5 rounded-lg bg-card border border-border">
    <span className="font-display text-lg md:text-xl font-bold text-primary leading-none">{value}</span>
    <span className="font-display text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{label}</span>
  </div>
);

// ─── Timeline Chapter ─────────────────────────────────────────────────────────

export const TimelineChapter = ({
  chapter,
  index,
  isActive,
}: {
  chapter: Chapter;
  index: number;
  isActive: boolean;
}) => {
  const isEven = index % 2 === 0;
  return (
    <div id={`chapter-${chapter.id}`} className="relative">
      {/* Timeline spine */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 top-10 md:-translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className={`w-3 h-3 rounded-full border-2 transition-colors duration-500 ${
            isActive ? "bg-primary border-primary" : "bg-background border-border"
          }`}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 pt-6 pb-16 md:pb-24 pl-12 md:pl-0">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`${isEven ? "md:pr-14 md:order-1" : "md:pl-14 md:order-2"} flex flex-col justify-center`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display text-[10px] tracking-[0.3em] text-primary uppercase">{chapter.year}</span>
            <div className="h-px w-6 bg-border" />
            <span className="font-display text-[10px] tracking-[0.2em] text-muted-foreground uppercase">{chapter.company}</span>
          </div>

          <span className="inline-flex self-start px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 font-display text-[10px] text-primary uppercase tracking-wider mb-4">
            {chapter.role}
          </span>

          <div className="flex items-baseline gap-3 mb-3">
            <span className="font-display text-4xl md:text-5xl font-bold text-foreground/5 select-none leading-none shrink-0">{chapter.id}</span>
            <h3 className="text-lg md:text-xl font-display font-bold leading-snug text-foreground">{chapter.title}</h3>
          </div>

          <p className="text-muted-foreground leading-relaxed text-sm mb-5">{chapter.body}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {chapter.metrics.map((m) => (
              <MetricChip key={m.label} value={m.value} label={m.label} />
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {chapter.tags.map((t) => (
              <span key={t} className="px-2 py-0.5 text-[10px] rounded bg-muted text-muted-foreground font-display border border-border">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`${isEven ? "md:pl-14 md:order-2" : "md:pr-14 md:order-1"} flex items-center justify-center mt-8 md:mt-0`}
        >
          <div className="relative w-full max-w-sm p-6 rounded-xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors duration-300">
            <div className="absolute -top-2 -right-2 font-display text-[80px] font-bold text-foreground/[0.03] select-none leading-none">{chapter.id}</div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{chapter.label}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
            <div className="relative z-10">{visualMap[chapter.visual]}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ─── Section (used in Index) ──────────────────────────────────────────────────

const JourneySection = () => {
  return (
    <section id="journey" className="py-24 relative border-t border-border">
      <div className="container px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-display text-sm text-primary tracking-widest uppercase">&gt; 02.5</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-4">The Journey</h2>
          <p className="text-muted-foreground leading-relaxed">
            From a 2 AM question about language models to building real-time digital humans on H100 GPUs — five chapters of building AI in production.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {chapters.map((chapter, i) => (
            <TimelineChapter key={chapter.id} chapter={chapter} index={i} isActive={false} />
          ))}
          {/* End cap */}
          <div className="absolute left-4 md:left-1/2 bottom-0 w-2.5 h-2.5 rounded-full border-2 border-border bg-background md:-translate-x-1/2" />
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
