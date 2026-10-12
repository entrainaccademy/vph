import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
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
      <section aria-labelledby="mission" className="py-16 sm:py-20">
        <div className={container}>
          <div className="rounded-xl border border-line bg-white p-6 shadow-card sm:p-10">
            <h2 id="mission" className="text-2xl font-bold sm:text-3xl">
              Our mission
            </h2>
            <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-gold" />
            <p className="mt-6 max-w-3xl border-l-4 border-gold pl-5 font-heading text-xl font-semibold text-navy sm:text-2xl">
              To deliver quality goods to every retailer in Malappuram, on time
              and with integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values" className="bg-white py-16 sm:py-20">
        <div className={container}>
          <SectionHeading id="values" eyebrow="How we work" title="Our values">
            <p>
              Our tagline, <strong className="text-navy">{site.tagline}</strong>,
              is how we work.
            </p>
          </SectionHeading>
          <ul className="mt-10 grid gap-4 sm:gap-6 md:grid-cols-3">
            {values.map((value) => (
              <li key={value.title}>
                <FeatureCard icon={value.icon} title={value.title}>
                  {value.text}
                </FeatureCard>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Strengths */}
      <section aria-labelledby="strengths" className="py-16 sm:py-20">
        <div className={container}>
          <SectionHeading id="strengths" eyebrow="Wholesale distribution" title="Our strengths">
            <p>
              An executive marketer visits your shop and takes your order, our
              supply team packs it, and our delivery team brings it to your
              door. No minimum order.
            </p>
          </SectionHeading>
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Partner */}
      <section aria-labelledby="partner" className="bg-navy py-16 sm:py-20">
        <div className={`${container} text-center`}>
          <SectionHeading id="partner" title="Partner with us" align="center" onDark>
            <p>
              Are you a brand looking for distribution in Malappuram? Get in
              touch.
            </p>
          </SectionHeading>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Contact us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
