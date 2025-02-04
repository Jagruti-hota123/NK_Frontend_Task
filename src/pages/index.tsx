import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Section, Sidebar } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex h-full bg-black">
      <Sidebar />
      <div className="flex-1">
        <Section />
      </div>
     
    </div>
  
  );
}
