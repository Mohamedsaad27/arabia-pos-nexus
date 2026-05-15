import { Link } from "@tanstack/react-router";
import { ArrowLeft, Layers, Boxes, Users2, Wallet, FileText, Building2, CheckCircle2 } from "lucide-react";

const erpModules = [
  { i: Wallet, t: "المحاسبة" },
  { i: Boxes, t: "المخزون" },
  { i: Users2, t: "الموارد البشرية" },
  { i: FileText, t: "المشتريات" },
  { i: Building2, t: "تعدد الفروع" },
  { i: Layers, t: "التكاملات" },
];

export function ERPOverview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-primary/20 -top-40 -left-40" />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl bg-card border shadow-glow p-6">
              <div className="grid grid-cols-2 gap-3">
                {erpModules.map((m, i) => (
                  <div
                    key={m.t}
                    className="rounded-2xl border p-4 bg-gradient-to-br from-background to-muted/40 hover:border-primary/40 transition-all hover:-translate-y-0.5"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl gradient-primary grid place-items-center text-white mb-2 shadow-soft">
                      <m.i className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-extrabold">{m.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
              نظام ERP متكامل
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              منصة <span className="text-gradient">تخطيط موارد المؤسسات</span> بنكهة عربية
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              وحدات ERP متكاملة تدير دورة عملك بالكامل من المحاسبة والمخزون إلى المشتريات والموارد البشرية — كل شيء في منصة واحدة.
            </p>
            <ul className="space-y-2.5">
              {["محاسبة متوافقة مع هيئة الزكاة والدخل", "تقارير مالية لحظية", "صلاحيات مرنة لكل موظف"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              تعرف على وحدات ERP
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
