import { Layout } from "../components/index.server";
import {} from "../containers";

import { useShopQuery } from "@shopify/hydrogen";
import { SHOP_QUERY } from "~/lib/queries";
import { Discount } from "~/components/discount.client";

export default function Home() {
  const {
    data: { collection },
  } = useShopQuery({
    query: SHOP_QUERY,
    variables: {
      handle: "all",
    },
  }) as any;

  return (
    <Layout>
      <Discount />

      {/* <Products collection={collection} /> */}
    </Layout>
  );
}
