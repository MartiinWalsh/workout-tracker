import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ExerciseCardProps } from "../types";

function ExerciseCard({ exerciseList }: ExerciseCardProps) {
  return (
    <>
      {exerciseList.map((exercise, index) => (
        <View style={styles.exerciseContainer} key={index}>
          <Text style={styles.exerciseText}>{exercise.name}</Text>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    borderRadius: 6,
    borderWidth: 1,
    flex: 1,
    marginBottom: 20,
    padding: 20,
  },
  exerciseText: {
    fontSize: 18,
  },
});

export default ExerciseCard;
