import { API } from "./backend/api.js";

declare global {
  interface Window {
    electronAPI: API;
  }
}
