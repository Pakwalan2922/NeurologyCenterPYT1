'use client';
import Image from "next/image";
import Link from "next/link";

const icons = [
  {
    path: 'https://www.facebook.com/phyathai1',
    image: '/cta/facebook-icon.svg',
  },
  {
    path: 'https://lin.ee/SqpR4lE',
    image: '/cta/line-icon.svg',
  },
  {
    path: 'https://www.instagram.com/phyathai1_hospital?igsh=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr',
    image: '/cta/instagram-icon.svg',
  },
  {
    path: 'https://www.tiktok.com/@phyathai1hospital?_t=8kZwsKr5ZDd&_r=1',
    image: '/cta/tiktok-icon.svg',
  },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>
              <Image
                src={icon.image}
                width={30}
                height={30}
                alt=''
                priority
              />
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials