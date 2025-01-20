import React from "react";
import { Text, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  //temporary array:
  let points = [];

  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 37.33233 + i * 0.01,
      longitude: -122.03121 + i * 0.01,
    });
  }

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.33233,
          longitude: -122.03121,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={points} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
