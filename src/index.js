import { View, Text } from "react-native";
import React, { useEffect } from "react";

import useLocation from "../hooks/useLocation";
import { getCurrentWeatherApi } from "../api/getWeatherApi";

const Weather = () => {
  const location = useLocation();
  const getCurrentWeather = async () => {
    const response = await getCurrentWeatherApi(
      location.longitude,
      location.latitude
    );
    console.log(response);
  };
  useEffect(() => {
    getCurrentWeather();
  }, []);
  return (
    <View>
      {/* <Text>{location.latitude}</Text> */}
      <Text>location</Text>
    </View>
  );
};

export default Weather;
