import React from "react";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen
          name="Login"
          options={{ title: "Login" }}
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          options={{ title: "Signup" }}
          component={Signup}
        />
        
        <Stack.Screen
          name="Home"
          options={{ title: "Home" }}
          component={HomeScreen}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
