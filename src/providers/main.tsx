import type { ReactNode } from 'react';
import QueryProvider from './react-query/QueryProvider';

interface Props {
  children: ReactNode;
}

const MainProvider = ({ children }: Props) => {
  return (
    <>
      <QueryProvider>{children}</QueryProvider>
    </>
  );
};

export default MainProvider;
