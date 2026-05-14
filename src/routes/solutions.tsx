import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Solutions } from "@/components/site/Solutions";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "الحلول — نُقطة" },
      { name: "description", content: "حلول مخصصة لكل نوع نشاط تجاري: مطاعم، مقاهي، تجزئة، صيدليات، وأكثر." },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            حلول قطاعية
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            مصمم <span className="text-gradient">لقطاعك بالضبط</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            تجارب مخصصة بناءً على احتياجات نشاطك التجاري.
          </p>
        </div>
        <Solutions />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
