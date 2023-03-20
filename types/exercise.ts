export type ExerciseObject = {
  name: string;
  sets: ExerciseSets[];
};

export type ExerciseSets = {
  weight: string;
  reps: string;
};

export type ExerciseCardProps = {
  exerciseList: ExerciseObject[];
};
