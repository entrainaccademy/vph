import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About VPH Enterprises | FMCG Distribution Since 2007",
  description:
    "Learn about VPH Enterprises, an FMCG distributor in Malappuram since 2007. Our story, mission and values, and how we serve retailers across the district.",
  path: "/about",
});

const stats = [
  { big: "19+", small: "Years on the market" },
  { big: site.retailerCount, small: "Retailers supplied" },
  { big: "8", small: "Brands distributed" },
];

const values = [
  {
    title: "Honesty",
    text: "Straightforward, honest dealing with every retailer and brand we work with.",
  },
  {
    title: "Reliability",
    text: "Consistent supply and on-time delivery, so your shelves stay stocked.",
  },
  {
    title: "Long-term partnerships",
    text: "Relationships built over years, not single orders.",
  },
];

const container = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

export default function AboutPage() {
  return (
    <>
      {/* Hero: giant founding year on a sky background */}
      <section aria-labelledby="about-title" className="relative overflow-hidden bg-wash-200 pt-10 pb-32 text-center sm:pt-12 sm:pb-44">
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -left-24 h-72 w-3/4 rounded-full bg-white/80 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-24 h-64 w-2/3 rounded-full bg-white/70 blur-3xl" />
        <div className="relative px-4">
          <p className="text-sm font-bold tracking-[0.3em] text-navy uppercase sm:text-base">
            Since
          </p>
          <p
            aria-hidden="true"
            className="font-heading text-[clamp(5rem,20vw,15rem)] leading-[0.8] font-extrabold tracking-tighter text-white [text-shadow:0_8px_0_rgba(11,37,69,0.07)]"
          >
            {site.established}
          </p>
          <h1
            id="about-title"
            className="mx-auto mt-4 max-w-3xl font-heading text-2xl leading-tight font-bold tracking-tight text-navy sm:mt-6 sm:text-4xl"
          >
            About VPH Enterprises
          </h1>
          <p className="mt-3 text-base font-medium text-navy sm:text-lg">{site.tagline}</p>

          {/* Story and mission: coloured boxes on the sky. */}
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-left md:mt-14 md:grid-cols-2 md:gap-5">
            <div className="rounded-3xl bg-navy p-6 shadow-[0_8px_30px_rgb(11_37_69/0.08)] sm:p-8">
              <h2 className="font-heading text-xl font-bold tracking-tight text-gold-light uppercase sm:text-2xl">
                Our story
              </h2>
              <p className="mt-3 text-white/90">
                Founded in {site.established} in Malappuram, VPH Enterprises began
                with a simple goal: to bring quality products to local shops with
                honesty and consistency. Today we distribute 8 brands across the
                district.
              </p>
            </div>
            <div className="rounded-3xl bg-gold-light p-6 shadow-[0_8px_30px_rgb(11_37_69/0.08)] sm:p-8">
              <h2 className="font-heading text-xl font-bold tracking-tight text-navy uppercase sm:text-2xl">
                Our mission
              </h2>
              <p className="mt-3 font-medium text-navy">
                To deliver quality goods to every retailer in Malappuram, on time
                and with integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key numbers ride up over the bottom of the hero */}
      <section aria-label="VPH Enterprises at a glance" className="relative z-10 -mt-20 sm:-mt-24">
        <Reveal className={container}>
          <ul className="grid grid-cols-3 divide-x-2 divide-navy/15 rounded-4xl bg-white py-6 shadow-[0_8px_30px_rgb(11_37_69/0.08)] sm:py-8">
            {stats.map(({ big, small }) => (
              <li key={small} className="px-2 text-center sm:px-4">
                <p className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-4xl">
                  {big}
                </p>
                <p className="mt-1 text-xs font-medium sm:text-base">{small}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <div className="h-14 sm:h-20" aria-hidden="true" />

      {/* Values: panel with a notched title tab, like the reference */}
      <section aria-labelledby="values" className="px-3 pb-14 sm:px-5 sm:pb-20 lg:px-7">
        <Reveal className="mx-auto max-w-6xl rounded-4xl bg-wash-200 p-4 pb-6 sm:p-7 sm:pb-8">
          <div className="-mt-4 mb-6 flex justify-center sm:-mt-7 sm:mb-8">
            {/* White tab flush with the page background, so it reads as a notch. */}
            <div className="rounded-b-4xl bg-white px-7 pt-5 pb-6 text-center sm:px-10 sm:pt-6 sm:pb-7">
              <h2
                id="values"
                className="font-heading text-3xl leading-[0.95] font-extrabold tracking-tight text-navy uppercase sm:text-4xl"
              >
                Our values
              </h2>
              <p className="mx-auto mt-2 max-w-xs text-xs sm:text-sm">
                Our tagline, <strong className="text-navy">{site.tagline}</strong>, is how we work.
              </p>
            </div>
          </div>
          <ul className="grid gap-4 md:grid-cols-3 md:gap-5">
            {values.map((value, i) => (
              <li key={value.title} className="rounded-3xl bg-white p-5 sm:p-6">
                <p className="font-heading text-base font-bold text-gold-dark">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-heading text-xl leading-tight font-bold tracking-tight sm:text-2xl">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base">{value.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Partner: plain gold band, no box */}
      <section aria-labelledby="partner" className="bg-gold-light py-16 sm:py-24">
        <Reveal className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-widest text-navy uppercase">
              For brands
            </p>
            <h2
              id="partner"
              className="mt-3 font-heading text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.92] font-extrabold tracking-tighter text-navy"
            >
              Partner
              <span className="block">with us</span>
            </h2>
          </div>
          <div>
            <p className="text-xl font-semibold text-navy sm:text-2xl">
              Are you a brand looking for distribution in Malappuram?
            </p>
            <p className="mt-2 text-lg text-navy/85">Get in touch.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="dark">
                Contact us
              </Button>
              <Button href={site.phone.href} variant="secondary">
                Call {site.phone.display}
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
