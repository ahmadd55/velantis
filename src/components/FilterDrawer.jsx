import { useEffect } from "react";
import { LuFilter, LuX } from "react-icons/lu";

const types = ["Residential", "Commercial", "Industrial", "Land", "Beach", "Others"];
const conditions = ["New", "Old", "Other"];
const facings = ["East", "West", "North", "South"];

function toggle(list, value) {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

export default function FilterDrawer({ open, draft, setDraft, onClose, onApply, onClear }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  const set = (key, value) => setDraft((current) => ({ ...current, [key]: value }));

  return (
    <div
      inert={!open}
      aria-hidden={!open}
      className={open ? "fixed inset-0 z-[60]" : "pointer-events-none fixed inset-0 z-[60]"}
    >
      <button
        type="button"
        aria-label="Close filters"
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <aside
        aria-hidden={!open}
        className={`absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between bg-black px-4 py-4 text-white">
          <div className="flex items-center gap-2">
            <LuFilter />
            <h2 className="text-xl font-semibold">Property filters</h2>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="rounded-full p-2 hover:bg-white/20"
          >
            <LuX />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto pb-4">
          <div className="border-b border-black/10 p-4">
            <h3 className="mb-3 text-lg font-semibold">Property type</h3>
            <div className="flex flex-wrap gap-2">
              {types.map((type) => {
                const active = draft.types.includes(type);
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => set("types", toggle(draft.types, type))}
                    className={`rounded-md px-4 py-2 text-sm ${
                      active ? "bg-black text-white" : "bg-[#f3efe9] text-slate-700 hover:bg-black/10"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4 p-4">
            <Field label="When selling">
              <select
                value={draft.selling}
                onChange={(event) => set("selling", event.target.value)}
                className="h-12 w-full rounded-md border border-black/10 bg-white px-3"
              >
                <option value="">Select timeline</option>
                <option>Immediately</option>
                <option>In a month</option>
                <option>In 3 months</option>
                <option>In a year</option>
              </select>
            </Field>

            <CheckGroup
              label="Property condition"
              options={conditions}
              selected={draft.conditions}
              onToggle={(value) => set("conditions", toggle(draft.conditions, value))}
            />
            <CheckGroup
              label="Property facing"
              options={facings}
              selected={draft.facings}
              onToggle={(value) => set("facings", toggle(draft.facings, value))}
            />

            <Field label="Build year">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  min="2000"
                  max="2026"
                  placeholder="From"
                  value={draft.yearFrom}
                  onChange={(event) => set("yearFrom", event.target.value)}
                  className="rounded-md border border-black/10 px-3 py-2"
                />
                <input
                  type="number"
                  min="2000"
                  max="2026"
                  placeholder="To"
                  value={draft.yearTo}
                  onChange={(event) => set("yearTo", event.target.value)}
                  className="rounded-md border border-black/10 px-3 py-2"
                />
              </div>
            </Field>

            <RangeField label="Price range (SAR)" min={draft.priceMin} max={draft.priceMax} onMin={(value) => set("priceMin", value)} onMax={(value) => set("priceMax", value)} />
            <RangeField label="Land area (sqm)" min={draft.landMin} max={draft.landMax} onMin={(value) => set("landMin", value)} onMax={(value) => set("landMax", value)} />
            <RangeField label="Covered area (sqm)" min={draft.coveredMin} max={draft.coveredMax} onMin={(value) => set("coveredMin", value)} onMax={(value) => set("coveredMax", value)} />

            <Field label="Location">
              <div className="space-y-2">
                <input placeholder="City" value={draft.city} onChange={(event) => set("city", event.target.value)} className="w-full rounded-md border border-black/10 px-3 py-2" />
                <input placeholder="State" value={draft.state} onChange={(event) => set("state", event.target.value)} className="w-full rounded-md border border-black/10 px-3 py-2" />
                <input placeholder="Country" value={draft.country} onChange={(event) => set("country", event.target.value)} className="w-full rounded-md border border-black/10 px-3 py-2" />
              </div>
            </Field>

            <Field label="Buyer journey">
              <select
                value={draft.journey}
                onChange={(event) => set("journey", event.target.value)}
                className="h-12 w-full rounded-md border border-black/10 bg-white px-3"
              >
                <option value="">Select journey</option>
                <option value="citizens">Saudi citizens</option>
                <option value="expats">Expats</option>
                <option value="prsaudia">Premium residency</option>
                <option value="invest">Investors</option>
                <option value="haramain">Haramain</option>
              </select>
            </Field>
          </div>
        </div>

        <div className="border-t border-black/10 bg-white p-3">
          <div className="flex gap-2">
            <button type="button" onClick={onClear} className="flex-1 rounded-md bg-slate-500 px-3 py-2.5 text-sm font-medium text-white hover:bg-slate-600">
              Clear all
            </button>
            <button type="button" onClick={onApply} className="flex-1 rounded-md bg-black px-3 py-2.5 text-sm font-medium text-white hover:opacity-90">
              Apply filters
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="border-b border-black/10 pb-4">
      <h3 className="mb-3 text-lg font-semibold">{label}</h3>
      {children}
    </div>
  );
}

function RangeField({ label, min, max, onMin, onMax }) {
  return (
    <Field label={label}>
      <div className="grid grid-cols-2 gap-2">
        <input type="number" placeholder="Min" value={min} onChange={(event) => onMin(event.target.value)} className="rounded-md border border-black/10 px-3 py-2" />
        <input type="number" placeholder="Max" value={max} onChange={(event) => onMax(event.target.value)} className="rounded-md border border-black/10 px-3 py-2" />
      </div>
    </Field>
  );
}

function CheckGroup({ label, options, selected, onToggle }) {
  return (
    <Field label={label}>
      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-2 text-sm text-slate-500">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => onToggle(option)}
              className="rounded border-slate-300"
            />
            {option}
          </label>
        ))}
      </div>
    </Field>
  );
}
