import { AboutCards, AboutUs, ContactUs, OurMission } from "../containers";
import { Layout } from "../components/index.server";

export default function AboutPage() {
  return (
    <Layout>
      <AboutUs />
      <AboutCards />
      <OurMission />
      <ContactUs />
      {/* <Social /> */}
    </Layout>
  );
}
