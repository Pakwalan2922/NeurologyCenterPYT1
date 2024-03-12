// Components
import Article from '@/components/Article';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Product from '@/components/Product';
import Video from '@/components/Video';

export const metadata = {
  title: 'Phyathai 1 Hospital | Comprehensive Neurology Center',
  description: 'ศูนย์สมอง และระบบประสาทครบวงจร โรงพยาบาลพญาไท 1 (Comprehensive Neurology Center)',
  openGraph: {
    title: 'Phyathai 1 Hospital | Comprehensive Neurology Center',
    description: 'ศูนย์สมอง และระบบประสาทครบวงจร โรงพยาบาลพญาไท 1 (Comprehensive Neurology Center)',
    url: 'https://www.phyathai.com/app/NeurologyCenterPYT1',
    images: [
      {
        url: '/Featured-Image-Banner-NeuroCenter.jpg',
        width: 1200,
        height: 630,
      }
    ]
  }
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Article />
      <Video />
      <Product />
      <Contact />
    </main>
  );
}
