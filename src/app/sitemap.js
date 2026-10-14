import { site } from "@/config/site";

// Lists every page so Google can find and refresh them.
export default function sitemap() {
  return ["", "/about", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
