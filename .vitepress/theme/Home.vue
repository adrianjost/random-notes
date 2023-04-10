<script setup lang="ts">
import Date from "./Date.vue";
import { data as posts } from "./posts.data.js";
import { useData } from "vitepress";

const { frontmatter } = useData();
</script>

<template>
  <header>
    <h1 class="title">
      {{ frontmatter.title }}
    </h1>
    <p>
      {{ frontmatter.subtext }}
    </p>
  </header>

  <article v-for="{ title, url, date, excerpt } of posts" :key="url">
    <Date :date="date" />
    <h2>
      <a :href="url">{{ title }}</a>
    </h2>
    <div v-if="excerpt" class="excerpt" v-html="excerpt"></div>
    <a aria-label="read more" :href="url">Read more →</a>
  </article>
</template>
<style scoped>
h1 {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0;
  margin-top: calc(var(--block-spacing-vertical) / 3);
}
@media (min-width: 576px) {
  h1 {
    font-size: 3rem;
  }
  main {
    padding: 2rem;
  }
}

h2 {
  margin-top: 0 !important;
}
h2 > a:hover {
  text-decoration: underline;
  color: inherit;
  background-color: inherit;
}
.excerpt:deep() p {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
}
article {
  padding-top: var(--block-spacing-vertical);
  padding-bottom: var(--block-spacing-vertical);
  border-top: var(--divider-width) solid var(--color-divider);
}
</style>
