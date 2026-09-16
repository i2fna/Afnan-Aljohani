import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { AFMark } from "@/components/Navbar";

export default function NotFound() {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 text-center">
      <AFMark size={72} />
      <h1 className="font-display text-7xl font-bold gradient-text mt-8 mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">
        {lang === "ar" ? "هذه الصفحة غير موجودة في المعرض" : "This page doesn't exist in the exhibition"}
      </p>
      <Link
        href="/"
        className="px-7 py-3.5 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-[0_0_30px_oklch(0.65_0.25_290/0.4)] transition-all duration-300 hover:scale-[1.03]"
      >
        {lang === "ar" ? "العودة للرئيسية" : "Back to Home"}
      </Link>
    </div>
  );
}
