import React from 'react';
import ContactImg from './images/contactus.jpg';

const ContactUs = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Header Section with Background Image */}
      <header 
        className="relative bg-cover bg-center py-16 text-center h-[40vh]" 
        style={{ backgroundImage: `url(${ContactImg})` }}
      >
        {/* Overlay with a darker hue */}
        <div className="absolute inset-0 bg-black opacity-75"></div>
        
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          <p className="text-gray-200 mt-4 font-semibold text-lg">
            We would love to hear from you! Whether you have questions about our menu, events, or any other inquiries, feel free to reach out to us.
          </p>
        </div>
      </header>

      {/* Zomato Link */}
      <div className="mt-8 ml-12">
        <h2 className="text-lg font-semibold text-white">Check us out on Zomato!</h2>
        <a 
          href="http://zoma.to/r/20468935" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-yellow-500 hover:underline"
        >
          Visit our Zomato page
        </a>
      </div>

      {/* Main Contact Info Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row lg:space-x-10">
        {/* Left Contact Info */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-300 p-6 rounded-2xl shadow text-center">
              <i className="fas fa-phone-alt text-3xl text-red-500"></i>
              <h3 className="mt-4 text-lg font-semibold">Phone</h3>
              <p className="text-gray-600 mt-2">086558 05815</p>
            </div>
            <div className="bg-slate-300 p-6 rounded-2xl shadow text-center">
              <i className="fab fa-whatsapp text-3xl text-green-500"></i>
              <h3 className="mt-4 text-lg font-semibold">Whatsapp</h3>
              <p className="text-gray-600 mt-2">086558 05815</p>
            </div>
            <div className="bg-slate-300 p-6 rounded-2xl shadow text-center">
              <i className="fas fa-envelope text-3xl text-yellow-500"></i>
              <h3 className="mt-4 text-lg font-semibold">Email</h3>
              <p className="text-gray-600 mt-2">care@ettarracoffee.in</p>
            </div>
            <div className="bg-slate-300 p-6 rounded-2xl shadow text-center">
              <i className="fas fa-map-marker-alt text-3xl text-blue-500"></i>
              <h3 className="mt-4 text-lg font-semibold">Our Shop</h3>
              <p className="text-gray-600 mt-2">Ettarra Coffee House, Ground floor, Juhu residency, Mumbai, Maharashtra 400049</p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8">
            <iframe
              title="Google Map"
              className="w-full h-64 rounded"
              src="https://maps.google.com/maps?q=19.101360749184686,72.8273981168701&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <h2 className="text-3xl font-semibold text-white">Get In Touch</h2>
          <p className="text-white mt-2 mb-6">
            We're here to assist you with any questions or feedback. Your thoughts matter to us, and we aim to respond as promptly as possible.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded border border-gray-300 bg-slate-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded border border-gray-300 bg-slate-300"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded border border-gray-300 bg-slate-300"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 rounded border border-gray-300 bg-slate-300"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 text-white w-full py-4 rounded-lg hover:bg-yellow-600"
            >
              Send Now
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer style={{ backgroundColor: '#290202' }} className="text-white py-6">
          <div className="container mx-auto text-center">
            <p>Ettarra Coffee House, Ground floor, Juhu residency, Mumbai, Maharashtra 400049</p>
            <p>© 2022 Ettarra Coffee House</p>
          </div>
      </footer>


        
    </div>
  );
};

export default ContactUs;
