// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./utils/server-user/server-user";

export const middleware = async (req: NextRequest) => {
  const restrictedRoutes = ["/new-course", "/gestion-cours"];
  const { pathname } = req.nextUrl;
  if (restrictedRoutes.includes(pathname)) {
    try {
      // Fetch user data using the function
      const userData = await getCurrentUser(req);
      console.log("userData:", userData);

      // Check if user is authorized based on role
      if (!userData || !userData.role) {
        return NextResponse.redirect(new URL("/", req.url));
      }

      // Add additional role-based authorization logic if needed
      if (userData.role !== "ADMIN" && userData.role !== "TEACHER") {
        return NextResponse.redirect(new URL("/", req.url));
      }

      return NextResponse.next();
    } catch (error) {
      console.error("Error checking user roles:", error);
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next|_next/static|_next/image|favicon.ico|assets\\/api).*)",
  ],
};
