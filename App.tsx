import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, NewWorkoutScreen, AddWorkoutScreen } from "./Screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Workout Tracker" }}
        />
        <Stack.Screen
          name="NewWorkoutScreen"
          component={NewWorkoutScreen}
          options={{ title: "New Workout" }}
        />
        <Stack.Screen
          name="AddWorkoutScreen"
          component={AddWorkoutScreen}
          options={{ title: "Add Workout" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
