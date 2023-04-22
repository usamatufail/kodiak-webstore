import { Suspense } from "react";
import {
  gql,
  ProductOptionsProvider,
  Seo,
  ShopifyAnalyticsConstants,
  useLocalization,
  useRouteParams,
  useServerAnalytics,
  useShopQuery,
} from "@shopify/hydrogen";

import { MEDIA_FRAGMENT } from "~/lib/fragments";
import { getExcerpt } from "~/lib/utils";
import { NotFound, Layout, ProductSwimlane } from "~/components/index.server";
import {
  Heading,
  NewsLetter,
  ProductDetail,
  ProductForm,
  ProductGallery,
  ProductGalleryImages,
  Section,
  Text,
} from "~/components";

export default function Product() {
  const { handle } = useRouteParams();
  const {
    language: { isoCode: languageCode },
    country: { isoCode: countryCode },
  } = useLocalization();

  const {
    data: { product, shop },
  } = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      country: countryCode,
      language: languageCode,
      handle,
    },
    preload: true,
  }) as any;

  if (!product) {
    return <NotFound type="product" />;
  }

  const { media, title, vendor, descriptionHtml, id, productType } = product;
  const { shippingPolicy, refundPolicy } = shop;
  const {
    priceV2,
    id: variantId,
    sku,
    title: variantTitle,
  } = product.variants.nodes[0];

  useServerAnalytics({
    shopify: {
      canonicalPath: `/products/${handle}`,
      pageType: ShopifyAnalyticsConstants.pageType.product,
      resourceId: id,
      products: [
        {
          product_gid: id,
          variant_gid: variantId,
          variant: variantTitle,
          name: title,
          brand: vendor,
          category: productType,
          price: priceV2.amount,
          sku,
        },
      ],
    },
  });

  return (
    <Layout>
      <Suspense>
        <Seo type="product" data={product} />
      </Suspense>
      <ProductOptionsProvider data={product}>
        <div
          className="bg-cover bg-no-repeat"
          style={
            {
              // backgroundImage: "url(/cloudinary/ma/product.jpeg)",
              // color: 'white',
            }
          }
        >
          <Section padding="none" className="px-0">
            <div className="grid items-start md:gap-2 lg:gap-2 md:grid-cols-1 lg:grid-cols-1">
              <div className="bg-[#f5f5f5] px-[25px] md:px-[75px]">
                <div className="grid max-w-[1300px] m-auto md:grid-cols-[750px_1fr] gap-[20px] md:gap-[80px]">
                  <ProductGalleryImages media={media.nodes} />

                  <div className="flex items-start justify-center">
                    <div className="max-w-[1200px] px-[20px] md:mt-[20px]">
                      <div className="grid gap-1 md:gap-2">
                        <Heading
                          as="h1"
                          format
                          className="whitespace-normal mt-[2rem]"
                        >
                          {title}
                        </Heading>
                        {vendor && (
                          <Text className={"opacity-50 font-medium"}>
                            {"Kodiak F.A.S.T Company"}
                          </Text>
                        )}
                      </div>
                      <ProductForm />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="grid gap-4 py-4 mt-[2.4rem] max-w-[1300px] m-auto ">
                  {descriptionHtml && (
                    <ProductDetail
                      title=""
                      content={descriptionHtml}
                      defaultOpen
                    />
                  )}
                  <div className="px-[20px] md:px-[0px]">
                    {shippingPolicy?.body && (
                      <>
                        <hr />
                        <ProductDetail
                          title="Shipping"
                          content={getExcerpt(shippingPolicy.body)}
                          learnMore={`/policies`}
                        />
                        <hr />
                      </>
                    )}
                    {refundPolicy?.body && (
                      <>
                        <ProductDetail
                          title="Returns"
                          content={getExcerpt(refundPolicy.body)}
                          learnMore={`/policies`}
                        />
                        <hr />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <Suspense>
            <ProductSwimlane title="Related Products" data={id} />
          </Suspense>
        </div>
        <NewsLetter />
      </ProductOptionsProvider>
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
      media(first: 10) {
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
