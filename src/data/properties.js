const photo = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const images = [
  "photo-1600585154340-be6161a56a0c",
  "photo-1600596542815-ffad4c1539a9",
  "photo-1605276374104-dee2a0ed3cd6",
  "photo-1564013799919-ab600027ffc6",
  "photo-1570129477492-45c003edd2be",
  "photo-1568605114967-8130f3a36994",
  "photo-1580587771525-78b9dba3b914",
  "photo-1512917774080-9991f1c4c750",
  "photo-1613490493576-7fde63acd811",
  "photo-1600607687939-ce8a6c25118c",
  "photo-1600566753190-17f0baa2a6c3",
  "photo-1600210492486-724fe5c67fb0",
  "photo-1502672260266-1c1ef2d93688",
  "photo-1522708323590-d24dbb6b0267",
  "photo-1560448204-e02f11c3d0e2",
  "photo-1545324418-cc1a3fa10c00",
  "photo-1572120360610-d971b9d7767c",
  "photo-1460317442991-0ec209397118",
  "photo-1598228723793-52759bba239c",
  "photo-1600047509358-9dc75507daeb",
  "photo-1582268611958-ebfd161ef9cf",
  "photo-1499793983690-e29da59ef1c2",
  "photo-1512918728675-ed5a9ecdebfd",
  "photo-1560185007-cde436f6a4d0",
  "photo-1600585154526-990dced4db0d",
  "photo-1613977257363-707ba9348227",
  "photo-1600573472592-401b489a3cdc",
  "photo-1600566752355-35792bedcfea",
];

const advisors = [
  ["Nora Al-Saud", "FAL 771204"],
  ["Hana Al-Zahrani", "FAL 662118"],
  ["Faisal Al-Qahtani", "FAL 550902"],
  ["Omar Al-Harbi", "FAL 884210"],
  ["Sara Al-Dossary", "FAL 441776"],
];

const coords = {
  Riyadh: [24.7136, 46.6753],
  Jeddah: [21.4858, 39.1925],
  Mecca: [21.3891, 39.8579],
  Medina: [24.5247, 39.5692],
  Dammam: [26.4207, 50.0888],
  Khobar: [26.2172, 50.1971],
  Dhahran: [26.2361, 50.0393],
  "Al-Ahsa": [25.383, 49.586],
  Taif: [21.2703, 40.4158],
  Buraidah: [26.326, 43.975],
  Tabuk: [28.3838, 36.555],
  Abha: [18.2164, 42.5053],
  "Khamis Mushait": [18.3, 42.7333],
  Najran: [17.5656, 44.2289],
  Jizan: [16.8892, 42.5511],
  Yanbu: [24.0895, 38.0618],
  Jubail: [27.0174, 49.6225],
  "Al-Qatif": [26.5196, 50.0115],
  Sakaka: [29.9697, 40.2064],
  Arar: [30.9753, 41.0381],
  Hail: [27.5114, 41.7208],
};

const categoryFor = {
  Residential: "VILLA",
  Commercial: "COMMERCIAL",
  Industrial: "INDUSTRIAL",
  Land: "LAND",
  Beach: "VILLA",
  Others: "RESIDENTIAL",
};

function row(id, title, city, district, type, price, beds, baths, parking, year, coveredArea) {
  const [lat, lng] = coords[city];
  const [agent, fal] = advisors[id % advisors.length];
  return {
    id,
    title,
    city,
    district,
    type,
    price,
    beds,
    baths,
    parking,
    year,
    coveredArea,
    landArea: type === "Land" ? coveredArea : Math.round(coveredArea * 1.4),
    lat: lat + (id % 5) * 0.01,
    lng: lng + (id % 4) * 0.01,
    agent,
    fal,
    image: images[(id - 101) % images.length],
  };
}

