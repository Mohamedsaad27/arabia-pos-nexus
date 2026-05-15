import { TrendingUp, PieChart, LineChart, Activity } from "lucide-react";

export function AnalyticsSection() {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-primary-glow/30 -top-20 -left-20" />
      <div className="blob w-[400px] h-[400px] bg-primary/30 bottom-0 right-0" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-primary-glow mb-4 backdrop-blur">
            التقارير والتحليلات
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            قرارات أذكى بـ<span className="text-gradient">بيانات لحظية</span>
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            لوحات تحكم تفاعلية وتقارير جاهزة تساعدك على فهم أعمالك واتخاذ القرار في الوقت المناسب.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 rounded-3xl bg-white/5 border border-white/10 backdrop-blur p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <LineChart className="w-5 h-5 text-primary-glow" />
                <span className="font-extrabold">إيرادات السنة الحالية</span>
              </div>
              <span className="text-xs px-2 py-1 rounded-lg bg-success/20 text-success font-bold">+24.6%</span>
            </div>
            <div className="flex items-end gap-2 h-48">
              {[55, 48, 70, 62, 80, 75, 92, 85, 95, 78, 88, 100].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-primary to-primary-glow opacity-80 hover:opacity-100 transition-all"
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-[10px] text-white/50">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              { i: TrendingUp, l: "صافي الربح", v: "‏842,150 ر.س", c: "+18%" },
              { i: PieChart, l: "هامش الربح", v: "32.4%", c: "+2.1%" },
              { i: Activity, l: "متوسط الفاتورة", v: "‏124 ر.س", c: "+5.6%" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-5">
                <div className="flex items-center justify-between mb-2">
                  <s.i className="w-5 h-5 text-primary-glow" />
                  <span className="text-xs font-bold text-success">{s.c}</span>
                </div>
                <div className="text-xs text-white/60">{s.l}</div>
                <div className="text-xl font-extrabold mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
