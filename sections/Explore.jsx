'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants'

const Explore = () => {

  const [active, setActive] = useState('world-2')


  return (
    <section className={`${styles.paddings} mb-40`} id='explore'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount:
      0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| The History of Kingdoms" textStyles="text-center" />
      <TitleText title={<>Chose the kingdom you want <br className='md:block hidden' /> to explore </>} textStyles="text-center" />
      <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
        {exploreWorlds.map((item, index) => (
          <ExploreCard key={item.id} {...item} index={index} 
          active={active}
          handleClick={setActive}
          />
        ))}
      </div>
    </motion.div>
  </section>
  )
};

export default Explore;
