'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper Styles
import 'swiper/css'
import 'swiper/css/pagination'

// Import Required Modules
import { Pagination, Autoplay } from 'swiper/modules'

// Components
import ArticleCard from './ArticleCard';

const articleData = [
  {
    image: '/article/NeuroCenter-articles-01.jpg',
    category: 'Neurology Center',
    name: 'สังเกตอาการ ผ่านอักษร B-E-F-A-S-T หากเส้นเลือดในสมองตีบหรือแตก',
    description: 'สมองนับเป็นอวัยวะที่สำคัญที่สุดของร่างกาย เพราะเป็นศูนย์กลางที่รวม...',
    link: 'https://shorturl.at/zEO12',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/NeuroCenter-articles-02.jpg',
    category: 'Neurology Center',
    name: '"การลากก้อนเลือด" หรือ "Clot Retrieval" ในผู้ป่วยโรคหลอดเลือดสมองอุดตัน',
    description: 'การลากก้อนเลือด หรือ Clot Retrieval เป็นเทคโนโลยีการรักษาโรคหลอดเลือด...',
    link: 'https://shorturl.at/kpyN0',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/NeuroCenter-articles-03.jpg',
    category: 'Neurology Center',
    name: 'ทางเลือกในการรักษาโรคหลอดเลือดสมอง',
    description: 'การใช้สายสวนหลอดเลือดที่อุดตันในหลอดเลือดสมอง หรือการใช้รังสีร่วมรักษา เป็นอีกทางเลือกหนึ่งในการรักษา...',
    link: 'https://shorturl.at/iTY18',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/NeuroCenter-articles-04.jpg',
    category: 'Neurology Center',
    name: 'RAPID SOFTWARE นวัตกรรมการประเมินภาวะสมองตาย และความเสี่ยงกับสมองส่วนอื่น',
    description: 'เมื่อผู้ป่วยหลอดเลือดสมอง หรือ Stroke เข้ามารับการรักษา สิ่งสำคัญอย่างยิ่ง...',
    link: 'https://shorturl.at/hmGO3',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/NeuroCenter-articles-05.jpg',
    category: 'Neurology Center',
    name: 'Mobile CT & Stroke Treatment Unit หน่วยรักษาอัมพาตเฉียบพลันเคลื่อนที่',
    description: 'Mobile CT & Stroke Treatment Unit หน่วยรักษาอัมพาตเฉียบพลันเคลื่อนที่...',
    link: 'https://shorturl.at/glntY',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/NeuroCenter-articles-06.jpg',
    category: 'Neurology Center',
    name: 'โรคหลอดเลือดสมองตีบ รีบรักษา ลดปัญหาเสี่ยงอัมพาต',
    description: 'โรคหลอดเลือดสมองตีบ (Thrombotic Stroke) ยังคงเป็นโรคที่มีแนวโน้มของอัตราการพิการ และการเสียชีวิตสูงขึ้น...',
    link: 'https://bit.ly/4baZUyd',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/NeuroCenter-articles-07.jpg',
    category: 'Neurology Center',
    name: 'เพิ่มโอกาสกู้วิกฤติ นวัตกรรมช่วยชีวิตโรคหลอดเลือดสมอง',
    description: 'โรคหลอดเลือดสมอง นับเป็นสาเหตุสำคัญอันดับต้นๆ ที่ทำให้คนเสียชีวิต ไม่ว่าจะเป็นภาวะ หลอดเลือดสมองอุดตัน...',
    link: 'https://bit.ly/47MMgP1',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/NeuroCenter-articles-08.jpg',
    category: 'Neurology Center',
    name: 'Stroke ภาวะอันตรายร้ายแรง..ที่ยิ่งรักษาเร็ว ยิ่งรอด!!',
    description: 'Stroke หรือโรคหลอดเลือดสมอง มีสาเหตุมาจากหลอดเลือดสมองตีบ อุดตัน หรือแตก...',
    link: 'https://bit.ly/3u8JKoE',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/NeuroCenter-articles-09.jpg',
    category: 'Neurology Center',
    name: 'พาร์กินสัน เกิดเพราะเซลล์สมองเสื่อม',
    description: 'พาร์กินสัน (Parkinson’s Disease) คือ โรคสมองเสื่อมชนิดหนึ่งที่เกิดขึ้นอย่างช้าๆ ในเซลล์สมองบริเวณแกนสมอง...',
    link: 'https://bit.ly/4bdbcSE',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/NeuroCenter-articles-10.jpg',
    category: 'Neurology Center',
    name: 'ขี้ลืมแบบไหน คือสัญญาณร้าย สมองเสื่อม',
    description: 'อาการขี้ลืมเป็นอาการที่มักพบได้ในผู้สูงวัย แต่การขี้ลืมนั้นมีหลายแบบ ซึ่งบางอาการนั้นเป็นสัญญาณเตือน...',
    link: 'https://bit.ly/42fgbhu',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/NeuroCenter-articles-11.jpg',
    category: 'Neurology Center',
    name: 'ปวดหัวแบบไหน ชัวร์ว่าใช่…ปวดหัวไมเกรน',
    description: 'ปวดหัวไมเกรน (Migraine Headache) อาการปวดหัวที่ไม่ธรรมดา ทั้งจากระดับความปวดที่รุนแรงกว่า...',
    link: 'https://bit.ly/3UjpATD',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/NeuroCenter-articles-12.jpg',
    category: 'Neurology Center',
    name: 'ปวดหัวเรื้อรังขนาดนี้...แค่ไมเกรนธรรมดาหรือ “เนื้องอกในสมอง” กันแน่',
    description: 'อย่าวางใจว่าอาการปวดศีรษะเรื้อรังเป็นเพียงแค่เรื่องปกติ!!...',
    link: 'https://bit.ly/48QIqWr',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/NeuroCenter-articles-13.jpg',
    category: 'Neurology Center',
    name: 'โรคลมชักสามารถรักษา “หายขาดได้”',
    description: 'ในอดีตการรักษาโรคลมชักมีเพียงการใช้ยากันชักไม่กี่ชนิด ซึ่งยากันชักในสมัยก่อนนั้นสามารถควบคุมอาการชักได้...',
    link: 'https://www.phyathai.com/th/article/2531-โรคลมชักสามารถรักษา_ห',
    button: 'อ่านต่อ',
  },
]

const Article = () => {
  return (
    <section id='article' className='relative mt-10'>
      <div className='container mx-auto xl:flex justify-between items-center'>
        {/* Article Head */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center'>
          <h2 className='font-ibm_plex_sans_thai text-[1.4rem] xl:text-[1.8rem] font-bold text-[#1F1F1F] pt-6'>บทความที่เกี่ยวข้อง</h2>
          <p className='text-[1.2rem] text-[#818181] mb-5 xl:mb-[70px]'>Article Related</p>
          <Link href='https://www.phyathai.com/th/article/category/medical?hospital=pyt1&center_category=101'>
            <Button className='font-ibm_plex_sans_thai font-normal rounded-full bg-transparent border border-[#1F1F1F] text-[#1F1F1F] hover:text-white hover:bg-[#1F1F1F] hover:border-[#1F1F1F]'>ดูบทความทั้งหมด</Button>
          </Link>
        </div>
        {/* Article Slider */}
        <div className='xl:max-w-[900px] xl:relative py-10'>
          <Swiper
            className='h-[530px] xl:h-[500px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {articleData.slice(0, 13).map((article, index) => {
              return (
                <SwiperSlide key={index}>
                  <ArticleCard article={article} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Article