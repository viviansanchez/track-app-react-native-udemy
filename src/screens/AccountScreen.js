import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <>
      <Text style={{ fontSize: 40 }}>AccountScreen</Text>
      <Spacer>
        <Button title="Signout" onPress={signout} />
      </Spacer>
    </>
  );
};

const style = StyleSheet.create({});

export default AccountScreen;
