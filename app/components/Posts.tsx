import { getPostsMeta } from "@/lib/posts";
import ListItem from "./ListItem";

export default async function Posts() {
  const posts = await getPostsMeta();
  if (!posts) {
    return (
      <p className="mt-10 text-center text-red-600">
        Sorry, no posts to available
      </p>
    );
  }
  return (
    <section className="mt-5">
      <h2 className="text-3xl text-indigo-600 dark:hover:text-indigo-800 transition duration-300 select-none">
        Blog
      </h2>
      <ul className="w-full list-none p-0">
        {posts.map((post) => (
          <ListItem post={post} key={post.id} />
        ))}
      </ul>
    </section>
  );
}
