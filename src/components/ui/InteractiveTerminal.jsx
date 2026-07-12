import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { personal } from "../../data/portfolio.js";

const PROMPT = "harsh@portfolio ~ %";

const stripUrl = (u) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

function renderContact() {
  return [
    { kind: "output", text: `  email     ${personal.email}` },
    { kind: "output", text: `  linkedin  ${stripUrl(personal.linkedin)}` },
    { kind: "output", text: `  github    ${stripUrl(personal.github)}` },
    { kind: "output", text: `  location  ${personal.location}` },
  ];
}

const HELP_COMMANDS = [
  ["help", "show this help"],
  ["whoami", "who is Harsh?"],
  ["resume", "download my resume (PDF)"],
  ["contact", "email · linkedin · github · location"],
  ["email", "open your mail client"],
  ["github", "open GitHub profile"],
  ["linkedin", "open LinkedIn profile"],
  ["experience", "list companies I've shipped at"],
  ["stack", "languages I work in"],
  ["clear", "clear the terminal"],
];

function renderHelp() {
  return [
    { kind: "heading", text: "Available commands:" },
    ...HELP_COMMANDS.map(([cmd, desc]) => ({ kind: "help", cmd, desc })),
  ];
}

function renderExperience(experience) {
  return experience.map((e) => ({
    kind: "output",
    text: `  ${e.period.padEnd(22)} ${e.company} · ${e.role}`,
  }));
}

function renderStack(languages) {
  const bar = (lvl) => {
    const filled = Math.round(lvl / 10);
    return "█".repeat(filled) + "░".repeat(10 - filled);
  };
  return languages.map((l) => ({
    kind: "output",
    text: `  ${l.name.padEnd(8)} ${bar(l.level)}  ${l.level}%`,
  }));
}

function downloadResume() {
  const link = document.createElement("a");
  link.href = personal.resume;
  link.download = "Harsh_Sharma_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function InteractiveTerminal({ experience = [], languages = [], className = "" }) {
  const wrapRef = useRef(null);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const seededRef = useRef(false);
  const inView = useInView(wrapRef, { once: true, margin: "-80px" });

  const [history, setHistory] = useState([]);
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyCursor, setHistoryCursor] = useState(-1);

  // Print the help banner once when the terminal comes into view.
  // Guarded by a ref so React StrictMode's double-invoked effect can't duplicate it.
  useEffect(() => {
    if (!inView || seededRef.current) return;
    seededRef.current = true;
    setHistory([
      { kind: "hint", text: `Welcome — ${personal.name}. Type a command to explore.` },
      { kind: "output", text: "" },
      ...renderHelp(),
      { kind: "output", text: "" },
    ]);
    setReady(true);
  }, [inView]);

  // Keep scrolled to bottom.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history, ready]);

  // Focus input once ready.
  useEffect(() => {
    if (ready && inputRef.current) inputRef.current.focus();
  }, [ready]);

  const runCommand = useCallback(
    (raw) => {
      const cmd = raw.trim().toLowerCase();
      const echo = { kind: "command", text: raw };
      let output = [];

      if (cmd === "") {
        setHistory((h) => [...h, echo]);
        return;
      }
      if (cmd === "clear" || cmd === "cls") {
        setHistory([]);
        return;
      }
      if (cmd === "help" || cmd === "?") {
        output = renderHelp();
      } else if (cmd === "whoami") {
        output = [{ kind: "output", text: `  ${personal.name} — ${personal.title}` }];
      } else if (cmd === "contact") {
        output = renderContact();
      } else if (
        cmd === "resume" ||
        cmd === "download resume" ||
        cmd === "resume --download" ||
        cmd === "download"
      ) {
        downloadResume();
        output = [
          { kind: "output", text: "  → fetching Harsh_Sharma_Resume.pdf ..." },
          { kind: "output", text: "  ✓ download started. Check your downloads folder." },
        ];
      } else if (cmd === "email") {
        window.location.href = `mailto:${personal.email}`;
        output = [{ kind: "output", text: `  ✉  opening mailto:${personal.email}` }];
      } else if (cmd === "github") {
        window.open(personal.github, "_blank", "noreferrer");
        output = [{ kind: "output", text: `  ↗ opening ${stripUrl(personal.github)}` }];
      } else if (cmd === "linkedin") {
        window.open(personal.linkedin, "_blank", "noreferrer");
        output = [{ kind: "output", text: `  ↗ opening ${stripUrl(personal.linkedin)}` }];
      } else if (cmd === "experience" || cmd === "ls experience") {
        output = renderExperience(experience);
      } else if (cmd === "stack" || cmd === "skills") {
        output = renderStack(languages);
      } else if (cmd === "ls") {
        output = [
          { kind: "output", text: "  about  stack  experience  projects  github  contact" },
        ];
      } else {
        output = [
          {
            kind: "output",
            text: `  command not found: ${raw} — try 'help'`,
          },
        ];
      }

      setHistory((h) => [...h, echo, ...output]);
    },
    [experience, languages]
  );

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = input;
      runCommand(value);
      if (value.trim()) {
        setCmdHistory((h) => [value, ...h].slice(0, 30));
      }
      setInput("");
      setHistoryCursor(-1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const next = Math.min(historyCursor + 1, cmdHistory.length - 1);
      setHistoryCursor(next);
      setInput(cmdHistory[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = historyCursor - 1;
      if (next < 0) {
        setHistoryCursor(-1);
        setInput("");
      } else {
        setHistoryCursor(next);
        setInput(cmdHistory[next] ?? "");
      }
    } else if (e.key === "l" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      setHistory([]);
    }
  };

  const focusInput = () => inputRef.current?.focus();

  const renderedHistory = useMemo(
    () =>
      history.map((line, i) => {
        if (line.kind === "command") {
          return (
            <div key={i} className="flex gap-2 whitespace-pre">
              <span className="text-[var(--color-accent)]">{PROMPT}</span>
              <span>{line.text}</span>
            </div>
          );
        }
        if (line.kind === "hint") {
          return (
            <div
              key={i}
              className="whitespace-pre-wrap text-[var(--color-text-muted)]"
            >
              {line.text}
            </div>
          );
        }
        if (line.kind === "heading") {
          return (
            <div
              key={i}
              className="mt-1 whitespace-pre font-mono text-[var(--color-text-primary)]"
            >
              {line.text}
            </div>
          );
        }
        if (line.kind === "help") {
          return (
            <div
              key={i}
              className="flex items-baseline gap-4 pl-4 font-mono"
            >
              <span className="w-28 shrink-0 text-[var(--color-accent)]">
                {line.cmd}
              </span>
              <span className="text-[var(--color-text-muted)]">
                {line.desc}
              </span>
            </div>
          );
        }
        return (
          <div key={i} className="whitespace-pre text-[var(--color-text-primary)]">
            {line.text || " "}
          </div>
        );
      }),
    [history]
  );

  return (
    <div
      ref={wrapRef}
      onClick={focusInput}
      className={`overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-sm shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-black/30 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-[var(--color-text-muted)]">
          {PROMPT}
        </span>
      </div>
      <div
        ref={scrollRef}
        className="max-h-[440px] overflow-y-auto p-6 font-mono text-sm leading-relaxed text-[var(--color-text-primary)] sm:text-base"
      >
        {renderedHistory}

        {ready && (
          <div className="mt-1 flex items-center gap-2">
            <span className="text-[var(--color-accent)]">{PROMPT}</span>
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label="Terminal input"
                className="w-full bg-transparent font-mono text-sm text-[var(--color-text-primary)] caret-[var(--color-accent)] outline-none sm:text-base"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
