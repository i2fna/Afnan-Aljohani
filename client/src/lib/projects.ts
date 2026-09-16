/**
 * بيانات المشاريع والمعارض — مستخرجة من السيرة الذاتية فقط
 * Exhibition projects data — extracted faithfully from the CV only.
 */
import type { Lang } from "./content";

export interface ProjectCard {
  id: string;
  name: string;
  nameAr?: string;
  description: Record<Lang, string>;
  problem?: Record<Lang, string>;
  solution?: Record<Lang, string>;
  role?: Record<Lang, string>;
  technologies: string[];
  results?: Record<Lang, string[]>;
  type: Record<Lang, string>;
  featured?: boolean;
}

export interface ExhibitionMeta {
  id: string;
  index: string;
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  description: Record<Lang, string>;
}

export const exhibitions: ExhibitionMeta[] = [
  {
    id: "ai",
    index: "01",
    title: { ar: "الذكاء الاصطناعي", en: "Artificial Intelligence" },
    subtitle: { ar: "معرض نماذج التعلم العميق ورؤية الحاسب", en: "Deep Learning & Computer Vision Exhibition" },
    description: {
      ar: "مشاريع التعلم العميق ورؤية الحاسب الآلي وتعلم الآلة — من بيانات خام إلى نماذج تنبؤية دقيقة.",
      en: "Deep learning, computer vision, and machine learning projects — from raw data to accurate predictive models.",
    },
  },
  {
    id: "data",
    index: "02",
    title: { ar: "تحليل البيانات", en: "Data Analytics" },
    subtitle: { ar: "من البيانات إلى القرار", en: "From Data to Decision" },
    description: {
      ar: "لوحات مؤشرات تفاعلية وتحليلات تحوّل البيانات إلى رؤى قابلة لاتخاذ القرار.",
      en: "Interactive dashboards and analytics that transform data into decision-ready insights.",
    },
  },
  {
    id: "design",
    index: "03",
    title: { ar: "التصميم الإبداعي", en: "Creative Design" },
    subtitle: { ar: "استوديو التصميم الخاص بي", en: "My Creative Studio" },
    description: {
      ar: "معرض أعمالي التصميمية — واجهات، جرافيك، هوية بصرية، وتصاميم مدعومة بالذكاء الاصطناعي.",
      en: "My design works exhibition — UI/UX, graphics, visual identity, and AI-powered visuals.",
    },
  },
  {
    id: "software",
    index: "04",
    title: { ar: "البرمجيات والتقنية", en: "Software & Technology" },
    subtitle: { ar: "هندسة البرمجيات — Holberton × Tuwaiq", en: "Software Engineering — Holberton × Tuwaiq" },
    description: {
      ar: "مسار هندسة البرمجيات المتقدم: هياكل بيانات، خوارزميات، وتصميم أنظمة لتحديات هندسية واقعية.",
      en: "Advanced software engineering track: data structures, algorithms, and system design for real-world engineering challenges.",
    },
  },
];

