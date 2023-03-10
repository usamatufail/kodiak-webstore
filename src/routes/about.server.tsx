import {
  AboutCards,
  AboutUs,
  ContactUs,
  Follow,
  OurMission,
} from "../containers";
import { Layout } from "../components/index.server";

export default function AboutPage() {
  return (
    <Layout>
      <AboutUs />
      <AboutCards />
      <OurMission />
      <ContactUs />
      <Follow />
      {/* <Social /> */}
    </Layout>
  );
}
