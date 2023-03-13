const data = [
  {
    icon: "/svg/policies/shipping.svg",
    heading: "Shipping",
    text: "Because we are located on a small island in beautiful South East Alaska we ship USPS priority mail, that is our only option at the moment and we don't think it will change any time soon.",
  },
  {
    icon: "/svg/policies/return.svg",
    heading: "Returns",
    text: "If you are not satisfied with your product, please contact us for customer support or with any questions at Cody@kodiakknifeco.com.",
  },
  {
    icon: "/svg/policies/minors.svg",
    heading: "Minors",
    text: "The purchases must be in accordance with United States law and the laws of the state or providence the purchaser is located in. It is up to the purchaser to abide by these laws accordingly.",
  },
];
export const PoliciesContainer = () => {
  return (
    <div className="">
      <div className="min-h-[500px] px-[20px] md:px-[200px] grid md:grid-cols-3 gap-[30px] md:gap-[100px] justify-center items-center">
        {data.map((data) => (
          <div key={data.heading} className="flex flex-col gap-[20px]">
            <img
              src={data.icon}
              alt={data.heading}
              className="w-[64px] h-[64px]"
            />
            <h1 className="text-[48px] text-black font-[700]">
              {data.heading}
            </h1>
            <p className="text-[18px] text-black font-[600]">{data.text}</p>
          </div>
        ))}
      </div>
      <div
        className="min-h-[430px] py-[70px] px-[20px] md:pl-[145px] bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/samtufail726/image/upload/b_black,o_75/v1678458488/kodiak/policies.png)",
        }}
      >
        <h1 className="text-[48px] text-white leading-[1.25] font-[700] md:max-w-[500px]">
          User comments & submissions
        </h1>
        <p className="md:max-w-[500px] text-[18px] text-white font-[600]">
          If you tag Kodiak Knife Co. or provide us images, you agree that we
          may, edit, copy, publish, distribute, and comment on the
          content/images that you forward to us or tag us in. We are and shall
          be under no obligation (1) to maintain any comments in confidence; (2)
          to pay compensation for any shared content or comments unless
          otherwise agreed upon.
        </p>
      </div>
    </div>
  );
};
