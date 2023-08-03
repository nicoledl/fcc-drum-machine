import { useDispatch, useSelector } from "react-redux";
import { currentElement, setIsTurnedOn, updateBank } from "../store";
import $ from "jquery";
import VolumeControl from "./VolumenControl";

const Controls = () => {
  const dispatch = useDispatch();
  const bank = useSelector((state) => state.bank);
  const isTurnOn = useSelector((state) => state.isTurnedOn);
  const activeElement = useSelector((state) => state.activeElement);

  const handlePower = () => {
    !isTurnOn
      ? $(`#power-button`).css("justify-content", "end")
      : $(`#power-button`).css("justify-content", "start");

    !isTurnOn && dispatch(currentElement(""));

    dispatch(setIsTurnedOn(!isTurnOn));
  };

  const handleBankChange = () => {
    let newBank = bank === 1 ? 2 : 1;

    bank === 1
      ? $(`#bank-button`).css("justify-content", "end")
      : $(`#bank-button`).css("justify-content", "start");

    bank === 1
      ? dispatch(currentElement("Smooth Piano Kit"))
      : dispatch(currentElement("Heater Kit"));

    dispatch(updateBank(newBank));
  };

  return (
    <div id="control-panel">
      <div className="d-grid justify-content-center">
        <p>Power</p>
        <div id="power-button" onClick={() => handlePower()}>
          <span></span>
        </div>
      </div>
      <div id="current-element">{isTurnOn && activeElement}</div>
      <div className="volume-slider">
        <VolumeControl />
      </div>
      <div className="d-grid justify-content-center">
        <p>Bank</p>
        <div id="bank-button" onClick={() => handleBankChange()}>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Controls;
