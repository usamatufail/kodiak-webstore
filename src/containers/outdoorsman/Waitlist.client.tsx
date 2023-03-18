import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { Triangle } from "react-loader-spinner";
import { subscribe } from "../../lib";
import { message } from "antd";
import { Link } from "@shopify/hydrogen";

const getVariant = () => ({
  visible: { scale: 1, opacity: 1 },
  hidden: { scale: 0.5, opacity: 0 },
});

export const Waitlist = ({
  image = "https://res.cloudinary.com/samtufail726/image/upload/b_black,o_30/v1678491390/kodiak/news-letter.png",
}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [ref, inView] = useInView();
  const [submitted, setSubmitted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      id="news-letter"
      className="min-h-[400px] py-[80px] text-center bg-center bg-no-repeat bg-cover text-white items-center md:min-h-[490px] md:px-[200px]"
      style={{ backgroundImage: `url(${image})` }}
      ref={ref}
    >
      <div className="mb-[50px] flex items-center justify-center">
        <div className="flex gap-[20px] items-center p-[10px] rounded-[7px] bg-slate-500/40">
          <img
            src="/images/kodiak-white.png"
            alt="kodiak-logo"
            className="w-[175px] md:w-[300px]"
          />
          <h2 className="capitalize font-bold md:text-[64px] md:font-[900] text-center mb-0">
            X
          </h2>
          <img
            src="/images/mat-su.png"
            alt="kodiak-logo"
            className="w-[65px] md:w-[170px]"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-[100px]">
        <div className="relative z-20 px-[20px] text-center md:text-left">
          <h2 className="capitalize font-bold md:text-[32px] md:font-[900]">
            Win Adventure Box and get 20% OFF on first purchase
          </h2>
          {/* Input Mobile */}
          <div className="md:hidden items-center justify-center w-[350px] mx-auto mt-[10px] mb-[20px] md:w-[500px] relative z-20 flex flex-col gap-[20px]">
            {submitted ? (
              <h2 className="capitalize font-semibold md:text-[32px]">
                Use <span className="text-[34px] text-cyan-400">KODIAK20</span>{" "}
                Code to get 20% off on your first purchase
              </h2>
            ) : (
              <h2 className="capitalize font-bold md:text-[32px] md:font-[900]">
                Join the waitlist
              </h2>
            )}
            {submitted ? (
              <></>
            ) : (
              <div className="">
                <input
                  className="h-[48px] text-white border focus-visible:outline-none border-white border-solid rounded-[50px] bg-transparent w-[300px] px-[30px] placeholder:text-white md:w-[370px] text-[18px] font-[600]"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e?.target?.value)}
                  value={email}
                />
              </div>
            )}
            {submitted ? (
              <Link to="/shop/all">
                <button
                  disabled={loading}
                  type="button"
                  className="disabled:bg-gray-300 w-[300px] md:w-[370px] flex justify-center items-center gap-[8px] h-[48px] border bg-white text-black text-[18px] tracking-[0.16em] font-[600] px-[26px] rounded-[50px] relative"
                >
                  <span>Shop Now</span>
                </button>
              </Link>
            ) : (
              <button
                disabled={loading}
                onClick={async () => {
                  await subscribe({
                    setLoading,
                    email,
                    setEmail,
                    message,
                    tags: ["mat-su"],
                    notification:
                      "Thanks for joining the waitlist, we'll inform you about results soon by the email that you provided.",
                  });
                  setSubmitted(true);
                }}
                className="disabled:bg-gray-300 w-[300px] md:w-[370px] flex justify-center items-center gap-[8px] h-[48px] border bg-white text-black text-[18px] tracking-[0.16em] font-[600] px-[26px] rounded-[50px] relative"
              >
                {loading ? (
                  <Triangle
                    height="24"
                    width="24"
                    color="#000"
                    ariaLabel="triangle-loading"
                    visible
                  />
                ) : (
                  <></>
                )}
                <span>Subscribe</span>
              </button>
            )}
          </div>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={getVariant()}
            transition={{ duration: 0.5 }}
            className="mt-[15px] text-[16px] md:text-[20px] leading-[1.15] tracking-wide md:tracking-[unset]"
          >
            Embark on the adventure of a lifetime with Kodiak Adventure Box! As
            a company dedicated to fueling the passions of outdoor enthusiasts,
            Kodiak offers a unique and thrilling experience for those who seek
            excitement and exploration. With a wide range of high-quality
            outdoor gear and adventure essentials, Kodiak ensures that you are
            well-equipped for any expedition.
            <br />
            <br />
            Now is your chance to win a Kodiak Adventure Box, a carefully
            curated collection of top-of-the-line outdoor products designed to
            elevate your adventure experience. Whether you're a seasoned
            explorer or a newbie starting your outdoor journey, the Kodiak
            Adventure Box is packed with innovative gear to suit your needs.
            <br />
            <br />
            As a bonus, we're offering an exclusive 20% discount on your first
            order at kodiakknifeco.com! Browse through our collection of
            cutting-edge knives and tools, skillfully crafted for the rugged
            outdoors. With Kodiak by your side, you'll be ready to conquer any
            challenge that comes your way.
            <br />
            <br />
            Don't miss this amazing opportunity to elevate your adventure game.
            Enter now for a chance to win the Kodiak Adventure Box and claim
            your 20% discount at kodiakknifeco.com. The great outdoors is
            waiting – it's time to answer the call!
          </motion.p>
        </div>
        {/* Input */}
        <div className="hidden md:flex items-center justify-center w-[350px] mx-auto mt-[40px] md:w-[500px] relative z-20 flex-col gap-[20px]">
          {submitted ? (
            <h2 className="capitalize font-semibold md:text-[32px]">
              Use <span className="text-[34px] text-cyan-400">KODIAK20</span>{" "}
              Code to get 20% off on your first purchase
            </h2>
          ) : (
            <h2 className="capitalize font-bold md:text-[32px] md:font-[900]">
              Join the waitlist
            </h2>
          )}
          {submitted ? (
            <></>
          ) : (
            <div className="">
              <input
                className="h-[48px] text-white border focus-visible:outline-none border-white border-solid rounded-[50px] bg-transparent w-[300px] px-[30px] placeholder:text-white md:w-[370px] text-[18px] font-[600]"
                placeholder="Your Email"
                onChange={(e) => setEmail(e?.target?.value)}
                value={email}
              />
            </div>
          )}
          {submitted ? (
            <Link to="/shop/all">
              <button
                disabled={loading}
                type="button"
                className="disabled:bg-gray-300 w-[300px] md:w-[370px] flex justify-center items-center gap-[8px] h-[48px] border bg-white text-black text-[18px] tracking-[0.16em] font-[600] px-[26px] rounded-[50px] relative"
              >
                <span>Shop Now</span>
              </button>
            </Link>
          ) : (
            <button
              disabled={loading}
              onClick={async () => {
                await subscribe({
                  setLoading,
                  email,
                  setEmail,
                  message,
                  tags: ["mat-su"],
                  notification:
                    "Thanks for joining the waitlist, we'll inform you about results soon by the email that you provided.",
                });
                setSubmitted(true);
              }}
              className="disabled:bg-gray-300 w-[300px] md:w-[370px] flex justify-center items-center gap-[8px] h-[48px] border bg-white text-black text-[18px] tracking-[0.16em] font-[600] px-[26px] rounded-[50px] relative"
            >
              {loading ? (
                <Triangle
                  height="24"
                  width="24"
                  color="#000"
                  ariaLabel="triangle-loading"
                  visible
                />
              ) : (
                <></>
              )}
              <span>Subscribe</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
