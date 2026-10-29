import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuGlobe, LuMenu, LuPhone, LuX } from "react-icons/lu";
import { useI18n } from "../i18n.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/property", label: "Property" },
  { to: "/listings", label: "Listings" },
  { to: "/off-plan", label: "Off-Plan" },
  { to: "/about-us", label: "About Us" },
  { to: "/contact-us", label: "Contact Us" },
];

function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-2 sm:gap-3">
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
      <span className="text-lg font-bold uppercase sm:text-2xl">Velantis</span>
    </Link>
  );
}

export default function NavBar() {
  const { pathname } = useLocation();
  const { t, lang, toggle } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const close = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-t-2 border-[#c4674a] bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 lg:px-6">
        <Logo onClick={() => setOpen(false)} />

        <ul className="hidden items-center gap-6 text-sm font-medium xl:flex">
          {links.map((link) => {
            const active =
              link.to === "/"
                ? pathname === "/"
                : pathname === link.to || pathname.startsWith(`${link.to}/`);
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "rounded-full bg-[#1a3c34] px-3 py-1.5 text-white"
                      : "rounded-full px-3 py-1.5 hover:text-white/80"
                  }
                  onClick={() => setOpen(false)}
                >
                  {t(link.label)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            className="hidden items-center gap-2 md:flex"
            aria-label={lang === "ar" ? "English" : "العربية"}
          >
            <LuGlobe />
            <span>{lang === "ar" ? "English" : "عربي"}</span>
          </button>

          <a
            href="tel:+966533221625"
            className="hidden items-center gap-1.5 text-sm md:flex"
          >
            <LuPhone />
            <span>+966 533 221 625</span>
          </a>

          <Link
            to="/contact-us"
            className="hidden rounded-lg bg-[#c4674a] px-3 py-2 text-sm font-semibold sm:inline-flex"
          >
            {t("Send Message")}
          </Link>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("Close menu") : t("Open menu")}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-white/10 bg-black xl:hidden"
        >
          <ul className="px-4">
            {links.map((link) => {
              const active =
                link.to === "/"
                  ? pathname === "/"
                  : pathname === link.to || pathname.startsWith(`${link.to}/`);
              return (
                <li key={link.to} className="border-b border-white/10">
                  <Link
                    to={link.to}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-3.5 text-base ${active ? "bg-[#1a3c34] text-white" : ""}`}
                  >
                    {t(link.label)}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col gap-3 px-4 py-4">
            <button type="button" onClick={toggle} className="flex items-center gap-2 py-1 md:hidden">
              <LuGlobe />
              <span>{lang === "ar" ? "English" : "عربي"}</span>
            </button>
            <a
              href="tel:+966533221625"
              className="flex items-center gap-2 py-1 md:hidden"
            >
              <LuPhone />
              <span>+966 533 221 625</span>
            </a>
            <Link
              to="/contact-us"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-[#c4674a] px-4 py-3 text-center text-sm font-semibold"
            >
              {t("Send Message")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
