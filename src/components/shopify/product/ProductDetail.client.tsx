// @ts-expect-error @headlessui/react incompatibility with node16 resolution
import { Disclosure } from "@headlessui/react";
import { Link } from "@shopify/hydrogen";

import { Text, IconClose } from "~/components";

export function ProductDetail({
  title,
  content,
  learnMore,
  defaultOpen = false,
}: {
  title: string;
  content: string;
  learnMore?: string;
  defaultOpen?: boolean;
}) {
  return (
    <Disclosure
      key={title}
      as="div"
      className="grid w-full gap-2"
      defaultOpen={defaultOpen}
    >
      {/* @ts-expect-error @headlessui/react incompatibility with node16 resolution */}
      {({ open }) => (
        <>
          {title ? (
            <Disclosure.Button className="text-left">
              <div className="flex justify-between  items-center">
                <Text
                  size="lead"
                  as="h4"
                  className="text-[1.6rem] md:text-[2rem]"
                >
                  {title}
                </Text>
                <IconClose
                  className={`${
                    open ? "" : "rotate-[45deg]"
                  } transition-transform transform-gpu duration-200`}
                />
              </div>
            </Disclosure.Button>
          ) : (
            <></>
          )}

          <Disclosure.Panel className={"pb-4 pt-2 grid gap-2"}>
            <div
              className="text-[1.14rem]"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            {learnMore && (
              <div className="">
                <Link
                  className="pb-px border-b border-primary/30 text-primary/50"
                  to={learnMore}
                >
                  Learn more
                </Link>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
