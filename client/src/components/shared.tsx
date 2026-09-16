import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

/* Animated section reveal wrapper */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}

/* Section header with numbered editorial label */
export function SectionHead({
  index,
  label,
  title,
  subtitle,
  align = "start",
}: {
  index?: string;
  label: string;
  title: ReactNode;
  subtitle?: string;
  align?: "start" | "center";
}) {
  const { lang } = useLanguage();
  return (
    <Reveal className={`mb-14 ${align === "center" ? "text-center" : ""}`}>
      <div className={`flex items-center gap-4 mb-5 ${align === "center" ? "justify-center" : ""}`}>
        <div className="w-14 h-px bg-gradient-to-r from-accent to-orange-500" />
        <span className="text-xs font-mono tracking-[0.3em] text-muted-foreground uppercase">
          {index ? `${index} — ` : ""}{label}
        </span>
        {align === "center" && <div className="w-14 h-px bg-gradient-to-l from-accent to-orange-500" />}
      </div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-muted-foreground text-lg max-w-2xl ${align === "center" ? "mx-auto" : ""} ${lang === "en" ? "font-body" : ""}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

/* Decorative neural node cluster */
export function NeuralCluster({
  className = "",
  size = 120,
  opacity = 0.2,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ width: size, height: size, opacity }} aria-hidden>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="4" fill="#8B5CF6" className="animate-pulse" />
        <circle cx="20" cy="25" r="2" fill="#F97316" />
        <circle cx="80" cy="25" r="2" fill="#8B5CF6" />
        <circle cx="22" cy="76" r="2" fill="#8B5CF6" />
        <circle cx="78" cy="76" r="2" fill="#F97316" />
        <line x1="50" y1="50" x2="20" y2="25" stroke="#8B5CF6" strokeWidth="0.5" opacity="0.6" />
        <line x1="50" y1="50" x2="80" y2="25" stroke="#8B5CF6" strokeWidth="0.5" opacity="0.6" />
        <line x1="50" y1="50" x2="22" y2="76" stroke="#F97316" strokeWidth="0.5" opacity="0.6" />
        <line x1="50" y1="50" x2="78" y2="76" stroke="#F97316" strokeWidth="0.5" opacity="0.6" />
        <line x1="20" y1="25" x2="80" y2="25" stroke="#8B5CF6" strokeWidth="0.3" opacity="0.3" />
        <line x1="22" y1="76" x2="78" y2="76" stroke="#F97316" strokeWidth="0.3" opacity="0.3" />
      </svg>
    </div>
  );
}
