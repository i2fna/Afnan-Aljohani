import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ui, contactData } from "@/lib/content";
import { Reveal, NeuralCluster } from "./shared";

export default function Hero() {
  const { lang } = useLanguage();
  const t = ui[lang].hero;

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url(/manus-storage/hero-bg_5438fbc7.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />

      <NeuralCluster className="top-28 start-[6%]" size={150} opacity={0.25} />
      <NeuralCluster className="bottom-24 end-[8%]" size={180} opacity={0.18} />

      <div className="container relative z-10 pt-32 pb-24">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-sm text-muted-foreground">{t.available}</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display font-bold leading-[0.95] mb-6">
                <span className="block text-6xl md:text-8xl tracking-tight gradient-text neon-glow">
                  {t.name}
                </span>
                <span className="block mt-3 text-2xl md:text-4xl text-foreground font-semibold">
                  {t.title}
                </span>
                <span className="block mt-2 text-base md:text-lg font-mono font-medium text-muted-foreground tracking-widest">
                  {lang === "ar" ? "AI ENGINEER | DATA SCIENCE | CREATIVE TECHNOLOGY" : "الذكاء الاصطناعي | علوم البيانات | التقنية الإبداعية"}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-3">
                {lang === "ar" ? t.taglineAr : t.taglineEn}
              </p>
              <p className="text-sm font-mono text-accent/80 tracking-wide mb-10">
                {t.motto}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="#work"
                  className="group px-7 py-3.5 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-[0_0_30px_oklch(0.65_0.25_290/0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                >
                  {t.ctaWork}
                  <span className="inline-block ms-2 transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
                </a>
                <a
                  href="#about"
                  className="px-7 py-3.5 glass-card rounded-lg font-semibold hover:border-accent/60 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                >
                  {t.ctaAbout}
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex gap-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="p-3 glass-card rounded-lg text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300">
                  <Github size={19} />
                </a>
                <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="p-3 glass-card rounded-lg text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300">
                  <Linkedin size={19} />
                </a>
                <a href={`mailto:${contactData.email}`} aria-label="Email"
                  className="p-3 glass-card rounded-lg text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300">
                  <Mail size={19} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Signature wordmark — gallery piece */}
          <div className="lg:col-span-5">
            <Reveal delay={250}>
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-6 bg-gradient-to-br from-accent/25 via-transparent to-orange-500/20 rounded-[2rem] blur-2xl" />
                <div className="relative glass-card p-8 md:p-10 rounded-[1.6rem]">
                  <div className="rounded-[1.3rem] overflow-hidden bg-secondary/40 border border-border/50 flex items-center justify-center min-h-[240px] md:min-h-[300px] relative">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 30% 35%, oklch(0.65 0.25 290 / 0.35), transparent 55%), radial-gradient(circle at 75% 70%, oklch(0.7 0.2 60 / 0.3), transparent 50%)",
                      }}
                    />
                    <img
                      src="/manus-storage/afnan-signature_a3fd4710.png"
                      alt="Afnan Aljohani signature"
                      className="relative w-[85%] max-w-[340px] drop-shadow-[0_0_18px_oklch(0.65_0.25_290/0.35)]"
                      dir="ltr"
                    />
                  </div>
                  {/* Gallery label */}
                  <div className="flex items-center justify-between px-4 py-3">
                    <div>
                      <div className="font-display font-semibold text-sm">{t.fullName}</div>
                      <div className="text-xs text-muted-foreground font-mono">Riyadh, KSA</div>
                    </div>
                    <Sparkles className="w-4 h-4 text-accent" />
                  </div>
                </div>
                <div className="absolute -bottom-5 -end-3 glass-card px-4 py-2.5 rounded-xl">
                  <span className="text-xs font-mono gradient-text font-semibold">
                    {lang === "ar" ? "خريجة مرتبة الشرف — جامعة جدة" : "Honors Graduate — University of Jeddah"}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-8 inset-x-0 flex justify-center">
          <a href="#work" aria-label="Scroll" className="text-muted-foreground hover:text-accent transition-colors animate-bounce">
            <ArrowDown size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
