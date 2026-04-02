import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import HeroScene from "./HeroScene";

const roles = [
  "SLM Specialist",
  "Conversational AI Engineer",
  "Voice Agent Architect",
  "RAG Systems Builder",
  "Full-Stack AI Developer",
];

const TypingEffect = () => {
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[current];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(role.slice(0, text.length + 1));
          if (text.length === role.length) {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          setText(role.slice(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setCurrent((c) => (c + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, current]);

  return (
    <span className="text-primary">
      {text}
      <span className="animate-pulse-glow">|</span>
    </span>
  );
};

const FloatingParticles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const AnimatedCounter = ({ value, label }: { value: number; label: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [value]);

  return (
    <div className="text-center">
      <div className="font-display text-3xl md:text-4xl font-bold text-primary glow-text">
        {display}+
      </div>
      <div className="text-xs text-muted-foreground font-display uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
};

const NeuralNetworkBg = () => {
  const nodes = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        cx: 10 + Math.random() * 80,
        cy: 10 + Math.random() * 80,
      })),
    []
  );

  const connections = useMemo(() => {
    const conns: { x1: number; y1: number; x2: number; y2: number; id: string }[] = [];
    nodes.forEach((a, i) => {
      nodes.forEach((b, j) => {
        if (j > i && Math.hypot(a.cx - b.cx, a.cy - b.cy) < 40) {
          conns.push({ x1: a.cx, y1: a.cy, x2: b.cx, y2: b.cy, id: `${i}-${j}` });
        }
      });
    });
    return conns;
  }, [nodes]);

  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
      {connections.map((c) => (
        <motion.line
          key={c.id}
          x1={`${c.x1}%`} y1={`${c.y1}%`} x2={`${c.x2}%`} y2={`${c.y2}%`}
          stroke="hsl(var(--primary))"
          strokeWidth="0.15"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: Math.random() * 2 }}
        />
      ))}
      {nodes.map((n) => (
        <motion.circle
          key={n.id}
          cx={`${n.cx}%`} cy={`${n.cy}%`} r="0.5"
          fill="hsl(var(--primary))"
          animate={{ opacity: [0.3, 1, 0.3], r: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, delay: Math.random() * 2, repeat: Infinity }}
        />
      ))}
    </svg>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      <NeuralNetworkBg />
      <FloatingParticles />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      <motion.div
        className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-primary/3 blur-[80px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-display text-sm tracking-widest text-muted-foreground mb-6"
          >
            &gt; <TypingEffect />
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-6">
            <span className="text-foreground">Building</span>
            <br />
            <span className="gradient-text">Intelligent</span>
            <br />
            <span className="text-foreground">Systems</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            4+ years crafting scalable AI applications — specializing in{" "}
            <span className="text-primary font-medium">Small Language Models</span>,{" "}
            <span className="text-primary font-medium">Conversational AI</span>, and{" "}
            <span className="text-primary font-medium">Voice Agents</span>. 
            From RAG pipelines to real-time digital avatars.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display text-sm font-semibold rounded-md hover:opacity-90 transition-opacity glow-primary"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-glow text-foreground font-display text-sm font-semibold rounded-md hover:bg-secondary transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-8 md:gap-12 mt-14 pt-8 border-t border-border"
          >
            <AnimatedCounter value={4} label="Years Exp" />
            <AnimatedCounter value={15} label="AI Projects" />
            <AnimatedCounter value={6} label="CRM Integrations" />
            <AnimatedCounter value={100} label="K Users Served" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-5 mt-8"
          >
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#focus" className="text-muted-foreground hover:text-primary transition-colors animate-bounce block">
            <ArrowDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
