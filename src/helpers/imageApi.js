import axios from "axios";
const api_key = process.env.REACT_APP_PIXABAY_API_KEY;
const pixabay_url = process.env.REACT_APP_PIXABAY_URL;

export const getImages = async (query, page) => {
  const options = {
    params: {
      key: api_key,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: 12,
      page,
    },
  };

  try {
    const imagesData = await axios.get(pixabay_url, options);
    const { data } = imagesData;

    return data;
  } catch (error) {}
};
