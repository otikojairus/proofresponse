export const SITE_NAME = "RestoXpert Restoration";
export const DEFAULT_SITE_URL = "https://restoxpertrestoration.com";
export const EMERGENCY_PHONE_DISPLAY = "+1 855-318-3325";
export const EMERGENCY_PHONE_E164 = "+18553183325";

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
}

export function absoluteUrl(path: string) {
  return `${getSiteUrl()}${path}`;
}

export function serviceLocationKeyword(serviceName: string, cityName: string) {
  return `${serviceName} ${cityName}`;
}

export function buildSeoTitle(primaryKeyword: string, cityName: string, brand: string) {
  const raw = `${primaryKeyword} ${cityName} | ${brand}`;
  if (raw.length <= 60) {
    return raw;
  }

  const fallback = `${primaryKeyword} | ${brand}`;
  if (fallback.length <= 60) {
    return fallback;
  }

  return `${primaryKeyword.slice(0, 56).trimEnd()}...`;
}

export function buildSeoDescription(keyword: string, cityName: string, phone: string) {
  const base = `${keyword} in ${cityName}. 24/7 local response for homes and businesses. Call ${phone} now for immediate dispatch.`;

  if (base.length <= 160) {
    return base;
  }

  return `${keyword} in ${cityName}. 24/7 emergency service. Call ${phone} now.`;
}
