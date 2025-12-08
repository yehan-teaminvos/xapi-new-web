import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Chat from "@/components/chat-with-ai";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CookieConsent from "@/components/cookie-consent";

const artegraSansMedium = localFont({
  src: "../assets/fonts/artegra-sans-alt-medium.woff",
  variable: "--font-artegra-sans-alt-medium",
});

const artegraSansSemiBold = localFont({
  src: "../assets/fonts/artegra-sans-alt-semibold.woff",
  variable: "--font-artegra-sans-alt-semibold",
});

const helvetica = localFont({
  src: "../assets/fonts/helvetica.woff",
  variable: "--font-helvetica",
});

const helveticaBold = localFont({
  src: "../assets/fonts/helvetica-bold.woff",
  variable: "--font-helvetica-bold",
});

const helveticaNeueMedium = localFont({
  src: "../assets/fonts/HelveticaNeueMedium.otf",
  variable: "--font-helvetica-neue-medium",
});

const helveticaNeueRoman = localFont({
  src: "../assets/fonts/HelveticaNeueRoman.otf",
  variable: "--font-helvetica-neue-roman",
});

export const metadata = {
  title: {
    default:
      "Unified Governance Platform | Govern Data, APIs, and AI with Xapi", // used if page has no title
    template: "%s", // page titles override this completely
  },
  description: "Govern Data, APIs, and AI with Xapi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${artegraSansMedium.variable} ${helvetica.variable} ${helveticaBold.variable} ${artegraSansSemiBold.variable} ${helveticaNeueMedium.variable} ${helveticaNeueRoman.variable} antialiased`}
      >
        <Header />
        {children}
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
