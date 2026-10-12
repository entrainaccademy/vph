// Single source of truth for business details used across the site.

const phoneDigits = "919539890001";

export const site = {
  name: "VPH Enterprises",
  tagline: "Distributing Values and Goods",
  established: 2007,

  // Production URL, used for canonical and Open Graph links.
  // TODO: Set NEXT_PUBLIC_SITE_URL once the domain is known.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),

  // TODO: Placeholder logo. Replace the file (and width/height) when the
  // final logo arrives. Rendered size is controlled in CSS (.logo-frame).
  logo: {
    src: "/vph_old_logo.jpeg",
    width: 1280,
    height: 853,
    alt: "VPH Enterprises - Distribution Expert logo",
  },

  address: {
    street: "Police Station Road, Poovathipoyil, Vahikkadavu",
    city: "Malappuram",
    postalCode: "679333",
    region: "Kerala",
    country: "India",
  },

  phone: {
    display: "+91 95398 90001",
    href: "tel:+919539890001",
  },

  // TODO: Client has not confirmed this is their WhatsApp number.
  whatsapp: {
    number: phoneDigits,
    defaultMessage:
      "Hello VPH Enterprises, I would like to know more about your products.",
  },

  // TODO: Email address not provided yet. Add it here and surface it in
  // Footer and the contact page once confirmed.
  email: null,

  // TODO: Working hours not provided yet. Add them here and surface them in
  // Footer and the contact page once confirmed.
  hours: null,

  map: {
    lat: 11.379073143005371,
    lng: 76.35154724121094,
    link: "https://maps.google.com/maps?q=11.379073143005371%2C76.35154724121094&z=17&hl=en",
    embed:
      "https://maps.google.com/maps?q=11.379073143005371%2C76.35154724121094&z=17&hl=en&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=11.379073143005371%2C76.35154724121094",
  },

  // Set NEXT_PUBLIC_FORM_ENDPOINT (and NEXT_PUBLIC_FORM_ACCESS_KEY for
  // Web3Forms) in .env.local. See .env.example.
  form: {
    endpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
    accessKey: process.env.NEXT_PUBLIC_FORM_ACCESS_KEY || "",
  },

  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],

  // File names are case-sensitive on Vercel; keep them exactly as in
  // public/clients.
  brands: [
    { name: "Britannia", logo: "/clients/Britannia.png" },
    { name: "Mondelēz International", logo: "/clients/Mondelez.png" },
    { name: "Ferrero", logo: "/clients/ferrore.png" },
    { name: "Dalda", logo: "/clients/Dalda.png" },
    { name: "Kitchen Treasures", logo: "/clients/treasures.png" },
    { name: "Kerafed", logo: "/clients/KERAFED.png" },
    { name: "Parle Agro", logo: "/clients/Parle_Agro_Logo.png" },
    { name: "GSK", logo: "/clients/GlaxoSmithKline.png" },
  ],
};

export const fullAddress = `${site.address.street}, ${site.address.city} ${site.address.postalCode}, ${site.address.region}, ${site.address.country}`;

export function whatsappLink(message = site.whatsapp.defaultMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
