const stats = [
  { v: "+12,000", l: "تاجر يستخدم ركيزة" },
  { v: "+45M", l: "فاتورة شهرياً" },
  { v: "+30", l: "مدينة ودولة" },
  { v: "99.99%", l: "جاهزية الخدمة" },
];

export function StatsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl gradient-primary p-10 md:p-14 shadow-glow relative overflow-hidden">
          <div className="blob w-[400px] h-[400px] bg-white/15 -top-20 -right-20" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {stats.map((s) => (
              <div key={s.l} className="text-center text-white">
                <div className="text-3xl md:text-5xl font-extrabold">{s.v}</div>
                <div className="text-sm md:text-base text-white/85 mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
