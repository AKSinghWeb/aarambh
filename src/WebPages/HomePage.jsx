import { useEffect, useState } from 'react'
import '../App.css'
import Bar from '../assets/bar.png'
import Img9 from '../assets/img9.jpeg'
import Img7 from '../assets/img7.jpeg'
import Img10 from '../assets/img10.jpeg'
import Img4 from '../assets/img4.jpeg'
import Img5 from '../assets/img5.jpeg'
import Img11 from '../assets/img11.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'
import Hall1 from '../assets/hall1.png'
import Hall2 from '../assets/hall2.png'
import Hall3 from '../assets/hall3.png'
import Terrace from '../assets/terrace.png'
import Testimonials from '../Components/Testimonials'
import Highlights from '../Components/Highlights'
import BookEvent from '../Components/BookEvent'
import CountUp from 'react-countup/'
import ScrollTrigger from 'react-scroll-trigger'
import Modal from '../Components/Modal'

const HomePage = ({ iseModalOpen, setIsModalOpen }) => {
  const [counterOn, setCounterOn] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 500,
    })
  }, [])

  const scrollToSection = async (myScrollToElement) => {
    const target = document.getElementById(myScrollToElement)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div>
      {/* Hero Section  */}
      <div className='hero-section'>
        {iseModalOpen && (
          <Modal isOpen={true} onClose={() => setIsModalOpen(false)} />
        )}
        <div className='relative animate__animated animate__zoomIn z-[2] text-primary border-primary rounded-md max-md:p-5 lg:p-24 lg:px-24'>
          {/* <div className="flex justify-center pb-8">
            <img src={Logo} className="w-[80px]" alt="" />
          </div> */}
          <p className='text-4xl z-[2] font-[Alegreya] font-bold max-md:text-lg relative'>
            Welcome &nbsp; To
          </p>
          <p className='text-[100px] md:text-[70px] md:pb-7 font-[Alegreya] font-bold max-md:font-extrabold max-md:pb-5 max-md:text-2xl z-[2] relative '>
            AARAMBH Hotel & Banquet
          </p>

          {/* CTA Button */}
          <div className='flex max-md:mt-12 justify-center gap-4 '>
            <button
              // onClick={() => {
              //   window.open('https://wa.me/918287181002', '_blank')
              // }}
              onClick={() => {
                // window.open('https://wa.me/918287181002', '_blank')
                setIsModalOpen(true)
              }}
              className='bg-primary max-md:text-xs hover:scale-[1.1] transition-all duration-300 w-[120px] md:w-44 flex justify-center items-center gap-2 border border-[#7f5741] text-[#7f5741] md:px-5 py-2 font-bold rounded-lg md:text-lg'
            >
              Contact Now{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-arrow-right'
              >
                <path d='M5 12h14' />
                <path d='m12 5 7 7-7 7' />
              </svg>
            </button>
            <button
              onClick={() => {
                document.getElementById('book').scrollIntoView({
                  behavior: 'smooth',
                })
              }}
              className='bg-secondary max-md:text-xs hover:scale-[1.1] transition-all duration-300 w-[120px] md:w-44 flex justify-center items-center gap-2 border border-primary text-primary md:px-5 py-2 font-bold rounded-lg md:text-lg'
            >
              Enquire Now
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-arrow-right'
              >
                <path d='M5 12h14' />
                <path d='m12 5 7 7-7 7' />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div>
        <div className='lg:p-28 p-7 py-10 pt-14'>
          <h2 className='text-center text-4xl lg:text-5xl text-secondary font-bold p-5'>
            About Aarambh
          </h2>
          <div className='flex justify-center'>
            <img src={Bar} className='md:w-[25%] w-[70%] -mt-3' alt='' />
          </div>
          <p className='p-5 max-lg:text-justify text-center'>
            At Aarambh, contemporary luxury blends with ageless tradition. With
            30 comfortable executive rooms, our location is a comfortable
            retreat. Celebrate in style in our three adaptable banquet halls,
            which can accommodate up to 2500 guests, as well as on our terrace.
            Our venue, which is perfectly situated in the centre of Greater
            Noida West, embodies sophistication and rich cultural diversity. We
            cordially invite you to enjoy a unique fusion of luxury and
            tradition, complete with warm hospitality and exquisite details.
            Aarambh offers a straightforward yet magical trip filled with joy
            and celebration, whether it&apos;s for a visit or a special
            occasion.
          </p>
          <ScrollTrigger onEnter={() => setCounterOn(true)}>
            <div className='flex max-md:flex-col py-14 gap-8 justify-evenly'>
              <Count
                count={
                  counterOn && (
                    <CountUp
                      style={{
                        fontFamily: 'Playfair Display',
                        fontWeight: 'bold',
                      }}
                      start={0}
                      end={100}
                      duration={2}
                    />
                  )
                }
                label={'Events'}
              />
              <div className='w-[1px] bg-secondary'></div>
              <Count
                count={
                  counterOn && (
                    <CountUp
                      style={{
                        fontFamily: 'Playfair Display',
                        fontWeight: 'bold',
                      }}
                      start={0}
                      end={80}
                      duration={2}
                    />
                  )
                }
                label={'Birthdays'}
              />
              <div className='w-[1px] bg-secondary'></div>
              <Count
                count={
                  counterOn && (
                    <CountUp
                      style={{
                        fontFamily: 'Playfair Display',
                        fontWeight: 'bold',
                      }}
                      start={0}
                      end={300}
                      duration={2}
                    />
                  )
                }
                label={'Parties'}
              />
            </div>
          </ScrollTrigger>
        </div>
      </div>

      {/* Capacity Section */}
      <div className='relative'>
        <div className='pattern'></div>
        <div className='bg-[#685044] p-10 py-20'>
          <h2 className='text-center text-3xl lg:text-5xl text-white font-bold lg:p-5'>
            Capacity of Halls
          </h2>
          <div className='flex justify-center'>
            <img
              src={Bar}
              className='md:w-[25%] w-[70%] mt-2 md:-mt-3'
              alt=''
            />
          </div>
          <div className='flex max-md:flex-col z-10 max-md:items-center gap-10 py-14 justify-evenly'>
            <FacilityCard img={Hall1} label={'Hall 1'} count={'600'} />
            <FacilityCard img={Hall2} label={'Hall 2'} count={'500'} />
            <FacilityCard img={Hall3} label={'Hall 3'} count={'300'} />
            <FacilityCard img={Terrace} label={'Terrace'} count={'150'} />
          </div>
        </div>
      </div>

      <span id='service'></span>
      {/* Our Services Section */}
      <div>
        <div className='p-10'>
          <h2 className='text-center py-10 text-3xl lg:text-5xl text-secondary font-bold lg:p-5'>
            Our Sevices
          </h2>
          <div className='flex max-md:-mt-6 justify-center'>
            <img
              src={Bar}
              className='md:w-[25%] w-[70%] max-md:-mt-2 -mt-3'
              alt=''
            />
          </div>
          <div className='flex max-md:flex-col mt-8 justify-evenly'>
            <ServiceCard
              onClick={() => scrollToSection('book')}
              desc={
                'Celebrate your special day in style with our exquisite wedding and party services.'
              }
              img={Img4}
              title={'Weddings & Reception'}
            />

            <ServiceCard
              onClick={() => scrollToSection('book')}
              desc={
                'Host successful corporate gatherings with our professional event planning.'
              }
              img={Img5}
              title={'Corporate Events'}
            />
            <ServiceCard
              onClick={() => scrollToSection('book')}
              desc={
                'Make birthdays unforgettable with our tailored celebration packages.'
              }
              img={Img7}
              title={'Birthday Celebrations'}
            />
          </div>
        </div>
      </div>

      <span id='highlight'></span>
      {/* Highlights */}
      <Highlights />

      {/* Gallery */}
      <span id='gallery'></span>
      {/* Gallery Section */}
      <div data-aos='fade-up' className='lg:py-20 md:px-10 max-lg:py-10'>
        <h2 className='text-center text-3xl lg:text-5xl text-secondary font-bold lg:p-5'>
          Photo Gallery
        </h2>
        <div className='flex justify-center'>
          <img src={Bar} className='md:w-[25%] w-[70%] mt-2 md:-mt-3' alt='' />
        </div>
        <div className='max-md:mt-8'>
          <div className='grid lg:grid-cols-3 lg:px-32 max-md:px-4 gap-5 py-2 lg:py-10'>
            <img
              className='hover:scale-[1.05] duration-500 transition-all'
              src={Img5}
              width={'100%'}
              alt=''
            />
            <img
              className='hover:scale-[1.05] duration-500 transition-all'
              src={Img7}
              width={'100%'}
              alt=''
            />
            <img
              className='hover:scale-[1.05] duration-500 transition-all'
              src={Img4}
              width={'100%'}
              alt=''
            />
            <img
              className='hover:scale-[1.05] duration-500 transition-all'
              src={Img10}
              width={'100%'}
              alt=''
            />
            <img
              className='hover:scale-[1.05] duration-500 transition-all'
              src={Img9}
              width={'100%'}
              alt=''
            />
            <img
              className='hover:scale-[1.05] duration-500 transition-all'
              src={Img11}
              width={'100%'}
              alt=''
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />

      <span id='contact'></span>
      <div data-aos='fade-up' className='pb-10 md:px-12 max-lg:py-20 lg:mt-10'>
        <div className='lg:pb-10 flex justify-center max-md:flex-col items-center flex-col'>
          <h2 className='text-center py-10 text-3xl lg:text-5xl text-secondary font-bold lg:p-5'>
            Get in Touch
          </h2>
          <div className='flex max-md:-mt-6 justify-center'>
            <img
              src={Bar}
              className='md:w-[25%] w-[70%] max-md:-mt-2 -mt-3'
              alt=''
            />
          </div>
        </div>
        <div className='flex max-lg:flex-col gap-14 mt-8 lg:px-32 w-full'>
          <div className='flex lg:w-[60%] max-md:px-5 justify-center max-lg:items-center flex-col gap-5'>
            <p
              style={{
                fontFamily: 'Playfair Display',
              }}
              className='text-3xl max-md:pt-10'
            >
              Address
            </p>
            <p className='max-lg:text-center'>
              For any queries or bookings, please feel free to contact us at the
              following details:
            </p>
            <p className=''>
              Phone: <strong>+91-8287181002</strong>
            </p>
            <p className=''>
              Email: <strong>aarambh.bh@gmail.com</strong>
            </p>
            <p className='max-md:text-center'>
              Address:{' '}
              <strong>
                Aarambh Hotel & Banquet, TechZone-VII, Greater Noida, Uttar
                Pradesh 203207
              </strong>
            </p>
          </div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5101083807804!2d77.46266417601191!3d28.58446997569099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefc74090aaf9%3A0xecf258ad90f14f30!2sAarambh%20Hotel%20%26%20Banquet!5e0!3m2!1sen!2sin!4v1713700467660!5m2!1sen!2sin'
            // width="70%"
            height='350'
            className='lg:border lg:w-[70%] max-md:w-full max-md:p-5 border-primary'
            allowfullscreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>

      <span id='book'></span>
      {/* Book Section */}
      <BookEvent />
    </div>
  )
}

