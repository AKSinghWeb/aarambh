import { useState } from 'react'
import Bar from '../assets/bar.png'

import { useSnackbar } from 'notistack'

const BookEvent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    eventDate: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  // Update form input values
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate form fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.guests ||
      !formData.eventDate ||
      !formData.message
    ) {
      enqueueSnackbar('Please fill all fields', { variant: 'error' })
      return
    }

    try {
      setIsSubmitting(true)

      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxbZZlID4pzBiQly_XvQCKjlPoSoV3StMnmi_L3sOx8OAfepRd86CfL538LQmJv1P1r/exec',
        {
          redirect: 'follow',
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
        }
      )

      if (!response.ok) {
        throw new Error('Failed to submit form data')
      }

      enqueueSnackbar('Thank You, We will contact you shortly!', {
        variant: 'success',
        autoHideDuration: 5000,
      })

      setIsSubmitting(false)

      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '',
        eventDate: '',
        message: '',
      })
    } catch (error) {
      console.error('Error submitting form data:', error)
      setIsSubmitting(false)
      enqueueSnackbar('Failed to submit, please try again!', {
        variant: 'error',
        autoHideDuration: 3000,
      })
    }
  }

  return (
    <div
      data-aos="fade-up"
      className="lg:py-20 bg-[#685044] relative p-10 mt-10  pb-20 md:px-10 max-lg:py-10"
    >
      <div className="pattern"></div>
      <h2 className="text-center text-3xl lg:text-5xl text-white font-bold lg:p-5">
        Enquire Now
      </h2>
      <div className="flex justify-center">
        <img src={Bar} className="md:w-[25%] w-[70%] mt-2 md:-mt-3" alt="" />
      </div>
      <div className="w-full relative z-10 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex font-bold flex-col gap-4 w-[500px] mt-8"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="bg-gray-100 p-2 border rounded-md"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="bg-gray-100 p-2 border rounded-md"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className="bg-gray-100 p-2 border rounded-md"
          />
          <input
            type="text"
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            placeholder="No. of Guests"
            className="bg-gray-100 p-2 border rounded-md"
          />
          <input
            type="text"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleInputChange}
            placeholder="Event Date"
            className="bg-gray-100 p-2 w-full text-black border rounded-md"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            className="bg-gray-100 p-2 border rounded-md"
          ></textarea>
          <button
            type="submit"
            className={`bg-primary text-white font-bold p-2 rounded-md ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookEvent
