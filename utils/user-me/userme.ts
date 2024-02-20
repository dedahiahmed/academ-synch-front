export async function getCurrentUser(
  token: string
): Promise<Record<string, any>> {
  try {
    const response = await fetch("/api/userme", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token, // Include the authorization token
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
