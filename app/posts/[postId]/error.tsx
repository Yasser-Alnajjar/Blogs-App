"use client"; // Error components must be Client components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="dark:bg-zinc-900 dark:text-white bg-slate-200 mx-auto max-w-lg py-1 px-4 min-h-screen flex flex-col justify-center items-center">
      <h2 className="my-4 text-2xl text-red-500 font-bold">
        Something went wrong! ⚠️
      </h2>
      <button
        className="mb-4 p-4 bg-red-500 text-white rounded-xl"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <p className="text-xl">
        Or go back to{" "}
        <Link href="/" className="underline dark:text-white">
          Home 🏠
        </Link>
      </p>
    </main>
  );
}
