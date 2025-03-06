import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Roboto_Mono } from "next/font/google";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Denis Silva",
  description: "Denis Silva portifolio ",
};
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700", "800", "900", "500", "300"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-secondary text-black`}>
        <nav className="absolute py-5 flex justify-around w-full">
          <p>Home</p>
          <Link href="#projects">Projects</Link>
          <Link href="#contacts">Contacts</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
