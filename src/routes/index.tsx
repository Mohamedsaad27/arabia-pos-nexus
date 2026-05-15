import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { ERPOverview } from "@/components/site/ERPOverview";
import { POSOverview } from "@/components/site/POSOverview";
import { InventorySection } from "@/components/site/InventorySection";
import { AnalyticsSection } from "@/components/site/AnalyticsSection";
import { MultiBranchSection } from "@/components/site/MultiBranchSection";
import { IntegrationsSection } from "@/components/site/IntegrationsSection";
import { Solutions } from "@/components/site/Solutions";
import { Testimonials } from "@/components/site/Testimonials";
import { StatsSection } from "@/components/site/StatsSection";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ركيزة — نظام كاشير وإدارة أعمال سحابي متكامل" },
      { name: "description", content: "منصة سحابية احترافية لإدارة المبيعات والمخزون والفروع والعملاء — مصممة للأعمال العربية." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <ERPOverview />
        <POSOverview />
        <InventorySection />
        <AnalyticsSection />
        <MultiBranchSection />
        <IntegrationsSection />
        <Solutions />
        <Testimonials />
        <StatsSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
