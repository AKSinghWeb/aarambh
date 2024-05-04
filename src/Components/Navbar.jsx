import { useEffect, useRef, useState } from 'react'
import '../App.css'
import Logo from '../assets/logo.png'
const Navbar = () => {
  const [visible, setVisible] = useState(true)
  const headerRef = useRef(null)

  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  const [IsOpen, setIsOpen] = useState(false)
  console.log(IsOpen)

  const scrollToSection = async (myScrollToElement) => {
    const target = document.getElementById(myScrollToElement)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.nav-menu') || e.target.closest('.block')) {
        return
      } else {
        setIsOpen(false)
      }
    })
  }, [])

  return (
    <>
      <div
        ref={headerRef}
        className={`relative flex lg:px-32 top-0 w-full p-1 bg-[#685044] px-4 md:px-16 items-center justify-between transition-all duration-300 ease-in-out ${
          visible ? '' : 'opacity-0 transform translate-y-[-100%]'
        }`}
      >
        <div className="pattern"></div>
        <div
          className="cursor-pointer z-10 flex items-center gap-3"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <img src={Logo} className="w-[50px] md:mr-2" alt="" />
          <div>
            <p className="text-[#f8be7e] font-[Alegreya] text-xl md:text-2xl font-extrabold">
              Aarambh
            </p>
            <p
              style={{ fontFamily: 'Gilda Display' }}
              className="text-[#f8be7e] text-md md:text-md font-extrabold"
            >
              Hotel & Banquet{' '}
            </p>
          </div>
        </div>
        <div
          style={{ fontFamily: 'Playfair Display' }}
          className="flex z-10 max-sm:hidden justify-center gap-7 text-lg font-extrabold text-primary"
        >
          {/* <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className=" group cursor-pointer"
          >
            <p className="font-bold">Home</p>
            <div className="group-hover:w-full bg-primary w-0 transition-all duration-400 h-[1px]"></div>
          </div> */}
          <div
            onClick={() => scrollToSection('book')}
            className="group cursor-pointer"
          >
            <p style={{ fontFamily: 'Playfair Display' }} className="font-bold">
              Book
            </p>
            <div className="group-hover:w-full bg-primary w-0 transition-all duration-400 h-[1px]"></div>
          </div>
          <div
            onClick={() => scrollToSection('service')}
            className="group cursor-pointer"
          >
            <p className="font-bold" style={{ fontFamily: 'Playfair Display' }}>
              Services
            </p>
            <div className="group-hover:w-full bg-primary w-0 transition-all duration-400 h-[1px]"></div>
          </div>
          <div
            onClick={() => scrollToSection('highlight')}
            className="group cursor-pointer"
          >
            <p className="font-bold" style={{ fontFamily: 'Playfair Display' }}>
              Highlights
            </p>
            <div className="group-hover:w-full bg-primary w-0 transition-all duration-400 h-[1px]"></div>
          </div>
          <div
            onClick={() => scrollToSection('gallery')}
            className="group cursor-pointer"
          >
            <p className="font-bold" style={{ fontFamily: 'Playfair Display' }}>
              Gallery
            </p>
            <div className="group-hover:w-full bg-primary w-0 transition-all duration-400 h-[1px]"></div>
          </div>
          <div
            onClick={() => scrollToSection('contact')}
            className="group cursor-pointer"
          >
            <p className="font-bold" style={{ fontFamily: 'Playfair Display' }}>
              Contact
            </p>
            <div className="group-hover:w-full bg-primary w-0 transition-all duration-400 h-[1px]"></div>
          </div>
        </div>
        <div className="block z-10 md:hidden">
          {/* Mobile menu button */}
          {IsOpen ? (
            <svg
              className="block text-white h-6 w-6"
              fill="none"
              onClick={() => setIsOpen(!IsOpen)}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="block text-white h-6 w-6"
              fill="none"
              onClick={() => setIsOpen(!IsOpen)}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
          {IsOpen && (
            <div
              className="md:hidden nav-menu absolute top-[50px] right-[10px] ml-44 border border-white text-white p-7 py-3 mr-10 bg-black"
              // ref={menuRef}
            >
              {/* <div
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                  setIsOpen(false)
                }}
                className=" group cursor-pointer"
              >
                <p className="font-bold">Home</p>
                <div className="group-hover:w-full bg-primary w-0 transition-all duration-400 h-[1px]"></div>
              </div> */}
              <div
                onClick={() => {
                  scrollToSection('service')
                  setIsOpen(false)
                }}
                className="group cursor-pointer"
              >
                <p
                  className="font-bold"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  Services
                </p>
                <div className="group-hover:w-full bg-primary w-0 transition-all duration-400 h-[1px]"></div>
              </div>
              <div
                onClick={() => {
                  scrollToSection('book')
                  setIsOpen(false)
                }}
                className="group cursor-pointer"
              >
                <p
                  className="font-bold"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  Book
                </p>
                <div className="group-hover:w-full bg-primary w-0 transition-all duration-400 h-[1px]"></div>
              </div>
              <div
                onClick={() => {
                  scrollToSection('highlight')
                  setIsOpen(false)
                }}
                className="group cursor-pointer"
              >
                <p
                  className="font-bold"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  Highlights
                </p>
                <div className="group-hover:w-full bg-primary w-0 transition-all duration-400 h-[1px]"></div>
              </div>
              <div
                onClick={() => {
                  scrollToSection('gallery')
                  setIsOpen(false)
                }}
                className="group cursor-pointer"
              >
                <p
                  className="font-bold"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  Gallery
                </p>
                <div className="group-hover:w-full bg-primary w-0 transition-all duration-400 h-[1px]"></div>
              </div>
              <div
                onClick={() => {
                  scrollToSection('contact')
                  setIsOpen(false)
                }}
                className="group cursor-pointer"
              >
                <p
                  className="font-bold"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  Contact
                </p>
                <div className="group-hover:w-full bg-primary w-0 transition-all duration-400 h-[1px]"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
