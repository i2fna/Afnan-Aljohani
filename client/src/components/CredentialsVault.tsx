import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/lib/content";
import { Reveal, SectionHead, NeuralCluster } from "./shared";
import { Trophy, Medal, Award, X, ShieldCheck } from "lucide-react";

interface CertItem {
  title: string;
  issuer: string;
  year: string;
  highlight?: boolean;
}

export default function CredentialsVault() {
  const { lang } = useLanguage();
  const t = ui[lang].credentials;
  const [selected, setSelected] = useState<(CertItem & { kind: string }) | null>(null);

  const openCert = (cert: CertItem, kind: string) => setSelected({ ...cert, kind });

  return (
    <section id="credentials" className="py-28 relative">
      <NeuralCluster className="top-24 end-[6%]" size={130} opacity={0.16} />
      <div className="container">
        <SectionHead
          index={t.index}
          label={t.label}
          title={<span className="gradient-text">{t.title}</span>}
          subtitle={t.subtitle}
        />

        {/* Awards — prominent */}
        <div className="mb-14">
          <Reveal>
            <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-orange-500" />
              {t.awardsTitle}
            </h3>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {t.awards.map((award, i) => (
              <Reveal key={i} delay={i * 100}>
                <button
                  onClick={() => openCert(award, t.awardType)}
                  className="w-full text-start glass-card p-8 relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_0_45px_oklch(0.7_0.2_60/0.2)] transition-all duration-500"
                >
                  <div className="absolute top-0 start-0 end-0 h-1 bg-gradient-to-r from-yellow-500/70 via-orange-500/70 to-accent/70" />
                  <div className="absolute -top-8 -end-8 w-32 h-32 rounded-full bg-orange-500/10 blur-2xl group-hover:bg-orange-500/20 transition-colors duration-500" />
                  <div className="flex items-start gap-5">
                    <div className="p-3.5 rounded-xl bg-orange-500/15 border border-orange-500/30 group-hover:scale-110 transition-transform duration-500">
                      {i === 0 ? <Medal className="w-8 h-8 text-yellow-500" /> : <Trophy className="w-8 h-8 text-orange-500" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display text-xl font-bold mb-2 leading-snug group-hover:text-orange-400 transition-colors duration-300">
                        {award.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{award.issuer}</p>
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-secondary border border-border font-mono text-muted-foreground">
                        {award.year}
                      </span>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Certifications vault grid */}
        <Reveal>
          <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-accent" />
            {t.certsTitle}
          </h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {t.certs.map((cert, i) => (
            <Reveal key={i} delay={(i % 4) * 70}>
              <button
                onClick={() => openCert(cert, t.certType)}
                className="w-full text-start glass-card p-5 group hover:border-accent/60 hover:-translate-y-1 transition-all duration-400 relative overflow-hidden"
              >
                <div className="absolute top-0 start-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Award className="w-5 h-5 text-accent/70 mb-3 group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
                <h4 className="font-semibold text-[15px] leading-snug mb-2 group-hover:text-accent transition-colors duration-300">
                  {cert.title}
                </h4>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{cert.issuer}</p>
                <span className="inline-block px-2.5 py-0.5 text-[11px] rounded-full bg-secondary border border-border font-mono text-muted-foreground">
                  {cert.year}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Certificate detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="glass-card max-w-lg w-full p-8 md:p-10 relative border-accent/40 shadow-[0_0_80px_oklch(0.65_0.25_290/0.25)]"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "certIn 0.35s cubic-bezier(0.23,1,0.32,1)" }}
          >
            <style>{`@keyframes certIn { from { opacity: 0; transform: scale(0.94) translateY(14px); } to { opacity: 1; transform: scale(1) translateY(0); } }`}</style>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 end-4 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="w-14 h-14 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-6 leading-snug">{selected.title}</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="text-sm text-muted-foreground font-mono">{t.issuer}</span>
                <span className="font-medium text-sm text-end">{selected.issuer}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="text-sm text-muted-foreground font-mono">{t.year}</span>
                <span className="font-medium font-mono">{selected.year}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-sm text-muted-foreground font-mono">{t.type}</span>
                <span className="px-3 py-1 text-xs rounded-full bg-accent/10 border border-accent/25 text-accent">
                  {selected.kind}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
