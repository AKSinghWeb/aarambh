import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import HomePage from './WebPages/HomePage'
import WhatsApp from './assets/whatsapp.png'
import './App.css'
import { SnackbarProvider } from 'notistack'
import { useState } from 'react'
import Modal from './Components/Modal'

const App = () => {
  const [iseModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className='bg-slate-50'>
          <div className='relative z-[3]'>
            <Navbar />
          </div>
          <div>
            <HomePage
              iseModalOpen={iseModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
          {iseModalOpen && (
            <Modal isOpen={true} onClose={() => setIsModalOpen(false)} />
          )}
          <Footer />
          {/* Book event tooltip along with animation */}
          {!iseModalOpen && (
            <div
              onClick={() => {
                // window.open('https://wa.me/918287181002', '_blank')
                setIsModalOpen(true)
              }}
              className='fixed cursor-pointer bottom-10  z-[100] right-10'
            >
              <div className='bg-[rgba(0,0,0,0.6)] text-white p-2 rounded-xl flex items-center justify-center animate-custom-scale'>
                <p className='text-lg text-primary font-bold mx-4'>
                  Contact now
                </p>

                {/* <div className="bg-slate-900 text-white p-2 rounded-full flex items-center justify-center"> */}
                <img src={WhatsApp} alt='whatsapp' className='w-8 h-8' />
                {/* </div> */}
              </div>
            </div>
          )}
        </div>
      </SnackbarProvider>
    </div>
  )
}

export default App
