import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layouts/Layout";
import { MovieLayout } from "./components/Layouts";
import { ImageFinder, MoviesTrending } from "./Pages";
import { VideoPlayer } from "./Pages";
import { Phonebook } from "./Pages";
import MoviesCollection from "./Pages/MoviesCollection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/finder" element={<ImageFinder />} />
        <Route path="/phonebook" element={<Phonebook />} />
        <Route
          path="/videoplayer"
          element={
            <VideoPlayer source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
          }
        />
        <Route path="/movies-collection" element={<MovieLayout />}>
          <Route index element={<MoviesTrending />} />
          <Route path="movies" element={<MoviesCollection />} />
          <Route path="movies/:movieId" element={<div>id</div>} />
        </Route>
        <Route path="*" element="Error" />
      </Route>
    </Routes>
  );
}

export default App;
