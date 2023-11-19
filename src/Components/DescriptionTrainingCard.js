import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const DescriptionTrainingCard = ({
  modalVisible,
  setModalVisible,
  training,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <View style={styles.containerCard}>
                <Image
                  style={styles.imageConfig}
                  source={{ uri: training.image }}
                />
                <AntDesign
                  name="hearto"
                  size={20}
                  color="black"
                  marginLeft={300}
                  marginTop={10}
                />
                <View styles={styles.menu}>
                  <Text style={styles.h1Config}>{training.title} </Text>
                </View>
                <Text style={styles.description}>{training.description}</Text>

                <View>
                  <Text style={styles.h1Config}>
                    Semana de Treino (Exemplo)
                  </Text>
                  {training.training.map((x) => {
                    return (
                      <>
                        <Text style={styles.h2Config}>{x.title}</Text>
                        <Text style={styles.h3Config}>{x.description}</Text>
                      </>
                    );
                  })}

                  <View style={{ paddingLeft: "20", paddingBottom: "20" }}>
                    <Text style={styles.h1Config}>O que estão dizendo</Text>
                  </View>

                  <View>
                    {training.comments.map((x) => {
                      return (
                        <>
                          <View
                            style={{
                              flexDirection: "row",
                            }}
                          >
                            <View style={styles.imageComment}>
                              <Image
                                style={styles.imageComment}
                                source={{ uri: x.image }}
                              />
                            </View>
                            <View>
                              <Text style={styles.comment}>
                                {x.name},{" "}
                                <Text style={styles.h2Config}>{x.age}</Text>
                              </Text>
                              <Text style={styles.commentConfig}>
                                {x.comment}
                              </Text>
                            </View>
                          </View>
                        </>
                      );
                    })}
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.h1Config}>
                  {training.trainingDescription}
                </Text>
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Voltar</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 200,
  },
  modalView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#000",
  },
  textStyle: {
    textTransform: "uppercase",
    color: "white",
    backgroundColor: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    flexDirection: "row",
    marginBottom: 15,
    textAlign: "center",
  },
  h1Config: {
    textTransform: "uppercase",
    fontSize: 16,
    marginTop: 20,
    paddingLeft: 30,
    fontWeight: "bold",
  },
  h2Config: {
    textTransform: "uppercase",
    fontSize: 14,
    marginTop: 20,
    paddingLeft: 30,
    fontWeight: "bold",
  },
  h3Config: {
    color: "#404040",
    fontSize: 12,
    paddingLeft: 30,
    marginTop: 5,
    padding: 5,
    maxWidth: 260,
  },
  description: {
    color: "#404040",
    fontSize: 14,
    marginTop: 10,
    paddingLeft: 30,
    maxWidth: 300,
  },
  imageConfig: {
    width: 450,
    height: 200,
    borderRadius: 4,
    objectFit: "cover",
  },
  comment: {
    textTransform: "uppercase",
    fontSize: 14,
    marginTop: 30,
    paddingLeft: 30,
    fontWeight: "bold",
  },
  commentConfig: {
    color: "#404040",
    fontSize: 10,
    paddingLeft: 30,
    marginTop: 5,
    padding: 5,
    maxWidth: 270,
  },
  imageComment: {
    width: 70,
    height: 70,
    borderRadius: 200,
    marginTop: 15,
  },
});

export default DescriptionTrainingCard;
