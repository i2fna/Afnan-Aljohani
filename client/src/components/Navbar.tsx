import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/lib/content";
import { Link, useLocation } from "wouter";

export function AFMark({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className="shrink-0">
      <defs>
        <linearGradient id="afGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="36" fill="none" stroke="url(#afGrad)" strokeWidth="1.5" opacity="0.5" />
      <circle cx="40" cy="40" r="30" fill="none" stroke="url(#afGrad)" strokeWidth="0.5" opacity="0.25" />
      <text x="40" y="49" textAnchor="middle" fill="url(#afGrad)" fontSize="22" fontWeight="700" fontFamily="Space Grotesk" letterSpacing="1">AF</text>
      <circle cx="40" cy="4" r="3" fill="#8B5CF6" className="animate-pulse" />
      <circle cx="76" cy="40" r="2.5" fill="#F97316" className="animate-pulse" style={{ animationDelay: "0.7s" }} />
      <circle cx="40" cy="76" r="3" fill="#8B5CF6" className="animate-pulse" style={{ animationDelay: "1.3s" }} />
      <circle cx="4" cy="40" r="2.5" fill="#F97316" className="animate-pulse" style={{ animationDelay: "1.9s" }} />
    </svg>
  );
}

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = ui[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { label: t.home, href: isHome ? "#hero" : "/" },
    { label: t.about, href: isHome ? "#about" : "/#about" },
    { label: t.ai, href: "/work/ai" },
    { label: t.data, href: "/work/data" },
    { label: t.design, href: "/work/design" },
    { label: t.experience, href: isHome ? "#journey" : "/#journey" },
    { label: t.credentials, href: isHome ? "#credentials" : "/#credentials" },
    { label: t.contact, href: isHome ? "#contact" : "/#contact" },
  ];

  const toggleLang = () => setLang(lang === "ar" ? "en" : "ar");

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-3 group">
          <AFMark size={42} />
          <span className="font-display font-bold text-lg tracking-wide gradient-text hidden sm:block">
            {lang === "ar" ? "أفنان" : "AFNAN"}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:start-3 after:end-3 after:h-px after:bg-gradient-to-r after:from-accent after:to-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="ms-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border hover:border-accent/60 text-xs font-mono text-muted-foreground hover:text-accent transition-all duration-300"
            aria-label="Switch language"
          >
            <Globe size={13} />
            {lang === "ar" ? "EN" : "عربي"}
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-border text-xs font-mono text-muted-foreground"
            aria-label="Switch language"
          >
            <Globe size={12} />
            {lang === "ar" ? "EN" : "ع"}
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container py-4 flex flex-col gap-1">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
