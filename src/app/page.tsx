import Profile from "@/components/Profile";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>THE APP 2</h1>
      <Link href={process.env.NEXT_PUBLIC_MAIN as string}> Go to Main App</Link>
      <Link href="/detail">go to detail app 2</Link>
      <a href="/app-1/home">Go to app 1</a>
      <Profile/>
    </div>
  );
}
