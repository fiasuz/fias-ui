import type { Metadata } from "next";
import "../globals.css";
import { golosText } from "@/shared/config/fonts";
import { ThemeProvider } from "@/shared/config/theme-provider";
import { PRODUCT_INFO } from "@/shared/constants/data";
import {
  AbstractIntlMessages,
  hasLocale,
  IntlErrorCode,
  NextIntlClientProvider,
} from "next-intl";
import { routing } from "@/shared/config/i18n/routing";
import { notFound } from "next/navigation";
import Footer from "@/widgets/footer/ui";
import Navbar from "@/widgets/navbar/ui";

export const metadata: Metadata = {
  title: PRODUCT_INFO.name,
  description: PRODUCT_INFO.description,
  icons: PRODUCT_INFO.favicon,
};

export default async function RootLayout({
  children,
  params,
  messages,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
  messages: AbstractIntlMessages;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${golosText.variable} antialiased`}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          // onError={(err) => {
          //   if (err.code === IntlErrorCode.MISSING_MESSAGE) {
          //     return;
          //   }
          // }}
        >
          <ThemeProvider
            attribute={"class"}
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
