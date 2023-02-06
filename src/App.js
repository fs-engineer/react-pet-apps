import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import { ContactsLayout } from "./components/Layouts";
import { LoginForm } from "./components/Phonebook/LoginRegistration/LoginForm";
import { RegistrationForm } from "./components/Phonebook/LoginRegistration/RegistrationForm";
import { RestrictedRoute } from "./redux/routes";
import { finderPath, phonebookPath, videoPlayerPath } from "./constants";
import { PrivateRoute } from "./redux/routes/PrivateRoute";
const MovieLayout = React.lazy(() =>
  import("./components/Layouts/MovieLayout")
);
const Phonebook = React.lazy(() => import("./Pages/Phonebook"));
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
        <Route path={finderPath} element={<ImageFinder />} />
        <Route path={phonebookPath} element={<ContactsLayout />}>
          <Route
            path="login"
            element={
              <RestrictedRoute
                component={LoginForm}
                redirectTo={phonebookPath}
              />
            }
          />
          <Route
            path="registration"
            element={
              <RestrictedRoute
                component={RegistrationForm}
                redirectTo={phonebookPath}
              />
            }
          />
          <Route
            index
            element={<PrivateRoute component={Phonebook} redirectTo="login" />}
          />
        </Route>
        <Route
          path={videoPlayerPath}
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
