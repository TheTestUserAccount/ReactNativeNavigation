import React from "react";
import { View, Button, Text, TextInput } from "react-native";
import Style from "./LoginStyle";

function LoginScreen({ navigation }) {
  const [text, onChangeText] = React.useState("Current State:");
  return (
    <View style={Style.view}>
      <View>
        <Text style={Style.text}>Email / Username</Text>
        <TextInput
          style={Style.button}
          onChangeText={onChangeText}
          value={text}
          placeholder="Text Input for State Change"
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={Style.text}>Email / Username</Text>
        <TextInput
          style={Style.button}
          placeholder="Text Input for State Change"
          keyboardType="numeric"
          secureTextEntry
        />
      </View>

      <View>
        <Button
          style={Style.button}
          onPress={() => navigation.navigate("Home")}
          title="Login"
        />
      </View>
    </View>
  );
}

export default LoginScreen;
