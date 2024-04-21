import { useEffect } from 'react'
import '../App.css'
import Img1 from '../assets/img1.jpeg'
import Logo from '../assets/logo.png'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img3.jpeg'
import Img9 from '../assets/img9.jpeg'
import Img7 from '../assets/img7.jpeg'
import Img10 from '../assets/img10.jpeg'
import Img4 from '../assets/img4.jpeg'
import Img11 from '../assets/img11.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    })
  }, [])
  return (
    <div>
      {/* Hero Section  */}
      <div className="hero-section">
        <div className="relative z-[2] text-primary border-primary border max-md:p-5 lg:p-5 lg:px-24">
          <div className="flex justify-center pb-8">
            <img src={Logo} className="w-[120px]" alt="" />
          </div>
          <p className="text-5xl max-md:pb-5 z-[2] font-bold max-md:text-2xl relative">
            WELCOME TO
          </p>
          <p className="text-[150px] font-[Alegreya] font-bold max-md:font-extrabold max-md:pb-5 max-md:text-5xl z-[2] relative tracking-widest">
            AARAMBH
          </p>
          <p
            style={{ fontFamily: 'Gilda Display' }}
            className="lg:text-6xl max-md:text-xl font-extrabold text-end lg:mt-[-25px]"
          >
            Hotel and Banquet
          </p>
        </div>
      </div>

      <span id="book"></span>
      {/* Book Section with how to book by contacting or visiting*/}
      <div
        data-aos="fade-up"
        className="lg:py-20 mt-20 max-md:py-10 bg-light lg:mx-32 rounded-xl"
      >
        <div className="p-10 flex justify-center max-md:flex-col items-center flex-col">
          <p className="text-4xl">Book Your Event</p>
          <div className="flex justify-center w-full py-4">
            <div className="h-[0.5px] bg-primary w-[40%] lg:w-[10%]"></div>
          </div>
        </div>
        <div className="lg:px-24 px-10 grid lg:grid-cols-2 gap-y-14 gap-10">
          <div className="flex items-center">
            <div>
              <p className="text-3xl font-bold pb-2 text-primary">Contact Us</p>
              <p>
                For any queries or bookings, please feel free to contact us at
                the following details:
              </p>
              <p>
                Phone: <strong>+91-8287181002</strong>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:aarambh.bh@gmail.com">
                  <strong>aarambh.bh@gmail.com</strong>
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <p className="text-3xl font-bold pb-2 text-primary">Visit Us</p>
              <p>
                Plot No. - 362, Milak Lachchhi, Greater Noida, Milak Lachhi,
                Uttar Pradesh 203207
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div data-aos="fade-up">
        <div className="lg:p-24 max-md:p-6 max-md:py-28 flex justify-center items-center flex-col">
          <p className="uppercase max-md:text-center text-4xl">
            welcome to aarambh
          </p>
          <div className="flex justify-center w-full py-4 pb-7">
            <div className="h-[1px] bg-primary lg:w-[30%]"></div>
          </div>
          <p className="lg:px-44 text-lg text-center">
            Aarambh, where timeless tradition meets modern luxury. With 30 cozy
            executive rooms, our venue offers a haven of comfort. Elevate your
            celebrations in our three versatile banquet halls, hosting up to
            2500 guests. Nestled in the heart of Greater Noida West, our space
            captures the essence of cultural richness and sophistication. From
            warm hospitality to exquisite details, we invite you to experience a
            blend of tradition and luxury like never before. Whether for a stay
            or a special event, Aarambh promises a simple yet enchanting journey
            of celebration and joy.
          </p>
        </div>
      </div>

      <span id="service"></span>
      {/* Services Section */}
      <div data-aos="fade-up">
        <div className="p-10 lg:bg-light rounded-t-[50px] lg:mx-[370px] flex max-md:flex-col justify-center items-center flex-col">
          <p className="text-4xl">Our Services</p>
          <div className="flex lg:justify-center w-full py-4">
            <div className="h-[0.5px] bg-primary w-full lg:w-[12%]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-14">
          <EventCard
            img={Img1}
            title={'Weddings'}
            desc={
              'One of the most special moments for any person is their wedding day. We know how much pressure and stress this may bring for some couples. Therefore, we have come up with the best processes and perfected our system in order to make this process easy and enjoyable. Let us guide you through all of your choice and give you advice along the way. Some of the most unique and unforgettable weddings have taken place at Aurora. Scroll through our wedding gallery below and take your time looking through every detail.'
            }
          />
          <EventCard
            img={Img2}
            side={'x'}
            title={'Birthdays'}
            desc={
              'Another year gone, a new chapter begins. Whether you are celebrating a sweet 16 or a 50th birthday we know exactly how to accommodate such events. Your guests will feel at home with the warm treatment of our servers and the many food options available. Have a blast this is your day to let go and have fun with friends and family. One thing is a given, that you will make memories and remember this for the rest of your life. See our previous birthday parties below and how others have made Aurora the venue of their choice.'
            }
          />
          <EventCard
            img={Img3}
            title={'Miscellaneous Events'}
            desc={
              'Another year gone, a new chapter begins. Whether you are celebrating a sweet 16 or a 50th birthday we know exactly how to accommodate such events. Your guests will feel at home with the warm treatment of our servers and the many food options available. Have a blast this is your day to let go and have fun with friends and family. One thing is a given, that you will make memories and remember this for the rest of your life. See our previous birthday parties below and how others have made Aurora the venue of their choice.'
            }
          />
        </div>
      </div>

      <span id="highlight"></span>
      {/* Hotel Facilities  */}
      <div
        data-aos="fade-up"
        className="py-10 mt-24 bg-light lg:mx-32 rounded-xl"
      >
        <div className="p-10 flex justify-center max-md:flex-col items-center flex-col">
          <p className="text-4xl ">Highlights</p>
          <div className="flex justify-center w-full py-4">
            <div className="h-[0.5px] bg-primary w-[40%] lg:w-[10%]"></div>
          </div>
        </div>
        <div className="lg:px-24 px-10 grid lg:grid-cols-2 gap-y-14 gap-10">
          <Facility
            title={'Free Parking Space'}
            desc={
              'Park with peace of mind during your stay with our complimentary Free Parking Space.'
            }
          />
          <Facility
            title={'Room Service'}
            desc={
              'Elevate your stay with the convenience of our exceptional Room Service, where delectable dishes and attentive hospitality are just a call away.'
            }
          />
          <Facility
            title={'Free Wi-Fi'}
            desc={
              'Experience the convenience of constant connectivity with our included Free Wi-Fi, ensuring seamless browsing and connectivity throughout your stay.'
            }
          />
          <Facility
            title={'Culinary Dining Experience'}
            desc={
              'Discover the best of Indian flavours—savor aromatic, flavourful dishes paired with a variety of beverages for an unforgettable dining experience'
            }
          />
          <Facility
            title={'Modern Conference Spaces'}
            desc={
              'Versatile spaces designed for corporate gatherings, conferences, and seminars, ensuring a seamless and professional experience.'
            }
          />
          <Facility
            title={'In-room entertainment'}
            desc={
              'Enjoy in-room entertainment with cable television and stay connected with complimentary Wi-Fi to ensure an enjoyable experience.'
            }
          />
        </div>
      </div>

      <span id="gallery"></span>
      {/* Gallery Section */}
      <div data-aos="fade-up" className="lg:py-20 max-md:py-10">
        <div className="pt-16 flex justify-center items-center flex-col">
          <p className="text-4xl">Photo Gallery</p>
          <div className="flex justify-center w-full py-4">
            <div className="h-[0.5px] bg-primary lg:w-[12%]"></div>
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-3 lg:px-32 max-md:px-4 gap-5 py-2 lg:py-10">
            <img
              className="hover:scale-[1.05] duration-500 transition-all"
              src={Img1}
              width={'100%'}
              alt=""
            />
            <img
              className="hover:scale-[1.05] duration-500 transition-all"
              src={Img7}
              width={'100%'}
              alt=""
            />
            <img
              className="hover:scale-[1.05] duration-500 transition-all"
              src={Img4}
              width={'100%'}
              alt=""
            />
            <img
              className="hover:scale-[1.05] duration-500 transition-all"
              src={Img10}
              width={'100%'}
              alt=""
            />
            <img
              className="hover:scale-[1.05] duration-500 transition-all"
              src={Img9}
              width={'100%'}
              alt=""
            />
            <img
              className="hover:scale-[1.05] duration-500 transition-all"
              src={Img11}
              width={'100%'}
              alt=""
            />
          </div>
        </div>
      </div>

      <span id="contact"></span>
      <div data-aos="fade-up" className="pb-10 max-md:py-20">
        <div className="lg:pb-10 flex justify-center max-md:flex-col items-center flex-col">
          <p className="text-4xl">Get in Touch</p>
          <div className="flex justify-center w-full py-3 lg:py-4">
            <div className="h-[0.5px] bg-primary w-[40%] lg:w-[12%]"></div>
          </div>
        </div>
        <div className="flex max-md:flex-col gap-14 lg:px-32 w-full">
          <div className="flex lg:w-[60%] max-md:px-5 justify-center max-md:items-center flex-col gap-5">
            <p className="text-3xl max-md:pt-10">Address</p>
            <p className="max-md:text-center">
              For any queries or bookings, please feel free to contact us at the
              following details:
            </p>
            <p className="">
              Phone: <strong>+91-8287181002</strong>
            </p>
            <p className="">
              Email: <strong>aarambh.bh@gmail.com</strong>
            </p>
            <p className="max-md:text-center">
              Plot No. - 362, Milak Lachchhi, Greater Noida, Milak Lachhi, Uttar
              Pradesh 203207
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5101083807804!2d77.46266417601191!3d28.58446997569099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefc74090aaf9%3A0xecf258ad90f14f30!2sAarambh%20Hotel%20%26%20Banquet!5e0!3m2!1sen!2sin!4v1713700467660!5m2!1sen!2sin"
            // width="70%"
            height="350"
            className="lg:border lg:w-[70%] max-md:w-full max-md:p-5 border-primary"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default HomePage

const Facility = ({ title, desc }) => {
  return (
    <div>
      <div className="flex items-center">
        <div>
          <p className="text-3xl font-bold pb-2 text-primary">{title}</p>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

const EventCard = ({ side, title, desc, img }) => {
  return (
    <div
      data-aos="fade-up"
      className={`flex ${
        side && 'flex-row-reverse'
      } lg:p-10 max-md:flex-col gap-32 max-md:gap-5 lg:px-32 justify-center items-center`}
    >
      <div>
        <p className="text-5xl max-md:text-center py-1 text-primary">{title}</p>
        <p className="max-md:px-4">{desc}</p>
      </div>
      <div className="max-md:p-2">
        <img
          src={img}
          className="lg:border-4 rounded-md border-primary"
          alt="image"
        />
      </div>
    </div>
  )
}
