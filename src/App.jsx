import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import HomePage from './WebPages/HomePage'
import WhatsApp from './assets/whatsapp.png'

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
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=918130233308"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={WhatsApp}
              className="fixed bottom-10 right-10 w-[50px]"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
