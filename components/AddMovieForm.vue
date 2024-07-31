<template>
  <form
    @submit.prevent="handleSubmit(onSubmit)"
    class="max-w-md mx-auto p-4 bg-white rounded shadow-md"
  >
    <div class="mb-4">
      <label for="title" class="block text-sm font-medium text-gray-700"
        >Title</label
      >
      <Field
        name="title"
        as="input"
        type="text"
        v-model="form.title"
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <ErrorMessage name="title" class="mt-2 text-sm text-red-600" />
    </div>
    <div class="mb-4">
      <label for="description" class="block text-sm font-medium text-gray-700"
        >Description</label
      >
      <Field
        name="description"
        as="textarea"
        v-model="form.description"
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <ErrorMessage name="description" class="mt-2 text-sm text-red-600" />
    </div>
    <div class="mb-4">
      <label for="releaseDate" class="block text-sm font-medium text-gray-700"
        >Release Date</label
      >
      <Field
        name="releaseDate"
        as="input"
        type="date"
        v-model="form.releaseDate"
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <ErrorMessage name="releaseDate" class="mt-2 text-sm text-red-600" />
    </div>
    <button
      type="submit"
      class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Add Movie
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useField, useForm, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useMovieStore } from "@/store/movies";

const schema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  releaseDate: yup.date().required("Release Date is required"),
});

const form = ref({
  title: "",
  description: "",
  releaseDate: "",
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const movieStore = useMovieStore();

const onSubmit = (values) => {
  movieStore.addMovie(values);
  console.log("Form Submitted:", values); // Отладочная информация
};
</script>
