import { View, StyleSheet, Text } from "react-native";

interface StatusProps {
  isConnected: boolean;
}

const Status = ({ isConnected }: StatusProps) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.indicator,
          isConnected ? styles.connected : styles.disconnected,
        ]}
      />
      <Text style={styles.text}>
        {isConnected ? "Connected" : "Disconnected"}
      </Text>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
  },
  connected: {
    backgroundColor: "green",
  },
  disconnected: {
    backgroundColor: "red",
  },
  text: {
    fontSize: 20,
  },
});
