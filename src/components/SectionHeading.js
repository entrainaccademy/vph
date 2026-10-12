// Small pill label above a heading.
export function Eyebrow({ children, onDark = false }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium ${
        onDark
          ? "border-white/25 text-gold-light"
          : "border-navy/15 bg-white text-navy"
      }`}
    >
      <span aria-hidden="true" className="size-2 rounded-full bg-gold" />
      {children}
    </p>
  );
}

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
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={`mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${
          onDark ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {children && (
        <div
          className={`mt-5 max-w-2xl text-lg ${centered ? "mx-auto" : ""} ${
            onDark ? "text-white/85" : ""
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
