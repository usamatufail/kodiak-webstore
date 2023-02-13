import { Suspense } from 'react';
import {
  gql,
  ProductOptionsProvider,
  Seo,
  ShopifyAnalyticsConstants,
  useLocalization,
  useRouteParams,
  useServerAnalytics,
  useShopQuery,
} from '@shopify/hydrogen';

import { MEDIA_FRAGMENT } from '~/lib/fragments';
import { getExcerpt } from '~/lib/utils';
import { NotFound, Layout, ProductSwimlane } from '~/components/index.server';
import { Heading, NewsLetter, ProductDetail, ProductForm, ProductGallery, Section, Text } from '~/components';

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
  const { priceV2, id: variantId, sku, title: variantTitle } = product.variants.nodes[0];

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
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_black,o_20/v1675496363/kodiak/Shop/All/DSC02514_jpiryo.jpg)',
            color: 'white',
          }}
        >
          <Section padding="none" className="px-0">
            <div className="grid items-start md:gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">
              <ProductGallery media={media.nodes} className="w-screen md:w-full lg:col-span-2" />
              <div className="sticky md:-mb-nav md:top-nav md:-translate-y-nav md:h-screen md:pt-nav hiddenScroll md:overflow-y-scroll">
                <section className="flex flex-col w-full max-w-xl gap-8 p-6 mt-[56px] md:mx-[30px] md:max-w-sm md:px-0">
                  <div className="grid gap-2">
                    <Heading as="h1" format className="whitespace-normal">
                      {title}
                    </Heading>
                    {vendor && <Text className={'opacity-50 font-medium'}>{vendor}</Text>}
                  </div>
                  <ProductForm />
                  <div className="grid gap-4 py-4">
                    {descriptionHtml && <ProductDetail title="Product Details" content={descriptionHtml} />}
                    {shippingPolicy?.body && (
                      <ProductDetail title="Shipping" content={getExcerpt(shippingPolicy.body)} learnMore={`/policies`} />
                    )}
                    {refundPolicy?.body && (
                      <ProductDetail title="Returns" content={getExcerpt(refundPolicy.body)} learnMore={`/policies`} />
                    )}
                  </div>
                </section>
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
  query Product($country: CountryCode, $language: LanguageCode, $handle: String!) @inContext(country: $country, language: $language) {
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