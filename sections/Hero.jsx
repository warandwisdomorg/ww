'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';
import Image from 'next/image';
import { socials } from '../constants';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:py-16 lg:px-6 lg:-mt-20 z-20`}>
    <div className='gradient-02 z-0 w-[50%] hidden lg:flex' />
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
        <motion.div variants={textVariant(1.4)} className='flex gap-4'>
          {socials.map((item) => (
            <a className='mt-5' href={item.href} key={item.name}>
              <Image
              height={400} 
              width={400}
              src={item.url}
              alt={item.name}
              className='w-[35px] h-[35px] object-contain cursor-pointer'
             />
            </a>
          ))}
        </motion.div>
      </div>
      {/* sm devices title */}
      <div className='flex lg:hidden justify-center items-center flex-col relative z-20 top-[100px]'>
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
        <motion.div variants={textVariant(1.4)} className='flex gap-4'>
          {socials.map((item) => (
            <a className='mt-5' href={item.href} key={item.name}>
              <Image
              height={400} 
              width={400}
              src={item.url}
              alt={item.name}
              className='w-[25px] h-[25px] object-contain cursor-pointer'
             />
            </a>
          ))}
        </motion.div>
      </div>
      
      <div
        className='relative w-full md:-mt-[20px] -mt-[12px] justify-center items-center'
      >
        <motion.div
          variants={textVariant(1.2)}
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
        variants={textVariant(1.2)}
        className='lg:hidden flex justify-center items-center text-center text-2xl mt-32 text-secondary-white'
      >
        Swipe down <Image className='ml-3' alt='swipe down icon' width={15} height={15} src={'/arrow-down.svg'} />
      </motion.div>

    </motion.div>
  </section>
);

export default Hero;
