export type ExportCountry = {
  name: string;
  region: string;
  coordinates: [number, number];
};

export const exportCountries: ExportCountry[] = [
  { name: "UAE",          region: "Middle East",     coordinates: [54.37, 24.47] },
  { name: "Saudi Arabia", region: "Middle East",     coordinates: [45.07, 23.88] },
  { name: "Oman",         region: "Middle East",     coordinates: [57.55, 21.51] },
  { name: "Qatar",        region: "Middle East",     coordinates: [51.18, 25.35] },
  { name: "Sri Lanka",    region: "South Asia",      coordinates: [80.77, 7.87]  },
  { name: "Bangladesh",   region: "South Asia",      coordinates: [90.35, 23.68] },
  { name: "Malaysia",     region: "Southeast Asia",  coordinates: [109.69, 4.21] },
  { name: "Singapore",    region: "Southeast Asia",  coordinates: [103.81, 1.35] },
  { name: "Indonesia",    region: "Southeast Asia",  coordinates: [113.92, -0.78]},
  { name: "Djibouti",     region: "East Africa",     coordinates: [42.59, 11.82] },
  { name: "Australia",    region: "Oceania",         coordinates: [133.77, -25.27]},
  { name: "UK",           region: "Europe",          coordinates: [-3.43, 55.37] },
];