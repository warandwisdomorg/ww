import { Footer, Navbar } from '../components';
import { ScrollToTop } from '../components/ScrollToTop';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className='bg-primary-blue overflow-hidden'>
    <ScrollToTop />
    <Navbar />
    <Hero />
    <GetStarted />
    <WhatsNew />
    <Explore />
    <World />
    <About />
    <Insights />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
