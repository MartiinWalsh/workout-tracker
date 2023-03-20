import {
  Modal,
  View,
  StyleSheet,
  Button,
  TextInput,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { ExerciseObject } from "../types";

export type AddExerciseModalProps = {
  isVisible: boolean;
  onCancel: () => void;
  onAddExercise: (newExercise: ExerciseObject) => void;
};

function AddExerciseModal({
  isVisible,
  onCancel,
  onAddExercise,
}: AddExerciseModalProps) {
  const [exerciseName, setExerciseText] = useState("");
  const [exerciseWeight, setExerciseWeight] = useState("");
  const [exerciseReps, setExerciseReps] = useState("");

  function exerciseTextHandler(exerciseName: string) {
    setExerciseText(exerciseName);
  }

  function addExerciseHandler() {
    const newExercise: ExerciseObject = {
      name: exerciseName,
      sets: [
        {
          weight: exerciseWeight,
          reps: exerciseReps,
        },
      ],
    };
    onAddExercise(newExercise);
    setExerciseText("");
  }

  function closeModal() {
    onCancel();
    setExerciseText("");
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add new exercise.."
          onChangeText={exerciseTextHandler}
          value={exerciseName}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addExerciseHandler}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
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
  },
  inputContainer: {
    alignItems: "center",
    flex: 1,
    marginTop: Platform.OS === "ios" ? 50 : 0,
    padding: 16,
  },
  textInput: {
    borderRadius: 6,
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
});

export default AddExerciseModal;
