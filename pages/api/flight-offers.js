import apiAmdus from "@/utils/apiUtil";

export default async function handler(req, res) {
  try {
    const response = await apiAmdus(
      "/v2/shopping/flight-offers",
      "GET",
      req.query
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Failed to call Amadeus API" });
  }
}
