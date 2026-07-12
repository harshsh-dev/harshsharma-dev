import { motion } from "framer-motion";
import { Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons.jsx";
import SectionWrapper from "../layout/SectionWrapper.jsx";
import InteractiveTerminal from "../ui/InteractiveTerminal.jsx";
import { personal, experience, techStack } from "../../data/portfolio.js";

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      label="06 · Contact"
      title="Let's build something fast and resilient."
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="pointer-events-none absolute inset-x-0 -bottom-20 -z-10 mx-auto h-[300px] w-[70%] rounded-full bg-[var(--color-accent)] opacity-[0.1] blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <InteractiveTerminal
            experience={experience}
            languages={techStack.languages}
          />
        </motion.div>

        <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)]">
          Tip: try <span className="text-[var(--color-accent)]">resume</span>,{" "}
          <span className="text-[var(--color-accent)]">help</span>, or{" "}
          <span className="text-[var(--color-accent)]">experience</span> ·
          ⌘/Ctrl+L to clear
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={`mailto:${personal.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 font-mono text-xs uppercase tracking-wider text-[var(--color-bg)] transition-all duration-300 hover:shadow-glow-soft"
          >
            <Mail className="size-4" />
            Send me an email
          </a>
          <a
            href={personal.resume}
            download="Harsh_Sharma_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/60 bg-[var(--color-accent-dim)] px-6 py-3 font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
          >
            <FileDown className="size-4" />
            Download Resume
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-6 py-3 font-mono text-xs uppercase tracking-wider text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-accent)]/60 hover:text-[var(--color-accent)]"
          >
            <LinkedinIcon className="size-4" />
            LinkedIn
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-6 py-3 font-mono text-xs uppercase tracking-wider text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-accent)]/60 hover:text-[var(--color-accent)]"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
        </motion.div>
      </div>

      <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] pt-6 font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)]">
        <span>© {new Date().getFullYear()} Harsh Sharma</span>
        <span>Built with React · Framer Motion · Tailwind</span>
      </footer>
    </SectionWrapper>
  );
}
