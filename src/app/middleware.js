import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("repe_token")

  // Redirect if no token
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Protect these routes
export const config = {
  matcher: ["/kalender/:path*"]
};
