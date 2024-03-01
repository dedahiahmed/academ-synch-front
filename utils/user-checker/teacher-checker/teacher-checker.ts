import { accessToken } from "../../token/token";
import { getCurrentUser } from "../../user-me/userme";

export const isTeacher = async () => {
  try {
    const responseTeacher = await getCurrentUser(accessToken);
    return responseTeacher.role === "TEACHER";
  } catch (error) {
    console.error("Error fetching user data:", error);
    return false;
  }
};
