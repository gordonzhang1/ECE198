import "../App.css";
import Draw from "./Draw";
import SubmitNote from "./submit";

function App() {
  return (
    <>
      <div className="draw-page-container">
        <div className="canvas-con">
          <Draw />
        </div>
        <div className="submit-container">
          <SubmitNote />
        </div>
      </div>
    </>
  );
}

export default App;
