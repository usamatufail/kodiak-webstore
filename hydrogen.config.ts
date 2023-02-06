import { defineConfig, CookieSessionStorage } from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain: 'kodiak-webstore.myshopify.com',
    storefrontToken: '4c87323a1e571b18c010cd8550a36d4c',
    privateStorefrontToken: 'a672f20ab5d1f63f63072d377de2d1dc',
    storefrontApiVersion: '2022-07',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
