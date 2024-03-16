import { View, Text, Button, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import Connect from "../components/connect";
import Status from "../components/status";
import Controller from "../components/controller";

const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const updateStatus = (status: boolean) => {
    setIsConnected(status);
  };

  const showConnect = () => {
    setModalVisible(true);
  };

  const hideConnect = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Status isConnected={isConnected} />
      <Controller />
      <Button title="Connect" onPress={showConnect} />
      <Connect
        visible={modalVisible}
        hide={hideConnect}
        updateStatus={updateStatus}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    paddingBottom: 30,
  },
});
