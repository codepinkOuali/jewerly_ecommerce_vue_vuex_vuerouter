<template>
  <section class="mt-32" data-aos="fade-up">
    <h1
      class="text-center mb-10 text-4xl/[0.9] font-medium tracking-tight text-black sm:text-7xl/[0.8] md:text-[5rem]/[0.9]"
    >
      Collection
    </h1>
    <div
      class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-4 text-center"
    >
      <div
        v-for="element in collection"
        :key="element.id"
        class="w-full mx-auto"
      >
        <div class="mb-10 max-h-[200px]">
          <img
            :src="element.img"
            alt="collection"
            class="scale-100 group-hover:scale-105 transition-all duration-500 h-[150px] w-full"
          />
        </div>
        <p class="font-normal uppercase">{{ element.name }}</p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const collection = ref([
  { id: 1, name: "Bracelets", img: "/j-1.avif" },
  { id: 2, name: "Earring", img: "/j-3.avif" },
  { id: 3, name: "Rings", img: "/j-4.avif" },
  { id: 4, name: "Necklaces", img: "/j-6.png" },
]);
</script>
