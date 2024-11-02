<template>
  <header class="max-w-full z-20 bg-secondary">
    <div class="bg-black px-3 max-w-full">
      <div class="flex justify-center items-center container px-0">
        <h1 class="text-white text-lg">FREE DILEVRY</h1>
      </div>
    </div>
    <nav
      class="flex items-center relative p-3 justify-between bg-secondary md:h-16 h-28 mx-auto md:px-4 container flex-wrap md:flex-nowrap"
    >
      <!--Mobile Toggle Button-->
      <div class="md:hidden z-30">
        <button
          class="block focus:outline-none"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span v-if="isMenuOpen" class="text-5xl">
            <img
              src="https://img.icons8.com/ios-filled/100/delete-sign.png"
              alt="close"
              width="50"
              height="50"
            />
          </span>
          <span v-else class="text-5xl">
            <img
              src="https://img.icons8.com/ios-filled/100/menu--v6.png"
              alt="open"
              width="50"
              height="50"
            />
          </span>
        </button>
      </div>

      <!--LOGO-->
      <div class="text-3xl font-bold flex">
        <h1 class="text-primary">LOGO</h1>
      </div>

      <!--Responsive Menu-->
      <div
        :class="[
          'fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary md:relative md:bg-transparent md:flex md:justify-between md:flex-row md:space-x-5',
          isMenuOpen ? 'block' : 'hidden',
        ]"
      >
        <ul
          class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 font-medium"
        >
          <li v-for="item in Menu" :key="item.name">
            <a
              :href="item.href"
              @click="scrollToSection(item.href)"
              class="block transition hover:text-primary ease-linear text-2xl md:text-sm lg:text-lg text-black"
            >
              {{ item.name }}</a
            >
          </li>
        </ul>
      </div>
      <!--cart-->
      <ul
        class="flex items-center justify-end lg:mr-0 lg:ml-0 ltr:mr-1.5 rtl:ml-1.5 ltr:md:-mr-1.5 rtl:md:-ml-1.5"
      >
        <li
          class="relative ltr:mr-1 last:ltr:mr-0 last:rtl:ml-0 rtl:ml-1 ltr:sm:mr-3 rtl:sm:ml-3 ltr:lg:mr-6 rtl:lg:ml-6"
        >
          <a
            href="#"
            class="text-black text-0 lg:text-sm uppercase flex items-end leading-tight"
          >
            <img
              src="/cart.svg"
              alt="cart"
              title="cart"
              loading="lazy"
              width="22"
              height="22"
              class="rtl:sm:ml-1 sm:mr-1.5 sm:w-[22px] w-[18px]"
            />
            <span
              class="absolute top-[-6px] right-[-6px] bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
            >
            {{cart.length}}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { ref,computed } from "vue";
import { useStore } from "vuex";
const store=useStore();
const cart = computed(()=>store.getters['getCart']);
const isMenuOpen = ref(false);
const Menu = ref([
  { name: "Home", href: "/home" },
  { name: "Collection", href: "#collection" },
  { name: "What's new", href: "#new" },
  { name: "Best Sellers", href: "#bestsellers" },
  { name: "Gift Ideas", href: "#giftideas" },
  { name: "Contact", href: "#contact" },
]);

const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
