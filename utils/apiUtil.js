import axios from "axios";
import { amadeusClientId, amadeusClientSecret } from "@/constant/apiConstant";

export default async function apiAmdus(
  endpoint,
  method = "GET",
  queryParams = null,
  data = null
) {
  try {
    // Get an access token from Amadeus
    const tokenResponse = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: amadeusClientId,
        client_secret: amadeusClientSecret,
      })
    );
    const accessToken = tokenResponse.data.access_token;

    // Make the API request to Amadeus
    const response = await axios({
      method,
      url: `https://test.api.amadeus.com${endpoint}`,
      params: queryParams,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data,
    });

    return response.data;
  } catch (error) {
    console.error("Error calling Amadeus API:", JSON.stringify(error));
    throw error;
  }
}
