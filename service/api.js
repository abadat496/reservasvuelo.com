import { apiUrl } from "../constant/commonConstants";

const httpOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getOriginsAndDestinations = async (origin) => {
  try {
    const url = `${apiUrl}/city-airport?subType=AIRPORT&keyword=${origin}`;
    const response = await fetch(url, httpOptions);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getFlightDetails = async (data, airline) => {
  try {
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    let queryParams = `?originLocationCode=${
      data.origin
    }&destinationLocationCode=${
      data.destination
    }&departureDate=${encodeURIComponent(data.departDate)}&adults=${
      data.adults
    }&children=${data.children}&infants=${data.infants}`;

    if (data.returnDate) {
      queryParams += `&returnDate=${encodeURIComponent(data.returnDate)}`;
    }

    if (airline && airline.iataCode) {
      queryParams += `&includedAirlineCodes=${airline.iataCode}`;
    }

    const url = `${apiUrl}/flight-offers${queryParams}`;

    const response = await fetch(url, httpOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    throw error;
  }
};

export const getAirlines = async () => {
  try {
    const url = `${apiUrl}/airlines?airlineCodes=AA,JBU,VOI,WJA,CMP`;
    const response = await fetch(url, httpOptions);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const sendMail = async (flightBookingDetails) => {
  try {
    const url = `${apiUrl}/send-mail`;
    const response = await fetch(url, {
      method: "POST",
      headers: httpOptions.headers,
      body: JSON.stringify(flightBookingDetails),
    });
    return response;
  } catch (error) {
    console.error("Error in sendMail:", error);
    throw error;
  }
};
