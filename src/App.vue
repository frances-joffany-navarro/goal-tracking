<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Header",
  components: {
    Navigation,
  },
};
</script>

<style>
</style>
