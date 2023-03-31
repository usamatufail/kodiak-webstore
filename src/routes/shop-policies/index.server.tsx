import {
  useLocalization,
  useShopQuery,
  useServerAnalytics,
  ShopifyAnalyticsConstants,
  gql,
  Link,
} from "@shopify/hydrogen";
import type { Shop } from "@shopify/hydrogen/storefront-api-types";

import { Section, Heading } from "~/components";
import { Layout, NotFound } from "~/components/index.server";

export default function Policies() {
  const {
    language: { isoCode: languageCode },
  } = useLocalization();

  const { data } = useShopQuery<{
    shop: Shop;
  }>({
    query: POLICIES_QUERY,
    variables: {
      languageCode,
    },
  });

  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.page,
    },
  });

  const {
    privacyPolicy,
    shippingPolicy,
    termsOfService,
    refundPolicy,
    subscriptionPolicy,
  } = data.shop;

  const policies = [
    privacyPolicy,
    shippingPolicy,
    termsOfService,
    refundPolicy,
    subscriptionPolicy,
  ];

  if (policies.every((element) => element === null)) {
    return <NotFound type="page" />;
  }

  return (
    <Layout>
      <div className="text-white mb-24 min-h-screen pt-[45px] bg-[url('')] bg-cover bg-no-repeat">
        <h2 className="text-center text-[60px] text-white font-[650]">
          Policies
        </h2>
        <Section padding="x" className="mb-24">
          {policies.map((policy) => {
            if (!policy) {
              return;
            }
            return (
              <Heading
                className="font-normal text-heading text-center"
                key={policy.id}
              >
                <Link to={`/policies/${policy.handle}`}>
                  {`➫`} {policy.title}
                </Link>
              </Heading>
            );
          })}
        </Section>
      </div>
    </Layout>
  );
}

const POLICIES_QUERY = gql`
  fragment Policy on ShopPolicy {
    id
    title
    handle
  }

  query PoliciesQuery {
    shop {
      privacyPolicy {
        ...Policy
      }
      shippingPolicy {
        ...Policy
      }
      termsOfService {
        ...Policy
      }
      refundPolicy {
        ...Policy
      }
      subscriptionPolicy {
        id
        title
        handle
      }
    }
  }
`;
