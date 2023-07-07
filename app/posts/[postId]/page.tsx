import "highlight.js/styles/github-dark-dimmed.css";
import getFormattedDate from "@/lib/getFormattedDate";
import { getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
export const revalidate = 86400;
type Props = {
  params: { postId: string };
};
// export async function generateStaticParams() {
//   const posts = await getPostsMeta();
//   if (!posts) return [];
//   return posts.map((post) => ({
//     postId: post.id,
//   }));
// }

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);
  if (!post) notFound();

  const { meta, content } = post;
  const formattedDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, index) => (
    <Link
      className="dark:text-white/60 dark:hover:text-white"
      key={index}
      href={`/tags/${tag}`}
    >
      {tag}
    </Link>
  ));
  return (
    <div className="dark:text-white">
      <h2 className="text-2xl mt-4 mb-0 dark:text-white">{meta.title}</h2>
      <p className="mt-0 text-sm">{formattedDate}</p>
      <article className="">{content}</article>
      <section className="flex justify-start gap-4 items-center">
        <h3 className="dark:text-white m-0 p-0">Related:</h3>
        <div className="flex gap-4 ">{tags}</div>
      </section>
      <p className="">
        <Link className="dark:text-white/60 dark:hover:text-white" href={`/`}>
          Back To Home 🏡
        </Link>
      </p>
    </div>
  );
}