const rows = [
  row(101, "Family Villa — Al Yasmin", "Riyadh", "Al Yasmin", "Residential", 2850000, 5, 4, 2, 2021, 380),
  row(102, "Apartment — Al Malqa", "Riyadh", "Al Malqa", "Residential", 1450000, 3, 2, 1, 2022, 165),
  row(103, "Showroom — Olaya", "Riyadh", "Olaya", "Commercial", 6200000, 0, 2, 6, 2018, 540),
  row(104, "Residential Plot — Al Narjis", "Riyadh", "Al Narjis", "Land", 980000, 0, 0, 0, 2024, 750),
  row(105, "Corniche Apartment — Al Hamra", "Jeddah", "Al Hamra", "Residential", 2100000, 3, 3, 1, 2020, 190),
  row(106, "Beach Villa — Obhur", "Jeddah", "Obhur", "Beach", 5400000, 6, 5, 3, 2019, 480),
  row(107, "Office Floor — Al Balad", "Jeddah", "Al Balad", "Commercial", 3900000, 0, 2, 4, 2016, 320),
  row(108, "Serviced Apartment — Ajyad", "Mecca", "Ajyad", "Residential", 2200000, 2, 2, 1, 2023, 110),
  row(109, "Hotel Apartment — Aziziyah", "Mecca", "Aziziyah", "Others", 1750000, 1, 1, 1, 2021, 70),
  row(110, "Villa near the Prophet's Mosque", "Medina", "Central", "Residential", 3100000, 5, 4, 2, 2019, 360),
  row(111, "Apartment — Al Faisaliyah", "Dammam", "Al Faisaliyah", "Residential", 890000, 3, 2, 1, 2022, 150),
  row(112, "Warehouse — Second Industrial", "Dammam", "Industrial", "Industrial", 4500000, 0, 1, 8, 2015, 1200),
  row(113, "Seafront Apartment — Corniche", "Khobar", "Corniche", "Beach", 1680000, 2, 2, 1, 2020, 140),
  row(114, "Compound Villa — Dana", "Dhahran", "Dana", "Residential", 2650000, 4, 4, 2, 2018, 310),
  row(115, "Palm Farm Estate", "Al-Ahsa", "Al Hofuf", "Land", 1300000, 0, 0, 0, 2024, 2000),
  row(116, "Mountain Villa — Al Shifa", "Taif", "Al Shifa", "Residential", 1950000, 4, 3, 2, 2017, 280),
  row(117, "Family House — Al Iskan", "Buraidah", "Al Iskan", "Residential", 760000, 4, 3, 2, 2021, 240),
  row(118, "Villa — Al Muruj", "Tabuk", "Al Muruj", "Residential", 920000, 4, 3, 1, 2020, 260),
  row(119, "Highland Apartment", "Abha", "Al Manhal", "Residential", 680000, 3, 2, 1, 2022, 140),
  row(120, "Duplex — Al Wessam", "Khamis Mushait", "Al Wessam", "Residential", 740000, 4, 3, 1, 2019, 210),
  row(121, "Courtyard House", "Najran", "Al Fahd", "Residential", 810000, 5, 3, 2, 2018, 300),
  row(122, "Red Sea Chalet", "Jizan", "Corniche", "Beach", 1250000, 3, 2, 1, 2021, 180),
  row(123, "Industrial Unit — Light Industry", "Yanbu", "Industrial", "Industrial", 2800000, 0, 1, 4, 2016, 900),
  row(124, "Staff Housing Block", "Jubail", "Fanateer", "Others", 2400000, 8, 4, 4, 2014, 620),
  row(125, "Waterfront Flat", "Al-Qatif", "Al Shati", "Residential", 640000, 2, 2, 1, 2023, 120),
  row(126, "North Villa", "Sakaka", "Al Matar", "Residential", 590000, 4, 3, 1, 2020, 230),
  row(127, "Border City House", "Arar", "Al Mansuriyah", "Residential", 520000, 3, 2, 1, 2019, 200),
  row(128, "Hail Family Villa", "Hail", "Al Aziziyah", "Residential", 870000, 5, 4, 2, 2021, 340),
];

export const properties = rows.map((item) => ({
  ...item,
  status: "For Sale",
  category: categoryFor[item.type] || "RESIDENTIAL",
  condition: item.year >= 2020 ? "New" : "Old",
  facing: "North",
  journey: "citizens",
  selling: "Immediately",
  state: item.city,
  country: "Saudi Arabia",
  priceLabel: `SAR ${item.price.toLocaleString("en-US")}`,
  image: photo(item.image),
  location: `${item.district}, ${item.city}, Saudi Arabia`,
}));

export function filterProperties(items, { search = "", location = "", type = "" } = {}) {
  const query = search.trim().toLowerCase();
  return items.filter((item) => {
    if (location && item.city !== location) return false;
    if (type && item.type !== type) return false;
    if (!query) return true;
    const haystack = [item.title, item.location, item.city, item.district, item.type, item.category]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });
}
