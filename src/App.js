import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout/Layout";
import { ImageFinder } from "./components/ImageFinder";
import { VideoPlayer } from "./components/VideoPlayer";
import { Phonebook } from "./components/Phonebook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Phonebook />} /> */}
        <Route path="/finder" element={<ImageFinder />} />
        <Route path="/phonebook" element={<Phonebook />} />
        <Route path="/videoplayer" element={<VideoPlayer />} />
        <Route path="*" element="Error" />
      </Route>
    </Routes>
  );
}

export default App;
