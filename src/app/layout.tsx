import type { Metadata } from "next";
import { inter } from "./lib/fonts";
import "./globals.css";
import styles from "./layout.module.sass";
import Navigation from "./ui/navigation/navigation";

export const metadata: Metadata = {
  title: "NextJS Router",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <header className={styles.header}>
          <nav className={styles.header__navigation}>
            <Navigation />
          </nav>
        </header>

        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>2024, copyright by Eduard Mednikov</footer>
      </body>
    </html>
  );
}
