import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VVJ International & Logistics",
    template: "%s | VVJ International",
  },
  description:
    "Premium agricultural export house — onions, peanuts, peanut candy and mangoes from India to the world. By the Crew of Jeyaraj.",
  keywords: ["India agro export", "onion export", "mango export India", "peanut export", "VVJ International"],
  openGraph: {
    title: "VVJ International & Logistics",
    description: "Premium agricultural exports from India to the world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#112318",
              border: "1px solid rgba(82,183,136,0.3)",
              color: "#F0F7F2",
            },
          }}
        />
      </body>
    </html>
  );
}