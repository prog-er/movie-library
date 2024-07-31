<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Movie Library</h1>
    <AddMovieForm />
    <SearchMovies />
    <MovieList />
  </div>
</template>

<script setup>
import AddMovieForm from "@/components/AddMovieForm.vue";
import SearchMovies from "@/components/SearchMovies.vue";
import MovieList from "@/components/MovieList.vue";
</script>
