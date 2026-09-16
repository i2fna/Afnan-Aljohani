import { useLanguage } from "@/contexts/LanguageContext";
import { ui, contactData } from "@/lib/content";
import { Reveal, SectionHead } from "./shared";
import { Mail, Phone, MapPin, Linkedin, MessageCircle, ArrowUpLeft, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const { lang, isRTL } = useLanguage();
  const t = ui[lang].contact;
  const ArrowIcon = isRTL ? ArrowUpLeft : ArrowUpRight;

  const info = [
    { icon: Mail, label: t.email, value: contactData.email, href: `mailto:${contactData.email}`, mono: true },
    { icon: Phone, label: t.phone, value: contactData.phone, href: contactData.phoneHref, mono: true },
    { icon: MapPin, label: t.location, value: t.locationValue, href: null as string | null, mono: false },
  ];

  return (
    <section id="contact" className="py-28 relative">
      <div className="container">
        <SectionHead
          index={t.index}
          label={t.label}
          title={<span className="gradient-text">{t.title}</span>}
          subtitle={t.subtitle}
          align="center"
        />

        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {/* Info panel */}
          <Reveal className="lg:col-span-2">
            <div className="glass-card p-7 h-full flex flex-col">
              <div className="space-y-5 flex-1">
                {info.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className={`font-medium hover:text-accent transition-colors text-sm ${item.mono ? "font-mono" : ""}`} dir={item.mono ? "ltr" : undefined}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-6 mt-6 border-t border-border/60">
                <div className="flex gap-3">
                  <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 glass-card rounded-xl hover:border-accent/60 hover:text-accent transition-all duration-300 font-mono text-sm">
                    <Linkedin size={17} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* WhatsApp primary card */}
          <Reveal delay={120} className="lg:col-span-3">
            <div className="glass-card p-8 md:p-10 h-full relative overflow-hidden flex flex-col justify-center">
              <div className="absolute -top-12 -end-12 w-48 h-48 rounded-full bg-green-500/10 blur-3xl pointer-events-none" />
              <div className="absolute top-0 start-0 end-0 h-1 bg-gradient-to-r from-green-500/70 via-accent/60 to-orange-500/60" />

              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-green-500/15 border border-green-500/30">
                  <MessageCircle className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">{t.whatsappLabel}</h3>
                  <p className="text-sm text-muted-foreground">{t.whatsappNote}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8" dir={isRTL ? "rtl" : "ltr"}>
                {lang === "ar"
                  ? "أسهل وأسرع طريقة للتواصل معي — اضغطي الزر وسيفتح واتساب مباشرة على رقمي:"
                  : "The easiest, fastest way to reach me — tap the button and WhatsApp opens directly on my number:"}
              </p>

              <a
                href={contactData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 px-6 py-5 rounded-2xl bg-green-500 text-white font-bold text-lg hover:shadow-[0_0_35px_rgba(34,197,94,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle size={22} />
                  {t.whatsappCta}
                </span>
                <span className="flex items-center gap-2 font-mono text-base font-semibold" dir="ltr">
                  {contactData.whatsappDisplay}
                  <ArrowIcon size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
                </span>
              </a>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Linkedin size={15} className="text-accent" />
                <span className="font-mono text-xs">{lang === "ar" ? "أو تابعيني على:" : "Or find me on:"}</span>
                <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs text-accent hover:underline underline-offset-4" dir="ltr">
                  {contactData.linkedinDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
