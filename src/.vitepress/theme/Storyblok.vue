<script setup lang="ts">
import { useData } from "vitepress";
import AsyncComponent from "./AsyncComponent.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const data = useData();
const { site, frontmatter, params } = data;
console.log("Data:", data);
console.log("Params:", params.value);
console.log("Frontmatter:", frontmatter.value.metadata);
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
