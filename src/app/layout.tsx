import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs";
import { frFR } from "@clerk/localizations";

const inter = Inter({ subsets: ["latin"] });
const frontServerUrl = process.env.Front_SERVER_URL || "http://localhost:3000/";
const ClerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "";
export const metadata: Metadata = {
  metadataBase: new URL(frontServerUrl),
  title: "SynchroÉtudes",
  description: "Connectez-vous et synchronisez vos cours avec SynchroÉtudes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <ClerkProvider
        localization={frFR}
        appearance={{
          variables: {
            fontFamily: "Raleway",
            colorPrimary: "#4C82D0",
            colorDanger: "#C54141",
          },
        }}
        key={ClerkKey}
      >
        <body className={inter.className}>
          <ClerkLoaded>{children}</ClerkLoaded>
        </body>
      </ClerkProvider>
    </html>
  );
}
