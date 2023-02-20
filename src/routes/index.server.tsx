import { Layout } from "../components/index.server";
import {
  Header,
  Available,
  Why,
  Products,
  // Knives,
  Location,
} from "../containers";
import { NewsLetter } from "../components/index";
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
      <Header />
      <Available />
      <Why />
      <Products collection={collection} />
      {/* <Knives /> */}
      <NewsLetter />
      <Location />
    </Layout>
  );
}
