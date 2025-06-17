import type { ReactNode } from "react";
import "@/styles/global.css";
import { Sora } from "next/font/google";
import Header from "@/components/Header";
import FooterComp from "@/components/Footer";

export const metadata = {
  title: "Eddigi",
  description: "Change your Journey with us!"
};

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose what you need
  display: "swap",
  variable: "--font-sora"
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={sora.variable}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        
        <main className="flex-1  w-full overflow-x-hidden">
          <Header />
          {children}
        </main>

        {/* <Footer /> */}
        <FooterComp />
      </body>
    </html>
  );
}
