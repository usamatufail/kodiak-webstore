import { Banner } from '../components';
import { AboutUs, Social } from '../containers';
import { Layout } from '../components/index.server';

export default function AboutPage() {
  return (
    <Layout>
      <Banner
        backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/q_auto/v1675504964/kodiak/About/Banner.png"
        heading="About Us"
        imageStyles={{ height: '150%', top: '-50%' }}
      />
      <AboutUs />
      <Social />
    </Layout>
  );
}
