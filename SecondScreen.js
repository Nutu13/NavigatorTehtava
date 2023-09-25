import React from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react/cjs/react.development";

export default function SecondScreen({ route, navigation }) {
  useEffect(() => {
    if (route.params?.message) {
      alert(route.params.message);
    }
    BackHandler.addEventListener("hardwareBackPress", () => {
      navigation.navigate("Home");
      return true;
    });
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#f0f0f0",
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Second screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
