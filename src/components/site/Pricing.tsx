import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, X, Sparkles, ArrowLeft, Star, Shield, Zap } from "lucide-react";

/* ═══════════════════════════════════════════
   PRICING WITH MONTHLY/YEARLY TOGGLE
   ═══════════════════════════════════════════ */

const monthlyPlans = [
  {
    name: "البداية",
    monthlyPrice: 99,
    yearlyPrice: 79,
    period: "شهرياً",
    desc: "مثالي للأنشطة الصغيرة والكاشير الواحد.",
    features: [
      "كاشير واحد",
      "إدارة المخزون الأساسية",
      "تقارير يومية",
      "دعم عبر البريد",
      "نسخ احتياطي سحابي",
    ],
    cta: "ابدأ الآن",
    highlight: false,
  },
  {
    name: "الاحترافي",
    monthlyPrice: 249,
    yearlyPrice: 199,
    period: "شهرياً",
    desc: "الأكثر شيوعاً — للأعمال النامية.",
    features: [
      "حتى 3 كاشير",
      "تعدد الفروع",
      "تقارير متقدمة لحظية",
      "دعم فني على مدار الساعة",
      "إدارة موظفين وصلاحيات",
      "تكامل تطبيقات التوصيل",
    ],
    cta: "ابدأ التجربة",
    highlight: true,
  },
  {
    name: "المؤسسات",
    monthlyPrice: null,
    yearlyPrice: null,
    period: "تخصيص كامل",
    desc: "للشركات الكبرى وسلاسل المتاجر.",
    features: [
      "كاشير وفروع غير محدودة",
      "API متكامل",
      "مدير حساب مخصص",
      "تدريب موظفين",
      "اتفاقية مستوى خدمة SLA",
      "تكاملات مخصصة",
    ],
    cta: "تواصل معنا",
    highlight: false,
  },
];

