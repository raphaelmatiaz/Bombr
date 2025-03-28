import type { Metadata } from "next";
import "./globals.css";
import '@fontsource-variable/inter';
import SessionWrapper from "../components/Auth/SessionWrapper";


export const metadata: Metadata = {
  title: "Bombr - Drop Memes, Not Boredom",
  description: "Bombr is the social platform where you can only post on your friends' profiles—no take-backs, only clap-backs! Share memes, gifs, and chaos in the spirit of friendly trolling.",
  keywords: "social media, memes, trolling, fun, gifs, social platform, pranks, friends, profile bombing, banter, humor, online community, online trolling, social media war",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en" suppressHydrationWarning>
        <body className={`font-inter antialiased`}>
          <SessionWrapper>
            {children}
          </SessionWrapper>
        </body>
      </html>
  );
}
