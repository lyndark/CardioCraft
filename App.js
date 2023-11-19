import React, { useState } from "react";
import { StyleSheet, View, StatusBar, Text, ScrollView } from "react-native";
import exercises from "./src/Moc";
import TrainingList from "./src/Components/TrainingList";
import TrainingCard from "./src/Components/TrainingCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const [selectedIndex, setIndex] = useState();

  const renderComponent = () => {
    if (selectedIndex && selectedIndex >= 0) {
      const exercise = exercises[selectedIndex];
      if (exercise) return <TrainingCard exercises={exercise} />;

      return <>Produto não encontrado!</>;
    }
    return <TrainingList exercises={exercises} />;
  };

  return (
    <View>
      <View style={styles.menu}>
        <MaterialCommunityIcons name="weight-lifter" size={32} color="white" />
        <Text style={styles.menuText}>CardioCraft</Text>
      </View>

      <View>
        <Text style={styles.h1}>Meta da Semana</Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={styles.goalOfTheWeek}>Dom</Text>
          <Text style={styles.goalOfTheWeek}>Seg</Text>
          <Text style={styles.goalOfTheWeek}>Ter</Text>
          <Text style={styles.goalOfTheWeek}>Qua</Text>
          <Text style={styles.goalOfTheWeek}>Qui</Text>
          <Text style={styles.goalOfTheWeek}>Sex</Text>
          <Text style={styles.goalOfTheWeek}>Sáb</Text>
        </View>
      </View>

      <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Text style={styles.h1}>Planos de treinos</Text>
        <View style={styles.container}>
          {renderComponent()}
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    backgroundColor: "#000",
    padding: 15,
    justifyContent: "space-between",
  },
  goalOfTheWeek: {
    fontSize: 10,
    textTransform: "uppercase",
    backgroundColor: "#FCFCFC",
    padding: 15,
    margin: 5,
    borderRadius: 100,
    shadowColor: "#817979",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 5,
  },
  h1: {
    textTransform: "uppercase",
    fontSize: 16,
    marginTop: 50,
    paddingLeft: 25,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  menuText: {
    fontSize: 30,
    textTransform: "uppercase",
    textAlign: "center",
    color: "white",
  },
});
