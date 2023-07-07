import Link from "next/link";

import {
  FaYoutube,
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
export default function Navbar() {
  return (
    <nav className="dark:bg-zinc-800 bg-slate-200 sticky top-0 drop-shadow-xl z-10 py-4">
      <div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-2xl grid place-content-center mb-2 md:mb-0">
          <Link
            href={"/"}
            className="dark:text-white/75 dark:hover:text-indigo-700 hover:text-indigo-700 text-zinc-700 no-underline"
          >
            Yasser Al-Najjar
          </Link>
        </h1>
        <div className="flex justify-center items-center gap-3">
          <Link
            title="Github"
            className="dark:text-white/75 dark:hover:text-indigo-700 hover:text-indigo-700 text-zinc-700"
            target="_blank"
            href={"https://github.com/Yasser-Alnajjar"}
          >
            <FaGithub />
          </Link>
          <Link
            title="Youtube"
            className="dark:text-white/75 dark:hover:text-indigo-700 hover:text-indigo-700 text-zinc-700"
            target="_blank"
            href={
              "https://www.youtube.com/watch?v=puIQhnjOfbc&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=6&ab_channel=DaveGray"
            }
          >
            <FaYoutube />
          </Link>
          <Link
            title="Twitter"
            className="dark:text-white/75 dark:hover:text-indigo-700 hover:text-indigo-700 text-zinc-700"
            target="_blank"
            href={"https://twitter.com/YasserElnajjar4"}
          >
            <FaTwitter />
          </Link>
          <Link
            title="Facebook"
            className="dark:text-white/75 dark:hover:text-indigo-700 hover:text-indigo-700 text-zinc-700"
            target="_blank"
            href={"https://www.facebook.com/yasseralnajjar23"}
          >
            <FaFacebook />
          </Link>
          <Link
            title="Linkedin"
            className="dark:text-white/75 dark:hover:text-indigo-700 hover:text-indigo-700 text-zinc-700"
            target="_blank"
            href={"https://www.linkedin.com/in/yasser-alnajjar-643a77225/"}
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </nav>
  );
}
