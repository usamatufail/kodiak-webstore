import { Navbar } from "./navbar.client";
import { Footer } from "./footer.client";
import { useSession } from "@shopify/hydrogen";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { customerAccessToken } = useSession();

  return (
    <main>
      <Navbar customerAccessToken={customerAccessToken} />
      {children}
      <Footer />
    </main>
  );
};