/* ---------------- AI Exhibition ---------------- */
export const aiProjects: ProjectCard[] = [
  {
    id: "dermavision",
    name: "DermaVision",
    featured: true,
    description: {
      ar: "خط معالجة متكامل للتعلم العميق لتصنيف الصور الطبية الجلدية — مشروع التخرج البحثي بجامعة جدة (2024–2025).",
      en: "A complete deep learning pipeline for medical image classification — graduation research project at the University of Jeddah (2024–2025).",
    },
    problem: {
      ar: "تصنيف الصور الطبية الجلدية بدقة عالية رغم عدم توازن الفئات الشديد في البيانات.",
      en: "Classifying dermatological medical images with high accuracy despite severe class imbalance.",
    },
    solution: {
      ar: "تصميم ونشر خط معالجة صور وتصنيف متكامل بالتعلم العميق على أكثر من 24,000 صورة طبية، مع تقنيات متقدمة لزيادة البيانات ومعالجة مسبقة مخصصة للتخفيف من عدم توازن الفئات، ومقارنة معيارية لنماذج حديثة.",
      en: "Designed and deployed a complete image processing and deep learning classification pipeline on 24,000+ medical images, with advanced data augmentation and custom preprocessing to mitigate heavy class imbalances, plus benchmarking of state-of-the-art architectures.",
    },
    role: {
      ar: "تصميم وتطوير خط المعالجة كاملًا — من إعداد البيانات إلى النشر.",
      en: "Designed and built the full pipeline — from data preparation to deployment.",
    },
    technologies: ["Python", "PyTorch", "EfficientNet", "DenseNet", "Vision Transformers (ViT)", "Data Augmentation"],
    results: {
      ar: [
        "مقارنة معيارية بين EfficientNet و DenseNet و Vision Transformers (ViT)",
        "تحقيق مقاييس تحقق عالية: F1-Score و Precision و Recall",
        "استضافة عرض حي للنموذج عبر تطبيق ويب",
      ],
      en: [
        "Benchmarked EfficientNet, DenseNet, and Vision Transformers (ViT)",
        "Achieved high verification metrics: F1-score, precision, and recall",
        "Hosted a live web demo of the model",
      ],
    },
    type: { ar: "مشروع تخرج بحثي", en: "Graduation Research Project" },
  },
  {
    id: "kanz-genai",
    name: "Kanz AI Hackathon — Generative Analytics",
    description: {
      ar: "مشروع الفوز بالشهادة الذهبية+ في هاكاثون Kanz AI 2026: تعزيز تحليلات البيانات بالذكاء الاصطناعي التوليدي.",
      en: "Gold Certificate+ winning project at Kanz AI Hackathon 2026: supercharging data analytics with generative AI.",
    },
    problem: {
      ar: "تسريع دورة التحليلات ورفع جودة الرؤى المستخرجة من البيانات.",
      en: "Accelerating the analytics cycle and raising the quality of data-driven insights.",
    },
    solution: {
      ar: "توظيف تقنيات الذكاء الاصطناعي التوليدي لتعزيز تحليل البيانات واستخراج رؤى أعمق بكفاءة أعلى.",
      en: "Applied generative AI techniques to supercharge data analytics and extract deeper insights more efficiently.",
    },
    role: {
      ar: "عضوة فريق التحليل — الحائز على الشهادة الذهبية+.",
      en: "Analytics team member — Gold Certificate+ winner.",
    },
    technologies: ["Generative AI", "Data Analytics", "Python"],
    results: {
      ar: ["الشهادة الذهبية+ — يوليو 2026"],
      en: ["Gold Certificate+ — July 2026"],
    },
    type: { ar: "هاكاثون", en: "Hackathon" },
  },
];

