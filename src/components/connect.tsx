import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Button,
  NativeEventEmitter,
  NativeModules,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface ConnectProps {
  visible: boolean;
  hide: () => void;
  updateStatus: (status: boolean) => void;
}

const windowHeight = Dimensions.get("window").height;

const Connect = ({ visible, hide, updateStatus }: ConnectProps) => {
  const [host, setHost] = useState("127.0.0.1");
  const [port, setPort] = useState("8888");

  const connect = () => {};

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={hide}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={hide} style={styles.backButton}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.modalText}>Connect With Car</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Host"
              onChangeText={(text) => setHost(text)}
              value={host}
            />
            <TextInput
              style={styles.input}
              placeholder="Port"
              onChangeText={(text) => setPort(text)}
              value={port}
            />
            <Button title="Connect" onPress={connect} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Connect;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "100%",
    height: windowHeight * 0.5, // Adjust the height as per your requirement
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    alignItems: "center",
  },
  modalText: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
  },
  form: {
    marginTop: 80,
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  backButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});
