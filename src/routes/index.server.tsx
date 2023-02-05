import { Layout } from '../components/index.server';
import { Header, Available, Why, Products, Knives, Location } from '../containers';
import { NewsLetter } from '../components/index';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
};

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
