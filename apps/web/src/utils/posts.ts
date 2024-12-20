import { readdirSync } from "node:fs";
import path from "node:path";

export interface Post {
  slug: string;
  title: string;
  publishedDate: string;
}

export async function getPosts(): Promise<Post[]> {
  const postsPath = "src/app/(garden)/(posts)";

  const slugs = readdirSync(postsPath, {
    withFileTypes: true,
  }).filter((dirent) => dirent.isDirectory());

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(path.join(postsPath, name, "page.mdx"));

      return { slug: name, ...metadata };
    })
  );

  return posts;
}
