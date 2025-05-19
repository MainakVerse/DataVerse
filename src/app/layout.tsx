import type { Metadata } from "next";
import { Orbitron } from "next/font/google"; // Import Orbitron from Google Fonts
import "./globals.css";

// Load Orbitron font
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"], // include required weights
});

export const metadata: Metadata = {
  title: "Dataverse",
  description:
    "Dataverse is a powerful AI-powered Telegram bot platform that helps you create and monetize custom chatbots. Build intelligent Telegram bots that can engage users with natural conversations, automate tasks, and scale your SaaS business effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
