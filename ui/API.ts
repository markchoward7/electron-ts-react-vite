type API = typeof window.electronAPI;

export const getThings: API["getThings"] = async () => {
  const response = await window.electronAPI.getThings();
  return response;
};

export const getThingsBasedOnThings: API["getThingsBasedOnThings"] = async (
  payload
) => {
  const response = await window.electronAPI.getThingsBasedOnThings(payload);
  return response;
};
