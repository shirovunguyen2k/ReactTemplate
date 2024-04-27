import { axiosClient } from "../libs/axios";

export const weatherService = {
  async getWeatherData(city: string, units: string) {
    const API_KEY = "3a060ea4d116eb014484713e2d94634e";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    const response = await axiosClient.get(URL);
    return response;
  },
};
