import Link from "next/link";
import { Post } from "../../utils/posts";

interface PostsProps {
  posts: Post[];
}

export function Posts({ posts }: PostsProps) {
  return (
    <ol>
      {posts.map(({ slug, title, publishedDate }) => (
        <li key={slug}>
          <h2>
            <Link href={`/${slug}`}>{title}</Link>
          </h2>
          <p>
            <strong>{publishedDate}</strong>
            {new Date(publishedDate).toLocaleDateString()}
          </p>
        </li>
      ))}
    </ol>
  );
}
