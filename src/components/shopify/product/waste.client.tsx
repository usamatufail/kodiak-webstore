import { MediaFile } from "@shopify/hydrogen/client";
import type { MediaEdge } from "@shopify/hydrogen/storefront-api-types";
import { ATTR_LOADING_EAGER } from "~/lib/const";
import Slider from "@ant-design/react-slick";
import { LegacyRef, useRef, useState } from "react";

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */
export function ProductGalleryImages({
  media,
}: // className,
{
  media: MediaEdge["node"][];
  // className?: string;
}) {
  if (!media.length) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    // fade: true,
    // autoplay: true,
    speed: 500,
    arrows: false,
    autoplaySpeed: 1500,
    swipeToSlide: true,
  };
  return (
    <div
      // className={`swimlane md:grid-flow-row hiddenScroll overflow-hidden md:p-0 overflow-x-auto md:grid-cols-2 ${className}`}
      className="product-slider m-auto md:p-[40px] max-w-[340px] md:max-w-[750px]"
    >
      {/* <button onClick={() => sliderRef?.Goto(5)}>
        go to slide 6
      </button> */}
      <Slider {...settings}>
        {media.map((med) => {
          let mediaProps: Record<string, any> = {};
          // const isFirst = i === 0;
          // const isFourth = i === 3;
          // const isFullWidth = i % 3 === 0;

          const data = {
            ...med,
            image: {
              // @ts-ignore
              ...med.image,
              altText: med.alt || "Product image",
            },
          };

          switch (med.mediaContentType) {
            case "IMAGE":
              mediaProps = {
                width: 800,
                widths: [400, 800, 1200, 1600, 2000, 2400],
              };
              break;
            case "VIDEO":
              mediaProps = {
                width: "100%",
                autoPlay: true,
                controls: false,
                muted: true,
                loop: true,
                preload: "auto",
              };
              break;
            case "EXTERNAL_VIDEO":
              mediaProps = { width: "100%" };
              break;
            case "MODEL_3D":
              mediaProps = {
                width: "100%",
                interactionPromptThreshold: "0",
                ar: true,
                loading: ATTR_LOADING_EAGER,
                disableZoom: true,
              };
              break;
          }

          // if (i === 0 && med.mediaContentType === "IMAGE") {
          //   mediaProps.loading = ATTR_LOADING_EAGER;
          // }

          // const style = [
          //   isFullWidth ? "md:col-span-2" : "md:col-span-1",
          //   isFirst || isFourth ? "" : "md:aspect-[4/5]",
          //   "aspect-square snap-center card-image bg-white overflow-hidden dark:bg-contrast/10 w-mobileGallery md:w-full",
          // ].join(" ");

          return (
            <div
              // className={style}
              // @ts-ignore
              key={med.id || med.image.id}
            >
              <MediaFile
                tabIndex="0"
                className={`w-full h-full fadeIn aspect-square object-cover bg-white border border-black rounded-sm`}
                // style={{ aspectRatio: "16/9" }}
                data={data}
                // sizes={
                //   isFullWidth
                //     ? "(min-width: 64em) 60vw, (min-width: 48em) 50vw, 90vw"
                //     : "(min-width: 64em) 30vw, (min-width: 48em) 25vw, 90vw"
                // }
                // @ts-ignore
                options={{
                  crop: "center",
                  scale: 2,
                }}
                {...mediaProps}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
