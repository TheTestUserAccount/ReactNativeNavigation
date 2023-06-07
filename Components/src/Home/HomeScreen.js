import React from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import Style from "./HomeStyle";
function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to Home Screen</Text>

      <Button
        style={Style.button}
        onPress={() => AgoBack()}
        title="Detail Screen"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
        <Text style={Style.button}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

export function AgoBack() {
  return console.log("----Logging----");
}

export default HomeScreen;
