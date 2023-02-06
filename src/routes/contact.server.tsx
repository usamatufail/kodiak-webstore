import { Layout } from '../components/index.server';
import { Banner } from '../components';
import { Form } from '../containers';

export default function Blades() {
  return (
    <>
      <Layout>
        <Banner
          heading="Contact Us"
          backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/q_auto/v1675490301/kodiak/Contact/DSC02114_vzodf1.png"
          height="240px"
        />
        <Form />
      </Layout>
    </>
  );
}
