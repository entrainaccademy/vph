import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { HandshakeIcon, ShieldIcon, StarIcon } from "@/components/Icons";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About VPH Enterprises | FMCG Distribution Since 2007",
  description:
    "Learn about VPH Enterprises, an FMCG distributor in Malappuram since 2007. Our mission, values and delivery strengths for retailers across the district.",
  path: "/about",
});

const values = [
  {
    icon: ShieldIcon,
    title: "Honesty",
    text: "Straightforward, honest dealing with every retailer and brand we work with.",
  },
  {
    icon: StarIcon,
    title: "Reliability",
    text: "Consistent supply and on-time delivery, so your shelves stay stocked.",
  },
  {
    icon: HandshakeIcon,
    title: "Long-term partnerships",
    text: "Relationships built over years, not single orders.",
  },
];

const container = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={`Since ${site.established}`} title="About VPH Enterprises">
        <p>
          Founded in 2007 in Malappuram, VPH Enterprises began with a simple
          goal: to bring quality products to local shops with honesty and
          consistency. Today we distribute 8 brands across the district.
        </p>
      </PageHero>

      {/* Mission */}
      <section aria-labelledby="mission" className="py-20 sm:py-24">
        <Reveal className={container}>
          <div className="rounded-xl border-2 border-navy bg-white p-6 text-center shadow-[6px_6px_0_0_var(--color-navy)] sm:p-12">
            <h2
              id="mission"
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3 py-1 text-sm font-medium tracking-normal"
            >
              <span aria-hidden="true" className="size-2 rounded-full bg-gold" />
              Our mission
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-2xl leading-snug font-semibold tracking-tight text-navy sm:text-4xl">
              To deliver quality goods to every retailer in Malappuram, on time
              and with integrity.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section aria-labelledby="values" className="bg-wash py-20 sm:py-24">
        <Reveal className={container}>
          <SectionHeading id="values" eyebrow="How we work" title="Our values" align="center">
            <p>
              Our tagline, <strong className="text-navy">{site.tagline}</strong>,
              is how we work.
            </p>
          </SectionHeading>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <li key={value.title}>
                <FeatureCard icon={value.icon} title={value.title}>
                  {value.text}
                </FeatureCard>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Strengths */}
      <section aria-labelledby="strengths" className="py-20 sm:py-24">
        <Reveal className={container}>
          <SectionHeading id="strengths" eyebrow="Wholesale distribution" title="Our strengths">
            <p>
              An executive marketer visits your shop and takes your order, our
              supply team packs it, and our delivery team brings it to your
              door. No minimum order.
            </p>
          </SectionHeading>
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </Reveal>
      </section>

      {/* Partner */}
      <section aria-labelledby="partner" className="bg-navy py-20 sm:py-24">
        <Reveal className={`${container} text-center`}>
          <SectionHeading id="partner" eyebrow="For brands" title="Partner with us" align="center" onDark>
            <p>
              Are you a brand looking for distribution in Malappuram? Get in
              touch.
            </p>
          </SectionHeading>
          <div className="mt-9 flex justify-center">
            <Button href="/contact" onDark>
              Contact us
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
