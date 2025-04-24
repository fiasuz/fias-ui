import type { Metadata } from "next";
import "./globals.css";
import { golosText } from "@/shared/config/fonts";
import { ThemeProvider } from "@/shared/config/theme-provider";
import Footer from "@/widgets/footer";
import { PRODUCT_INFO } from "@/shared/constants/data";

export const metadata: Metadata = {
  title: PRODUCT_INFO.name,
  description: PRODUCT_INFO.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${golosText.variable} antialiased`}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
