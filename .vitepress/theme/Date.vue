<script setup lang="ts">
import type { Post } from "./posts.data.js";

const props = defineProps<{ date: Post["date"] }>();

function getDateTime() {
  return new Date(props.date.time).toISOString();
}
</script>

<template>
  <dl>
    <dt class="sr-only">Published on</dt>
    <dd>
      <time :datetime="getDateTime()"> {{ " " }}{{ date.string }} </time>
    </dd>
  </dl>
</template>
<style scoped>
dl {
  display: block;
  padding: 0;
  margin: 0;
}
dt,
dd {
  margin: 0;
  display: inline;
}
</style>
