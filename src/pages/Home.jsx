import Hero from "../components/Hero";
import ClientCard from "../components/ClientCard";
import MortageCard from "../components/MortageCard";
import SecondCard from "../components/SecondCard";
import FeatureCard from "../components/FeatureCard";
import HeroSection from "../components/HeroSection";
import FeaturedCarousel from "../components/FeaturedCarousel";
import InsightStatCard from "../components/InsightStatCard";
import InsightCarousel from "../components/InsightCarousel";

export default function Home() {
  return (
    <>
      <HeroSection />

      <div className=" flex flex-col justify-center px-38 py-20 bg-[#faf8f5]">
        <div className="self-start inline-flex rounded-full border border-gray-300 px-3 py-1 items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c4674a]"></span>
          <span className="uppercase text-[#3ab5a5] font-semibold">
            Off-plan
          </span>
        </div>
        <h1 className="mt-8 text-4xl font-extrabold">Featured projects</h1>
        <div className="mt-4 h-1 w-12 rounded-[2px] border bg-black"></div>
        <p className="mt-4 text-[#6e6558] text-lg">
          Hand-picked off-plan opportunities for this journey
        </p>

        <div className="mt-14">
          <FeaturedCarousel cards={[{}, {}, {}, {}]} />
        </div>
      </div>

      <div className=" flex flex-col justify-center px-38 py-20 bg-[#faf8f5]">
        <div className="self-start inline-flex rounded-full border border-gray-300 px-3 py-1 items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c4674a]"></span>
          <span className="uppercase text-[#3ab5a5] font-semibold">
            buyer tools
          </span>
        </div>
        <h1 className="mt-8 text-4xl font-extrabold">
          Plan your purchase with confidence
        </h1>
        <div className="mt-4 h-1 w-12 rounded-[2px] border bg-black"></div>
        <p className="mt-4 text-[#6e6558] text-lg">
          Estimate finance, book tours, and browse FAL-verified listings —
          everything you need before you buy.
        </p>

        <div className="mt-14 flex gap-10">
          <MortageCard />
          <div className="flex flex-col gap-4">
            <SecondCard />
            <SecondCard />
            <SecondCard />
          </div>
        </div>
      </div>

      <div className="flex flex-col px-30 py-20 bg-[#f2ede5] gap-6">
        <div className="self-start inline-flex rounded-full border border-gray-300 px-3 py-1 items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c4674a]"></span>
          <span className="uppercase text-[#3ab5a5] font-semibold">
            Market data
          </span>
        </div>
        <h1 className="text-4xl font-extrabold">Saudi market insights</h1>
        <div className="h-1 w-12 rounded-[2px] border bg-black"></div>
        <p className="text-[#6e6558] text-lg">
          Key indicators across major cities — updated from live Velantis
          listings
        </p>
        <div className="mt-8">
          <InsightCarousel />
        </div>
      </div>

      <div className="h-[750px] flex flex-col justify-center items-center bg-[#f2ede5] gap-6">
        <h1 className="text-4xl font-extrabold">What our clients say</h1>
        <div className="h-1 w-12 rounded-[2px] border bg-black"></div>
        <p className="text-[#6e6558] text-lg">
          Real experiences from satisfied customers across Saudi Arabia
        </p>
        <div className="flex gap-7 mt-8">
          <ClientCard />
          <ClientCard />
          <ClientCard />
        </div>

        <button className="rounded-xl bg-white font-semibold px-7 py-4 mt-5">
          View all properties
        </button>
      </div>
    </>
  );
}
