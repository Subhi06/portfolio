import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/site/Navbar";
import Footer from "../components/site/Footer";
import PageTransition from "../components/site/PageTransition";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta"
});

export const metadata = {
  title: "Jawanexis | Premium Digital Agency",
  description: "Modern premium digital agency website built with Next.js 14"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakarta.variable}>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
