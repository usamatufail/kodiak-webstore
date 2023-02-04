import { Layout } from '../../components/layout.server';
import { Banner, NewsLetter } from '../../components';
import { ShopCards } from '../../containers';

export default function Blades() {
  return (
    <Layout>
      <Banner
        backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/v1675502599/kodiak/Shop/Blades/DSC02107_j3kigv.webp"
        heading="Shop Blades"
      />
      <ShopCards />
      <NewsLetter image="https://res.cloudinary.com/samtufail726/image/upload/v1675502514/kodiak/Shop/Blades/DSC02049_su22rn.webp" />
    </Layout>
  );
}
