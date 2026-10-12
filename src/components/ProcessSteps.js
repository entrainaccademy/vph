import { BoxIcon, ClipboardIcon, TruckIcon } from "./Icons";

const steps = [
  {
    icon: ClipboardIcon,
    title: "Order taken at your shop",
    text: "Our executive marketer visits your shop and takes your order.",
  },
  {
    icon: BoxIcon,
    title: "Packed by our supply team",
    text: "Our supply team picks and packs your order.",
  },
  {
    icon: TruckIcon,
    title: "Delivered to your door",
    text: "Our delivery team brings it to your doorstep.",
  },
];

export default function ProcessSteps() {
  return (
    <ol className="grid gap-5 md:grid-cols-3">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="flex flex-col rounded-xl border-2 border-navy bg-white p-6 shadow-[5px_5px_0_0_var(--color-navy)]"
        >
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex size-12 items-center justify-center rounded-lg bg-wash text-navy">
              <step.icon className="size-6" />
            </span>
            <span
              aria-hidden="true"
              className="text-4xl leading-none font-semibold text-wash-200"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-8 text-xl font-semibold">
            <span className="sr-only">Step {i + 1}: </span>
            {step.title}
          </h3>
          <p className="mt-2">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
