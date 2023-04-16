import "./style.css";
import Layout from "./Layout.vue";
import ALink from "./components/a-link.vue";

export default {
  Layout,
  enhanceApp({ app }) {
    app.component("ALink", ALink);
  }
};
