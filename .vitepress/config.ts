import { defineConfig } from "vitepress";
import { createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { genFeed } from "./genFeed.js";
import { SitemapStream } from "sitemap";
import { baseUrl, logoUrl } from "./settings.js";

const links: any[] = [];

export default defineConfig({
  title: "Random Notes",
  description: "A list of things I want to be available on the Internet.",
  cleanUrls: true,
  head: [
    ["meta", { name: "twitter:card", content: "summary" }],
    [
      "meta",
      {
        name: "twitter:image",
        content: logoUrl
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/logo.svg"
      }
    ]
  ],
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, "$2"),
        lastmod: pageData.lastUpdated
      });
  },
  buildEnd: (config) => {
    const sitemap = new SitemapStream({
      hostname: baseUrl
    });
    const writeStream = createWriteStream(
      resolve(config.outDir, "sitemap.xml")
    );
    sitemap.pipe(writeStream);
    links.forEach((link) => sitemap.write(link));
    sitemap.end();
    genFeed(config);
  }
});
