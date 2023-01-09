import { View, Text } from "react-native";
import React from "react";

import useLocation from "../hooks/useLocation";

const Weather = () => {
  const location = useLocation();
  return (
    <View>
      <Text>{location.latitude}</Text>
      <Text>{location.longitude}</Text>
    </View>
  );
};

export default Weather;
