import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen({ navigation }) {
  const [message, setMessage] = React.useState(null);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#f0f0f0",
      },
      headerRight: () => (
        <AntDesign
          style={styles.navButton}
          name="arrowright"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Second", { message: message })}
        />
      ),
    });
  }, [message]);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setMessage(text)}
        value={message}
        placeholder="Type message here"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  navButton: {
    marginRight: 10,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
    width: 200,
  },
});
