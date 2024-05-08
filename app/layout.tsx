import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js course",
  description: "Writing my nextjs application",
  openGraph: {
    //for social media info
    siteName: "Course",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />

        <main className="py-20 max-w-6xl mx-auto">
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
