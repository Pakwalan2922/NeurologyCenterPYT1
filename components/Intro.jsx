import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import neurologycenter from '../public/800x1200-visit-pyt1.jpg'

const Intro = () => {
  return (
    <section id='home' className='xl:h-[860px] py-10 xl:py-20'>
      <div className='container mx-auto'>
        <h2 className='font-ibm_plex_sans_thai text-[1.4rem] xl:text-[1.8rem] mb-4 xl:mb-12 text-center mx-auto font-bold text-[#1F1F1F] pt-6 pb-1'>ศูนย์สมอง และระบบประสาทครบวงจร<br/>(Comprehensive Neurology Center)</h2>
        <p className='text-[1rem] text-center mx-auto font-medium text-[#1F1F1F] w-50 xl:w-[650px]'>ให้การดูแลรักษาผู้ป่วยกลุ่มโรคสมอง ระบบประสาทรวมถึงประสาทไขสันหลัง ด้วยทีมแพทย์ และทีมสหสาขาเฉพาะทางให้การดูแลแบบครบวงจรเพื่อผลลัพธ์สูงสุดของผู้ป่วย</p>
        <h3 className='text-[1.1rem] xl:text-[1.4rem] mb-8 xl:mb-16 text-center mx-auto font-semibold text-[#006C5B] py-5'>“Time is Brain” เวลาคือสิ่งเดียวที่จะหนีจาก อัมพาตเฉียบพลัน</h3>
        <div className='flex flex-col-reverse xl:flex-row'>
          {/* Image */}
          <div className='xl:flex flex-1 relative justify-center'>
            <Image className='object-cover h-[300px] w-full xl:h-[400px] xl:w-[600px] xl:px-5 mx-auto rounded-[20px] xl:rounded-[100px]' src={neurologycenter} alt='Comprehensive Neurology Center' />

          </div>
          {/* Tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='neuro'>
              <TabsList className='font-ibm_plex_sans_thai w-full flex-wrap flex xl:flex-row xl:max-w-[600px] xl:border justify-between'>
                <TabsTrigger value='neuro' className='my-1 xl:my-0 w-[170px] xl:w-[140px]'>Neurology Center</TabsTrigger>
                <TabsTrigger value='preventive' className='my-1 xl:my-0 w-[170px] xl:w-[140px]'>Preventive Care</TabsTrigger>
                <TabsTrigger value='curative' className='my-1 xl:my-0 w-[170px] xl:w-[140px]'>Curative care</TabsTrigger>
                <TabsTrigger value='Rehab' className='my-1 xl:my-0 w-[170px] xl:w-[140px]'>Rehabilitation</TabsTrigger>
              </TabsList>
              {/* Tab Content */}
              <div className='mt-4 xl:mt-2'>
                <TabsContent value='neuro'>
                  <p className='text-[0.9rem] text-left mx-auto text-[#1F1F1F] px-5 py-5 w-50 leading-7'>รพ.พญาไท 1 สามารถรักษาได้ทันทีเมื่อถึงตัวผู้ป่วย เพียง 29 นาที จะได้รับยาละลายลิ่มเลือดทันที และเพียง 60 นาที ผู้ป่วยที่ต้องได้รับการผ่าตัดสามารถรักษาได้ทันที ซึ่งเป็นเวลาที่เร็วกว่ามาตรฐานการรักษาทั่วโลก</p>
                  <p className='text-[0.9rem] text-left mx-auto text-[#1F1F1F] px-5 w-50 leading-7'>ตลอด 24 ชั่วโมง 7 วัน มั่นใจได้ว่า ผู้ป่วยโรคหลอดเลือดสมองทุกราย จะได้รับการรักษาจากทีมแพทย์เฉพาะทางด้านโรคหลอดเลือดสมอง ในทุกขั้นตอนการรักษา ที่พัฒนาและนำความก้าวหน้าในการรักษาโรคหลอดเลือดสมอง มาร่วมรักษาและดูแลทุกชีวิตให้หลุดพ้นจากภาวะอัมพาต ทุกๆนาทีมีค่าต่อชีวิตผู้ป่วย ทีมแพทย์และบุคลากรทางการแพทย์จึงพร้อมตลอด 24 ชม. เพื่อดูแลทุกชีวิตจากโรคหลอดเลือดสมอง</p>
                  <h4 className='text-[1.1rem] mb-8 xl:mb-16 text-left mx-auto font-semibold text-[#006C5B] px-5 py-5 leading-7'>ที่ได้รับการยอมรับว่าเป็นโรงพยาบาล Comprehensive Stroke Center แห่งแรกในเอเชีย ตามมาตรฐานการรักษาระดับสากล (DNV GL 2016)</h4>
                </TabsContent>
                <TabsContent value='preventive'>
                  <h4 className='text-[1.1rem] mb-2 text-left mx-auto font-semibold text-[#006C5B] px-5 pt-5 pb-1'>Preventive Care การตรวจเชิงป้องกัน</h4>
                  <p className='text-[0.9rem] text-left mx-auto text-[#1F1F1F] px-5 pb-8 w-50 leading-7'>เพื่อการคัดกรอง ป้องกัน อาทิ การตรวจด้วย MRI ในกลุ่มโรคหลอดเลือดสมอง,การประเมินการกลืนด้วย Fiber Optic Endoscopic Evaluation of Swallowing ในผู้ป่วยโรคหลอดเลือดสมองที่กลืนลำบาก, การตรวจคลื่นไฟฟ้าสมอง หรือ EEG (Electroencephalogram)เพื่อหาตำแหน่งผิดปกติในสมองในผู้ป่วยโรคลมชัก โดยมีหลักการติดตามอาการ 24 ชม. การทำ Genetic Test ในผู้ป่วย Movement Disorder, การใช้ PET Scan ในกลุ่มเสี่ยงของโรคสมองเสื่อมเพื่อวินิจฉัยภาวะสมองได้ตั้งแต่ยังไม่มีอาการ เพื่อการรักษาแบบทันท่วงที</p>
                </TabsContent>
                <TabsContent value='curative'>
                  <h4 className='text-[1.1rem] mb-2 text-left mx-auto font-semibold text-[#006C5B] px-5 pt-5 pb-1'>Curative care</h4>
                  <p className='text-[0.9rem] text-left mx-auto text-[#1F1F1F] px-5 pb-8 w-50 leading-7'>การดูแลรักษา มีทั้งการรักษาด้วยยา การรักษาด้วยการผ่าตัด การรักษาโดยมีอุปกรณ์ไฟฟ้าในการกระตุ้น พร้อมการแจ้งเตือน และการรักษาด้วยการใช้กิจกรรมบำบัด อาทิ การทำ DBS (deep brain stimulation), เป็นผ่าตัดฝังเครื่องกระตุ้นไฟฟ้าในสมองในผู้ป่วยพาร์กินสัน, การผ่าตัดส่องกล้องใน MIS (minimally Invasive surgery), การลากลิ่มเลือด (Clot Retrieval) ด้วยนวัตกรรมการวินิจฉัยและรังสีร่วมรักษา Bi-plane Angiography การรักษาโรคหลอดเลือดสมองโดยไม่ต้องผ่าตัด</p>
                </TabsContent>
                <TabsContent value='Rehab'>
                  <h4 className='text-[1.1rem] mb-2 text-left mx-auto font-semibold text-[#006C5B] px-5 pt-5 pb-1'>Rehabilitation</h4>
                  <p className='text-[0.9rem] text-left mx-auto text-[#1F1F1F] px-5 pb-8 w-50 leading-7'>การฟื้นฟูสมรรถภาพ ในผู้ป่วยโรคสมองและระบบประสาทถือว่ามีความสำคัญมาก เพราะเมื่อสมองมีรอยโรคแล้ว การรักษาเพียงอย่างเดียวอาจไม่เพียงพอ การฟื้นฟูที่ถูกต้อง ในโปรแกรมที่เหมาะสม โดยทีมสหสาขาวิชาชีพ ประกอบกับเครื่องมือที่เป็นนวัตกรรมของโรงพยาบาลพญาไท 1 อาทิการใช้ Robot ในการฟื้นฟูการเคลื่อนไหวในผู้ป่วยโรคหลอดเลือดสมอง</p>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
