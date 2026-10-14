import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site, whatsappLink } from "@/config/site";

const facts = [
  { big: site.retailerCount, small: "Retailers supplied" },
  { big: "Malappuram", small: "District-wide delivery" },
  { big: "Vahikkadavu", small: "Our base" },
];

// Gold section, centred: heading, three equal navy tiles, then the buttons.
export default function AreasSection() {
  return (
    <section aria-labelledby="areas" className="bg-gold-light py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading id="areas" title="Areas we serve" align="center">
            <p className="text-navy">
              We deliver across Malappuram District, straight to your shop.
            </p>
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-3 md:gap-5">
            {facts.map(({ big, small }) => (
              <li
                key={big}
                className="rounded-3xl bg-navy px-4 py-8 sm:py-10"
              >
                <p className="font-heading text-3xl font-semibold text-gold-light sm:text-4xl">
                  {big}
                </p>
                <p className="mt-3 text-sm font-medium tracking-wider text-white/85 uppercase">
                  {small}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={whatsappLink()} external variant="dark">
              Place an order
            </Button>
            <Button href="/contact" variant="secondary">
              Find us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
