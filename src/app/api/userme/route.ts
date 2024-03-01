import { accessToken } from "@/utils/token/token";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";

const secretKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcwNzg2MjU4NCwiaWF0IjoxNzA3ODYyNTg0fQ.5Ab6-iu6ds1--VS6JG5aLkpKSJggIL6f8c-nam79pPM";

export async function GET(request: Request): Promise<Response> {
  try {
    const url = process.env.USERME || "";

    // Retrieve the encrypted token from cookies
    const encryptedToken = Cookies.get("accessToken");

    // Decrypt the token
    let token = "";
    if (encryptedToken) {
      try {
        const bytes = CryptoJS.AES.decrypt(encryptedToken, secretKey);
        token = bytes.toString(CryptoJS.enc.Utf8);
      } catch (error) {
        console.error("Error decrypting token:", error);
      }
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("hedader", JSON.stringify(accessToken));
    // Parse the JSON body if it's present
    let responseBody;
    try {
      responseBody = await response.json();
    } catch (error) {
      // Log and handle any parsing errors
      console.log("Error parsing response JSON:", error);
    }

    // Log the response details
    const logResponse = {
      status: response.status,
      statusText: response.statusText,
      headers: Array.from(response.headers.entries()).reduce(
        (acc: Record<string, string>, [key, value]) => {
          acc[key] = value;
          return acc;
        },
        {}
      ),
      body: responseBody,
    };
    console.log(JSON.stringify(logResponse, null, 2));

    return new Response(JSON.stringify(responseBody), {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  } catch (error) {
    // Log and handle any other errors
    console.log("Error in GET function:", error);
    return new Response(JSON.stringify({ error: "An error occurred." }), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
