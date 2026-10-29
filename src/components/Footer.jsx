import { Link } from "react-router-dom";
import { useI18n } from "../i18n.jsx";

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
  { label: "Browse properties", to: "/property" },
  { label: "All listings", to: "/listings" },
  { label: "Off-plan projects", to: "/off-plan" },
  { label: "About us", to: "/about-us" },
  { label: "Contact us", to: "/contact-us" },
];

const realEstateLinks = [
  { label: "Buy Real Estate in Riyadh", to: "/listings?city=Riyadh" },
  { label: "Buy Real Estate in Jeddah", to: "/listings?city=Jeddah" },
  { label: "Buy Real Estate in Makkah", to: "/listings?city=Makkah" },
  { label: "Buy Real Estate in Madinah", to: "/listings?city=Madinah" },
];

const homeLinks = [
  { label: "Buy Home in Riyadh", to: "/listings?city=Riyadh" },
  { label: "Buy Home in Jeddah", to: "/listings?city=Jeddah" },
  { label: "Buy Home in Makkah", to: "/listings?city=Makkah" },
  { label: "Buy Home in Madinah", to: "/listings?city=Madinah" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/19uEvAEDWM/",
    path: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z",
    viewBox: "0 0 320 512",
  },
  {
    label: "X",
    href: "https://x.com/brokerabia?s=11",
    path: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
    viewBox: "0 0 512 512",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/brokerabia/",
    path: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
    viewBox: "0 0 448 512",
  },
];

function Column({ title, links }) {
  const { t } = useI18n();
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#d4a574]">
        {t(title)}
      </h3>
      <ul className="flex flex-col gap-2.5 text-sm">
        {links.map((item) => (
          <li key={item.label}>
            <Link to={item.to} className="text-white/70 transition-colors hover:text-[#d4a574]">
              {t(item.label)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-orange-500 bg-black">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              {t("Your trusted partner for property ownership in Saudi Arabia — citizens, residents, investors, and Haramain buyers.")}
            </p>
            <div className="mt-3 flex gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-[#d4a574] hover:text-slate-900"
                >
                  <svg viewBox={item.viewBox} className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d={item.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <Column title="Explore" links={exploreLinks} />
          <Column title="Buy & Sell Real Estate in Saudi Arabia" links={realEstateLinks} />
          <Column title="Buy & Sell Home in Saudi Arabia" links={homeLinks} />
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("© 2026 Velantis. All rights reserved.")}</p>
          <div className="flex gap-4">
            <span className="transition-colors hover:text-[#d4a574]">{t("Privacy Policy")}</span>
            <span className="transition-colors hover:text-[#d4a574]">{t("Terms of Service")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
