import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import PageLoader from "@/components/LoadingSpinner/PageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DocAppoint | Book Your Doctor",
  description: "Full-stack doctor appointment booking platform",
  icons: {
    icon: "/logo.jpg", // public ফোল্ডারের লোগো পাথ
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full mx-auto max-w-7xl flex flex-col">
        <PageLoader />
        <Navbar />
        {children}
        <Footer />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />

      </body>
    </html>
  );
}


