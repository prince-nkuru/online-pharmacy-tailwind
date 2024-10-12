import React from 'react'

function PhoneContact() {
  return (
    <section className='flex flex-col items-center justify-center mt-4'>
            <h2 className='text-2xl font-extrabold'>Contact Us</h2>
            <form className='flex flex-col justify-center items-center'>
                <input type="text" placeholder="Your Name" required className='max-w-96 border-2 p-3 mt-5' />
                <input type="email" placeholder="Your Email" required  className='max-w-96 border-2 p-3 mt-5'/>
                <textarea placeholder="Your Message" required className='min-w-96 border-2 p-3 mt-5' />
                <button type="submit" className='p-3 mb-4 mt-4 bg-green-600 border-none rounded hover:text-teal-300'>Send Message</button>
            </form>
        </section>
  )
}

export default PhoneContact
