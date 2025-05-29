import axios from "axios";
import type { SearchType } from "../types";

export default function useWeather() {
  const fetchWeather = async (search: SearchType) => {
    const appId = "e1cf05c60d0e604c99d37ca4960e8881";

    try {
      const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;

      const { data } = await axios(geoURL);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchWeather,
  };
}
