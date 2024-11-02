<template >
    <transition name="fade" mode="out-in">
        <router-view />
    </transition>
</template>
<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
</script>
