import { Link } from "react-router-dom";
import { LuGlobe } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";

export default function NavBar () {
  return (
    <nav className=" flex justify-center bg-black text-white py-4 fixed top-0 left-0 w-full z-1000">
      <div className="flex items-center justify-center gap-30 px-8">
        <div className="flex items-center gap-3">
          <svg
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 h-8 w-8 md:h-9 md:w-9"
            aria-hidden="true"
          >
            <rect width="36" height="36" rx="9" fill="rgba(255,255,255,0.08)" />

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
          <h1 className="text-2xl font-bold uppercase">Velantis</h1>
        </div>
        <div className="flex justify-center">
          <ul className="flex items-center gap-10 text-[15px] font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/property">Property</Link>
            </li>

            <li>
              <Link to="/listings">Listings</Link>
            </li>

            <li>
              <Link to="/off-plan">Off-Plan</Link>
            </li>

            <li>
              <Link to="/about-us">About Us</Link>
            </li>

            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 h-11">
            <LuGlobe className="pt-1" />
            <span>عربي</span>
          </button>

          <button className="flex items-center gap-1 h-11 ">
            <LuPhone />
            <span>+966 533 221 625</span>
          </button>

          <button className="flex justify-center items-center px-2 py-2 rounded-lg bg-[#c4674a] cursor-pointer ">
            Send Message
          </button>
        </div>
      </div>
    </nav>
  );
}