/* ---------------- Data Analytics Exhibition ---------------- */
export const dataProjects: ProjectCard[] = [
  {
    id: "stc-behavior",
    name: "STC User Behavior Prediction",
    description: {
      ar: "نموذج تصنيف تنبؤي باستخدام تعلم الآلة لتحليل وتقسيم سلوك مستخدمي الاتصالات — تجربة عمل افتراضية مع Misk، مارس 2026.",
      en: "A predictive classification model using machine learning to analyze and segment telecom user behaviors — Misk Virtual Work Experience, March 2026.",
    },
    problem: {
      ar: "فهم سلوك مستخدمي الاتصالات وتقسيمهم لدعم قرارات الأعمال.",
      en: "Understanding and segmenting telecom user behavior to support business decisions.",
    },
    solution: {
      ar: "تطوير نموذج تصنيف تنبؤي مع تقنيات سرد بيانات لعرض رؤى النموذج وأهمية الخصائص بوضوح لجمهور تقني وغير تقني.",
      en: "Developed a predictive classification model with data storytelling techniques presenting model insights and feature importance clearly to technical and business audiences.",
    },
    role: {
      ar: "محللة بيانات — بناء النموذج وعرض الرؤى.",
      en: "Data analyst — model building and insight presentation.",
    },
    technologies: ["Machine Learning", "Classification", "Python", "Data Storytelling", "Feature Importance"],
    results: {
      ar: ["عرض رؤى النموذج وأهمية الخصائص بوضوح لجمهور تقني وتجاري"],
      en: ["Presented model insights and feature importance clearly to technical and business audiences"],
    },
    type: { ar: "تجربة عمل افتراضية", en: "Virtual Work Experience" },
  },
  {
    id: "gaca-dashboards",
    name: "GACA Executive Dashboards",
    description: {
      ar: "لوحات مؤشرات تفاعلية شاملة في Power BI و Tableau لمراقبة مؤشرات الأداء المؤسسية ودعم القرار التنفيذي في الهيئة العامة للطيران المدني.",
      en: "Comprehensive interactive dashboards in Power BI and Tableau monitoring corporate KPIs and supporting executive decision-making at the General Authority of Civil Aviation.",
    },
    problem: {
      ar: "الحاجة لمراقبة مؤشرات الأداء المؤسسية ودعم اتخاذ القرار التنفيذي المبني على البيانات.",
      en: "The need to monitor corporate KPIs and support data-driven executive decision-making.",
    },
    solution: {
      ar: "معالجة مجموعات بيانات طيران واسعة النطاق مع تحليل استكشافي شامل وتنظيف البيانات بـ Python، وبناء لوحات تفاعلية وفق معايير حوكمة البيانات المؤسسية.",
      en: "Handled large-scale aviation datasets with thorough EDA and data cleansing in Python, building interactive dashboards under enterprise data governance standards.",
    },
    role: {
      ar: "متدربة ذكاء اصطناعي وبيانات — تدريب تعاوني.",
      en: "AI and Data co-op trainee.",
    },
    technologies: ["Power BI", "Tableau", "Python", "EDA", "Data Governance"],
    results: {
      ar: ["لوحات تفاعلية تدعم القرار التنفيذي", "التزام كامل بمعايير حوكمة البيانات والخصوصية"],
      en: ["Interactive dashboards supporting executive decisions", "Full compliance with data governance and privacy standards"],
    },
    type: { ar: "تدريب تعاوني", en: "Co-op Training" },
  },
  {
    id: "sdaia-pipelines",
    name: "SDAIA Data Preparation Pipelines",
    description: {
      ar: "إدارة خطوط إعداد بيانات من البداية إلى النهاية وتحليل البيانات التاريخية لكشف الاتجاهات — الهيئة السعودية للبيانات والذكاء الاصطناعي، 2022.",
      en: "End-to-end data preparation pipelines and historical data analysis uncovering underlying trends — Saudi Data and AI Authority, 2022.",
    },
    problem: {
      ar: "قيم مفقودة وتعارضات هيكلية عبر مجموعات بيانات متعددة المصادر.",
      en: "Missing values and structural inconsistencies across multi-source datasets.",
    },
    solution: {
      ar: "معالجة القيم المفقودة وتوحيد الهياكل، ثم تحليل البيانات التاريخية لتحديد الاتجاهات الكامنة وتقديم تقارير أداء واضحة لأصحاب المصلحة.",
      en: "Fixed missing values and standardized structural inconsistencies, then analyzed historical data to identify underlying trends and deliver clear performance reports to key stakeholders.",
    },
    role: {
      ar: "متدربة تحليل بيانات.",
      en: "Data analysis trainee.",
    },
    technologies: ["Data Preparation", "Data Analysis", "Reporting", "Python"],
    results: {
      ar: ["تقارير أداء واضحة لأصحاب المصلحة الرئيسيين"],
      en: ["Clear performance reports delivered to key organization stakeholders"],
    },
    type: { ar: "تدريب", en: "Traineeship" },
  },
];

