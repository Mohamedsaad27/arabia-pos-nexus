import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "الأسئلة الشائعة — ركيزة" },
      { name: "description", content: "إجابات للأسئلة الأكثر شيوعاً حول منصة ركيزة." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            مركز المساعدة
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-gradient">إجابات</span> لكل أسئلتك
          </h1>
        </div>
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
