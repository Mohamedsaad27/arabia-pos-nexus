import { Link } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "البداية",
    price: "99",
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
    price: "249",
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
    price: "حسب الطلب",
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

export function Pricing() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            الأسعار
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            خطط <span className="text-gradient">شفافة ومرنة</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            ادفع شهرياً، ألغِ في أي وقت، بدون رسوم خفية.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((p) => (
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
              <h3 className={`text-xl font-extrabold ${p.highlight ? "text-white" : ""}`}>{p.name}</h3>
              <p className={`mt-2 text-sm ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                {p.desc}
              </p>
              <div className="mt-6 flex items-end gap-2">
                <span className={`text-5xl font-extrabold ${p.highlight ? "text-white" : "text-gradient"}`}>
                  {p.price}
                </span>
                <span className={`pb-2 text-sm ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                  {typeof p.price === "string" && p.price.includes("الطلب") ? "" : "ر.س /"} {p.period}
                </span>
              </div>

              <ul className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className={`w-5 h-5 rounded-full grid place-items-center shrink-0 ${
                      p.highlight ? "bg-primary-glow/30 text-white" : "bg-success/15 text-success"
                    }`}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
