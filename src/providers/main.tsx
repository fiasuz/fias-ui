import type { ReactNode } from 'react';
import QueryProvider from './react-query/QueryProvider';
import { ThemeProvider } from '@/providers/theme/ThemeProvider';

interface Props {
  children: ReactNode;
}

const MainProvider = ({ children }: Props) => {
  return (
    <QueryProvider>
      <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
    </QueryProvider>
  );
};

export default MainProvider;
