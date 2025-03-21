import type { Metadata } from "next";
import "./globals.css";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const metadata: Metadata = {
  title: "TrackGuard",
  description: "Prevenção sempre em primeiro lugar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-900">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto p-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 