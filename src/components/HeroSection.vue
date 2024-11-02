<template>
  <section class="relative w-full bg-secondary">
    <div
      class="w-full lg:px-16 md:px-12 px-6 mx-auto relative"
      data-aos="zoom-in"
    >
      <div class="grid lg:grid-cols-2 relative pt-24 mx-auto">
        <div class="md:mt-5 relative">
          <h1
            class="text-balance text-5xl/[0.9] font-medium tracking-tight text-black sm:text-8xl/[0.8] md:text-[5.5rem]/[0.9]"
          >
            Let us make you shine !
            <img
              src="/gif.gif"
              alt="shining"
              class="w-[32%] inline-block -ml-10 align-middle"
            />
          </h1>
          <button
            class="mt-4 w-full md:w-48 bg-secondary p-4 font-bold border border-b-4 border-black rounded-3xl hover:text-primary"
          >
            Shop Now
          </button>
        </div>
        <div class="lg:h-full w-[90%] md:w-full mt-20 md:mt-0">
          <Carousel>
            <Slide v-for="(image, index) in images" :key="index">
              <img
                :src="image"
                alt="jewerly image"
                class="glowing-border carousel__image w-[800px] h-[450px] rounded-3xl"
              />
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
    </div>

    <!--Marquee section-->
    <div class="outer-running-about mt-10 bg-secondary2">
      <div class="running-text max-w-full">
        <Vue3Marquee>
          <span
            class="head-7 font-playfair"
            v-for="(word, index) in news"
            :key="index"
          >
            {{ word }}
            <span class="svg w-embed inline-block align-middle">
              <img src="/sparkle.svg" alt="sparkle" />
            </span>
          </span>
        </Vue3Marquee>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const images = ref(["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"]);
const news = ref([
  "Stainless Steel Accessories",
  "925 Sliver Jewerly",
  "Gold Plated Bracelets",
  "Elegance at your fingertips !",
  "Sparkle and Style",
]);
</script>
<style>
.glowing-border {
  border-radius: 10px;
  border: 2px solid transparent;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.6),
    0 0 25px rgba(255, 255, 255, 0.4);
  transition: box-shadow 0.3s ease-in-out;
}
.glowing-border:hover {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.8),
    0 0 25px rgba(255, 255, 255, 0.6);
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide {
  padding: 10px;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  border-radius: 50%;
  background-color: white;
}
.outer-running-about {
  z-index: 1;
  width: 100.5%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  display: flex;
  position: relative;
  left: -0.5rem;
  transform: translate(0, -20%) rotate(-2deg);
}
.scroll-text {
  display: inline-block;
  padding-left: 100%;
  animation: scroll-left 15s linear infinite;
  font-size: 1rem;
  color: white;
}
.head-7 {
  letter-spacing: -1px;
  font-size: 2rem;
  font-weight: 500;
  line-height: 120%;
  color: white;
}
</style>
