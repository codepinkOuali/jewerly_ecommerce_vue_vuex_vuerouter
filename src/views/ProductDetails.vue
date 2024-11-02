<template>
  <section class="font-playfair">
    <NavBar />
    <div class="flex flex-col justify-center items-center min-h-screen">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
          <!--Product Image-->
          <div class="md:flex-1 px-4">
            <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
              <img
                :src="Product.img"
                alt="product image"
                class="w-full h-full object-cover"
                data-aos="fade-right"
              />
            </div>
          </div>
          <!--End Product Image-->

          <!--Product Deatils-->
          <div class="md:flex-1 px-4" data-aos="fade-left">
            <h2 class="text-2xl font-bold mb-2">{{ Product.title }}</h2>
            <p class="text-sm mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              officia provident ut fuga similique .
            </p>
            <div class="flex mb-4">
              <div class="mr-4">
                <span class="font-bold">Price :</span>
                <span>{{ Product.price }} $</span>
              </div>
              <div>
                <span class="font-bold">Availability :</span>
                <span>In Stock</span>
              </div>
            </div>
            <div class="mb-4">
              <span class="font-bold text-gray-700">Select Color :</span>
              <div class="flex items-center mt-2">
                <button class="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
                <button class="w-6 h-6 rounded-full bg-red-800 mr-2"></button>
                <button class="w-6 h-6 rounded-full bg-green-800 mr-2"></button>
                <button class="w-6 h-6 rounded-full bg-blue-800 mr-2"></button>
              </div>
            </div>
            <div>
              <span class="font-bold text-gray-700">Product Description :</span>
              <p class="text-gray-600 text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis enim unde cum sit rem repellendus, aperiam molestias
                totam quasi, distinctio pariatur odio ipsa maiores architecto
                cumque blanditiis. Accusamus dolorum quae ab sint perspiciatis
                vitae. Et sint delectus tenetur dolorum perferendis? Sint est
                rem labore tenetur autem alias ducimus blanditiis delectus!
              </p>
            </div>
            <div class="flex mt-10">
              <div class="w-full px-2 flex justify-between">
                <button
                  @click="decrease"
                  class="border border-secondary2 rounded-[3px] font-medium px-[11px] py-3 mt-2 hover:text-white hover:bg-secondary2"
                >
                  -
                </button>
                <input
                  type="text"
                  :value="quantity"
                  class="px-[11px] py-3 border border-secondary2 ml-2 text-secondary2 mt-2 w-[60px] h-[49px] text-center"
                />
                <button
                  @click="increase"
                  class="border border-secondary2 rounded-[3px] font-medium px-[11px] py-3 mt-2 ml-2 hover:text-white hover:bg-secondary2"
                >
                  +
                </button>
                <button
                  @click="addToCart()"
                  class="w-1/2 bg-secondary2 text-black py-2 px-4 border border-b-4 border-black rounded-3xl hover:text-white hover:border-secondary2"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactSection />
  </section>
</template>
<script setup>
import { defineAsyncComponent, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const NavBar = defineAsyncComponent(() => import("@/components/NavBar.vue"));
const ContactSection = defineAsyncComponent(() =>
  import("@/components/ContactSection.vue")
);
const route = useRoute();
const store = useStore();
const id = ref(null);
const Product = ref(null);
const quantity = ref(1);
const decrease = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const increase = () => {
  quantity.value++;
};

const notify = (message) => {
  toast(message, {
    autoClose: 3000,
    position: toast.POSITION.TOP_CENTER,
    toastStyle: { color: "#743820" },
  });
};
const addToCart = () => {
  const Q = quantity.value;
  const product = Product.value;
  store.dispatch("addToCart", { product, Q });
  notify("product is added to your cart");
  console.log(store.getters["getCart"]);
};
onBeforeMount(async () => {
  id.value = route.params.id;
  const numericId = Number(id.value);
  if (!isNaN(numericId)) {
    await store.dispatch("getProductIdAc", numericId);
    Product.value = await store.getters["getProductId"];
  }
});
</script>
