import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickTranslator - Generate a QRcode for your text",
  description: "Quickly create Qrcode's for your texts",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='flex flex-row justify-between items-center mx-7 my-7 bg-slate-800 rounded h-20 p-5'>
            <div className='flex justify-between'>
                <Image
                    alt='quicktranslator-logo'
                    src={''}
                />
                <h1 className='text-white font-bold'>QuickTranslator</h1>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <Image 
                    alt='github-logo'
                    src={''}
                />
            </div>
        </nav>        
        {children}
      </body>
    </html>
  );
}
