import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";

import meta from "@data/meta";

import "@fortawesome/fontawesome-svg-core/styles.css";

import "./globals.css";

const exo2 = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={exo2.className}>{children}</body>
    </html>
  );
}
