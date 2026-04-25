import ScrollToTop from "@/components/Helper/ScrollToTop";
import Provider from "@/components/Hoc/Provider";
import Footer from "@/components/Home/Footer/Footer";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raina Disa Wibowo",
  description: "Portofolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Provider>
          <ResponsiveNavbar />
          {children}
          <Footer />
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}
