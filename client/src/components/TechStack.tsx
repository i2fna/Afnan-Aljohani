import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/lib/content";
import { Reveal, SectionHead, NeuralCluster } from "./shared";
import { Brain, Database, Wrench, Palette } from "lucide-react";

const catIcons = [Brain, Database, Wrench, Palette];

export default function TechStack() {
  const { lang } = useLanguage();
  const t = ui[lang].tech;

  return (
    <section id="skills" className="py-28 relative">
      <NeuralCluster className="bottom-20 start-[6%]" size={110} opacity={0.14} />
      <div className="container">
        <SectionHead
          index={t.index}
          label={t.label}
          title={<span className="font-mono gradient-text">{t.title}</span>}
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
          {t.categories.map((cat, i) => {
            const Icon = catIcons[i % catIcons.length];
            return (
              <Reveal key={i} delay={i * 90} className={i % 2 === 1 ? "md:translate-y-6" : ""}>
                <div className="glass-card p-7 h-full group hover:border-accent/50 transition-all duration-400">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg">{cat.title}</h3>
                      <span className="text-xs font-mono text-muted-foreground">{cat.titleEn}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-[13px] rounded-lg bg-secondary/70 border border-border/60 text-secondary-foreground hover:border-accent/60 hover:text-accent hover:bg-accent/10 transition-all duration-300 cursor-default font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Languages + attributes */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mt-6">
          <Reveal delay={100}>
            <div className="glass-card p-7 h-full">
              <h3 className="font-display font-bold text-lg mb-5">{t.languagesTitle}</h3>
              <div className="space-y-4">
                {t.languages.map((l) => (
                  <div key={l.name} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                    <span className="font-semibold">{l.name}</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-accent/10 border border-accent/20 text-accent font-mono">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="glass-card p-7 h-full">
              <h3 className="font-display font-bold text-lg mb-5">
                {lang === "ar" ? "سمات مهنية" : "Professional Attributes"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t.attributes.map((a) => (
                  <span key={a} className="px-3 py-1.5 text-[13px] rounded-lg bg-orange-500/10 border border-orange-500/25 text-orange-400/90">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
