import AudioPanel from "./AudioPanel";
import Controls from "./Controls";

const Container = () => {
  return (
    <div id="drum-machine" className="container">
      <div
        className="d-flex justify-content-end font-italic"
        style={{ alignItems: "center", fontStyle: "italic" }}
      >
        <p className="text-uppercase pe-1">fcc</p>
        <i className="inner-logo fa fa-free-code-camp" />
      </div>
      <div id="display" className="row">
        <div className="col-12 col-sm-12 col-lg-8 d-flex justify-content-center">
          <AudioPanel />
        </div>
        <div className="col">
          <Controls />
        </div>
      </div>
    </div>
  );
};

export default Container;
