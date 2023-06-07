import React from "react";
import { View, Button, Text } from "react-native";

function DetailScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to Details Screen</Text>

      <Button onPress={() => navigation.navigate("Home")} title="Home Screen" />
    </View>
  );
}

export default DetailScreen;
