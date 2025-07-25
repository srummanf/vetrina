import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientWrapper from "@/components/ClientWrapper";
import "./globals.css";

// Italic Unicode - Use https://lingojam.com/ItalicTextGenerator


export const metadata: Metadata = {
  title: "𝘴𝘳𝘶𝘮𝘮𝘢𝘯𝘧'𝘴 𝘷𝘦𝘵𝘳𝘪𝘯𝘢",
  description:
    "srummanf | Developer ✦ Bard ✦ Selenophile. Enter the vetrina.",
  metadataBase: new URL("https://srummanf.vercel.app"), // change this to your actual domain
  keywords: [
    "srummanf",
    "developer",
    "Shaikh Rumman Fardeen",
  ],
  authors: [{ name: "srummanf" }],
  creator: "srummanf",
  publisher: "srummanf",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/static/favicons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://srummanf.vercel.app",
    siteName: "srummanf's vetrina",
    title: "srummanf's vetrina — Code. Verse. Vibe.",
    description:
      "srummanf | Developer ✦ Bard ✦ Selenophile. Enter the vetrina.",
    images: [
      {
        url: "/images/opengraph-cover.png", // ⬅️ You need to create this image
        width: 1200,
        height: 630,
        alt: "srummanf | Developer ✦ Bard ✦ Selenophile. Enter the vetrina.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "srummanf | Developer ✦ Bard ✦ Selenophile. Enter the vetrina.",
    description:
      "srummanf | Developer ✦ Bard ✦ Selenophile. Enter the vetrina.",
    images: ["/images/opengraph-cover.png"], // ⬅️ Create this too
    creator: "@srummanf", // use your actual Twitter/X handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ddbb90" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  // verification: {
  //   google: "YOUR-GOOGLE-VERIFICATION-CODE", // Add if you're using Search Console
  // },
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