import { AboutUs, Social } from '../containers';
import { Layout } from '../components/index.server';

export default function AboutPage() {
  return (
    <Layout>
      <AboutUs />
      <Social />
    </Layout>
  );
}
