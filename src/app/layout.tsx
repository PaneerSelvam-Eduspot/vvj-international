import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

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
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#131313",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#F0E6C8",
            },
          }}
        />
      </body>
    </html>
  );
}
