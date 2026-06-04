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
    "Indian agricultural commodity exporter and domestic and global logistics partner, specializing in peanut candy, red onions, peanuts, mangoes, and freight coordination.",
  keywords: [
    "India agro export",
    "red onion export India",
    "mango exporter India",
    "peanut exporter India",
    "chikki export India",
    "peanut candy exporter India",
    "domestic shipping India",
    "international logistics India",
    "VVJ International",
  ],
  openGraph: {
    title: "VVJ International & Logistics",
    description: "Agricultural commodity exports, peanut candy expertise, and domestic and global logistics from India.",
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
              background: "#0F172A",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#FFFFFF",
            },
          }}
        />
      </body>
    </html>
  );
}
