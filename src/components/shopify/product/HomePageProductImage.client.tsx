import { MediaFile } from "@shopify/hydrogen/client";
import type { MediaEdge } from "@shopify/hydrogen/storefront-api-types";
import { ATTR_LOADING_EAGER } from "~/lib/const";

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */
export function HomePageProductImage({
  media,
  className,
}: {
  media: MediaEdge["node"][];
  className?: string;
}) {
  if (!media.length) {
    return null;
  }

  return (
    <div
      className={`grid-flow-row p-2 shadow-xl rounded-[20px] mx-[20px] ${className}`}
    >
      {media.map((med, index) => {
        if (index > 0) {
          return <></>;
        }
        let mediaProps: Record<string, any> = {};

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

        return (
          <div
            // className={style}
            // @ts-ignore
            key={med.id || med.image.id}
          >
            <MediaFile
              tabIndex="0"
              className={` w-full h-full fadeIn object-cover md:object-contain	`}
              // style={{ aspectRatio: "16/9" }}
              data={data}
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
    </div>
  );
}
