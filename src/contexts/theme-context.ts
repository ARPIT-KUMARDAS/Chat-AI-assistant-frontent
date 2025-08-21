import { createContext } from "react";

export type Theme = "dark" | "light" | "system";

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);
import { StreamChat } from "stream-chat";
import { getUserToken } from "../lib/api";

const apiKey = import.meta.env.VITE_STREAM_API_KEY; // safe for frontend
const client = StreamChat.getInstance(apiKey);

// Example usage:
async function initChat(userId: string) {
  const { token } = await getUserToken(userId);
  await client.connectUser({ id: userId }, token);
}
