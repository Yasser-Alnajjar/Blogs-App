import MyProfilePic from "./components/MyProfilePic";
import Posts from "./components/Posts";
export const revalidate = 86400;
export default function Home() {
  return (
    <div className="flex  flex-col items-center justify-between mt-6">
      <MyProfilePic />
      <div className="text-3xl  text-indigo-600 ">
        Hello i'm <span className="font-bold">Yasser Al-Najjar</span>
        <span className="text-indigo-600">
          <span role="img" aria-label="emoji">
            👋
          </span>
        </span>
      </div>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  );
}
