import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileNavBar from "@/components/MobileNavBar/MobileNavBar";

const inter = Inter({ subsets: ["latin"] });
const frontServerUrl = process.env.Front_SERVER_URL || "http://localhost:3000/";

export const metadata: Metadata = {
  icons: {
    icon: "/assets/academ.svg",
    apple: "/assets/academ.svg",
  },
  metadataBase: new URL(frontServerUrl),
  title: "synchronisation academical",
  description:
    "Connectez-vous et synchronisez vos cours avec synchronisation academical.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <MobileNavBar />
        {children}
      </body>
    </html>
  );
}
