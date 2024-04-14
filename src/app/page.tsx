import Image from "next/image";

export default function Home() {
  return (
    <main className="text-slate-50 flex min-h-screen flex-col items-start justify-between mx-7 my-10">
      <div className="flex flex-row justify-between my-9">

          <div className="flex flex-col items-start gap-2">
            <p className="text-slate-100 font-semibold flex items-start">your generated qrcode
            </p>

            <div className="flex flex-col gap-8 bg-slate-800 w-80 h-80 rounded-md">

            </div>

            <div className="flex flex-row justify-between gap-5 items-start">

            </div>

          </div>
          <div className="flex flex-col items-start gap-12">

          </div>
      </div>
    </main>
  );
}
