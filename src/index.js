import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import * as Location from "expo-location";

const Weather = () => {
  const [location, setLocation] = useState();
  const requestPermissionAndGetLocation = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    if (!permission.granted) return;
    else {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      setLocation({ latitude, longitude });
    }
  };
  useEffect(() => {
    requestPermissionAndGetLocation();
  }, []);

  return (
    <View>
      <Text>{location.latitude}</Text>
      <Text>{location.longitude}</Text>
    </View>
  );
};

export default Weather;
