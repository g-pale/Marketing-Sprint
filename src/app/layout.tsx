import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { LanguageProviderWrapper } from "@/components/LanguageProviderWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Marketing Sprint",
  description: "Marketing Sprint landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} font-sans antialiased bg-black text-white`}
      >
        <LanguageProviderWrapper>{children}</LanguageProviderWrapper>
      </body>
    </html>
  );
}
