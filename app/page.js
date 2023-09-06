import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className='bg-primary-blue overflow-hidden'>
    <Navbar />
    <Hero />
    <About />
    <div className='relative'>
      <div className='gradient-04 z-0 '  />
    </div>
    <Explore />
    <GetStarted />
    <div className='relative'>
      <div className='gradient-04 z-0 '  />
    </div>
    <WhatsNew />
    <World />
    <Insights />
    <div className='relative'>
      <div className='gradient-04 z-0 '  />
    </div>
    <Feedback />
    <Footer />
  </div>
);

export default Page;
