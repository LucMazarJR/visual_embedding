import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/layout/footer";
import Header from "./_components/layout/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sentence Space",
  description: "", // Adicionar descrição depois
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
