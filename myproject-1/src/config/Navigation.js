import React from "react";
import { Button } from "react-native";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';
import Classes from "../screens/classes";
import ClassQuestions  from "../screens/questions";
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
          options={({ navigation }) => ({
            title: "Home",
            headerRight: () => (
              <Button title="Logout" onPress={() => navigation.navigate("Login")} />
            ),
          })}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Classes"
          options={{ title: "" }}
          component={Classes}
        />
        <Stack.Screen
          name="Questions"
          options={{ title: "" }}
          component={ClassQuestions }
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
