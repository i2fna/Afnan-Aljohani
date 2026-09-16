import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/lib/content";
import { AFMark } from "./Navbar";

export default function Footer() {
  const { lang } = useLanguage();
  const t = ui[lang].footer;

  return (
    <footer className="py-10 border-t border-border/60 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="container flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <AFMark size={34} />
          <div>
            <div className="font-display font-bold gradient-text">{lang === "ar" ? "أفنان فهد الجهني" : "AFNAN"}</div>
            <div className="text-[11px] font-mono text-muted-foreground tracking-wider">
              Engineering Intelligence. Designing Possibilities.
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          {t.made} — {t.by} {t.rights}
        </p>
      </div>
    </footer>
  );
}

