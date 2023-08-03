// Function to save data to the local storage
export const saveDataToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Function to retrieve data from the local storage
export const getDataFromStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

// Function to get all keys from the local storage
export const getAllKeysFromStorage = () => {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }
  return keys;
};