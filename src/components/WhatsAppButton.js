import { whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with VPH Enterprises on WhatsApp (opens in a new tab)"
      className="fixed right-6 bottom-6 z-30 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-card-hover transition-colors hover:bg-[#0b6334] focus-visible:bg-[#0b6334] sm:inline-flex"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
