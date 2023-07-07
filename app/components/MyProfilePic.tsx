import Image from "next/image";

export default function MyProfilePic() {
  return (
    <div className="w-full mx-auto">
      <Image
        className="border-4 w-52 h-52 transition border-zinc-600 hover:border-indigo-700 dark:border-slate-400 drop-shadow shadow-zinc-700 rounded-full mx-auto mt-8"
        src={"/images/profile_pic.jpg"}
        alt="Yasser"
        width={200}
        height={200}
        priority={true}
      />
    </div>
  );
}
