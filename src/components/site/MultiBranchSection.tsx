import { Building2, MapPin, ArrowLeftRight, Users } from "lucide-react";

export function MultiBranchSection() {
  return (
    <section className="py-24 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            الفروع المتعددة
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            أدر كل <span className="text-gradient">فروعك</span> من مكان واحد
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            وحّد عمليات فروعك، تابع الأداء، وحوّل المخزون بسلاسة بين الفروع.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: Building2, t: "فروع غير محدودة", d: "أضف عدد لا نهائي من الفروع بصلاحيات مستقلة." },
            { i: MapPin, t: "تتبع جغرافي", d: "اعرف أداء كل فرع على الخريطة." },
            { i: ArrowLeftRight, t: "تحويلات داخلية", d: "نقل المخزون بين الفروع بنقرة واحدة." },
            { i: Users, t: "موظفون لكل فرع", d: "تحكم بالموظفين والمناوبات لكل فرع." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl bg-card border p-6 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl gradient-primary text-white grid place-items-center mb-4 shadow-soft">
                <f.i className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
