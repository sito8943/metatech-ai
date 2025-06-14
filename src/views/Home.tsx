// sections
import { Title } from "./sections/Title.tsx";
import { Meta } from "./sections/Meta.tsx";
import { ComingNext } from "./sections/ComingNext.tsx";
import { NewsletterSection } from "./sections/Newsletter.tsx";

const Home = () => {
  return (
    <main>
      <Title />
      <Meta />
      <ComingNext />
      <NewsletterSection />
    </main>
  );
};

export default Home;
