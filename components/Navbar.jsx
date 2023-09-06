'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';
import Image from 'next/image';

const Navbar = () => (
  <nav className={`${styles.xPaddings} py-8 relative` }>
    <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`} >
        <Image
          width={25} 
          height={25}
          src="/search.svg" 
          alt="search" 
          className='w-[24px] h-[24px] object-contain' 
        />
        <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
          W&W
        </h2>
        <Image
          width={25} 
          height={25}
          src="/menu.svg" 
          alt="menu" 
          className='w-[24px] h-[24px] object-contain' 
        />
      </div>
  </nav>
);

export default Navbar;
