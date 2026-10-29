const photo = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const projects = [
  {
    slug: "sedra",
    title: "Sedra — North Riyadh",
    developer: "Roshn",
    location: "Riyadh, Al Narjis, Saudi Arabia",
    cardLocation: "Riyadh · Al Narjis",
    stage: "Near Completion",
    handover: "December 2026",
    cardHandover: "Dec 2026",
    startingFrom: "SAR 890,000",
    unitsLabel: "186 / 420",
    cardUnits: "186/420 units",
    image: photo("photo-1600585154340-be6161a56a0c"),
    gallery: [
      photo("photo-1600585154340-be6161a56a0c"),
      photo("photo-1600566753086-00f18fb6b3ea"),
      photo("photo-1600573472592-401b489a3cdc"),
    ],
    about:
      "Family villas and apartments in North Riyadh, handed over December 2026. Built by Roshn with a construction-linked payment plan for buyers who want a ready community rather than a launch.",
    amenities: ["Pool", "Park", "Mosque", "Parking", "Retail"],
    paymentTitle: "Construction-linked",
    payments: [
      { label: "Booking", value: "10.00%" },
      { label: "50% construction", value: "40.00%" },
      { label: "Handover", value: "50.00%" },
    ],
    units: [
      { code: "S-204", type: "villa", beds: 4, area: "320 m²", price: "SAR 1,450,000", status: "available" },
      { code: "S-118", type: "apartment", beds: 3, area: "145 m²", price: "SAR 890,000", status: "available" },
    ],
    lat: 24.841,
    lng: 46.648,
    specialist: { name: "Nora Al-Saud", phone: "+966 533 221 625" },
  },
  {
    slug: "corniche-gardens",
    title: "Corniche Gardens",
    developer: "Dar Al Arkan",
    location: "Jeddah, Al Hamra, Saudi Arabia",
    cardLocation: "Jeddah · Al Hamra",
    stage: "Under Construction",
    handover: "June 2027",
    cardHandover: "Jun 2027",
    startingFrom: "SAR 1,250,000",
    unitsLabel: "94 / 210",
    cardUnits: "94/210 units",
    image: photo("photo-1512917774080-9991f1c4c750"),
    gallery: [
      photo("photo-1512917774080-9991f1c4c750"),
      photo("photo-1613490493576-7fde63acd811"),
      photo("photo-1600607687939-ce8a6c25118c"),
    ],
    about:
      "Waterfront apartments on the Jeddah Corniche. Handover June 2027. A Dar Al Arkan project for buyers who want a sea-facing home with a staged payment plan.",
    amenities: ["Beach access", "Pool", "Gym", "Concierge", "Parking"],
    paymentTitle: "Construction-linked",
    payments: [
      { label: "Booking", value: "20.00%" },
      { label: "50% construction", value: "30.00%" },
      { label: "90% construction", value: "30.00%" },
      { label: "Handover", value: "20.00%" },
    ],
    units: [
      { code: "C-802", type: "apartment", beds: 2, area: "118 m²", price: "SAR 1,250,000", status: "available" },
      { code: "C-1204", type: "apartment", beds: 3, area: "168 m²", price: "SAR 1,780,000", status: "reserved" },
    ],
    lat: 21.604,
    lng: 39.107,
    specialist: { name: "Hana Al-Zahrani", phone: "+966 533 221 625" },
  },
  {
    slug: "narjis-villas",
    title: "Narjis Villas",
    developer: "Retal",
    location: "Riyadh, Al Narjis, Saudi Arabia",
    cardLocation: "Riyadh · Al Narjis",
    stage: "Off-plan",
    handover: "March 2028",
    cardHandover: "Mar 2028",
    startingFrom: "SAR 2,400,000",
    unitsLabel: "42 / 80",
    cardUnits: "42/80 villas",
    image: photo("photo-1600596542815-ffad4c1539a9"),
    gallery: [
      photo("photo-1600596542815-ffad4c1539a9"),
      photo("photo-1600585154526-990dced4db0d"),
      photo("photo-1605276374104-dee2a0ed3cd6"),
    ],
    about:
      "Detached villas in Al Narjis with private gardens. Handover March 2028. A Retal project for families buying ahead of completion on a construction-linked plan.",
    amenities: ["Private garden", "Maid's room", "Parking", "Community park", "Mosque"],
    paymentTitle: "Construction-linked",
    payments: [
      { label: "Booking", value: "15.00%" },
      { label: "During construction", value: "55.00%" },
      { label: "Handover", value: "30.00%" },
    ],
    units: [
      { code: "N-12", type: "villa", beds: 5, area: "410 m²", price: "SAR 2,400,000", status: "available" },
      { code: "N-27", type: "villa", beds: 6, area: "480 m²", price: "SAR 2,950,000", status: "available" },
    ],
    lat: 24.845,
    lng: 46.652,
    specialist: { name: "Faisal Al-Qahtani", phone: "+966 533 221 625" },
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug) ?? null;
}
