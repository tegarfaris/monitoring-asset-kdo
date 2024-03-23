import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookies = request.cookies;
  const destination = request.nextUrl.pathname;

  let role = null;

  const dataRegisterCookie = cookies.get("dataRegister");

  if (dataRegisterCookie) {
    const credential = JSON.parse(dataRegisterCookie.value);
    role = credential.role;

    if (destination.startsWith("/dashboard/admin/asset-kdo") && role === "admin") {
      return NextResponse.next();
    }
    if (destination.startsWith("/dashboard/employee/form-pengajuan") && role === "employee") {
      return NextResponse.next();
    } else if (destination.startsWith("/auth") && role === "admin") {
      return NextResponse.redirect(new URL("/dashboard/admin/asset-kdo", request.url));
    } else if (
      !dataRegisterCookie &&
      destination.startsWith("/dashboard/admin/asset-kdo")
    ) {
      return NextResponse.redirect(new URL("/auth/register", request.url));
    } else if (
      !dataRegisterCookie &&
      destination.startsWith("/auth/register")
    ) {
      // Default behavior if no conditions match
      return NextResponse.next();
    }
  } else {
    if (destination.startsWith("/auth/register")) {
      return NextResponse.next();
    } else if (destination.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/auth/register", request.url));
    }
    return NextResponse.redirect(new URL("/auth/register", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/auth/:path*", "/dashboard/:path*"],
};
