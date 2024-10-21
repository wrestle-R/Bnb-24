import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './assets/header';
import Shop from './assets/shop';
import Menu from './assets/menu';
import Events from './assets/event'; // Events page
import Contact from './assets/contact';
import Booking from './assets/bookatable'; // Booking page
import homeImg from './assets/images/home1.jpg';
import aboutImg from './assets/images/about.jpeg';
import Brewing from "./assets/images/brewing.jpeg";
import Roasting from "./assets/images/roasting.jpeg";
import Sourcing from "./assets/images/sourcing.jpeg";
import Signup from './assets/signup';
import Login from './assets/login';
import Chatbot from './assets/Chatbot.jsx';

const GoogleMapEmbed = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <h3 className="text-white text-4xl font-bold mb-4">Enkarra Coffee House Location</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.140292312578!2d72.82520742439163!3d19.101365951082386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7e9e92c2a4f%3A0x60cdbcb65051d7c5!2sYour%20Location!5e0!3m2!1sen!2sin!4v1632435158115!5m2!1sen!2sin"
        width="80%"
        height="512"
        className="rounded-3xl mt-10"
        allowFullScreen=""
        loading="lazy"
        title="Location Map"
      />
    </div>
  );
};

const App = () => {
  const [animate, setAnimate] = useState(false);
  const imageRef = useRef(null); // Create a ref for the image

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true); // Set animate to true when the image is in view
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    });

    if (imageRef.current) {
      observer.observe(imageRef.current); // Start observing the image
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current); // Cleanup observer on unmount
      }
    };
  }, []);

  return (
    <Router>
      <div className="w-full bg-black">
        {/* Full-width Header */}
        <Header />

        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              {/* Full-width Home Section with centered text */}
              <div className="relative w-full h-[85vh] bg-cover bg-center" style={{ backgroundImage: `url(${homeImg})` }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="flex flex-col items-center justify-center h-full p-8 relative z-10">
                  <div className="text-white text-3xl font-bold mb-4">
                    <p>ETTARRA COFFEE HOUSE</p>
                  </div>
                  <div className="text-2xl pb-4 pt-3 text-gray-200 font-medium">
                    Serving only the best since 2013
                  </div>
                  <button className="h-12 bg-white text-black font-semibold py-2 px-4 rounded-full hover:bg-gray-200 hover:shadow-lg transition duration-300">
                    <Link to="/menu">Menu</Link>
                  </button>
                </div>
              </div>

              {/* Coffee Philosophy Section */}
              <div className="flex justify-center items-center bg-black h-[75vh]">
                <div className="w-1/2 px-12">
                  <h2 className="text-white text-3xl font-extrabold mb-6">
                    Our Coffee Philosophy
                  </h2>
                  <p className="text-slate-100 text-base mb-6 leading-relaxed">
                    At Enkarra Coffee House, every cup of coffee tells a story, crafted from ethically sourced, single-origin beans. We partner with farmers committed to sustainable practices, ensuring our beans reflect their unique origins. Our roasting process enhances natural flavors, creating a rich experience. Join us in celebrating the joy and community that coffee brings with every sip.
                  </p>
                  <button className="h-12 bg-slate-200 text-black font-semibold py-2 px-4 rounded-full hover:bg-gray-400 hover:shadow-lg transition duration-300">
                    <Link to="/contact">Contact</Link>
                  </button>
                </div>
                <img 
                  ref={imageRef} // Attach the ref to the image
                  src={aboutImg} 
                  alt="Coffee Beans"  
                  className={`h-[50vh] w-1/2 object-cover mr-10 rounded-3xl transform transition-transform duration-700 ease-in-out ${animate ? 'translate-x-0' : 'translate-x-[-100%]'}`}
                />
              </div>

              {/* Brewing Steps Section */}
              <div className="bg-black py-10">
                <h2 className="text-center text-4xl font-bold text-white mb-20">Our Three Steps for the Perfect Brew</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                  {/* Sourcing Card */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden w-96 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <img src={Sourcing} alt="Sourcing" className="h-80 w-full object-cover" />
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-3">1. Sourcing</h3>
                      <p className="text-gray-600 mb-5">
                        We carefully select ethically sourced beans from sustainable farms, ensuring high quality while supporting farmers and promoting environmental stewardship.
                      </p>
                    </div>
                  </div>

                  {/* Roasting Card */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden w-96 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <img src={Roasting} alt="Roasting" className="h-80 w-full object-cover" />
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-3">2. Roasting</h3>
                      <p className="text-gray-600 mb-5">
                        Our beans are roasted in small batches, allowing for precise control that highlights their unique flavors and aromas in every cup.
                      </p>
                    </div>
                  </div>

                  {/* Brewing Card */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden w-96 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <img src={Brewing} alt="Brewing" className="h-80 w-full object-cover" />
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-3">3. Brewing</h3>
                      <p className="text-gray-600 mb-5">
                        Each cup is brewed with care and precision, using optimal techniques to deliver a flavorful and memorable coffee experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="mt-8 bg-black py-10">
                <h2 className="text-4xl font-bold text-gray-100 text-center mb-8">Customer Reviews</h2>
                <div className="flex flex-col items-center">
                  <div className="mb-4 max-w-md text-center">
                    <p className="text-gray-200">Absolutely love this place! The coffee is always fresh and flavorful, and the atmosphere is so inviting. My new go-to spot!</p>
                    <p className="text-gray-400 italic">- Alex D.</p>
                  </div>
                  <div className="mb-4 max-w-md text-center">
                    <p className="text-gray-200">The perfect blend of great coffee and a cozy environment! The staff is always friendly, and their pastries are to die for.</p>
                    <p className="text-gray-400 italic">- Sarah L.</p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <GoogleMapEmbed />
            </>
          } />

          {/* Other Routes */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>

        {/* Chatbot Component */}
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
