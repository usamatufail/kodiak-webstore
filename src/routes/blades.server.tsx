import { Layout } from '../components/index.server';
import { Links } from '../containers/index.server';
import { NewsLetter, Banner, DetailsBanner } from '../components';
import { Navigation, HuntingKnives } from '../containers';
import { HandmadeKnives } from '../containers/blades/handmade-knives.client';

const huntingTexts = {
  h1: 'Types of Hunting Knives',
  h1p: `Discover the World of Hunting Knives Embark on an exciting adventure with hunting knives, available in a range of shapes and sizes to suit your needs.

  From the dependable fixed-blade knives to the portable folding knives, and the specialized gut hooks and caping knives, you'll find the right tool for any hunting challenge.

  As you shop for your perfect hunting knife, keep in mind important factors such as size and comfort in the hand, weight for effortless use, a blade length that balances versatility and maneuverability, and handle materials that provide a sturdy grip.

  Whether you prefer leather or modern synthetic materials like G10 or Micarta, make sure your sheath design is both secure and easily accessible. With these considerations, you'll be ready to make your mark in the hunting world.
  `,
  h2: 'Benefits of Owning a Hunting Knife',
  h2p: `Unleash your inner adventurer with a hunting knife from Kodiak Knife Co. Our high-quality knives offer numerous benefits over conventional tools, such as kitchen knives or pocket knives.

  With a thicker steel construction and premium steel materials, our hunting knives maintain a sharp edge for longer and boast superior edge retention, even after intense use in the field.

   Featuring specialized features, such as gut hooks, our hunting knives are specifically designed to efficiently dress game, surpassing the capabilities of traditional kitchen cutlery and pocket knives.

  Discover the perfect hunting knife to meet your needs from our diverse range of options. From specialized caping knives to versatile folding and fixed blades, we have everything you need for a successful hunting experience. So, upgrade your equipment and shop with us today for a reliable skinning or gutting knife.
  `,
  h3: ``,
  h3p: ``,
};

const handmadeTexts = {
  h1: `Quality Materials`,
  h1p: `Unlock your inner adventurer with knives crafted from premium materials.

  Indulge in the elegance of handmade blades, forged from high-carbon stainless steel, a superior alternative to regular stainless steel, renowned for its durability and longevity.

  Enhance your cutting experience with handles carved from exotic woods like walnut, rosewood, ebony, and teakwood, adding both beauty and comfort to every grip.
  `,
  h2: `Expert Craftsmanship`,
  h2p: `Handmade knives offer unique qualities such as precision, attention to detail, and ergonomic design. They are made by experienced artisans to ensure maximum comfort, performance, strength, resilience, and sharpness. Each knife is a one-of-a-kind tool that will last for years.`,
  h3: 'Quality Assurance',
  h3p: `Each blade, forged with meticulous precision and honed to perfection, undergoes a rigorous inspection by our master craftsmen to ensure it meets the highest standards of accuracy and safety.

  Not only do these one-of-a-kind knives boast exceptional quality and craftsmanship, but they also come with a lifetime warranty - a testament to our unwavering confidence in their durability.
  `,
};

export default function Blades() {
  return (
    <>
      <Layout>
        <Banner
          heading="Blades"
          backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/q_auto/v1675473938/kodiak/Blades/DSC02336_cqwwxz.jpg"
        />
        <Links />
        <Navigation />
        <div className="mt-[4px] mb-[4px]">
          <HuntingKnives texts={huntingTexts} />
        </div>
        <div className="mt-[4px] mb-[40px]">
          <HandmadeKnives
            texts={handmadeTexts}
            description={`Gain culinary creativity with the magic of handmade knives. These bespoke kitchen tools offer unmatched craftsmanship, elevating your cooking to new heights.

Indulge in a one-of-a-kind gift for a loved one or treat yourself to the ultimate kitchen accessory. Embrace the beauty of handiwork with handmade knives.
`}
          />
        </div>
        <DetailsBanner
          backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/q_auto/v1675484446/kodiak/Blades/DSC02473_wdpygj.jpg"
          minHeight="230px"
        />
        <DetailsBanner
          backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/q_auto/v1675473938/kodiak/Blades/DSC02336_cqwwxz.jpg"
          minHeight="230px"
        />
        <DetailsBanner
          backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/q_auto/v1675465118/kodiak/1_n9rg3y.png"
          minHeight="230px"
        />
        <div className="mt-[4px]">
          <NewsLetter image="https://res.cloudinary.com/samtufail726/image/upload/q_auto/v1675484764/kodiak/Blades/DSC02791_dq3j5k.jpg" />
        </div>
      </Layout>
    </>
  );
}
