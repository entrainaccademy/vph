import Link from "next/link";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-semibold leading-tight transition-colors";

const variants = {
  // Gold with navy text (AA contrast).
  primary:
    "bg-gold text-navy shadow-sm hover:bg-gold-light focus-visible:bg-gold-light",
  // Outlined, for light backgrounds.
  secondary:
    "border-2 border-navy text-navy hover:bg-navy hover:text-white focus-visible:bg-navy focus-visible:text-white",
  // Outlined, for navy backgrounds.
  secondaryOnDark:
    "border-2 border-gold-light text-white hover:bg-gold-light hover:text-navy focus-visible:bg-gold-light focus-visible:text-navy",
  whatsapp:
    "bg-whatsapp text-white shadow-sm hover:bg-[#0b6334] focus-visible:bg-[#0b6334]",
};

export function buttonClasses(variant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`.trim();
}

// Renders a Next.js Link for internal paths and a plain anchor otherwise.
export default function Button({
  href,
  variant = "primary",
  className = "",
  external = false,
  children,
  ...props
}) {
  const classes = buttonClasses(variant, className);

  if (external || !href.startsWith("/")) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
