import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { UtensilsCrossed, Coffee, ShoppingBag, Pill, Shirt, Smartphone, Store, Building2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

const industries = [
  { i: UtensilsCrossed, t: "المطاعم", d: "خرائط طاولات، طلبات المطبخ، التوصيل، والتكامل مع تطبيقات الطلب." },
  { i: Coffee, t: "المقاهي", d: "طلبات سريعة، تخصيص المنتجات، وبرنامج ولاء عملاء متكامل." },
  { i: ShoppingBag, t: "تجارة التجزئة", d: "إدارة آلاف الأصناف بالباركود، الأحجام والألوان، وعروض ذكية." },
  { i: Pill, t: "الصيدليات", d: "تتبع الأدوية بالباطشات وتواريخ الصلاحية وتنبيهات استباقية." },
  { i: Shirt, t: "الأزياء", d: "إدارة المنتجات بالمقاسات والألوان وعروض المواسم." },
  { i: Smartphone, t: "الإلكترونيات", d: "أرقام تسلسلية، ضمانات، وخدمات ما بعد البيع." },
  { i: Store, t: "السوبر ماركت", d: "كاشير سريع، موازين، أصناف بالوزن، وعروض البنادل." },
  { i: Building2, t: "السلاسل والامتيازات", d: "إدارة موحدة لعشرات الفروع بصلاحيات مرنة." },
];

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "الصناعات — ركيزة" },
      { name: "description", content: "حلول ركيزة المخصصة لكل قطاع: مطاعم، مقاهي، تجزئة، صيدليات، أزياء وأكثر." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <section className="container mx-auto px-4 text-center max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            الصناعات
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            مصمم خصيصاً <span className="text-gradient">لقطاعك</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            حلول مخصصة لكل صناعة مع أدوات وميزات متوافقة مع احتياجات عملك.
          </p>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((s) => (
              <Link
                key={s.t}
                to="/contact"
                className="group rounded-2xl bg-card border p-7 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 grid place-items-center text-primary group-hover:gradient-primary group-hover:text-white transition-all mb-4">
                  <s.i className="w-7 h-7" />
                </div>
                <h3 className="font-extrabold text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
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
