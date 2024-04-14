import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-slate-50 flex min-h-screen flex-col items-start justify-between mx-7 my-10">
      <div className="flex flex-row justify-between my-9">

          <div className="flex flex-col items-start gap-2">
            <p className="text-slate-900 font-semibold flex items-start">your generated qrcode
            </p>

            <div className="flex flex-col gap-8 bg-slate-50 border-2 border-slate-200 w-80 h-80 rounded-md">

            </div>

            <div className="flex flex-row justify-between gap-2 items-start">
              <Button asChild className="h-15">
                <Link href={'download'}>Download</Link>
              </Button>
              <Button 
                className="h-15"
              >
                  Share
              </Button>
            </div>

          </div>
          <div className="flex flex-col items-start gap-12">

          </div>
      </div>
    </main>
  );
}
