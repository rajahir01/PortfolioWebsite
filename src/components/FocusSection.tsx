import { motion } from "framer-motion";
import { Bot, Brain, Mic, Workflow, Cpu, MessageSquare } from "lucide-react";

const focusAreas = [
  {
    icon: Brain,
    title: "Small Language Models",
    description:
      "Fine-tuning and deploying efficient SLMs with LoRA/QLoRA for domain-specific tasks — optimized for latency, cost, and edge deployment.",
    visual: "SLM",
    tags: ["BERT", "LLaMA", "Mistral", "LoRA", "QLoRA"],
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description:
      "End-to-end dialogue systems with context management, personality tuning, and multi-turn reasoning for natural human-AI interactions.",
    visual: "CONV",
    tags: ["LangChain", "RAG", "MCP", "Semantic Search"],
  },
  {
    icon: Mic,
    title: "Voice Agents",
    description:
      "Real-time voice AI pipelines with speech-to-text, LLM reasoning, and text-to-speech — sub-second latency for live conversations.",
    visual: "VOICE",
    tags: ["Eleven Labs", "LiveKit", "Vapi", "WebRTC"],
  },
  {
    icon: Bot,
    title: "Agentic Systems",
    description:
      "Multi-agent architectures using CrewAI and MCP for autonomous task execution, tool use, and complex workflow orchestration.",
    visual: "AGENT",
    tags: ["CrewAI", "MCP", "Tool Use", "Multi-Agent"],
  },
  {
    icon: Cpu,
    title: "Real-Time AI Inference",
    description:
      "GPU-optimized model serving on NVIDIA H100/A100 with ultra-low latency pipelines for digital avatars and live AI applications.",
    visual: "GPU",
    tags: ["PyTorch", "NVIDIA H100", "Wav2Lip", "Diffusion"],
  },
  {
    icon: Workflow,
    title: "AI Infrastructure",
    description:
      "Production-grade AI deployment with Terraform IaC, serverless architecture, and auto-scaling on AWS/Azure for ML workloads.",
    visual: "INFRA",
    tags: ["AWS", "Terraform", "Fargate", "Serverless"],
  },
];

const WaveformVisual = () => (
  <div className="flex items-center gap-[2px] h-8">
    {Array.from({ length: 20 }, (_, i) => (
      <motion.div
        key={i}
        className="w-[2px] bg-primary/40 rounded-full"
        animate={{ height: [4, Math.random() * 28 + 4, 4] }}
        transition={{ duration: 1.2, delay: i * 0.05, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const NeuralPulse = () => (
  <div className="relative w-16 h-16">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute inset-0 rounded-full border border-primary/20"
        animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
        transition={{ duration: 2, delay: i * 0.6, repeat: Infinity }}
      />
    ))}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
    </div>
  </div>
);

const TokenStream = () => (
  <div className="font-display text-[10px] text-primary/30 leading-tight overflow-hidden h-12">
    <motion.div
      animate={{ y: [0, -60] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      {"[CLS] input_ids attention_mask token_type logits hidden_states embeddings [SEP] pooler_output loss labels predictions softmax argmax beam_search top_k temperature [PAD]"
        .split(" ")
        .map((t, i) => (
          <span key={i} className={i % 3 === 0 ? "text-primary/50" : ""}>{t} </span>
        ))}
    </motion.div>
  </div>
);

const AgentTree = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="opacity-60">
    <circle cx="24" cy="8" r="3" className="fill-primary" />
    <circle cx="12" cy="28" r="3" className="fill-primary" />
    <circle cx="36" cy="28" r="3" className="fill-primary" />
    <circle cx="6" cy="42" r="2.5" className="fill-primary/60" />
    <circle cx="18" cy="42" r="2.5" className="fill-primary/60" />
    <circle cx="30" cy="42" r="2.5" className="fill-primary/60" />
    <circle cx="42" cy="42" r="2.5" className="fill-primary/60" />
    <line x1="24" y1="11" x2="12" y2="25" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
    <line x1="24" y1="11" x2="36" y2="25" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
    <line x1="12" y1="31" x2="6" y2="39.5" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
    <line x1="12" y1="31" x2="18" y2="39.5" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
    <line x1="36" y1="31" x2="30" y2="39.5" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
    <line x1="36" y1="31" x2="42" y2="39.5" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
  </svg>
);

const GPUBars = () => (
  <div className="flex items-end gap-[3px] h-8">
    {[90, 75, 95, 60, 85, 70, 100, 55].map((pct, i) => (
      <motion.div
        key={i}
        className="w-[4px] rounded-sm bg-primary"
        initial={{ height: 0 }}
        animate={{ height: `${pct}%`, opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, ease: "easeInOut" }}
        style={{ maxHeight: "100%" }}
      />
    ))}
  </div>
);

const InfraGrid = () => (
  <div className="grid grid-cols-4 gap-[3px]">
    {Array.from({ length: 12 }, (_, i) => (
      <motion.div
        key={i}
        className="w-2 h-2 rounded-[2px] bg-primary"
        animate={{ opacity: [0.15, 0.8, 0.15] }}
        transition={{ duration: 2, delay: i * 0.18, repeat: Infinity }}
      />
    ))}
  </div>
);

const getVisual = (type: string) => {
  switch (type) {
    case "VOICE": return <WaveformVisual />;
    case "SLM": return <TokenStream />;
    case "CONV": return <NeuralPulse />;
    case "AGENT": return <AgentTree />;
    case "GPU": return <GPUBars />;
    case "INFRA": return <InfraGrid />;
    default: return <NeuralPulse />;
  }
};

const FocusSection = () => {
  return (
    <section id="focus" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px] -translate-y-1/2" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-display text-sm text-primary tracking-widest uppercase">&gt; 00</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-4">Focus Areas</h2>
          <p className="text-muted-foreground leading-relaxed">
            Deep specialization in Small Language Models and Conversational AI — 
            building systems that understand, reason, and communicate naturally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative p-6 rounded-lg bg-card border border-glow hover:border-primary/40 transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-lg bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-md bg-secondary">
                    <area.icon className="w-5 h-5 text-primary" />
                  </div>
                  {getVisual(area.visual)}
                </div>

                <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {area.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {area.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] rounded bg-secondary text-primary font-display tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
