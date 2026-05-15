import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BarChart3,
  Shield,
  Package,
  FileText,
  Store,
  TrendingUp,
  Target,
  Eye,
  Cloud,
  Layers,
  Zap,
  Users,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن — ركيزة" },
      {
        name: "description",
        content:
          "تعرّف على ركيزة، نظام ERP و POS سحابي متكامل لإدارة المبيعات والمخزون والفواتير والتقارير.",
      },
    ],
  }),
  component: AboutPage,
});

/* ─── Scroll Reveal Hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── PAGE ─── */
function AboutPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <VisionSection />
        <MissionSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════
   1. HERO SECTION (Flow POS style)
   ═══════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #7C3AED 100%)" }}>
      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        {/* Title */}
        <Reveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center mb-6">
            من نحن
          </h1>
        </Reveal>

        {/* Description */}
        <Reveal delay={100}>
          <p className="text-white/90 text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed mb-16">
           ركيزة هو نظام متكامل لإدارة المبيعات والمشتريات والمخزون،
            مصمم خصيصاً ليساعدك على تسجيل فواتيرك، متابعة أرباحك، وإدارة مخازنك
            ومخزونك بسهولة ودقة. كل شيء من مكان واحد بدون تعقيد.
          </p>
        </Reveal>

        {/* 3 Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {[
            {
              icon: Zap,
              title: "إعداد سهل وسريع لبدء العمل",
              desc: "ابدأ باستخدام النظام بخطوات واضحة ومباشرة، أضف فروعك ومخازنك ومنتجاتك، والنظام يتولى الباقي بشكل تلقائي.",
            },
            {
              icon: Layers,
              title: "إدارة شاملة للمبيعات والمشتريات",
              desc: "سجّل فواتير البيع والشراء بسرعة، تابع أرباحك تلقائياً، وراقب مخزونات عملائك ومورديك بكل سهولة ووضوح.",
            },
            {
              icon: BarChart3,
              title: "تقارير دقيقة لمتابعة أعمالك",
              desc: "احصل على تقارير تفصيلية عن مبيعاتك، مشترياتك، أرباحك، حركات المخزون، والمخازن لتتبع أعمالك بدقة وتتخذ قرارات صحيحة.",
            },
          ].map((f, i) => (
            <Reveal key={f.title} delay={200 + i * 100}>
              <div className="text-center group">
                {/* Icon circle */}
                <div className="w-16 h-16 mx-auto rounded-full bg-white/15 border border-white/20 grid place-items-center mb-5 group-hover:bg-white/25 transition-colors duration-300">
                  <f.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white text-xl font-extrabold mb-3">
                  {f.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   2. VISION SECTION (Image left, text right)
   ═══════════════════════════════════════════ */
function VisionSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Dashboard mockup */}
          <Reveal>
            <div className="relative">
              <div className="rounded-2xl bg-card border shadow-card overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 h-7 rounded-md bg-white/60 border mx-4 flex items-center px-3">
                    <span className="text-[10px] text-muted-foreground">
                      https://app.arabiapos.com/dashboard
                    </span>
                  </div>
                </div>
                {/* Dashboard content */}
                <div className="p-4 md:p-6">
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg gradient-primary grid place-items-center">
                        <Cloud className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-extrabold">
                        Arabia POS
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-muted" />
                      <div className="w-6 h-6 rounded bg-muted" />
                    </div>
                  </div>
                  {/* Stats row */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[
                      { label: "المبيعات", value: "12,450", color: "bg-primary/10" },
                      { label: "الفواتير", value: "348", color: "bg-success/10" },
                      { label: "العملاء", value: "1,204", color: "bg-warning/10" },
                      { label: "المنتجات", value: "5,670", color: "bg-secondary/10" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className={`rounded-lg ${s.color} p-2 text-center`}
                      >
                        <div className="text-[9px] text-muted-foreground">
                          {s.label}
                        </div>
                        <div className="text-xs font-extrabold mt-0.5">
                          {s.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Chart area */}
                  <div className="rounded-lg bg-muted/30 border p-3 mb-3">
                    <div className="text-[10px] font-bold text-muted-foreground mb-2">
                      تقرير المبيعات
                    </div>
                    <div className="flex items-end gap-1 h-16">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t gradient-primary opacity-50"
                          style={{
                            height: `${15 + Math.random() * 85}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Table mock */}
                  <div className="rounded-lg border overflow-hidden">
                    <div className="grid grid-cols-4 gap-0 text-[9px] font-bold text-muted-foreground bg-muted/40 p-2">
                      <span>المنتج</span>
                      <span>الكمية</span>
                      <span>السعر</span>
                      <span>الإجمالي</span>
                    </div>
                    {[
                      { p: "منتج 1", q: "15", pr: "250", t: "3,750" },
                      { p: "منتج 2", q: "8", pr: "500", t: "4,000" },
                      { p: "منتج 3", q: "22", pr: "120", t: "2,640" },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-4 gap-0 text-[9px] p-2 border-t"
                      >
                        <span>{row.p}</span>
                        <span>{row.q}</span>
                        <span>{row.pr}</span>
                        <span className="font-bold">{row.t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-4 -left-4 grid grid-cols-5 gap-1.5 opacity-20">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                  />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: Text content */}
          <div>
            <Reveal delay={100}>
              <span className="text-primary font-bold text-sm mb-2 block">
                تطوير الأعمال بأسلوب متميز
              </span>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                رؤيتنا
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                نسعى في ركيزة إلى أن نكون الخيار الأول لأصحاب
                الأعمال في إدارة مبيعاتهم ومشترياتهم ومخازنهم، من خلال تقديم
                نظام بسيط يسهّل عليهم تنظيم أعمالهم اليومية ومتابعة أرباحهم
                بوضوح.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                نؤمن بأن بيانات واضحة تساعدك على اتخاذ قرارات صحيحة. لذلك
                نطوّر ركيزة باستمرار ليقدم لك واجهة سهلة الاستخدام،
                تقارير دقيقة، وأدوات عملية تناسب احتياجاتك، هدفنا أن نساعدك على
                تنمية أعمالك.
              </p>
            </Reveal>

            <Reveal delay={500}>
              <div className="flex flex-wrap gap-3">
                {["سهولة الاستخدام", "تقارير دقيقة", "دعم مستمر"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/5 text-primary text-sm font-semibold border border-primary/10"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {tag}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   3. MISSION SECTION (Text left, image right)
   ═══════════════════════════════════════════ */
function MissionSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <Reveal>
              <span className="text-primary font-bold text-sm mb-2 block">
                نحو إدارة أفضل لأعمالك
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                رسالتنا
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                رسالتنا في ركيزة هي تمكينك من إدارة أعمالك بكفاءة من
                خلال نظام بسيط ودقيق، نقدم لك أدوات عملية تساعدك على تسجيل
                فواتير البيع والشراء، متابعة الأرباح، وإدارة المخزون بطريقة
                واضحة وأسهل تقلل الأخطاء وتسرع العمليات.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                نلتزم بتقديم نظام مرن يناسب مختلف الأنشطة التجارية، صغيرة أو
                متوسطة، مع دعم فني مستمر وتحديثات دورية تواكب احتياجاتك. هدفنا
                أن نكون شريكك الموثوق لتحقيق النمو وتحسين الأداء من خلال نظام
                يوفّر وقتك ويبسط عملك.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-wrap gap-3">
                {["نظام مرن", "دعم فني متواصل", "تحديثات مستمرة"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/5 text-primary text-sm font-semibold border border-primary/10"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {tag}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>

          {/* Right: Dashboard mockup */}
          <Reveal delay={200}>
            <div className="relative">
              <div className="rounded-2xl bg-card border shadow-card overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 h-7 rounded-md bg-white/60 border mx-4 flex items-center px-3">
                    <span className="text-[10px] text-muted-foreground">
                      https://app.arabiapos.com/inventory
                    </span>
                  </div>
                </div>
                {/* Inventory dashboard */}
                <div className="p-4 md:p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg gradient-primary grid place-items-center">
                        <Package className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-extrabold">
                        إدارة المخزون
                      </span>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold">
                      محدّث الآن
                    </div>
                  </div>
                  {/* Filter bar */}
                  <div className="flex gap-2 mb-4">
                    {["الكل", "متوفر", "منخفض", "نفذ"].map((f, i) => (
                      <span
                        key={f}
                        className={`px-3 py-1 rounded-lg text-[10px] font-bold ${
                          i === 0
                            ? "gradient-primary text-white"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  {/* Inventory table */}
                  <div className="rounded-lg border overflow-hidden">
                    <div className="grid grid-cols-5 gap-0 text-[9px] font-bold text-muted-foreground bg-muted/40 p-2">
                      <span>المنتج</span>
                      <span>المخزون</span>
                      <span>الحد الأدنى</span>
                      <span>الحالة</span>
                      <span>آخر تحديث</span>
                    </div>
                    {[
                      { p: "منتج أ", s: "450", m: "50", st: "متوفر", c: "text-success", d: "اليوم" },
                      { p: "منتج ب", s: "12", m: "20", st: "منخفض", c: "text-warning", d: "أمس" },
                      { p: "منتج ج", s: "0", m: "10", st: "نفذ", c: "text-destructive", d: "منذ 3 أيام" },
                      { p: "منتج د", s: "1,200", m: "100", st: "متوفر", c: "text-success", d: "اليوم" },
                      { p: "منتج هـ", s: "8", m: "15", st: "منخفض", c: "text-warning", d: "منذ يومين" },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-5 gap-0 text-[9px] p-2 border-t"
                      >
                        <span>{row.p}</span>
                        <span>{row.s}</span>
                        <span>{row.m}</span>
                        <span className={`font-bold ${row.c}`}>{row.st}</span>
                        <span>{row.d}</span>
                      </div>
                    ))}
                  </div>
                  {/* Summary bar */}
                  <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
                    <span>إجمالي المنتجات: 5,670</span>
                    <span className="text-warning">⚠ 23 منتج منخفض</span>
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 grid grid-cols-5 gap-1.5 opacity-20">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   4. FEATURES SECTION
   ═══════════════════════════════════════════ */
function FeaturesSection() {
  const features = [
    {
      icon: TrendingUp,
      title: "إدارة المبيعات",
      desc: "تتبع جميع عمليات البيع من نقطة البيع إلى التقارير اليومية مع تحليلات ذكية.",
    },
    {
      icon: Package,
      title: "إدارة المخزون",
      desc: "راقب مستويات المخزون تلقائياً وتنبّه عند الحاجة لإعادة التوريد.",
    },
    {
      icon: FileText,
      title: "الفواتير الإلكترونية",
      desc: "أنشئ فواتير احترافية متوافقة مع الأنظمة الضريبية بنقرة واحدة.",
    },
    {
      icon: Store,
      title: "تعدّد الفروع",
      desc: "أدِر جميع فروعك من لوحة تحكم واحدة مع صلاحيات مخصصة لكل فرع.",
    },
    {
      icon: BarChart3,
      title: "التقارير والتحليلات",
      desc: "احصل على رؤى عميقة حول أداء عملك مع تقارير تفاعلية ورسوم بيانية.",
    },
    {
      icon: Shield,
      title: "الأمان والنسخ الاحتياطي",
      desc: "بياناتك محمية بأعلى معايير الأمان مع نسخ احتياطي تلقائي يومي.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              كل ما تحتاجه في{" "}
              <span className="text-gradient">منصة واحدة</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              حلول متكاملة مصممة خصيصاً لتلبية احتياجات الأعمال العربية
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="group rounded-2xl bg-card border p-7 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-extrabold mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   5. CTA SECTION
   ═══════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
            style={{ background: "linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #7C3AED 100%)" }}
          >
            {/* Subtle dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative max-w-3xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                نحن هنا لمساعدتك
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                انضم لآلاف الشركات التي تثق بنا لإدارة عملياتها اليومية بكفاءة
                واحترافية.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/pricing"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-extrabold bg-white text-navy hover:bg-white/90 transition-all hover:-translate-y-0.5 shadow-soft"
                >
                  ابدأ التجربة المجانية
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-extrabold border-2 border-white/30 text-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
                >
                  تواصل معنا
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
