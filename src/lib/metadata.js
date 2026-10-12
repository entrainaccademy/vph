import { site } from "@/config/site";

// Builds per-page metadata. Page-level openGraph replaces the layout's
// openGraph object, so the shared fields are repeated here.
export function pageMetadata({ title, description, path }) {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: site.logo.src,
          width: site.logo.width,
          height: site.logo.height,
          alt: site.logo.alt,
        },
      ],
    },
  };
}
