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
  quote = `“If we were meant to stay in one place, we’d have roots
  instead of feet.”`,
  author = `Rachel Wolchin`,
}: {
  product: any;
  description?: ReactNode;
  isBackground?: boolean;
  quote?: string;
  author?: string;
}) {
  const { media, title } = product;

  return (
    <>
      <ProductOptionsProvider data={product}>
        <div
          className="bg-cover bg-no-repeat mt-[40px]"
          style={{
            background: isBackground
              ? "url(/cloudinary/ma/company.png)"
              : "#fff",
            // color: 'white',
          }}
        >
          <Section padding="none">
            <div className="grid items-start xl:gap-2 lg:gap-2 xl:grid-cols-1 lg:grid-cols-1 max-w-[1660px] mx-auto">
              <div className="grid  lg:grid-cols-[1fr_3fr_2fr] gap-[20px] lg:gap-[30px] xl:gap-[60px] 2xl:gap-[80px]">
                <div className="hidden lg:block lg:mt-[52px] lg:pl-[20px] xl:pr-[0px] 2xl:px-[30px]">
                  <blockquote className="text-[18px] xl:text-[26px] leading-[1.2] font-semibold">
                    {quote}
                  </blockquote>
                  <p>-&nbsp;{author}</p>
                </div>
                <HomePageProductImage
                  media={media.nodes}
                  // className="w-screen xl:w-full"
                />
                <div className="flex items-start justify-center">
                  <div className="max-w-[1200px] px-[20px] xl:mt-[20px]">
                    <div className="grid gap-1 xl:gap-2">
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
