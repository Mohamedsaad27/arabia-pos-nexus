import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/features", label: "المميزات" },
  { to: "/solutions", label: "الحلول" },
  { to: "/pricing", label: "الأسعار" },
  { to: "/faq", label: "الأسئلة الشائعة" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between gap-6 rounded-2xl px-4 md:px-6 py-3 transition-all ${
            scrolled ? "glass shadow-card" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="grid place-items-center w-10 h-10 rounded-xl gradient-primary shadow-glow">
              <Sparkles className="w-5 h-5 text-white" />
            </span>
            <span className="font-extrabold text-xl text-foreground">ركيزة</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-primary/5" }}
                className="px-4 py-2 rounded-xl text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition"
            >
              تسجيل الدخول
            </Link>
            <Link
              to="/pricing"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground gradient-primary shadow-soft hover:shadow-glow transition-all"
            >
              ابدأ الآن
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-xl bg-card border shadow-soft"
            aria-label="القائمة"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass shadow-card p-4 animate-fade-up">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-primary/5 hover:text-primary"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold border text-center"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  to="/pricing"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground gradient-primary text-center shadow-soft"
                >
                  ابدأ الآن
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
