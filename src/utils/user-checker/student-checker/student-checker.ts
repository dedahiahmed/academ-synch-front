import { accessToken } from "../../token/token";
import { getCurrentUser } from "../../user-me/userme";

export const isStudent = async () => {
  try {
    const responseTeacher = await getCurrentUser();
    return responseTeacher.role === "STUDENT";
  } catch (error) {
    console.error("Error fetching user data:", error);
    return false;
  }
};
