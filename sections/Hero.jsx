'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';
import Image from 'next/image';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6 my-20 mb-40`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className='hidden lg:flex justify-center items-center flex-col relative z-20 -bottom-[200px]'>
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading} sm:text-sm`}
        >
          War and Wisdom
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className='flex flex-row justify-center items-center text-secondary-white font-bold text-md'
        >
          Lorem ipsum dolor sit amet consectetur.
        </motion.div>
      </div>
      {/* sm devices title */}
      <div className='flex lg:hidden justify-center items-center flex-col relative z-20 top-[80px]'>
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading} sm:text-sm`}
        >
          War and Wisdom
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className='flex flex-row justify-center items-center text-secondary-white font-bold text-md'
        >
          Lorem ipsum dolor sit amet consectetur.
        </motion.div>
      </div>
      
      <div
        className='relative w-full md:-mt-[20px] -mt-[12px] justify-center items-center'
      >
        <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='absolute w-full h-[200px] hero-gradient rounded-tl-[50%] lg:rounded-[140px] z-0 bottom-[60px]' />
        <motion.div
          variants={slideIn('right', 'tween', 0.1, 1)}
          className=''
        >
          <div className='glassmorphism absolute w-full lg:h-[500px] h-[250px] object-cover rounded-tl-[50%] lg:rounded-[140px] z-10 -top-[90px]' />
          <img 
            
            src="/cover.png" 
            alt="cover" 
            className='w-full lg:h-[500px] h-[250px] object-cover rounded-tl-[50%] lg:rounded-[140px] z-0 relative -top-[90px] '
          />
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn('down', 'tween', 0.3, 1)}
        className='lg:hidden flex justify-center items-center text-center text-2xl mt-32 text-secondary-white'
      >
        Swipe down <Image className='ml-3' width={15} height={15} src={'/arrow-down.svg'} />
      </motion.div>

    </motion.div>
  </section>
);

export default Hero;
