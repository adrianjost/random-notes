<script setup lang="ts">
import { ref, onMounted } from "vue";
const ready = ref(false);
onMounted(() => {
  setTimeout(() => {
    ready.value = true;
  }, 1000);
});
</script>

<template>
  <h1 v-if="ready">Ich bin gar nicht da!!!</h1>
</template>
