import Bar from '../assets/bar.png'
import parking from '../assets/parking.png'
import roomService from '../assets/roomService.png'
import freeWifi from '../assets/freeWifi.png'
import cutlury from '../assets/cutlery.png'
import conference from '../assets/conference.png'
import entertainment from '../assets/entertainment.png'

const highlights = [
  {
    title: 'Free Parking Space',
    desc: 'With our free of charge free parking space, you can park during your visit with confidence.',
    icon: parking,
  },
  {
    title: 'Room Service',
    desc: 'Enjoy the ease of our wonderful room service, which offers delicious meals and attentive service at the touch of a button.',
    icon: roomService,
  },
  {
    title: 'Free Wi-Fi',
    desc: 'Enjoy the ease of continuous internet access during your visit thanks to our free WiFi, which is available to you all.',
    icon: freeWifi,
  },
  {
    title: 'Culinary Dining Experience',
    desc: 'Experience the finest of Indian cuisine by indulging in fragrant, flavorful dishes that are well matched with an array of drinks to create a memorable meal. Utilising our FSSAI guidelines to guarantee food safety.',
    icon: cutlury,
  },
  {
    title: 'Modern Conference Spaces',
    desc: 'Flexible areas that are perfect for conferences, seminars, and business get-togethers, guaranteeing a smooth and businesslike experience.',
    icon: conference,
  },
  {
    title: 'In-room entertainment',
    desc: 'To guarantee a good time, stay connected with free Wi-Fi and enjoy cable television entertainment in your accommodation.',
    icon: entertainment,
  },
]

const Highlights = () => {
  return (
    <div className="mt-12">
      <div className="bg-[#685044] relative p-10  pb-20">
        <div className="pattern"></div>
        <h2 className="text-center text-3xl lg:text-5xl text-white font-bold lg:p-5">
          Highlights
        </h2>
        <div className="flex justify-center">
          <img src={Bar} className="md:w-[25%] w-[70%] mt-2 md:-mt-3" alt="" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 mt-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-lg">
              <div className="mb-2">
                <img className="w-12" src={highlight.icon} alt="" />
              </div>
              <div className="">
                <h3 className="md:text-xl max-md:text-md font-bold">
                  {highlight.title}
                </h3>
                <p className="text-gray-700 max-md:text-sm mt-2">
                  {highlight.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Highlights
