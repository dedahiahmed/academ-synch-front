export async function getCurrentUser(): Promise<Record<string, any>> {
  const accessToken = localStorage.getItem("accessToken");
  console.log("accesToken", accessToken);
  if (!accessToken) {
    throw new Error("Access token not found in local storage");
  }

  try {
    const response = await fetch("/api/userme", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch current user data");
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Error fetching current user:", error);
    throw new Error("An error occurred while fetching current user data");
  }
}
