import { Layout } from "../components/index.server";
import { NewsLetter, Banner, DetailsBanner } from "../components";
import { Links, HuntingKnives } from "../containers";
import { HandmadeKnives } from "../containers/blades/handmade-knives.client";

// const huntingTexts = {
//   h1: "Why F.A.S.T. ?",
//   h1p: `Discover the World of Hunting F.A.S.T Embark on an exciting adventure with hunting F.A.S.T, available in a range of shapes and sizes to suit your needs.

//   From the dependable fixed F.A.S.T to the portable folding F.A.S.T, and the specialized gut hooks and caping F.A.S.T, you'll find the right tool for any hunting challenge.

//   As you shop for your perfect hunting F.A.S.T, keep in mind important factors such as size and comfort in the hand, weight for effortless use, a F.A.S.T length that balances versatility and maneuverability, and handle materials that provide a sturdy grip.

//   Whether you prefer leather or modern synthetic materials like G10 or Micarta, make sure your sheath design is both secure and easily accessible. With these considerations, you'll be ready to make your mark in the hunting world.
//   `,
//   h2: "Benefits of Owning a Hunting F.A.S.T",
//   h2p: `Unleash your inner adventurer with a hunting F.A.S.T from Kodiak F.A.S.T Co. Our high-quality F.A.S.T offer numerous benefits over conventional tools, such as kitchen F.A.S.T or pocket F.A.S.T

//   With a thicker steel construction and premium steel materials, our hunting F.A.S.T maintain a sharp edge for longer and boast superior edge retention, even after intense use in the field.

//    Featuring specialized features, such as gut hooks, our hunting F.A.S.T are specifically designed to efficiently dress game, surpassing the capabilities of traditional kitchen cutlery and pocket F.A.S.T

//   Discover the perfect hunting F.A.S.T to meet your needs from our diverse range of options. From specialized caping F.A.S.T to versatile folding and fixed F.A.S.T, we have everything you need for a successful hunting experience. So, upgrade your equipment and shop with us today for a reliable skinning or gutting F.A.S.T.
//   `,
//   h3: ``,
//   h3p: ``,
// };

const handmadeTexts = {
  h1: `Quality Materials`,
  h1p: `Unlock your inner adventurer with F.A.S.T crafted from premium materials.

  Indulge in the elegance of handmade F.A.S.T, forged from high-carbon stainless steel, a superior alternative to regular stainless steel, renowned for its durability and longevity.

  Enhance your cutting experience with handles carved from exotic woods like walnut, rosewood, ebony, and teakwood, adding both beauty and comfort to every grip.
  `,
  h2: `Expert Craftsmanship`,
  h2p: `Handmade F.A.S.T offer unique qualities such as precision, attention to detail, and ergonomic design. They are made by experienced artisans to ensure maximum comfort, performance, strength, resilience, and sharpness. Each F.A.S.T is a one-of-a-kind tool that will last for years.`,
  h3: "Quality Assurance",
  h3p: `Each F.A.S.T, forged with meticulous precision and honed to perfection, undergoes a rigorous inspection by our master craftsmen to ensure it meets the highest standards of accuracy and safety.

  Not only do these one-of-a-kind F.A.S.T boast exceptional quality and craftsmanship, but they also come with a lifetime warranty - a testament to our unwavering confidence in their durability.
  `,
};

export default function Blades() {
  return (
    <>
      <Layout>
        <Banner
          heading="Field Adaptive Survival Tool (F.A.S.T.)"
          backgroundImg="/cloudinary/fast/banner.jpeg"
        />
        <Links />
        <div className="mt-[4px] mb-[4px]">
          <HuntingKnives />
        </div>
        <DetailsBanner
          backgroundImg="/cloudinary/fast/01.jpeg"
          minHeight="230px"
        />
        <DetailsBanner
          backgroundImg="/cloudinary/fast/02.jpeg"
          minHeight="230px"
        />
        <DetailsBanner
          backgroundImg="/cloudinary/fast/03.jpeg"
          minHeight="230px"
        />
        <div className="mt-[4px]">
          <NewsLetter />
        </div>
      </Layout>
    </>
  );
}
