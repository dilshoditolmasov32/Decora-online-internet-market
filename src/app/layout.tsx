import type { Metadata } from "next";
import { Footer, Header } from "@/components";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Decora",
  description: "asboblar va qurilish materiallarini arzon narxlarda xarid qiling. Tez yetkazib berish Toshkent bo'ylab.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-Fira Sans">
        <header>
          <Header />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>

        <ToastContainer />
      </body>
    </html>
  );
}
