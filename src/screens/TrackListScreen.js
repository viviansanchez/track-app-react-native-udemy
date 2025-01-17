import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 40 }}>TrackListScreen</Text>
      <Button title="Go to Track Detail" onPress={() => navigation.navigate("TrackDetail")} />
    </>
  );
};

const style = StyleSheet.create({});

export default TrackListScreen;
