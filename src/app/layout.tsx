import type { Metadata } from "next";
import { Inter, Geist_Mono, Permanent_Marker } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunil Sakri — Product Manager, Supply Chain & Fulfillment",
  description:
    "I build supply chain systems that move goods more efficiently at scale. Product Manager at Tesco Technology, Bengaluru.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${permanentMarker.variable} h-full antialiased`}
    >
      <body className="bg-dots text-neutral-900 min-h-full flex flex-col">{children}</body>
    </html>
  );
}
