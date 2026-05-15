const logos = [
  "ALMARAI", "PANDA", "SAVOLA", "JARIR", "EXTRA", "BINDAWOOD", "TAMIMI", "OTHAIM",
];

export function TrustedBy() {
  return (
    <section className="py-14 border-y bg-card/40">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          موثوق به من قِبَل أكثر من <span className="text-primary font-bold">12,000</span> علامة تجارية في المنطقة
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {logos.map((l) => (
            <div
              key={l}
              className="text-center font-extrabold text-lg tracking-widest text-muted-foreground/70 hover:text-primary transition-colors"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
