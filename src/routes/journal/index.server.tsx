import {
  CacheLong,
  flattenConnection,
  gql,
  type HydrogenRouteProps,
  Seo,
  useLocalization,
  useShopQuery,
  useServerAnalytics,
  ShopifyAnalyticsConstants,
} from "@shopify/hydrogen";
import type {
  Article,
  Blog as BlogType,
} from "@shopify/hydrogen/storefront-api-types";
import { Suspense } from "react";

import { ArticleCard, Grid } from "~/components";
import { Layout } from "~/components/index.server";
import { getImageLoadingPriority, PAGINATION_SIZE } from "~/lib/const";

const BLOG_HANDLE = "Journal";

export default function Blog({
  pageBy = PAGINATION_SIZE,
  response,
}: HydrogenRouteProps) {
  response.cache(CacheLong());

  return (
    <Layout>
      <Seo type="page" data={{ title: "All Journals" }} />
      <h2 className="text-center text-[45px] mt-[40px] md:mt-[96px] font-bold mb-0">
        {BLOG_HANDLE}
      </h2>
      <div className="flex items-center justify-center mt-[20px]">
        <p className="text-[16px] text-center max-w-[800px]">
          Kodiak F.A.S.T Co. provides high-quality Field Adaptive Survival Tools
          for adventurers, hunters, and outdoor enthusiasts. Our blog offers
          tips, tricks, and stories to inspire and equip you for any outdoor
          adventure. Join us in conquering the wild together.
        </p>
      </div>
      <Suspense>
        <JournalsGrid pageBy={pageBy} />
      </Suspense>
    </Layout>
  );
}

function JournalsGrid({ pageBy }: { pageBy: number }) {
  const {
    language: { isoCode: languageCode },
    country: { isoCode: countryCode },
  } = useLocalization();

  const { data } = useShopQuery<{
    blog: BlogType;
  }>({
    query: BLOG_QUERY,
    variables: {
      language: languageCode,
      blogHandle: BLOG_HANDLE,
      pageBy,
    },
  });

  useServerAnalytics({
    shopify: {
      canonicalPath: `/${BLOG_HANDLE}`,
      pageType: ShopifyAnalyticsConstants.pageType.page,
    },
  });

  // TODO: How to fix this type?
  const rawArticles = flattenConnection<Article>(data?.blog?.articles);

  const articles = rawArticles?.map((article) => {
    const { publishedAt } = article;
    return {
      ...article,
      publishedAt: new Intl.DateTimeFormat(`${languageCode}-${countryCode}`, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(publishedAt!)),
    };
  });

  if (articles?.length === 0) {
    return <p>No articles found</p>;
  }

  return (
    <Grid
      as="ol"
      layout="blog"
      gap="blog"
      className="mb-[70px] px-[20px] md:px-[120px]"
    >
      {articles?.map((article, i) => {
        return (
          <ArticleCard
            blogHandle={BLOG_HANDLE.toLowerCase()}
            article={article as Article}
            key={article.id}
            loading={getImageLoadingPriority(i, 2)}
          />
        );
      })}
    </Grid>
  );
}

const BLOG_QUERY = gql`
  query Blog(
    $language: LanguageCode
    $blogHandle: String!
    $pageBy: Int!
    $cursor: String
  ) @inContext(language: $language) {
    blog(handle: $blogHandle) {
      articles(first: $pageBy, after: $cursor) {
        edges {
          node {
            author: authorV2 {
              name
            }
            contentHtml
            handle
            id
            image {
              id
              altText
              url
              width
              height
            }
            publishedAt
            title
          }
        }
      }
    }
  }
`;
