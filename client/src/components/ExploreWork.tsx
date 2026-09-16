import { Brain, BarChart3, Palette, Code2, ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/lib/content";
import { Reveal, SectionHead, NeuralCluster } from "./shared";
import { Link } from "wouter";

const folderIcons: Record<string, typeof Brain> = {
  ai: Brain,
  data: BarChart3,
  design: Palette,
  software: Code2,
};

const folderTints: Record<string, string> = {
  ai: "group-hover:shadow-[0_0_50px_oklch(0.65_0.25_290/0.25)]",
  data: "group-hover:shadow-[0_0_50px_oklch(0.7_0.2_60/0.22)]",
  design: "group-hover:shadow-[0_0_50px_oklch(0.6_0.22_320/0.22)]",
  software: "group-hover:shadow-[0_0_50px_oklch(0.55_0.18_250/0.22)]",
};

export default function ExploreWork() {
  const { lang, isRTL } = useLanguage();
  const t = ui[lang].explore;
  const ArrowIcon = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="work" className="py-28 relative">
      <NeuralCluster className="top-16 end-[5%]" size={130} opacity={0.16} />
      <div className="container">
        <SectionHead
          label={t.label}
          title={<span className="gradient-text">{t.title}</span>}
          subtitle={t.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {t.folders.map((folder, i) => {
            const Icon = folderIcons[folder.id] || Brain;
            return (
              <Reveal key={folder.id} delay={i * 90} className={i % 2 === 1 ? "md:translate-y-8" : ""}>
                <Link href={folder.href}>
                  <div className={`glass-card p-8 md:p-10 group cursor-pointer relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 ${folderTints[folder.id]}`}>
                    {/* Index watermark */}
                    <span className="absolute -top-4 end-2 font-display text-[7rem] leading-none font-bold text-foreground/[0.04] select-none group-hover:text-accent/10 transition-colors duration-500">
                      {folder.index}
                    </span>

                    {/* Folder tab — exhibition room door */}
                    <div className="absolute top-0 start-8 w-24 h-1.5 rounded-b-lg bg-gradient-to-r from-accent/70 to-orange-500/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className="flex items-start justify-between mb-8">
                        <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/20 group-hover:scale-110 group-hover:bg-accent/15 transition-all duration-500">
                          <Icon className="w-7 h-7 text-accent" />
                        </div>
                        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-accent group-hover:text-accent group-hover:rotate-45 transition-all duration-500">
                          <ArrowIcon size={17} />
                        </div>
                      </div>

                      <div className="text-xs font-mono text-muted-foreground tracking-widest mb-2">
                        {folder.index} / {folder.count}
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-1.5 group-hover:text-accent transition-colors duration-300">
                        {folder.title}
                      </h3>
                      <div className="text-sm font-mono text-accent/70 mb-4">{folder.titleEn}</div>
                      <p className="text-muted-foreground leading-relaxed">{folder.desc}</p>

                      <div className="mt-7 pt-5 border-t border-border/60 flex items-center gap-2 text-sm font-semibold text-muted-foreground group-hover:text-accent transition-colors duration-300">
                        <span>{t.enter}</span>
                        <span className={`transition-transform duration-500 ${isRTL ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}>
                          {isRTL ? "←" : "→"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
