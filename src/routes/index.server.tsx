import { Layout } from '../components/index.server';
import { Available } from '../containers';
import { Header } from '../containers/index.server';

export default function Home() {
  return (
    <Layout>
      <div className="mb-[60px]">
        <Header />
        <Available />
      </div>
    </Layout>
  );
}
