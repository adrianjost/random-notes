<script setup lang="ts">
import { useData } from "vitepress";
import Home from "./Home.vue";
import Article from "./Article.vue";
import NotFound from "./NotFound.vue";

const { page, frontmatter } = useData();
</script>

<template>
  <div>
    <nav class="container-fluid">
      <a href="/" class="secondary home" aria-label="Random Notes">
        <img
          style="width: 36px; height: 31px"
          role="presentation"
          src="/logo.svg"
        />
        <b v-if="!frontmatter.index">Random Notes</b>
      </a>
      <small class="nav-items">
        <a class="secondary" href="/feed.rss">RSS Feed</a>
        <span class="spacer">•</span>
        <a
          class="secondary"
          href="https://adrianjost.dev"
          target="_blank"
          rel="noopener"
        >
          Homepage
        </a>
      </small>
    </nav>
    <main>
      <Home v-if="frontmatter.index" />
      <NotFound v-else-if="page.isNotFound" />
      <Article v-else />
    </main>
  </div>
</template>
<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  max-width: 1024px;
}
nav a {
  text-decoration: none;
  border-radius: 0.25rem;
  padding: 0.5em;
}
nav a.home {
  display: flex;
  align-items: center;
  color: var(--h2-color) !important;
}
.nav-items {
  display: flex;
  align-items: center;
}
.nav-items .spacer {
  margin: 0 calc(var(--nav-link-spacing-horizontal) / 2);
}
main {
  margin: 0 auto;
  max-width: 800px;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
}
@media (max-width: 576px) {
  .nav-items {
    display: none;
  }
  main {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
