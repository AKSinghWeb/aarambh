import Logo from '../assets/logo2.png'
import Face from '../assets/facebook.png'
import Inst from '../assets/instagram.png'
import Twi from '../assets/twitter.png'
const Footer = () => {
  return (
    <div>
      <div className="bg-slate-950 text-white">
        <div className="flex max-lg:flex-col w-full justify-evenly">
          <div className="flex flex-col justify-evenly items-center p-10">
            <img src={Logo} alt="" className="w-[200px]" />
          </div>
          <div className="flex gap-10 justify-center items-center">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={Face} className="w-[40px]" alt="" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={Inst} className="w-[40px]" alt="" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={Twi} className="w-[40px]" alt="" />
            </a>
          </div>
          <div className="flex justify-center items-center py-10">
            <p className="text-lg">
              &copy; {new Date().getFullYear()} | Aarambh. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
