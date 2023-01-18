import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TOP_RIGHT } from "./constants";
import { ImageFinder } from "./components/ImageFinder";
import { Tabs } from "./components/Tabs";
import { useState } from "react";
import { VideoPlayer } from "./components/VideoPlayer";
import { Phonebook } from "./components/Phonebook";

const tabsData = [
  { name: "Phone book", component: <Phonebook /> },
  { name: "Image Finder", component: <ImageFinder /> },
  {
    name: "Video Player",
    component: (
      <VideoPlayer source={"http://media.w3.org/2010/05/sintel/trailer.mp4"} />
    ),
  },
];

function App() {
  const [tabIdx, setTabIdx] = useState(0);
  const tabNames = tabsData.map((el) => el.name);

  const updateTabIdx = (idx) => {
    setTabIdx(idx);
  };

  return (
    <div className="App">
      <Tabs handleChangeTab={updateTabIdx} tabNames={tabNames} />
      {tabsData[tabIdx].component}
      <ToastContainer position={TOP_RIGHT} />
    </div>
  );
}

export default App;
