import { useEffect, useCallback, useState, useRef } from "react";

import {
  useProductOptions,
  isBrowser,
  useUrl,
  AddToCartButton,
  Money,
  OptionWithValues,
  BuyNowButton,
} from "@shopify/hydrogen";

import { Heading, Text, Button, ProductOptions } from "~/components";
import { message } from "antd";

export function ProductForm() {
  const { pathname, search } = useUrl();
  const [messageApi, contextHolder] = message.useMessage();
  const [params, setParams] = useState(new URLSearchParams(search));

  const { options, setSelectedOption, selectedOptions, selectedVariant } =
    useProductOptions() as any;

  const isOutOfStock = !selectedVariant?.availableForSale || false;
  const isOnSale =
    selectedVariant?.priceV2?.amount <
      selectedVariant?.compareAtPriceV2?.amount || false;

  useEffect(() => {
    if (params || !search) return;
    setParams(new URLSearchParams(search));
  }, [params, search]);

  useEffect(() => {
    (options as OptionWithValues[]).map(({ name, values }) => {
      if (!params) return;
      const currentValue = params.get(name.toLowerCase()) || null;
      if (currentValue) {
        const matchedValue = values.filter(
          (value) => encodeURIComponent(value.toLowerCase()) === currentValue
        );
        setSelectedOption(name, matchedValue[0]);
      } else {
        params.set(
          encodeURIComponent(name.toLowerCase()),
          encodeURIComponent(selectedOptions![name]!.toLowerCase())
        ),
          window.history.replaceState(
            null,
            "",
            `${pathname}?${params.toString()}`
          );
      }
    });
  }, []);

  const handleChange = useCallback(
    (name: string, value: string) => {
      setSelectedOption(name, value);
      if (!params) return;
      params.set(
        encodeURIComponent(name.toLowerCase()),
        encodeURIComponent(value.toLowerCase())
      );
      if (isBrowser()) {
        window.history.replaceState(
          null,
          "",
          `${pathname}?${params.toString()}`
        );
      }
    },
    [setSelectedOption, params, pathname]
  );

  const performed = useRef() as any;
  const buttonRef = useRef() as any;
  const handleCustomOnClick = async (event: any) => {
    if (performed.current) {
      performed.current = false;
      return;
    }

    event.preventDefault(); // stop default behaviour
    messageApi.open({
      type: "success",
      content: "Added to cart",
      duration: 1,
    });
    performed.current = true; // prevents retriggering
    buttonRef.current.click(); // trigger button default behaviour
  };

  return (
    <>
      {contextHolder}
      <form className="grid gap-10">
        {
          <div className="grid gap-4">
            {(options as OptionWithValues[]).map(({ name, values }) => {
              if (values.length === 1) {
                return null;
              }
              return (
                <div
                  key={name}
                  className="flex flex-col flex-wrap mb-4 gap-y-2 last:mb-0"
                >
                  <Heading
                    as="legend"
                    size="lead"
                    className="min-w-[4rem] text-[2rem]"
                  >
                    {name}
                  </Heading>
                  <div className="flex flex-wrap items-baseline gap-4">
                    <ProductOptions
                      name={name}
                      handleChange={handleChange}
                      values={values}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        }
        <div className="grid gap-4 md:max-w-[600px]">
          <AddToCartButton
            variantId={selectedVariant?.id}
            quantity={1}
            accessibleAddingToCartLabel="Adding item to your cart"
            disabled={isOutOfStock}
            onClick={handleCustomOnClick as any}
            buttonRef={buttonRef}
            className="text-white bg-black py-[1rem] rounded-[80px]"
            type="button"
          >
            {isOutOfStock ? (
              <Text>Returning Soon</Text>
            ) : (
              <Text
                as="span"
                className="flex items-center justify-center gap-2 font-[700] uppercase"
              >
                <span>Add to Cart</span> <span>·</span>{" "}
                <Money
                  withoutTrailingZeros
                  data={selectedVariant.priceV2!}
                  as="span"
                />
                {isOnSale && (
                  <Money
                    withoutTrailingZeros
                    data={selectedVariant.compareAtPriceV2!}
                    as="span"
                    className="opacity-50 strike"
                  />
                )}
              </Text>
            )}
          </AddToCartButton>
          {isOutOfStock ? (
            <a href="#news-letter" target="_self" className="underline">
              Sign up for email notification when online.
            </a>
          ) : (
            <></>
          )}
          {/* {!isOutOfStock && <ShopPayButton variantIds={[selectedVariant.id!]} />} */}
          {!isOutOfStock && (
            <BuyNowButton
              variantId={selectedVariant.id}
              quantity={1}
              className="text-white bg-[#6514cf] py-[1rem] rounded-[80px]"
            >
              <Text
                as="span"
                className="flex items-center justify-center gap-2 font-[700] uppercase"
              >
                <span>Buy Now</span> <span>·</span>{" "}
                <Money
                  withoutTrailingZeros
                  data={selectedVariant.priceV2!}
                  as="span"
                />
                {isOnSale && (
                  <Money
                    withoutTrailingZeros
                    data={selectedVariant.compareAtPriceV2!}
                    as="span"
                    className="opacity-50 strike"
                  />
                )}
              </Text>
            </BuyNowButton>
          )}
        </div>
      </form>
    </>
  );
}
