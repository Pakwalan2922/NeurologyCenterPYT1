'use client';

import Image from 'next/image';
import Link from 'next/link';


const Logo = () => {
  return (
    <div className='container mx-auto'>
      <Link href='/'>
        <Image src='/pyt1-logo.svg' width={140} height={36} alt='Phyathai 1 Hospital' />
      </Link>
    </div>
  )
}

export default Logo