import type { ReactNode } from "react";
import QueryProvider from "./react-query/QueryProvider";
import { ThemeProvider } from "@/providers/theme/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const MainProvider = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <QueryProvider>
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      </QueryProvider>
    </BrowserRouter>
  );
};

export default MainProvider;
