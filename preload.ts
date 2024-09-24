const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getThings: () => ipcRenderer.invoke("getThings"),
  getThingsBasedOnThings: (payload) =>
    ipcRenderer.invoke("getThingsBasedOnThings", payload),
});
