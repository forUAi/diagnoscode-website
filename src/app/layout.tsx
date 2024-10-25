import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Use Montserrat as the primary font
const montserrat = localFont({
  src: "./fonts/Montserrat-Regular.woff2", // Make sure this font file exists in your fonts directory
  variable: "--font-montserrat",
  weight: "400 700", // Adjust based on the font weights available for Montserrat
});

export const metadata: Metadata = {
  title: "DiagnosCode",
  description: "Pioneering AI-Driven Solutions for Healthcare Efficiency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${montserrat.variable} antialiased`} // Apply Montserrat font
      >
        {children}
      </body>
    </html>
  );
}
