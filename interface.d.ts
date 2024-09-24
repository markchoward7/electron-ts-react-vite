import { API } from "./backend/entrypoint.js";

declare global {
  interface Window {
    electronAPI: API;
  }
}
