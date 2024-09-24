import { ipcMain, IpcMainInvokeEvent } from "electron";

const getThings = async () => {
  return { result: "output" };
};

const getThingsBasedOnThings = async (payload: { input: string }) => {
  return { result: payload.input };
};

const APIImplementation = {
  getThings,
  getThingsBasedOnThings,
};
export type API = typeof APIImplementation;

const registerHandlers = () => {
  for (const key in APIImplementation) {
    ipcMain.handle(key, (_event: IpcMainInvokeEvent, ...args: any[]) =>
      APIImplementation[key](...args)
    );
  }
};

export default registerHandlers;