export default HomePage

const Count = ({ count, label }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p
        style={{ fontFamily: 'Playfair Display' }}
        className='text-5xl tracking-wider font-extrabold text-secondary'
      >
        {count}+
      </p>
      <p className='text-xl py-1 font-semibold'>{label}</p>
    </div>
  )
}

const FacilityCard = ({ label, count, img }) => {
  return (
    <div className='bg-white hover:scale-[1.03] transition-all duration-200 relative z-[5] p-5 shadow-lg rounded-lg max-md:w-[340px] w-[280px] py-10'>
      <p
        style={{ fontFamily: 'Playfair Display' }}
        className='text-center pb-2 text-3xl text-secondary font-bold'
      >
        {label}
      </p>
      <div className='flex justify-center'>
        <img className='w-[50%]' src={img} alt='' />
      </div>
      <p className='py-2 text-center'>
        {' '}
        Capacity :{' '}
        <span
          style={{ fontFamily: 'Playfair Display' }}
          className='font-semibold text-xl'
        >
          {count}+
        </span>
      </p>
    </div>
  )
}

const ServiceCard = ({ img, title, desc, onClick }) => {
  return (
    <div className='w-[400px] hover:scale-[1.03] transition-all duration-200 mt-7 relative overflow-hidden max-md:w-[320px] h-[300px] rounded-xl'>
      <div>
        <img className='rounded-t-xl' src={img} alt='' />
      </div>
      <div className='bg-gradient-to-br -mt-6 lg:-mt-14 -ml-12 lg:ml-5 h-[400px] lg:w-[420px] w-[400px] from-10% to-90% -rotate-[9deg] lg:-rotate-[11deg] from-primary to-secondary p-3 rounded-xl'></div>
      <div className='absolute bottom-0 z-10 p-4'>
        <div className='flex justify-end'>
          <p className=' text-sm font-semibold lg:w-[80%] text-right py-3'>
            {desc}
          </p>
        </div>
        <div className='flex justify-between items-center'>
          <p
            style={{
              fontFamily: 'Playfair Display',
            }}
            className='text-lg font-bold'
          >
            {title}
          </p>
          <button
            onClick={onClick}
            className='underline text-sm font-bold text-white bg-transparent'
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  )
}
