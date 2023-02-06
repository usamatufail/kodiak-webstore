import { useShopQuery } from '@shopify/hydrogen';
import { Layout } from '../../components/layout.server';
import { Banner, NewsLetter } from '../../components/index';
import { ShopCards } from '../../containers';
import { SHOP_QUERY } from '../../lib/queries';

export default function ShopAll() {
  const {
    data: { collection },
  } = useShopQuery({
    query: SHOP_QUERY,
    variables: {
      handle: 'all',
    },
  }) as any;

  return (
    <Layout>
      <Banner
        backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/v1675500694/kodiak/Shop/All/DSC02256_x8g256.webp"
        heading={`Shop ${collection?.title}`}
      />
      <ShopCards data={collection?.products} />
      <NewsLetter />
    </Layout>
  );
}
