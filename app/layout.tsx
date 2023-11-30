import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import meta from "@data/meta";

import "@fortawesome/fontawesome-svg-core/styles.css";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
