import type { Metadata } from "next";
import "./globals.css";
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
