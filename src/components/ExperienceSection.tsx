import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI Engineer",
    company: "Wartinlabs",
    period: "Mar 2025 – Present",
    location: "Remote",
    highlights: [
      "Built diffusion-based interior/exterior design app using ComfyUI on serverless AWS architecture",
      "Designed real estate AI voice/text agents with Eleven Labs, LiveKit, and CrewAI on AWS microservices",
      "Engineered AI psychiatrist system using MCP for Cognitive Behavioral Therapy sessions",
      "Developed real-time digital human avatar with Wav2Lip + WebRTC on NVIDIA H100 GPUs",
      "Built VoIP calling agent with Telnyx and WhatsApp AI agent using Business API",
      "Owned IaC for AWS Fargate/ECS deployments using Terraform with auto-scaling",
    ],
    tech: ["Python", "PyTorch", "ComfyUI", "CrewAI", "MCP", "Wav2Lip", "WebRTC", "AWS", "Terraform"],
  },
  {
    role: "Software Development Engineer II",
    company: "Eazybe",
    period: "Nov 2024 – Mar 2025",
    location: "India",
    highlights: [
      "Integrated 6+ CRM platforms with GPT-powered chat analysis for actionable insights",
      "Developed scalable NestJS APIs handling 1M+ records/day with Redis caching",
      "Built AI-driven automation workflows for lead handling, boosting conversion rates",
    ],
    tech: ["Node.js", "NestJS", "TypeScript", "GraphQL", "PostgreSQL", "Redis", "Docker", "AWS"],
  },
  {
    role: "Associate Software Engineer",
    company: "Signatech Services",
    period: "Aug 2022 – Oct 2024",
    location: "India",
    highlights: [
      "Architected 50+ REST APIs in .NET with WebSockets, improving data exchange efficiency by 40%",
      "Built real-time audience polling app with SSE/WebSockets, reducing latency by 35%",
      "Designed RBAC system managing 100K+ users across enterprise applications",
      "Developed NL-to-SQL data insights platform with LangChain and ChromaDB in under 2s response time",
    ],
    tech: [".NET Core", "NestJS", "Flask", "LangChain", "ChromaDB", "OpenAI", "Azure", "Docker"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-display text-sm text-primary tracking-widest uppercase">&gt; 02</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px] glow-primary" />

                <div className="p-6 rounded-lg bg-card border border-glow hover:border-primary/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-display text-sm">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground font-display mt-1 md:mt-0">
                      {exp.period} · {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
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
      </div>
    </section>
  );
};

export default ExperienceSection;
