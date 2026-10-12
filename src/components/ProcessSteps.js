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
    <ol className="grid gap-4 sm:gap-6 md:grid-cols-3">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="relative rounded-xl border border-line bg-white p-6 shadow-card"
        >
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-gold font-heading text-lg font-bold text-navy"
            >
              {i + 1}
            </span>
            <step.icon className="size-7 text-navy" />
          </div>
          <h3 className="mt-4 text-lg font-bold">
            <span className="sr-only">Step {i + 1}: </span>
            {step.title}
          </h3>
          <p className="mt-2">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
