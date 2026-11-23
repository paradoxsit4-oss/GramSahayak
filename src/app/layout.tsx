
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GramSahayak | Smart Panchayat Assistance",
  description:
    "AI-powered Gram Panchayat complaint management and citizen assistance platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
