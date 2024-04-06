export const createConnect = (
  host: string,
  port: number,
  onConnect?: () => void,
  onClose?: () => void,
  onError?: (error: Error) => void
) => {};

export type Direction = "up" | "down" | "left" | "right";

export const send = (data: Direction) => {
  // console.log("Sending: " + data);
  // if (!client) return;
  // switch (data) {
  //   case "up":
  //     client.write("CTRL F");
  //     break;
  //   case "down":
  //     client.write("CTRL B");
  //     break;
  //   case "left":
  //     client.write("CTRL L");
  //     break;
  //   case "right":
  //     client.write("CTRL R");
  //     break;
  // }
};
