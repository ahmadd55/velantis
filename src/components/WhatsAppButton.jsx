import WhatsAppMark from "./WhatsAppMark";
import { useI18n } from "../i18n.jsx";

export default function WhatsAppButton() {
  const { t } = useI18n();
  return (
    <a
      href="https://wa.me/966533221625"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-black py-2 pr-4 pl-2 text-sm font-semibold text-white shadow-lg sm:right-6 sm:bottom-6"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-slate-900">
        <WhatsAppMark />
      </span>
      {t("Chat on WhatsApp")}
    </a>
  );
}
