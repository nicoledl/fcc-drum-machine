// Archivo store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Definir el estado inicial
const initialState = {
  isTurnedOn: true,
  bank: 1,
  activeElement: "",
  volume: 1.0,
};

// Crear un slice (reducer + acciones) utilizando createSlice
const machineStatusSlice = createSlice({
  name: "machineStatus",
  initialState,
  reducers: {
    setIsTurnedOn: (state, action) => {
      state.isTurnedOn = action.payload;
    },
    updateBank: (state, action) => {
      state.bank = action.payload;
    },
    currentElement: (state, action) => {
      state.activeElement = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
  },
});

// Obtener el reducer generado automáticamente por createSlice
const machineStatusReducer = machineStatusSlice.reducer;

// Obtener las acciones generadas automáticamente por createSlice
const { setIsTurnedOn, updateBank, currentElement, setVolume } =
  machineStatusSlice.actions;

// Crear la store con configureStore
const store = configureStore({
  reducer: machineStatusReducer,
});

export { setIsTurnedOn, updateBank, currentElement, setVolume, store };
