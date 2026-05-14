import { Link } from "@tanstack/react-router";
import {
  ArrowLeft, TrendingUp, ShoppingCart, Users, BarChart3, Sparkles, CheckCircle2,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden">
      {/* background blobs */}
      <div className="blob w-[600px] h-[600px] bg-primary/30 -top-40 -right-40" />
      <div className="blob w-[500px] h-[500px] bg-primary-glow/30 top-40 -left-40" />
      <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,oklch(0.20_0.04_260)_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-primary border border-primary/20">
              <Sparkles className="w-4 h-4" />
              منصة الجيل الجديد لإدارة الأعمال
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
              نظام كاشير وإدارة أعمال{" "}
              <span className="text-gradient">سحابي متكامل</span>
              <br />
              لتنمية تجارتك بثقة
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              منصة سحابية احترافية تجمع المبيعات، المخزون، الفروع، التقارير،
              والعملاء في مكان واحد — مصممة للأعمال العربية بواجهة عصرية وسريعة.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/pricing"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-bold text-primary-foreground gradient-primary shadow-glow hover:shadow-soft transition-all"
              >
                ابدأ مجاناً
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-bold bg-card border shadow-soft hover:border-primary/40 hover:text-primary transition"
              >
                احجز تجربة
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
              {["بدون بطاقة ائتمان", "تفعيل خلال دقائق", "دعم عربي على مدار الساعة"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
            <DashboardMock />
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: "+12,000", l: "تاجر يثق بنا" },
            { v: "+45M", l: "فاتورة شهرياً" },
            { v: "99.99%", l: "جاهزية الخدمة" },
            { v: "24/7", l: "دعم عربي" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-card border shadow-card p-5 text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-gradient">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="relative">
      {/* Main card */}
      <div className="relative rounded-3xl bg-card border shadow-glow p-5 lg:p-6">
        {/* window header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-destructive/70" />
            <span className="w-3 h-3 rounded-full bg-warning/80" />
            <span className="w-3 h-3 rounded-full bg-success/80" />
          </div>
          <div className="text-xs font-medium text-muted-foreground">لوحة التحكم — ركيزة</div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { i: TrendingUp, l: "المبيعات اليوم", v: "‏48,920 ر.س", c: "+12.4%" },
            { i: ShoppingCart, l: "الطلبات", v: "1,284", c: "+8.1%" },
            { i: Users, l: "العملاء", v: "362", c: "+3.2%" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-gradient-to-br from-background to-muted/40 border p-3">
              <div className="flex items-center justify-between mb-1">
                <s.i className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-bold text-success">{s.c}</span>
              </div>
              <div className="text-[11px] text-muted-foreground">{s.l}</div>
              <div className="text-sm md:text-base font-extrabold">{s.v}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="rounded-2xl bg-gradient-to-b from-primary/[0.06] to-transparent border p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold">أداء المبيعات — آخر 7 أيام</span>
            </div>
            <span className="text-xs px-2 py-1 rounded-lg bg-primary/10 text-primary font-semibold">أسبوعي</span>
          </div>
          <div className="flex items-end gap-2 h-32">
            {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-lg gradient-primary opacity-80 hover:opacity-100 transition-all"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[10px] text-muted-foreground">
                  {["س", "ح", "ن", "ث", "ر", "خ", "ج"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent orders */}
        <div className="mt-4 space-y-2">
          {[
            { n: "أحمد المالكي", p: "أيس كوفي + كرواسون", a: "‏38 ر.س" },
            { n: "نورة العتيبي", p: "وجبة برغر دجاج", a: "‏54 ر.س" },
          ].map((o) => (
            <div key={o.n} className="flex items-center justify-between rounded-xl bg-muted/40 px-3 py-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg gradient-primary grid place-items-center text-white text-xs font-bold">
                  {o.n[0]}
                </div>
                <div>
                  <div className="text-xs font-bold">{o.n}</div>
                  <div className="text-[10px] text-muted-foreground">{o.p}</div>
                </div>
              </div>
              <span className="text-xs font-extrabold text-primary">{o.a}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute -top-6 -left-6 rounded-2xl glass shadow-card p-3 animate-float-slow">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-success/15 grid place-items-center">
            <CheckCircle2 className="w-5 h-5 text-success" />
          </div>
          <div>
            <div className="text-[11px] text-muted-foreground">طلب جديد</div>
            <div className="text-sm font-extrabold">#A-2148 مكتمل</div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-6 rounded-2xl glass shadow-card p-3 animate-float-fast">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl gradient-primary grid place-items-center text-white text-xs font-extrabold">
            ٪
          </div>
          <div>
            <div className="text-[11px] text-muted-foreground">معدل النمو</div>
            <div className="text-sm font-extrabold text-success">+24.6%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
