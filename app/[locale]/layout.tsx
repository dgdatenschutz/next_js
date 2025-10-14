import type { Metadata } from "next";
import { Hind } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ClientProvider from "./ClientProvider";
import { getMessages } from "next-intl/server";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GCB WEBSITE",
  icons: {
    icon: "/gcb-logo.svg",
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <body className={hind.className}>
        <ClientProvider messages={messages} locale={locale}>
          <Header />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
