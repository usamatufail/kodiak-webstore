import { Layout } from "../components/layout.server";
import { PoliciesContainer } from "../containers/index";

export default function Policies() {
  return (
    <Layout>
      <div className="md:w-full pt-[40px] md:pt-[0px] pb-[40px] md:pb-[0px] px-[10px] md:px-[0px] ">
        <PoliciesContainer />
      </div>
    </Layout>
  );
}
