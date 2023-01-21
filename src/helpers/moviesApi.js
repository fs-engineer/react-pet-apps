import axios from "axios";

const api_key = process.env.REACT_APP_THEMOVIEDB_API_KEY;
const movie_url = process.env.REACT_APP_THEMOVIEDB_URL;

const options = {
  params: {
    api_key,
    language: "en",
  },
};

export const getMoviesTrending = async () => {
  try {
    const data = await axios.get(`${movie_url}/trending/movie/day`, options);
    return data;
  } catch (error) {
    return error;
  }
};
