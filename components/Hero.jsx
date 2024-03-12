'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <main>
      <div className='w-full'>
        <Link href='/'>
          <Image
            className='hidden xl:flex'
            src='/hero/Hero-Banner-NeuroCenter_DT.jpg'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
            alt='Hero Banner'
            priority
          />
          <Image
            className='xl:hidden'
            src='/hero/Hero-Banner-NeuroCenter_MB.jpg'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
            alt='Hero Banner'
            priority
          />
        </Link>
      </div>
    </main>
  )
}

export default Hero