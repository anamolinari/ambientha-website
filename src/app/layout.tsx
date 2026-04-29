import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Ambientha Decorações",
  description: "Referência e bom gosto para ambientes encantadores.",
  openGraph: {
    title: "Ambientha Decorações",
    description: "Referência e bom gosto para ambientes encantadores.",
    url: "https://ambientha.com.br",
    siteName: "Ambientha",
    images: [
      {
        url: "https://ambientha.com.br/images/open-graph-logo.png",
        width: 1200,
        height: 1200,
        alt: "Ambientha Decorações",
      },
      {
        url: "https://ambientha.com.br/images/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Ambientha Decorações",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
