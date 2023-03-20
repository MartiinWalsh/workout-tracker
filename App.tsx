import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeScreen,
  CreateWorkoutScreen,
  ChooseWorkoutScreen,
} from "./Screens";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Workout Tracker" }}
        />
        <Stack.Screen
          name="CreateWorkoutScreen"
          component={CreateWorkoutScreen}
          options={{ title: "New Workout" }}
        />
        <Stack.Screen
          name="ChooseWorkoutScreen"
          component={ChooseWorkoutScreen}
          options={{ title: "Add Workout" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
