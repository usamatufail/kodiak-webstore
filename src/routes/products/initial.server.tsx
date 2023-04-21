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
  ProductGalleryImages,
  Section,
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
              <div className="grid md:grid-cols-2 gap-[20px] md:gap-[80px]">
                <ProductGalleryImages
                  media={media.nodes}
                  // className="w-screen md:w-full"
                />
                <div className="flex items-start justify-center">
                  <div className="max-w-[1200px] px-[20px] md:mt-[20px]">
                    <div className="grid gap-1 md:gap-2">
                      <Heading
                        as="h1"
                        format
                        className="whitespace-normal mt-[0rem]"
                      >
                        {title}
                      </Heading>
                    </div>
                    <ProductForm />
                    <div className="grid gap-4 py-4 mt-0">
                      {descriptionHtml && (
                        <ProductDetail
                          title="Product Details"
                          content={descriptionHtml}
                          defaultOpen
                        />
                      )}
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
      media(first: 7) {
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
