import { motion } from "framer-motion";
import { CheckCircle, Clock, ArrowUpRight, Zap, Shield, MessageSquare } from "lucide-react";

const services = [
  {
    title: "AI System Design & Build",
    description:
      "End-to-end development of AI-powered applications — RAG pipelines, voice agents, agentic workflows, and SLM fine-tuning for your specific domain.",
    deliverables: ["Architecture + implementation", "API integration", "Deployment on AWS / Azure"],
  },
  {
    title: "Conversational AI & Voice",
    description:
      "Production-grade chatbots and real-time voice agents with sub-second latency. Built with LiveKit, Vapi, Eleven Labs, and custom LLM backends.",
    deliverables: ["Multi-turn dialogue systems", "CRM / tool integrations", "Voice pipeline setup"],
  },
  {
    title: "AI Infrastructure & MLOps",
    description:
      "Scalable, cost-efficient infrastructure for ML workloads. Serverless GPU inference, auto-scaling pipelines, and IaC on AWS Fargate / ECS.",
    deliverables: ["Terraform IaC", "Model serving setup", "Monitoring & observability"],
  },
  {
    title: "Technical Consulting",
    description:
      "Architecture reviews, AI strategy, and hands-on guidance for teams moving into production AI. From proof-of-concept to full deployment plans.",
    deliverables: ["System design review", "Tech stack recommendation", "Roadmap + scope definition"],
  },
];

const workingStyle = [
  {
    icon: Clock,
    title: "Fast turnaround",
    body: "Most scoped projects start within a week. I keep communication tight and ship iteratively.",
  },
  {
    icon: Zap,
    title: "Production-ready code",
    body: "No throwaway prototypes. Everything is built to be deployed, maintained, and scaled.",
  },
  {
    icon: Shield,
    title: "Full ownership",
    body: "You get complete source code, documentation, and handoff. No lock-in, no surprises.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    body: "Weekly updates, async-first, with structured check-ins aligned to your timezone.",
  },
];

const FreelanceSection = () => {
  return (
    <section id="freelance" className="py-24 relative border-t border-border">
      <div className="container px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display text-sm text-primary tracking-widest uppercase">&gt; 04</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 font-display text-[10px] text-primary uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
              Available for projects
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-4">Freelance & Consulting</h2>
          <p className="text-muted-foreground leading-relaxed text-base">
            I take on select freelance engagements alongside full-time work — focused on AI systems where
            deep expertise makes a measurable difference. Fixed-scope projects or ongoing retainers.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-1.5">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* How I work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-sm text-muted-foreground uppercase tracking-widest mb-8">How I work</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workingStyle.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex flex-col gap-3 p-5 rounded-lg bg-card border border-border"
              >
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-foreground mb-1">{item.title}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/20"
        >
          <div>
            <div className="font-display text-lg font-semibold text-foreground mb-1">
              Have a project in mind?
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Share a brief — scope, timeline, and what you're building. I'll respond within 24 hours.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-display text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              Start a conversation <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FreelanceSection;
