import apiInstance from ".";

import { openWeathreApiKey } from "../apiKey/apiKey";

export const getCurrentWeatherApi = async (longitude, latitude) => {
  try {
    const response = await apiInstance.get(
      `lat=${latitude}&lon=${longitude}&exclude={part}&appid=${openWeathreApiKey}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
