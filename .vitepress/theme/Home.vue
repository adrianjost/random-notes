<script setup lang="ts">
import Date from "./Date.vue";
import { data as posts } from "./posts.data.js";
import { useData } from "vitepress";

const { frontmatter } = useData();
</script>

<template>
  <main>
    <header>
      <h1>
        {{ frontmatter.title }}
      </h1>
      <p>
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
  </main>
</template>
<style scoped>
main {
  margin: 0 auto;
  max-width: 800px;
  padding: 2rem;
}
h1 {
  font-size: 3rem;
  font-weight: 900;
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
  padding: 2rem 0;
  border-top: 1px solid var(--muted-color);
}
</style>
