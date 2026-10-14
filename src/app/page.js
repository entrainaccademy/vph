import Image from "next/image";
import AreasSection from "@/components/AreasSection";
import Button from "@/components/Button";
import BrandGrid from "@/components/BrandGrid";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WhyCards from "@/components/WhyCards";
import {
  CalendarIcon,
  MapPinIcon,
  StoreIcon,
  TagIcon,
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
  { icon: CalendarIcon, top: "Since", value: "2007", sub: "19 years of service" },
  { icon: StoreIcon, top: "Supplying", value: `${site.retailerCount} retailers`, sub: "across the district" },
  { icon: TagIcon, top: "Distributing", value: "8 brands", sub: "trusted FMCG names" },
  { icon: MapPinIcon, top: "Delivering", value: "Malappuram", sub: "to your doorstep" },
];

const container ="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
// Wider frame for the hero so text and picture sit near the edges.
const wide = "mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-12 xl:px-20";

function HeroWhatsAppLink() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center gap-2 rounded-full bg-navy px-6 font-semibold text-white transition-colors hover:bg-navy-700"
    >
      <WhatsAppIcon className="size-5" />
      Chat on WhatsApp
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero: two-tone headline on the left, logistics scene on the right. */}
      <section className="relative overflow-hidden bg-wash">
        <div
          className={`relative ${wide} grid items-center gap-2 pt-8 pb-6 sm:gap-6 sm:pt-16 sm:pb-14 lg:min-h-[min(calc(100svh-4.5rem),46rem)] lg:grid-cols-[1fr_1.1fr] lg:gap-6 lg:py-10`}
        >
          <div className="text-center lg:text-left">
            <h1>
              <span className="block text-4xl leading-[1.02] font-extrabold tracking-tight min-[400px]:text-5xl sm:text-6xl xl:text-7xl">
                <span className="text-navy">Restocking your shop,</span>{" "}
                <span className="text-[#a17b33]">made simple.</span>
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-base sm:mt-6 sm:text-lg lg:mx-0">
              You order. We pack. We deliver. Eight trusted FMCG brands,
              straight to your shop.
            </p>
            <div className="mt-8 hidden lg:flex">
              <HeroWhatsAppLink />
            </div>
          </div>

          <div className="relative">
            <Image
              src={site.heroScene.src}
              alt={site.heroScene.alt}
              width={site.heroScene.width}
              height={site.heroScene.height}
              preload
              className="relative mx-auto h-auto w-full max-w-xl lg:max-w-none"
            />
          </div>
          <div className="flex justify-center lg:hidden">
            <HeroWhatsAppLink />
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section aria-label="Quick facts" className="bg-white">
        <ul
          className={`${wide} grid grid-cols-1 gap-x-5 gap-y-6 py-8 min-[420px]:grid-cols-2 sm:gap-x-6 sm:gap-y-8 sm:py-10 lg:grid-cols-4 lg:gap-x-8 lg:py-12`}
        >
          {facts.map((fact) => (
            <li key={fact.value} className="flex min-w-0 items-center gap-3 sm:gap-4 lg:justify-center lg:gap-5">
              <fact.icon className="size-9 shrink-0 text-navy sm:size-10" />
              <p className="leading-snug">
                <span className="block text-sm">{fact.top}</span>
                <span className="block text-lg font-bold text-navy sm:text-xl">{fact.value}</span>
                <span className="block text-xs sm:text-sm">{fact.sub}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Brands */}
      <section aria-labelledby="brands" className="bg-wash px-3 py-6 sm:px-5 sm:py-10 lg:px-7">
        {/* Wide curved navy panel with a gap at the left and right edges. */}
        <Reveal className="rounded-4xl bg-navy py-14 sm:rounded-[4rem] sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="brands"
              title="Brands we distribute"
              align="center"
              onDark
            >
              <p>We currently distribute 8 trusted brands.</p>
            </SectionHeading>
            <div className="mt-8 sm:mt-12">
              <BrandGrid />
            </div>
          </div>
        </Reveal>
      </section>

      {/* What we do */}
      <section aria-labelledby="what-we-do" className="overflow-hidden bg-wash pb-14 pt-6 sm:pb-24 sm:pt-10">
        <Reveal className={container}>
          <SectionHeading id="what-we-do" title="What we do">
            <p>
              We are an FMCG distribution company connecting leading brands to
              retailers across Malappuram District. Our executive marketer
              visits your shop and takes your order, our supply team packs it,
              and our delivery team brings it to your doorstep. There is no
              minimum order.
            </p>
          </SectionHeading>
          {/* Shops, delivery trucks and the godown: the journey described above. */}
          <div className="mx-[-30%] mt-10 sm:mx-0">
            <Image
              src={site.illustration.src}
              alt={site.illustration.alt}
              width={site.illustration.width}
              height={site.illustration.height}
              className="h-auto w-full"
            />
          </div>
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </Reveal>
      </section>

      {/* Why VPH */}
      <section aria-labelledby="why-vph" className="py-14 sm:py-24">
        <div className={container}>
          <Reveal>
            <SectionHeading id="why-vph" title="Why retailers choose VPH" align="center" />
          </Reveal>
          <div className="mt-10 sm:mt-14">
            <WhyCards />
          </div>
        </div>
      </section>

      {/* Areas we serve */}
      <AreasSection />

      {/* CTA */}
      <section aria-labelledby="become-retailer" className="bg-navy pt-14 sm:pt-24">
        <Reveal className={`${container} text-center`}>
          <SectionHeading
            id="become-retailer"
            eyebrow="Work with us"
            title="Become a VPH retailer"
            align="center"
            onDark
          >
            <p>
              Want to stock our brands? Message us on WhatsApp or send an
              enquiry, and our team will get back to you.
            </p>
          </SectionHeading>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Button href={whatsappLink()} external icon={WhatsAppIcon} onDark>
              Chat on WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </Button>
            <Button href="/contact" variant="secondaryOnDark">
              Send an Enquiry
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
