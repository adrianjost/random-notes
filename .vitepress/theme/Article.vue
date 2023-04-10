<script setup lang="ts">
import Date from "./Date.vue";
import { computed } from "vue";
import { useData, useRoute } from "vitepress";
import { data as posts } from "./posts.data.js";

const { frontmatter: data, page } = useData();

const route = useRoute();

function findCurrentIndex() {
  return posts.findIndex((p) => p.url === route.path);
}

// use the customData date which contains pre-resolved date info
const date = computed(() => posts[findCurrentIndex()].date);
</script>

<template>
  <article>
    <div style="grid-template-rows: auto 1fr">
      <header>
        <h1>
          {{ data.title }}
        </h1>
        <Date :date="date" />
      </header>
      <Content class="content" />
      <footer>
        <a href="/">← Go back</a>
        <a
          class="link-muted"
          :href="`https://github.com/adrianjost/random-notes/tree/main/${page.relativePath}`"
          target="_blank"
          rel="noopener"
        >
          View GitHub Source
        </a>
      </footer>
    </div>
  </article>
</template>
<style scoped>
header {
  margin-top: var(--block-spacing-vertical);
  margin-bottom: var(--block-spacing-vertical);
}
header h1 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
