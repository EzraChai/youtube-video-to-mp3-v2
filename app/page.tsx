import DownloadCard from "@/components/download-card";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-5xl min-h-[80vh] mx-auto ">
      <div className="absolute inset-0 z-[-1]" aria-hidden>
        <div className="absolute top-0  bg-gradient-to-r dark:from-blue-950 from-blue-200 dark:to-purple-950 to-purple-200 z-[-1] h-[10vh] w-[100vw] blur-3xl"></div>
      </div>
      <DownloadCard />
    </main>
  );
}
