import axios from "axios";
import { url } from "../api/api";

export const fetchDummyData = async (timeRange) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data, "data");
  
      if (timeRange === "1 Day") return data["1day"];
      if (timeRange === "1 Week") return data["1week"];
      if (timeRange === "1 Month") return data["1month"];
      if (timeRange === "1 Year") return data["1year"];
      return data["1week"];
    } catch (error) {
      console.error("Error fetching data:", error);
      return {};
    }
  };