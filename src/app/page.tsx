import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-950 text-slate-50 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row justify-between">
          <div className="flex flex-col items-start gap-12">1</div>
          <div className="flex flex-col items-start gap-12">2</div>
      </div>
    </main>
  );
}
