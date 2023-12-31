'use client';


import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants'
import Image from 'next/image';


const GetStarted = () => (
  <section className={`${styles.paddings} relative my-40`}>
    <div className='gradient-03 z-0 hidden lg:flex' />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount: 0.25}}
      className={`${styles.innerWidth}  z-10  mx-auto flex lg:flex-row flex-col gap-8 `}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image 
          width={400}
          height={400}
          src="/get-started.png" 
          alt="get-started" 
          className='w-[90%] h-[90%] object-contain rounded-[50%]' 
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| How W&W Works" />
          <TitleText title={<>Get started with just a few clicks</>} />
          <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
            {startingFeatures.map((item, index) => (
              <StartSteps 
                key={item}
                number={index + 1}
                text={item}
              />
            ))}
          </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
