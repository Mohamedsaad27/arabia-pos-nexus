import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { Search, ArrowLeft, Calendar, User } from "lucide-react";

const categories = ["الكل", "نصائح للأعمال", "تحديثات المنتج", "قصص نجاح", "تقنية", "تسويق"];

const posts = [
  { t: "كيف تختار نظام نقاط البيع المناسب لمشروعك؟", e: "دليل شامل يساعدك على اتخاذ القرار الصحيح بناءً على حجم وطبيعة عملك.", c: "نصائح للأعمال", d: "12 مايو 2026", a: "سارة الزهراني" },
  { t: "10 طرق لزيادة مبيعات مقهاك في رمضان", e: "استراتيجيات مجرّبة لرفع متوسط الفاتورة وعدد الزبائن خلال المواسم.", c: "تسويق", d: "08 مايو 2026", a: "خالد العتيبي" },
  { t: "إطلاق وحدة المحاسبة الجديدة المتوافقة مع ZATCA", e: "كل ما تحتاج معرفته عن التحديث الأخير ومتطلبات الفاتورة الإلكترونية.", c: "تحديثات المنتج", d: "01 مايو 2026", a: "ياسر الشمري" },
  { t: "قصة نجاح: مقهى رواق ينمو 4× في عام واحد", e: "كيف ساعد ركيزة سلسلة رواق على التوسع من فرعين إلى ثمانية فروع.", c: "قصص نجاح", d: "24 أبريل 2026", a: "لينا القحطاني" },
  { t: "أفضل ممارسات إدارة المخزون للسوبرماركت", e: "نصائح عملية لتقليل الفاقد ورفع كفاءة دوران المخزون.", c: "نصائح للأعمال", d: "18 أبريل 2026", a: "خالد العتيبي" },
  { t: "الذكاء الاصطناعي في تحليل بيانات المبيعات", e: "كيف تستفيد من تقارير ركيزة الذكية لاتخاذ قرارات أسرع وأدق.", c: "تقنية", d: "10 أبريل 2026", a: "ياسر الشمري" },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "المدونة — ركيزة" },
      { name: "description", content: "مقالات ونصائح حول إدارة الأعمال، نقاط البيع، المحاسبة، والتسويق." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <section className="container mx-auto px-4 text-center max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            المدونة
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            رؤى ونصائح <span className="text-gradient">لنمو أعمالك</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            مقالات أسبوعية من خبراء ركيزة لمساعدتك على إدارة وتنمية أعمالك.
          </p>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10">
            <div className="relative md:max-w-md w-full">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="ابحث في المدونة..."
                className="w-full pr-10 pl-4 py-3 rounded-2xl bg-card border shadow-soft text-sm focus:outline-none focus:border-primary/40 transition"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c, i) => (
                <button
                  key={c}
                  className={`px-4 py-2 rounded-full text-xs font-bold border transition ${i === 0 ? "gradient-primary text-white border-transparent" : "bg-card hover:border-primary/40"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Featured */}
          <Link to="/blog" className="block group rounded-3xl bg-card border shadow-card hover:shadow-glow transition-all overflow-hidden mb-10">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 to-primary-glow/30 grid place-items-center">
                <span className="text-7xl font-extrabold text-gradient opacity-50">ركيزة</span>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs font-bold text-primary mb-2">مقال مميز · {featured.c}</span>
                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight group-hover:text-primary transition">
                  {featured.t}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{featured.e}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{featured.a}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{featured.d}</span>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                  اقرأ المقال <ArrowLeft className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p) => (
              <Link key={p.t} to="/blog" className="group rounded-2xl bg-card border shadow-card hover:shadow-glow hover:-translate-y-1 transition-all overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/15 to-primary-glow/25 grid place-items-center">
                  <span className="text-3xl font-extrabold text-gradient opacity-60">{p.c}</span>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{p.c}</span>
                  <h3 className="mt-2 font-extrabold text-lg leading-snug group-hover:text-primary transition">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{p.e}</p>
                  <div className="mt-4 flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span>{p.a}</span><span>·</span><span>{p.d}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
