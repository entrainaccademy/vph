import Image from "next/image";
import { site } from "@/config/site";

export default function BrandGrid({ brands = site.brands }) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
      {brands.map((brand) => (
        <li
          key={brand.name}
          className="rounded-xl border border-line bg-white p-3 shadow-card transition-shadow hover:shadow-card-hover"
        >
          {/* Equal-size box so every logo has the same visual weight. */}
          <div className="relative aspect-3/2 w-full">
            <Image
              src={brand.logo}
              alt={`${brand.name} - distributed by VPH Enterprises`}
              fill
              sizes="(min-width: 1152px) 240px, (min-width: 768px) 22vw, 44vw"
              className="object-contain p-2 sm:p-4"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
