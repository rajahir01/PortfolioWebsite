import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI / ML",
    skills: ["LLMs (BERT, LLaMA, Mistral)", "RAG", "LoRA/QLoRA", "Diffusion Models", "PyTorch", "LangChain", "CrewAI", "MCP", "Wav2Lip", "Eleven Labs", "Vector Search"],
  },
  {
    title: "Backend",
    skills: [".NET Core", "NestJS", "Node.js", "FastAPI", "Express.js", "GraphQL", "REST APIs", "WebSockets", "SSE", "WebRTC"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (Lambda, Fargate, ECS, Bedrock, SageMaker)", "Azure (Functions, OpenAI, CI/CD)", "Terraform", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Go", "C#", "C/C++"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "ChromaDB", "Qdrant", "DynamoDB", "Firebase"],
  },
  {
    title: "Voice & Monitoring",
    skills: ["LiveKit", "Vapi", "WebRTC", "Elasticsearch", "Prometheus", "Grafana"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-display text-sm text-primary tracking-widest uppercase">&gt; 01</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">Tech Stack</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="p-6 rounded-lg bg-card border border-glow hover:border-primary/30 transition-colors group"
            >
              <h3 className="font-display text-sm font-semibold text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-body"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
