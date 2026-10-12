import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

// Logo linked to the home page. Size is controlled by .logo-frame in
// globals.css so the placeholder can be swapped without touching markup.
export default function Logo({ variant = "header" }) {
  const isHeader = variant === "header";

  return (
    <Link
      href="/"
      className={`logo-frame shrink-0 rounded-md ${isHeader ? "" : "logo-frame--footer"}`}
    >
      <Image
        src={site.logo.src}
        alt={`${site.name} home`}
        fill
        sizes={isHeader ? "220px" : "260px"}
        loading={isHeader ? "eager" : "lazy"}
        fetchPriority={isHeader ? "high" : "auto"}
      />
    </Link>
  );
}
