import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    n: "عبدالله الحارثي",
    r: "مالك سلسلة مقاهي",
    t: "نقلنا من نظام قديم مرهق إلى ركيزة، ووفرنا ساعات يومياً في إدارة الفروع والتقارير.",
  },
  {
    n: "ريم القحطاني",
    r: "مديرة عمليات — مطعم",
    t: "التكامل مع تطبيقات التوصيل وفّر علينا أخطاء كثيرة، والكاشير سريع جداً حتى في وقت الذروة.",
  },
  {
    n: "ماجد العنزي",
    r: "صاحب صيدلية",
    t: "تنبيهات الصلاحية والحدود الدنيا أنقذتنا أكثر من مرة، ودعم الفريق فعلاً سريع وعربي.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            آراء عملائنا
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            تجارب <span className="text-gradient">حقيقية</span> من تجار حقيقيين
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.n} className="rounded-2xl bg-card border p-7 shadow-card hover:shadow-glow transition-all relative">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/15" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">"{t.t}"</p>
              <div className="mt-5 pt-5 border-t flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-primary text-white grid place-items-center font-extrabold">
                  {t.n[0]}
                </div>
                <div>
                  <div className="font-extrabold text-sm">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
