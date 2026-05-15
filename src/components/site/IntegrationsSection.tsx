const integrations = [
  "Mada", "Visa", "Mastercard", "Apple Pay", "STC Pay", "Tabby", "Tamara", "Foodics",
  "ZATCA", "HungerStation", "Jahez", "ToYou", "Mrsool", "WhatsApp", "Mailchimp", "Zapier",
];

export function IntegrationsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            التكاملات
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            متصل بكل <span className="text-gradient">الأدوات</span> التي تحبها
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            تكامل سلس مع بوابات الدفع، تطبيقات التوصيل، الزكاة والدخل، والمزيد.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {integrations.map((n, i) => (
            <div
              key={n}
              className="aspect-square rounded-2xl border bg-card grid place-items-center font-extrabold text-xs text-center px-2 hover:shadow-glow hover:-translate-y-1 hover:border-primary/40 transition-all"
              style={{ animationDelay: `${i * 30}ms` }}
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
