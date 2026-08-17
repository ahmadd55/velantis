export default function Footer() {
  return (
    <footer className="border-t border-orange-500 bg-black h-[420px] flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 h-8 w-8 md:h-9 md:w-9"
                aria-hidden="true"
              >
                <rect
                  width="36"
                  height="36"
                  rx="9"
                  fill="rgba(255,255,255,0.08)"
                />
                <path
                  d="M8 11h6.5l3.5 14 3.5-14H28L21.5 27h-7L8 11z"
                  fill="#C4674A"
                />
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
              <h1 className="text-xl font-semibold uppercase text-white">Velantis</h1>
            </div>

            <p className="text-gray-400 text-sm">
              Your trusted partner for property ownership in Saudi Arabia —
              citizens, residents, investors, and Haramain buyers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 uppercase text-orange-300">
              Explore
            </h3>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li>Browse properties</li>
              <li>All listings</li>
              <li>Off-plan projects</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 uppercase text-orange-300">
              Buy & Sell Real Estate in Saudi Arabia
            </h3>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li>Browse properties</li>
              <li>All listings</li>
              <li>Off-plan projects</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 uppercase text-orange-300">
              Buy & Sell Home in Saudi Arabia
            </h3>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li>Browse properties</li>
              <li>All listings</li>
              <li>Off-plan projects</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between border-t border-gray-700 pt-4 text-sm text-gray-400">
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
