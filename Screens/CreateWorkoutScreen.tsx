import React, { useState } from "react";
import {
  ScrollView,
  
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  
} from "react-native";
import ExerciseCard from "../components/ExerciseCard";
import AddExerciseModal from "../components/AddExerciseModal";
import Icon from "react-native-vector-icons/Entypo";
import colors from "../config/colors";
import { ExerciseObject } from "../types";

export default function CreateWorkoutScreen() {
  const [exerciseList, setExerciseList] = useState<ExerciseObject[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function openAddExerciseModal() {
    setModalIsVisible(true);
  }
  function closeAddExerciseModal() {
    setModalIsVisible(false);
  }
  function addExerciseHandler(newExercise: ExerciseObject) {
    setExerciseList((currentExerciseList) => [
      ...currentExerciseList,
      newExercise,
    ]);
    setModalIsVisible(false);
  }

  return (
    <View style={styles.workoutContainer}>
      <ScrollView style={styles.scrollView}>
        <ExerciseCard exerciseList={exerciseList} />
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={openAddExerciseModal}
      >
        <Icon name="plus" size={36} color={colors.icons} />
      </TouchableOpacity>
      <AddExerciseModal
        isVisible={modalIsVisible}
        onAddExercise={addExerciseHandler}
        onCancel={closeAddExerciseModal}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Create" onPress={() => {""}} />
        </View>
        <View style={styles.button}>
          <Button title="Cancel" onPress={() => {""}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 8,
    marginTop: 16,
    width: "30%",
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  floatingButton: {
    alignItems: "center",
    backgroundColor: colors.iconButton,
    borderRadius: 12,
    bottom: 80,
    elevation: 1,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    right: 30,
    width: 50,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  workoutContainer: {
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    padding: 20,
  },
});
