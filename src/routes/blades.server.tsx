import { Layout } from '../components/index.server';
import { Links } from '../containers/index.server';
import { NewsLetter, Banner, DetailsBanner } from '../components';
import { Navigation, HuntingKnives } from '../containers';
import { HandmadeKnives } from '../containers/blades/handmade-knives.client';

const huntingTexts = {
  h1: 'Types of Hunting Knives',
  h1p: `Hunting knives come in many shapes and sizes, so it is important to familiarize yourself with the different types before making a decision. Fixed blade knives are the most common type used by hunters, as they are sturdy and reliable when it comes to skinning animals or performing other tasks. Folding knives are also popular, as they offer convenience and portability but may not be as strong as fixed blades. Finally, some hunters prefer specialized knives such as gut hooks or caping knives for specific tasks.\n\nWhen shopping for a hunting knife, consider its size, shape, weight, blade length, handle material, and sheath design. The size and shape should be comfortable in your hand so that you can easily grip the knife while you work. The weight should be heavy enough to feel solid but light enough that it won't tire out your arm quickly. The blade should be long enough to perform all necessary tasks without being unwieldy or difficult to maneuver. Handle materials vary greatly; some hunters prefer leather while others opt for synthetic materials like G10 or Micarta which offer improved grip in wet conditions. Finally, make sure the sheath design is secure yet easy to access when needed.`,
  h2: 'Benefits of Owning a Hunting Knife',
  h2p: `Owning a quality hunting knife offers several advantages over using regular tools such as kitchen knives or pocket knives. A good hunting knife will stay sharp longer than other types of blades due to its thicker steel construction and higher-quality steel used in its manufacture. It also has superior edge retention which means it will stay sharp longer even after extensive use or wear-and-tear from extended outdoor use. Additionally, these types of blades have specialized features such as gut hooks which make them better suited for field dressing game than traditional pocket knives for kitchen cutlery sets would be able to provide.\n\nAt Kodiak Knife Co , we offer a wide range of hunting knives designed to meet the needs of the modern hunter. From specialized caping knives to versatile fixed blades and folding knives, you can find the perfect tool for whatever job you have in mind. Whether you need a reliable skinning or gutting knife, our selection has something for everyone. Shop today and check out our hunting equipment today!`,
  h3: ``,
  h3p: ``,
};

const handmadeTexts = {
  h1: `Quality Materials`,
  h1p: `When it comes to knives, quality materials make all the difference. Handmade knives use superior materials such as high-carbon stainless steel which is more durable and longer lasting than regular stainless steel blades. These knives also come with handles made from exotic woods like walnut, rosewood, ebony, and teakwood that are not only beautiful but also comfortable and easy to grip. `,
  h2: `Expert Craftsmanship`,
  h2p: `The true beauty of handmade knives lies in their craftsmanship. Each knife is crafted with precision and attention to detail by experienced artisans who understand the importance of creating an ergonomic design and balanced weight distribution in order to ensure maximum comfort and performance. The result is a one-of-a-kind knife with superior strength, resilience, and sharpness that will last for years to come.`,
  h3: 'Quality Assurance',
  h3p: `When you purchase a handmade knife, you can be sure that each piece has been inspected by an expert craftsman before it was shipped out. This means that you will get a product that has been tested for accuracy and quality, ensuring that it meets all safety standards before it reaches your hands. Additionally, these knives often come with lifetime warranties so if something does happen you know you are covered.

        At Kodiak Knife Co, we take great pride in providing handmade knives that offer unparalleled quality and craftsmanship. Whether you are looking for a special gift or the perfect addition to your kitchen, our custom-made knives are sure to please. Visit us online today to view our selection of beautiful, handmade knives!`,
};

export default function Blades() {
  return (
    <>
      <Layout>
        <Banner
          heading="Blades"
          backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/f_auto/v1675473938/kodiak/Blades/DSC02336_cqwwxz.jpg"
        />
        <Links />
        <Navigation />
        <div className="mt-[4px] mb-[4px]">
          <HuntingKnives texts={huntingTexts} />
        </div>
        <div className="mt-[4px] mb-[40px]">
          <HandmadeKnives texts={handmadeTexts} />
        </div>
        <DetailsBanner
          backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/f_auto/v1675484446/kodiak/Blades/DSC02473_wdpygj.jpg"
          minHeight="230px"
        />
        <DetailsBanner
          backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/f_auto/v1675473938/kodiak/Blades/DSC02336_cqwwxz.jpg"
          minHeight="230px"
        />
        <DetailsBanner
          backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/f_auto/v1675465118/kodiak/1_n9rg3y.webp"
          minHeight="230px"
        />
        <div className="mt-[4px]">
          <NewsLetter image="https://res.cloudinary.com/samtufail726/image/upload/f_auto/v1675484764/kodiak/Blades/DSC02791_dq3j5k.jpg" />
        </div>
      </Layout>
    </>
  );
}
