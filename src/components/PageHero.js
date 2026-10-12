// Navy intro band with the page's single H1.
export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-0 hidden h-64 w-64 translate-x-1/3 rotate-45 bg-navy-700 md:block"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-light">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <span aria-hidden="true" className="mt-5 block h-1 w-16 rounded-full bg-gold" />
          {children && (
            <div className="mt-6 text-lg text-white/85 sm:text-xl">{children}</div>
          )}
        </div>
      </div>
    </section>
  );
}
