import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { fullAddress, site, whatsappLink } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact VPH Enterprises | Retailer Enquiries, Malappuram",
  description:
    "Contact VPH Enterprises in Vahikkadavu, Malappuram. Call, WhatsApp or send an enquiry to stock our FMCG brands in your shop.",
  path: "/contact",
});

const container = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Contact VPH Enterprises">
        <p>
          Whether you&apos;re a retailer wanting to stock our brands or a
          company seeking a distributor in Malappuram, we&apos;d love to hear
          from you.
        </p>
      </PageHero>

      <section aria-label="Enquiry form and contact details" className="py-16 sm:py-20">
        <div className={`${container} grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]`}>
          <ContactForm />

          <aside
            aria-labelledby="contact-details"
            className="rounded-xl border-2 border-navy bg-navy p-5 text-white/85 shadow-[6px_6px_0_0_var(--color-gold)] sm:p-8"
          >
            <h2
              id="contact-details"
              className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Contact details
            </h2>

            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-light">
                  <MapPinIcon />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-white">Address</h3>
                  <address className="mt-1 not-italic">
                    {site.name}
                    <br />
                    {fullAddress}
                  </address>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-light">
                  <PhoneIcon />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-white">Phone</h3>
                  <a
                    href={site.phone.href}
                    className="inline-flex min-h-11 items-center font-semibold text-white underline decoration-gold-light decoration-2 underline-offset-4 hover:text-gold-light"
                  >
                    {site.phone.display}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <Button href={whatsappLink()} external variant="whatsapp" icon={WhatsAppIcon} onDark>
                Chat on WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </Button>
              <Button
                href={site.map.directions}
                external
                variant="secondaryOnDark"
                icon={MapPinIcon}
              >
                Get directions
                <span className="sr-only"> (opens Google Maps in a new tab)</span>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="find-us" className="bg-wash py-16 sm:py-20">
        <div className={container}>
          <SectionHeading id="find-us" eyebrow="Location" title="Find us in Vahikkadavu, Malappuram" />
          <div className="mt-10 overflow-hidden rounded-xl border-2 border-navy bg-wash shadow-[6px_6px_0_0_var(--color-navy)]">
            <iframe
              src={site.map.embed}
              title={`Map showing ${site.name}, ${site.address.street}, ${site.address.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-4/3 h-auto w-full border-0 sm:aspect-16/7"
            />
          </div>
        </div>
      </section>
    </>
  );
}
