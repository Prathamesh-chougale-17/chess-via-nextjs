import type { Metadata } from "next";
import "./globals.css";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Prathamesh Chess",
  description: "Chess playing board with pieces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
