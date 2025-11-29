import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "הגן של תאיר - משתלה ביתית",
  description: "משתלה בסגנון חווה, מוכרת עציצים, שתילים, צמחי בית וחוץ. המקום משדר טבע, פשטות ויופי. בואו לבקר ולהתחדש בירוק.",
  openGraph: {
    title: "הגן של תאיר - משתלה ביתית",
    description: "משתלה בסגנון חווה, מוכרת עציצים, שתילים, צמחי בית וחוץ. המקום משדר טבע, פשטות ויופי.",
    url: "https://gan-tair.co.il", // Placeholder URL, can be updated later
    siteName: "הגן של תאיר",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "הגן של תאיר - משתלה ביתית",
    description: "משתלה בסגנון חווה, מוכרת עציצים, שתילים, צמחי בית וחוץ.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${heebo.variable} font-sans antialiased bg-olive-50 text-earth-900`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
