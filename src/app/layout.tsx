import { ReactNode } from "react";
import { Roboto } from "next/font/google";
import Header from "@/components/widgets/organisms/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

import "./globals.css";

export const metadata = {
  title: "ig.news",
  description: "Newsletter",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex flex-col min-h-screen`}>
        <Header />
        <div className="bg-ignews-gray-background flex-1 text-ignews-gray-text">
          {children}
        </div>
      </body>
    </html>
  );
}
