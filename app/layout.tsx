import type { Metadata } from "next";
import { Noto_Sans_KR, Roboto_Flex } from "next/font/google";
import "./globals.css";
import { Header } from "./layout/index";
import { CustomCursor } from "@/components/CustomCursor";
import { store } from "@/state/store";
import { Providers } from "@/state/provider";
const kr = Noto_Sans_KR({
  preload: false,
  display: "swap",
  variable: "--font-noto-sans-kr",
});
const en = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
});
export const metadata: Metadata = {
  title: "DefaultNone",
  description: "Generated by default-none",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${kr.variable} ${en.variable} scroll`}>
      <body>
        <Providers>
          <Header></Header>
          {children}
          <footer></footer>
          <CustomCursor />
        </Providers>
      </body>
    </html>
  );
}
