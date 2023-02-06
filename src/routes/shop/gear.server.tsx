import { Layout } from '../../components/layout.server';
import { Banner, NewsLetter } from '../../components/index';
import { ShopCards } from '../../containers/index';
import { useShopQuery } from '@shopify/hydrogen';
import { SHOP_QUERY } from '~/lib/queries';

export default function Gear() {
  const {
    data: { collection },
  } = useShopQuery({
    query: SHOP_QUERY,
    variables: {
      handle: 'gear',
    },
  }) as any;
  return (
    <Layout>
      <Banner
        backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/q_auto/v1675651521/kodiak/Shop/Gear/Group_1001_c2mhp9.png"
        heading={`Shop ${collection?.title}`}
      />
      <ShopCards data={collection?.products} />
      <NewsLetter image="https://res.cloudinary.com/samtufail726/image/upload/q_auto/v1675502195/kodiak/Shop/Gear/DSC02440_cip5jv.png" />
    </Layout>
  );
}
