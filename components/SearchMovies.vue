<template>
  <div>
    <input
      v-model="query"
      @input="searchMoviesHandler"
      placeholder="Search for movies..."
      class="border p-2 w-full"
    />
    <ul v-if="movies.length">
      <li v-for="movie in movies" :key="movie.id" class="mb-2">
        <h3>{{ movie.title }}</h3>
        <button @click="addMovie(movie)">Add to Library</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { searchMovies as fetchMovies } from "@/services/tmdb";
import { useMovieStore } from "@/store/movies";

const query = ref("");
const movies = ref([]);
const movieStore = useMovieStore();

const searchMoviesHandler = async () => {
  if (query.value) {
    movies.value = await fetchMovies(query.value);
  } else {
    movies.value = [];
  }
};

const addMovie = (movie) => {
  movieStore.addMovie({
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    releaseDate: movie.release_date,
  });
};
</script>
