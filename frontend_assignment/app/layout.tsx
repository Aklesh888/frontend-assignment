"use client";
/**
 * RootLayout is a higher-order component that serves as the main layout for the application.
 * It wraps the content with global styles, font, and sets up react-query client.
 * The layout includes a header with links to home and cart pages.
 */

import "./globals.css";
import { Inter } from "next/font/google";
import { ShoppingCart, ShoppingBag, Search } from "react-feather";
import { QueryClient, QueryClientProvider } from "react-query";
import Link from "next/link";
import CartContextProvider from "./context/ShopContext";

const inter = Inter({ subsets: ["latin"] });


// RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient(); // Create a new react-query client

  return (
    <html lang="en">
      <head>
        <title>Online Store</title>
      </head>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <CartContextProvider>
            <div className="flex justify-between py-5 bg-zinc-700 border-b lg:px-36 px-4 max-h-[96px]">
              <div className="flex items-center">
                <ShoppingCart size={40} className="m-2" />
                <Link
                  href="/"
                  className="md:text-3xl text-2xl text-center h-[30px] font-semibold"
                >
                  Online Store
                </Link>
              </div>
              <div className="flex items-center space-x-5">
                <Link
                  href="/cart"
                  className="md:text-3xl text-2xl text-center h-[30px] font-semibold"
                >
                  <ShoppingBag size={40} classname="m-2" />
                </Link>
                <Link
                  href="/search"
                  className="md:text-3xl text-2xl text-center h-[30px] font-semibold"
                >
                  <Search size={40} classname="m-2" />
                </Link>
              </div>
            </div>
            {children}
          </CartContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
