import axios from "axios";
import { HORIZONTAL, PER_PAGE, PHOTO } from "../constants";
const api_key = process.env.REACT_APP_PIXABAY_API_KEY;
const pixabay_url = process.env.REACT_APP_PIXABAY_URL;

export const getImages = async (query, page) => {
  const options = {
    params: {
      key: api_key,
      q: query,
      image_type: PHOTO,
      orientation: HORIZONTAL,
      safesearch: true,
      per_page: PER_PAGE,
      page,
    },
  };

  try {
    const imagesData = await axios.get(pixabay_url, options);
    const { data } = imagesData;

    return data;
  } catch (error) {}
};
