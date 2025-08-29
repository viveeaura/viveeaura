import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";
import BackToTopButton from "@/components/backToTopButton";
import { ToastProvider } from "@/context/toastContext";
import { Suspense } from "react";

export const metadata = {
  title: "Vivee Aura | Luxury Service Apartments in Lagos – Book Your Stay Today",
  description: "Experience premium comfort at Vivee Aura, a luxury service apartment in Lagos. Enjoy 24/7 power, security, modern amenities, and seamless booking for short or long stays.",
  keywords: "Vivee Aura, service apartment Lagos, short let apartments Lagos, luxury apartments Lagos, temporary housing, Airbnb Lagos, holiday apartment, corporate apartment Lagos",
  openGraph: {
    title: "Vivee Aura | Luxury Service Apartments in Lagos",
    description: "Book your stay at Vivee Aura, Lagos' top choice for short-let luxury service apartments with premium amenities.",
    url: "https://www.viveeaura.com",
    siteName: "Vivee Aura Service Apartment",
    images: [
      {
        url: "https://www.viveeaura.com/preview.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Vivee Aura",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // Standard favicon
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // For iOS
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="icons/favicon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="icons/favicon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="icons/favicon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="icons/favicon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="icons/favicon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="icons/favicon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="icons/favicon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="icons/favicon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="icons/favicon-180x180.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="icons/favicon-192x192.png" />
        <link rel="shortcut icon" type="image/x-icon" href="icons/favicon-310x310.png" />
        <link rel="icon" type="image/x-icon" href="icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="icons/favicon-144x144.png" />
        <meta name="msapplication-config" content="icons/browserconfig.xml" />
      </head>
      <body>
        <Navbar />
        <ToastProvider>
          <Suspense>
            {children}
          </Suspense>
        </ToastProvider>
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
