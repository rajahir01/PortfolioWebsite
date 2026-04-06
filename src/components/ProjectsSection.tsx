import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ProjectsScene from "./ProjectsScene";

const projects = [
  {
    title: "AI Real Estate Voice/Text Agent",
    description:
      "Multi-agent real estate assistant enabling natural voice/text property interactions. Fully serverless backend on AWS Fargate with Cognito auth, DynamoDB, and API Gateway.",
    tech: ["Eleven Labs", "LiveKit", "CrewAI", "AWS", "Terraform"],
    accent: "from-primary/10 to-primary/0",
    border: "hover:border-primary/30",
    tag: "Voice AI",
  },
  {
    title: "Real-Time Digital Human Avatar",
    description:
      "Lip-synced digital human system with live conversational capabilities using WebRTC. Trained on NVIDIA A100/H100 GPUs achieving ultra-low latency inference.",
    tech: ["Wav2Lip", "WebRTC", "PyTorch", "NVIDIA H100"],
    accent: "from-accent/10 to-accent/0",
    border: "hover:border-accent/30",
    tag: "Real-Time AI",
  },
  {
    title: "AI Psychiatrist (CBT System)",
    description:
      "MCP-based AI mental health system delivering personalized Cognitive Behavioral Therapy sessions with goal tracking, outcome assessment, and adaptive dialogue.",
    tech: ["MCP", "NLP", "Python"],
    accent: "from-primary/10 to-primary/0",
    border: "hover:border-primary/30",
    tag: "Agentic AI",
  },
  {
    title: "SignaInsight – NLP Data Platform",
    description:
      "Natural language-to-SQL data insights platform with vector search and Azure Speech integration. Business users query large datasets conversationally in under 2 seconds.",
    tech: ["LangChain", "ChromaDB", "OpenAI", "Flask", "Azure"],
    accent: "from-accent/10 to-accent/0",
    border: "hover:border-accent/30",
    tag: "NLP",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <ProjectsScene />
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-display text-sm text-primary tracking-widest uppercase">&gt; 03</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">Key Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-6 rounded-lg bg-card border border-glow transition-all duration-300 overflow-hidden ${project.border}`}
            >
              {/* Colored top bar */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accent.replace("/0", "/80").replace("/20", "/80")}`} />
              {/* Subtle gradient wash on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-[10px] font-display uppercase tracking-widest text-muted-foreground mb-1 block">{project.tag}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs rounded bg-secondary text-primary font-display">
                    {t}
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

export default ProjectsSection;
