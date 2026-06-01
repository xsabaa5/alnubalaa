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
  title: "مؤسسة النبلاء الاهلية · Al-Nubalaa Private School",
  description:
    "مؤسسة النبلاء الاهلية في الكرادة، بغداد. حضانة، تحضيري، روضة، تمهيدي وابتدائية — لحظات مليانة فرح، تعلم وضحكات بريئة.",
  keywords: [
    "Alnubalaa",
    "مؤسسة النبلاء الاهلية",
    "مدرسة خاصة بغداد",
    "Private School Baghdad",
    "Karrada School",
    "حضانة بغداد",
    "روضة الكرادة",
  ],
  openGraph: {
    title: "مؤسسة النبلاء الاهلية — Alnubalaa Private School",
    description:
      "حضانة • تحضيري • روضة • تمهيدي • ابتدائية — الكرادة، بغداد",
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
