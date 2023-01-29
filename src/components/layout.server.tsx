import { Navbar } from './navbar.client';
import { Footer } from './footer.client';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};
