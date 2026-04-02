import { motion } from "framer-motion";

const techOrbit = [
  { name: "LLaMA", angle: 0, ring: 1 },
  { name: "Mistral", angle: 45, ring: 1 },
  { name: "BERT", angle: 90, ring: 1 },
  { name: "RAG", angle: 135, ring: 1 },
  { name: "PyTorch", angle: 180, ring: 1 },
  { name: "LangChain", angle: 225, ring: 1 },
  { name: "CrewAI", angle: 270, ring: 1 },
  { name: "MCP", angle: 315, ring: 1 },
  { name: "AWS", angle: 20, ring: 2 },
  { name: "Docker", angle: 80, ring: 2 },
  { name: "WebRTC", angle: 140, ring: 2 },
  { name: "LiveKit", angle: 200, ring: 2 },
  { name: "Terraform", angle: 260, ring: 2 },
  { name: "FastAPI", angle: 320, ring: 2 },
];

const TechOrbit = () => {
  const ring1Radius = 120;
  const ring2Radius = 190;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="font-display text-sm text-primary tracking-widest uppercase">&gt; ecosystem</span>
          <h2 className="text-2xl md:text-4xl font-display font-bold mt-2">Tech Ecosystem</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto w-[320px] h-[320px] md:w-[450px] md:h-[450px]"
        >
          {/* Orbit rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="absolute rounded-full border border-primary/10"
              style={{ width: ring1Radius * 2, height: ring1Radius * 2 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute rounded-full border border-accent/10"
              style={{ width: ring2Radius * 2, height: ring2Radius * 2 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Center node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center glow-primary">
                <span className="font-display text-xs text-primary font-bold">AI</span>
              </div>
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-primary/10"
                  animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                  transition={{ duration: 3, delay: i * 1, repeat: Infinity }}
                />
              ))}
            </div>
          </div>

          {/* Tech nodes */}
          {techOrbit.map((tech, i) => {
            const radius = tech.ring === 1 ? ring1Radius : ring2Radius;
            const scale = typeof window !== "undefined" && window.innerWidth < 768 ? 0.71 : 1;
            const rad = (tech.angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius * scale;
            const y = Math.sin(rad) * radius * scale;

            return (
              <motion.div
                key={tech.name}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ x, y }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 + 0.3 }}
              >
                <div className="px-2.5 py-1 rounded-full bg-card border border-glow hover:border-primary/40 transition-colors cursor-default">
                  <span className="font-display text-[10px] text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechOrbit;
