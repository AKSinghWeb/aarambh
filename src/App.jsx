import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import HomePage from './WebPages/HomePage'
import WhatsApp from './assets/whatsapp.png'

const App = () => {
  return (
    <div>
      <div className="bg-lime-50">
        <div className="relative z-[3]">
            <Navbar />
        </div>
        <div>
          <HomePage />
        </div>
        <Footer />
        <div>
          <img
            src={WhatsApp}
            className="fixed bottom-10 right-10 w-[50px]"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default App
