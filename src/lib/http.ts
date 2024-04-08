let baseUrl = "";

export const setServer = (ip: string, port: string) => {
  baseUrl = `http://${ip}:${port}`;
};

export type Direction = "up" | "down" | "left" | "right";

export const sendDirection = (direction: Direction) => {
  if (baseUrl === "") {
    return;
  }

  let msg = `CTRL ${direction.charAt(0).toUpperCase()}`;

  fetch(`${baseUrl}/move`, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: msg,
  });
};

export const heartBeat = async () => {
  if (baseUrl === "") {
    return;
  }

  let msg = "";

  try {
    const data = (await Promise.race([
      fetch(`${baseUrl}/heart`, {
        method: "GET",
      }),
      new Promise((resolve, _) => setTimeout(() => resolve(""), 500)),
    ])) as Response;
    msg = await data.text();
  } catch (e) {
    return false;
  }

  if (msg === "heart") {
    return true;
  }

  return false;
};
