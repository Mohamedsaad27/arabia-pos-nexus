import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { StatsSection } from "@/components/site/StatsSection";
import { Target, Eye, Heart, Award, Users2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن — ركيزة" },
      { name: "description", content: "تعرّف على قصة ركيزة، رؤيتنا ورسالتنا في تمكين الأعمال العربية." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <section className="container mx-auto px-4 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            من نحن
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            نُمكّن <span className="text-gradient">الأعمال العربية</span> بأدوات عالمية
          </h1>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            نحن فريق من الخبراء التقنيين والتجاريين في المنطقة، نبني منصة ركيزة لتكون الشريك الموثوق لكل تاجر يطمح لإدارة أعماله بكفاءة ونمو مستدام.
          </p>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { i: Target, t: "رؤيتنا", d: "أن نكون المنصة الأولى لإدارة الأعمال في المنطقة العربية بحلول 2030." },
              { i: Eye, t: "رسالتنا", d: "تبسيط إدارة الأعمال للتجار وتمكينهم من النمو بثقة وأدوات حديثة." },
              { i: Heart, t: "قيمنا", d: "الشفافية، الجودة، الابتكار، والقرب من عملائنا في كل خطوة." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-card border p-7 shadow-card hover:shadow-glow transition-all">
                <div className="w-12 h-12 rounded-2xl gradient-primary text-white grid place-items-center mb-4 shadow-soft">
                  <c.i className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-xl">{c.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              لماذا <span className="text-gradient">ركيزة؟</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { i: Award, t: "خبرة محلية", d: "نفهم تحديات السوق العربي ونطوّر المنتج وفقها." },
              { i: Users2, t: "دعم بشري", d: "فريق دعم عربي متاح لمساعدتك في أي وقت." },
              { i: Sparkles, t: "تحديثات مستمرة", d: "ميزات جديدة شهرياً مبنية على ملاحظاتك." },
              { i: Heart, t: "أمان عالٍ", d: "بنية تحتية سحابية مع نسخ احتياطية مشفّرة." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-card border p-6 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all">
                <c.i className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-extrabold">{c.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <StatsSection />

        <section className="container mx-auto px-4 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">الفريق</span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              عقول <span className="text-gradient">شغوفة</span> خلف ركيزة
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { n: "خالد العتيبي", r: "الرئيس التنفيذي" },
              { n: "سارة الزهراني", r: "مديرة المنتج" },
              { n: "ياسر الشمري", r: "رئيس التقنية" },
              { n: "لينا القحطاني", r: "مديرة العملاء" },
            ].map((m) => (
              <div key={m.n} className="rounded-2xl bg-card border p-6 text-center shadow-card hover:shadow-glow transition-all">
                <div className="w-20 h-20 mx-auto rounded-full gradient-primary text-white grid place-items-center text-2xl font-extrabold shadow-soft">
                  {m.n[0]}
                </div>
                <div className="mt-4 font-extrabold">{m.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{m.r}</div>
              </div>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
