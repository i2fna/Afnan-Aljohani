import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/lib/content";
import { Reveal, SectionHead } from "./shared";

export default function CreativeIdentity() {
  const { lang } = useLanguage();
  const t = ui[lang].identity;

  return (
    <section id="identity" className="py-28 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-accent/[0.06] blur-[120px]" />
      </div>

      <div className="container relative">
        <SectionHead
          index={t.index}
          label={t.label}
          title={<span className="gradient-text">{t.title}</span>}
          align="center"
        />

        <Reveal delay={150}>
          <div className="max-w-4xl mx-auto">
            {/* Identity diagram */}
            <div className="relative py-10">
              {/* Connector lines (desktop) */}
              <svg className="absolute inset-0 w-full h-full hidden md:block" viewBox="0 0 800 320" preserveAspectRatio="none" aria-hidden>
                <line x1="150" y1="80" x2="400" y2="160" stroke="url(#idGrad1)" strokeWidth="1" opacity="0.5" strokeDasharray="4 4" />
                <line x1="650" y1="80" x2="400" y2="160" stroke="url(#idGrad1)" strokeWidth="1" opacity="0.5" strokeDasharray="4 4" />
                <line x1="400" y1="290" x2="400" y2="200" stroke="url(#idGrad1)" strokeWidth="1" opacity="0.5" strokeDasharray="4 4" />
                <defs>
                  <linearGradient id="idGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#F97316" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="relative grid md:grid-cols-3 gap-8 md:gap-4 items-center">
                {/* AI Engineer */}
                <div className="glass-card p-6 text-center hover:border-accent/60 hover:-translate-y-1 transition-all duration-400 md:justify-self-start md:w-52">
                  <div className="w-3 h-3 rounded-full bg-accent mx-auto mb-4 shadow-[0_0_15px_oklch(0.65_0.25_290/0.7)]" />
                  <div className="font-display font-bold text-lg">{t.roles[0]}</div>
                  <div className="text-xs font-mono text-muted-foreground mt-1">AI Engineer</div>
                </div>

                {/* Center — AFNAN */}
                <div className="md:order-none order-first flex flex-col items-center justify-center py-8">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-gradient-to-br from-accent/30 to-orange-500/25 rounded-full blur-2xl animate-pulse" />
                    <div className="relative w-36 h-36 rounded-full glass-card flex items-center justify-center border-accent/40 pulse-glow">
                      <span className="font-display text-2xl font-bold gradient-text tracking-wider">
                        {t.center}
                      </span>
                    </div>
                    <div className="absolute -top-2 start-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_oklch(0.7_0.2_60/0.8)]" />
                    <div className="absolute -bottom-2 start-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_oklch(0.65_0.25_290/0.8)]" />
                  </div>
                </div>

                {/* Data Scientist */}
                <div className="glass-card p-6 text-center hover:border-orange-500/60 hover:-translate-y-1 transition-all duration-400 md:justify-self-end md:w-52">
                  <div className="w-3 h-3 rounded-full bg-orange-500 mx-auto mb-4 shadow-[0_0_15px_oklch(0.7_0.2_60/0.7)]" />
                  <div className="font-display font-bold text-lg">{t.roles[1]}</div>
                  <div className="text-xs font-mono text-muted-foreground mt-1">Data Scientist</div>
                </div>

                {/* Creative Designer — bottom center */}
                <div className="md:col-span-3 flex justify-center mt-2">
                  <div className="glass-card p-6 text-center hover:border-accent/60 hover:-translate-y-1 transition-all duration-400 w-64">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-orange-500 mx-auto mb-4 shadow-[0_0_15px_oklch(0.65_0.25_290/0.7)]" />
                    <div className="font-display font-bold text-lg">{t.roles[2]}</div>
                    <div className="text-xs font-mono text-muted-foreground mt-1">Creative Designer</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-8">
              {t.text}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

