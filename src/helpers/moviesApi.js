import axios from "axios";

const api_key = process.env.REACT_APP_THEMOVIEDB_API_KEY;
const movie_url = process.env.REACT_APP_THEMOVIEDB_URL;

const initialOptions = {
  params: {
    api_key,
    language: "en",
  },
};

export const getMoviesTrending = async () => {
  try {
    const data = await axios.get(
      `${movie_url}/trending/movie/day`,
      initialOptions
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getMoviesByName = async (query, page = 1) => {
  const options = {
    params: {
      ...initialOptions.params,
      query,
      page,
    },
  };

  try {
    const data = await axios.get(`${movie_url}/search/movie`, {
      ...initialOptions,
      ...options,
    });

    return data;
  } catch (error) {
    return error;
  }
};
