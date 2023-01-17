import { ImageFinder } from "./components/ImageFinder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TOP_RIGHT } from "./constants";
// import { Phonebook } from "./components/Phonebook";

function App() {
  return (
    <div className="App">
      {/* <Phonebook /> */}
      <ImageFinder />
      <ToastContainer position={TOP_RIGHT} />
    </div>
  );
}

export default App;
