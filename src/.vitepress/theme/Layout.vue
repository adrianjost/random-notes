<script setup lang="ts">
import Home from "./Home.vue";
import { useData } from "vitepress";

// https://vitepress.dev/reference/runtime-api#usedata
const data = useData();
const { site, frontmatter, params } = data;
// console.log("Data:", data);
// console.log("Params:", params.value);
// console.log("Frontmatter:", frontmatter.value.content);
</script>

<template>
  <div v-if="frontmatter.home">
    <Home />
  </div>
  <div class="app-root" v-else>
    <main>
      <article>
        <Content />
      </article>
    </main>
  </div>
</template>
