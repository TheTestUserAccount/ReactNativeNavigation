import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/Home/HomeScreen";
import DetailScreen from "./src/Details/DetailsScreen";
import LoginScreen from "./src/Login/LoginScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator();

const MyTabs = () => {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="Login" component={LoginScreen} /> */}
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Detail" component={DetailScreen} />
    </Drawer.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={MyTabs}
          gestureEnabled={false}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
