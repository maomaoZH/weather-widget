import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://api.openweathermap.org",
});

export default apiClient;
