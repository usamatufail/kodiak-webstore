import { Layout } from '../components/index.server';
import { Header, Available, Why, Products } from '../containers';

export default function Home() {
  return (
    <Layout>
      <div className="mb-[60px]">
        <Header />
        <Available />
        <Why />
        <Products />
      </div>
    </Layout>
  );
}
