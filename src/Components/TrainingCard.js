import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import DescriptionTrainingCard from "./DescriptionTrainingCard";

const TrainingCard = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return modalVisible ? (
    <DescriptionTrainingCard
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      training={props}
    />
  ) : (
    <View
      onTouchStart={() => setModalVisible(true)}
      onPress={() => setModalVisible(true)}
      style={styles.containerCard}
      key={props.id}
    >
      <View style={styles.headerImage}>
        <Image source={{ uri: props.image }} style={styles.imageConfig} />
        <View style={styles.titleContainer}>
          <Text style={styles.h1Config}>{props.title}</Text>
          <Text style={styles.subtitleConfig}>{props.subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    boxizing: "border-box",
    width: "300px",
    height: "500px",
    maxHeight: "500px",
    objectFit: "cover",
  },
  headerImage: {
    position: "relative",
    borderRadius: 4,
  },
  imageConfig: {
    width: 450,
    height: 200,
    borderRadius: 4,
    objectFit: "cover",
  },
  titleContainer: {
    display: "flex",
    position: "absolute",
    top: 100,
    left: 30,
    right: 0,
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
    padding: 10,
    zIndex: 1,
  },
  h1Config: {
    backgroundColor: "white",
    color: "#111",
    fontFamily: "sans-serif",
    fontSize: 20,
    textTransform: "uppercase",
    fontStyle: "italic",
    padding: 5,
    justifyContent: "left",
    maxWidth: 250,
  },
  subtitleConfig: {
    backgroundColor: "white",
    color: "#2e2e2e",
    fontSize: 12,
    marginTop: 5,
    padding: 5,
    maxWidth: 200,
  },
  /* Outros estilos */
});

export default TrainingCard;
