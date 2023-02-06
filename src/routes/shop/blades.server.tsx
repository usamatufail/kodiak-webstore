import { Layout } from '../../components/layout.server';
import { Banner, NewsLetter } from '../../components';
import { ShopCards } from '../../containers';
import { useShopQuery } from '@shopify/hydrogen';
import { SHOP_QUERY } from '~/lib/queries';

export default function Blades() {
  const {
    data: { collection },
  } = useShopQuery({
    query: SHOP_QUERY,
    variables: {
      handle: 'blades',
    },
  }) as any;
  return (
    <Layout>
      <Banner
        backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/v1675502599/kodiak/Shop/Blades/DSC02107_j3kigv.webp"
        heading={`Shop ${collection?.title}`}
      />
      <ShopCards data={collection?.products} />
      <NewsLetter image="https://res.cloudinary.com/samtufail726/image/upload/v1675502514/kodiak/Shop/Blades/DSC02049_su22rn.webp" />
    </Layout>
  );
}
