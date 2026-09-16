import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/lib/content";
import { Reveal, SectionHead, NeuralCluster } from "./shared";

export default function AboutMe() {
  const { lang } = useLanguage();
  const t = ui[lang].about;

  return (
    <section id="about" className="py-28 relative">
      <NeuralCluster className="top-20 start-[4%]" size={120} opacity={0.15} />
      <div className="container">
        <SectionHead
          index={t.index}
          label={t.label}
          title={<span className="gradient-text">{t.title}</span>}
        />

        {/* Storytelling blocks — editorial, staggered */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 max-w-5xl mb-16">
          {t.blocks.map((block, i) => (
            <Reveal key={block.key} delay={i * 100} className={i % 2 === 1 ? "md:translate-y-8" : ""}>
              <div className="relative ps-6 py-2 group">
                <div className="absolute start-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent group-hover:from-orange-500 transition-colors duration-500" />
                <div className="absolute start-[-4px] top-3 w-2 h-2 rounded-full bg-accent group-hover:bg-orange-500 group-hover:shadow-[0_0_12px_oklch(0.7_0.2_60/0.6)] transition-all duration-500" />
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {block.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[1.05rem]">
                  {block.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {t.stats.map((stat, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="glass-card p-7 text-center group hover:border-accent/50 transition-all duration-300">
                <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground leading-snug">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
