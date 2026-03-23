import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/layout/footer";
import Header from "./_components/layout/header";
import { LanguageProvider } from "./_contexts/language-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sentence Space",
  description:
    "Visualize a proximidade semantica entre frases em 2D usando embeddings do Gemini e reducao com UMAP.",
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
        <LanguageProvider>
          <Header />
          <main className="flex w-full flex-1 flex-col">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
