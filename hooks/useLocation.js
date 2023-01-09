import { useEffect, useState } from "react";

import * as Location from "expo-location";

const useLocation = () => {
  try {
    const [location, setLocation] = useState();
    const requestPermissionAndGetLocation = async () => {
      const permission = await Location.requestForegroundPermissionsAsync();
      if (!permission.granted) return;
      else {
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync();
        setLocation({ latitude, longitude });
      }
    };
    useEffect(() => {
      requestPermissionAndGetLocation();
    }, []);
    return location;
  } catch (error) {
    console.log(error);
  }
};
export default useLocation;
