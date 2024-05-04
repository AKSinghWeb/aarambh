import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import HomePage from './WebPages/HomePage'
import WhatsApp from './assets/whatsapp.png'
import './App.css'

const App = () => {
  return (
    <div>
      <div className="bg-slate-50">
        <div className="relative z-[3]">
          <Navbar />
        </div>
        <div>
          <HomePage />
        </div>
        <Footer />
        {/* Book event tooltip along with animation */}
        <div
          onClick={() => {
            window.open('https://wa.me/918287181002', '_blank')
          }}
          className="fixed cursor-pointer bottom-10 right-10"
        >
          <div className="bg-[rgba(61,61,63,0.4)] text-white p-2 rounded-xl flex items-center justify-center animate-custom-scale">
            <p className="text-lg text-primary font-bold mx-4">Book Event</p>

            {/* <div className="bg-slate-900 text-white p-2 rounded-full flex items-center justify-center"> */}
            <img src={WhatsApp} alt="whatsapp" className="w-8 h-8" />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
