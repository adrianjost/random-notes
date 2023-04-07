// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue";
import "@picocss/pico/css/pico.classless.css";
import "./styles.css";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
};
