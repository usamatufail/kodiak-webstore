import { Layout } from '../../components/layout.server';
import { Banner, NewsLetter } from '../../components';
import { ShopCards } from '../../containers';
import { eqData } from '../../data';

export default function Equipment() {
  return (
    <Layout>
      <Banner
        backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/f_auto,q_auto/v1675500934/kodiak/Shop/Equipment/DSC03130-Edit-2_y3yhec.webp"
        heading="Shop Equipment"
      />
      <ShopCards data={eqData} />
      <NewsLetter image="https://res.cloudinary.com/samtufail726/image/upload/f_auto,q_auto/v1675501120/kodiak/Shop/Equipment/DSC03145_ytnmdd.webp" />
    </Layout>
  );
}
