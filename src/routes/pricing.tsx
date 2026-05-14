import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "الأسعار — ركيزة" },
      { name: "description", content: "خطط أسعار شفافة ومرنة لجميع أحجام الأعمال." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
            خطط الاشتراك
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            أسعار <span className="text-gradient">واضحة وعادلة</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            اختر الخطة المناسبة لحجم أعمالك — يمكنك الترقية أو الإلغاء في أي وقت.
          </p>
        </div>
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
