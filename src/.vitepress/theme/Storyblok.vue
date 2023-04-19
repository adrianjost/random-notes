<script setup lang="ts">
import { useData } from "vitepress";
import AsyncComponent from "./AsyncComponent.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const data = useData();
const { site, frontmatter, params } = data;
</script>

<template>
  <main>
    <article>
      <h1>Article</h1>
      <pre>{{ JSON.stringify(frontmatter.content) }}</pre>
      <AsyncComponent />
    </article>
  </main>
</template>

<style scoped>
main article pre {
  background-color: pink;
}
</style>
