import { RAW_LOCATION_ROWS } from "./location-data";
export { SERVICE_ORDER, SERVICES, getServiceBySlug, type ServiceContent, type ServiceSlug } from "./services-data";

export type LocationContent = {
  stateSlug: string;
  stateName: string;
  citySlug: string;
  cityName: string;
  regionName: string;
  countryName: "Canada" | "United States";
  cityHosts: string[];
};

const ACTIVE_LOCATION_LIMIT = 1850;
const PRIORITY_CANADIAN_LOCATIONS = [
  { stateName: "British Columbia", cityName: "VANCOUVER" },
  { stateName: "Ontario", cityName: "TORONTO" },
  { stateName: "Alberta", cityName: "EDMONTON" },
  { stateName: "Ontario", cityName: "MISSISSAUGA" },
  { stateName: "Ontario", cityName: "OTTAWA" },
  { stateName: "Alberta", cityName: "CALGARY" },
  { stateName: "Ontario", cityName: "OAKVILLE" },
  { stateName: "Ontario", cityName: "VAUGHAN" },
] as const;

const REGION_CITY_ROWS = (() => {
  const canadaRows = RAW_LOCATION_ROWS.filter((row) => row.countryName === "Canada");
  const selectedCitiesByState = new Map<string, string[]>();
  const seenPriorityKeys = new Set<string>();

  for (const { stateName, cityName } of PRIORITY_CANADIAN_LOCATIONS) {
    const row = canadaRows.find((candidate) => candidate.stateName === stateName);

    if (!row || !row.cities.includes(cityName)) {
      continue;
    }

    const key = `${stateName}::${cityName}`;
    if (seenPriorityKeys.has(key)) {
      continue;
    }

    seenPriorityKeys.add(key);
    selectedCitiesByState.set(stateName, [...(selectedCitiesByState.get(stateName) ?? []), cityName]);
  }

  let remaining = ACTIVE_LOCATION_LIMIT - seenPriorityKeys.size;

  for (const row of canadaRows) {
    if (remaining <= 0) {
      break;
    }

    const alreadySelected = new Set(selectedCitiesByState.get(row.stateName) ?? []);
    const availableCities = row.cities.filter((city) => !alreadySelected.has(city));

    if (availableCities.length === 0) {
      continue;
    }

    const activeCities = availableCities.slice(0, remaining);
    remaining -= activeCities.length;

    selectedCitiesByState.set(row.stateName, [...alreadySelected, ...activeCities]);
  }

  return canadaRows.flatMap((row) => {
    const cities = selectedCitiesByState.get(row.stateName) ?? [];
    return cities.length > 0 ? [{ ...row, cities }] : [];
  });
})();

function slugifyLocationSegment(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const LOCATION_PAGES: LocationContent[] = (() => {
  const pages: LocationContent[] = [];
  const seen = new Set<string>();

  for (const { countryName, stateName, cities } of REGION_CITY_ROWS) {
    const stateSlug = slugifyLocationSegment(stateName);

    for (const cityName of cities) {
      const citySlug = slugifyLocationSegment(cityName);
      const key = `${stateSlug}::${citySlug}`;

      if (seen.has(key)) {
        continue;
      }

      seen.add(key);
      pages.push({
        stateSlug,
        stateName,
        citySlug,
        cityName,
        regionName: stateName,
        countryName,
        cityHosts: [`${citySlug}.example.com`, `${citySlug}.localhost`],
      });
    }
  }

  return pages;
})();
export function getLocation(state: string, city: string) {
  return (
    LOCATION_PAGES.find(
      (location) => location.stateSlug === state && location.citySlug === city,
    ) ?? null
  );
}

function normalizeHost(host: string) {
  return host.trim().toLowerCase().replace(/:\d+$/, "");
}

export function getLocationByHost(host: string) {
  const normalizedHost = normalizeHost(host);
  return (
    LOCATION_PAGES.find((location) =>
      location.cityHosts.some((cityHost) => normalizeHost(cityHost) === normalizedHost),
    ) ?? null
  );
}

export function getLocationsByState(state: string) {
  return LOCATION_PAGES.filter((location) => location.stateSlug === state);
}

export function getStates() {
  return Array.from(
    new Map(LOCATION_PAGES.map((location) => [location.stateSlug, location.stateName])),
  ).map(([slug, name]) => ({ slug, name }));
}

export function titleCaseFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
