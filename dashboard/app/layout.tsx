import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hyderabad Hotels Sales Dashboard",
  description: "Lead list and contact information for Hyderabad hotels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
