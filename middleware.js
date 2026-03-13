import { NextResponse } from 'next/server';

// Define routes that require authentication
const protectedRoutes = ['/dashboard', '/pets', '/bookings', '/profile'];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if route is protected
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    // Note: We can't access localStorage in middleware,
    // but this is here for future enhancement with Auth header checking
    // For now, the client-side AuthContext handles redirection
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
