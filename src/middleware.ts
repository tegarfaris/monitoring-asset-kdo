import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookies = request.cookies;
  const destination = request.nextUrl.pathname;

  let role = null;

  const dataRegisterCookie = cookies.get("dataRegister");
  if (dataRegisterCookie) {
    const credential = JSON.parse(dataRegisterCookie.value);
    role = credential.role;
  }

  if (destination.startsWith("/dashboard/asset-kdo") && role === "admin") {
    return NextResponse.next();
  } else if (destination.startsWith("/auth") && role === "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  } else if (
    !dataRegisterCookie &&
    destination.startsWith("/dashboard/asset-kdo")
  ) {
    return NextResponse.redirect(new URL("/auth/register", request.url));
  } else if (!dataRegisterCookie && destination.startsWith("/auth")) {
    // Default behavior if no conditions match
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/auth/:path*", "/dashboard/:path*"],
};
