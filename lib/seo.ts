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
