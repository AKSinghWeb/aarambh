// Autoplay testimonials slider using Swiper.js

import { Swiper, SwiperSlide } from 'swiper/react'
import Bar from '../assets/bar.png'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination, Autoplay, Navigation } from 'swiper/modules'

const testimonials = [
  {
    name: 'Uddhav Gupta',
    text: 'I had a very enjoyable day at the Aarambh Hotel & Banquet. The location is quite charming and elegant, with first-rate service to match. Its spotless restrooms and well-trained staff make it the perfect venue for weddings and other festivities. They guarantee an unforgettable experience.',
  },
  {
    name: 'Atul Tyagi',
    text: 'I had a fantastic experience at AARAMBH! The venue was beautiful, the service was excellent, and my event was a huge success. I highly recommend this banquet hall to anyone looking for a perfect venue for their special occasion.',
  },
  {
    name: 'SP International',
    text: "I recently hosted an event here, and I couldn't be happier with the experience. The venue was stunning, the staff was professional and attentive, and everything ran smoothly from start to finish. I highly recommend Aarambh for any special occasion.",
  },
  {
    name: 'Amit soni',
    text: 'Aarambh hotel & banquet  is really good Property with modern decor. It’s very much specious, serves delicious food and offers very good service. It’s very much suitable for corporate & personal family functions. It has three big halls . Valet parking available. Overall this property is highly recommended for family & other functions.',
  },
  {
    name: 'Abdul Malik',
    text: 'The banquet was looking bright and shines in the night. Inside the banquet was also good. Decoration, ambience and food up to the mark. The staff at the banquet was good. The washrooms were also neat and clean. Cleanliness was also a plus point. Parking is also too much spacious.',
  },
  {
    name: 'Siddharth Jain',
    text: "Aarambh Hotel in NOIDA extension is a real winner! I recently had my wedding reception there, and it was just perfect. The place is huge, with plenty of parking, which made things easy for my guests. Trust me, whether it's a wedding or any special event, Aarambh Hotel is the place to be in NOIDA extension. Highly recommend it!",
  },
  {
    name: 'Aashish Kumar',
    text: 'We booked this place for our wedding ceremony on 06feb 2024 and were skeptical on the service we would get since we had no reference of any function at this venue earlier but I have to say the over all experience from booking to the final day was amazing. All our guest absolutely loved the arrangement Thankful to the entire team at Aarambh banquet, Highly Recommended',
  },
  {
    name: 'Baljinder Singh',
    text: 'Undoubtedly the best banquet in NOIDA Extension. From the elegant decor to the delicious food, every aspect exceeded expectations. Highly recommended for any event!',
  },
  {
    name: 'Amit Chaudhary',
    text: "Top-tier hospitality. Aarambh Hotel & Banquet shines as the best banquet in NOIDA Extension. With its impeccable service and exquisite ambiance, it's the ideal venue for all occasions.",
  },
]

const Testimonials = () => {
  return (
    <div>
      <div className="bg-[#685044] relative p-10 py-20">
        <div className="pattern"></div>
        <h2 className="text-center text-3xl lg:text-5xl text-white font-bold lg:p-5">
          Testimonials
        </h2>
        <div className="flex justify-center">
          <img src={Bar} className="md:w-[25%] w-[70%] mt-2 md:-mt-3" alt="" />
        </div>
        <div className="max-md:hidden relative z-[5] mt-8">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper mx-5 mb-8"
            rewind={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white flex flex-col justify-between p-5 h-64 rounded-lg shadow-lg">
                  <p className="text-md text-gray-700">{testimonial.text}</p>
                  <p className="text-md font-bold text-primary mt-3">
                    {testimonial.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="max-md:block md:hidden mt-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            rewind={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white flex flex-col justify-between p-5 h-[22rem] rounded-lg shadow-lg">
                  <p className="text-md text-gray-700">{testimonial.text}</p>
                  <p className="text-md font-bold text-primary mt-3">
                    {testimonial.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
