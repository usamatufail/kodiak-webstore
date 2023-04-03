import { Layout } from "../components/index.server";
import {
  Header,
  Products,
  Location,
  // Fundamentals,
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

const DescCleaning = (
  <div>
    <h2 className="font-bold mb-[10px] text-[#af810e] uppercase">
      Cleaning Kit
    </h2>
    <p>
      Kodiak's Own Blend is not your average rust prevention solution. It is
      specially formulated to provide maximum protection against rust and
      corrosion. This unique blend is made from high-quality ingredients that
      penetrate deep into the surface of your steel possessions.
    </p>
  </div>
);
const DescKenai = (
  <div>
    <h2 className="font-bold mb-[10px] text-[#af810e] uppercase">
      The Kenai knife{" "}
    </h2>
    <p>
      The Kenai knife is more than just a tool, it's a symbol of the rugged
      beauty and bountiful resources of the Kenai Peninsula. With its sharp
      blade and sturdy handle, it's designed to help you navigate through the
      toughest of terrains and process your catch with ease. Whether you're a
      seasoned outdoorsman or just starting out, the Kenai knife is the perfect
      companion for all your adventures.
    </p>
  </div>
);
const DescStone = (
  <div>
    <h2 className="font-bold mb-[10px] text-[#af810e] uppercase">
      Sharpening stone
    </h2>
    <p>
      A sharp blade ensures that the cutting job is done correctly. A sharp
      knife will make clean and precise cuts, which is especially important when
      working with delicate materials such as paper, fabric, or food. A dull
      knife, on the other hand, can tear and damage the material, ruining the
      final product. A sharp blade is also essential for tasks that require
      accuracy, such as carving, whittling, or sharpening pencils. With a sharp
      knife, you can quickly achieve the desired shape and size without damaging
      the material or wasting time.
    </p>
  </div>
);

// a sharp blade ensures that the cutting job is done correctly. A sharp knife will make clean and precise cuts, which is especially important when working with delicate materials such as paper, fabric, or food. A dull knife, on the other hand, can tear and damage the material, ruining the final product. A sharp blade is also essential for tasks that require accuracy, such as carving, whittling, or sharpening pencils. With a sharp knife, you can quickly achieve the desired shape and size without damaging the material or wasting time.
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
      <Discount />
      <Header />
      {product ? (
        <div id="adventure-box">
          <Product product={product} description={AdventureBox} isBackground />
          <hr className="block md:hidden" />
        </div>
      ) : (
        <></>
      )}
      {knife?.data?.product ? (
        <>
          <Product
            product={knife?.data?.product}
            description={DescKenai}
            quote={`“Life is either a daring adventure or nothing at all.”`}
            author="Helen Keller"
          />
          <hr className="block md:hidden" />
        </>
      ) : (
        <></>
      )}
      {stone?.data?.product ? (
        <>
          <Product
            product={stone?.data?.product}
            description={DescStone}
            isBackground
            quote={`“To live is the rarest thing in the world. Most people exist, that is all.”`}
            author="Oscar Wilde"
          />
          <hr className="block md:hidden" />
        </>
      ) : (
        <></>
      )}
      {cleaning ? (
        <>
          <Product
            product={cleaning?.data?.product}
            description={DescCleaning}
            quote={`“Man cannot discover new oceans unless he has the courage to lose sight of the shore.”`}
            author="André Gide"
          />
          <hr className="block md:hidden" />
        </>
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
