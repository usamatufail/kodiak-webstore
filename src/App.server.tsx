import { Suspense } from "react";
import renderHydrogen from "@shopify/hydrogen/entry-server";
import {
  FileRoutes,
  type HydrogenRouteProps,
  PerformanceMetrics,
  PerformanceMetricsDebug,
  Route,
  Router,
  ShopifyAnalytics,
  ShopifyProvider,
  CartProvider,
  useSession,
  useServerAnalytics,
  Seo,
} from "@shopify/hydrogen";
import { HeaderFallback, EventsListener, Chat } from "~/components";
import type { CountryCode } from "@shopify/hydrogen/storefront-api-types";
import { NotFound } from "~/components/index.server";
import "antd/dist/reset.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modern-drawer/dist/index.css";
// import './custom-font.css';
import "./index.css";

function App({ request }: HydrogenRouteProps) {
  const pathname = new URL(request.normalizedUrl).pathname;
  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? (localeMatch[1] as CountryCode) : undefined;

  const isHome = pathname === `/${countryCode ? countryCode + "/" : ""}`;

  const { customerAccessToken } = useSession();

  useServerAnalytics({
    shopify: {
      isLoggedIn: !!customerAccessToken,
    },
  });

  return (
    <Suspense fallback={<HeaderFallback isHome={isHome} />}>
      <EventsListener />
      <ShopifyProvider countryCode={countryCode}>
        <Seo
          type="defaultSeo"
          data={{
            title: "Kodiak Knife Company",
            description: `At Kodiak Knife Company, we aim to craft handmade Alaskan Knife that inspire adventure and exceed expectations. As outdoor enthusiasts, we understand the importance of having a durable, reliable, and functional Knife.`,
            titleTemplate: `%s`,
          }}
        />
        <CartProvider
          countryCode={countryCode}
          customerAccessToken={customerAccessToken}
        >
          <Router>
            <Chat />
            <FileRoutes
              basePath={countryCode ? `/${countryCode}/` : undefined}
            />
            <Route path="*" page={<NotFound />} />
          </Router>
        </CartProvider>
        <PerformanceMetrics />
        {import.meta.env.DEV && <PerformanceMetricsDebug />}
        <ShopifyAnalytics cookieDomain="hydrogen.shop" />
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
