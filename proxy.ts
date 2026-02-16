import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getLocationByHost, SERVICE_ORDER } from "@/lib/restoration-data";

function extractHost(request: NextRequest) {
  return request.headers.get("x-forwarded-host") || request.headers.get("host") || "";
}

export function proxy(request: NextRequest) {
  const host = extractHost(request);
  const location = getLocationByHost(host);

  if (!location) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${location.stateSlug}/${location.citySlug}/water-damage`;
    return NextResponse.rewrite(url);
  }

  const servicePath = pathname.replace(/^\//, "");
  const isTopLevelService = SERVICE_ORDER.some((service) => service === servicePath);

  if (isTopLevelService) {
    const url = request.nextUrl.clone();
    url.pathname = `/${location.stateSlug}/${location.citySlug}/${servicePath}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
