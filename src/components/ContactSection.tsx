import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="font-display text-sm text-primary tracking-widest uppercase">&gt; 04</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-6">Let's Connect</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Interested in collaborating on AI-driven projects or need an experienced engineer 
            for your team? I'd love to hear from you.
          </p>

          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-sm font-semibold rounded-md hover:opacity-90 transition-opacity glow-primary"
          >
            Say Hello <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="flex items-center justify-center gap-6 mt-12">
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-display text-sm">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-display text-sm">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-display text-sm">
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container px-6 mt-24">
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xs text-muted-foreground">
            © {new Date().getFullYear()} · Built with precision
          </span>
          <span className="font-display text-xs text-muted-foreground">
            AI Engineer · Full-Stack Developer
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
