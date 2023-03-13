import { ProductCare, Social } from "../containers";
import { Layout } from "../components/index.server";

export default function ProductCarePage() {
  return (
    <Layout>
      <ProductCare />
      <Social />
    </Layout>
  );
}
