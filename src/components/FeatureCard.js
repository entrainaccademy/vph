export default function FeatureCard({ icon: Icon, title, children, as: Heading = "h3" }) {
  return (
    <div className="flex h-full flex-col rounded-xl border-2 border-navy/10 bg-white p-6">
      {Icon && (
        <span className="mb-6 inline-flex size-12 items-center justify-center rounded-lg border-2 border-navy bg-gold-light text-navy shadow-[3px_3px_0_0_var(--color-navy)]">
          <Icon className="size-6" />
        </span>
      )}
      <Heading className="text-xl font-semibold">{title}</Heading>
      <p className="mt-2">{children}</p>
    </div>
  );
}
