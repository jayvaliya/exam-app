// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@repo/ui/navbar";
import Providers from "./Providers";
import { Inter } from 'next/font/google'
import { getServerSession } from "next-auth";
import nextAuthOptions from "../../../packages/utils/nextAuthOptions";

const session = getServerSession(nextAuthOptions);

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-200 text-black">
        <Navbar session={session} />
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
