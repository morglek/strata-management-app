// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Strata Management System",
  description: "Manage your strata-titled apartment building with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header style={{ padding: "1rem", background: "#f5f5f5" }}>
          <nav>
            <ul
              style={{
                display: "flex",
                gap: "1rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/notifications">Notifications</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/committee">Committee Info</Link>
              </li>
              <li>
                <Link href="/strata-requests">Strata Requests</Link>
              </li>
              <li>
                <a href="/info.html" target="_blank" rel="noopener noreferrer">
                  Info (HTML)
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
