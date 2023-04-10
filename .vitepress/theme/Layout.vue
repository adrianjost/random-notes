<script setup lang="ts">
import { useData } from "vitepress";
import Home from "./Home.vue";
import Article from "./Article.vue";
import NotFound from "./NotFound.vue";

const { page, frontmatter } = useData();
</script>

<template>
  <nav>
    <a href="/" class="home link-muted" aria-label="Random Notes">
      <img
        style="width: 36px; height: 31px"
        role="presentation"
        src="/logo.svg"
      />
      <b v-if="!frontmatter.home">Random Notes</b>
    </a>
    <a class="link-muted" href="/feed.rss">
      <small> RSS Feed </small>
    </a>
  </nav>
  <main>
    <Home v-if="frontmatter.home" />
    <NotFound v-else-if="page.isNotFound" />
    <Article v-else />
  </main>
  <footer>
    <a
      href="https://adrianjost.dev"
      class="link-muted"
      target="_blank"
      rel="noopener"
    >
      <small> © Adrian Jost </small>
    </a>
  </footer>
</template>
<style scoped>
nav,
main {
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0 auto;
  width: 100%;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  max-width: 1024px;
}
nav a {
  display: inline-block;
  text-decoration: none;
  border-radius: var(--rounding);
  padding: var(--rounding);
}
nav a.home {
  display: flex;
  align-items: center;
  color: var(--color-text);
}

main {
  max-width: 800px;
  padding-bottom: 2rem;
}

footer {
  text-align: center;
  padding: 1rem;
}
footer a {
  border-radius: var(--rounding);
  padding: var(--rounding);
}

@media (max-width: 576px) {
  nav,
  main {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
