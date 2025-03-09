import type { Metadata } from "next";
import "../style/globals.css";

export const metadata: Metadata = {
  title: "Eladó Ingatlanok",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-plus-jakarta-sans">
        {children}
      </body>
    </html>
  );
}