import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا — ركيزة" },
      { name: "description", content: "تواصل مع فريق ركيزة. نحن هنا لمساعدتك على مدار الساعة." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
              تواصل معنا
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              نسعد <span className="text-gradient">بخدمتك</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              فريقنا جاهز للإجابة على استفساراتك وتقديم تجربة مخصصة لأعمالك.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              {[
                { i: Phone, t: "اتصل بنا", d: "920000000", s: "السبت - الخميس · 9ص - 11م" },
                { i: Mail, t: "راسلنا", d: "hello@rakeeza.sa", s: "نرد خلال أقل من ساعتين" },
                { i: MessageCircle, t: "واتساب", d: "+966 50 000 0000", s: "دعم فوري 24/7" },
                { i: MapPin, t: "المقر", d: "الرياض، المملكة العربية السعودية", s: "حي الملقا" },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl bg-card border p-5 shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl gradient-primary grid place-items-center text-white shrink-0">
                      <c.i className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{c.t}</div>
                      <div className="font-extrabold text-lg mt-0.5">{c.d}</div>
                      <div className="text-xs text-muted-foreground mt-1">{c.s}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="lg:col-span-3 rounded-3xl bg-card border shadow-card p-6 md:p-8 space-y-4"
            >
              <h2 className="text-2xl font-extrabold">أرسل لنا رسالة</h2>
              <p className="text-sm text-muted-foreground">
                املأ النموذج وسيتواصل معك أحد مستشارينا في أقرب وقت.
              </p>

              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <Field label="الاسم الكامل" placeholder="محمد أحمد" />
                <Field label="رقم الجوال" placeholder="05xxxxxxxx" />
                <Field label="البريد الإلكتروني" placeholder="you@example.com" type="email" />
                <Field label="اسم النشاط التجاري" placeholder="متجري" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1.5">نوع النشاط</label>
                <select className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition">
                  <option>مطعم / مقهى</option>
                  <option>متجر تجزئة</option>
                  <option>صيدلية</option>
                  <option>صالون / مركز تجميل</option>
                  <option>أخرى</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-1.5">رسالتك</label>
                <textarea
                  rows={4}
                  placeholder="أخبرنا كيف يمكننا مساعدتك..."
                  className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-extrabold text-primary-foreground gradient-primary shadow-soft hover:shadow-glow transition-all"
              >
                <Send className="w-5 h-5" />
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-bold mb-1.5">{label}</label>
      <input
        {...rest}
        className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition"
      />
    </div>
  );
}
