import FeatureCard from "../components/FeatureCard";
import PageHero from "../components/PageHero";
import { projects } from "../data/projects";

export default function OffPlan() {
  return (
    <div className="bg-[#f7f4ef]">
      <PageHero
        eyebrow="Developer projects"
        title="Off-Plan Projects"
        description="Developer-led projects with flexible payment plans"
      />
      <section className="px-4 pb-28 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <FeatureCard
              key={project.slug}
              slug={project.slug}
              image={project.image}
              developer={project.developer}
              title={project.title}
              location={project.cardLocation}
              units={project.cardUnits}
              handover={project.cardHandover}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
