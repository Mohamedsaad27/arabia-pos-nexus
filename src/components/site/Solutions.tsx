import { Coffee, UtensilsCrossed, ShoppingBag, Scissors, Pill, Store } from "lucide-react";

const solutions = [
  { i: Coffee, t: "المقاهي والكافيهات", d: "إدارة الطلبات السريعة، تخصيص المنتجات، وبرنامج ولاء عملاء متكامل." },
  { i: UtensilsCrossed, t: "المطاعم", d: "خرائط طاولات، طلبات المطبخ، التوصيل، والتكامل مع تطبيقات الطلب." },
  { i: ShoppingBag, t: "متاجر التجزئة", d: "إدارة آلاف الأصناف بالباركود، الأحجام والألوان، وعروض ذكية." },
  { i: Scissors, t: "صالونات التجميل", d: "حجوزات، خدمات وموظفين، وعمولات تلقائية مرنة." },
  { i: Pill, t: "الصيدليات", d: "تتبع الأدوية بالباطشات وتواريخ الصلاحية وتنبيهات استباقية." },
  { i: Store, t: "السوبر ماركت", d: "كاشير سريع، موازين، أصناف بالوزن، وإدارة عروض البنادل." },
];

export function Solutions() {
  return (
    <section className="py-24 relative gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            الحلول
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            مصمم خصيصاً <span className="text-gradient">لقطاعك</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            حلول مخصصة بناءً على متطلبات نشاطك التجاري لتسريع نموك.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((s) => (
            <div
              key={s.t}
              className="group rounded-2xl bg-card border p-7 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 grid place-items-center text-primary group-hover:gradient-primary group-hover:text-white transition-all">
                  <s.i className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
