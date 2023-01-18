import { ImageFinder } from "./components/ImageFinder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TOP_RIGHT } from "./constants";
// import { VideoPlayer } from "./components/VideoPlayer";
// import { Phonebook } from "./components/Phonebook";

function App() {
  return (
    <div className="App">
      {/* <Phonebook /> */}
      {/* <VideoPlayer source={"http://media.w3.org/2010/05/sintel/trailer.mp4"} /> */}
      <ImageFinder />
      <ToastContainer position={TOP_RIGHT} />
    </div>
  );
}

export default App;
