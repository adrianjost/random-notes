import { defineConfig } from "vitepress";
import { genFeed } from "./genFeed.js";

export default defineConfig({
  title: "Random Notes",
  description: "A list of things I want to be available on the Internet.",
  cleanUrls: true,
  head: [
    ["meta", { name: "twitter:card", content: "summary" }],
    // [
    //   'meta',
    //   {
    //     name: 'twitter:image',
    //     content: 'https://TODO/logo.png'
    //   }
    // ],
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/logo.svg"
      }
    ]
  ],
  buildEnd: genFeed
});
