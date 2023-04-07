import path from "path";
import { writeFileSync } from "fs";
import { Feed } from "feed";
import { createContentLoader, type SiteConfig } from "vitepress";
import { baseUrl, logoUrl } from "./settings";

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: "Random Notes",
    description: "A list of things I want to be available on the Internet.",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    image: logoUrl,
    favicon: logoUrl,
    copyright: "Copyright (c) 2021-present, Adrian Jost"
  });

  const posts = await createContentLoader("posts/*.md", {
    excerpt: true,
    render: true
  }).load();

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  );

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt,
      content: html,
      author: [
        {
          name: frontmatter.author,
          link: frontmatter.web ? frontmatter.web : undefined
        }
      ],
      date: frontmatter.date
    });
  }

  writeFileSync(path.join(config.outDir, "feed.rss"), feed.rss2());
}
