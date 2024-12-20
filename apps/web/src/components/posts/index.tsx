import Link from "next/link";
import { Post } from "../../utils/posts";

interface PostsProps {
  posts: Post[];
}

export function Posts({ posts }: PostsProps) {
  return (
    <ul>
      {posts.map(({ slug, title, publishedDate, categories }) => (
        <li className="[&:not(:first-child)]:mt-5  " key={slug}>
          <div className="flex justify-between">
            <Link href={`/${slug}`}>{title}</Link>
            <span>
              <time>{new Date(publishedDate).toLocaleDateString()}</time>
            </span>
          </div>
          <div className="flex flex-row gap-2 mt-2">
            {categories?.map((category) => (
              <div
                className="border border-slate-300 rounded-full px-2"
                key={category}
              >
                #{category}
              </div>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
