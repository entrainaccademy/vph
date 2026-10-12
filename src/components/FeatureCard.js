export default function FeatureCard({ icon: Icon, title, children, as: Heading = "h3" }) {
  return (
    <div className="h-full rounded-xl border border-line bg-white p-6 shadow-card">
      {Icon && (
        <span className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-navy text-gold-light">
          <Icon className="size-6" />
        </span>
      )}
      <Heading className="text-lg font-bold">{title}</Heading>
      <p className="mt-2">{children}</p>
    </div>
  );
}
