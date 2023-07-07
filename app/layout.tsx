import "./globals.css";
import Navbar from "./components/Navbar";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Yasser Blog's",
  description: "Created by Dave Gray",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${open_sans.className} dark:bg-zinc-900 dark:text-white bg-slate-200 text-black`}
      >
        <Navbar />
        <main className="px-4 md:px-6 prose prose-xl dark:text-white text-black mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
