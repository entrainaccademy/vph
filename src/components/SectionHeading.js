export default function SectionHeading({
  id,
  eyebrow,
  title,
  children,
  align = "left",
  onDark = false,
}) {
  const centered = align === "center";

  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-widest ${
            onDark ? "text-gold-light" : "text-gold-dark"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-2xl font-bold sm:text-3xl ${onDark ? "text-white" : ""}`}
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={`mt-4 block h-1 w-12 rounded-full bg-gold ${centered ? "mx-auto" : ""}`}
      />
      {children && (
        <div
          className={`mt-5 text-base sm:text-lg ${onDark ? "text-white/85" : ""}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
