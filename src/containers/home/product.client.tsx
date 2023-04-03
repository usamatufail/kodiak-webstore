import { ProductOptionsProvider } from "@shopify/hydrogen";
import {
  Heading,
  HomePageProductImage,
  HomepageProductForm,
  Section,
} from "~/components";
import { ReactNode } from "react";

export function Product({
  product,
  description,
  isBackground = false,
}: {
  product: any;
  description?: ReactNode;
  isBackground?: boolean;
}) {
  const { media, title, vendor } = product;

  return (
    <>
      <ProductOptionsProvider data={product}>
        <div
          className="bg-cover bg-no-repeat"
          style={{
            background: isBackground
              ? "url(/cloudinary/ma/company.png)"
              : "#fff",
            // color: 'white',
          }}
        >
          <Section padding="none" className="px-0">
            <div className="grid items-start md:gap-2 lg:gap-2 md:grid-cols-1 lg:grid-cols-1">
              <div className="grid md:grid-cols-[1fr_3fr_2fr] gap-[20px] md:gap-[80px]">
                <div className="md:mt-[52px] px-[30px]">
                  <blockquote className="text-[26px] leading-[1.2] font-semibold">
                    “If we were meant to stay in one place, we’d have roots
                    instead of feet.”
                  </blockquote>
                  <p>- Rachel Wolchin</p>
                </div>
                <HomePageProductImage
                  media={media.nodes}
                  // className="w-screen md:w-full"
                />
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
                    </div>
                    <HomepageProductForm />
                    <div className="grid gap-4 py-4 mt-[2.4rem]">
                      {description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </ProductOptionsProvider>
    </>
  );
}
