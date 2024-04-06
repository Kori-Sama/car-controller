import { NativeModules } from "react-native";

const { TcpClientModule } = NativeModules;

interface TcpClient {
  connect: (host: string, port: string) => void;
  send: (msg: "up" | "down" | "left" | "right") => void;
}

export default TcpClientModule as TcpClient;
