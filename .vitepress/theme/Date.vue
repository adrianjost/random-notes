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
.sr-only {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
}
</style>
