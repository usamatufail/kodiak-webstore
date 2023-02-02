import { Layout, Banner } from '../components/index.server';
import { NewsLetter } from '../components/index';
import { Benefits, Types } from '../containers/index.server';

export default function HuntingKnives() {
  return (
    <>
      <Layout>
        <Banner heading="Hunting Knives" backgroundImg="/images/banner/hunting-knives.png" />
        <Types />
        <Benefits />
        <NewsLetter />
      </Layout>
    </>
  );
}
