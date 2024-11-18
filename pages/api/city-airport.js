import apiAmdus from "@/utils/apiUtil";

export default async function handler(req, res) {
  try {
    const response = await apiAmdus(
      "/v1/reference-data/locations",
      "GET",
      req.query
    );
    res.status(200).json(response);
  } catch (error) {
    console.error(error.data);
    res.status(500).json({ error: "Failed to call Amadeus API" });
  }
}
