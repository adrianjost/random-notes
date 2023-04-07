<script setup lang="ts">
import Date from "./Date.vue";
import { computed } from "vue";
import { useData, useRoute } from "vitepress";
import { data as posts } from "./posts.data.js";

const { frontmatter: data } = useData();

const route = useRoute();

function findCurrentIndex() {
  return posts.findIndex((p) => p.url === route.path);
}

// use the customData date which contains pre-resolved date info
const date = computed(() => posts[findCurrentIndex()].date);
</script>

<template>
  <article class="container">
    <div style="grid-template-rows: auto 1fr">
      <header>
        <Date :date="date" />
        <h1>
          {{ data.title }}
        </h1>
      </header>
      <Content />
      <footer>
        <a href="/">← Go back</a>
      </footer>
    </div>
  </article>
</template>
<style scoped>
header {
  margin-bottom: var(--block-spacing-vertical);
}
header h1 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
article {
  margin: 0 auto;
  max-width: 800px;
  padding: 2rem;
}
</style>
