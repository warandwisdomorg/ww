'use client';

import {motion} from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import Image from 'next/image';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10 my-40`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative'
      >
        <div className='feedback-gradient' />
        <div>
          <h4 className='font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white'>Ahmet Uyar</h4>
          <p className='mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white'>Founder | War and Wisdom </p>
        </div>
        <p className='font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white mb-10 mt-20'>
          “Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis assumenda ratione iste maiores sint fugiat! Tempora ipsam blanditiis explicabo!”
        </p>
      </motion.div>
  
      <motion.div 
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='relative flex-1 flex justify-center items-center'
      >
        <Image width={700} height={500} src="/planet-09.png" alt="planet-09" className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]' />
      </motion.div>

    </motion.div>
  </section>
);

export default Feedback;
