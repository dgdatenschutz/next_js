"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

interface ClientProviderProps {
  children: ReactNode;
  messages: any;
  locale: string;
}

export default function ClientProvider({
  children,
  messages,
  locale,
}: ClientProviderProps) {
  return (
    <Provider store={store}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        {children}
      </NextIntlClientProvider>
    </Provider>
  );
}
