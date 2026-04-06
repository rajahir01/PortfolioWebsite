import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Mail, Github, Linkedin } from "lucide-react";
import { chapters, TimelineChapter } from "@/components/JourneySection";

// ─── Scroll Progress ──────────────────────────────────────────────────────────

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left"
      style={{ scaleX }}
    />
  );
};

// ─── Sidebar Nav ──────────────────────────────────────────────────────────────

const SideNav = ({ active }: { active: number }) => (
  <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
    {chapters.map((c, i) => (
      <a key={c.id} href={`#chapter-${c.id}`} className="group flex items-center gap-3 justify-end">
        <motion.span
          animate={{ opacity: i === active ? 1 : 0, x: i === active ? 0 : 6 }}
          transition={{ duration: 0.2 }}
          className="font-display text-[10px] uppercase tracking-widest text-primary"
        >
          {c.label}
        </motion.span>
        <div className={`rounded-full transition-all duration-300 ${
          i === active ? "w-2 h-2 bg-primary" : "w-1.5 h-1.5 bg-muted-foreground/30 group-hover:bg-primary/50"
        }`} />
      </a>
    ))}
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const Story = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveChapter(idx);
          }
        });
      },
      { threshold: 0.3 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <SideNav active={activeChapter} />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 bg-background/80 backdrop-blur-md border-b border-border">
        <Link
          to="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-display text-xs uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Portfolio
        </Link>
        <span className="font-display text-xs text-muted-foreground uppercase tracking-[0.3em]">The Story</span>
        <div className="w-24" />
      </nav>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-14">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[140px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-display text-[11px] tracking-[0.4em] text-primary uppercase mb-6">
            A career in five chapters
          </motion.p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-[0.92] tracking-tight mb-6">
            <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="block text-foreground">From Curiosity</motion.span>
            <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }} className="block gradient-text">to Frontier</motion.span>
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed mb-10">
            How a single question about language models became four years of building AI systems at scale, in production, for real users.
          </motion.p>

          {/* Chapter pills */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap justify-center gap-2 mb-10">
            {chapters.map((c) => (
              <a key={c.id} href={`#chapter-${c.id}`} className="px-3 py-1.5 rounded-full bg-muted border border-border font-display text-[10px] text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors uppercase tracking-wider">
                {c.id} · {c.label}
              </a>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }} className="flex flex-col items-center gap-2">
            <span className="font-display text-[10px] uppercase tracking-widest text-muted-foreground/50">Scroll to begin</span>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} className="w-px h-10 bg-gradient-to-b from-primary/40 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-10">
        {chapters.map((chapter, i) => (
          <div key={chapter.id} ref={(el) => { sectionRefs.current[i] = el; }}>
            {i > 0 && (
              <div className="flex items-center gap-4 pt-8">
                <div className="h-px flex-1 bg-border" />
                <span className="font-display text-[10px] text-muted-foreground/50 uppercase tracking-[0.3em]">Chapter {chapter.id}</span>
                <div className="h-px flex-1 bg-border" />
              </div>
            )}
            <TimelineChapter chapter={chapter} index={i} isActive={activeChapter === i} />
          </div>
        ))}
        <div className="absolute left-4 md:left-1/2 bottom-0 w-2.5 h-2.5 rounded-full border-2 border-border bg-background md:-translate-x-1/2" />
      </div>

      {/* Epilogue */}
      <section className="py-28 relative overflow-hidden border-t border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[120px]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-2xl mx-auto px-6 text-center"
        >
          <span className="font-display text-[10px] tracking-[0.4em] text-primary uppercase mb-4 block">Epilogue</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 leading-tight">
            The next chapter <span className="gradient-text">is unwritten.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 text-sm">
            Every great system starts with a conversation. If you're building something that requires precise AI — a voice agent, an autonomous pipeline, a domain-specific model — I'd like to hear about it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {[
              { icon: Github, label: "GitHub", sub: "Open source work", href: "#" },
              { icon: Linkedin, label: "LinkedIn", sub: "Professional history", href: "#" },
              { icon: Mail, label: "Email", sub: "Direct line", href: "mailto:hello@example.com" },
            ].map(({ icon: Icon, label, sub, href }) => (
              <a key={label} href={href} className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{label}</span>
                <span className="font-display text-[10px] text-muted-foreground uppercase tracking-wider">{sub}</span>
              </a>
            ))}
          </div>

          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display text-xs font-semibold rounded-md hover:opacity-90 transition-opacity uppercase tracking-wider">
            View Portfolio <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </section>

      <div className="border-t border-border py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-3 max-w-5xl mx-auto">
        <span className="font-display text-xs text-muted-foreground">© {new Date().getFullYear()} · Built with precision</span>
        <Link to="/" className="font-display text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">← Back to portfolio</Link>
      </div>
    </div>
  );
};

export default Story;
