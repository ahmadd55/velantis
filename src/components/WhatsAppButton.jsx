export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/966533221625"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-black py-2 pr-4 pl-2 text-sm font-semibold text-white shadow-lg sm:right-6 sm:bottom-6"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#25D366] text-white">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 20.5 3.5M12 20.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.5.7.7-3.4-.2-.3A8.2 8.2 0 1 1 12 20.2m4.5-6.1c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.3a.5.5 0 0 0 0-.5c0-.1-.5-1.3-.7-1.7s-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 3.9 15 15 0 0 0 1.5.5 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.2-.1-.4-.2" />
        </svg>
      </span>
      Chat on WhatsApp
    </a>
  );
}
