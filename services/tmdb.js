import axios from "axios";

const apiKey = process.env.TMDB_API_KEY;
const apiUrl = "https://api.themoviedb.org/3";

export const searchMovies = async (query) => {
  const response = await axios.get(`${apiUrl}/search/movie`, {
    params: {
      api_key: apiKey,
      query,
    },
  });
  return response.data.results;
};
