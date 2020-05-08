import axios from "axios";

const CLIENT_KEY = process.env.REACT_APP_CLIENT_KEY;

const fetchWithQuery = (query, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${CLIENT_KEY}&lang=ru&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default fetchWithQuery;
