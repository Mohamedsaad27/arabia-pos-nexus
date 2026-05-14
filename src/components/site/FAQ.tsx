import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "هل أحتاج إلى أجهزة خاصة لتشغيل النظام؟", a: "لا، ركيزة يعمل على جميع الأجهزة: الكمبيوتر، الجوال، التابلت، وأجهزة الكاشير الذكية. كل ما تحتاجه هو متصفح أو تحميل التطبيق." },
  { q: "هل النظام متوافق مع متطلبات هيئة الزكاة والضريبة؟", a: "نعم، ركيزة يدعم الفوترة الإلكترونية بالكامل (المرحلة الأولى والثانية) ومتوافق مع جميع متطلبات الجهات الرسمية." },
  { q: "هل يمكنني تجربة النظام قبل الاشتراك؟", a: "بالتأكيد. نقدم تجربة مجانية كاملة لمدة 14 يوماً بدون الحاجة إلى بطاقة ائتمان وبدون أي التزام." },
  { q: "هل النظام يعمل بدون اتصال بالإنترنت؟", a: "نعم، يعمل نظام الكاشير بشكل كامل بدون اتصال، ويُزامِن البيانات تلقائياً عند عودة الاتصال." },
  { q: "ما نوع الدعم الفني المتوفر؟", a: "نقدم دعماً فنياً عربياً على مدار الساعة عبر الواتساب، الهاتف، والبريد الإلكتروني، إضافة إلى مدير حساب مخصص لخطط المؤسسات." },
  { q: "هل بياناتي آمنة؟", a: "بياناتك مشفّرة بالكامل ومخزنة على خوادم سحابية متوافقة مع أعلى معايير الأمان العالمية، مع نسخ احتياطي يومي تلقائي." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            الأسئلة الشائعة
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            لديك <span className="text-gradient">سؤال؟</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            إجابات على الأسئلة الأكثر شيوعاً حول منصة ركيزة.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border bg-card shadow-card transition-all ${
                  isOpen ? "border-primary/30 shadow-glow" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-right"
                >
                  <span className="font-bold text-base md:text-lg">{f.q}</span>
                  <span className={`w-9 h-9 shrink-0 rounded-xl grid place-items-center transition-all ${
                    isOpen ? "gradient-primary text-white" : "bg-muted text-muted-foreground"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
