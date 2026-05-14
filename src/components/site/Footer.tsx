import { Link } from "@tanstack/react-router";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const cols = [
    {
      title: "المنتج",
      links: [
        { to: "/features", label: "المميزات" },
        { to: "/solutions", label: "الحلول" },
        { to: "/pricing", label: "الأسعار" },
      ],
    },
    {
      title: "الشركة",
      links: [
        { to: "/", label: "من نحن" },
        { to: "/contact", label: "تواصل معنا" },
        { to: "/faq", label: "الأسئلة الشائعة" },
      ],
    },
    {
      title: "الدعم",
      links: [
        { to: "/contact", label: "مركز المساعدة" },
        { to: "/contact", label: "الدعم الفني" },
        { to: "/faq", label: "التوثيق" },
      ],
    },
  ];

  return (
    <footer className="relative mt-32 bg-navy text-white overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-primary-glow/30 -top-40 right-1/4" />
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="grid place-items-center w-10 h-10 rounded-xl gradient-primary shadow-glow">
                <Sparkles className="w-5 h-5 text-white" />
              </span>
              <span className="font-extrabold text-2xl">ركيزة</span>
            </Link>
            <p className="text-white/70 max-w-sm leading-relaxed">
              نظام نقاط بيع وإدارة أعمال سحابي متكامل مصمم خصيصاً للأعمال
              العربية لتنمو بثقة وكفاءة.
            </p>
            <div className="space-y-2 pt-2 text-sm text-white/70">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary-glow" /><span>hello@rakeeza.sa</span></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary-glow" /><span>920000000</span></div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary-glow" /><span>الرياض، المملكة العربية السعودية</span></div>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-bold mb-4">{c.title}</h4>
              <ul className="space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-white/70 hover:text-white transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} ركيزة. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
