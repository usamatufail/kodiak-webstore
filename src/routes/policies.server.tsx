import { Layout } from '../components/layout.server';
import { PoliciesContainer } from '../containers/index';

export default function Policies() {
  return (
    <Layout>
      <div className="w-full h-screen flex items-center justify-center bg-[url(https://res.cloudinary.com/samtufail726/image/upload/q_auto/v1675465743/kodiak/DSC02452_ggxiqy.jpg)] bg-cover">
        <PoliciesContainer />
      </div>
    </Layout>
  );
}
