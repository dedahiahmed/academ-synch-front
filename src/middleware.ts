// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { isTeacher } from "./utils/user-checker/teacher-checker/teacher-checker";
import { isAdmin } from "./utils/user-checker/admin-checker/admin.checker";

export const middleware = async (req: NextRequest) => {
  const restrictedRoutes = ["/new-course", "/gestion-cours"];
  const { pathname } = req.nextUrl;
  if (restrictedRoutes.includes(pathname)) {
    try {
      const isAuthorized = (await isTeacher()) || (await isAdmin());
      console.log("use_fbubjksd", isAuthorized);
      if (!isAuthorized) {
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
