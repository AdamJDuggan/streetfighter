// Next
import type { Metadata } from "next";
// Styles
import "./globals.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Street Fighter Data",
  description: "Data analytics ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.page}>{children}</body>
    </html>
  );
}
