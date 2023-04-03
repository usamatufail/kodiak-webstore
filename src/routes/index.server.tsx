import { Layout } from "../components/index.server";
import {
  Header,
  Products,
  Location,
  Fundamentals,
  Categories,
} from "../containers";
import { NewsLetter } from "../components/index";
import { gql, useLocalization, useShopQuery } from "@shopify/hydrogen";
import { SHOP_QUERY } from "~/lib/queries";
import { Discount } from "~/components/discount.client";
import { Product } from "~/containers/home/product.client";
import { MEDIA_FRAGMENT } from "~/lib";

const AdventureBox = (
  <div>
    <h2 className="font-bold mb-[10px] text-[#af810e]">BOX INCLUDES</h2>
    <div className="flex flex-col gap-[10px]">
      <div className="flex items-start gap-[10px]">
        <div>
          <span className="text-[#af810e]">▪</span>
        </div>
        <div>
          <b>A Knife of your choice</b>&nbsp;The Tongass, The Kenai, or The
          LeContee. Each blade is handmade with 100% accuracy and sharpness.
        </div>
      </div>
      <div className="flex items-start gap-[10px]">
        <div>
          <span className="text-[#af810e]">▪</span>
        </div>
        <div>
          <b>Sharpening Stone</b>&nbsp;A Sharp blade is safer than dull one.
        </div>
      </div>
      <div className="flex items-start gap-[10px]">
        <div>
          <span className="text-[#af810e]">▪</span>
        </div>
        <div>
          <b>Cleaning Kit</b>&nbsp;The ultimate rust prevention solution.
        </div>
      </div>
      <div className="flex items-start gap-[10px]">
        <div>
          <span className="text-[#af810e]">▪</span>
        </div>
        <div>
          <b>A Kodiak Box</b>&nbsp;An elaborate craftsmanship box includes
          everything you need for a successfull adventure.
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  const {
    data: { collection },
  } = useShopQuery({
    query: SHOP_QUERY,
    variables: {
      handle: "all",
    },
  }) as any;

  const {
    language: { isoCode: languageCode },
    country: { isoCode: countryCode },
  } = useLocalization();
  const {
    data: { product },
  } = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      country: countryCode,
      language: languageCode,
      handle: "kodiak-adventure-box",
    },
    preload: true,
  }) as any;
  const knife = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      country: countryCode,
      language: languageCode,
      handle: "the-kenai",
    },
    preload: true,
  }) as any;
  const stone = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      country: countryCode,
      language: languageCode,
      handle: "sharpening-stone",
    },
    preload: true,
  }) as any;
  const cleaning = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      country: countryCode,
      language: languageCode,
      handle: "cleaning-kit",
    },
    preload: true,
  }) as any;

  return (
    <Layout>
      {/* <Discount /> */}
      <Header />
      {product ? (
        <Product product={product} description={AdventureBox} isBackground />
      ) : (
        <></>
      )}
      {knife?.data?.product ? (
        <Product product={knife?.data?.product} description={AdventureBox} />
      ) : (
        <></>
      )}
      {stone?.data?.product ? (
        <Product
          product={stone?.data?.product}
          description={AdventureBox}
          isBackground
        />
      ) : (
        <></>
      )}
      {cleaning ? (
        <Product product={cleaning?.data?.product} description={AdventureBox} />
      ) : (
        <></>
      )}

      {/* <Fundamentals /> */}
      {/* <Knives /> */}
      <Categories />
      <Products collection={collection} />
      <NewsLetter />
      <Location />
    </Layout>
  );
}

const PRODUCT_QUERY = gql`
  ${MEDIA_FRAGMENT}
  query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      vendor
      descriptionHtml
      media(first: 1) {
        nodes {
          ...Media
        }
      }
      productType
      variants(first: 100) {
        nodes {
          id
          availableForSale
          selectedOptions {
            name
            value
          }
          image {
            id
            url
            altText
            width
            height
          }
          priceV2 {
            amount
            currencyCode
          }
          compareAtPriceV2 {
            amount
            currencyCode
          }
          sku
          title
          unitPrice {
            amount
            currencyCode
          }
        }
      }
      seo {
        description
        title
      }
    }
    shop {
      shippingPolicy {
        body
        handle
      }
      refundPolicy {
        body
        handle
      }
    }
  }
`;
