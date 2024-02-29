<script setup>
import BulmaMessage from './components/MessageComponent.vue';
import { ref } from 'vue';
let database = ref([
  {
    title:"Jaapug",
    message:"Jaapug on väga rõõmus.",
    color:"primary",
  },
  {
    title: "Random Message 1",
    message: "This is a random message.",
    color: "dark",
  },
  {
    title: "Random Message 2",
    message: "Another random message.",
    color: "info",
  },
  {
    title: "Random Message 3",
    message: "Yet another random message.",
    color: "success",
  },
  {
    title: "Random Message 4",
    message: "And one more random message.",
    color: "warning",
  }
])
</script>

<template>
  <div>
    <BulmaMessage
      v-for="(item, index) in database"
      :title="item.title"
      :message="item.message"
      :color="item.color"
    />

  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
