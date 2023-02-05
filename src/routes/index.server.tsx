import { Layout } from '../components/index.server';
import { Header, Available, Why, Products, Knives, Location } from '../containers';
import { NewsLetter } from '../components/index';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Available />
      <Why />
      <Products />
      <Knives />
      <NewsLetter />
      <Location />
    </Layout>
  );
}
