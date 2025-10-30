import ngrok from "@ngrok/ngrok";
import dotenv from "dotenv";
dotenv.config();

export const exposeApp = async (port) => {
  const listener = await ngrok.connect({
    addr: port,
    authtoken: process.env.NGROK_AUTHTOKEN,
  });
  return { url: listener.url() };
};