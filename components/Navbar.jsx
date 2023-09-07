'use client';


import styles from '../styles';
import Image from 'next/image';
import DropdownMenu from './DropdownMenu';

const Navbar = () => (
  <nav className={`${styles.xPaddings} py-8 relative` }>
    <div className="w-[50%] inset-0 gradient-01 hidden lg:absolute" />
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
        <DropdownMenu />
      </div>
  </nav>
);

export default Navbar;
