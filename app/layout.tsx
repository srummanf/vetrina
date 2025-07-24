import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientWrapper from "@/components/ClientWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "𝘴𝘳𝘶𝘮𝘮𝘢𝘯𝘧'𝘴 𝘷𝘦𝘵𝘳𝘪𝘯𝘢", // Italic Unicode - Use https://lingojam.com/ItalicTextGenerator
  description: "Tra bit e silenzi, l’anima cerca forma nel vuoto digitale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-CabinetGrotesk_Light bg-[#0d0e0e] overflow-x-hidden min-w-screen`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}