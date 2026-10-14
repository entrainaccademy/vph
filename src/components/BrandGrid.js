import Image from "next/image";
import { site } from "@/config/site";

export default function BrandGrid({ brands = site.brands }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
      {brands.map((brand) => (
        <li
          key={brand.name}
          className="rounded-xl border-2 border-navy/10 bg-white p-2 transition-[border-color,box-shadow] duration-150 hover:border-navy hover:shadow-[4px_4px_0_0_var(--color-navy)] sm:p-3"
        >
          {/* Equal-size box so every logo has the same visual weight. */}
          <div className="relative aspect-4/3 w-full">
            {brand.logoMissing ? (
              // Placeholder until a usable logo file is supplied.
              <p className="flex h-full items-center justify-center text-xl font-semibold text-navy">
                {brand.name}
              </p>
            ) : (
              <Image
                src={brand.logo}
                alt={`${brand.name} - distributed by VPH Enterprises`}
                fill
                sizes="(min-width: 1280px) 300px, (min-width: 768px) 23vw, 46vw"
                className="object-contain p-4 sm:p-6"
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
