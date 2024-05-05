import Logo from '../assets/logo2.png'
import '../App.css'

const Footer = () => {
  return (
    <div className="relative">
      <div className="pattern"></div>
      <div className="bg-slate-950 text-white">
        <div className="flex max-lg:flex-col w-full justify-around ">
          <div className="flex lg:ml-24 flex-col justify-evenly items-center p-10">
            <img src={Logo} alt="" className="w-[200px]" />
          </div>
          <div className="flex flex-col lg:w-[500px] justify-center px-10  py-10">
            <p className="text-lg">
              Address:{' '}
              <strong>
                Aarambh Hotel & Banquet, TechZone-VII, Greater Noida, Uttar
                Pradesh 203207
              </strong>
              <br />
              Phone: <strong>+91-8287181002</strong>
              <br />
              Email: <strong>aarambh.bh@gmail.com</strong>
            </p>
            <p className="text-lg mt-2">
              &copy; {new Date().getFullYear()} | Aarambh. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
