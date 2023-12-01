import type { Metadata } from "next";
import { Saira } from "next/font/google";

import meta from "@data/meta";

import "@fortawesome/fontawesome-svg-core/styles.css";

import "./globals.css";

// fonts
const font = Saira({ subsets: ["latin"] });

// meta
export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
