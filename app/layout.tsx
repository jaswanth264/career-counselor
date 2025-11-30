import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { ToastProvider } from "@/components/providers/ToastProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import MuiRegistry from "@/components/providers/MuiRegistry"; // ✅ Added MuiRegistry import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "career-counselor",
  description: "Your Personal Career Guidance Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <MuiRegistry> {/* ✅ Wrap everything with MuiRegistry to provide MUI SSR + emotion styling */}
            <AuthProvider>
              <ToastProvider />
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </AuthProvider>
          </MuiRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
