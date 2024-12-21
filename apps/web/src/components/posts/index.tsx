import Link from "next/link";
import { Post } from "../../utils/posts";

interface PostsProps {
  posts: Post[];
}

export function Posts({ posts }: PostsProps) {
  return (
    <main className="flex-col-2">
      <h1 className="font-permanent-marker text-3xl font-bold">My Blog</h1>

      <section className="py-10">
        <h2 className="text-2xl font-bold">Posts</h2>
        <div className="py-2">
          <ul>
            {posts.map(({ slug, title, publishedDate, categories }) => (
              <li className="[&:not(:first-child)]:mt-5  " key={slug}>
                <Link href={`/${slug}`}>
                  <div className="py-2 flex justify-between align-middle gap-2">
                    <div>
                      <h3 className="text-lg font-bold">{title}</h3>
                      <p className="text-gray-400">Description</p>
                    </div>
                    <div>
                      <time className="my-auto text-gray-400">
                        {new Date(publishedDate).toLocaleDateString()}
                      </time>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 mt-2">
                    {categories?.map((category) => (
                      <div className="px-2" key={category}>
                        <span className="text-emerald-400">#</span>
                        <span className="text-gray-400">{category}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
