import { Layout } from '../../components/layout.server';
import { Banner, NewsLetter } from '../../components/index';
import { ShopCards } from '../../containers';

export default function SHopAll() {
  return (
    <Layout>
      <Banner
        backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/v1675500694/kodiak/Shop/All/DSC02256_x8g256.webp"
        heading="Shop All"
      />
      <ShopCards />
      <NewsLetter />
    </Layout>
  );
}
