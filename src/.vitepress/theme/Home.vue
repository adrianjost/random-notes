<script setup>
import { data as posts } from "../../articles.data.ts";
</script>

<template>
  <h1>All Blog Posts</h1>
  <ul>
    <li v-for="post of posts">
      <a :href="post.url">{{ post.frontmatter.title }}</a>
      <span>by {{ post.frontmatter.author }}</span>
      <span>{{ post.excerpt }}</span>
      <span v-html="post.html"></span>
    </li>
  </ul>
</template>