/* ---------------- Software Exhibition ---------------- */
export const softwareProjects: ProjectCard[] = [
  {
    id: "holberton-track",
    name: "Advanced Software Engineering — Holberton × Tuwaiq",
    description: {
      ar: "مسار هندسة برمجيات متقدم وصارم بمنهج هجين: تعاون ميداني مكثف وهندسة مشاريع مستمرة عن بُعد — فبراير إلى أغسطس 2026.",
      en: "A prestigious, rigorous advanced software engineering track with a hybrid curriculum: intensive on-site peer collaboration and continuous remote project engineering — February to August 2026.",
    },
    problem: {
      ar: "تحديات هندسية واقعية تتطلب حلولًا برمجية منظمة وقابلة للتوسع.",
      en: "Real-world engineering challenges requiring structured, scalable software solutions.",
    },
    solution: {
      ar: "تنفيذ حلول تصميم برمجية مبتكرة قائمة على المشاريع، مع التركيز على هياكل البيانات المعقدة والخوارزميات وأساسات علوم الحاسب وتطبيقات هندسة البيانات.",
      en: "Implemented innovative project-based software design solutions focused on real-world engineering challenges, complex data structures, and algorithms — spanning CS foundations and data engineering applications.",
    },
    role: {
      ar: "متدربة هندسة برمجيات متقدمة — تعلم نظير ومراجعات كود نشطة تحت إشراف خبراء الصناعة.",
      en: "Advanced software engineering trainee — peer-to-peer learning and active code reviews under industry mentorship.",
    },
    technologies: ["Data Structures", "Algorithms", "Software Design", "Git", "Linux", "System Analysis"],
    results: {
      ar: ["إتقان أساسات علوم الحاسب وهندسة البيانات عبر مشاريع واقعية"],
      en: ["Mastery of CS foundations and data engineering through real-world projects"],
    },
    type: { ar: "برنامج هندسي مكثف", en: "Intensive Engineering Program" },
  },
];

/* ---------------- Design Exhibition (Studio) ---------------- */
export interface DesignDomain {
  id: string;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  tools: string[];
  ready: boolean;
}

export const designDomains: DesignDomain[] = [
  {
    id: "uiux",
    title: { ar: "تصميم واجهات المستخدم", en: "UI/UX Design" },
    desc: { ar: "واجهات تطبيقات ومنصات رقمية", en: "Application and digital platform interfaces" },
    tools: ["Figma"],
    ready: true,
  },
  {
    id: "graphic",
    title: { ar: "تصميم الجرافيك", en: "Graphic Design" },
    desc: { ar: "بوسترات وهويات بصرية", en: "Posters and visual identities" },
    tools: ["Canva", "Figma"],
    ready: true,
  },
  {
    id: "ai-visuals",
    title: { ar: "تصاميم مدعومة بالذكاء الاصطناعي", en: "AI-Powered Visuals" },
    desc: { ar: "ابتكارات بصرية مدعومة بالذكاء الاصطناعي", en: "AI-powered visual innovations" },
    tools: ["AI Tools", "Figma"],
    ready: true,
  },
  {
    id: "presentation",
    title: { ar: "تصميم العروض التقديمية", en: "Presentation Design" },
    desc: { ar: "عروض تنفيذية مهنية", en: "Professional executive presentations" },
    tools: ["Canva", "PowerPoint"],
    ready: true,
  },
  {
    id: "realestate",
    title: { ar: "تصميمات العقارات", en: "Real Estate Design" },
    desc: { ar: "تصاميم بصرية للقطاع العقاري", en: "Visual designs for the real estate sector" },
    tools: ["Canva", "AI Tools"],
    ready: true,
  },
  {
    id: "interior",
    title: { ar: "التصميم الداخلي", en: "Interior Design" },
    desc: { ar: "أعمال ومخططات إبداعية في التصميم الداخلي", en: "Creative interior design works and layouts" },
    tools: ["Design Tools"],
    ready: true,
  },
];

