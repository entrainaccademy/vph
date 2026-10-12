import { Eyebrow } from "./SectionHeading";

// Pale intro band with the page's single H1.
export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="bg-wash">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mx-auto mt-5 max-w-4xl text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {children && (
          <div className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl">{children}</div>
        )}
      </div>
    </section>
  );
}
