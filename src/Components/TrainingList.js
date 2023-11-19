import React from "react";
import { View, StyleSheet } from "react-native";
import TrainingCards from "./TrainingCard";

const TrainingList = (props) => {
  const renderTrainings = () => {
    return props.exercises.map((exercise) => {
      return (
        <TrainingCards
          id={`card-exercise-${exercise.id}`}
          title={exercise.title}
          subtitle={exercise.subtitle}
          image={exercise.image}
          description={exercise.description}
          training={exercise.training}
          comments={exercise.comments}
          trainingDescription={exercise.trainingDescription}
        />
      );
    });
  };

  return <View style={styles.cardList}>{renderTrainings()}</View>;
};

export default TrainingList;

const styles = StyleSheet.create({
  cardList: {
    flexDirection: "column",
    gap: 30,
  },
});
