import 'animate.css'

import { useSnackbar } from 'notistack'
import { useState } from 'react'
const Modal = ({ isOpen, onClose }) => {
  const { enqueueSnackbar } = useSnackbar()

  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    // e.preventDefault()

    // Validate form fields
    if (!name) {
      enqueueSnackbar('Name should not be empty', { variant: 'error' })
      return
    }

    if (!phone || phone.length !== 10) {
      enqueueSnackbar('Phone number should be 10 digits', { variant: 'error' })
      return
    }

    console.log(phone)

    try {
      setIsSubmitting(true)

      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzztyCEiiatpCHn6recTKGP5_gIdfwY6ZHj-d4Q1yeruFJpeWMNKzcyFl2o5UIRio8LXw/exec',
        {
          redirect: 'follow',
          method: 'POST',
          body: JSON.stringify({ name: name, phone: phone }),
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
        }
      )

      if (!response.ok) {
        throw new Error('Failed to submit form data')
      }

      window.open('https://wa.me/918287181002', '_blank')

      setIsSubmitting(false)

      setPhone('')
    } catch (error) {
      console.error('Error submitting form data:', error)
      setIsSubmitting(false)
      enqueueSnackbar('Failed to submit, please try again!', {
        variant: 'error',
        autoHideDuration: 3000,
      })
    }
  }

  const overlayClasses = isOpen
    ? 'fixed  inset-0 bg-gray-950 bg-opacity-75  z-50'
    : 'hidden'
  const modalClasses = isOpen
    ? 'fixed  inset-0 flex items-center justify-center z-50'
    : 'hidden'

  return (
    <div
      style={{
        animation: 'zoomIn',
        animationDuration: '0.3s',
      }}
      className={overlayClasses}
    >
      <div
        style={{
          animationDuration: '1s',
        }}
        className={modalClasses}
      >
        <div className='bg-secondary relative rounded-lg p-8 shadow-md'>
          <div className='flex flex-col'>
            {/* <p className="pb-3 text-white font-semibold text-center text-lg">Enter your phone number</p> */}
            <input
              placeholder='Enter your name'
              type='text'
              onChange={(e) => setName(e.target.value)}
              className='border-0 placeholder-secondary text-black font-semibold mt-4 rounded-md bg-gray-300 border-primary focus:outline-none focus:border-secondary px-3 py-2'
            />
            <input
              placeholder='Enter your phone number'
              type='tel'
              onChange={(e) => setPhone(e.target.value)}
              className='border-0 placeholder-secondary text-black font-semibold mt-3 rounded-md bg-gray-300 border-primary focus:outline-none focus:border-secondary px-3 py-2'
            />
            <button
              onClick={handleSubmit}
              className={`bg-primary relative z-[60] mt-3 rounded-md p-2 font-semibold ${
                isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              {isSubmitting ? 'Please Wait...' : 'Submit'}
            </button>
          </div>
          <svg
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide absolute cursor-pointer text-red-400 top-4 right-4 lucide-circle-x'
          >
            <circle cx='12' cy='12' r='10' />
            <path d='m15 9-6 6' />
            <path d='m9 9 6 6' />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Modal
