<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Movie Library</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id" class="mb-4">
        <h2 class="text-xl">{{ movie.title }}</h2>
        <p>{{ movie.description }}</p>
        <button @click="editMovie(movie)">Edit</button>
        <button @click="deleteMovie(movie.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useMovieStore } from "@/store/movies";
import { storeToRefs } from "pinia";

const movieStore = useMovieStore();
const { movies } = storeToRefs(movieStore);

const editMovie = (movie) => {
  // Implement edit logic, e.g., open a modal with the movie details
};

const deleteMovie = (id) => {
  movieStore.deleteMovie(id);
};
</script>
