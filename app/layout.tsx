import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hawkreturn.com"),
  title: {
    default: "HawkReturn - Never miss a return window again | Automatic return deadline reminders",
    template: "%s | HawkReturn",
  },
  description:
    "HawkReturn connects to your Gmail, automatically finds every order confirmation, and emails you before each return deadline expires. Stop losing money to missed return windows. Free during beta.",
  keywords: [
    "return deadline reminder",
    "never miss a return window",
    "return window tracker",
    "online shopping returns",
    "gmail return reminders",
    "refund reminder app",
  ],
  openGraph: {
    type: "website",
    title: "HawkReturn - Never miss a return window again",
    description:
      "Connect Gmail once. HawkReturn finds your return deadlines and reminds you before they expire - automatically.",
    url: "https://www.hawkreturn.com",
    siteName: "HawkReturn",
    images: ["/logo-icon.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo-icon.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
        <Analytics />
      </body>
    </html>
  );
}