function PricingToggle({
  isYearly,
  onToggle,
}: {
  isYearly: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      <span
        className={`text-sm font-bold transition-colors ${
          !isYearly ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        شهري
      </span>
      <button
        onClick={onToggle}
        className={`relative w-14 h-7 rounded-full transition-colors ${
          isYearly ? "bg-primary" : "bg-muted"
        }`}
        aria-label="تبديل بين الشهري والسنوي"
      >
        <div
          className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-soft transition-transform ${
            isYearly ? "translate-x-1" : "translate-x-7"
          }`}
          style={{ right: "2px" }}
        />
      </button>
      <span
        className={`text-sm font-bold transition-colors ${
          isYearly ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        سنوي
      </span>
      {isYearly && (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-success/15 text-success border border-success/20">
          وفّر 20%
        </span>
      )}
    </div>
  );
}

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 relative" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            الأسعار
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            خطط <span className="text-gradient">شفافة ومرنة</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            ادفع شهرياً أو سنوياً، ألغِ في أي وقت، بدون رسوم خفية.
          </p>
        </div>

        <PricingToggle isYearly={isYearly} onToggle={() => setIsYearly((v) => !v)} />

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {monthlyPlans.map((p) => {
            const price = isYearly && p.yearlyPrice ? p.yearlyPrice : p.monthlyPrice;
            const displayPrice =
              typeof price === "number" ? price.toLocaleString("ar-EG") : p.period;
            const isCustom = typeof price !== "number";

            return (
              <div
                key={p.name}
                className={`relative rounded-3xl border p-8 transition-all hover:-translate-y-1 ${
                  p.highlight
                    ? "bg-navy text-white shadow-glow border-transparent"
                    : "bg-card shadow-card hover:shadow-glow"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 right-8 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-extrabold bg-warning text-navy">
                    <Sparkles className="w-3 h-3" /> الأكثر شيوعاً
                  </div>
                )}
                <h3
                  className={`text-xl font-extrabold ${
                    p.highlight ? "text-white" : ""
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    p.highlight ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {p.desc}
                </p>
                <div className="mt-6 flex items-end gap-2">
                  <span
                    className={`text-5xl font-extrabold ${
                      p.highlight ? "text-white" : "text-gradient"
                    }`}
                  >
                    {isCustom ? displayPrice : displayPrice}
                  </span>
                  {!isCustom && (
                    <span
                      className={`pb-2 text-sm ${
                        p.highlight ? "text-white/70" : "text-muted-foreground"
                      }`}
                    >
                      ر.س / {p.period}
                    </span>
                  )}
                </div>
                {isYearly && !isCustom && (
                  <div
                    className={`mt-1 text-xs ${
                      p.highlight ? "text-white/50" : "text-muted-foreground"
                    }`}
                  >
                    {p.monthlyPrice} ر.س شهرياً عند الدفع الشهري
                  </div>
                )}

                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span
                        className={`w-5 h-5 rounded-full grid place-items-center shrink-0 ${
                          p.highlight
                            ? "bg-primary-glow/30 text-white"
                            : "bg-success/15 text-success"
                        }`}
                      >
                        <Check className="w-3 h-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to={p.name === "المؤسسات" ? "/contact" : "/contact"}
                  className={`mt-8 inline-flex w-full justify-center items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all ${
                    p.highlight
                      ? "bg-white text-navy hover:bg-white/90"
                      : "gradient-primary text-primary-foreground shadow-soft hover:shadow-glow"
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FEATURE COMPARISON TABLE
   ═══════════════════════════════════════════ */

const comparisonFeatures = [
  { feature: "عدد الكاشير", starter: "1", pro: "3", enterprise: "غير محدود" },
  { feature: "عدد الفروع", starter: "1", pro: "حتى 5", enterprise: "غير محدود" },
  { feature: "إدارة المخزون", starter: true, pro: true, enterprise: true },
  { feature: "الفوترة الإلكترونية", starter: true, pro: true, enterprise: true },
  { feature: "التقارير والتحليلات", starter: "أساسية", pro: "متقدمة", enterprise: "مخصصة" },
  { feature: "إدارة الموظفين", starter: false, pro: true, enterprise: true },
  { feature: "API للتكامل", starter: false, pro: true, enterprise: true },
  { feature: "تكاملات التوصيل", starter: false, pro: true, enterprise: true },
  { feature: "الدعم الفني", starter: "بريد إلكتروني", pro: "24/7", enterprise: "مدير حساب" },
  { feature: "النسخ الاحتياطي", starter: "يومي", pro: "يومي", enterprise: "لحظي" },
  { feature: "تخصيص الفواتير", starter: false, pro: true, enterprise: true },
  { feature: "اتفاقية SLA", starter: false, pro: false, enterprise: true },
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-5 h-5 ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-5 h-5 ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function FeatureComparison() {
  return (
    <section className="py-20 md:py-28 bg-muted/20" id="compare">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            مقارنة الخطط
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            قارن بين <span className="text-gradient">الخطط</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            اختر الخطة التي تناسب احتياجات عملك
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-right py-4 px-4 text-sm font-bold text-muted-foreground w-1/4">
                  الميزة
                </th>
                <th className="text-center py-4 px-4">
                  <div className="text-sm font-extrabold text-foreground">
                    البداية
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    99 ر.س/شهر
                  </div>
                </th>
                <th className="text-center py-4 px-4 bg-navy rounded-t-xl">
                  <div className="text-sm font-extrabold text-white">
                    الاحترافي
                  </div>
                  <div className="text-xs text-white/60 mt-1">
                    249 ر.س/شهر
                  </div>
                </th>
                <th className="text-center py-4 px-4">
                  <div className="text-sm font-extrabold text-foreground">
                    المؤسسات
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    حسب الطلب
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-border/50 ${
                    i % 2 === 0 ? "bg-card/50" : ""
                  }`}
                >
                  <td className="py-4 px-4 text-sm font-semibold text-foreground">
                    {row.feature}
                  </td>
                  {/* Starter */}
                  <td className="py-4 px-4 text-center">
                    {typeof row.starter === "boolean" ? (
                      row.starter ? (
                        <CheckIcon className="text-success mx-auto" />
                      ) : (
                        <XIcon className="text-muted-foreground/30 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        {row.starter}
                      </span>
                    )}
                  </td>
                  {/* Pro */}
                  <td className="py-4 px-4 text-center bg-navy/5">
                    {typeof row.pro === "boolean" ? (
                      row.pro ? (
                        <CheckIcon className="text-success mx-auto" />
                      ) : (
                        <XIcon className="text-muted-foreground/30 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-white/80 font-semibold">
                        {row.pro}
                      </span>
                    )}
                  </td>
                  {/* Enterprise */}
                  <td className="py-4 px-4 text-center">
                    {typeof row.enterprise === "boolean" ? (
                      row.enterprise ? (
                        <CheckIcon className="text-success mx-auto" />
                      ) : (
                        <XIcon className="text-muted-foreground/30 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        {row.enterprise}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TESTIMONIALS
   ══════════════════════════════════════════ */

const testimonials = [
  {
    quote:
      "ركيزة غيّر طريقة إدارتي للمطعم بالكامل. الفواتير صارت أسرع والمخزون مضبوط 100%. الدعم الفني ممتاز ومتجاوب.",
    name: "أحمد العتيبي",
    role: "صاحب مطعم",
    business: "مطعم",
    rating: 5,
    emoji: "️",
  },
  {
    quote:
      "من أفضل أنظمة الكاشير اللي استخدمتها. سهل الاستخدام والتقارير مفصلة جداً. وفّر عليّ وقت كثير في الجرد اليومي.",
    name: "فاطمة الزهراني",
    role: "مديرة بقالة",
    business: "بقالة",
    rating: 5,
    emoji: "🛒",
  },
  {
    quote:
      "نظام ممتاز للكافيه! إدارة الطلبات والمخزون صارت أسهل بكثير. أنصح فيه كل صاحب عمل يبحث عن حل متكامل.",
    name: "خالد الدوسري",
    role: "صاحب كافيه",
    business: "كافيه",
    rating: 5,
    emoji: "☕",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-warning text-warning"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            آراء العملاء
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            ماذا يقول <span className="text-gradient">عملاؤنا</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            تجارب حقيقية من أصحاب أعمال يستخدمون ركيزة يومياً
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-card border p-7 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <p className="mt-5 text-muted-foreground leading-relaxed text-sm">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border/50">
                <div className="w-11 h-11 rounded-full gradient-primary grid place-items-center text-white font-extrabold text-sm shadow-soft">
                  {t.emoji}
                </div>
                <div>
                  <div className="font-extrabold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} — {t.business}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FREE TRIAL BANNER
   ══════════════════════════════════════════ */

export function FreeTrialBanner() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center"
          style={{
            background: "linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #7C3AED 100%)",
          }}
        >
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Floating shapes */}
          <div className="absolute top-4 left-8 w-20 h-20 rounded-full bg-white/10 blur-xl" />
          <div className="absolute bottom-4 right-12 w-32 h-32 rounded-full bg-white/5 blur-2xl" />

          <div className="relative max-w-3xl mx-auto text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/15 border border-white/20 mb-6">
              <Zap className="w-3.5 h-3.5" />
              تجربة مجانية
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              جرّب ركيزة مجاناً لمدة 14 يوماً
            </h2>
            <p className="text-white/80 text-lg mb-2">
              بدون بطاقة ائتمان — بدون أي التزام
            </p>
            <p className="text-white/60 text-sm mb-8">
              استمتع بجميع مزايا خطة الاحترافي مجاناً لمدة أسبوعين كاملين
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-extrabold bg-white text-navy hover:bg-white/90 transition-all hover:-translate-y-0.5 shadow-soft"
              >
                ابدأ تجربتك المجانية
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-extrabold border-2 border-white/30 text-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                <Shield className="w-5 h-5" />
                بدون بطاقة ائتمان
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/50 text-xs">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                بيانات مشفّرة
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                إعداد فوري
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                إلغاء في أي وقت
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   COMPETITOR COMPARISON
   ═══════════════════════════════════════════ */

const competitorFeatures = [
  {
    feature: "الفوترة الإلكترونية",
    rakeeza: true,
    compA: true,
    compB: false,
  },
  {
    feature: "تعدد الفروع",
    rakeeza: true,
    compA: true,
    compB: false,
  },
  {
    feature: "إدارة المخزون المتقدمة",
    rakeeza: true,
    compA: false,
    compB: false,
  },
  {
    feature: "التقارير والتحليلات",
    rakeeza: true,
    compA: true,
    compB: false,
  },
  {
    feature: "الدعم الفني 24/7",
    rakeeza: true,
    compA: false,
    compB: false,
  },
  {
    feature: "API للتكامل",
    rakeeza: true,
    compA: false,
    compB: false,
  },
  {
    feature: "تطبيق جوال",
    rakeeza: true,
    compA: true,
    compB: true,
  },
  {
    feature: "العمل بدون إنترنت",
    rakeeza: true,
    compA: false,
    compB: false,
  },
];

export function CompetitorComparison() {
  return (
    <section className="py-20 md:py-28 bg-muted/20" id="vs-competitors">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            لماذا ركيزة؟
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            ركيزة <span className="text-gradient">يتفوق</span> على المنافسين
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            قارن بنفسك واكتشف لماذا يختار أصحاب الأعمال ركيزة
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full min-w-[560px]">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-right py-4 px-4 text-sm font-bold text-muted-foreground w-1/4">
                  الميزة
                </th>
                <th className="text-center py-4 px-4 bg-navy rounded-t-xl">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-7 h-7 rounded-lg gradient-primary grid place-items-center">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm font-extrabold text-white">
                      ركيزة
                    </span>
                  </div>
                </th>
                <th className="text-center py-4 px-4">
                  <div className="text-sm font-bold text-foreground">
                    نظام أ
                  </div>
                </th>
                <th className="text-center py-4 px-4">
                  <div className="text-sm font-bold text-foreground">
                    نظام ب
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {competitorFeatures.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-border/50 ${
                    i % 2 === 0 ? "bg-card/50" : ""
                  }`}
                >
                  <td className="py-4 px-4 text-sm font-semibold text-foreground">
                    {row.feature}
                  </td>
                  {/* Rakeeza - highlighted */}
                  <td className="py-4 px-4 text-center bg-navy/5">
                    <CheckIcon className="text-success mx-auto w-6 h-6" />
                  </td>
                  {/* Competitor A */}
                  <td className="py-4 px-4 text-center">
                    {row.compA ? (
                      <CheckIcon className="text-success mx-auto" />
                    ) : (
                      <XIcon className="text-muted-foreground/30 mx-auto" />
                    )}
                  </td>
                  {/* Competitor B */}
                  <td className="py-4 px-4 text-center">
                    {row.compB ? (
                      <CheckIcon className="text-success mx-auto" />
                    ) : (
                      <XIcon className="text-muted-foreground/30 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-extrabold gradient-primary text-primary-foreground shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            ابدأ مع ركيزة الآن
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
