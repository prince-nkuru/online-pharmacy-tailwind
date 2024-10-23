import React from 'react';
import email from '../assets/email.jpg'
import phone from '../assets/phone.jpg'
import location from '../assets/location.jpg'

function PhoneContact() {
  return (
    <section className='flex flex-row items-center justify-center mt-32'>
      {/* Phone Card */}
      <div className='w-60 h-60 bg-white rounded-lg shadow-lg m-4 p-4 flex flex-col items-center justify-center text-gray-800 border border-gray-300'>
        <img src={phone} alt="Phone" className='w-16 h-16 mb-2' />
        <h3 className='text-lg font-semibold'>Phone</h3>
        <p>(+25)0781351149</p>
      </div>

      {/* Email Card */}
      <div className='w-60 h-60 bg-white rounded-lg shadow-lg m-4 p-4 flex flex-col items-center justify-center text-gray-800 border border-gray-300'>
        <img src={email} alt="Email" className='w-16 h-16 mb-2' />
        <h3 className='text-lg font-semibold'>Email</h3>
        <p>nkuruprinces@gmail.com</p>
      </div>

      {/* Address Card */}
      <div className='w-60 h-60 bg-white rounded-lg shadow-lg m-4 p-4 flex flex-col items-center justify-center text-gray-800 border border-gray-300'>
        <img src= {location} alt="Address" className='w-16 h-16 mb-2 rounded-full' />
        <h3 className='text-lg font-semibold'>Address</h3>
        <p>Kicukiro, Kigali, Rwanda</p>
      </div>
    </section>
  );
}

export default PhoneContact;



{/* <h2 className='text-2xl font-extrabold'>Contact Us</h2> */}
            {/* <form className='flex flex-col justify-center items-center'>
                <input type="text" placeholder="Your Name" required className='max-w-96 border-2 p-3 mt-5' />
                <input type="email" placeholder="Your Email" required  className='max-w-96 border-2 p-3 mt-5'/>
                <textarea placeholder="Your Message" required className='min-w-96 border-2 p-3 mt-5' />
                <button type="submit" className='p-3 mb-4 mt-4 bg-green-600 border-none rounded hover:text-teal-300'>Send Message</button>
            </form> */}
