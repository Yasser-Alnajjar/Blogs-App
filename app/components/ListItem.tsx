import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: Meta;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-lg dark:text-white/70 text-black">
      <Link
        className="dark:hover:text-white dark:text-white/70 text-black/60 hover:text-black  text-xl"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <p className="text-xs mt-2">{formattedDate}</p>
    </li>
  );
}
