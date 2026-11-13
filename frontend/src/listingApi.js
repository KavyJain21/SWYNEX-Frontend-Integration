
import axios from "axios";

const API_URL = "http://localhost:5000/api/listings";

export const getAllListings = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching listings:", error);
    throw error;
  }
};
