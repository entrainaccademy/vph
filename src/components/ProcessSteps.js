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
    // Timeline: round icon nodes joined by a dashed line, no boxes.
    <ol className="grid gap-10 md:grid-cols-3">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="relative flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center"
        >
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute top-16 left-8 h-[calc(100%-1rem)] -translate-x-px border-l-2 border-dashed border-gold md:top-8 md:left-1/2 md:h-0 md:w-[calc(100%+2.5rem)] md:translate-x-0 md:border-t-2 md:border-l-0"
            />
          )}
          <span className="relative z-10 inline-flex size-16 shrink-0 items-center justify-center rounded-full border-4 border-wash bg-navy text-gold-light">
            <step.icon className="size-7" />
            <span
              aria-hidden="true"
              className="absolute -top-1 -right-1 inline-flex size-6 items-center justify-center rounded-full bg-gold text-xs font-semibold text-white"
            >
              {i + 1}
            </span>
          </span>
          <div className="md:mt-6">
            <h3 className="text-xl font-semibold">
              <span className="sr-only">Step {i + 1}: </span>
              {step.title}
            </h3>
            <p className="mt-2 md:mx-auto md:max-w-xs">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
