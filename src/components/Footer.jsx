function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 shrink-0 md:h-9 md:w-9"
        aria-hidden="true"
      >
        <rect width="36" height="36" rx="9" fill="rgba(255,255,255,0.08)" />
        <path d="M8 11h6.5l3.5 14 3.5-14H28L21.5 27h-7L8 11z" fill="#C4674A" />
        <path
          d="M11 11h5l4.5 11.5L25 11h5l-7.5 16h-5L11 11z"
          fill="#2A9D8F"
          fillOpacity="0.85"
        />
        <path
          d="M10 9h16"
          stroke="#D4A574"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <h2 className="text-xl font-semibold uppercase text-white">Velantis</h2>
    </div>
  );
}

const exploreLinks = [
  "Browse properties",
  "All listings",
  "Off-plan projects",
  "About us",
  "Contact us",
];

export default function Footer() {
  return (
    <footer className="border-t border-orange-500 bg-black">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              Your trusted partner for property ownership in Saudi Arabia —
              citizens, residents, investors, and Haramain buyers.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase leading-snug text-orange-300">
              Explore
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              {exploreLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase leading-snug text-orange-300">
              Buy & Sell Real Estate in Saudi Arabia
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              {exploreLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase leading-snug text-orange-300">
              Buy & Sell Home in Saudi Arabia
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              {exploreLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-700 pt-4 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velantis. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
