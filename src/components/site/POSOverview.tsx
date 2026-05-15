import { Link } from "@tanstack/react-router";
import { ArrowLeft, Receipt, ScanBarcode, Printer, Smartphone, CheckCircle2 } from "lucide-react";

export function POSOverview() {
  return (
    <section className="py-24 gradient-soft relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
              نقاط البيع POS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              كاشير سحابي <span className="text-gradient">سريع ومرن</span> يعمل على أي جهاز
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              واجهة كاشير حديثة تعمل على iPad، الأندرويد، والكمبيوتر — بدون توقف حتى عند انقطاع الإنترنت.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { i: ScanBarcode, t: "دعم الباركود" },
                { i: Printer, t: "الطباعة الحرارية" },
                { i: Smartphone, t: "وضع عدم الاتصال" },
                { i: Receipt, t: "فواتير ضريبية" },
              ].map((f) => (
                <div key={f.t} className="flex items-center gap-3 rounded-xl bg-card border p-3 shadow-soft">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center text-primary">
                    <f.i className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold">{f.t}</span>
                </div>
              ))}
            </div>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              اكتشف نظام الكاشير
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-card border shadow-glow p-5">
              <div className="text-xs font-medium text-muted-foreground mb-3 text-center">شاشة الكاشير</div>
              <div className="grid grid-cols-3 gap-2">
                {["برغر", "بيتزا", "قهوة", "شاي", "عصير", "حلويات", "سلطة", "ساندويتش", "ماء"].map((p, i) => (
                  <div
                    key={p}
                    className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-primary-glow/10 border grid place-items-center text-xs font-bold hover:gradient-primary hover:text-white transition-all cursor-pointer"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    {p}
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-muted/40 p-3 space-y-2">
                <div className="flex justify-between text-xs"><span>المجموع</span><span className="font-extrabold">‏126.50 ر.س</span></div>
                <div className="flex justify-between text-xs"><span>الضريبة</span><span className="font-bold">‏18.97 ر.س</span></div>
                <div className="flex justify-between text-sm pt-2 border-t"><span className="font-bold">الإجمالي</span><span className="font-extrabold text-primary">‏145.47 ر.س</span></div>
                <button className="w-full py-2.5 rounded-xl gradient-primary text-white text-sm font-extrabold shadow-soft">
                  دفع وإصدار الفاتورة
                </button>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 rounded-2xl glass shadow-card p-3 animate-float-slow">
              <CheckCircle2 className="w-5 h-5 text-success inline ml-2" />
              <span className="text-xs font-bold">فاتورة #1284 تم إصدارها</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
