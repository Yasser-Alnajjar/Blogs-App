import ListItem from "@/app/components/ListItem";
import { getPostsMeta } from "@/lib/posts";
import Link from "next/link";

type Props = {
  params: { tag: string };
};
export const revalidate = 86400;
// export async function generateStaticParams() {
//   const posts = await getPostsMeta();
//   if (!posts) return [];
//   const tags = new Set(posts.map((post) => post.tags).flat());
//   return Array.from(tags).map((tag) => ({ tag }));
// }
export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Posts about ${tag}`,
  };
}
export default async function TagPosts({ params: { tag } }: Props) {
  const posts = await getPostsMeta();
  if (!posts) return <p className="mt-10">Sorry, no posts available.</p>;
  const postOfTag = posts.filter((post) => post.tags.includes(tag));
  if (!postOfTag.length)
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts about this tag.</p>
        <Link href={"/"}>Back To Home 🏡</Link>
      </div>
    );
  return (
    <>
      <h1 className="mt-10 text-3xl font-bold dark:text-white text-gray-900">
        Posts about #{tag}
      </h1>
      <section className="mt-6 mx-auto max-w-2xl">
        <ul className="w-full list-none p-0">
          {postOfTag.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
        <Link className="dark:text-white" href={"/"}>
          Back To Home 🏡
        </Link>
      </section>
    </>
  );
}
