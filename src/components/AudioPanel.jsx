import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sounds } from "./sounds";
import { currentElement } from "../store";

const AudioPanel = () => {
  const dispatch = useDispatch();
  const bank = useSelector((state) => state.bank);
  const isTurnedOn = useSelector((state) => state.isTurnedOn);

  const playSound = (sound, name) => {
    dispatch(currentElement(name));
    document.getElementById(sound).play();
  };

  const handleKeyUp = (event) => {
    // Obtener la tecla presionada
    const key = event.key.toUpperCase();

    // Buscar el elemento correspondiente en el array de sonidos
    const soundElem = sounds.find((elem) => elem.letter === key);

    // Si se encontró el elemento, activar su botón y reproducir el sonido
    if (soundElem) {
      const soundButton = document.getElementById(soundElem.letter);
      if (soundButton) {
        soundButton.click(); // Simula el clic en el botón para activarlo
      }
    }
  };

  // Agregar el evento de escucha para las teclas cuando se monte el componente
  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []); // El array de dependencias vacío asegura que el evento solo se agregue una vez

  return (
    <div id="audio-panel">
      {sounds.map((elem, i) => {
        return (
          <div
            id="keys"
            className="drum-pad"
            key={i}
            onClick={() => playSound(elem.letter, elem["name" + bank])}
          >
            <audio
              className="clip"
              muted={!isTurnedOn}
              id={elem.letter}
              src={elem["sound" + bank]}
            ></audio>
            <p>{elem.letter}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AudioPanel;
