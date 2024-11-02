<template>
  <div class="w-[215px] text-left">
    <router-link
      :to="`/product-details/${product.id}`"
      class="bi bi-eye rounded-full bg-white py-0 px-[6px] text-secondary2 text-[21px] hover:bg-secondary2 hover:text-white absolute"
    ></router-link>
    <figure class="w-full h-[300px]">
      <img
        :src="product.img"
        alt="product image"
        loading="lazy"
        class="min-h-[250px] max-h-[251px] rounded-md"
      />
    </figure>
    <article>
      <div class="h-[50px]">
        <h3 class="font-bold">{{ product.title }}</h3>
      </div>
      <p
        class="text-sm text-gray-600 mt-2 font-bold font-sans flex justify-between"
      >
        <span>{{ product.price }} $</span>
        <span class="line-through text-gray-500">300 $</span>
      </p>
      <figure class="mt-10">
        <button
          @click="addToCart()"
          class="w-full bg-secondary2 text-black py-2 px-4 border border-b-4 border-black rounded-3xl hover:text-white hover:border-secondary2"
        >
          Add To Cart
        </button>
      </figure>
    </article>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  product: Object,
});

//call store of vuex
import { useStore } from "vuex";
const store = useStore();

//callToastify
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

//toastify function
const notify = (message) => {
  toast(message, {
    autoClose: 3000,
    position: toast.POSITION.TOP_CENTER,
    toastStyle: { color: "#743820" },
  });
};

//add to cart function
const addToCart = () => {
  const Q = 1;
  const product = props.product.value;
  store.dispatch("addToCart", { product, Q });
  notify("product is added to your cart");
  console.log(store.getters["getCart"]);
};
</script>
