import type { Metadata } from "next";
import { Roboto, Permanent_Marker } from "next/font/google";
import "./globals.css";
import "@repo/ui/styles.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-roboto",
});

const permanent_marker = Permanent_Marker({
  weight: ["400"],
  variable: "--font-permanent-marker",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Gabriel Menezes",
    default: "Digital Garden",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${roboto.className}`} lang="pt">
      <body className="bg-slate-900 text-white antialiased">{children}</body>
    </html>
  );
}
