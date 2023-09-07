'use client';

import { motion } from 'framer-motion';
import {TypingText} from '../components'

import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';


const About = () => (
  <section className={`${styles.paddings} relative mb-28 z-10`}>
    <div className='w-[50%] gradient-03 z-0 hidden lg:absolute' />
    <motion.div
      variants={textVariant(0.3)}
      initial="hidden"
      whileInView="show"
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='| About W&W' textStyles="text-center mb-5" />
      <motion.p
        variants={textVariant(0.3)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        Welcome to <span className="font-extrabold text-white">War and Wisdom</span>, your gateway to a world of knowledge, intrigue, and enlightenment. Our channel is your destination for a captivating exploration of history, politics, wars, and intellectual discourse.
        <br />
        <br />
        🕰 Journey Through Time: Delve into the annals of history with us as we unravel the mysteries of the past. From ancient civilizations to modern revolutions, our videos transport you through time to discover the profound events that have shaped our world.
        <br />
        <br />
        🗳 Unraveling Politics: Politics can be complex and enigmatic, but we break it down for you. Explore the intricate web of government, international relations, and political ideologies that influence our society today.
        <br />
        <br />
        ⚔ The Art of Warfare: Discover the strategies, battles, and military leaders that have defined the course of human conflict. Our in-depth analyses shed light on the pivotal moments that have determined the fate of nations.
        <br />
        <br />
        💡 Intellectual Discourse: Dive into the world of ideas, philosophy, and critical thinking. Our intellectual videos stimulate your mind and encourage you to engage in thoughtful conversations about the issues that matter.
        <br />
        <br />
        Join our community of curious minds, history buffs, and thinkers as we embark on a quest for knowledge and understanding. Whether you're a student, a history enthusiast, or someone seeking a deeper insight into the world around us, <span className="font-extrabold text-white">War and Wisdom</span> has something to offer everyone.

      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween0', 0.3,1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      >

      </motion.img>
    </motion.div>
  </section>
);

export default About;
