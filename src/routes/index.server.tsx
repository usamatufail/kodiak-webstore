import { Layout } from '../components/index.server';
import { Header, Available, Why, Products, Knives, NewsLetter, Location } from '../containers';

export default function Home() {
  return (
    <Layout>
      {/* TODO: Un-comment */}
      <Header />
      <Available />
      <Why />
      {/* <Products /> */}
      <Knives />
      {/* <NewsLetter /> */}
      {/* <Location />  */}
    </Layout>
  );
}
