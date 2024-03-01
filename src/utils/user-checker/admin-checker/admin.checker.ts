import { accessToken } from "../../token/token";
import { getCurrentUser } from "../../user-me/userme";

export const isAdmin = async () => {
  try {
    const responseTeacher = await getCurrentUser();
    return responseTeacher.role === "ADMIN";
  } catch (error) {
    console.error("Error fetching user data:", error);
    return false;
  }
};
