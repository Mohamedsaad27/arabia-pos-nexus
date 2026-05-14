import {
  ShoppingCart, Package, Users, Truck, BarChart3, Building2,
  CreditCard, ShieldCheck, CloudUpload, Printer, Wallet, FileText,
  Barcode, BellRing,
} from "lucide-react";

const features = [
  { i: ShoppingCart, t: "إدارة المبيعات", d: "ثوانٍ لإنشاء فاتورة كاملة مع خصومات وضرائب ومدفوعات متعددة." },
  { i: Package, t: "إدارة المخزون", d: "تتبع الكميات والمستودعات والتنبيهات للأصناف منخفضة الرصيد." },
  { i: Users, t: "إدارة العملاء", d: "ملفات عملاء غنية مع نقاط ولاء وتاريخ كامل للتعاملات." },
  { i: Truck, t: "إدارة الموردين", d: "أوامر شراء، تسويات، ومتابعة كاملة لحسابات الموردين." },
  { i: BarChart3, t: "التقارير المالية", d: "تقارير لحظية ذكية لاتخاذ قرارات مالية مبنية على البيانات." },
  { i: Building2, t: "تعدد الفروع", d: "أدر جميع فروعك من مكان واحد بصلاحيات وتقارير مستقلة." },
  { i: CreditCard, t: "نقاط البيع POS", d: "واجهة كاشير سريعة تعمل على جميع الأجهزة بدون اتصال." },
  { i: ShieldCheck, t: "إدارة الصلاحيات", d: "صلاحيات دقيقة لكل موظف وفرع مع سجل عمليات شامل." },
  { i: CloudUpload, t: "نسخ احتياطي سحابي", d: "بياناتك محمية ومشفّرة ومتاحة في أي وقت ومن أي جهاز." },
  { i: Printer, t: "الطباعة الحرارية", d: "دعم كامل لطابعات الإيصالات الحرارية بأحجام متعددة." },
  { i: Wallet, t: "إدارة المصروفات", d: "تسجيل وتصنيف المصروفات بسهولة مع ربط محاسبي تلقائي." },
  { i: FileText, t: "إدارة الفواتير", d: "فواتير ضريبية معتمدة متوافقة مع متطلبات هيئة الزكاة." },
  { i: Barcode, t: "دعم الباركود", d: "توليد وقراءة الباركود وطباعة ملصقات الأسعار بسرعة." },
  { i: BellRing, t: "إشعارات ذكية", d: "تنبيهات فورية للمبيعات والمخزون والتنبيهات الإدارية المهمة." },
];

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            المميزات
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            كل ما تحتاجه لإدارة <span className="text-gradient">أعمالك بذكاء</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            مجموعة متكاملة من الأدوات الاحترافية في منصة واحدة سهلة وسريعة.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((f, idx) => (
            <div
              key={f.t}
              className="group relative rounded-2xl bg-card border p-6 shadow-card hover:shadow-glow hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl gradient-primary grid place-items-center text-white shadow-soft group-hover:scale-110 transition-transform">
                  <f.i className="w-6 h-6" />
                </div>
                <h3 className="mt-5 font-extrabold text-lg">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
