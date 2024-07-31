import { defineStore } from "pinia";

export const useMovieStore = defineStore("movies", {
  state: () => ({
    movies: [],
  }),
  actions: {
    addMovie(movie) {
      this.movies.push(movie);
    },
    removeMovie(id) {
      this.movies = this.movies.filter((movie) => movie.id !== id);
    },
  },
});
