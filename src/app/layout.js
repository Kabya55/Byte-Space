import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ByteSpaceNavbar from "@/component/NavBar";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://byte-space-beryl.vercel.app"),
  title: {
    default: "ByteSpace",
    template: "%s | ByteSpace",
  },
  description:
    "ByteSpace - Unlock your creativity, gain valuable knowledge, and grow your career with our wide range of courses.",
  icons: {
    icon: [
      { url: "/logo.png", href: "/logo.png" },
      { url: "/favicon.ico", href: "/favicon.ico" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "ByteSpace - Discover Your Passion, Build Your Skills",
    description:
      "A platform for learning and sharing knowledge with hundreds of high-quality courses.",
    siteName: "ByteSpace",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "ByteSpace Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ByteSpaceNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
