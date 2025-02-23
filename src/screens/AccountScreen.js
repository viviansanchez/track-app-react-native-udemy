import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 40 }}>AccountScreen</Text>
      <Spacer>
        <Button title="Signout" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({});

export default AccountScreen;
