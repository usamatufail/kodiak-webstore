import { Layout } from '../../components/layout.server';
import { Banner, NewsLetter } from '../../components';
import { ShopCards } from '../../containers';
import { useShopQuery } from '@shopify/hydrogen';
import { SHOP_QUERY } from '~/lib/queries';

export default function Equipment() {
  const {
    data: { collection },
  } = useShopQuery({
    query: SHOP_QUERY,
    variables: {
      handle: 'equipment',
    },
  }) as any;
  return (
    <Layout>
      <Banner
        backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/f_auto,q_auto/v1675500934/kodiak/Shop/Equipment/DSC03130-Edit-2_y3yhec.webp"
        heading={`Shop ${collection?.title}"`}
      />
      <ShopCards data={collection?.products} />
      <NewsLetter image="https://res.cloudinary.com/samtufail726/image/upload/f_auto,q_auto/v1675501120/kodiak/Shop/Equipment/DSC03145_ytnmdd.webp" />
    </Layout>
  );
}
