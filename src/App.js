import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import { ContactsLayout } from "./components/Layouts";
import { LoginForm } from "./components/Phonebook/LoginRegistration/LoginForm";
import { RegistrationForm } from "./components/Phonebook/LoginRegistration/RegistrationForm";
const MovieLayout = React.lazy(() =>
  import("./components/Layouts/MovieLayout")
);
const MoviesTrending = React.lazy(() => import("./Pages/MoviesTrending"));
const MovieDetails = React.lazy(() => import("./Pages/MovieDetails"));
const ImageFinder = React.lazy(() => import("./Pages/ImageFinder"));
const VideoPlayer = React.lazy(() => import("./Pages/VideoPlayer"));
const MoviesCollection = React.lazy(() => import("./Pages/MoviesCollection"));
const MovieReview = React.lazy(() =>
  import("./components/MoviesCollection/MovieReview/MovieReview")
);
const MovieCast = React.lazy(() =>
  import("./components/MoviesCollection/MovieCast/MovieCast")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/finder" element={<ImageFinder />} />
        {/*<Route path="/phonebook" element={<Phonebook />} />*/}
        <Route path="/phonebook" element={<ContactsLayout />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="registration" element={<RegistrationForm />} />
        </Route>
        <Route
          path="/videoplayer"
          element={
            <VideoPlayer source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
          }
        />
        <Route path="/movies-collection" element={<MovieLayout />}>
          <Route index element={<MoviesTrending />} />
          <Route path="movies" element={<MoviesCollection />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReview />} />
          </Route>
        </Route>
        <Route path="*" element="Error" />
      </Route>
    </Routes>
  );
}

export default App;
