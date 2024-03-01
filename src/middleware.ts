import { NextRequest, NextResponse } from "next/server";
import { isTeacher } from "../utils/user-checker/teacher-checker/teacher-checker";
import { isAdmin } from "../utils/user-checker/admin-checker/admin.checker";

type RouteHandler = (req: NextRequest, evt: any) => Promise<NextResponse>;

export default function restrictedAccessMiddleware(handler: RouteHandler) {
  return async (req: NextRequest, evt: any) => {
    const { pathname } = req.nextUrl;

    // Paths that require either teacher or admin access
    const restrictedPaths = ["/new-course", "/gestion-cours"];

    // Check if the requested path requires restricted access
    if (restrictedPaths.includes(pathname)) {
      // Check if the user is a teacher or admin
      if (!(isTeacher || isAdmin)) {
        // User is not authorized, redirect to the front server URL
        const frontServerUrl =
          process.env.FRONT_SERVER_URL || "http://localhost:3000/";
        const response = NextResponse.redirect(frontServerUrl);

        // Apply middleware logic to the redirection response
        return applyMiddleware(response);
      }
    }

    // Allow access to the handler for non-restricted paths or authorized users
    const response = await handler(req, evt);

    // Apply middleware logic to the response
    return applyMiddleware(response);
  };
}

function applyMiddleware(response: NextResponse): NextResponse {
  // Apply any additional middleware logic here if needed
  return response;
}
