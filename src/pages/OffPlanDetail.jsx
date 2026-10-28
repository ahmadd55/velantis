import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  LuBanknote,
  LuBuilding2,
  LuCalendar,
  LuLayers,
  LuMapPin,
  LuUser,
} from "react-icons/lu";
import InterestForm from "../components/InterestForm";
import { getProject } from "../data/projects";

function Stat({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center gap-2 text-[#c4674a]">
        {icon}
        <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">{label}</span>
      </div>
      <p className="text-sm leading-snug font-semibold text-slate-900">{value}</p>
    </div>
  );
}

export default function OffPlanDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="bg-[#f7f4ef] px-4 pt-32 pb-28 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Project not found</h1>
        <Link to="/off-plan" className="mt-4 inline-block font-semibold text-[#c4674a]">
          Browse off-plan projects
        </Link>
      </div>
    );
  }

  const whatsapp = `https://wa.me/966533221625?text=${encodeURIComponent(`Hi, I'm interested in ${project.title}`)}`;

  return (
    <div className="min-h-screen bg-[#f7f4ef] pt-20">
      <div className="relative h-64 w-full overflow-hidden md:h-96">
        <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 flex items-end bg-black/40">
          <div className="mx-auto w-full max-w-6xl px-4 pb-8">
            <span className="mb-3 inline-block rounded-full bg-[#f4efe6] px-3 py-1 text-xs font-semibold text-slate-900">
              {project.stage}
            </span>
            <h1 className="text-3xl font-bold text-white md:text-5xl">{project.title}</h1>
            <p className="mt-2 text-white/90">
              {project.location} · {project.developer}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-8 lg:col-span-2">
          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900">Project overview</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Stat icon={<LuMapPin className="h-4 w-4" />} label="Location" value={project.location} />
              <Stat icon={<LuBuilding2 className="h-4 w-4" />} label="Construction stage" value={project.stage} />
              <Stat icon={<LuCalendar className="h-4 w-4" />} label="Expected completion" value={project.handover} />
              <Stat icon={<LuBanknote className="h-4 w-4" />} label="Starting from" value={project.startingFrom} />
              <Stat icon={<LuLayers className="h-4 w-4" />} label="Total units" value={project.unitsLabel} />
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900">About this project</h2>
            <p className="leading-relaxed whitespace-pre-wrap text-slate-600">{project.about}</p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900">Amenities</h2>
            <div className="flex flex-wrap gap-2">
              {project.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-slate-600"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900">Payment plan</h2>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900">{project.paymentTitle}</h3>
              <div className="mt-4">
                {project.payments.map((step) => (
                  <div
                    key={step.label}
                    className="flex justify-between border-b border-black/10 py-2 text-sm last:border-0"
                  >
                    <span className="text-slate-600">{step.label}</span>
                    <span className="font-semibold text-slate-900">{step.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900">Available units</h2>
            <div className="overflow-x-auto rounded-2xl border border-black/10">
              <table className="min-w-full text-sm">
                <thead className="bg-[#f3efe8]">
                  <tr>
                    {["Code", "Type", "BR", "Area", "Price", "Status"].map((heading) => (
                      <th key={heading} className="px-4 py-3 text-start font-semibold text-slate-900">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {project.units.map((unit) => (
                    <tr key={unit.code} className="border-t border-black/10">
                      <td className="px-4 py-2.5">{unit.code}</td>
                      <td className="px-4 py-2.5">{unit.type}</td>
                      <td className="px-4 py-2.5">{unit.beds}</td>
                      <td className="px-4 py-2.5">{unit.area}</td>
                      <td className="px-4 py-2.5">{unit.price}</td>
                      <td className="px-4 py-2.5 capitalize">{unit.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900">Gallery</h2>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {project.gallery.map((src) => (
                <div key={src} className="relative h-40 overflow-hidden rounded-xl bg-[#f3efe8]">
                  <img src={src} alt={project.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900">Location</h2>
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <iframe
                title="Map"
                src={`https://www.google.com/maps?q=${project.lat},${project.lng}&hl=en&z=14&output=embed`}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
              <LuUser className="h-5 w-5 text-[#c4674a]" aria-hidden="true" />
              Your specialist
            </h2>
            <p className="font-semibold text-slate-900">{project.specialist.name}</p>
            <p className="mt-1 text-sm text-slate-600" dir="ltr">
              {project.specialist.phone}
            </p>
          </div>
          <InterestForm whatsappHref={whatsapp} />
        </aside>
      </div>
    </div>
  );
}
