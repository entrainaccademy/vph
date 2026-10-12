import Button from "@/components/Button";
import BrandGrid from "@/components/BrandGrid";
import FeatureCard from "@/components/FeatureCard";
import ProcessSteps from "@/components/ProcessSteps";
import SectionHeading from "@/components/SectionHeading";
import {
  CalendarIcon,
  ClockIcon,
  HandshakeIcon,
  MapPinIcon,
  ShieldIcon,
  TagIcon,
  TruckIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { site, whatsappLink } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "VPH Enterprises | FMCG Distributors in Malappuram, Kerala",
  description:
    "Trusted FMCG distribution partner in Malappuram since 2007. Reliable supply of 8 leading brands to retailers across the district.",
  path: "/",
});

const facts = [
  { icon: CalendarIcon, label: "Since 2007" },
  { icon: TagIcon, label: "8 Brands" },
  { icon: MapPinIcon, label: "Across Malappuram District" },
];

const reasons = [
  {
    icon: ShieldIcon,
    title: "Reliable supply",
    text: "Consistent stock so you don't miss sales.",
  },
  {
    icon: ClockIcon,
    title: "On-time delivery",
    text: "Orders packed by our supply team and delivered to your door by our delivery team.",
  },
  {
    icon: MapPinIcon,
    title: "Local knowledge",
    text: "We understand Malappuram's markets and shops.",
  },
  {
    icon: HandshakeIcon,
    title: "Fair dealing",
    text: "19 years of long-term relationships.",
  },
];

const container = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 hidden h-full w-1/3 bg-navy-700 [clip-path:polygon(40%_0,100%_0,100%_100%,0_100%)] lg:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 hidden h-full w-1/3 bg-gold [clip-path:polygon(38%_0,41%_0,3%_100%,0_100%)] lg:block"
        />
        <div className={`relative ${container} py-16 sm:py-24 lg:py-28`}>
          <div className="max-w-3xl">
            <p className="mb-4 font-heading text-base font-semibold tracking-wide text-gold-light sm:text-lg">
              {site.tagline}
            </p>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              FMCG Distributors in Malappuram, Kerala
            </h1>
            <span aria-hidden="true" className="mt-6 block h-1 w-16 rounded-full bg-gold" />
            <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
              VPH Enterprises has supplied retailers across Malappuram District
              with trusted FMCG brands since 2007. For over 19 years, we have
              kept shelves stocked and shops running with reliable supply and
              honest dealing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button href={whatsappLink()} external>
                <WhatsAppIcon />
                Chat on WhatsApp
                <span className="sr-only">(opens in a new tab)</span>
              </Button>
              <Button href="/contact" variant="secondaryOnDark">
                Send an Enquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section aria-label="Quick facts" className="border-b border-line bg-white">
        <ul className={`${container} grid gap-4 py-6 sm:grid-cols-3 sm:py-8`}>
          {facts.map((fact) => (
            <li
              key={fact.label}
              className="flex items-center gap-3 sm:justify-center"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-cream text-gold-dark">
                <fact.icon className="size-6" />
              </span>
              <span className="font-heading text-lg font-bold text-navy">
                {fact.label}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* What we do */}
      <section aria-labelledby="what-we-do" className="py-16 sm:py-20">
        <div className={container}>
          <SectionHeading id="what-we-do" eyebrow="How it works" title="What we do">
            <p>
              We are an FMCG distribution company connecting leading brands to
              retailers across Malappuram District. Our executive marketer
              visits your shop and takes your order, our supply team packs it,
              and our delivery team brings it to your doorstep. There is no
              minimum order.
            </p>
          </SectionHeading>
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Brands */}
      <section aria-labelledby="brands" className="bg-white py-16 sm:py-20">
        <div className={container}>
          <SectionHeading
            id="brands"
            eyebrow="Our portfolio"
            title="Brands we distribute"
            align="center"
          >
            <p>We currently distribute 8 trusted brands.</p>
          </SectionHeading>
          <div className="mt-10">
            <BrandGrid />
          </div>
        </div>
      </section>

      {/* Why VPH */}
      <section aria-labelledby="why-vph" className="py-16 sm:py-20">
        <div className={container}>
          <SectionHeading id="why-vph" eyebrow="Why VPH" title="Why retailers choose VPH" />
          <ul className="mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason) => (
              <li key={reason.title}>
                <FeatureCard icon={reason.icon} title={reason.title}>
                  {reason.text}
                </FeatureCard>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Areas we serve */}
      <section aria-labelledby="areas" className="bg-white py-16 sm:py-20">
        <div className={`${container} grid items-center gap-8 md:grid-cols-[1fr_auto]`}>
          <SectionHeading id="areas" eyebrow="Coverage" title="Areas we serve">
            <p>
              We deliver across Malappuram District. Our base is in
              Vahikkadavu, Malappuram.
            </p>
          </SectionHeading>
          <div className="flex items-center gap-4 rounded-xl border border-line bg-cream p-5">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-navy text-gold-light">
              <TruckIcon className="size-6" />
            </span>
            <p className="font-heading font-semibold text-navy">
              Doorstep delivery
              <br />
              <span className="font-sans font-normal text-body">
                across Malappuram District
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="become-retailer" className="bg-navy py-16 sm:py-20">
        <div className={`${container} text-center`}>
          <SectionHeading
            id="become-retailer"
            title="Become a VPH retailer"
            align="center"
            onDark
          >
            <p>
              Want to stock our brands? Message us on WhatsApp or send an
              enquiry, and our team will get back to you.
            </p>
          </SectionHeading>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href={whatsappLink()} external>
              <WhatsAppIcon />
              Chat on WhatsApp
              <span className="sr-only">(opens in a new tab)</span>
            </Button>
            <Button href="/contact" variant="secondaryOnDark">
              Send an Enquiry
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
