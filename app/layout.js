import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Trekkers - Adventure Gear Rentals",
  description: "Quality outdoor equipment rentals for your adventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  );
}
