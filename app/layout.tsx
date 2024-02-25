import "swiper/css";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

import "@/styles/globals.css";

const inter = FontSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white",
          inter.variable
        )}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
