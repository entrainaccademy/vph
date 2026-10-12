import Link from "next/link";

// Outlined button with a solid offset shadow. On hover it "presses" into
// its shadow. The shadow colour comes from --btn-shadow.
const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 px-6 py-2.5 text-base font-semibold leading-tight shadow-[4px_4px_0_0_var(--btn-shadow)] transition-[transform,box-shadow,background-color] duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--btn-shadow)] focus-visible:translate-x-0.5 focus-visible:translate-y-0.5";

const variants = {
  // Gold with navy text (AA contrast).
  primary: "border-navy bg-gold text-navy hover:bg-gold-light",
  // White with navy outline.
  secondary: "border-navy bg-white text-navy",
  // Navy fill.
  dark: "border-navy bg-navy text-white",
  // White outline, for navy backgrounds.
  secondaryOnDark: "border-white bg-transparent text-white hover:bg-white/10",
  whatsapp: "border-navy bg-whatsapp text-white hover:bg-[#0b6334]",
};

// Renders a Next.js Link for internal paths, a plain anchor for other
// hrefs, and a <button> when there is no href. Pass onDark on navy
// backgrounds so the shadow stays visible.
export default function Button({
  href,
  variant = "primary",
  icon: Icon,
  className = "",
  external = false,
  onDark = false,
  children,
  ...props
}) {
  const shadow =
    variant === "secondaryOnDark" || variant === "dark"
      ? "[--btn-shadow:var(--color-gold)]"
      : onDark
        ? "[--btn-shadow:#fff]"
        : "[--btn-shadow:var(--color-navy)]";
  const classes = `${base} ${shadow} ${variants[variant]} ${className}`.trim();
  const content = (
    <>
      {Icon && <Icon className="size-5 shrink-0" />}
      <span>{children}</span>
    </>
  );

  if (!href) {
    return (
      <button type="button" className={classes} {...props}>
        {content}
      </button>
    );
  }

  if (external || !href.startsWith("/")) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
