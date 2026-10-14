import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRightIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
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
      <section aria-label="Contact VPH Enterprises" className="py-12 sm:py-20">
        {/* Heading on top, then the details panel and the form side by side, so
            the two boxes always have the same height. */}
        <div className={`${container} grid gap-8 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-10`}>
          <h1 className="order-1 font-heading text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] font-extrabold tracking-tighter text-center text-navy lg:order-0 lg:text-left">
            Let&rsquo;s get
            <span className="block">in touch</span>
          </h1>

          {/* Arrow from the heading across to the form (wide screens only). */}
          <div aria-hidden="true" className="hidden items-center lg:flex">
            <span className="h-0.5 flex-1 bg-navy" />
            <ArrowRightIcon className="-ml-3 size-8 shrink-0 text-navy" />
          </div>

          {/* Details on a soft cream-gold panel. */}
          <div className="order-2 flex flex-col rounded-4xl bg-[#f6ebd0] p-5 sm:p-8 lg:order-0">
            <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-navy sm:text-4xl">
              Send an enquiry
            </h2>
            <p className="mt-3 max-w-sm text-lg text-navy/85">
              Tell us what your shop needs and our team will get back to you.
            </p>

            <dl className="mt-7 flex flex-1 flex-col justify-between gap-3">
              <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgb(11_37_69/0.08)]">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-navy text-gold-light">
                  <PhoneIcon className="size-6" />
                </span>
                <div>
                  <dt className="text-sm text-body">Phone</dt>
                  <dd>
                    <a
                      href={site.phone.href}
                      className="inline-flex min-h-8 items-center text-lg font-semibold text-navy hover:text-gold-dark"
                    >
                      {site.phone.display}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgb(11_37_69/0.08)]">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-navy text-gold-light">
                  <WhatsAppIcon className="size-6" />
                </span>
                <div>
                  <dt className="text-sm text-body">WhatsApp</dt>
                  <dd>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-8 items-center text-lg font-semibold text-navy hover:text-gold-dark"
                    >
                      Chat with us
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgb(11_37_69/0.08)]">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-navy text-gold-light">
                  <MapPinIcon className="size-6" />
                </span>
                <div>
                  <dt className="text-sm text-body">Office</dt>
                  <dd className="font-semibold text-navy">
                    <address className="mt-0.5 not-italic">
                      {site.name}
                      <br />
                      {fullAddress}
                    </address>
                    <a
                      href={site.map.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex min-h-9 items-center gap-2 text-base underline decoration-2 underline-offset-4 hover:text-gold-dark"
                    >
                      See on Google Map
                      <ArrowRightIcon className="size-5 -rotate-45" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="order-3 lg:order-0">
            <ContactForm />
          </div>
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
