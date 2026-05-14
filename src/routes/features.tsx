import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Features } from "@/components/site/Features";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "المميزات — نُقطة" },
      { name: "description", content: "اكتشف جميع مميزات منصة نُقطة لإدارة الأعمال والمبيعات." },
    ],
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            المميزات الكاملة
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            كل ما تحتاجه في <span className="text-gradient">منصة واحدة</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            أدوات احترافية مصممة لإدارة أعمالك بسلاسة من البداية للنهاية.
          </p>
        </div>
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
