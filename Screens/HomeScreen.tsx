import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Entypo";
import colors from "../config/colors";

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleNewWorkoutScreen = () => {
    navigation.navigate("CreateWorkoutScreen");
  };

  const handleAddWorkoutScreen = () => {
    navigation.navigate("ChooseWorkoutScreen");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.workoutButtonContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={handleNewWorkoutScreen}
        >
          <Icon name="add-to-list" size={30} color={colors.icons} />
          <Text style={styles.iconText}>Create Workout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={handleAddWorkoutScreen}
        >
          <Icon name="list" size={30} color={colors.icons} />
          <Text style={styles.iconText}>Choose Workout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.screen}>
        <Text style={styles.logText}>Empty Workout</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    padding: 40,
  },
  iconContainer: {
    alignItems: "center",
    marginVertical: 15,
  },
  iconText: {
    fontSize: 17,
    marginBottom: 10,
    marginTop: 10,
  },
  logText: {
    fontSize: 20,
  },
  screen: {
    alignItems: "center",
    flex: 2,
    justifyContent: "center",
  },
  workoutButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
