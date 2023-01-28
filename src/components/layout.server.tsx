import { Navbar } from './navbar.server';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};
