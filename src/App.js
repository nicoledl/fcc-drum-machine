import Container from "./components/Container";
import "./scss/App.scss";

function App() {
  return (
    <div className="App d-grid justify-content-center align-items-center">
      <Container />
      <p
        className="text-center mt-3"
        style={{ fontSize: "small", fontWeight: "normal" }}
      >
        By Nicole D. Losana
      </p>
    </div>
  );
}

export default App;
