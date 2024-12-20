import { Button } from "@repo/ui/button";
import { Metadata } from "next";
import { getPosts } from "../../../utils/posts";
import { Posts } from "../../../components/posts";

export const metadata: Metadata = {
  title: "Digital Garden",
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <Posts posts={posts} />
    </main>
  );
}
