import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/lib/content";
import { Reveal, SectionHead } from "./shared";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Journey() {
  const { lang } = useLanguage();
  const t = ui[lang].journey;

  return (
    <section id="journey" className="py-28 relative">
      <div className="container">
        <SectionHead
          index={t.index}
          label={t.label}
          title={<span className="gradient-text">{t.title}</span>}
          subtitle={t.subtitle}
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Spine */}
          <div className="absolute start-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-orange-500/60 to-accent/20" />

          <div className="space-y-10">
            {t.items.map((item, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="relative ps-12 group">
                  {/* Node */}
                  <div className="absolute start-0 top-1.5 w-[27px] h-[27px] rounded-full glass-card flex items-center justify-center group-hover:border-accent/70 group-hover:shadow-[0_0_18px_oklch(0.65_0.25_290/0.4)] transition-all duration-400">
                    {item.type === "education" ? (
                      <GraduationCap className="w-3.5 h-3.5 text-orange-500" />
                    ) : (
                      <Briefcase className="w-3.5 h-3.5 text-accent" />
                    )}
                  </div>

                  <div className="glass-card p-6 md:p-7 hover:border-accent/50 hover:-translate-y-0.5 transition-all duration-400">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                      <span className="px-3 py-1 text-xs rounded-full bg-accent/10 border border-accent/20 text-accent font-mono">
                        {item.period}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {item.type === "education" ? (lang === "ar" ? "تعليم" : "Education") : (lang === "ar" ? "خبرة" : "Experience")}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-1 group-hover:text-accent transition-colors duration-300">
                      {item.role}
                    </h3>
                    <p className="text-accent/90 font-medium text-sm mb-3 font-mono">{item.org}</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                    <div className="pt-4 border-t border-border/60">
                      <span className="text-xs font-mono text-orange-500/90 tracking-wide uppercase">
                        {ui[lang].project.contribution}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{item.contribution}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
