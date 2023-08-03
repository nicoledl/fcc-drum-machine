import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { currentElement, setVolume } from "../store";
import { sounds } from "./sounds";

const VolumeControl = () => {
  const dispatch = useDispatch();
  const isTurnedOn = useSelector((state) => state.isTurnedOn);
  const volume = useSelector((state) => state.volume);
  const soundsClone = [...sounds];
  const audioElements = soundsClone.map(
    (elem, i) => (soundsClone[i] = elem.letter)
  );

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    dispatch(setVolume(newVolume));
    updateAudioVolume(newVolume);
    dispatch(currentElement("Volume: " + Math.floor(newVolume * 100)));
  };

  const updateAudioVolume = (newVolume) => {
    audioElements.forEach((elementId) => {
      const audio = document.getElementById(elementId);
      if (audio) {
        audio.volume = newVolume;
      }
    });
  };

  useEffect(() => {
    updateAudioVolume(volume);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume]);

  return (
    <div>
      <input
        disabled={!isTurnedOn}
        className="form-range"
        type="range"
        id="volumeControl"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default VolumeControl;
