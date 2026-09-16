import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/lib/content";
import {
  exhibitions,
  aiProjects,
  dataProjects,
  softwareProjects,
  designDomains,
  type ProjectCard,
} from "@/lib/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal, NeuralCluster } from "@/components/shared";
import NotFound from "@/pages/NotFound";
import {
  Brain, BarChart3, Palette, Code2, ArrowRight, ArrowLeft,
  Image as ImageIcon, Layers, Cpu, Target, CheckCircle2,
  Layout, Sparkles, Presentation, Home as HomeIcon, FolderOpen, X,
} from "lucide-react";

const exhibitionIcons: Record<string, typeof Brain> = {
  ai: Brain,
  data: BarChart3,
  design: Palette,
  software: Code2,
};

const designIcons: Record<string, typeof Layout> = {
  uiux: Layout,
  graphic: ImageIcon,
  "ai-visuals": Sparkles,
  presentation: Presentation,
  realestate: HomeIcon,
  interior: Layers,
};

/* ---------- DermaVision pipeline visual ---------- */
function PipelineFlow({ lang }: { lang: "ar" | "en" }) {
  const steps = [
    { icon: ImageIcon, label: { ar: "الصورة", en: "Image" }, sub: "24,000+" },
    { icon: Layers, label: { ar: "المعالجة المسبقة", en: "Preprocessing" }, sub: "Augmentation" },
    { icon: Cpu, label: { ar: "التعلم العميق", en: "Deep Learning" }, sub: "EffNet · DenseNet · ViT" },
    { icon: Target, label: { ar: "التنبؤ", en: "Prediction" }, sub: "Classification" },
    { icon: CheckCircle2, label: { ar: "النتيجة", en: "Result" }, sub: "F1 · Precision · Recall" },
  ];
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-0 my-8">
      {steps.map((step, i) => (
        <div key={i} className="flex-1 flex md:flex-col items-center gap-3 md:gap-2 relative">
          <div className="glass-card p-4 md:p-5 w-full text-center group hover:border-accent/60 transition-all duration-300 relative z-10">
            <step.icon className="w-6 h-6 text-accent mx-auto md:mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-semibold">{step.label[lang]}</div>
            <div className="text-[10px] font-mono text-muted-foreground mt-1" dir="ltr">{step.sub}</div>
          </div>
          {i < steps.length - 1 && (
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 end-[-14px] w-7 h-px bg-gradient-to-r from-accent/70 to-orange-500/70 z-0" />
          )}
          {i < steps.length - 1 && (
            <div className="md:hidden w-px h-5 bg-gradient-to-b from-accent/70 to-orange-500/70 ms-7" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------- Model comparison bars (qualitative, CV-based) ---------- */
function ModelComparison({ lang }: { lang: "ar" | "en" }) {
  const models = [
    { name: "EfficientNet", note: { ar: "كفاءة المعالجة", en: "Efficiency" }, w: "88%" },
    { name: "DenseNet", note: { ar: "اتصالات كثيفة", en: "Dense connections" }, w: "82%" },
    { name: "Vision Transformer", note: { ar: "آليات الانتباه", en: "Attention-based" }, w: "92%" },
  ];
  return (
    <div className="space-y-4">
      {models.map((m) => (
        <div key={m.name}>
          <div className="flex justify-between items-baseline mb-1.5">
            <span className="font-mono text-sm font-semibold text-accent">{m.name}</span>
            <span className="text-xs text-muted-foreground">{m.note[lang]}</span>
          </div>
          <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent to-orange-500 transition-all duration-1000"
              style={{ width: m.w }}
            />
          </div>
        </div>
      ))}
      <p className="text-xs text-muted-foreground font-mono pt-2">
        {lang === "ar"
          ? "* مقارنة معيارية نوعية — تحقق النموذج بمقاييس F1 و Precision و Recall عالية كما ورد في السيرة الذاتية"
          : "* Qualitative benchmark view — high F1, precision & recall verification metrics as stated in the CV"}
      </p>
    </div>
  );
}

/* ---------- Generic project card ---------- */
function ProjectExhibit({ project, lang, labels }: { project: ProjectCard; lang: "ar" | "en"; labels: typeof ui["ar"]["project"] }) {
  return (
    <div className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-accent/50 transition-all duration-500">
      <div className="absolute top-0 start-0 end-0 h-1 bg-gradient-to-r from-accent via-orange-500 to-accent opacity-60" />
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="px-3 py-1 text-xs rounded-full bg-accent/10 border border-accent/25 text-accent font-mono">
          {project.type[lang]}
        </span>
      </div>
      <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors">
        {project.name}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-[1.05rem] mb-8">{project.description[lang]}</p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {project.problem && (
          <div className="border-s-2 border-orange-500/60 ps-4">
            <h4 className="text-sm font-mono text-orange-500 uppercase tracking-wider mb-2">{labels.problem}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.problem[lang]}</p>
          </div>
        )}
        {project.solution && (
          <div className="border-s-2 border-accent/60 ps-4">
            <h4 className="text-sm font-mono text-accent uppercase tracking-wider mb-2">{labels.solution}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.solution[lang]}</p>
          </div>
        )}
      </div>

      {project.role && (
        <div className="mb-8 glass-card p-4 border-accent/20">
          <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-1.5">{labels.role}</h4>
          <p className="text-sm leading-relaxed">{project.role[lang]}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-8">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-3 py-1.5 text-xs rounded-lg bg-secondary/70 border border-border/60 font-mono text-secondary-foreground">
            {tech}
          </span>
        ))}
      </div>

      {project.results && (
        <div>
          <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">{labels.results}</h4>
          <ul className="space-y-2">
            {project.results[lang].map((r, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ---------- Design studio with folders + lightbox-ready frames ---------- */
function DesignStudio({ lang }: { lang: "ar" | "en" }) {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const active = designDomains.find((d) => d.id === activeDomain);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setLightbox(null); setActiveDomain(null); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Folder grid */
  if (!activeDomain) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {designDomains.map((domain, i) => {
          const Icon = designIcons[domain.id] || Layout;
          return (
            <Reveal key={domain.id} delay={i * 80} className={i % 3 === 1 ? "lg:translate-y-6" : ""}>
              <button
                onClick={() => setActiveDomain(domain.id)}
                className="w-full text-start glass-card p-7 group hover:border-accent/60 hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden"
              >
                <span className="absolute -bottom-6 -end-4 font-display text-[6rem] leading-none font-bold text-foreground/[0.04] select-none group-hover:text-accent/10 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 w-fit mb-5 group-hover:scale-110 group-hover:bg-accent/15 transition-all duration-500">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-1.5 group-hover:text-accent transition-colors">
                  {domain.title[lang]}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{domain.desc[lang]}</p>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground group-hover:text-accent transition-colors">
                  <FolderOpen size={13} />
                  {lang === "ar" ? "افتح المجلد" : "Open folder"}
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>
    );
  }

  /* Opened folder — editorial gallery frames (ready for real works) */
  const frames = [1, 2, 3];
  return (
    <div>
      <button
        onClick={() => setActiveDomain(null)}
        className="mb-8 inline-flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-sm text-muted-foreground hover:text-accent hover:border-accent/50 transition-all"
      >
        {lang === "ar" ? <ArrowRight size={15} /> : <ArrowLeft size={15} />}
        {lang === "ar" ? "كل مجلدات التصميم" : "All design folders"}
      </button>

      <div className="mb-10">
        <h3 className="font-display text-3xl font-bold gradient-text mb-2">{active?.title[lang]}</h3>
        <p className="text-muted-foreground">{active?.desc[lang]}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {active?.tools.map((tool) => (
            <span key={tool} className="px-3 py-1 text-xs rounded-full bg-secondary border border-border font-mono text-muted-foreground">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {frames.map((n) => (
          <button
            key={n}
            onClick={() => setLightbox(`${active?.id}-${n}`)}
            className="group glass-card overflow-hidden text-start hover:border-accent/60 transition-all duration-500"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-secondary/80 to-secondary/30 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: "radial-gradient(circle at 30% 40%, oklch(0.65 0.25 290 / 0.4), transparent 55%), radial-gradient(circle at 75% 70%, oklch(0.7 0.2 60 / 0.3), transparent 50%)",
              }} />
              <ImageIcon className="w-10 h-10 text-muted-foreground/50 group-hover:scale-110 group-hover:text-accent/70 transition-all duration-500" />
              <span className="absolute bottom-3 end-3 text-[10px] font-mono text-muted-foreground/60">
                {lang === "ar" ? "إطار جاهز للعمل" : "Frame ready"}
              </span>
            </div>
            <div className="p-4">
              <div className="font-semibold text-sm mb-0.5">
                {active?.title[lang]} — {String(n).padStart(2, "0")}
              </div>
              <div className="text-xs text-muted-foreground">
                {lang === "ar" ? "تُضاف الأعمال هنا عند توفرها" : "Works will be placed here"}
              </div>
            </div>
          </button>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground glass-card p-4 border-accent/20">
        {lang === "ar"
          ? "هذا المجلد جاهز لاستقبال الأعمال — أرسلي صور التصاميم وسأضيفها فورًا بنفس الإطار الفخم."
          : "This folder is ready to receive works — share the design images and they will be placed into these premium frames."}
      </p>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="max-w-3xl w-full glass-card overflow-hidden border-accent/30"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "lbIn 0.35s cubic-bezier(0.23,1,0.32,1)" }}
          >
            <style>{`@keyframes lbIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }`}</style>
            <div className="aspect-video bg-gradient-to-br from-secondary/80 to-secondary/30 flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-25" style={{
                backgroundImage: "radial-gradient(circle at 30% 40%, oklch(0.65 0.25 290 / 0.4), transparent 55%), radial-gradient(circle at 75% 70%, oklch(0.7 0.2 60 / 0.35), transparent 50%)",
              }} />
              <ImageIcon className="w-16 h-16 text-muted-foreground/40" />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 end-4 p-2 rounded-lg bg-background/60 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-6">
              <h4 className="font-display text-xl font-bold mb-2">
                {active?.title[lang]} — {lang === "ar" ? "عمل" : "Piece"} {lightbox.split("-")[1]}
              </h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span><span className="font-mono text-xs opacity-70">{lang === "ar" ? "النوع:" : "Type:"}</span> {active?.title[lang === "ar" ? "en" : "ar"]}</span>
                <span><span className="font-mono text-xs opacity-70">{lang === "ar" ? "الأدوات:" : "Tools:"}</span> {active?.tools.join(" · ")}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Exhibition page ---------- */
export default function Exhibition() {
  const { id } = useParams<{ id: string }>();
  const { lang, isRTL } = useLanguage();
  const labels = ui[lang].project;

  const meta = exhibitions.find((e) => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!meta) return <NotFound />;

  const Icon = exhibitionIcons[meta.id] || Brain;
  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  const aiFeatured = aiProjects.find((p) => p.featured);
  const aiRest = aiProjects.filter((p) => !p.featured);
  const projects =
    meta.id === "ai" ? aiRest :
    meta.id === "data" ? dataProjects :
    meta.id === "software" ? softwareProjects : [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24 relative">
        <NeuralCluster className="top-32 end-[6%]" size={130} opacity={0.18} />
        <div className="container">
          {/* Breadcrumb */}
          <Reveal>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-10 group">
              <BackArrow size={15} className="group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5 transition-transform" />
              {ui[lang].backToWork}
            </Link>
          </Reveal>

          {/* Exhibition header */}
          <Reveal delay={80}>
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16 pb-10 border-b border-border/60">
              <div className="p-4 rounded-2xl bg-accent/10 border border-accent/25 w-fit">
                <Icon className="w-10 h-10 text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-mono text-muted-foreground tracking-[0.3em] uppercase mb-2">
                  {meta.index} — Exhibition Room
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text leading-tight">
                  {meta.title[lang]}
                </h1>
                <p className="text-lg font-mono text-accent/70 mt-1">{meta.subtitle[lang]}</p>
              </div>
              <p className="text-muted-foreground max-w-sm leading-relaxed md:text-end">
                {meta.description[lang]}
              </p>
            </div>
          </Reveal>

          {/* DermaVision featured */}
          {meta.id === "ai" && aiFeatured && (
            <Reveal delay={140}>
              <div className="glass-card p-8 md:p-12 mb-12 relative overflow-hidden border-accent/30">
                <div className="absolute top-0 start-0 end-0 h-1.5 bg-gradient-to-r from-accent via-orange-500 to-accent" />
                <div className="absolute -top-16 -end-16 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1.5 text-xs rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 font-mono uppercase tracking-wider">
                    {lang === "ar" ? "المشروع المميز" : "Featured AI Project"}
                  </span>
                  <span className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border font-mono text-muted-foreground">
                    {aiFeatured.type[lang]} · 2024–2025
                  </span>
                </div>

                <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4 font-mono">
                  DermaVision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-2">
                  {aiFeatured.description[lang]}
                </p>
                <p className="text-sm font-mono text-accent/80 mb-10">
                  {lang === "ar" ? "جامعة جدة — أكثر من 24,000 صورة طبية" : "University of Jeddah — 24,000+ medical images"}
                </p>

                <PipelineFlow lang={lang} />

                <div className="grid lg:grid-cols-2 gap-8 mt-10">
                  <div>
                    <h3 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {labels.solution}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{aiFeatured.solution?.[lang]}</p>
                    <div className="border-s-2 border-orange-500/60 ps-4 mb-6">
                      <h4 className="text-sm font-mono text-orange-500 uppercase tracking-wider mb-2">{labels.problem}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{aiFeatured.problem?.[lang]}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {aiFeatured.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 text-xs rounded-lg bg-secondary/70 border border-border/60 font-mono text-secondary-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="glass-card p-6 border-accent/20">
                    <h3 className="font-display text-lg font-bold mb-5">
                      {lang === "ar" ? "مقارنة النماذج" : "Model Comparison"}
                    </h3>
                    <ModelComparison lang={lang} />
                    <div className="mt-6 pt-5 border-t border-border/60">
                      <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">{labels.results}</h4>
                      <ul className="space-y-2">
                        {aiFeatured.results?.[lang].map((r, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* Project exhibits */}
          {meta.id !== "design" && (
            <div className="space-y-8">
              {projects.map((project, i) => (
                <Reveal key={project.id} delay={i * 100}>
                  <ProjectExhibit project={project} lang={lang} labels={labels} />
                </Reveal>
              ))}
            </div>
          )}

          {/* Design studio */}
          {meta.id === "design" && (
            <Reveal delay={140}>
              <DesignStudio lang={lang} />
            </Reveal>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
