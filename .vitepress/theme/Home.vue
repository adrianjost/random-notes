<script setup lang="ts">
import Date from "./Date.vue";
import { data as posts } from "./posts.data.js";
import { useData } from "vitepress";

const { frontmatter } = useData();
</script>

<template>
  <header>
    <h1>
      {{ frontmatter.title }}
    </h1>
    <p style="color: var(--muted-color)">
      {{ frontmatter.subtext }}
    </p>
  </header>

  <article v-for="{ title, url, date, excerpt } of posts" :key="url">
    <div>
      <div>
        <Date :date="date" />
        <h2>
          <a :href="url">{{ title }}</a>
        </h2>
        <div v-if="excerpt" v-html="excerpt"></div>
      </div>
      <div>
        <a aria-label="read more" :href="url">Read more →</a>
      </div>
    </div>
  </article>
</template>
<style scoped>
h1 {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0 !important;
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
a {
  display: inline-block;
  margin: -0.25rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
}
h2 a {
  color: inherit !important;
}
article {
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid var(--muted-color);
}
</style>
