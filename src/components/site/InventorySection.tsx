import { Boxes, AlertTriangle, RefreshCw, ScanBarcode, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function InventorySection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-primary-glow/20 bottom-0 -right-40" />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl bg-card border shadow-glow overflow-hidden">
            <div className="px-5 py-3 border-b bg-muted/30 flex items-center justify-between">
              <span className="text-sm font-extrabold">إدارة المخزون</span>
              <span className="text-xs px-2 py-1 rounded-lg bg-success/10 text-success font-bold">حي</span>
            </div>
            <div className="p-5 space-y-2">
              {[
                { n: "قهوة كولومبية 250غ", q: 184, s: "متوفر" },
                { n: "حليب طازج 1 لتر", q: 24, s: "منخفض" },
                { n: "علبة كرتون كبير", q: 0, s: "نفد" },
                { n: "أكياس ورقية صغيرة", q: 412, s: "متوفر" },
              ].map((p) => (
                <div key={p.n} className="flex items-center justify-between rounded-xl border p-3 hover:bg-muted/30 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center text-primary">
                      <Boxes className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{p.n}</div>
                      <div className="text-[11px] text-muted-foreground">SKU-{Math.floor(Math.random() * 9999)}</div>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-extrabold">{p.q}</div>
                    <div className={`text-[10px] font-bold ${p.s === "نفد" ? "text-destructive" : p.s === "منخفض" ? "text-warning" : "text-success"}`}>{p.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
              المخزون الذكي
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              تحكم كامل في <span className="text-gradient">مخزونك</span> لحظة بلحظة
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              تتبع المنتجات بالباركود، الباطشات، تواريخ الصلاحية، والحدود الدنيا — مع تنبيهات استباقية لإعادة الطلب.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { i: ScanBarcode, t: "باركود" },
                { i: AlertTriangle, t: "تنبيهات" },
                { i: RefreshCw, t: "تحويلات" },
              ].map((f) => (
                <div key={f.t} className="rounded-2xl border bg-card p-4 text-center">
                  <f.i className="w-6 h-6 mx-auto text-primary mb-2" />
                  <div className="text-xs font-bold">{f.t}</div>
                </div>
              ))}
            </div>
            <Link to="/features" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              تفاصيل المخزون <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
