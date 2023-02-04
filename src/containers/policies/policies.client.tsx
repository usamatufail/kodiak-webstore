import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from '@shopify/hydrogen';

const Text = ({ heading = '', text = '' }) => {
  return (
    <div>
      <h1 className="text-[30px] text-slate-900 uppercase font-[900]">{heading}</h1>
      <p className="text-[16px] text-white">{text}</p>
    </div>
  );
};

export const PoliciesContainer = () => {
  return (
    <div className="max-w-[850px] w-full px-[80px] py-[50px] rounded-[30px] bg-slate-700 bg-opacity-[.85] text-white border-solid border-white border-8">
      <div className="text-center mb-[20px] relative">
        <h1 className="text-[32px] uppercase tracking-wider font-[900]">Policies</h1>
        <Link to="/" className="flex items-center justify-end absolute top-0 right-[15px]">
          <AiOutlineCloseCircle className="text-[24px]" />
        </Link>
      </div>
      <hr />
      {/* #1 */}
      <div className="flex flex-col gap-[20px] mt-[20px]">
        <Text
          heading="Shipping:"
          text="Because we are located on a small island in beautiful South East Alaska we ship USPS priority mail, that is our only option at the
          moment and we don't think it will change any time soon."
        />
        <Text
          heading="Returns:"
          text="If you are not satisfied with your product, please contact us for customer support or with any questions at Cody@kodiakknifeco.com."
        />
        <Text
          heading="MINORS:"
          text="The purchases must be in accordance with United States law and the laws of the state or providence the purchaser is located in. It is up to the purchaser to abide by these laws accordingly."
        />
        <Text
          heading="USER COMMENTS AND SUBMISSIONS:"
          text="If you tag Kodiak Knife Co. or provide us images, you agree that we may, edit, copy, publish, distribute, and comment on the content/images that you forward to us or tag us in. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any shared content or comments unless otherwise agreed upon."
        />
      </div>
    </div>
  );
};
