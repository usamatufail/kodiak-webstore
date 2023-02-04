import { Layout } from '../../components/layout.server';
import { Banner, NewsLetter } from '../../components/index';
import { ShopCards } from '../../containers';

export default function SHopAll() {
  return (
    <Layout>
      <Banner backgroundImg="/images/shop-all/shop-banner.png" heading="Blades And Gears" />
      <ShopCards />
      <NewsLetter />
    </Layout>
  );
}
