import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/3.0/onecall?",
});

export default apiInstance;
