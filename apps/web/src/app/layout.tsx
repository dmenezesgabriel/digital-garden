import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "@repo/ui/styles.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-roboto",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
