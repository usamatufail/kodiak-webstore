import { Layout } from '../../components/layout.server';
import { Banner, NewsLetter } from '../../components/index';
import { ShopCards } from '../../containers/index';

export default function Gear() {
  return (
    <Layout>
      <Banner
        backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/f_auto,q_auto/v1675508249/kodiak/Shop/Gear/Group_991_ddc9np.webp"
        heading="Shop Gear"
      />
      <ShopCards />
      <NewsLetter image="https://res.cloudinary.com/samtufail726/image/upload/f_auto,q_auto/v1675502195/kodiak/Shop/Gear/DSC02440_cip5jv.webp" />
    </Layout>
  );
}
