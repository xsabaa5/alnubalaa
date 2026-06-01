import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Tajawal } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al-Nubalaa Private School",
  description:
    "Al-Nubalaa Private School — حضانة، تحضيري، روضة، تمهيدي وابتدائية. الكرادة، بغداد.",
  keywords: [
    "Al-Nubalaa Private School",
    "Alnubalaa",
    "دار النبلاء",
    "مدرسة خاصة بغداد",
    "Private School Baghdad",
    "Karrada School",
  ],
  openGraph: {
    title: "Al-Nubalaa Private School",
    description: "Al-Nubalaa Private School · Karrada, Baghdad",
    locale: "ar_IQ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${inter.variable} ${cormorant.variable} ${tajawal.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink selection:bg-emerald/20 selection:text-emerald-deep">
        {children}
      </body>
    </html>
  );
}
