import PrimaryLayout from '~/components/layouts/primary/PrimaryLayout';
import SidebarLayout from '~/components/layouts/sidebar/SidebarLayout';
import { type NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h2>Layout example</h2>
      <p>Sample About</p>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
