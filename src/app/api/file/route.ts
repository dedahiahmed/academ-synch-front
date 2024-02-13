export async function POST(request: Request): Promise<Response> {
  try {
    const url = process.env.FILE || ""; // Update the environment variable name
    const requestData = await request.formData(); // Use formData() for file uploads

    const response = await fetch(url, {
      method: "POST",
      body: requestData, // Pass the form data directly
    });

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
    console.log("Error in POST function:", error);
    return new Response(JSON.stringify({ error: "An error occurred." }), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
