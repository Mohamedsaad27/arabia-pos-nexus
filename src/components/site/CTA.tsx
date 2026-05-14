import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-16 text-center shadow-glow">
          <div className="blob w-[400px] h-[400px] bg-primary-glow/40 top-0 left-1/4" />
          <div className="blob w-[300px] h-[300px] bg-white/20 bottom-0 right-1/4" />

          <div className="relative max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              جاهز لتنمية أعمالك؟
            </h2>
            <p className="mt-4 text-white/85 text-lg">
              انضم لآلاف التجار الذين اختاروا ركيزة لإدارة أعمالهم بثقة وكفاءة.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/pricing"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-extrabold bg-white text-navy hover:bg-white/90 transition shadow-soft"
              >
                ابدأ تجربتك المجانية
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-extrabold border border-white/30 text-white hover:bg-white/10 transition"
              >
                تحدث مع المبيعات
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
