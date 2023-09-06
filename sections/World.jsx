'use client';

import {BsDiscord} from 'react-icons/bs';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import Image from 'next/image';


const World = () => (
  <section className={`${styles.paddings} relative my-40`}>
    <div className='gradient-03 z-0' />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount: 0.25}}
      className={`${styles.innerWidth} z-10 mx-auto flex flex-col`}
    >
      <TypingText title="| People on the world" textStyles={"text-center"} />
      <TitleText title={<>
        <a href="#">
          Join our <BsDiscord className='inline-flex mx-5' /> server, where people from all around the world come together. Come and take your place!
        </a>
      </>} textStyles={"text-center"} />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <Image width={1200} height={900} src="/map.png" alt="map" className='w-full h-full object-cover' />

        <div className='absolute bottom-90 right-40 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <Image width={30} height={30} src="/people-01.png" alt="people" className='w-full h-full' />
        </div>

        <div className='absolute top-10  left-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <Image width={30} height={30} src="/people-02.png" alt="people" className='w-full h-full' />
        </div>

        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <Image width={30} height={30} src="/people-03.png" alt="people" className='w-full h-full' />
        </div>
      </motion.div>

    </motion.div>
  </section>
);

export default World;
